"use client"

import { Target, Layers, Settings, Handshake } from "lucide-react"

interface StrengthsSectionProps {
  lang: "id" | "en"
}

const strengthsData = {
  id: [
    { icon: Target, title: "Desain Event Strategis", description: "Setiap event dirancang dengan tujuan yang jelas, bukan sekadar ramai." },
    { icon: Layers, title: "Kurasi & Alur yang Kuat", description: "Konten, flow acara, dan pengalaman audiens disusun secara matang." },
    { icon: Settings, title: "Eksekusi yang Andal", description: "Detail, timeline, dan teknis kami kelola dengan presisi." },
    { icon: Handshake, title: "Kemitraan Kolaboratif", description: "Kami bekerja sebagai partner, bukan sekadar vendor." },
  ],
  en: [
    { icon: Target, title: "Strategic Event Design", description: "Every event is designed with clear goals, not just crowd-pleasing." },
    { icon: Layers, title: "Curated Flow & Structure", description: "Content, event flow, and audience experience are carefully crafted." },
    { icon: Settings, title: "Reliable Execution", description: "We manage details, timelines, and technical aspects with precision." },
    { icon: Handshake, title: "Collaborative Partnership", description: "We work as partners, not just vendors." },
  ],
}

export function StrengthsSection({ lang }: StrengthsSectionProps) {
  const strengths = strengthsData[lang]

  return (
    <section className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Title */}
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {lang === "id" ? "Yang Kami Tawarkan" : "What We're Known For"}
        </p>

        <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
          {lang === "id" ? "Mengapa Memilih Kami" : "Why Choose Us"}
        </h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="group relative overflow-hidden rounded-xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-2 hover:border-foreground/20 hover:shadow-xl">
                {/* Glow background */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-transparent via-secondary/20 to-transparent" />

                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}