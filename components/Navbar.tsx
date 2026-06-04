'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Scissors } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { barbers } from '@/data/barbers'

// TODO: Update this URL when real Booksy link is available
const GLOBAL_BOOKING_URL = 'https://booksy.com/placeholder-shop'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Barbers', href: '/#barbers', hasDropdown: true },
  { label: 'Services', href: '/#services' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Location', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-primary/95 backdrop-blur-md border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" aria-label="Aluxury Fades Home">
              <div className="w-8 h-8 border border-gold/60 flex items-center justify-center group-hover:border-gold transition-colors duration-300">
                <Scissors size={14} className="text-gold rotate-45" />
              </div>
              <div className="leading-none">
                <div className="font-display text-lg font-light tracking-[0.12em] text-white">
                  ALUXURY
                </div>
                <div className="font-sans text-[9px] uppercase tracking-luxury text-gold font-medium -mt-0.5">
                  FADES
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="flex items-center gap-1 font-sans text-sm text-subtle/80 hover:text-white uppercase tracking-[0.12em] transition-colors duration-200 group"
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-surface border border-card-border shadow-card z-50"
                        >
                          <div className="py-2">
                            <div className="px-4 py-2 border-b border-card-border">
                              <span className="text-[10px] uppercase tracking-luxury text-gold font-medium">
                                Our Barbers
                              </span>
                            </div>
                            {barbers.map((barber) => (
                              <Link
                                key={barber.slug}
                                href={`/barbers/${barber.slug}`}
                                className="block px-4 py-2.5 font-sans text-sm text-subtle hover:text-white hover:bg-card transition-colors duration-150"
                              >
                                {barber.name}
                                <span className="block text-[10px] text-muted mt-0.5">{barber.tagline}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`font-sans text-sm uppercase tracking-[0.12em] transition-colors duration-200 relative group ${
                      pathname === link.href ? 'text-white' : 'text-subtle/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <a
                href={GLOBAL_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-xs py-3 px-6"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-gold transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-surface lg:hidden"
          >
            <div className="flex flex-col h-full pt-24 pb-12 px-8 overflow-y-auto">
              {/* Main links */}
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="block py-4 font-display text-3xl font-light italic text-white hover:text-gold transition-colors duration-200 border-b border-card-border"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Barbers sub-links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <p className="overline mb-4">Our Barbers</p>
                <div className="grid grid-cols-2 gap-2">
                  {barbers.map((barber) => (
                    <Link
                      key={barber.slug}
                      href={`/barbers/${barber.slug}`}
                      className="py-2 font-sans text-sm text-muted hover:text-gold transition-colors"
                    >
                      {barber.name}
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Mobile Book Now CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-auto"
              >
                <a
                  href={GLOBAL_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full justify-center mt-8"
                >
                  Book Your Appointment
                </a>
                <p className="text-center text-muted text-xs mt-4 font-sans">
                  Walk-ins welcome · Online booking recommended
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
