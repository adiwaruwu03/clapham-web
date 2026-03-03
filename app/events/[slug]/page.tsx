import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Users, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { eventsData, getEventBySlug } from "@/lib/events-data"

export function generateStaticParams() {
  return eventsData.map((event) => ({
    slug: event.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const event = getEventBySlug(slug)
  if (!event) return { title: "Event Not Found" }

  return {
    title: `${event.name} - Clapham Collective`,
    description: event.description,
  }
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const event = getEventBySlug(slug)

  if (!event) {
    notFound()
  }

  const currentIndex = eventsData.findIndex((e) => e.slug === slug)
  const relatedEvents = eventsData
    .filter((e) => e.slug !== slug)
    .slice(0, 3)

  return (
    <main className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link
            href="/#events"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Event
          </Link>
          <Link href="/" className="font-serif text-lg font-bold text-foreground">
            Clapham Collective
          </Link>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative h-[50vh] min-h-[400px] w-full md:h-[60vh]">
        <Image
          src={event.image}
          alt={event.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-12 lg:px-8">
            <span className="inline-block rounded-full bg-background/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground backdrop-blur-sm">
              {event.type}
            </span>
            <h1 className="mt-4 font-serif text-3xl font-bold text-background md:text-5xl lg:text-6xl text-balance">
              {event.name}
            </h1>
          </div>
        </div>
      </div>

      {/* Meta info bar */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-6 px-6 py-5 lg:gap-10 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{event.impact}</span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2">
            <p className="text-lg font-medium leading-relaxed text-foreground">
              {event.description}
            </p>

            <div className="mt-10 space-y-6">
              {event.content.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Gallery */}
            {event.gallery.length > 1 && (
              <div className="mt-16">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Galeri
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {event.gallery.map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-[3/2] overflow-hidden rounded-xl"
                    >
                      <Image
                        src={img}
                        alt={`${event.name} gallery ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Highlights card */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  Highlights
                </h3>
                <ul className="mt-4 space-y-3">
                  {event.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="rounded-xl bg-foreground p-6 text-background">
                <h3 className="font-serif text-lg font-bold">
                  Ingin event serupa?
                </h3>
                <p className="mt-2 text-sm leading-relaxed opacity-80">
                  Kami siap membantu merancang dan mengelola event yang berdampak untuk brand atau organisasi Anda.
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
      {/* Story Section */}
{event.storySections && (
  <section className="border-t border-border bg-muted/30 py-24">
    <div className="mx-auto max-w-5xl space-y-20 px-6 lg:px-8">
      {event.storySections.map((item, index) => (
        <div
          key={index}
          className="flex flex-col gap-8 md:flex-row md:items-start"
        >
          
          {/* Portrait Image */}
          <div className="relative aspect-[4/6] w-56 shrink-0 overflow-hidden rounded-2xl">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex-1">
            <h3 className="font-serif text-2xl font-bold text-foreground">
              {item.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-justify">
              {item.description}
            </p>
          </div>

        </div>
      ))}
    </div>
  </section>
)}
      
    </main>
  )
}
