
import {
  CalendarRange,
  Users,
  UtensilsCrossed,
  Mic2,
  Camera,
  Clapperboard,
  ClipboardList,
  Network,
  Megaphone,
  Briefcase,
} from "lucide-react"

const services = [
  { icon: Briefcase, title: "End-to-End Event Management" },
  { icon: CalendarRange, title: "Manajemen Event Terpadu" },
  { icon: Users, title: "Manajemen Komunitas" },
  { icon: UtensilsCrossed, title: "Layanan F&B" },
  { icon: Mic2, title: "Talent & Speaker Management" },
  { icon: Camera, title: "Event Coverage" },
  { icon: Clapperboard, title: "Event Production" },
  { icon: ClipboardList, title: "Event Organizing" },
  { icon: Network, title: "Akses Jaringan Speaker & Mentor" },
  { icon: Megaphone, title: "PR Handling, Alat Promosi, & Platform Publikasi" },
]

const steps = [
  {
    number: "01",
    title: "Konsultasi Kebutuhan",
    description:
      "Mengidentifikasi kebutuhan, tujuan, serta skala kegiatan yang akan diselenggarakan.",
  },
  {
    number: "02",
    title: "Perencanaan Konsep",
    description:
      "Menyusun konsep kegiatan, alur pelaksanaan, serta penyesuaian fasilitas yang diperlukan.",
  },
  {
    number: "03",
    title: "Koordinasi & Persiapan",
    description:
      "Menyiapkan aspek teknis, pengaturan jadwal, serta dukungan fasilitas secara menyeluruh.",
  },
  {
    number: "04",
    title: "Pelaksanaan Kegiatan",
    description:
      "Mendukung dan memastikan kegiatan berjalan dengan tertib, nyaman, dan sesuai rencana.",
  },
  {
    number: "05",
    title: "Tindak Lanjut & Evaluasi",
    description:
      "Memberikan dokumentasi serta melakukan evaluasi untuk peningkatan kualitas layanan.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Our Services
        </p>

        <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
          Layanan Kami
        </h2>

        {/* SERVICES GRID */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col items-start gap-4 rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-2 hover:border-foreground/20 hover:shadow-xl"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <service.icon className="h-5 w-5" />
              </div>

              <span className="text-sm font-medium leading-snug text-foreground">
                {service.title}
              </span>
            </div>
          ))}
        </div>

        {/* PROCESS */}
        <div className="mt-32">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Our Process
          </p>

          <h3 className="mt-3 font-serif text-2xl font-bold text-foreground md:text-3xl">
            Cara Kerja Kami
          </h3>

          <div className="mt-16 grid gap-8 md:grid-cols-5">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {i < steps.length - 1 && (
                  <div className="absolute top-6 left-12 hidden h-px w-full bg-border md:block" />
                )}

                <div className="relative flex flex-col items-start">
                  <span className="font-serif text-4xl font-bold text-foreground/10">
                    {step.number}
                  </span>

                  <h4 className="mt-2 text-base font-semibold text-foreground">
                    {step.title}
                  </h4>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

