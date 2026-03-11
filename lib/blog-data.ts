export interface BlogArticle {
  slug: string
  image: string

  category: {
    id: string
    en: string
  }

  title: {
    id: string
    en: string
  }

  excerpt: {
    id: string
    en: string
  }

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
    slug: "festival-kewirausahaan-medan",
    image: "/images/2.avif",

    category: {
      id: "Liputan Media",
      en: "Media Coverage",
    },

    title: {
      id: "Festival Kewirausahaan Medan Kembali Digelar",
      en: "Medan Entrepreneurship Festival Returns",
    },

    excerpt: {
      id: "Festival Kewirausahaan Medan kembali digelar untuk mendorong pertumbuhan entrepreneur muda dan ekosistem bisnis di kota Medan.",
      en: "The Medan Entrepreneurship Festival returns to encourage the growth of young entrepreneurs and the business ecosystem in Medan.",
    },

    date: "25 Januari 2018",
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

    category: {
      id: "Liputan Media",
      en: "Media Coverage",
    },

    title: {
      id: "Telkomsel Hadirkan NextDev ke-11 di Kota Medan",
      en: "Telkomsel Brings the 11th NextDev to Medan",
    },

    excerpt: {
      id: "Program NextDev dari Telkomsel hadir di Medan untuk mendorong inovasi digital berbasis AI bagi technopreneur muda.",
      en: "Telkomsel’s NextDev program arrives in Medan to encourage AI-based digital innovation among young technopreneurs.",
    },

    date: "23 Okt 2025",
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

    category: {
      id: "Liputan Media",
      en: "Media Coverage",
    },

    title: {
      id: "Clapham Collective Mendukung Festival Kewirausahaan Medan",
      en: "Clapham Collective Supports the Medan Entrepreneurship Festival",
    },

    excerpt: {
      id: "Clapham Collective menjadi ruang kolaborasi bagi komunitas entrepreneur di Medan dengan coworking space dan event space modern.",
      en: "Clapham Collective becomes a collaboration space for entrepreneurs in Medan with modern coworking and event spaces.",
    },

    date: "23 Okt 2025",
    author: "Media Online",
    readTime: "3 menit baca",

    externalUrl: "https://share.google/omRmIJEFnKff9WoxW",

    content: [],
    keyTakeaways: [],
    relatedTopics: ["Entrepreneurship", "Business Event", "Coworking Space"],
  },
]

export function getBlogBySlug(slug: string): BlogArticle | undefined {
  return blogData.find((article) => article.slug === slug)
}