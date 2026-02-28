import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StrengthsSection } from "@/components/strengths-section"
import { FeaturedMoments } from "@/components/featured-moments"
import { CompanyProfile } from "@/components/company-profile"
import { ServicesSection } from "@/components/services-section"
import { EventsSection } from "@/components/events-section"
import { AboutSection } from "@/components/about-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <StrengthsSection />
      <FeaturedMoments />
      <CompanyProfile />
      <ServicesSection />
      <EventsSection />
      <AboutSection />
      <BlogSection />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}
