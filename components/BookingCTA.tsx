'use client'

import Link from 'next/link'
import { ArrowRight, Scissors } from 'lucide-react'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

// TODO: Update with real Booksy link
const BOOKING_URL = 'https://booksy.com/placeholder-shop'

export default function BookingCTA() {
  return (
    <section id="booking" className="py-32 bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/[0.04] blur-[100px] rounded-full" />
        {/* Decorative text */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display italic text-[200px] md:text-[300px] font-light leading-none select-none whitespace-nowrap"
          style={{ color: 'rgba(201, 162, 77, 0.025)' }}
          aria-hidden="true"
        >
          BOOK
        </div>
      </div>

      <div className="section-container relative z-10">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-px bg-gold/40" />
              <Scissors size={16} className="text-gold rotate-45" />
              <div className="w-16 h-px bg-gold/40" />
            </div>

            <p className="overline mb-6">Ready When You Are</p>

            <h2 className="font-display italic text-[clamp(40px,6vw,72px)] font-light text-white leading-tight mb-6">
              Ready for Your Next<br />
              <em className="text-gold not-italic">Luxury Cut?</em>
            </h2>

            <p className="font-sans text-muted text-lg font-light leading-relaxed mb-12 max-w-lg mx-auto">
              Book online with one of our barbers and experience precision grooming
              at Aluxury Fades. Walk-ins welcome, but booking is recommended.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold group text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Online
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </motion.a>

              <Link href="/#barbers" className="btn-ghost group text-sm">
                Choose Your Barber
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <p className="font-sans text-xs text-muted/40 mt-8">
              Walk-ins welcome · Online booking recommended to secure your preferred barber and time
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
