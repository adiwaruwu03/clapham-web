"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { labelId: "Home", labelEn: "Home", href: "#home" },
  { labelId: "Layanan", labelEn: "Services", href: "#services" },
  { labelId: "Event Terbaru", labelEn: "Latest Events", href: "#events" },
  { labelId: "Tentang Kami", labelEn: "About Us", href: "#about" },
  { labelId: "Blog", labelEn: "Blog", href: "#blog" },
  { labelId: "Kontak", labelEn: "Contact", href: "#contact" },
]

interface NavigationProps {
  lang: "id" | "en"
  setLang: (lang: "id" | "en") => void
}

export function Navigation({ lang, setLang }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      let currentSection = ""
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href)
        if (section instanceof HTMLElement) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = link.href
          }
        }
      })
      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        
        {/* LOGO */}
        <Link href="#home" className="flex items-center">
          <Image
            src={scrolled ? "/logo-clapham-2.png" : "/logo-clapham-white.png"}
            alt="Clapham Collective"
            width={200}
            height={60}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors duration-300 ${
                activeSection === link.href
                  ? scrolled
                    ? "text-black"
                    : "text-white"
                  : scrolled
                  ? "text-gray-600 hover:text-black"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {lang === "id" ? link.labelId : link.labelEn}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full origin-left transition-transform duration-300 ${
                  activeSection === link.href
                    ? "scale-x-100 bg-current"
                    : "scale-x-0 bg-current"
                }`}
              />
            </a>
          ))}

          {/* 🔥 Language Toggle Desktop (FIXED PERFECT) */}
          <div className="ml-4">
            <div
              className={`relative flex w-24 h-9 items-center rounded-full p-1 transition-colors duration-300 ${
                scrolled ? "bg-gray-200" : "bg-white/20"
              }`}
            >
              {/* Slider */}
              <div
                className={`absolute top-1 left-1 h-7 w-11 rounded-full bg-white shadow transition-transform duration-300 ${
                  lang === "en" ? "translate-x-12" : ""
                }`}
              />

              {/* ID */}
              <button
                onClick={() => setLang("id")}
                className={`z-10 flex-1 text-sm font-medium text-center ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                ID
              </button>

              {/* EN */}
              <button
                onClick={() => setLang("en")}
                className={`z-10 flex-1 text-sm font-medium text-center ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden ${
            scrolled ? "text-black" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-b border-gray-200 bg-white lg:hidden">
          <div className="flex flex-col gap-2 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                {lang === "id" ? link.labelId : link.labelEn}
              </a>
            ))}

            {/* 🔥 Language Toggle Mobile (FIXED) */}
            <div className="mt-2">
              <div className="relative flex w-24 h-9 items-center rounded-full bg-gray-200 p-1">
                
                <div
                  className={`absolute top-1 left-1 h-7 w-11 rounded-full bg-white shadow transition-transform duration-300 ${
                    lang === "en" ? "translate-x-12" : ""
                  }`}
                />

                <button
                  onClick={() => setLang("id")}
                  className="z-10 flex-1 text-sm font-medium text-center"
                >
                  ID
                </button>

                <button
                  onClick={() => setLang("en")}
                  className="z-10 flex-1 text-sm font-medium text-center"
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}