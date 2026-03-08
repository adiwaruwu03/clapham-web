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
  const [isMobile, setIsMobile] = useState(false)

  // Deteksi mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

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
    <section id="about" className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              About Us
            </p>

            <h2 className="mt-3 font-serif text-2xl font-bold text-foreground sm:text-3xl md:text-4xl text-balance">
              Tentang Clapham Collective
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base text-justify">
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
          <div className="relative w-full max-w-md mx-auto aspect-[4/3] sm:max-w-lg sm:aspect-[16/9] [perspective:1000px] md:[perspective:1200px] overflow-visible py-8">

            {images.map((img, index) => {
              const offset = (index - currentIndex + images.length) % images.length
              
              // Kalkulasi transform berdasarkan device
              let transform = ""
              let zIndex = 0

              if (offset === 0) {
                // Gambar utama - tetap di tengah
                transform = "translateX(0) scale(1) rotateY(0deg)"
                zIndex = 30
              } else if (offset === 1) {
                // Gambar kanan
                if (isMobile) {
                  transform = "translateX(25%) scale(0.8) rotateY(-10deg)"
                } else {
                  transform = "translateX(60px) scale(0.85) rotateY(-15deg)"
                }
                zIndex = 20
              } else {
                // Gambar kiri
                if (isMobile) {
                  transform = "translateX(-25%) scale(0.8) rotateY(10deg)"
                } else {
                  transform = "translateX(-60px) scale(0.85) rotateY(15deg)"
                }
                zIndex = 10
              }

              return (
                <div
                  key={img}
                  className="absolute inset-0 transition-all duration-700 ease-out"
                  style={{
                    transform,
                    zIndex,
                    opacity: offset > 1 ? 0.3 : 1, // Sembunyikan gambar ke-3 di mobile
                  }}
                >
                  <div className="relative w-full h-full overflow-hidden rounded-xl shadow-xl">
                    <Image
                      src={img}
                      alt="Clapham Collective coworking space"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 90vw, 50vw"
                      priority={offset === 0}
                    />
                  </div>
                </div>
              )
            })}

            {/* BUTTON LEFT */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 rounded-full bg-black/50 p-1.5 sm:p-2 text-white hover:bg-black/70 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={isMobile ? 16 : 20} />
            </button>

            {/* BUTTON RIGHT */}
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 rounded-full bg-black/50 p-1.5 sm:p-2 text-white hover:bg-black/70 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={isMobile ? 16 : 20} />
            </button>

            {/* DOTS INDICATOR - Tambahan untuk mobile */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-40 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 w-6 rounded-full transition-all ${
                    idx === currentIndex 
                      ? "bg-primary w-8" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </div>

        {/* STATS */}
        <div className="mt-16 md:mt-20">
          <div className="grid grid-cols-2 gap-6 text-center sm:gap-10 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs font-medium tracking-wide text-muted-foreground sm:text-sm">
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