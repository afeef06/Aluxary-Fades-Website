'use client'

import Link from 'next/link'
import { Star, ArrowLeft, ArrowRight, Phone, Navigation, Instagram, Scissors, CalendarDays } from 'lucide-react'
import { motion } from 'framer-motion'
import { Barber } from '@/data/barbers'
import PortfolioGrid from './PortfolioGrid'
import FadeIn, { FadeInStagger, FadeInItem } from './FadeIn'
import { Quote } from 'lucide-react'

interface BarberPageContentProps {
  barber: Barber
}

export default function BarberPageContent({ barber }: BarberPageContentProps) {
  return (
    <main>
      {/* Back nav */}
      <div className="pt-28 pb-4 bg-primary">
        <div className="section-container">
          <Link
            href="/#barbers"
            className="inline-flex items-center gap-2 font-sans text-xs text-muted hover:text-gold transition-colors uppercase tracking-luxury group"
          >
            <ArrowLeft size={12} className="transition-transform group-hover:-translate-x-1" />
            All Barbers
          </Link>
        </div>
      </div>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="bg-primary pt-10 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/[0.04] blur-[100px]" />

        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="overline mb-4">Aluxury Fades · Barber Profile</p>
                <div className="gold-line mb-8" />

                <h1 className="font-display text-[clamp(64px,10vw,120px)] italic font-light text-white leading-none mb-4">
                  {barber.name}
                </h1>

                <div className="flex items-center gap-3 mb-8">
                  <div className="w-px h-6 bg-gold" />
                  <p className="font-sans text-sm text-gold uppercase tracking-luxury">{barber.tagline}</p>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-2 mb-8">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="text-gold fill-gold" />
                  ))}
                  <span className="font-sans text-xs text-muted ml-2">5.0 — Top Rated</span>
                </div>

                <p className="font-sans text-base text-subtle/80 font-light leading-relaxed mb-10 max-w-md">
                  {barber.bio.split('.').slice(0, 2).join('.') + '.'}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  {/* TODO: Update barber.bookingUrl with the real Booksy or Calendly link for this barber */}
                  <motion.a
                    href={barber.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <CalendarDays size={14} />
                    Book with {barber.name}
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </motion.a>
                  <a
                    href="#portfolio"
                    className="btn-ghost"
                  >
                    View Portfolio
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Portrait placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-[3/4] overflow-hidden border border-card-border">
                {/* TODO: Replace with real barber portrait:
                    <Image
                      src={`/images/barbers/${barber.slug}.jpg`}
                      alt={`${barber.name} — ${barber.tagline} at Aluxury Fades`}
                      fill
                      className="object-cover"
                    />
                */}
                <div className="w-full h-full bg-gradient-to-b from-card to-surface flex items-center justify-center">
                  <div className="text-center">
                    <Scissors size={40} className="text-gold/20 mx-auto mb-4 rotate-45" />
                    <p className="font-display italic text-3xl text-white/15 font-light">{barber.name}</p>
                    <p className="font-sans text-xs text-muted/30 uppercase tracking-luxury mt-2">Portrait</p>
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-gold" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-gold" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gold" />
              </div>

              {/* Tagline badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-4 top-12 bg-gold p-4"
              >
                <p className="font-sans text-primary font-semibold text-[10px] uppercase tracking-luxury leading-tight text-center max-w-[80px]">
                  {barber.specialties[0]}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── About ──────────────────────────────────────────── */}
      <section className="py-24 bg-surface relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="section-container">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="overline mb-4">Background</p>
              <div className="gold-line mb-8" />
              <h2 className="heading-section mb-8">
                About <em className="text-gold not-italic">{barber.name}</em>
              </h2>
              <p className="font-sans text-lg text-subtle/80 font-light leading-relaxed">
                {barber.bio}
              </p>

              {/* Specialties */}
              <div className="flex flex-wrap gap-3 mt-10">
                {barber.specialties.map((spec) => (
                  <span
                    key={spec}
                    className="font-sans text-xs px-4 py-2 border border-card-border text-muted uppercase tracking-luxury hover:border-gold/40 hover:text-subtle transition-colors"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────── */}
      <section className="py-24 bg-primary relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="section-container">
          <FadeIn>
            <div className="mb-12">
              <p className="overline mb-4">Pricing</p>
              <div className="gold-line mb-8" />
              <h2 className="heading-section">
                Services &amp; <em className="text-gold not-italic">Rates</em>
              </h2>
              <p className="font-sans text-sm text-muted mt-3">
                Prices may vary. Contact {barber.name} directly for specific service pricing.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger staggerDelay={0.07}>
            <div className="space-y-0 border border-card-border divide-y divide-card-border">
              {barber.services.map((service) => (
                <FadeInItem key={service.name}>
                  <div className="flex items-center justify-between p-6 group hover:bg-card transition-colors duration-200">
                    <div className="flex-1">
                      <h3 className="font-sans font-medium text-white mb-1 group-hover:text-gold transition-colors">
                        {service.name}
                      </h3>
                      <p className="font-sans text-sm text-muted font-light">{service.description}</p>
                    </div>
                    <div className="font-display italic text-3xl text-gold font-light ml-8">
                      ${service.price}
                    </div>
                  </div>
                </FadeInItem>
              ))}
            </div>
          </FadeInStagger>
        </div>
      </section>

      {/* ── Portfolio ──────────────────────────────────────── */}
      <section id="portfolio" className="py-24 bg-surface relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="section-container">
          <FadeIn>
            <div className="mb-12">
              <p className="overline mb-4">The Work</p>
              <div className="gold-line mb-8" />
              <h2 className="heading-section">
                {barber.name}&apos;s <em className="text-gold not-italic">Portfolio</em>
              </h2>
            </div>
          </FadeIn>

          <PortfolioGrid items={barber.portfolio} barberName={barber.name} />
        </div>
      </section>

      {/* ── Reviews ────────────────────────────────────────── */}
      <section className="py-24 bg-primary relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="section-container">
          <FadeIn>
            <div className="mb-12">
              <p className="overline mb-4">Client Feedback</p>
              <div className="gold-line mb-8" />
              <h2 className="heading-section">
                What Clients Say About <em className="text-gold not-italic">{barber.name}</em>
              </h2>
            </div>
          </FadeIn>

          <FadeInStagger staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {barber.reviews.map((review, i) => (
                <FadeInItem key={i}>
                  <div className="luxury-card p-8 h-full flex flex-col relative">
                    <Quote size={28} className="absolute top-5 right-5 text-gold/10" aria-hidden="true" />
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <Star key={j} size={12} className="text-gold fill-gold" />
                      ))}
                    </div>
                    <p className="font-sans text-sm text-subtle/80 font-light leading-relaxed flex-1 mb-6">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-card-border">
                      <div className="w-8 h-8 bg-card-border flex items-center justify-center">
                        <span className="font-display italic text-sm text-gold">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-sans text-sm font-medium text-white">{review.name}</p>
                        <p className="font-sans text-xs text-muted">{review.date}</p>
                      </div>
                    </div>
                  </div>
                </FadeInItem>
              ))}
            </div>
          </FadeInStagger>
        </div>
      </section>

      {/* ── Booking CTA ────────────────────────────────────── */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span
            className="font-display italic font-light text-[200px] leading-none"
            style={{ color: 'rgba(201, 162, 77, 0.025)' }}
          >
            {barber.name}
          </span>
        </div>

        <div className="section-container relative z-10">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <p className="overline mb-4">Ready?</p>
              <div className="gold-line mx-auto mb-8" />
              <h2 className="heading-section mb-6">
                Book Your Appointment<br />
                <em className="text-gold not-italic">with {barber.name}</em>
              </h2>
              <p className="font-sans text-muted font-light leading-relaxed mb-10">
                Book your appointment with {barber.name} today and experience precision grooming at Aluxury Fades.
              </p>
              {/* TODO: Replace href with real Booksy or Calendly link for {barber.name} */}
              <motion.a
                href={barber.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <CalendarDays size={14} />
                Book on Booksy
                <ArrowRight size={14} />
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Location Reminder ──────────────────────────────── */}
      <section className="py-16 bg-primary border-t border-card-border">
        <div className="section-container">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="font-sans text-xs text-muted uppercase tracking-luxury mb-2">Location</p>
                <p className="font-sans text-subtle font-light">
                  Appointments take place at Aluxury Fades,{' '}
                  <span className="text-white">5933 Dallas Parkway Suite 300, Plano, TX 75093</span>
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+14699690585"
                  className="inline-flex items-center gap-2 btn-ghost text-xs py-2.5 px-4"
                >
                  <Phone size={12} />
                  Call
                </a>
                <a
                  href="https://maps.google.com/?q=5933+Dallas+Parkway+Suite+300+Plano+TX+75093"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-ghost text-xs py-2.5 px-4"
                >
                  <Navigation size={12} />
                  Directions
                </a>
                <a
                  href="https://instagram.com/aluxuryfades"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-ghost text-xs py-2.5 px-4"
                >
                  <Instagram size={12} />
                  Instagram
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
