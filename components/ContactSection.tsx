import { MapPin, Phone, Instagram, Navigation, ExternalLink } from 'lucide-react'
import FadeIn from './FadeIn'

// TODO: Update with real Booksy link
const BOOKING_URL = 'https://booksy.com/placeholder-shop'

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-surface relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Contact info */}
          <FadeIn direction="right">
            <div>
              <p className="overline mb-4">Find Us</p>
              <div className="gold-line mb-8" />
              <h2 className="heading-section mb-8">
                Visit <em className="text-gold not-italic">Aluxury Fades</em>
              </h2>

              <div className="space-y-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-card-border flex items-center justify-center shrink-0 mt-1">
                    <MapPin size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-muted uppercase tracking-luxury mb-1">Address</p>
                    <p className="font-sans text-white font-light leading-relaxed">
                      5933 Dallas Parkway Suite 300<br />
                      Plano, TX 75093
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-card-border flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-muted uppercase tracking-luxury mb-1">Phone</p>
                    <a
                      href="tel:+14699690585"
                      className="font-sans text-white font-light hover:text-gold transition-colors"
                    >
                      (469) 969-0585
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-card-border flex items-center justify-center shrink-0">
                    <Instagram size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-muted uppercase tracking-luxury mb-1">Instagram</p>
                    <a
                      href="https://instagram.com/aluxuryfades"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-white font-light hover:text-gold transition-colors"
                    >
                      @aluxuryfades
                    </a>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <a
                  href="tel:+14699690585"
                  className="btn-gold text-xs py-3 px-5"
                >
                  <Phone size={12} />
                  Call Now
                </a>
                <a
                  href="https://maps.google.com/?q=5933+Dallas+Parkway+Suite+300+Plano+TX+75093"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-xs py-3 px-5"
                >
                  <Navigation size={12} />
                  Get Directions
                </a>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-xs py-3 px-5"
                >
                  <ExternalLink size={12} />
                  Book Online
                </a>
                <a
                  href="https://instagram.com/aluxuryfades"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-xs py-3 px-5"
                >
                  <Instagram size={12} />
                  Follow Us
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Right — Map placeholder */}
          <FadeIn direction="left" delay={0.2}>
            <div className="relative">
              {/* TODO: Replace this div with a real Google Maps embed:
                  <iframe
                    src="https://www.google.com/maps/embed?pb=..."
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Aluxury Fades location map"
                  />
              */}
              <div className="w-full aspect-[4/3] bg-card border border-card-border relative overflow-hidden">
                {/* Map placeholder visual */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="relative">
                    <MapPin size={40} className="text-gold" />
                    <div className="absolute inset-0 animate-ping">
                      <MapPin size={40} className="text-gold opacity-30" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="font-display italic text-xl text-white font-light mb-1">Aluxury Fades</p>
                    <p className="font-sans text-sm text-muted">5933 Dallas Pkwy Suite 300</p>
                    <p className="font-sans text-sm text-muted">Plano, TX 75093</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=5933+Dallas+Parkway+Suite+300+Plano+TX+75093"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold text-xs py-2 px-5 mt-2"
                  >
                    Open in Google Maps
                  </a>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gold/40" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-gold/40" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-gold/40" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gold/40" />
              </div>

              <p className="font-sans text-xs text-muted/40 text-center mt-3">
                Located on Dallas Parkway, Plano, TX 75093
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
