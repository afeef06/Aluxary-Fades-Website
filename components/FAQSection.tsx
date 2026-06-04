'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn'

const faqs = [
  {
    question: 'Do you accept walk-ins?',
    answer:
      'Yes, walk-ins are welcome at Aluxury Fades. However, booking online is strongly recommended to secure your preferred barber and time slot. Walk-in availability depends on barber schedules.',
  },
  {
    question: 'Where is Aluxury Fades located?',
    answer:
      'Aluxury Fades is located at 5933 Dallas Parkway Suite 300, Plano, TX 75093. We\'re conveniently situated on Dallas Parkway for easy access from across the Plano and DFW area.',
  },
  {
    question: 'Can I book with a specific barber?',
    answer:
      'Absolutely. Each barber has their own profile page with a dedicated booking section. Visit the Barbers page, find your preferred barber, and book directly through their Booksy link.',
  },
  {
    question: 'Do you offer kids cuts?',
    answer:
      'Yes, kids cuts are available at Aluxury Fades. Our barbers are experienced, patient, and great with younger clients. Kids cuts start at $35.',
  },
  {
    question: 'How do I book online?',
    answer:
      'Use the "Book Online" button anywhere on this site, or visit your preferred barber\'s individual page. All bookings are handled through Booksy or Calendly depending on the barber. You can also call us at (469) 969-0585.',
  },
  {
    question: 'What services do you offer?',
    answer:
      'We offer signature haircuts, skin fades, haircut & beard combos, beard trims & lineups, kids cuts, and luxury grooming packages. Prices start at $30. Visit our Services page for the full menu.',
  },
  {
    question: 'Is there parking available?',
    answer:
      'Yes, there is convenient parking available at the Dallas Parkway location. Our suite is located in a professional office complex with accessible parking.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-32 bg-primary relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <p className="overline mb-4">Have Questions?</p>
              <div className="gold-line mx-auto mb-8" />
              <h2 className="heading-section mb-6">
                Frequently Asked <em className="text-gold not-italic">Questions</em>
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-0 border border-card-border divide-y divide-card-border">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left group hover:bg-card/50 transition-colors duration-200"
                    aria-expanded={openIndex === i}
                  >
                    <h3
                      className={`font-sans text-base font-medium transition-colors duration-200 ${
                        openIndex === i ? 'text-white' : 'text-subtle/80 group-hover:text-white'
                      }`}
                    >
                      {faq.question}
                    </h3>
                    <div
                      className={`w-8 h-8 border flex items-center justify-center shrink-0 transition-all duration-200 ${
                        openIndex === i ? 'border-gold bg-gold text-primary' : 'border-card-border text-muted'
                      }`}
                    >
                      {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 border-l-2 border-gold/30 ml-6">
                          <p className="font-sans text-sm text-muted font-light leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-center font-sans text-sm text-muted/50 mt-10">
              Still have questions?{' '}
              <a
                href="tel:+14699690585"
                className="text-gold hover:text-gold-light transition-colors underline underline-offset-2"
              >
                Call us at (469) 969-0585
              </a>
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
