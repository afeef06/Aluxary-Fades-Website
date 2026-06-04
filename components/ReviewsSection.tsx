'use client'

import { Star, Quote } from 'lucide-react'
import { globalReviews, SHOP_STATS } from '@/data/reviews'
import FadeIn, { FadeInStagger, FadeInItem } from './FadeIn'

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-32 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold/[0.03] blur-[80px]" />

      <div className="section-container relative z-10">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-20">
            <p className="overline mb-4">Client Reviews</p>
            <div className="gold-line mx-auto mb-8" />
            <h2 className="heading-section mb-6">
              What Our Clients <em className="text-gold not-italic">Say</em>
            </h2>

            {/* Aggregate rating display */}
            <div className="inline-flex flex-col items-center gap-3">
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} className="text-gold fill-gold" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <span className="font-display italic text-5xl text-white font-light">
                  {SHOP_STATS.rating.toFixed(1)}
                </span>
                <div className="text-left">
                  <p className="font-sans text-sm text-subtle">Based on</p>
                  <p className="font-sans text-sm font-semibold text-white">
                    {SHOP_STATS.reviewCount}+ {SHOP_STATS.platform} Reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Reviews grid */}
        <FadeInStagger staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalReviews.map((review, i) => (
              <FadeInItem key={i}>
                <div className="luxury-card p-8 h-full flex flex-col relative">
                  {/* Decorative quote mark */}
                  <Quote
                    size={32}
                    className="absolute top-6 right-6 text-gold/10"
                    aria-hidden="true"
                  />

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-5">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} size={12} className="text-gold fill-gold" />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="font-sans text-sm text-subtle/80 font-light leading-relaxed flex-1 mb-6">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Reviewer */}
                  <div className="flex items-center gap-3 pt-4 border-t border-card-border">
                    <div className="w-8 h-8 bg-card-border flex items-center justify-center">
                      <span className="font-display italic text-sm text-gold font-light">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-sans text-sm font-medium text-white">{review.name}</p>
                      <p className="font-sans text-xs text-muted">{review.date}</p>
                    </div>
                    <div className="ml-auto">
                      <span className="font-sans text-[9px] text-gold uppercase tracking-luxury">
                        Verified
                      </span>
                    </div>
                  </div>
                </div>
              </FadeInItem>
            ))}
          </div>
        </FadeInStagger>

        {/* Google link */}
        <FadeIn delay={0.4}>
          <div className="text-center mt-12">
            <a
              href="https://maps.google.com/?q=Aluxury+Fades+Plano+TX"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs py-3 px-6"
            >
              See All Reviews on Google
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
