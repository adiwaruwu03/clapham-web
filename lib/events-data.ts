export interface EventData {
  slug: string
  image: string
  name: string
  type: string
  impact: string
  date: string
  location: string
  description: string
  content: string[]
  highlights: string[]
  gallery: string[]
  storySections?: {
    image: string
    title: string
    description: string
  }[]
}

export const eventsData: EventData[] = [
  {
    slug: "above-and-beyond-seminar",
    image: "/images/beyoundbg.png",
    name: "Above and Beyond Seminar",
    type: "Brand",
    impact: "Kolaborasi dengan 8 brand nasional",
    date: "22 Januari 2025",
    location: "Clapham Collective, Medan",
    description:
      "Seminar intensif yang membahas strategi inovatif untuk pertumbuhan bisnis dan personal.",
    content: [
      "Above and Beyond Seminar adalah program seminar intensif yang dirancang khusus untuk para profesional dan pelaku bisnis yang ingin melampaui batasan konvensional. Acara ini berhasil menghadirkan kolaborasi dengan 8 brand nasional terkemuka yang masing-masing memberikan perspektif unik tentang strategi pertumbuhan.",
      "Seminar ini menghadirkan sesi-sesi mendalam tentang personal branding, digital marketing strategy, dan leadership development. Setiap sesi dirancang untuk memberikan takeaway yang langsung dapat diimplementasikan oleh peserta dalam karir dan bisnis mereka.",
      "Dengan format yang menggabungkan presentasi, panel diskusi, dan sesi tanya jawab interaktif, peserta mendapatkan pengalaman belajar yang komprehensif. Para pembicara dari berbagai brand nasional berbagi studi kasus nyata dan strategi yang telah terbukti berhasil di pasar Indonesia.",
    ],
    highlights: [
      "8 brand nasional sebagai collaborator",
      "Workshop personal branding intensif",
      "Panel diskusi dengan CEO dan founder",
      "Sertifikat profesional untuk peserta",
      "Akses ke materi eksklusif pasca-acara",
    ],
    
    gallery: [
       
    ],
  },
  {
    slug: "clapham-conference-2025",
    image: "/images/event-conference-2025.JPG",
    name: "Clapham Conference",
    type: "Conference",
    impact: "500+ peserta dari 15 industri berbeda",
    date: "15 Maret 2025",
    location: "Clapham Collective, Medan",
    description:
      "Konferensi tahunan yang menghadirkan pembicara terkemuka dan ratusan peserta dari berbagai industri.",
    content: [
      "Clapham Conference 2025 adalah konferensi tahunan terbesar yang diselenggarakan oleh Clapham Collective, menghadirkan lebih dari 500 peserta dari 15 industri berbeda di seluruh Indonesia. Acara ini menjadi wadah pertemuan para profesional, entrepreneur, dan pemimpin industri untuk berbagi wawasan dan membangun koneksi yang bermakna.",
      "Tahun ini, konferensi mengambil tema 'Shaping Tomorrow' dengan fokus pada inovasi teknologi, kepemimpinan transformatif, dan strategi bisnis berkelanjutan. Para pembicara terkemuka dari berbagai bidang memberikan presentasi yang menginspirasi dan workshop interaktif yang memberikan nilai praktis bagi setiap peserta.",
      "Selama dua hari penuh, peserta mendapatkan akses ke lebih dari 20 sesi paralel, 5 keynote speech, dan networking session yang dirancang khusus untuk memfasilitasi kolaborasi lintas industri. Feedback dari peserta menunjukkan tingkat kepuasan 96%, menjadikan ini salah satu konferensi paling sukses yang pernah kami selenggarakan.",
    ],
    highlights: [
      "20+ sesi paralel dengan topik beragam",
      "5 keynote speaker dari pemimpin industri",
      "Networking dinner eksklusif",
      "Exhibition area dengan 30+ booth partner",
      "Live streaming untuk peserta virtual",
    ],
    storySections: [
  {
    image: "/images/1.avif",
    title: "Startup Medan 2016",
    description:
      "Startup dibangun dengan tujuan utama untuk menyelesaikan masalah nyata di masyarakat melalui solusi yang inovatif, efisien, dan scalable, biasanya dengan memanfaatkan teknologi atau model bisnis baru. Kehadiran startup di sebuah kota memberikan banyak manfaat, seperti menciptakan lapangan kerja baru, mendorong pertumbuhan ekonomi lokal, meningkatkan daya saing dan citra kota sebagai pusat inovasi, serta membangun ekosistem kreatif yang menghubungkan talenta, investor, dan pelaku usaha. Dengan demikian, startup tidak hanya menjadi mesin pertumbuhan bisnis, tetapi juga menjadi katalis perkembangan sosial dan ekonomi suatu kota secara berkelanjutan.",
  },
  {
    image: "/images/2.avif",
    title: "Startup medan 2018",
    description:
      "Event startup kali ini bertujuan menghadirkan inspirasi dan transfer pengetahuan dari perusahaan yang telah berkembang pesat seperti Bukalapak dan Gojek kepada para pelaku usaha, mahasiswa, dan komunitas kreatif di Kota Medan, sehingga tercipta ruang kolaborasi, pembelajaran, dan peluang nyata bagi lahirnya startup-startup baru yang inovatif dan berdaya saing. Dengan menghadirkan kisah perjalanan, strategi, serta tantangan yang pernah mereka hadapi, event ini diharapkan mampu memotivasi generasi muda, memperkuat ekosistem digital, menarik minat investor, serta mendorong pertumbuhan ekonomi lokal demi terwujudnya Kota Medan yang lebih maju, adaptif, dan berkelanjutan." },
  {
    image: "/images/3.avif",
    title: "Startupfest 2019",
    description:
      "StartupFest lanjutan ini menjadi bukti nyata dari dampak event sebelumnya, di mana mulai bermunculan startup-startup baru hasil dari inspirasi, kolaborasi, dan jejaring yang telah terbangun. Jika sebelumnya fokus pada pembelajaran dan motivasi dari pelaku industri yang sudah berkembang, kini panggung diberikan kepada founder dan talenta lokal yang berani memulai serta menunjukkan progres usahanya. Event ini menegaskan bahwa Medan tidak lagi hanya menjadi penonton inovasi, tetapi mulai tumbuh sebagai pelaku aktif dalam membangun ekosistem startup yang berkelanjutan dan berdampak bagi kemajuan kota."},
  {
    image: "/images/4.avif",
    title: "Clapham Conference 2022",
    description:
      "Clapham Conference kali ini berfokus pada penguatan manajemen bisnis dan keuangan sebagai fondasi utama pertumbuhan usaha yang berkelanjutan. Setelah sebelumnya mendorong lahirnya berbagai ide dan startup baru, kini acara ini mengarahkan perhatian pada bagaimana membangun sistem operasional yang profesional, strategi bisnis yang terukur, serta pengelolaan keuangan yang sehat agar usaha tidak hanya bertumbuh cepat, tetapi juga stabil dan tahan terhadap tantangan. Melalui pembahasan manajemen, cash flow, perencanaan keuangan, dan tata kelola bisnis, Clapham Conference diharapkan mampu membentuk pelaku usaha di Medan yang lebih siap, strategis, dan berdampak bagi perkembangan ekonomi kota.",
  },
  {
    image: "/images/5.avif",
    title: "Clapham Conference 2023",
    description:
      "Clapham Conference hadir dengan mengusung semangat Grow – Connect – Inspire, sebagai ruang bertemunya para pelaku usaha, profesional, dan calon founder untuk bertumbuh bersama dalam pemahaman manajemen bisnis dan keuangan yang lebih matang. Melalui sesi diskusi strategis, networking, dan berbagi pengalaman nyata, konferensi ini mendorong peserta untuk mengembangkan bisnis secara berkelanjutan (Grow), membangun jejaring kolaboratif yang kuat (Connect), serta saling menginspirasi dalam menciptakan dampak positif bagi ekosistem usaha di Kota Medan (Inspire).",
  },
  {
    image: "/images/6.avif",
    title: "Clapham Conference 2024",
    description:
      "Clapham Conference mengangkat isu bisnis yang adaptif terhadap perkembangan zaman dengan fokus pada pemanfaatan Artificial Intelligence (AI), strategi bisnis modern, dan digital marketing berbasis data. Mengusung semangat Connect & Correction, konferensi ini menjadi ruang bagi para pelaku usaha untuk membangun koneksi yang relevan sekaligus melakukan evaluasi serta penyempurnaan strategi agar tetap kompetitif di era digital. Dengan pendekatan teknologi dan analisis yang lebih cerdas, acara ini diharapkan mampu mendorong bisnis di Medan tumbuh lebih efisien, terukur, dan berkelanjutan.",
  },
  {
    image: "/images/7.jpg",
    title: "Clapham Conference 2025",
    description:
      "Clapham Conference kali ini mengangkat isu yang lebih fresh dan dinamis dengan fokus pada industri F&B yang sedang berkembang pesat, dipadukan dengan strategi bisnis dan teknologi modern. Mengusung semangat Taste & Unite, konferensi ini menjadi ruang pertemuan antara pelaku kuliner, entrepreneur, dan inovator teknologi untuk mengeksplorasi tren, efisiensi operasional, digitalisasi, hingga branding yang kuat di industri makanan dan minuman. Melalui kolaborasi dan pertukaran ide, acara ini diharapkan mampu memperkuat ekosistem bisnis F&B di Medan agar lebih kreatif, kompetitif, dan terhubung secara teknologi.",
  },
],
    gallery: [
    ],
  },
  {
    slug: "community-creative-gathering",
    image:  "/images/above-6.jpg",
    name: "Community Creative Gathering",
    type: "Community",
    impact: "200+ anggota komunitas kreatif aktif",
    date: "8 Februari 2025",
    location: "Clapham Collective, Medan",
    description:
      "Pertemuan komunitas kreatif yang menginspirasi kolaborasi dan ide-ide baru.",
    content: [
      "Community Creative Gathering adalah event rutin yang menjadi rumah bagi lebih dari 200 anggota komunitas kreatif aktif di Medan. Acara ini dirancang sebagai ruang aman dan inklusif bagi para kreator, desainer, seniman, dan inovator untuk bertemu, berbagi, dan berkolaborasi.",
      "Setiap pertemuan menghadirkan tema yang berbeda, mulai dari design thinking, creative entrepreneurship, hingga digital art dan photography. Format acara yang casual namun berstruktur memungkinkan peserta untuk belajar dari sesama kreator sambil membangun jaringan yang organik.",
      "Gathering ini telah melahirkan berbagai proyek kolaboratif yang sukses, mulai dari pameran seni bersama, zine community, hingga creative agency yang didirikan oleh anggota komunitas. Ini membuktikan bahwa ketika kreator bertemu dalam lingkungan yang tepat, hal-hal luar biasa bisa terjadi.",
    ],
    highlights: [
      "200+ anggota komunitas kreatif aktif",
      "Tema berbeda setiap pertemuan",
      "Open mic dan showcase session",
      "Collaborative project incubation",
      "Free access untuk semua kreator",
    ],
    gallery: [
      
    ],
  },
  {
    slug: "medan-innovation-summit",
    image: "/images/above-7.jpg",
    name: "Medan Innovation Summit",
    type: "Conference",
    impact: "30 pembicara, 3 hari penuh inspirasi",
    date: "5-7 November 2024",
    location: "Clapham Collective, Medan",
    description:
      "Summit inovasi terbesar di Sumatera Utara yang menghadirkan 30 pembicara selama 3 hari penuh inspirasi dan koneksi.",
    content: [
      "Medan Innovation Summit adalah flagship event tahunan yang memposisikan Medan sebagai hub inovasi di Sumatera Utara. Selama tiga hari berturut-turut, summit ini menghadirkan 30 pembicara dari berbagai sektor termasuk teknologi, kesehatan, pendidikan, dan creative economy.",
      "Summit ini dirancang dengan pendekatan multi-track yang memungkinkan peserta untuk menyusun pengalaman belajar mereka sendiri. Dengan 6 track paralel yang berjalan simultan, peserta dapat memilih sesi yang paling relevan dengan kebutuhan dan minat mereka.",
      "Salah satu highlight dari summit ini adalah Innovation Showcase, di mana startup dan inovator lokal mendapat kesempatan untuk mempresentasikan produk dan ide mereka di depan panel investor dan mentor berpengalaman. Tiga startup terpilih mendapatkan pendanaan awal dan mentoring intensif selama 6 bulan.",
    ],
    highlights: [
      "30 pembicara dari berbagai sektor",
      "6 track paralel selama 3 hari",
      "Innovation Showcase untuk startup lokal",
      "Pendanaan awal untuk 3 startup terpilih",
      "1000+ peserta dari seluruh Sumatera",
    ],
    gallery: [
      
    ],
  },
  {
    slug: "brand-experience-festival",
    image: "/images/above-8.jpg",
    name: "Brand Experience Festival",
    type: "Brand",
    impact: "Engagement rate 85% dari target audiens",
    date: "20 Oktober 2024",
    location: "Clapham Collective, Medan",
    description:
      "Festival pengalaman brand yang menciptakan interaksi mendalam antara brand dan audiens mereka.",
    content: [
      "Brand Experience Festival adalah event yang menggabungkan experiential marketing dengan entertainment untuk menciptakan pengalaman brand yang tak terlupakan. Dengan engagement rate mencapai 85% dari target audiens, festival ini membuktikan bahwa pendekatan experiential adalah cara paling efektif untuk membangun koneksi brand.",
      "Festival ini menghadirkan instalasi interaktif dari 12 brand ternama, masing-masing dirancang untuk mengajak pengunjung merasakan nilai dan cerita brand secara langsung. Dari virtual reality experience hingga hands-on workshop, setiap booth menawarkan sesuatu yang unik dan memorable.",
      "Tim Clapham Collective merancang setiap detail festival ini dengan cermat, mulai dari flow pengunjung, lighting design, hingga soundtrack yang mengiringi setiap zona. Hasilnya adalah sebuah pengalaman holistik yang tidak hanya menghibur tetapi juga meninggalkan kesan mendalam tentang setiap brand yang berpartisipasi.",
    ],
    highlights: [
      "12 brand dengan instalasi interaktif",
      "85% engagement rate dari target audiens",
      "Virtual reality brand experience",
      "Live performance dan entertainment",
      "Social media reach 2 juta+ impression",
    ],
    gallery: [
      
    ],
  },
  {
    slug: "creative-workshop-series",
    image: "/images/work-6.JPG",
    name: "Creative Workshop Series",
    type: "Creative",
    impact: "12 workshop, 400+ peserta sepanjang tahun",
    date: "Januari - Desember 2024",
    location: "Clapham Collective, Medan",
    description:
      "Seri workshop kreatif bulanan yang mengembangkan keterampilan praktis dan mendorong ekspresi kreatif.",
    content: [
      "Creative Workshop Series adalah program workshop bulanan yang telah berjalan sepanjang tahun 2024, menghadirkan 12 workshop dengan total lebih dari 400 peserta. Setiap bulan, workshop mengangkat topik yang berbeda untuk mengembangkan keterampilan praktis di bidang kreatif.",
      "Topik workshop mencakup spektrum luas dari dunia kreatif, mulai dari typography dan brand identity design, photography dan videography, creative writing, hingga UI/UX design dan motion graphics. Setiap workshop dipandu oleh praktisi berpengalaman yang aktif di industrinya.",
      "Yang membuat program ini istimewa adalah pendekatan hands-on yang diterapkan. Setiap peserta mengerjakan proyek nyata selama workshop dan pulang dengan portfolio piece yang bisa langsung digunakan. Banyak alumni workshop yang kemudian berhasil memulai karir kreatif mereka atau meningkatkan kualitas pekerjaan mereka secara signifikan.",
    ],
    highlights: [
      "12 topik berbeda sepanjang tahun",
      "Dipandu oleh praktisi industri",
      "Hands-on project di setiap sesi",
      "Portfolio piece untuk setiap peserta",
      "Alumni network 400+ kreator",
    ],
    gallery: [
      
    ],
  },
]

export function getEventBySlug(slug: string): EventData | undefined {
  return eventsData.find((event) => event.slug === slug)
}

export function getAllEventSlugs(): string[] {
  return eventsData.map((event) => event.slug)
}
