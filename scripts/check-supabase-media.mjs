import fsSync from "node:fs"
import path from "node:path"

const projectRoot = process.cwd()

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

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error(
    [
      "Missing environment variables.",
      "Required:",
      "- NEXT_PUBLIC_SUPABASE_URL",
      "- SUPABASE_SERVICE_ROLE_KEY",
    ].join("\n")
  )
  process.exit(1)
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      apikey: SERVICE_ROLE_KEY,
      Accept: "application/json",
    },
  })

  if (!response.ok) {
    const message = await response.text()
    throw new Error(`Request failed: ${response.status} ${message}`)
  }

  return response.json()
}

function isLocalPath(value) {
  return typeof value === "string" && value.startsWith("/")
}

function printSection(title, rows) {
  console.log(`\n${title}: ${rows.length}`)
  for (const row of rows) {
    console.log(JSON.stringify(row))
  }
}

async function main() {
  const blogRows = await fetchJson(
    `${SUPABASE_URL}/rest/v1/blogs?select=slug,image_url`
  )
  const eventRows = await fetchJson(
    `${SUPABASE_URL}/rest/v1/events?select=slug,image_url`
  )
  const storyRows = await fetchJson(
    `${SUPABASE_URL}/rest/v1/event_story_sections?select=id,sort_order,image_url,event:events!inner(slug)`
  )

  const localBlogs = blogRows
    .filter((row) => isLocalPath(row.image_url))
    .map((row) => ({ slug: row.slug, image_url: row.image_url }))

  const localEvents = eventRows
    .filter((row) => isLocalPath(row.image_url))
    .map((row) => ({ slug: row.slug, image_url: row.image_url }))

  const localStorySections = storyRows
    .filter((row) => isLocalPath(row.image_url))
    .map((row) => ({
      slug: row.event?.slug ?? null,
      sort_order: row.sort_order,
      image_url: row.image_url,
    }))

  printSection("Blogs with local image paths", localBlogs)
  printSection("Events with local image paths", localEvents)
  printSection("Story sections with local image paths", localStorySections)

  const total = localBlogs.length + localEvents.length + localStorySections.length

  console.log(`\nTotal local-path rows: ${total}`)
  if (total === 0) {
    console.log("All checked media URLs already point to remote storage.")
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
