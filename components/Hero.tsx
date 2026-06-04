'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Phone, Instagram, Star, ArrowRight, Scissors } from 'lucide-react'

// TODO: Update with real Booksy link
const BOOKING_URL = 'https://booksy.com/placeholder-shop'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-primary"
    >
      {/* Background gradient elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/[0.04] blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/[0.03] blur-[100px]" />
      </div>

      {/* Vertical decorative lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden lg:block" style={{ left: '8%' }} />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block" style={{ right: '8%' }} />

      <div className="section-container relative z-10 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Text Content */}
          <div>
            {/* Overline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-px h-8 bg-gold/60" />
              <span className="overline">Plano, Texas · Est. Excellence</span>
            </motion.div>

            {/* Main headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h1 className="font-display font-light leading-none">
                <span className="block text-[clamp(48px,7vw,88px)] italic text-white">
                  Welcome to
                </span>
                <span className="block text-[clamp(64px,9vw,112px)] italic text-white">
                  Aluxury
                </span>
                <span className="block text-[clamp(64px,9vw,112px)] italic text-gold leading-none">
                  Fades
                </span>
              </h1>
            </motion.div>

            {/* Gold divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="origin-left w-24 h-px bg-gold my-8"
            />

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="font-sans text-lg md:text-xl text-subtle/80 font-light leading-relaxed mb-4 max-w-lg"
            >
              Premier fades, luxury grooming, and precise barbering in Plano, Texas.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="font-sans text-sm text-muted font-light leading-relaxed mb-10 max-w-md"
            >
              Located on Dallas Parkway, Aluxury Fades delivers sharp cuts, clean fades, beard grooming,
              and a premium barbershop experience built around detail, confidence, and style.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold group"
              >
                Book Online
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
              <Link href="/#barbers" className="btn-ghost group">
                Meet the Barbers
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Trust bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6 border-t border-white/10"
            >
              {/* Stars */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="text-gold fill-gold" />
                  ))}
                </div>
                <span className="font-sans text-sm text-subtle">
                  <span className="font-semibold text-white">5.0</span> · 36 Google Reviews
                </span>
              </div>

              <div className="w-px h-4 bg-white/10 hidden sm:block" />

              {/* Address */}
              <a
                href="https://maps.google.com/?q=5933+Dallas+Parkway+Suite+300+Plano+TX+75093"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-sans text-xs text-muted hover:text-gold transition-colors"
              >
                <MapPin size={12} className="text-gold" />
                5933 Dallas Pkwy Suite 300, Plano, TX
              </a>
            </motion.div>

            {/* Contact strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex items-center gap-6 mt-4"
            >
              <a
                href="tel:+14699690585"
                className="flex items-center gap-1.5 font-sans text-xs text-muted hover:text-gold transition-colors"
              >
                <Phone size={12} className="text-gold/60" />
                (469) 969-0585
              </a>
              <a
                href="https://instagram.com/aluxuryfades"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-sans text-xs text-muted hover:text-gold transition-colors"
              >
                <Instagram size={12} className="text-gold/60" />
                @aluxuryfades
              </a>
            </motion.div>
          </div>

          {/* Right — Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative hidden lg:block"
          >
            {/* Main image placeholder */}
            <div className="relative aspect-[4/5] overflow-hidden border border-card-border">
              {/* TODO: Replace this with real shop/fade image using next/image */}
              <div className="w-full h-full bg-gradient-to-br from-card to-surface flex items-center justify-center">
                <div className="text-center">
                  <Scissors size={48} className="text-gold/30 mx-auto mb-4 rotate-45" />
                  <p className="font-display italic text-2xl text-white/20">Aluxury Fades</p>
                  <p className="font-sans text-xs text-muted/40 uppercase tracking-luxury mt-2">Shop Interior</p>
                </div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-gold" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-gold" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gold" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -left-8 bottom-16 bg-card border border-card-border p-5 shadow-card"
            >
              <div className="flex items-center gap-2 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={10} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="font-display italic text-2xl text-white font-light leading-none">5.0</p>
              <p className="font-sans text-[10px] text-muted mt-1 uppercase tracking-luxury">
                Google Rating
              </p>
              <p className="font-sans text-[10px] text-muted/60">36 reviews</p>
            </motion.div>

            {/* Walk-ins badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="absolute -right-4 top-16 bg-gold p-4 shadow-gold-glow"
            >
              <p className="font-sans text-primary font-semibold text-[10px] uppercase tracking-luxury leading-tight">
                Walk-ins<br />Welcome
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-[10px] uppercase tracking-luxury text-muted/40">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent" />
      </motion.div>
    </section>
  )
}
