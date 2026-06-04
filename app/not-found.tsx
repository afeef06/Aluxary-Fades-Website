import Link from 'next/link'
import { Scissors, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-primary flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 border border-gold/30 flex items-center justify-center mx-auto mb-8">
          <Scissors size={24} className="text-gold/60 rotate-45" />
        </div>

        <div
          className="font-display italic font-light text-[120px] leading-none select-none mb-2"
          style={{ color: 'rgba(201, 162, 77, 0.1)' }}
        >
          404
        </div>

        <h1 className="font-display italic text-4xl text-white font-light mb-4">
          Page Not Found
        </h1>
        <p className="font-sans text-muted text-sm font-light leading-relaxed mb-10">
          The page you're looking for doesn't exist. Perhaps you'd like to book
          an appointment or explore our barbers?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-gold text-sm">
            <ArrowLeft size={14} />
            Back to Home
          </Link>
          <Link href="/#barbers" className="btn-ghost text-sm">
            Meet the Barbers
          </Link>
        </div>
      </div>
    </main>
  )
}
