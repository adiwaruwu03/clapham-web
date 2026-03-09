export interface BlogArticle {
  slug: string
  image: string
  category: string
  title: string
  excerpt: string
  date: string
  author: string
  readTime: string
  content: string[]
  keyTakeaways: string[]
  relatedTopics: string[]
  externalUrl?: string
}

export const blogData: BlogArticle[] = [
  {
    slug: "persiapan-72-jam-sebelum-konferensi",
    image: "/images/bloger-5.webp",
    category: "Behind the Scenes",
    title: "Persiapan 72 Jam Sebelum Konferensi: Yang Tidak Terlihat",
    excerpt:
      "Bagaimana tim kami memastikan setiap detail sempurna menjelang hari-H sebuah konferensi berskala besar.",
    date: "21 nov 2025",
    author: "Tim Clapham Collective",
    readTime: "7 menit baca",
    content: [
      "Tiga hari sebelum konferensi besar dimulai, kebanyakan orang mungkin berpikir bahwa semua persiapan sudah selesai. Kenyataannya, 72 jam terakhir justru menjadi fase paling kritis dalam seluruh proses perencanaan event.",
      "Di Clapham Collective, kami menyebut fase ini sebagai 'The Final Sprint'. Ini bukan hanya soal mengecek checklist melainkan tentang mengantisipasi hal-hal yang tidak ada di checklist manapun.",
      "Hari pertama dari tiga hari terakhir biasanya dihabiskan untuk technical rehearsal lengkap. Setiap detik dari rundown dijalankan seperti hari-H yang sebenarnya.",
      "Hari kedua adalah hari koordinasi dengan semua vendor dan partner untuk walkthrough terakhir di venue.",
      "Hari terakhir sebelum event adalah tentang detail kecil yang membuat perbedaan besar.",
    ],
    keyTakeaways: [
      "Technical rehearsal penting sebelum event",
      "Koordinasi vendor harus dilakukan sebelum hari-H",
      "Detail kecil menentukan pengalaman peserta",
    ],
    relatedTopics: [
      "Event Planning",
      "Project Management",
      "Team Coordination",
    ],
  },

  {
    slug: "5-kesalahan-fatal-event-korporat",
    image: "/images/galeri-conf.webp",
    category: "Event Strategy",
    title: "5 Kesalahan Fatal dalam Merencanakan Event Korporat",
    excerpt:
      "Pelajaran dari lapangan tentang hal-hal yang sering diabaikan namun berdampak besar pada keberhasilan event.",
    date: "22 nov 2025",
    author: "Tim Clapham Collective",
    readTime: "8 menit baca",
    content: [
      "Setelah mengelola ratusan event korporat sejak 2016, kami telah menyaksikan pola kesalahan yang sering terjadi dalam perencanaan event.",
      "Kesalahan pertama adalah tidak memahami audiens dengan baik.",
      "Kesalahan kedua adalah meremehkan logistik.",
      "Kesalahan ketiga adalah mengabaikan pengalaman digital peserta.",
      "Kesalahan keempat adalah timeline yang tidak realistis.",
      "Kesalahan kelima adalah tidak mengukur keberhasilan event.",
    ],
    keyTakeaways: [
      "Riset audiens sangat penting",
      "Logistik harus direncanakan dengan matang",
      "Digital experience penting untuk event modern",
      "Gunakan timeline yang realistis",
    ],
    relatedTopics: [
      "Corporate Events",
      "Event Strategy",
      "Lessons Learned",
    ],
  },

  {
    slug: "event-terbaik-dimulai-dari-mendengarkan",
    image: "/images/bloger-2.webp",
    category: "Field Lessons",
    title: "Mengapa Event Terbaik Dimulai dari Mendengarkan",
    excerpt:
      "Filosofi kami dalam merancang event yang benar-benar bermakna bagi klien dan audiens.",
    date: "21 nov 2025",
    author: "Tim Clapham Collective",
    readTime: "6 menit baca",
    content: [
      "Di industri event management, langkah pertama yang paling penting adalah mendengarkan kebutuhan klien.",
      "Mendengarkan bukan hanya memahami brief, tetapi juga memahami konteks dan tujuan strategis di balik sebuah event.",
      "Dengan memahami kebutuhan sebenarnya, event dapat dirancang dengan lebih bermakna.",
      "Pendekatan ini telah menjadi filosofi utama dalam setiap proyek yang kami kerjakan.",
    ],
    keyTakeaways: [
      "Memahami kebutuhan klien adalah langkah awal",
      "Discovery session membantu menggali insight",
      "Event harus memiliki narrative yang kuat",
    ],
    relatedTopics: [
      "Client Relations",
      "Event Philosophy",
      "Strategic Planning",
    ],
  },

  // ===== MEDIA COVERAGE =====

  {
    slug: "festival-kewirausahaan-medan",
    image: "/images/2.avif",
    category: "Media Coverage",
    title: "Festival Kewirausahaan Medan Kembali Digelar",
    excerpt:
      "Festival Kewirausahaan Medan kembali digelar untuk mendorong pertumbuhan entrepreneur muda dan ekosistem bisnis di kota Medan.",
    date: "23 okt 2025",
    author: "Kabar Medan",
    readTime: "3 menit baca",
    externalUrl:
      "https://kabarmedan.com/festival-kewirausahaan-medan-kembali-digelar/",
    content: [],
    keyTakeaways: [],
    relatedTopics: ["Entrepreneurship", "Startup Ecosystem"],
  },

  {
    slug: "nextdev-telkomsel-medan",
    image: "/images/next-dev.jpg",
    category: "Media Coverage",
    title:
      "Telkomsel Hadirkan NextDev ke-11 di Kota Medan Dorong Technopreneurs Sumatera",
    excerpt:
      "Program NextDev dari Telkomsel hadir di Medan untuk mendorong inovasi digital berbasis AI bagi technopreneur muda.",
    date: "23 okt 2025",
    author: "Indonesia Aktual",
    readTime: "3 menit baca",
    externalUrl:
      "https://indonesiaaktual.com/2025/10/23/telkomsel-hadirkan-nextdev-tahun-ke-11-di-kota-medan-dorong-technopreneurs-sumatera-kembangkan-inovasi-digital-berbasis-ai/",
    content: [],
    keyTakeaways: [],
    relatedTopics: ["Technology", "Startup", "Innovation"],
  },

  {
  slug: "clapham-collective-media-coverage",
  image: "/images/blogfoto.webp",
  category: "Media Coverage",
  title: "Clapham Collective Mendukung Festival Kewirausahaan Medan",
  excerpt:
    "Clapham Collective menjadi ruang kolaborasi bagi komunitas entrepreneur di Medan dengan menyediakan coworking space, private office, dan event space modern.",
  date: "23 okt 2025",
  author: "Media Online",
  readTime: "3 menit baca",
  externalUrl:
    "https://share.google/omRmIJEFnKff9WoxW",
  content: [
    ],
  keyTakeaways: [],
  relatedTopics: ["Entrepreneurship", "Business Event", "Coworking Space"],
},
]

export function getBlogBySlug(slug: string): BlogArticle | undefined {
  return blogData.find((article) => article.slug === slug)
}