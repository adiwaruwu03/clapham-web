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
      <ContactSection />
      <SiteFooter />
    </main>
  )
}
