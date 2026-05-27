"use client"

import { useState } from "react"
import Image from "next/image"
import { PhotoLightbox } from "./photo-lightbox"

interface EventGalleryProps {
  images: string[]
  alt: string
  /** Heading di atas grid. Set ke null untuk menyembunyikan. */
  heading?: string | null
}

export function EventGallery({ images, alt, heading = "Galeri" }: EventGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  if (images.length === 0) return null

  const lightboxImages = images.map((src, i) => ({
    src,
    alt: `${alt} - foto ${i + 1}`,
  }))

  return (
    <>
      {heading && (
        <h2 className="font-serif text-2xl font-bold text-foreground">{heading}</h2>
      )}

      <div className={`grid gap-4 sm:grid-cols-2 ${heading ? "mt-6" : ""}`}>
        {images.map((img, i) => (
          <button
            key={`${img}-${i}`}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`Buka foto ${i + 1} dari ${images.length}`}
            className="group relative aspect-[3/2] overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
          >
            <Image
              src={img}
              alt={`${alt} - foto ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/20" />
          </button>
        ))}
      </div>

      <PhotoLightbox
        images={lightboxImages}
        openIndex={openIndex}
        onClose={() => setOpenIndex(null)}
        onIndexChange={setOpenIndex}
      />
    </>
  )
}
