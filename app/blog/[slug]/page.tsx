import { notFound, redirect } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { blogData, getBlogBySlug } from "@/lib/blog-data"

export function generateStaticParams() {
  return blogData.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getBlogBySlug(slug)
  if (!article) return { title: "Artikel Tidak Ditemukan" }

  return {
    title: `${article.title} - Clapham Collective`,
    description: article.excerpt,
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getBlogBySlug(slug)

  if (!article) {
    notFound()
  }

  // 🔥 INI YANG MEMPERBAIKI MASALAH
  if (article.externalUrl) {
    redirect(article.externalUrl)
  }

  const relatedArticles = blogData.filter((a) => a.slug !== slug)

  return (
    <main className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Insight
          </Link>
          <Link
            href="/"
            className="font-serif text-lg font-bold text-foreground"
          >
            Clapham Collective
          </Link>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative h-[45vh] min-h-[360px] w-full md:h-[55vh]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-4xl px-6 pb-12 lg:px-8">
            <span className="inline-block rounded-full bg-background/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground backdrop-blur-sm">
              {article.category}
            </span>
            <h1 className="mt-4 font-serif text-3xl font-bold text-background md:text-4xl lg:text-5xl text-balance">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Meta info bar */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-4xl flex-wrap gap-6 px-6 py-5 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{article.readTime}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Tag className="h-4 w-4" />
            <span>{article.date}</span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2">
            <p className="text-lg font-medium leading-relaxed text-foreground">
              {article.excerpt}
            </p>

            <div className="mt-10 mt-4 text-base leading-relaxed text-muted-foreground text-justify">
              {article.content.map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  Poin Penting
                </h3>
                <ul className="mt-4 space-y-3">
                  {article.keyTakeaways.map((takeaway, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
                        {i + 1}
                      </span>
                      {takeaway}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  Topik Terkait
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {article.relatedTopics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-foreground p-6 text-background">
                <h3 className="font-serif text-lg font-bold">
                  Konsultasi Gratis
                </h3>
                <p className="mt-2 text-sm leading-relaxed opacity-80">
                  Punya pertanyaan tentang event management? Tim kami siap
                  membantu Anda merancang event yang berdampak.
                </p>
                <Button
                  asChild
                  variant="secondary"
                  className="mt-4 w-full rounded-full"
                >
                  <Link href="/#contact">Hubungi Kami</Link>
                </Button>
              </div>

            </div>
          </aside>
        </div>
      </article>
    </main>
  )
}