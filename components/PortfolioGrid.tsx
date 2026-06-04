'use client'

import { useState } from 'react'
import { Scissors, Plus } from 'lucide-react'
import { PortfolioItem } from '@/data/barbers'
import { FadeInStagger, FadeInItem } from './FadeIn'

interface PortfolioGridProps {
  items: PortfolioItem[]
  barberName: string
}

export default function PortfolioGrid({ items, barberName }: PortfolioGridProps) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <FadeInStagger staggerDelay={0.06}>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {items.map((item, i) => (
          <FadeInItem key={i}>
            <div
              className={`relative overflow-hidden group cursor-pointer ${
                i === 0 ? 'md:col-span-2 aspect-[2/1]' : 'aspect-square'
              }`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* TODO: Replace with real portfolio photo using next/image
                  <Image
                    src={`/images/barbers/${barberName.toLowerCase()}/portfolio-${i + 1}.jpg`}
                    alt={`${item.title} by ${barberName} at Aluxury Fades`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
              */}
              <div
                className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
                  i % 2 === 0
                    ? 'bg-gradient-to-br from-card to-[#0d0d0d]'
                    : 'bg-gradient-to-tl from-surface to-card'
                }`}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <Scissors
                    size={i === 0 ? 36 : 22}
                    className="text-white/[0.06] rotate-45"
                  />
                </div>
              </div>

              {/* Hover overlay */}
              <div
                className={`absolute inset-0 bg-primary/75 transition-opacity duration-300 flex flex-col items-start justify-end p-4 ${
                  hovered === i ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div>
                  <div className="w-5 h-px bg-gold mb-2" />
                  <p className="font-display italic text-lg text-white font-light leading-tight">
                    {item.title}
                  </p>
                  <p className="font-sans text-[10px] text-gold uppercase tracking-luxury mt-1">
                    {item.category}
                  </p>
                </div>
              </div>

              {/* Always-visible label for small screens */}
              <div className="absolute top-2 right-2 lg:hidden">
                <div className="bg-primary/60 px-2 py-1">
                  <span className="font-sans text-[9px] text-gold uppercase tracking-wider">{item.category}</span>
                </div>
              </div>
            </div>
          </FadeInItem>
        ))}
      </div>
    </FadeInStagger>
  )
}
