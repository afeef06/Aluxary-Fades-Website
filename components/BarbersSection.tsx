import { barbers } from '@/data/barbers'
import BarberCard from './BarberCard'
import FadeIn from './FadeIn'

export default function BarbersSection() {
  return (
    <section id="barbers" className="py-32 bg-primary relative">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="section-container">
        {/* Section header */}
        <FadeIn>
          <div className="text-center mb-20">
            <p className="overline mb-4">The Team</p>
            <div className="gold-line mx-auto mb-8" />
            <h2 className="heading-section mb-6">
              Meet the <em className="text-gold not-italic">Barbers</em>
            </h2>
            <p className="font-sans text-muted text-base font-light max-w-xl mx-auto leading-relaxed">
              Nine skilled barbers. One shared standard of excellence. Find your barber,
              book online, and experience precision grooming at its finest.
            </p>
          </div>
        </FadeIn>

        {/* Barbers grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {barbers.map((barber, index) => (
            <BarberCard key={barber.slug} barber={barber} index={index} />
          ))}
        </div>

        {/* Bottom note */}
        <FadeIn delay={0.3}>
          <div className="text-center mt-16">
            <p className="font-sans text-sm text-muted/60 font-light">
              Can't decide? Walk-ins are welcome — our team will match you with the right barber.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
