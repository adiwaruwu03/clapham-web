"use client"

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

interface ServicesSectionProps {
  lang: "id" | "en"
}

const servicesData = {
  id: [
    { icon: Briefcase, title: "Manajemen Event Lengkap" },
    { icon: CalendarRange, title: "Manajemen Event Terpadu" },
    { icon: Users, title: "Manajemen Komunitas" },
    { icon: UtensilsCrossed, title: "Layanan F&B" },
    { icon: Mic2, title: "Talent & Speaker Management" },
    { icon: Camera, title: "Event Coverage" },
    { icon: Clapperboard, title: "Event Production" },
    { icon: ClipboardList, title: "Event Organizing" },
    { icon: Network, title: "Akses Jaringan Speaker & Mentor" },
    { icon: Megaphone, title: "PR, Promosi & Publikasi" },
  ],
  en: [
    { icon: Briefcase, title: "End-to-End Event Management" },
    { icon: CalendarRange, title: "Integrated Event Management" },
    { icon: Users, title: "Community Management" },
    { icon: UtensilsCrossed, title: "F&B Services" },
    { icon: Mic2, title: "Talent & Speaker Management" },
    { icon: Camera, title: "Event Coverage" },
    { icon: Clapperboard, title: "Event Production" },
    { icon: ClipboardList, title: "Event Organizing" },
    { icon: Network, title: "Speaker & Mentor Network Access" },
    { icon: Megaphone, title: "PR, Promotion & Publication" },
  ],
}

const stepsData = {
  id: [
    {
      number: "01",
      title: "Konsultasi Awal",
      description: "Kami menerima kebutuhan awal Anda dan memahami gambaran umum acara yang ingin diselenggarakan.",
    },
    {
      number: "02",
      title: "Konsultasi Kebutuhan",
      description: "Diskusi lebih lanjut untuk menggali detail acara, tujuan, serta ekspektasi yang ingin dicapai.",
    },
    {
      number: "03",
      title: "Penyusunan Penawaran / Proposal",
      description: "Kami menyiapkan proposal yang mencakup konsep, ruang lingkup layanan, serta estimasi biaya.",
    },
    {
      number: "04",
      title: "Konfirmasi Kerja Sama",
      description: "Setelah disetujui, kerja sama difinalisasi melalui agreement dan pembayaran awal.",
    },
    {
      number: "05",
      title: "Perencanaan & Persiapan",
      description: "Tim kami mulai menyiapkan seluruh kebutuhan acara secara terstruktur dan terkoordinasi.",
    },
    {
      number: "06",
      title: "Pelaksanaan Event",
      description: "Acara dijalankan sesuai rencana dengan pengawasan penuh dari tim kami.",
    },
    {
      number: "07",
      title: "Dokumentasi & Evaluasi",
      description: "Kami menyediakan dokumentasi serta melakukan evaluasi untuk peningkatan ke depannya.",
    },
  ],
  en: [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We receive your initial needs and understand the general overview of the event to be held.",
    },
    {
      number: "02",
      title: "Needs Consultation",
      description: "Further discussion to explore event details, objectives, and desired expectations.",
    },
    {
      number: "03",
      title: "Proposal Preparation",
      description: "We prepare a proposal covering the concept, scope of services, and cost estimation.",
    },
    {
      number: "04",
      title: "Collaboration Confirmation",
      description: "Once approved, the collaboration is finalized through an agreement and initial payment.",
    },
    {
      number: "05",
      title: "Planning & Preparation",
      description: "Our team begins preparing all event needs in a structured and coordinated manner.",
    },
    {
      number: "06",
      title: "Event Execution",
      description: "The event is carried out according to plan with full supervision from our team.",
    },
    {
      number: "07",
      title: "Documentation & Evaluation",
      description: "We provide documentation and conduct evaluations for future improvement.",
    },
  ],
}

export function ServicesSection({ lang }: ServicesSectionProps) {
  const services = servicesData[lang]
  const steps = stepsData[lang]

  return (
    <section id="services" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* TITLE */}
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {lang === "id" ? "Layanan Kami" : "Our Services"}
        </p>

        <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
          {lang === "id" ? "Layanan Kami" : "Our Services"}
        </h2>

        {/* SERVICES GRID */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">

          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="absolute right-0 top-0 h-full w-[4px] bg-gradient-to-b from-[#2F6DB3] to-blue-400 transition-all duration-500 group-hover:w-full opacity-90" />

              <div className="relative z-10 flex flex-col items-start gap-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2F6DB3]/10 text-[#2F6DB3]">
                  <service.icon className="h-5 w-5" />
                </div>

                <span className="text-sm font-medium leading-snug text-gray-800 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </span>

              </div>
            </div>
          ))}

        </div>

        {/* PROCESS */}
        <div className="mt-32">

          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {lang === "id" ? "Cara Kerja Kami" : "Our Process"}
          </p>

          <h3 className="mt-3 font-serif text-2xl font-bold text-foreground md:text-3xl">
            {lang === "id" ? "Cara Kerja Kami" : "Our Process"}
          </h3>

          {/* STEPS - RAPI SEPERTI CONTOH */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col">
                {/* NUMBER di atas title seperti contoh */}
                <span className="text-3xl font-bold text-[#2F6DB3]/30 mb-2">
                  {step.number}
                </span>
                {/* TITLE tebal */}
                <h4 className="text-base font-semibold text-foreground mb-2">
                  {step.title}
                </h4>
                {/* DESCRIPTION ringkas */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}