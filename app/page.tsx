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

export default function HomePage() {

  useReveal()

  return (
    <main>
      <Navigation />

      
        <HeroSection />
      

      
        <CompanyProfile />
      

        <StrengthsSection />
      

        <FeaturedMoments />
     

      <div className="reveal">
        <ServicesSection />
      </div>

      
        <EventsSection />
      

      
        <AboutSection />
      

      
        <BlogSection />
      
      <div className="reveal">
        <Testimoni />
      </div>

      <div className="reveal">
        <PartnerClapham />
      </div>

      
        <ContactSection />
      

      <SiteFooter />
    </main>
  )
}