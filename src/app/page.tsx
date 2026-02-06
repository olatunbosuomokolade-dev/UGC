import HeroSection from '@/components/sections/HeroSection'
import MarqueeBanner from '@/components/sections/MarqueeBanner'
import AboutSection from '@/components/sections/AboutSection'
import StarDivider from '@/components/decorative/StarDivider'
import WhyUGCStats from '@/components/sections/WhyUGCStats'
import PortfolioSection from '@/components/sections/PortfolioSection'
import VideoPortfolioSection from '@/components/sections/VideoPortfolioSection'
import PhotoGridSection from '@/components/sections/PhotoGridSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import PricingSection from '@/components/sections/PricingSection'
import ContactFooter from '@/components/sections/ContactFooter'

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeBanner />
      <section id="portfolio">
        <VideoPortfolioSection />
      </section>
      <StarDivider />
      <section id="about">
        <AboutSection />
      </section>
      <WhyUGCStats />
      <PortfolioSection />
      <PhotoGridSection />
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <StarDivider />
      <section id="pricing">
        <PricingSection />
      </section>
      <section id="contact">
        <ContactFooter />
      </section>
    </>
  )
}
