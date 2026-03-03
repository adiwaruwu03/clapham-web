import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { CompanyProfile } from "@/components/company-profile"
import { StrengthsSection } from "@/components/strengths-section"
import { FeaturedMoments } from "@/components/featured-moments"
import { ServicesSection } from "@/components/services-section"
import { EventsSection } from "@/components/events-section"
import { AboutSection } from "@/components/about-section"
import { BlogSection } from "@/components/blog-section"
import {  } from "@/components/contact-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import PartnerClapham from "@/components/partner-clapham"

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <CompanyProfile />
      <StrengthsSection />
      <FeaturedMoments />
      <ServicesSection />
      <EventsSection />
      <AboutSection />
      <BlogSection />
      <PartnerClapham />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}
