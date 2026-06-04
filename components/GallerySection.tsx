'use client'

import { useState } from 'react'
import { Scissors } from 'lucide-react'
import FadeIn, { FadeInStagger, FadeInItem } from './FadeIn'

const galleryItems = [
  { label: 'Shop Interior', category: 'space', size: 'large' },
  { label: 'Barber Chairs', category: 'space', size: 'small' },
  { label: 'Fresh Fade', category: 'work', size: 'small' },
  { label: 'Beard Work', category: 'work', size: 'large' },
  { label: 'Clean Lineup', category: 'work', size: 'small' },
  { label: 'Luxury Grooming', category: 'work', size: 'small' },
]

export default function GallerySection() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-32 bg-primary relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="section-container">
        <FadeIn>
          <div className="text-center mb-20">
            <p className="overline mb-4">The Atmosphere</p>
            <div className="gold-line mx-auto mb-8" />
            <h2 className="heading-section mb-6">
              Crafted with <em className="text-gold not-italic">Confidence</em>
            </h2>
            <p className="font-sans text-muted text-base font-light max-w-lg mx-auto leading-relaxed">
              A clean, modern interior with premium lighting and an atmosphere built for excellence.
            </p>
          </div>
        </FadeIn>

        {/* Gallery Grid — editorial asymmetric layout */}
        <FadeInStagger staggerDelay={0.08}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryItems.map((item, i) => (
              <FadeInItem key={i}>
                <div
                  className={`relative overflow-hidden group cursor-pointer ${
                    item.size === 'large' && i === 0 ? 'md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-square' : 'aspect-square'
                  }`}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* TODO: Replace with real shop/work images using next/image */}
                  <div className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
                    i % 2 === 0
                      ? 'bg-gradient-to-br from-card to-surface'
                      : 'bg-gradient-to-tl from-surface to-card'
                  }`}>
                    <div className="w-full h-full flex items-center justify-center">
                      <Scissors
                        size={i === 0 ? 40 : 24}
                        className="text-white/5 rotate-45"
                      />
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div
                    className={`absolute inset-0 bg-primary/70 flex items-end p-5 transition-opacity duration-300 ${
                      hovered === i ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div>
                      <div className="w-6 h-px bg-gold mb-2" />
                      <p className="font-display italic text-xl text-white font-light">{item.label}</p>
                      <p className="font-sans text-xs text-gold uppercase tracking-luxury mt-1">{item.category}</p>
                    </div>
                  </div>
                </div>
              </FadeInItem>
            ))}
          </div>
        </FadeInStagger>

        <FadeIn delay={0.4}>
          <p className="text-center font-sans text-xs text-muted/40 mt-8">
            5933 Dallas Parkway Suite 300, Plano, TX — A premium environment built for a premium experience.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
