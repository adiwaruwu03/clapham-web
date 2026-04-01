"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import type { EventData } from "@/lib/supabase-content"

interface FeaturedMomentsProps {
  lang?: "id" | "en"
}

const featuredSlugs = [
  "above-and-beyond-open-house",
  "above-and-beyond-seminar-100",
  "clapham-conference-2025",
]

export function FeaturedMoments({ lang = "id" }: FeaturedMomentsProps) {
  const [events, setEvents] = useState<EventData[]>([])

  useEffect(() => {
    let active = true

    async function loadEvents() {
      const response = await fetch("/api/events")
      if (!response.ok) return

      const data = (await response.json()) as EventData[]
      if (active) {
        setEvents(data)
      }
    }

    loadEvents()

    return () => {
      active = false
    }
  }, [])

  const moments = events.filter((event) => featuredSlugs.includes(event.slug))

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {lang === "id" ? "Momen Terpilih" : "Featured Moments"}
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
          {lang === "id" ? "Event Kami" : "Our Events"}
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {moments.map((moment) => (
            <Link
              key={moment.slug}
              href={`/events/${moment.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={moment.image}
                  alt={moment.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex w-full items-center justify-between p-5">
                    <span className="text-sm font-medium text-background">
                      {lang === "id" ? "Baca Selengkapnya" : "Read More"}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-background" />
                  </div>
                </div>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground group-hover:underline">
                {moment.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {moment.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#events"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
          >
            {lang === "id" ? "Lihat Semua Event" : "View All Events"}
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
