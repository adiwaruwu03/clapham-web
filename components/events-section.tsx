"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { EventData } from "@/lib/supabase-content"

// Teks bilingual
const texts = {
  id: {
    recentEvents: "Event Terbaru",
    ourEvents: "Event Kami",
    showAll: "Lihat Semua Event",
    close: "Tutup Event",
    filters: ["Semua", "Seminar & Conference", "Brand Activation", "Gathering", "Workshop", "Community Event"]
  },
  en: {
    recentEvents: "Recent Events",
    ourEvents: "Our Events",
    showAll: "Show All Events",
    close: "Close Events",
    filters: ["All", "Seminar & Conference", "Brand Activation", "Gathering", "Workshop", "Community Event"]
  }
}

const pinnedFirstRowSlugs = [
  "above-and-beyond-open-house",
  "clapham-conference-2025",
  "above-and-beyond-seminar-100",
]

// TypeScript props
type EventsSectionProps = {
  lang?: "id" | "en"
}

function getTimestamp(event: EventData) {
  if (!event.createdAt) return 0

  const parsed = Date.parse(event.createdAt)
  return Number.isNaN(parsed) ? 0 : parsed
}

function moveEventToIndex(events: EventData[], slug: string, targetIndex: number) {
  const currentIndex = events.findIndex((event) => event.slug === slug)
  if (currentIndex === -1) return events

  const nextEvents = [...events]
  const [selectedEvent] = nextEvents.splice(currentIndex, 1)
  const safeIndex = Math.max(0, Math.min(targetIndex, nextEvents.length))
  nextEvents.splice(safeIndex, 0, selectedEvent)

  return nextEvents
}

function orderPinnedEventsFirst(events: EventData[]) {
  const pinnedEvents = pinnedFirstRowSlugs
    .map((slug) => events.find((event) => event.slug === slug))
    .filter((event): event is EventData => Boolean(event))

  const pinnedSlugs = new Set(pinnedEvents.map((event) => event.slug))
  const remainingEvents = events.filter((event) => !pinnedSlugs.has(event.slug))

  return [...pinnedEvents, ...remainingEvents]
}

export function EventsSection({ lang = "id" }: EventsSectionProps) {
  const [events, setEvents] = useState<EventData[]>([])
  const [active, setActive] = useState<string | null>(null) // initial null biar semua muncul
  const [showAll, setShowAll] = useState(false)

  // pastikan default active sesuai bahasa
  useEffect(() => {
    setActive(texts[lang].filters[0])
  }, [lang])

  useEffect(() => {
    let activeRequest = true

    async function loadEvents() {
      const response = await fetch("/api/events")
      if (!response.ok) return

      const data = (await response.json()) as EventData[]
      if (activeRequest) {
        setEvents(data)
      }
    }

    loadEvents()

    return () => {
      activeRequest = false
    }
  }, [])

  // Filter event: jika active = "Semua" atau null, tampilkan semua
  const newestEvent = [...events].sort((a, b) => getTimestamp(b) - getTimestamp(a))[0]
  const isAllFilter = !active || active === texts[lang].filters[0]

  const filtered = isAllFilter
    ? newestEvent && getTimestamp(newestEvent) > 0
      ? moveEventToIndex(events, newestEvent.slug, 3)
      : events
    : (() => {
        const matchingEvents = events.filter((e) => e.type?.trim() === active.trim())
        const newestMatchingEvent = [...matchingEvents].sort(
          (a, b) => getTimestamp(b) - getTimestamp(a)
        )[0]

        if (!newestMatchingEvent || getTimestamp(newestMatchingEvent) === 0) {
          return matchingEvents
        }

        return moveEventToIndex(matchingEvents, newestMatchingEvent.slug, 0)
      })()

  const orderedEvents = isAllFilter ? orderPinnedEventsFirst(filtered) : filtered
  const displayed = showAll ? orderedEvents : orderedEvents.slice(0, 9)

  return (
    <section id="events" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Label Recent Events */}
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {texts[lang].recentEvents}
        </p>

        {/* Judul Section */}
        <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
          {texts[lang].ourEvents}
        </h2>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {texts[lang].filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActive(filter)
                setShowAll(false)
              }}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                active === filter
                  ? "bg-foreground text-background"
                  : "bg-secondary text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:mt-12 md:grid-cols-3 md:gap-8">
          {displayed.map((event) => {
            const Card = (
              <div className="group h-full overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      event.hasDetail ? "group-hover:scale-105" : ""
                    }`}
                  />

                  <div className="absolute top-2 left-2 md:top-4 md:left-4">
                    <span className="rounded-full bg-background/90 px-2 py-0.5 text-[9px] font-medium text-foreground backdrop-blur-sm md:px-3 md:py-1 md:text-xs">
                      {event.type}
                    </span>
                  </div>

                  {event.hasDetail && (
                    <div className="absolute right-4 bottom-4 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4 text-foreground" />
                    </div>
                  )}
                </div>

                <div className="p-3 md:p-6">
                  <h3 className="line-clamp-1 text-sm font-semibold text-foreground group-hover:underline md:text-lg">
                    {event.name}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-[10px] text-muted-foreground md:mt-2 md:text-sm">
                    {event.impact || event.description}
                  </p>
                </div>
              </div>
            )

            return event.hasDetail ? (
              <Link key={event.slug} href={`/events/${event.slug}`}>
                {Card}
              </Link>
            ) : (
              <div key={event.slug} className="h-full">{Card}</div>
            )
          })}
        </div>

        {/* Button Show More */}
        {filtered.length > 9 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition hover:bg-accent"
            >
              {showAll ? texts[lang].close : texts[lang].showAll}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
