'use client'

import { Instagram, Scissors, ExternalLink } from 'lucide-react'
import FadeIn, { FadeInStagger, FadeInItem } from './FadeIn'

const INSTAGRAM_URL = 'https://instagram.com/aluxuryfades'
const INSTAGRAM_HANDLE = '@aluxuryfades'

const instagramPosts = [
  { caption: 'Fresh fade drop 🔥' },
  { caption: 'Shop vibes only' },
  { caption: 'Precision at its finest' },
  { caption: 'Clean lineup, every time' },
  { caption: 'The luxury difference' },
  { caption: 'Book your next look' },
]

export default function InstagramSection() {
  return (
    <section className="py-32 bg-surface relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="section-container">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="overline mb-4">Social</p>
            <div className="gold-line mx-auto mb-8" />
            <h2 className="heading-section mb-4">
              Follow the <em className="text-gold not-italic">Experience</em>
            </h2>
            <p className="font-sans text-muted text-base font-light max-w-lg mx-auto leading-relaxed mb-6">
              See fresh cuts, shop updates, and barber highlights on Instagram.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm text-gold hover:text-gold-light transition-colors group"
            >
              <Instagram size={16} />
              {INSTAGRAM_HANDLE}
              <ExternalLink size={12} className="opacity-60" />
            </a>
          </div>
        </FadeIn>

        {/* Instagram grid */}
        <FadeInStagger staggerDelay={0.07}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-10">
            {instagramPosts.map((post, i) => (
              <FadeInItem key={i}>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-square overflow-hidden group"
                  aria-label={`Instagram post: ${post.caption}`}
                >
                  {/* TODO: Replace with actual Instagram feed image when available */}
                  <div className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${
                    i % 3 === 0
                      ? 'bg-gradient-to-br from-card to-surface'
                      : i % 3 === 1
                      ? 'bg-gradient-to-tl from-surface to-[#151515]'
                      : 'bg-gradient-to-br from-[#151515] to-card'
                  }`}>
                    <div className="w-full h-full flex items-center justify-center">
                      <Scissors size={20} className="text-white/5 rotate-45" />
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Instagram size={20} className="text-gold" />
                  </div>
                </a>
              </FadeInItem>
            ))}
          </div>
        </FadeInStagger>

        {/* CTA */}
        <FadeIn delay={0.4}>
          <div className="text-center">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center gap-2 text-xs py-3 px-6"
            >
              <Instagram size={14} />
              Follow {INSTAGRAM_HANDLE} on Instagram
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
