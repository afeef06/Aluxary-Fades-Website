import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import BarbersSection from '@/components/BarbersSection'
import ServicesSection from '@/components/ServicesSection'
import GallerySection from '@/components/GallerySection'
import ReviewsSection from '@/components/ReviewsSection'
import BookingCTA from '@/components/BookingCTA'
import ContactSection from '@/components/ContactSection'
import FAQSection from '@/components/FAQSection'
import InstagramSection from '@/components/InstagramSection'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <BarbersSection />
      <ServicesSection />
      <GallerySection />
      <ReviewsSection />
      <BookingCTA />
      <InstagramSection />
      <ContactSection />
      <FAQSection />
    </main>
  )
}
