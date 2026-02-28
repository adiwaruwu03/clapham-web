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
}

export const blogData: BlogArticle[] = [
  {
    slug: "persiapan-72-jam-sebelum-konferensi",
    image: "/images/blog/bloger (5).jpg",
    category: "Behind the Scenes",
    title: "Persiapan 72 Jam Sebelum Konferensi: Yang Tidak Terlihat",
    excerpt:
      "Bagaimana tim kami memastikan setiap detail sempurna menjelang hari-H sebuah konferensi berskala besar.",
    date: "15 Jan 2025",
    author: "Tim Clapham Collective",
    readTime: "7 menit baca",
    content: [
      "Tiga hari sebelum konferensi besar dimulai, kebanyakan orang mungkin berpikir bahwa semua persiapan sudah selesai. Kenyataannya, 72 jam terakhir justru menjadi fase paling kritis dalam seluruh proses perencanaan event. Di sinilah semua teori dan strategi bertemu dengan realita lapangan.",
      "Di Clapham Collective, kami menyebut fase ini sebagai 'The Final Sprint'. Ini bukan hanya soal mengecek checklist -- melainkan tentang mengantisipasi hal-hal yang tidak ada di checklist manapun. Cuaca berubah? Pembicara utama membatalkan? Sound system bermasalah? Semua harus punya Plan B, bahkan Plan C.",
      "Hari pertama dari tiga hari terakhir biasanya dihabiskan untuk technical rehearsal lengkap. Setiap detik dari rundown dijalankan seperti hari-H yang sebenarnya. Tim stage manager memastikan setiap transisi berjalan mulus, tim lighting merancang suasana yang tepat untuk setiap sesi, dan tim audio mengecek setiap mikrofon dan speaker.",
      "Hari kedua adalah hari koordinasi dengan semua vendor dan partner. Dari katering hingga keamanan, dari photographer hingga live streaming team -- semua harus hadir di venue untuk walkthrough terakhir. Ini juga saat di mana layout final venue dieksekusi: penempatan kursi, signage, registration desk, dan experiential zone.",
      "Hari terakhir sebelum event adalah tentang detail kecil yang membuat perbedaan besar. Apakah bunga di meja registrasi sudah segar? Apakah lanyard peserta sudah terurut alfabetis? Apakah WiFi venue sudah ditest dengan beban penuh? Detail-detail inilah yang membedakan event biasa dengan event yang memorable.",
      "Yang paling penting dari 72 jam ini adalah energi tim. Kami memastikan setiap anggota tim istirahat cukup di malam terakhir, karena hari-H membutuhkan konsentrasi dan stamina penuh. Sebuah event besar bukan sprint -- ini adalah maraton yang membutuhkan kesiapan fisik dan mental.",
    ],
    keyTakeaways: [
      "Technical rehearsal harus dilakukan minimal H-3 untuk mengantisipasi masalah teknis",
      "Koordinasi vendor di venue wajib dilakukan H-2 agar semua pihak memahami layout dan flow",
      "Detail kecil seperti signage, WiFi, dan kenyamanan peserta menentukan kesan keseluruhan",
      "Kesehatan dan energi tim sama pentingnya dengan persiapan teknis",
      "Selalu siapkan contingency plan untuk setiap aspek kritikal event",
    ],
    relatedTopics: [
      "Event Planning",
      "Project Management",
      "Team Coordination",
    ],
  },
  {
    slug: "5-kesalahan-fatal-event-korporat",
    image: "/images/galeri-conf.jpg",
    category: "Event Strategy",
    title: "5 Kesalahan Fatal dalam Merencanakan Event Korporat",
    excerpt:
      "Pelajaran dari lapangan tentang hal-hal yang sering diabaikan namun berdampak besar pada keberhasilan event.",
    date: "8 Jan 2025",
    author: "Tim Clapham Collective",
    readTime: "8 menit baca",
    content: [
      "Setelah mengelola ratusan event korporat sejak 2016, kami telah menyaksikan pola yang sama berulang kali: kesalahan-kesalahan yang terlihat sepele namun bisa menghancurkan seluruh pengalaman event. Berikut adalah lima kesalahan paling fatal yang kami temui di lapangan.",
      "Kesalahan pertama: Tidak memahami audiens. Banyak perusahaan merancang event berdasarkan apa yang ingin mereka sampaikan, bukan apa yang ingin didengar audiens. Event yang sukses dimulai dari riset mendalam tentang siapa yang akan hadir, apa ekspektasi mereka, dan bagaimana mereka ingin terlibat. Tanpa pemahaman ini, bahkan event dengan budget besar pun bisa gagal menciptakan dampak.",
      "Kesalahan kedua: Underestimating logistics. Logistik bukan hanya soal menyewa venue dan memesan katering. Ini mencakup flow peserta dari registrasi hingga pulang, pengelolaan parkir, aksesibilitas, ventilasi ruangan, hingga backup power supply. Satu bottleneck di logistik bisa merusak ritme seluruh event.",
      "Kesalahan ketiga: Mengabaikan digital experience. Di era hybrid, pengalaman digital peserta sama pentingnya dengan pengalaman fisik. Live streaming yang buffering, aplikasi event yang crash, atau WiFi yang lambat bisa membuat peserta online kehilangan engagement. Investasi di infrastruktur digital bukan opsional lagi.",
      "Kesalahan keempat: Timeline yang tidak realistis. Kami sering menjumpai klien yang ingin mengadakan konferensi besar dalam waktu 3-4 minggu. Event berkualitas membutuhkan waktu perencanaan yang proporsional dengan skalanya. Konferensi 500 orang idealnya membutuhkan 3-6 bulan persiapan untuk hasil optimal.",
      "Kesalahan kelima: Tidak mengukur keberhasilan. Banyak event berakhir tanpa evaluasi yang terstruktur. Tanpa KPI yang jelas sejak awal -- apakah itu jumlah leads, brand awareness metric, atau net promoter score -- mustahil untuk mengetahui apakah event tersebut benar-benar berhasil atau hanya terasa berhasil.",
      "Setiap kesalahan ini bisa dihindari dengan perencanaan yang matang dan partner event management yang berpengalaman. Di Clapham Collective, kami menjadikan setiap pelajaran dari lapangan sebagai fondasi untuk event berikutnya yang lebih baik.",
    ],
    keyTakeaways: [
      "Selalu mulai dengan riset audiens sebelum merancang konsep event",
      "Logistik mencakup seluruh journey peserta, bukan hanya venue dan F&B",
      "Investasi digital experience wajib untuk event hybrid maupun offline",
      "Berikan timeline yang realistis -- minimal 3-6 bulan untuk event besar",
      "Tetapkan KPI terukur sejak awal untuk evaluasi keberhasilan event",
    ],
    relatedTopics: [
      "Corporate Events",
      "Event Strategy",
      "Lessons Learned",
    ],
  },
  {
    slug: "event-terbaik-dimulai-dari-mendengarkan",
    image: "/images/blog/bloger (2).jpg",
    category: "Field Lessons",
    title: "Mengapa Event Terbaik Dimulai dari Mendengarkan",
    excerpt:
      "Filosofi kami dalam merancang event yang benar-benar bermakna bagi klien dan audiens.",
    date: "2 Jan 2025",
    author: "Tim Clapham Collective",
    readTime: "6 menit baca",
    content: [
      "Di industri event management, ada godaan besar untuk langsung melompat ke eksekusi. Klien datang dengan brief, dan naluri pertama adalah membuka laptop dan mulai merancang rundown. Tapi di Clapham Collective, kami belajar bahwa langkah pertama yang paling powerful justru yang paling sederhana: mendengarkan.",
      "Mendengarkan bukan hanya soal memahami brief tertulis. Ini tentang menangkap apa yang tidak tertulis -- kekhawatiran yang belum diungkapkan, harapan yang belum diartikulasikan, dan konteks organisasi yang membentuk kebutuhan sebenarnya. Sering kali, klien tahu apa yang mereka inginkan, tapi belum tentu tahu apa yang mereka butuhkan.",
      "Proses mendengarkan kami biasanya dimulai dengan sesi discovery yang mendalam. Bukan meeting formal dengan PowerPoint, melainkan percakapan santai di mana kami mengajukan pertanyaan-pertanyaan yang mungkin tidak terpikirkan sebelumnya. Siapa stakeholder internal yang harus puas? Apa narrative besar yang ingin dibangun? Bagaimana event ini terhubung dengan strategi jangka panjang?",
      "Salah satu contoh terbaik adalah ketika sebuah perusahaan teknologi meminta kami mengorganisir gathering tahunan mereka. Brief awalnya sederhana: dinner 200 orang. Tapi setelah mendengarkan dengan seksama, kami menemukan bahwa perusahaan sedang mengalami transformasi budaya besar. Yang mereka butuhkan bukan sekadar dinner, melainkan sebuah momen yang menandai babak baru perusahaan.",
      "Hasilnya? Alih-alih dinner konvensional, kami merancang sebuah immersive experience yang membawa peserta melalui journey transformasi perusahaan -- dari masa lalu, melalui tantangan saat ini, hingga visi masa depan. Setiap elemen, dari dekorasi hingga menu makanan, menceritakan bagian dari narasi tersebut.",
      "Feedback dari event itu luar biasa. CEO perusahaan menyebutnya sebagai 'momen paling defining' dalam tahun tersebut. Dan semua dimulai dari mendengarkan -- benar-benar mendengarkan -- apa yang ada di balik brief sederhana 'dinner 200 orang'.",
      "Filosofi ini telah menjadi DNA Clapham Collective. Setiap project dimulai dengan mendengarkan, dan setiap event yang kami ciptakan adalah jawaban atas apa yang benar-benar dibutuhkan, bukan sekadar apa yang diminta.",
    ],
    keyTakeaways: [
      "Brief tertulis hanya permukaan -- gali lebih dalam untuk menemukan kebutuhan sebenarnya",
      "Sesi discovery yang informal sering menghasilkan insight yang lebih kaya dari meeting formal",
      "Event terbaik menjawab kebutuhan strategis, bukan hanya kebutuhan operasional",
      "Setiap elemen event harus terhubung dengan narrative besar yang ingin dibangun",
      "Investasi waktu di awal untuk mendengarkan menghemat banyak revisi di kemudian hari",
    ],
    relatedTopics: [
      "Client Relations",
      "Event Philosophy",
      "Strategic Planning",
    ],
  },
]

export function getBlogBySlug(slug: string): BlogArticle | undefined {
  return blogData.find((article) => article.slug === slug)
}
