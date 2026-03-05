"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { eventsData } from "@/lib/events-data"

const filters = [
  "Semua",
  "Seminar & Conference",
  "Brand Activation",
  "Gathering",
  "Workshop",
  "Community Event",
]

export function EventsSection() {
  const [active, setActive] = useState("Semua")
  const [showAll, setShowAll] = useState(false)

  const filtered =
    active === "Semua"
      ? eventsData
      : eventsData.filter((e) => e.type === active)

  // tampilkan hanya 9 jika showAll false
  const displayed = showAll ? filtered : filtered.slice(0, 9)

  return (
    <section id="events" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Recent Events
        </p>

        <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
          Event Kami
        </h2>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((filter) => (
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
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayed.map((event) => {
            const Card = (
              <div className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      event.hasDetail ? "group-hover:scale-105" : ""
                    }`}
                  />

                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                      {event.type}
                    </span>
                  </div>

                  {event.hasDetail && (
                    <div className="absolute right-4 bottom-4 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4 text-foreground" />
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground group-hover:underline">
                    {event.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {event.impact}
                  </p>
                </div>
              </div>
            )

            return event.hasDetail ? (
              <Link key={event.slug} href={`/events/${event.slug}`}>
                {Card}
              </Link>
            ) : (
              <div key={event.slug}>{Card}</div>
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
              {showAll ? "Tutup Event" : "Lihat Semua Event"}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}