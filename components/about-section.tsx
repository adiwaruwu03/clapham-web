"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const stats = [
  { value: "2016", label: "Berdiri Sejak" },
  { value: "300+", label: "Event Terselenggara" },
  { value: "100+", label: "Brand Partner" },
  { value: "10K+", label: "Peserta Event" },
]

export function AboutSection() {
  const images = [
    "/images/clpham-foto.webp",
    "/images/clapham-foto2.webp",
    "/images/clapham-foto3.webp",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // tombol prev/next
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    )
  }

  // auto slide tiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      )
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              About Us
            </p>

            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Tentang Clapham Collective
            </h2>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground text-justify">
              <p>
                Sejak 2016, Clapham Collective telah hadir sebagai ruang kolaborasi
                dan ekosistem event yang berbasis di Medan. Berawal dari sebuah
                coworking space, kami berkembang menjadi mitra strategis bagi
                brand, organisasi, dan komunitas yang ingin menciptakan pengalaman
                bermakna.
              </p>

              <p>
                Kami percaya bahwa setiap event adalah kesempatan untuk membangun
                koneksi, menginspirasi audiens, dan menghasilkan dampak nyata.
                Filosofi kami sederhana: merancang dengan tujuan, mengeksekusi
                dengan presisi, dan selalu berkolaborasi sebagai partner.
              </p>

              <p>
                Dengan pengalaman mengelola ratusan event dari skala intim hingga
                konferensi besar, kami memahami bahwa kesuksesan terletak pada
                detail dan strategi yang matang.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE 3D SLIDER */}
          <div className="relative w-full max-w-lg mx-auto aspect-[4/3] sm:aspect-[16/9] [perspective:1200px]">

            {images.map((img, index) => {
              const offset = (index - currentIndex + images.length) % images.length
              let transform = ""
              let zIndex = 0

              if (offset === 0) {
                transform = "translateX(0) scale(1) rotateY(0deg)"
                zIndex = 30
              } else if (offset === 1) {
                transform = "translateX(60px) scale(0.9) rotateY(-15deg)"
                zIndex = 20
              } else {
                transform = "translateX(-60px) scale(0.9) rotateY(15deg)"
                zIndex = 10
              }

              return (
                <div
                  key={img}
                  className="absolute inset-0 transition-all duration-700 ease-out"
                  style={{
                    transform,
                    zIndex,
                  }}
                >
                  <div className="relative w-full h-full overflow-hidden rounded-xl shadow-2xl">
                    <Image
                      src={img}
                      alt="Clapham Collective coworking space"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )
            })}

            {/* BUTTON LEFT */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-40 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
            >
              <ChevronLeft size={20} />
            </button>

            {/* BUTTON RIGHT */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-40 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
            >
              <ChevronRight size={20} />
            </button>

          </div>
        </div>

        {/* STATS */}
        <div className="mt-20">
          <div className="grid grid-cols-2 gap-10 text-center md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-4xl font-bold text-foreground md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-3 text-sm font-medium tracking-wide text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}