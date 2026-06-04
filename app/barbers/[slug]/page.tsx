import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { barbers, getBarberBySlug } from '@/data/barbers'
import BarberPageContent from '@/components/BarberPageContent'

interface PageProps {
  params: { slug: string }
}

// Pre-generate all barber routes at build time
export function generateStaticParams() {
  return barbers.map((barber) => ({ slug: barber.slug }))
}

// Generate per-barber SEO metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const barber = getBarberBySlug(params.slug)

  if (!barber) {
    return {
      title: 'Barber Not Found | Aluxury Fades',
    }
  }

  const barberSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: barber.name,
    jobTitle: barber.tagline,
    worksFor: {
      '@type': 'HairSalon',
      name: 'Aluxury Fades',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5933 Dallas Parkway Suite 300',
        addressLocality: 'Plano',
        addressRegion: 'TX',
        postalCode: '75093',
        addressCountry: 'US',
      },
    },
  }

  return {
    title: `${barber.name} | Aluxury Fades`,
    description: barber.metaDescription,
    openGraph: {
      title: `${barber.name} | Aluxury Fades — ${barber.tagline}`,
      description: barber.metaDescription,
      type: 'profile',
    },
    other: {
      'application/ld+json': JSON.stringify(barberSchema),
    },
  }
}

export default function BarberPage({ params }: PageProps) {
  const barber = getBarberBySlug(params.slug)

  if (!barber) {
    notFound()
  }

  return <BarberPageContent barber={barber} />
}
