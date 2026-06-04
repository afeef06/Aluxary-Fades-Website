import Link from 'next/link'
import { Scissors, MapPin, Phone, Instagram, ExternalLink } from 'lucide-react'
import { barbers } from '@/data/barbers'
import { services } from '@/data/services'

// TODO: Update with real Booksy link
const BOOKING_URL = 'https://booksy.com/placeholder-shop'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-card-border">
      {/* Top divider with gold */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />

      <div className="section-container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 group mb-6">
              <div className="w-9 h-9 border border-gold/50 flex items-center justify-center group-hover:border-gold transition-colors duration-300">
                <Scissors size={15} className="text-gold rotate-45" />
              </div>
              <div className="leading-none">
                <div className="font-display text-xl font-light tracking-[0.12em] text-white">ALUXURY</div>
                <div className="font-sans text-[9px] uppercase tracking-luxury text-gold font-medium -mt-0.5">FADES</div>
              </div>
            </Link>

            <p className="font-sans text-sm text-muted leading-relaxed mb-6">
              Premier luxury barbershop in Plano, Texas. Where detail meets luxury.
            </p>

            <div className="space-y-3">
              <a
                href="https://maps.google.com/?q=5933+Dallas+Parkway+Suite+300+Plano+TX+75093"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-muted hover:text-gold transition-colors group"
              >
                <MapPin size={14} className="mt-0.5 shrink-0 text-gold/60 group-hover:text-gold" />
                <span className="font-sans text-xs leading-relaxed">
                  5933 Dallas Parkway Suite 300<br />Plano, TX 75093
                </span>
              </a>

              <a
                href="tel:+14699690585"
                className="flex items-center gap-2.5 text-muted hover:text-gold transition-colors group"
              >
                <Phone size={14} className="shrink-0 text-gold/60 group-hover:text-gold" />
                <span className="font-sans text-xs">(469) 969-0585</span>
              </a>

              <a
                href="https://instagram.com/aluxuryfades"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-muted hover:text-gold transition-colors group"
              >
                <Instagram size={14} className="shrink-0 text-gold/60 group-hover:text-gold" />
                <span className="font-sans text-xs">@aluxuryfades</span>
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="overline mb-6">Navigate</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/#about' },
                { label: 'Meet the Barbers', href: '/#barbers' },
                { label: 'Services', href: '/#services' },
                { label: 'Reviews', href: '/#reviews' },
                { label: 'Gallery', href: '/#gallery' },
                { label: 'Location', href: '/#contact' },
                { label: 'FAQ', href: '/#faq' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-muted hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-gold/0 group-hover:bg-gold transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Barbers Column */}
          <div>
            <h3 className="overline mb-6">Our Barbers</h3>
            <ul className="space-y-3">
              {barbers.map((barber) => (
                <li key={barber.slug}>
                  <Link
                    href={`/barbers/${barber.slug}`}
                    className="font-sans text-sm text-muted hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-gold/0 group-hover:bg-gold transition-all duration-300" />
                    {barber.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Booking Column */}
          <div>
            <h3 className="overline mb-6">Services</h3>
            <ul className="space-y-3 mb-8">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href="/#services"
                    className="font-sans text-sm text-muted hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-gold/0 group-hover:bg-gold transition-all duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-gold text-xs py-3 px-5"
            >
              Book Online
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-card-border">
        <div className="section-container py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-muted/60">
            © {currentYear} Aluxury Fades. All rights reserved. Plano, Texas.
          </p>
          <p className="font-sans text-xs text-muted/40 font-display italic">
            Where Detail Meets Luxury
          </p>
        </div>
      </div>
    </footer>
  )
}
