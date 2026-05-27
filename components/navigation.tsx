"use client"

import { useState, useEffect, useCallback, memo } from "react"
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
  const [activeSection, setActiveSection] = useState<string>("#home")

  useEffect(() => {
    // 1. Logic to track which section is most visible
    const visibleSections = new Map<string, number>()

    const observerOptions = {
      root: null,
      rootMargin: "-15% 0px -25% 0px", // Focus on the upper-middle part of the screen
      threshold: [0, 0.1, 0.5, 1.0]
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          visibleSections.set(entry.target.id, entry.intersectionRatio)
        } else {
          visibleSections.delete(entry.target.id)
        }
      })

      // Find the most visible section
      let mostVisible = activeSection.substring(1)
      let maxRatio = 0
      
      visibleSections.forEach((ratio, id) => {
        if (ratio > maxRatio) {
          maxRatio = ratio
          mostVisible = id
        }
      })
      
      const newActive = `#${mostVisible}`
      setActiveSection(prev => prev !== newActive ? newActive : prev)
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    
    // Track all sections
    navLinks.forEach(link => {
      const element = document.getElementById(link.href.substring(1))
      if (element) observer.observe(element)
    })

    // 2. Separate scroll listener just for the header background
    let ticking = false
    const handleHeaderScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleHeaderScroll, { passive: true })
    handleHeaderScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleHeaderScroll)
    }
  }, []) // Remove activeSection dependency to prevent re-creating observer on every section change

  const isHeaderWhite = scrolled || (activeSection !== "#home")

  return (
    <>
      <header
        className={`fixed top-0 z-[100] w-full gpu-layer transition-all duration-300 ${
          isHeaderWhite
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
            : "bg-transparent lg:bg-transparent lg:backdrop-blur-none backdrop-blur-sm"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 h-16 lg:h-20 lg:px-8">
          <Link href="#home" className="flex items-center transition-opacity hover:opacity-80">
            <Image
              src={isHeaderWhite ? "/logo-clapham-2.png" : "/logo-clapham-white.png"}
              alt="Clapham Collective"
              width={180}
              height={50}
              priority
              className="h-8 lg:h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm font-semibold transition-colors duration-200 ${
                  activeSection === link.href
                    ? isHeaderWhite ? "text-black" : "text-white"
                    : isHeaderWhite ? "text-gray-500 hover:text-black" : "text-white/70 hover:text-white"
                }`}
              >
                {lang === "id" ? link.labelId : link.labelEn}
                <span className={`absolute left-0 -bottom-1 h-0.5 w-full bg-blue-600 transition-transform duration-300 ${activeSection === link.href ? "scale-x-100" : "scale-x-0"}`} />
              </a>
            ))}

            <div className="ml-4 flex items-center">
               <LanguageToggle lang={lang} setLang={setLang} isHeaderWhite={isHeaderWhite} />
            </div>
          </div>

          {/* Mobile Language Toggle */}
          <div className="lg:hidden">
            <LanguageToggle lang={lang} setLang={setLang} isHeaderWhite={isHeaderWhite} mobile />
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Navigation - Modern Floating Pill Design */}
      <nav 
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-md lg:hidden gpu-layer"
      >
        <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] rounded-2xl h-16 px-2 flex items-center justify-around relative overflow-hidden">
          {/* Active indicator background bubble - optional, but let's do it per item for simplicity or a sliding one */}
          {navLinks.map((link) => (
            <BottomNavItem 
              key={link.href} 
              link={link} 
              lang={lang} 
              isActive={activeSection === link.href} 
            />
          ))}
        </div>
      </nav>
    </>
  )
}

const BottomNavItem = memo(({ link, lang, isActive }: { link: typeof navLinks[0], lang: string, isActive: boolean }) => {
  const Icon = link.icon
  return (
    <a
      href={link.href}
      className={`flex flex-col items-center justify-center flex-1 h-full transition-all duration-300 relative rounded-xl tap-highlight-transparent ${
        isActive ? "text-blue-600" : "text-gray-500 hover:text-blue-400"
      }`}
    >
      {/* Active Highlight Bubble with subtle glow */}
      {isActive && (
        <div className="absolute inset-x-1.5 inset-y-2.5 bg-blue-50/90 rounded-xl -z-10 animate-in fade-in zoom-in duration-500 shadow-[0_0_15px_rgba(37,99,235,0.1)]" />
      )}
      
      <div className={`transition-all duration-300 ease-out ${isActive ? "-translate-y-1 scale-110" : "hover:scale-105"}`}>
        <Icon size={isActive ? 22 : 20} strokeWidth={isActive ? 2.5 : 2} className="transition-all duration-300" />
      </div>
      
      <span className={`text-[10px] font-bold mt-1.5 transition-all duration-300 tracking-tight ${
        isActive ? "opacity-100 transform translate-y-0" : "opacity-60 transform translate-y-0.5"
      }`}>
        {lang === "id" ? link.labelId : link.labelEn}
      </span>
      
      {/* Tiny active dot at the very bottom */}
      {isActive && (
        <div className="absolute bottom-1 w-1 h-1 bg-blue-600 rounded-full animate-in fade-in slide-in-from-bottom-1 duration-500" />
      )}
    </a>
  )
})
BottomNavItem.displayName = "BottomNavItem"

const LanguageToggle = ({ lang, setLang, isHeaderWhite, mobile }: { lang: "id" | "en", setLang: (l: "id" | "en") => void, isHeaderWhite: boolean, mobile?: boolean }) => (
  <div className={`relative flex items-center rounded-full p-1 transition-colors duration-300 ${
    mobile ? "w-[76px] h-8" : "w-[88px] h-9"
  } ${isHeaderWhite ? "bg-gray-100" : "bg-white/20"}`}>
    <div className={`absolute top-1 left-1 bottom-1 rounded-full bg-blue-600 shadow-sm transition-transform duration-300 ease-out will-change-transform ${
      mobile ? "w-[34px]" : "w-[40px]"
    } ${lang === "en" ? (mobile ? "translate-x-[36px]" : "translate-x-[40px]") : "translate-x-0"}`} />
    <button 
      onClick={() => setLang("id")} 
      className={`relative z-10 flex-1 text-center font-bold transition-colors duration-300 ${
        mobile ? "text-[10px]" : "text-xs"
      } ${lang === "id" ? "text-white" : isHeaderWhite ? "text-gray-500" : "text-white/70"}`}
    >ID</button>
    <button 
      onClick={() => setLang("en")} 
      className={`relative z-10 flex-1 text-center font-bold transition-colors duration-300 ${
        mobile ? "text-[10px]" : "text-xs"
      } ${lang === "en" ? "text-white" : isHeaderWhite ? "text-gray-500" : "text-white/70"}`}
    >EN</button>
  </div>
)