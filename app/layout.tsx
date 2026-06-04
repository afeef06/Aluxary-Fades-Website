import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileStickyBooking from '@/components/MobileStickyBooking'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Aluxury Fades | Luxury Barbershop in Plano, TX',
    template: '%s | Aluxury Fades',
  },
  description:
    'Book premium fades, haircuts, beard grooming, and luxury barber services at Aluxury Fades, located at 5933 Dallas Parkway Suite 300 in Plano, Texas.',
  keywords: [
    'barbershop Plano TX',
    'luxury barbershop Plano',
    'fades Plano Texas',
    'haircut Plano TX',
    'beard grooming Plano',
    'Aluxury Fades',
    'Dallas Parkway barber',
    'premium barbershop DFW',
  ],
  openGraph: {
    title: 'Aluxury Fades | Luxury Barbershop in Plano, TX',
    description:
      'Premier fades, luxury grooming, and precise barbering in Plano, Texas. Book online with our expert barbers.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'Aluxury Fades',
  description:
    'Premier luxury barbershop in Plano, Texas specializing in precision fades, luxury grooming, and premium barber services.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5933 Dallas Parkway Suite 300',
    addressLocality: 'Plano',
    addressRegion: 'TX',
    postalCode: '75093',
    addressCountry: 'US',
  },
  telephone: '(469) 969-0585',
  sameAs: ['https://instagram.com/aluxuryfades'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '36',
    bestRating: '5',
    worstRating: '1',
  },
  openingHoursSpecification: [],
  priceRange: '$$',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="bg-primary text-white font-sans">
        <Navbar />
        {children}
        <Footer />
        <MobileStickyBooking />
      </body>
    </html>
  )
}
