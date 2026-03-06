import { Target, Layers, Settings, Handshake } from "lucide-react"

const strengths = [
  {
    icon: Target,
    title: "Desain Event Strategis",
    description:
      "Setiap event dirancang dengan tujuan yang jelas, bukan sekadar ramai.",
  },
  {
    icon: Layers,
    title: "Kurasi & Alur yang Kuat",
    description:
      "Konten, flow acara, dan pengalaman audiens disusun secara matang.",
  },
  {
    icon: Settings,
    title: "Eksekusi yang Andal",
    description:
      "Detail, timeline, dan teknis kami kelola dengan presisi.",
  },
  {
    icon: Handshake,
    title: "Kemitraan Kolaboratif",
    description:
      "Kami bekerja sebagai partner, bukan sekadar vendor.",
  },
]

export function StrengthsSection() {
  return (
    <section className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          What We{"'"}re Known For
        </p>

        <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
          Mengapa Memilih Kami
        </h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-2 hover:border-foreground/20 hover:shadow-xl"
            >
              {/* glow background */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-transparent via-secondary/20 to-transparent" />

              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <item.icon className="h-5 w-5" />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

