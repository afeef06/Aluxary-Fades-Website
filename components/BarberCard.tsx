'use client'

import Link from 'next/link'
import { ArrowRight, Scissors, CalendarDays } from 'lucide-react'
import { motion } from 'framer-motion'
import { Barber } from '@/data/barbers'

interface BarberCardProps {
  barber: Barber
  index?: number
}

export default function BarberCard({ barber, index = 0 }: BarberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className="group luxury-card overflow-hidden flex flex-col"
    >
      {/* Image area */}
      <div className="relative aspect-[3/4] overflow-hidden bg-card">
        {/* TODO: Replace with real barber photo using next/image */}
        {/* <Image src={barber.image} alt={`${barber.name} - barber at Aluxury Fades`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" /> */}
        <div className="w-full h-full bg-gradient-to-b from-surface to-card flex items-end justify-center pb-8 transition-transform duration-700 group-hover:scale-105">
          <div className="text-center">
            <div className="w-20 h-20 border border-gold/20 flex items-center justify-center mx-auto mb-4">
              <Scissors size={24} className="text-gold/40 rotate-45" />
            </div>
            <p className="font-sans text-xs text-muted/40 uppercase tracking-luxury">Photo Coming Soon</p>
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />

        {/* Name overlay on image */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-display italic text-3xl text-white font-light leading-none">
            {barber.name}
          </h3>
        </div>
      </div>

      {/* Card content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Tagline */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-px bg-gold" />
          <p className="font-sans text-xs text-gold uppercase tracking-luxury">{barber.tagline}</p>
        </div>

        {/* Description derived from bio first sentence */}
        <p className="font-sans text-sm text-muted font-light leading-relaxed mb-6 flex-1">
          {barber.bio.split('.')[0]}.
        </p>

        {/* Specialties */}
        <div className="flex flex-wrap gap-2 mb-6">
          {barber.specialties.map((spec) => (
            <span
              key={spec}
              className="font-sans text-[10px] px-2.5 py-1 border border-card-border text-muted uppercase tracking-wider"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3 mt-auto">
          <Link
            href={`/barbers/${barber.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 border border-subtle/20 text-subtle hover:border-gold hover:text-white font-sans text-xs uppercase tracking-luxury transition-all duration-200 group/btn"
          >
            View Profile
            <ArrowRight size={11} className="transition-transform group-hover/btn:translate-x-0.5" />
          </Link>
          <a
            href={barber.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 bg-gold text-primary hover:bg-gold-light font-sans font-semibold text-xs uppercase tracking-luxury transition-all duration-200"
          >
            <CalendarDays size={11} />
            Book Now
          </a>
        </div>
      </div>
    </motion.div>
  )
}
