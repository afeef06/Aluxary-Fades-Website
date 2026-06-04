'use client'

import { Scissors, Crown } from 'lucide-react'
import { services, SERVICES_NOTE } from '@/data/services'
import FadeIn, { FadeInStagger, FadeInItem } from './FadeIn'

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.025] blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-20">
            <p className="overline mb-4">What We Offer</p>
            <div className="gold-line mx-auto mb-8" />
            <h2 className="heading-section mb-6">
              Services &amp; <em className="text-gold not-italic">Pricing</em>
            </h2>
            <p className="font-sans text-muted text-base font-light max-w-lg mx-auto leading-relaxed">
              Every service is delivered with precision, care, and the attention to detail
              that defines the Aluxury Fades experience.
            </p>
          </div>
        </FadeIn>

        {/* Services grid */}
        <FadeInStagger staggerDelay={0.1} containerDelay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-card-border">
            {services.map((service) => (
              <FadeInItem key={service.name}>
                <div
                  className={`relative bg-card p-8 h-full transition-all duration-300 group hover:bg-[#1c1c1c] ${
                    service.featured ? 'ring-1 ring-gold/30' : ''
                  }`}
                >
                  {service.featured && (
                    <div className="absolute top-4 right-4 flex items-center gap-1">
                      <Crown size={10} className="text-gold" />
                      <span className="font-sans text-[9px] uppercase tracking-luxury text-gold">Popular</span>
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-4">
                    <div className="w-8 h-px bg-gold mt-3" />
                  </div>

                  <h3 className="font-display italic text-2xl text-white font-light mb-3 leading-tight">
                    {service.name}
                  </h3>

                  <p className="font-sans text-sm text-muted font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex items-end justify-between">
                    <div className="font-display italic text-3xl text-gold font-light">
                      ${service.price}
                    </div>
                    <Scissors
                      size={18}
                      className="text-muted/30 rotate-45 group-hover:text-gold/50 transition-colors"
                    />
                  </div>
                </div>
              </FadeInItem>
            ))}
          </div>
        </FadeInStagger>

        {/* Note */}
        <FadeIn delay={0.4}>
          <p className="text-center font-sans text-xs text-muted/50 mt-8 max-w-lg mx-auto leading-relaxed">
            {SERVICES_NOTE}
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
