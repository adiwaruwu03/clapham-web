"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Layanan", href: "#services" },
  { label: "Event Terbaru", href: "#events" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Kontak", href: "#contact" },
]

export function Navigation() {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <span className="font-serif text-xl font-bold tracking-tight text-foreground">
            Clapham Collective
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-all duration-300 ${
                activeSection === link.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}

              {/* Animated underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-foreground transition-transform duration-300 origin-left ${
                  activeSection === link.href
                    ? "scale-x-100"
                    : "scale-x-0"
                }`}
              />
            </a>
          ))}

          <Button asChild size="sm" className="rounded-full px-6">
            <a href="#contact">Let's Collaborate</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground lg:hidden"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile */}
      {mobileOpen && (
        <div className="border-b border-border bg-background/98 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-2 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition"
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="sm" className="mt-2 rounded-full">
              <a href="#contact" onClick={() => setMobileOpen(false)}>
                Let's Collaborate
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}