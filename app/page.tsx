"use client"

import { useReveal } from "@/hooks/useReveal"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { CompanyProfile } from "@/components/company-profile"
import { StrengthsSection } from "@/components/strengths-section"
import { FeaturedMoments } from "@/components/featured-moments"
import { ServicesSection } from "@/components/services-section"
import { EventsSection } from "@/components/events-section"
import { AboutSection } from "@/components/about-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import PartnerClapham from "@/components/partner-clapham"
import { Testimoni } from "@/components/testimoni"
import { useState } from "react"

export default function HomePage() {
  useReveal()

  // ✅ state bahasa
  const [lang, setLang] = useState<"id" | "en">("id") // default bahasa Indonesia

  return (
    <main>
      {/* Navbar sekarang pegang bahasa */}
      <Navigation lang={lang} setLang={setLang} />

      <HeroSection lang={lang} />
      <CompanyProfile lang={lang} />
      <StrengthsSection lang={lang} />
      <FeaturedMoments lang={lang} />

      <div className="reveal">
        <ServicesSection lang={lang} />
      </div>

      <EventsSection lang={lang} />
      <AboutSection lang={lang} />
      <BlogSection lang={lang} />

      <div className="reveal">
        <Testimoni lang={lang} />
      </div>

      <div className="reveal">
        <PartnerClapham />
      </div>

      <ContactSection lang={lang} />
      <SiteFooter lang={lang} />
    </main>
  )
}