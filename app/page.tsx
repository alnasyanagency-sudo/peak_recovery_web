import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TrustBar } from "@/components/trust-bar"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { WhyUsSection } from "@/components/why-us-section"
// import { TestimonialsSection } from "@/components/testimonials-section"
import { GallerySection } from "@/components/gallery-section"
import { BookingSection } from "@/components/booking-section"
import { MapSection } from "@/components/map-section"
import { Footer } from "@/components/footer"
import { WhatsAppFab } from "@/components/whatsapp-fab"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      {/* <TestimonialsSection /> */}
      <GallerySection />
      <BookingSection />
      <MapSection />
      <Footer />
      <WhatsAppFab />
    </main>
  )
}