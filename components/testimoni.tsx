"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Diyah Purworini",
    company: "Visitor",
    text: "A comfy and cozy place to work together, to do sharing sessions, seminars, workshops, press releases, etc. Because the location is inside a one-stop place mall complex, it makes it efficient for people who want to shop or have lunch/dinner after activities at Cohive Clapham.",
  },
  {
    name: "Jenny Lee",
    company: "Collaborator",
    text: "Thank you team Clapham! So glad to be working together. Uda helpful sekali 😊🙏",
  },
  {
    name: "Edward Sofian",
    company: "Client",
    text: "Senang bisa menyelenggarakan meeting kantor kami di Clapham. Selain vibe tempatnya nyaman dan proper, tim mereka seperti Kak Yuni dan Mas Haikal menyiapkan segala kebutuhan selama meeting dengan sangat baik.",
  },
  {
    name: "Econolab",
    company: "Organization",
    text: "Event ini menjadi salah satu event terbaik yang pernah kami hadiri selama Econolab hadir di Medan. Kami berharap akan ada conference lainnya yang dipersiapkan dengan sangat baik oleh tim Clapham untuk memunculkan inovasi dan ide baru bagi kota.",
  },
]

export function Testimoni() {
  const [loaded, setLoaded] = useState(false)

  // trigger animasi setelah mount
  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* TITLE */}
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Testimonials
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
            What People Say About Us
          </h2>
        </div>

        {/* GRID */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col rounded-xl border border-border bg-card p-5 text-center h-full
                          shadow-sm transition-transform transform hover:scale-105 hover:shadow-xl
                          ${
                            loaded
                              ? `opacity-100 translate-y-0 transition-all duration-700 delay-[${i * 150}ms]`
                              : "opacity-0 translate-y-5"
                          }`}
            >
              
              {/* STARS */}
              <div className="flex justify-center gap-1 mb-3 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>

              {/* TEXT */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                "{item.text}"
              </p>

              {/* AUTHOR */}
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {item.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {item.company}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}