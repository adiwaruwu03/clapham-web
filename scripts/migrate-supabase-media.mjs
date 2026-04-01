import fs from "node:fs/promises"
import fsSync from "node:fs"
import path from "node:path"
import vm from "node:vm"

const projectRoot = process.cwd()
const publicDir = path.join(projectRoot, "public")

function readEnvFile(filePath, { overwrite = false } = {}) {
  try {
    const content = fsSync.readFileSync(filePath, "utf8")
    for (const line of content.split(/\r?\n/)) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith("#")) continue

      const eqIndex = trimmed.indexOf("=")
      if (eqIndex === -1) continue

      const key = trimmed.slice(0, eqIndex).trim()
      let value = trimmed.slice(eqIndex + 1).trim()

      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1)
      }

      if (overwrite || !(key in process.env)) {
        process.env[key] = value
      }
    }
  } catch {
    // Ignore missing env files.
  }
}

readEnvFile(path.join(projectRoot, ".env.local"))
readEnvFile(path.join(projectRoot, ".env.migrate.local"), { overwrite: true })

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
const BUCKET = process.env.SUPABASE_STORAGE_BUCKET || "media"

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error(
    [
      "Missing environment variables.",
      "Required:",
      "- NEXT_PUBLIC_SUPABASE_URL",
      "- SUPABASE_SERVICE_ROLE_KEY",
      "Optional:",
      "- SUPABASE_STORAGE_BUCKET (default: media)",
    ].join("\n")
  )
  process.exit(1)
}

function extractArrayLiteral(source, exportName) {
  const start = source.indexOf(`export const ${exportName}`)
  if (start === -1) {
    throw new Error(`Could not find export ${exportName}`)
  }

  const equalsIndex = source.indexOf("=", start)
  if (equalsIndex === -1) {
    throw new Error(`Could not find assignment for ${exportName}`)
  }

  const arrayStart = source.indexOf("[", equalsIndex)
  if (arrayStart === -1) {
    throw new Error(`Could not find array start for ${exportName}`)
  }

  let depth = 0
  let inSingle = false
  let inDouble = false
  let inTemplate = false
  let prev = ""

  for (let i = arrayStart; i < source.length; i += 1) {
    const char = source[i]

    if (!inDouble && !inTemplate && char === "'" && prev !== "\\") {
      inSingle = !inSingle
    } else if (!inSingle && !inTemplate && char === '"' && prev !== "\\") {
      inDouble = !inDouble
    } else if (!inSingle && !inDouble && char === "`" && prev !== "\\") {
      inTemplate = !inTemplate
    } else if (!inSingle && !inDouble && !inTemplate) {
      if (char === "[") depth += 1
      if (char === "]") {
        depth -= 1
        if (depth === 0) {
          return source.slice(arrayStart, i + 1)
        }
      }
    }

    prev = char
  }

  throw new Error(`Could not isolate array for ${exportName}`)
}

async function loadDataArray(relativePath, exportName) {
  const absolutePath = path.join(projectRoot, relativePath)
  const source = await fs.readFile(absolutePath, "utf8")
  const literal = extractArrayLiteral(source, exportName)
  const context = {}
  vm.createContext(context)
  vm.runInContext(`${exportName} = ${literal}`, context, { timeout: 10000 })
  return context[exportName]
}

function localPathToStoragePath(localPath) {
  return localPath.replace(/^\/+/, "")
}

async function ensureLocalFileExists(localPath) {
  const relative = localPath.replace(/^\/+/, "")
  const absolute = path.join(publicDir, relative)
  await fs.access(absolute)
  return absolute
}

