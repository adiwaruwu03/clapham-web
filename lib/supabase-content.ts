type BlogRow = {
  slug: string
  image_url: string
  category_id: string
  category_en: string
  title_id: string
  title_en: string
  excerpt_id: string
  excerpt_en: string
  author: string
  read_time: string
  published_date_display: string
  external_url: string | null
  blog_content_blocks?: Array<{ sort_order: number; content: string }>
  blog_key_takeaways?: Array<{ sort_order: number; content: string }>
  blog_related_topics?: Array<{ topic: string }>
}

type EventRow = {
  slug: string
  image_url: string
  name: string
  type: string
  impact: string
  date_display: string
  location: string
  description: string
  has_detail: boolean
  event_content_blocks?: Array<{ sort_order: number; content: string }>
  event_highlights?: Array<{ sort_order: number; content: string }>
  event_gallery_images?: Array<{ sort_order: number; image_url: string }>
  event_story_sections?: Array<{
    sort_order: number
    image_url: string
    title: string
    description: string
  }>
}

export type BlogArticle = {
  slug: string
  image: string
  category: { id: string; en: string }
  title: { id: string; en: string }
  excerpt: { id: string; en: string }
  date: string
  author: string
  readTime: string
  content: string[]
  keyTakeaways: string[]
  relatedTopics: string[]
  externalUrl?: string
}

export type EventData = {
  slug: string
  image: string
  name: string
  type: string
  impact: string
  date: string
  location: string
  description: string
  content: string[]
  highlights: string[]
  gallery: string[]
  storySections?: {
    image: string
    title: string
    description: string
  }[]
  hasDetail?: boolean
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

function ensureEnv() {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase environment variables are missing.")
  }
}

async function supabaseRestFetch<T>(path: string) {
  ensureEnv()

  const response = await fetch(`${supabaseUrl}/rest/v1/${path}`, {
    headers: {
      apikey: supabaseAnonKey!,
      Authorization: `Bearer ${supabaseAnonKey!}`,
      Accept: "application/json",
    },
    next: { revalidate: 60 },
  })

  if (!response.ok) {
    throw new Error(`Supabase request failed: ${response.status} ${response.statusText}`)
  }

  return (await response.json()) as T
}

function sortByOrder<T extends { sort_order: number }>(items?: T[]) {
  return [...(items ?? [])].sort((a, b) => a.sort_order - b.sort_order)
}

function mapBlog(row: BlogRow): BlogArticle {
  return {
    slug: row.slug,
    image: row.image_url,
    category: {
      id: row.category_id,
      en: row.category_en,
    },
    title: {
      id: row.title_id,
      en: row.title_en,
    },
    excerpt: {
      id: row.excerpt_id,
      en: row.excerpt_en,
    },
    date: row.published_date_display,
    author: row.author,
    readTime: row.read_time,
    content: sortByOrder(row.blog_content_blocks).map((item) => item.content),
    keyTakeaways: sortByOrder(row.blog_key_takeaways).map((item) => item.content),
    relatedTopics: (row.blog_related_topics ?? []).map((item) => item.topic),
    externalUrl: row.external_url ?? undefined,
  }
}

function mapEvent(row: EventRow): EventData {
  const storySections = sortByOrder(row.event_story_sections).map((item) => ({
    image: item.image_url,
    title: item.title,
    description: item.description,
  }))

  return {
    slug: row.slug,
    image: row.image_url,
    name: row.name,
    type: row.type,
    impact: row.impact,
    date: row.date_display,
    location: row.location,
    description: row.description,
    content: sortByOrder(row.event_content_blocks).map((item) => item.content),
    highlights: sortByOrder(row.event_highlights).map((item) => item.content),
    gallery: sortByOrder(row.event_gallery_images).map((item) => item.image_url),
    storySections: storySections.length > 0 ? storySections : undefined,
    hasDetail: row.has_detail,
  }
}

const blogSelect =
  "slug,image_url,category_id,category_en,title_id,title_en,excerpt_id,excerpt_en,author,read_time,published_date_display,external_url,blog_content_blocks(sort_order,content),blog_key_takeaways(sort_order,content),blog_related_topics(topic)"

const eventSelect =
  "slug,image_url,name,type,impact,date_display,location,description,has_detail,event_content_blocks(sort_order,content),event_highlights(sort_order,content),event_gallery_images(sort_order,image_url),event_story_sections(sort_order,image_url,title,description)"

export async function getAllBlogsFromSupabase() {
  const rows = await supabaseRestFetch<BlogRow[]>(
    `blogs?select=${encodeURIComponent(blogSelect)}&order=published_date_display.desc`
  )

  return rows.map(mapBlog)
}

export async function getBlogBySlugFromSupabase(slug: string) {
  const rows = await supabaseRestFetch<BlogRow[]>(
    `blogs?select=${encodeURIComponent(blogSelect)}&slug=eq.${encodeURIComponent(slug)}&limit=1`
  )

  return rows[0] ? mapBlog(rows[0]) : null
}

export async function getAllBlogSlugsFromSupabase() {
  const rows = await supabaseRestFetch<Array<{ slug: string }>>("blogs?select=slug")
  return rows.map((row) => row.slug)
}

export async function getAllEventsFromSupabase() {
  const rows = await supabaseRestFetch<EventRow[]>(
    `events?select=${encodeURIComponent(eventSelect)}&order=name.asc`
  )

  return rows.map(mapEvent)
}

export async function getEventBySlugFromSupabase(slug: string) {
  const rows = await supabaseRestFetch<EventRow[]>(
    `events?select=${encodeURIComponent(eventSelect)}&slug=eq.${encodeURIComponent(slug)}&limit=1`
  )

  return rows[0] ? mapEvent(rows[0]) : null
}

export async function getAllEventSlugsFromSupabase() {
  const rows = await supabaseRestFetch<Array<{ slug: string }>>("events?select=slug")
  return rows.map((row) => row.slug)
}
