'use client'

import { useState, useEffect } from 'react'
import { CalendarDays } from 'lucide-react'

// TODO: Update with real Booksy link
const BOOKING_URL = 'https://booksy.com/placeholder-shop'

export default function MobileStickyBooking() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 lg:hidden transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-gold text-primary font-sans font-semibold text-sm px-7 py-4 rounded-full shadow-gold-glow-strong uppercase tracking-luxury active:scale-95 transition-transform"
      >
        <CalendarDays size={16} />
        Book Now
      </a>
    </div>
  )
}
