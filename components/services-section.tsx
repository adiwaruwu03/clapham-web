"use client"

import {
  Users,
  UtensilsCrossed,
  Mic2,
  Camera,
  Clapperboard,
  ClipboardList,
  Network,
  Megaphone,
  Briefcase,
  CalendarRange,
  Layout,
  Star,
  Share2,
  Heart,
  Target,
  Coffee,
} from "lucide-react"

interface ServicesSectionProps {
  lang: "id" | "en"
}

// Data layanan - BAHASA INDONESIA
const servicesDataId = [
  {
    icon: Briefcase,
    title: "Manajemen Event",
    items: [
      "Pengembangan konsep dan tema acara",
      "Penyusunan timeline dan project plan",
      "Perencanaan dan kontrol anggaran",
      "Koordinasi vendor dan stakeholder",
      "Manajemen registrasi peserta",
      "Supervisi keseluruhan event",
      "Evaluasi dan reporting pasca-event",
    ],
  },
  {
    icon: Clapperboard,
    title: "Produksi Event",
    items: [
      "Stage design dan setup",
      "Sound system dan lighting",
      "LED screen dan multimedia",
      "Technical production planning",
      "Setup dan technical rehearsal",
      "On-site technical support",
    ],
  },
  {
    icon: ClipboardList,
    title: "Penyelenggaraan Event",
    items: [
      "Penyusunan rundown acara",
      "Pengaturan flow dan alur acara",
      "Manajemen registrasi dan check-in",
      "Koordinasi crew dan volunteer",
      "Pengelolaan tamu dan peserta",
      "Eksekusi operasional di hari H",
    ],
  },
  {
    icon: Mic2,
    title: "Management Pembicara & Talenta",
    items: [
      "Kurasi dan rekomendasi speaker/talent",
      "Akses ke jaringan profesional dan praktisi",
      "Koordinasi jadwal dan kebutuhan",
      "Briefing dan alignment materi",
      "Pengelolaan kontrak dan administrasi",
      "Hospitality untuk speaker dan talent",
    ],
  },
  {
    icon: Camera,
    title: "Dokumentasi Event",
    items: [
      "Fotografi event",
      "Videografi event",
      "Highlight video",
      "Konten untuk media sosial",
      "Editing dan post-production",
    ],
  },
  {
    icon: Megaphone,
    title: "Humas & Promosi Event",
    items: [
      "Strategi promosi event",
      "Campaign media sosial",
      "Media partnership",
      "Press release dan publikasi media",
      "Aktivasi digital marketing",
      "Audience engagement strategy",
    ],
  },
  {
    icon: Users,
    title: "Program Komunitas & Keterlibatan Audiens",
    items: [
      "Strategi pengembangan komunitas",
      "Aktivasi komunitas melalui program/event",
      "Engagement dan komunikasi audiens",
      "Pengelolaan database peserta",
      "Retention dan loyalty program",
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Layanan Makanan & Minuman",
    items: [
      "Coffee break dan snack",
      "Catering untuk event",
      "Booth F&B",
      "Custom menu sesuai konsep acara",
      "Koordinasi vendor F&B",
    ],
  },
]

// Data layanan - BAHASA INGGRIS
const servicesDataEn = [
  {
    icon: Briefcase,
    title: "Event Management",
    items: [
      "Concept and theme development",
      "Timeline and project plan preparation",
      "Budget planning and control",
      "Vendor and stakeholder coordination",
      "Participant registration management",
      "Overall event supervision",
      "Post-event evaluation and reporting",
    ],
  },
  {
    icon: Clapperboard,
    title: "Event Production",
    items: [
      "Stage design and setup",
      "Sound system and lighting",
      "LED screen and multimedia",
      "Technical production planning",
      "Setup and technical rehearsal",
      "On-site technical support",
    ],
  },
  {
    icon: ClipboardList,
    title: "Event Organizing",
    items: [
      "Event rundown preparation",
      "Event flow management",
      "Registration and check-in management",
      "Crew and volunteer coordination",
      "Guest and participant management",
      "D-day operational execution",
    ],
  },
  {
    icon: Mic2,
    title: "Talent & Speaker Management",
    items: [
      "Speaker/talent curation and recommendation",
      "Access to professional and practitioner network",
      "Schedule and requirements coordination",
      "Briefing and material alignment",
      "Contract and administration management",
      "Speaker and talent hospitality",
    ],
  },
  {
    icon: Camera,
    title: "Event Documentation",
    items: [
      "Event photography",
      "Event videography",
      "Highlight video",
      "Social media content",
      "Editing and post-production",
    ],
  },
  {
    icon: Megaphone,
    title: "PR & Event Promotion",
    items: [
      "Event promotion strategy",
      "Social media campaign",
      "Media partnership",
      "Press release and media publication",
      "Digital marketing activation",
      "Audience engagement strategy",
    ],
  },
  {
    icon: Users,
    title: "Community & Audience Engagement Programs",
    items: [
      "Community development strategy",
      "Community activation through programs/events",
      "Audience engagement and communication",
      "Participant database management",
      "Retention and loyalty program",
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Beverage Services",
    items: [
      "Coffee break and snack",
      "Event catering",
      "F&B booth",
      "Custom menu according to event concept",
      "F&B vendor coordination",
    ],
  },
]

// Steps Data - BAHASA INDONESIA
const stepsDataId = [
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
]

// Steps Data - BAHASA INGGRIS
const stepsDataEn = [
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
]

export function ServicesSection({ lang }: ServicesSectionProps) {
  const services = lang === "id" ? servicesDataId : servicesDataEn
  const steps = lang === "id" ? stepsDataId : stepsDataEn

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

        {/* DESCRIPTION TEXT */}
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          {lang === "id" 
            ? "Kami menyediakan solusi event end-to-end yang dirancang untuk memberikan pengalaman yang berdampak, lancar, dan berkesan."
            : "We provide end-to-end event solutions designed to deliver impactful, seamless, and memorable experiences."
          }
        </p>

        {/* SERVICES CARDS - 8 CARD SESUAI KATEGORI */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Gradient Border */}
              <div className="absolute right-0 top-0 h-full w-[4px] bg-gradient-to-b from-[#2F6DB3] to-blue-400 transition-all duration-500 group-hover:w-full opacity-90" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2F6DB3]/10 text-[#2F6DB3] mb-3">
                  <service.icon className="h-5 w-5" />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-foreground mb-3 leading-tight">
                  {service.title}
                </h3>

                {/* List Items */}
                <ul className="space-y-1.5">
                  {service.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-1.5">
                      <span className="text-[#2F6DB3] text-xs group-hover:text-white/80 mt-0.5">•</span>
                      <span className="text-xs text-muted-foreground group-hover:text-white transition-colors duration-300 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* PROCESS - CARD STYLE DENGAN CENTER UNTUK BARIS TERAKHIR */}
        <div className="mt-32">

          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {lang === "id" ? "Cara Kerja Kami" : "Our Process"}
          </p>

          <h3 className="mt-3 font-serif text-2xl font-bold text-foreground md:text-3xl">
            {lang === "id" ? "Cara Kerja Kami" : "Our Process"}
          </h3>

          {/* STEPS - Menggunakan flexbox dengan justify center untuk simetri */}
          <div className="mt-16 flex flex-wrap justify-center gap-5">
            {steps.map((step) => (
              <div 
                key={step.number} 
                className="group relative p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 overflow-hidden w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] xl:w-[calc(25%-15px)]"
              >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#2F6DB3]/10 to-transparent rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-blue-400/5 to-transparent rounded-full -ml-6 -mb-6 group-hover:scale-150 transition-transform duration-500 delay-100" />
                
                <div className="relative z-10">
                  {/* Number */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2F6DB3] text-white font-bold text-base shadow-md mb-3 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                    {step.number}
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-sm font-bold text-foreground mb-1.5 group-hover:text-[#2F6DB3] transition-colors duration-300">
                    {step.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed">
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