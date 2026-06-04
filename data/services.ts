export interface Service {
  name: string
  price: number
  description: string
  featured?: boolean
}

// Edit prices and services here — changes reflect across the entire site
export const services: Service[] = [
  {
    name: 'Signature Haircut',
    price: 45,
    description: 'Precision cut tailored to your personal style, face structure, and vision.',
    featured: false,
  },
  {
    name: 'Skin Fade',
    price: 50,
    description: 'Clean, graduated fade blended to perfection with surgical precision and a sharp finish.',
    featured: true,
  },
  {
    name: 'Haircut & Beard',
    price: 65,
    description: 'The complete grooming package — a sharp cut paired with defined beard styling.',
    featured: false,
  },
  {
    name: 'Beard Trim & Lineup',
    price: 30,
    description: 'Clean edges, defined shape, and professional beard sculpting for a polished finish.',
    featured: false,
  },
  {
    name: 'Kids Cut',
    price: 35,
    description: 'Precision cut for the young gentleman. Professional, patient, and always on point.',
    featured: false,
  },
  {
    name: 'Luxury Grooming Package',
    price: 85,
    description: 'The full premium experience — cut, fade, beard, and finish crafted with uncompromising detail.',
    featured: true,
  },
]

export const SERVICES_NOTE = 'Prices may vary by barber, service detail, and appointment type. Contact us for specific barber pricing.'
