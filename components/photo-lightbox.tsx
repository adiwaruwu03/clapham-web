"use client"

import { useCallback, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export interface LightboxImage {
  src: string
  alt?: string
  caption?: string
}

interface PhotoLightboxProps {
  images: LightboxImage[]
  /** Index gambar aktif. `null` berarti popup tertutup. */
  openIndex: number | null
  onClose: () => void
  onIndexChange: (index: number) => void
}

export function PhotoLightbox({
  images,
  openIndex,
  onClose,
  onIndexChange,
}: PhotoLightboxProps) {
  const isOpen = openIndex !== null
  const total = images.length

  const showPrev = useCallback(() => {
    if (openIndex === null || total === 0) return
    onIndexChange((openIndex - 1 + total) % total)
  }, [openIndex, total, onIndexChange])

  const showNext = useCallback(() => {
    if (openIndex === null || total === 0) return
    onIndexChange((openIndex + 1) % total)
  }, [openIndex, total, onIndexChange])

  // Keyboard support: ESC tutup, panah kiri/kanan navigasi
  useEffect(() => {
    if (!isOpen) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      else if (e.key === "ArrowLeft") showPrev()
      else if (e.key === "ArrowRight") showNext()
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [isOpen, onClose, showPrev, showNext])

  // Lock body scroll selama popup terbuka
  useEffect(() => {
    if (!isOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previous
    }
  }, [isOpen])

  if (!isOpen || openIndex === null) return null

  const current = images[openIndex]
  if (!current) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={
        current.caption
          ? `${current.caption} - foto ${openIndex + 1} dari ${total}`
          : `Foto ${openIndex + 1} dari ${total}`
      }
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Tutup"
        className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Counter */}
      {total > 1 && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-md">
          {openIndex + 1} / {total}
        </div>
      )}

      {/* Prev button */}
      {total > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            showPrev()
          }}
          aria-label="Foto sebelumnya"
          className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:left-6 md:h-12 md:w-12"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}

      {/* Next button */}
      {total > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            showNext()
          }}
          aria-label="Foto berikutnya"
          className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:right-6 md:h-12 md:w-12"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}

      {/* Image area - klik foto sendiri tidak menutup popup */}
      <div
        className="relative flex h-full w-full max-w-6xl items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-full w-full">
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt ?? current.caption ?? `Foto ${openIndex + 1}`}
            fill
            className="object-contain animate-in zoom-in-95 duration-200"
            sizes="100vw"
            priority
          />
        </div>

        {/* Caption */}
        {current.caption && (
          <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 max-w-[90%] rounded-full bg-white/10 px-4 py-1.5 text-center text-xs font-medium text-white backdrop-blur-md md:text-sm">
            {current.caption}
          </div>
        )}
      </div>
    </div>
  )
}
