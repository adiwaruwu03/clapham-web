import Image from "next/image"

const stats = [
  { value: "2016", label: "Berdiri Sejak" },
  { value: "200+", label: "Event Dikelola" },
  { value: "50+", label: "Brand Partner" },
  { value: "10K+", label: "Peserta Event" },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              About Us
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Tentang Clapham Collective
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Sejak 2016, Clapham Collective telah hadir sebagai ruang kolaborasi dan ekosistem event yang berbasis di Medan. Berawal dari sebuah coworking space, kami berkembang menjadi mitra strategis bagi brand, organisasi, dan komunitas yang ingin menciptakan pengalaman bermakna.
              </p>
              <p>
                Kami percaya bahwa setiap event adalah kesempatan untuk membangun koneksi, menginspirasi audiens, dan menghasilkan dampak nyata. Filosofi kami sederhana: merancang dengan tujuan, mengeksekusi dengan presisi, dan selalu berkolaborasi sebagai partner.
              </p>
              <p>
                Dengan pengalaman mengelola ratusan event dari skala intim hingga konferensi besar, kami memahami bahwa kesuksesan terletak pada detail dan strategi yang matang.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/clpham-foto.webp"
                alt="Clapham Collective coworking space"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-4xl font-bold text-foreground md:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
