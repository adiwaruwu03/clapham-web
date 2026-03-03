"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  { src: "/images/hero-acti.jpg", label: "Conference" },
  { src: "/images/hero-sem.jpg", label: "Brand Activation" },
  { src: "/images/hero-com.jpg", label: "Community Event" },
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Carousel Images */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.label}
              fill
              className="object-cover"
              priority={i === 0}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
            Kami Mewujudkan Ide, dan Membantu Anda Mencapai Tujuan
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/80">
            Manajemen event strategis untuk brand, organisasi, dan komunitas yang ingin menciptakan dampak nyata.
          </p>
          <div className="mt-6 sm:mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-gray-200 px-6 sm:px-8">
              <a href="#contact">Rencanakan Event Anda</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full bg-white text-black hover:bg-gray-200 px-6 sm:px-8"
            >
              <a href="#events">Lihat Karya Kami</a>
            </Button>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-4 flex items-center gap-4 sm:bottom-8 sm:left-6 lg:bottom-12 lg:left-8">
          <div className="flex gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === current ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                aria-label={`Go to slide ${i + 1}: ${slide.label}`}
              />
            ))}
          </div>
          <span className="hidden sm:block text-xs font-medium uppercase tracking-widest text-white/70 ml-4">
            {slides[current].label}
          </span>
        </div>

        {/* Navigation arrows */}
        <div className="absolute right-4 bottom-6 flex gap-2 sm:right-6 sm:bottom-8 lg:right-8 lg:bottom-12">
          <button
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}