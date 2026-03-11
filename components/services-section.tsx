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
title: "Konsultasi Kebutuhan",
description: "Mengidentifikasi kebutuhan, tujuan, serta skala kegiatan.",
},
{
number: "02",
title: "Perencanaan Konsep",
description: "Menyusun konsep kegiatan, alur, dan fasilitas yang diperlukan.",
},
{
number: "03",
title: "Koordinasi & Persiapan",
description: "Menyiapkan aspek teknis, jadwal, dan dukungan fasilitas.",
},
{
number: "04",
title: "Pelaksanaan Kegiatan",
description: "Memastikan kegiatan berjalan tertib, nyaman, dan sesuai rencana.",
},
{
number: "05",
title: "Tindak Lanjut & Evaluasi",
description: "Memberikan dokumentasi dan evaluasi untuk kualitas layanan.",
},
],
en: [
{
number: "01",
title: "Needs Consultation",
description: "Identify needs, objectives, and event scale.",
},
{
number: "02",
title: "Concept Planning",
description: "Design event concept, flow, and required facilities.",
},
{
number: "03",
title: "Coordination & Preparation",
description: "Prepare technical aspects, schedule, and support facilities.",
},
{
number: "04",
title: "Event Execution",
description: "Ensure events run smoothly, comfortably, and as planned.",
},
{
number: "05",
title: "Follow-up & Evaluation",
description: "Provide documentation and evaluation for service quality.",
},
],
}

export function ServicesSection({ lang }: ServicesSectionProps) {
const services = servicesData[lang]
const steps = stepsData[lang]

return ( <section id="services" className="bg-card  py-24"> <div className="mx-auto max-w-7xl px-6 lg:px-8">


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

      <div className="mt-16 flex items-start justify-between relative">

        {steps.map((step, i) => (
          <div key={step.number} className="flex flex-col items-center text-center flex-1 relative px-3">

            {i < steps.length - 1 && (
              <div className="absolute top-4 left-1/2 w-full h-px bg-gray-300" />
            )}

            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#2F6DB3]/10 text-[#2F6DB3] font-semibold">
              {step.number}
            </div>

            <h4 className="mt-4 text-sm font-semibold text-foreground">
              {step.title}
            </h4>

            <p className="mt-2 text-xs text-muted-foreground leading-relaxed max-w-[150px]">
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