async function uploadFile(localPath) {
  const absolute = await ensureLocalFileExists(localPath)
  const storagePath = localPathToStoragePath(localPath)
  const buffer = await fs.readFile(absolute)
  const uploadUrl = `${SUPABASE_URL}/storage/v1/object/${BUCKET}/${encodeURIComponent(storagePath).replace(/%2F/g, "/")}`

  const response = await fetch(uploadUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      apikey: SERVICE_ROLE_KEY,
      "x-upsert": "true",
      "Content-Type": "application/octet-stream",
    },
    body: buffer,
  })

  if (!response.ok) {
    const message = await response.text()
    throw new Error(`Upload failed for ${localPath}: ${response.status} ${message}`)
  }

  return `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${storagePath}`
}

async function fetchJson(url, init) {
  const response = await fetch(url, init)
  if (!response.ok) {
    const message = await response.text()
    throw new Error(`Request failed: ${response.status} ${message}`)
  }

  if (response.status === 204) {
    return null
  }

  return response.json()
}

async function patchRows(table, filters, payload) {
  const params = new URLSearchParams()
  for (const [key, value] of Object.entries(filters)) {
    params.set(key, `eq.${value}`)
  }

  const url = `${SUPABASE_URL}/rest/v1/${table}?${params.toString()}`
  await fetchJson(url, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      apikey: SERVICE_ROLE_KEY,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(payload),
  })
}

async function getStorySectionIdsBySlug() {
  const params = new URLSearchParams({
    select: "slug,event_story_sections(id,sort_order,image_url)",
  })
  const url = `${SUPABASE_URL}/rest/v1/events?${params.toString()}`
  const rows = await fetchJson(url, {
    headers: {
      Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      apikey: SERVICE_ROLE_KEY,
    },
  })

  const map = new Map()
  for (const row of rows ?? []) {
    map.set(
      row.slug,
      (row.event_story_sections ?? []).map((item) => ({
        id: item.id,
        sort_order: item.sort_order,
        image_url: item.image_url,
      }))
    )
  }
  return map
}

async function main() {
  console.log(`Using bucket: ${BUCKET}`)

  const [blogData, eventsData] = await Promise.all([
    loadDataArray("lib/blog-data.ts", "blogData"),
    loadDataArray("lib/events-data.ts", "eventsData"),
  ])

  const uploadCache = new Map()
  const stats = {
    uploaded: 0,
    blogImagesUpdated: 0,
    eventImagesUpdated: 0,
    storyImagesUpdated: 0,
  }

  async function getPublicUrl(localPath) {
    if (!uploadCache.has(localPath)) {
      const uploadPromise = uploadFile(localPath)
      uploadCache.set(localPath, uploadPromise)
    }
    return uploadCache.get(localPath)
  }

  console.log(`Uploading and updating ${blogData.length} blog images...`)
  for (const article of blogData) {
    const publicUrl = await getPublicUrl(article.image)
    await patchRows("blogs", { slug: article.slug }, { image_url: publicUrl })
    stats.blogImagesUpdated += 1
  }

  console.log(`Uploading and updating ${eventsData.length} event cover images...`)
  for (const event of eventsData) {
    const publicUrl = await getPublicUrl(event.image)
    await patchRows("events", { slug: event.slug }, { image_url: publicUrl })
    stats.eventImagesUpdated += 1
  }

  const storySectionMap = await getStorySectionIdsBySlug()
  console.log("Uploading and updating event story section images...")
  for (const event of eventsData) {
    const remoteSections = storySectionMap.get(event.slug) ?? []
    const remoteByOrder = new Map(
      remoteSections.map((section) => [section.sort_order, section])
    )

    for (const [index, section] of (event.storySections ?? []).entries()) {
      const remote = remoteByOrder.get(index)
      if (!remote) {
        throw new Error(
          `Missing story section row in Supabase for event "${event.slug}" at sort_order ${index}`
        )
      }

      const publicUrl = await getPublicUrl(section.image)
      await patchRows("event_story_sections", { id: remote.id }, { image_url: publicUrl })
      stats.storyImagesUpdated += 1
    }
  }

  stats.uploaded = uploadCache.size

  console.log("Migration complete.")
  console.log(JSON.stringify(stats, null, 2))
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})

