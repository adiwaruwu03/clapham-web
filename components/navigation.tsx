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
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      )
      sections.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(navLinks[index].href)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* LOGO */}
        <Link href="#home" className="flex items-center">
          <Image
            src="/clp-logo-nav.png"
            alt="Clapham Collective"
            width={200}
            height={60}
            priority
            className="h-10 w-auto"
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
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {lang === "id" ? link.labelId : link.labelEn}

              {/* Animated underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-foreground transition-transform duration-300 origin-left ${
                  activeSection === link.href ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}

          {/* Toggle Bahasa */}
          <div className="flex gap-2">
            <button
              className={`px-3 py-1 rounded ${lang === "id" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              onClick={() => setLang("id")}
            >
              ID
            </button>
            <button
              className={`px-3 py-1 rounded ${lang === "en" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-b border-border bg-background/98 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-2 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
              >
                {lang === "id" ? link.labelId : link.labelEn}
              </a>
            ))}

            {/* Toggle Bahasa Mobile */}
            <div className="flex gap-2 mt-2">
              <button
                className={`px-3 py-1 rounded ${lang === "id" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                onClick={() => setLang("id")}
              >
                ID
              </button>
              <button
                className={`px-3 py-1 rounded ${lang === "en" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                onClick={() => setLang("en")}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}