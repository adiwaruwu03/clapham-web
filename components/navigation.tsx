"use client"

import { useState, useEffect } from "react"
import { Home, Briefcase, Calendar, Info, FileText, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { labelId: "Home", labelEn: "Home", href: "#home", icon: Home },
  { labelId: "Layanan", labelEn: "Services", href: "#services", icon: Briefcase },
  { labelId: "Event", labelEn: "Events", href: "#events", icon: Calendar },
  { labelId: "Tentang", labelEn: "About", href: "#about", icon: Info },
  { labelId: "Blog", labelEn: "Blog", href: "#blog", icon: FileText },
  { labelId: "Kontak", labelEn: "Contact", href: "#contact", icon: Phone },
]

interface NavigationProps {
  lang: "id" | "en"
  setLang: (lang: "id" | "en") => void
}

export function Navigation({ lang, setLang }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)
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
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled || activeSection !== "#home" && activeSection !== ""
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
            : "bg-transparent lg:bg-transparent bg-white/10 backdrop-blur-sm lg:backdrop-blur-none"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:py-4 lg:px-8">
          {/* LOGO */}
          <Link href="#home" className="flex items-center">
            <Image
              src={scrolled || (activeSection !== "#home" && activeSection !== "") ? "/logo-clapham-2.png" : "/logo-clapham-white.png"}
              alt="Clapham Collective"
              width={200}
              height={60}
              priority
              className="h-8 w-auto lg:h-9"
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
                    ? scrolled || activeSection !== "#home"
                      ? "text-black"
                      : "text-white"
                    : scrolled || activeSection !== "#home"
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

            {/* Language Toggle Desktop */}
            <div className="ml-4">
              <div
                className={`relative flex w-[88px] h-9 items-center rounded-full p-1 ${
                  scrolled || activeSection !== "#home" ? "bg-gray-200" : "bg-white/20"
                }`}
              >
                <div
                  className={`absolute top-[3px] left-[3px] h-7 w-[41px] rounded-full bg-blue-500 shadow-md transition-transform duration-300 ${
                    lang === "en" ? "translate-x-[41px]" : "translate-x-0"
                  }`}
                />
                <button
                  onClick={() => setLang("id")}
                  className="relative z-20 flex-1 text-sm font-semibold text-center transition-colors"
                  style={{
                    color: lang === "id" 
                      ? "#ffffff" 
                      : scrolled || activeSection !== "#home"
                        ? "#4b5563" 
                        : "#ffffffcc"
                  }}
                >
                  ID
                </button>
                <button
                  onClick={() => setLang("en")}
                  className="relative z-20 flex-1 text-sm font-semibold text-center transition-colors"
                  style={{
                    color: lang === "en" 
                      ? "#ffffff" 
                      : scrolled || activeSection !== "#home"
                        ? "#4b5563" 
                        : "#ffffffcc"
                  }}
                >
                  EN
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Language Toggle */}
          <div className="flex items-center lg:hidden">
            <div
              className={`relative flex w-[76px] h-8 items-center rounded-full p-1 ${
                scrolled || activeSection !== "#home" ? "bg-gray-200" : "bg-white/20"
              }`}
            >
              <div
                className={`absolute top-[3px] left-[3px] h-[26px] w-[34px] rounded-full bg-blue-500 shadow-md transition-transform duration-300 ${
                  lang === "en" ? "translate-x-[36px]" : "translate-x-0"
                }`}
              />
              <button
                onClick={() => setLang("id")}
                className="relative z-20 flex-1 text-xs font-semibold text-center transition-colors"
                style={{
                  color: lang === "id" ? "#ffffff" : scrolled || activeSection !== "#home" ? "#4b5563" : "#ffffffcc"
                }}
              >
                ID
              </button>
              <button
                onClick={() => setLang("en")}
                className="relative z-20 flex-1 text-xs font-semibold text-center transition-colors"
                style={{
                  color: lang === "en" ? "#ffffff" : scrolled || activeSection !== "#home" ? "#4b5563" : "#ffffffcc"
                }}
              >
                EN
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] lg:hidden pb-safe">
        <div className="flex px-1 items-center justify-around overflow-x-auto no-scrollbar">
          {navLinks.map((link) => {
            const Icon = link.icon
            const isActive = activeSection === link.href || (activeSection === "" && link.href === "#home")
            
            return (
              <a
                key={link.href}
                href={link.href}
                className={`flex flex-col items-center justify-center w-16 min-w-[60px] py-3 gap-1 relative ${
                  isActive ? "text-blue-600" : "text-gray-500"
                }`}
              >
                <Icon size={20} className={`transition-all duration-300 ${isActive ? "scale-110 mb-0.5" : ""}`} />
                <span className={`text-[9px] font-medium transition-all duration-300 text-center uppercase tracking-wider ${isActive ? "opacity-100" : "opacity-70"}`}>
                  {lang === "id" ? link.labelId : link.labelEn}
                </span>
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] rounded-t-full bg-blue-600" />
                )}
              </a>
            )
          })}
        </div>
      </div>
{/* Added empty styles for pb-safe logic if needed, we assume standard padding handles it */}
    </>
  )
}