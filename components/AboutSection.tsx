'use client'

import { CheckCircle2 } from 'lucide-react'
import FadeIn, { FadeInStagger, FadeInItem } from './FadeIn'

const values = [
  'Precision fades',
  'Clean professional atmosphere',
  'Experienced barbers',
  'Great vibes',
  'Good for kids',
  'Walk-ins welcome',
  'Easy online booking',
  'Convenient Dallas Parkway location',
]

const stats = [
  { value: '5.0', label: 'Google Rating' },
  { value: '36+', label: 'Happy Clients Reviewed' },
  { value: '9', label: 'Expert Barbers' },
  { value: '100%', label: 'Commitment to Quality' },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-surface relative overflow-hidden">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Background texture element */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold/[0.03] blur-[80px]" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Large decorative number + stats */}
          <FadeIn direction="right">
            <div className="relative">
              {/* Giant decorative numeral */}
              <div
                className="font-display italic text-[200px] md:text-[280px] leading-none font-light select-none"
                style={{ color: 'rgba(201, 162, 77, 0.04)' }}
                aria-hidden="true"
              >
                AF
              </div>

              {/* Stats grid, overlaid */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-6 w-full max-w-sm">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center p-6 bg-card border border-card-border">
                      <div className="font-display italic text-4xl text-gold font-light mb-1">
                        {stat.value}
                      </div>
                      <div className="font-sans text-xs text-muted uppercase tracking-luxury">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right — Text content */}
          <FadeIn direction="left" delay={0.2}>
            <div>
              <p className="overline mb-4">About Us</p>
              <div className="gold-line mb-8" />

              <h2 className="heading-section mb-6">
                Plano's Premier<br />
                <em className="text-gold not-italic">Luxury Barbershop</em>
              </h2>

              <div className="space-y-5 font-sans text-subtle/80 text-base font-light leading-relaxed mb-10">
                <p>
                  Aluxury Fades was built on one principle: every client deserves a premium experience
                  from the moment they walk through the door. Located on Dallas Parkway in Plano,
                  we've assembled a team of skilled barbers united by a passion for precision, craft,
                  and elevating the standard of what a barbershop can be.
                </p>
                <p>
                  We specialize in precise fades, professional grooming, and luxury barber services
                  in a clean, welcoming environment. Walk-ins are always welcome, and online booking
                  is available so you can secure your preferred barber and time with ease.
                </p>
                <p>
                  Whether it's your first visit or your fiftieth, you'll receive the same level
                  of care, detail, and craftsmanship that has earned us a perfect 5.0 rating from
                  our clients across Plano and the greater DFW area.
                </p>
              </div>

              {/* Value bullets */}
              <FadeInStagger staggerDelay={0.06} containerDelay={0.3}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {values.map((value) => (
                    <FadeInItem key={value}>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 size={14} className="text-gold shrink-0" />
                        <span className="font-sans text-sm text-subtle/70">{value}</span>
                      </div>
                    </FadeInItem>
                  ))}
                </div>
              </FadeInStagger>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
