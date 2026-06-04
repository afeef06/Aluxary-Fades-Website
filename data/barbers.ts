export interface BarberService {
  name: string
  price: number
  description: string
}

export interface BarberReview {
  name: string
  rating: number
  text: string
  date: string
}

export interface PortfolioItem {
  title: string
  category: string
}

export interface Barber {
  id: string
  slug: string
  name: string
  tagline: string
  bio: string
  bookingUrl: string // Replace with real Booksy or Calendly link
  specialties: string[]
  services: BarberService[]
  reviews: BarberReview[]
  portfolio: PortfolioItem[]
  metaDescription: string
}

export const DEFAULT_SERVICES: BarberService[] = [
  { name: 'Signature Haircut', price: 45, description: 'Precision cut tailored to your personal style and structure' },
  { name: 'Skin Fade', price: 50, description: 'Clean, graduated fade blended with surgical precision' },
  { name: 'Haircut & Beard', price: 65, description: 'Complete grooming package — sharp cut and defined beard' },
  { name: 'Beard Trim & Lineup', price: 30, description: 'Defined edges, clean shape, and professional beard styling' },
  { name: 'Kids Cut', price: 35, description: 'Precision cut for the young gentleman' },
  { name: 'Luxury Grooming Package', price: 85, description: 'The full premium experience from cut to finish' },
]

const DEFAULT_PORTFOLIO: PortfolioItem[] = [
  { title: 'Fresh Fade', category: 'Fade' },
  { title: 'Beard Detail', category: 'Beard' },
  { title: 'Classic Cut', category: 'Cut' },
  { title: 'Modern Style', category: 'Style' },
  { title: 'Clean Lineup', category: 'Lineup' },
  { title: 'Transformation', category: 'Full Look' },
]

export const barbers: Barber[] = [
  {
    id: '1',
    slug: 'shaad',
    name: 'Shaad',
    tagline: 'Precision Fade Specialist',
    bio: 'Shaad is known for precision fades, clean details, and a client-first approach. Every cut is crafted with attention to shape, balance, and confidence — giving clients a look that feels sharp, fresh, and elevated. His dedication to the craft and commitment to excellence make every visit an experience worth repeating. Shaad\'s precision isn\'t just technical; it\'s a philosophy that every client deserves a masterpiece.',
    bookingUrl: 'https://booksy.com/placeholder-shaad', // TODO: Replace with real Booksy link
    specialties: ['Skin Fades', 'Taper Cuts', 'Beard Lineup'],
    services: DEFAULT_SERVICES,
    reviews: [
      {
        name: 'Marcus T.',
        rating: 5,
        text: "Shaad is simply the best. My fade was razor sharp and the attention to detail was unmatched. Won't go anywhere else in Plano.",
        date: 'November 2024',
      },
      {
        name: 'Devon R.',
        rating: 5,
        text: 'The precision Shaad brings to every cut is unreal. Clean shop, professional service, and a fade that lasted weeks.',
        date: 'October 2024',
      },
      {
        name: 'Jordan M.',
        rating: 5,
        text: "Been coming to Shaad for over a year. Consistent every single time. That level of skill is rare.",
        date: 'September 2024',
      },
    ],
    portfolio: DEFAULT_PORTFOLIO,
    metaDescription: 'Book with Shaad at Aluxury Fades in Plano, Texas for precision fades, haircuts, beard grooming, and luxury barber services.',
  },
  {
    id: '2',
    slug: 'gunna',
    name: 'Gunna',
    tagline: 'Modern Cuts & Sharp Details',
    bio: "Gunna brings a contemporary edge to classic barbering — fusing modern technique with impeccable precision. Known for sharp, detail-oriented cuts and a style sensibility that turns heads, Gunna delivers a grooming experience that blends street-level aesthetic with luxury execution. Every line he draws is intentional, every fade is studied. Gunna doesn't just cut hair; he crafts identity.",
    bookingUrl: 'https://booksy.com/placeholder-gunna', // TODO: Replace with real Booksy link
    specialties: ['Modern Cuts', 'Sharp Lineups', 'Style Consultations'],
    services: DEFAULT_SERVICES,
    reviews: [
      {
        name: 'Terrell B.',
        rating: 5,
        text: "Gunna has an eye for what's current. Walked in with a reference photo and walked out looking even better. Incredible talent.",
        date: 'November 2024',
      },
      {
        name: 'Antoine W.',
        rating: 5,
        text: 'Modern, clean, and precise. Gunna understands your vision immediately and delivers every time.',
        date: 'October 2024',
      },
      {
        name: 'Chris H.',
        rating: 5,
        text: 'The shop vibes are incredible and Gunna is one of the most talented barbers I have ever sat with. Highly recommend.',
        date: 'September 2024',
      },
    ],
    portfolio: DEFAULT_PORTFOLIO,
    metaDescription: 'Book with Gunna at Aluxury Fades in Plano, Texas for modern cuts, sharp lineups, and premium barber services.',
  },
  {
    id: '3',
    slug: 'roger',
    name: 'Roger',
    tagline: 'Classic Barbering with a Luxury Touch',
    bio: "Roger embodies the timeless tradition of barbering elevated to its finest form. With deep roots in classic technique and an eye for modern refinement, Roger delivers cuts that honor the craft while feeling entirely current. His chair is a place of transformation — where clients arrive looking for a haircut and leave feeling like a different person. Precision, patience, and mastery define every moment.",
    bookingUrl: 'https://booksy.com/placeholder-roger', // TODO: Replace with real Booksy link
    specialties: ['Classic Cuts', 'Hot Towel Service', 'Precision Fades'],
    services: DEFAULT_SERVICES,
    reviews: [
      {
        name: 'Samuel D.',
        rating: 5,
        text: "Roger has been cutting hair for years and it shows. The experience, the precision, the final product — all world class.",
        date: 'November 2024',
      },
      {
        name: 'William G.',
        rating: 5,
        text: 'Classic technique, luxury finish. Roger is the definition of a master barber. Every visit is an experience.',
        date: 'October 2024',
      },
      {
        name: 'Kevin P.',
        rating: 5,
        text: 'Walked in for a simple cleanup and left with the best haircut of my life. Roger takes pride in his work.',
        date: 'September 2024',
      },
    ],
    portfolio: DEFAULT_PORTFOLIO,
    metaDescription: 'Book with Roger at Aluxury Fades in Plano, Texas for classic cuts, precision fades, and luxury barber services.',
  },
  {
    id: '4',
    slug: 'luis',
    name: 'Luis',
    tagline: 'Clean Fades & Professional Grooming',
    bio: "Luis brings a quiet confidence to the chair that clients feel immediately. His fades are clean, his transitions are seamless, and his attention to every edge and line is the work of someone who takes real pride in the craft. Luis specializes in building the kind of look that commands respect — polished, professional, and precisely executed. He takes your vision and elevates it.",
    bookingUrl: 'https://booksy.com/placeholder-luis', // TODO: Replace with real Booksy link
    specialties: ['Clean Fades', 'Professional Grooming', 'Beard Sculpting'],
    services: DEFAULT_SERVICES,
    reviews: [
      {
        name: 'Rafael S.',
        rating: 5,
        text: "Luis is the real deal. Clean fade, perfect lineup, and a barber who actually listens. I leave looking exactly how I want.",
        date: 'November 2024',
      },
      {
        name: 'Daniel C.',
        rating: 5,
        text: 'Professional from start to finish. Luis has serious skill and a genuine passion for his craft.',
        date: 'October 2024',
      },
      {
        name: 'Miguel R.',
        rating: 5,
        text: "I've tried a lot of barbers in Plano. Luis is on another level. The fade was immaculate.",
        date: 'September 2024',
      },
    ],
    portfolio: DEFAULT_PORTFOLIO,
    metaDescription: 'Book with Luis at Aluxury Fades in Plano, Texas for clean fades, professional grooming, and precision barber services.',
  },
  {
    id: '5',
    slug: 'arely',
    name: 'Arely',
    tagline: 'Luxury Styling & Detail-Focused Cuts',
    bio: "Arely approaches every cut with the eye of an artist and the precision of a craftsperson. Specializing in luxury styling and detail-focused work, Arely brings a unique perspective that blends technical mastery with creative vision. Her clients don't just get haircuts — they get a carefully curated look that reflects their personality, lifestyle, and confidence. She makes every client feel seen and heard.",
    bookingUrl: 'https://booksy.com/placeholder-arely', // TODO: Replace with real Booksy link
    specialties: ['Luxury Styling', 'Detail Work', 'Creative Cuts'],
    services: DEFAULT_SERVICES,
    reviews: [
      {
        name: 'Jasmine L.',
        rating: 5,
        text: "Arely is incredibly talented. She took the time to understand exactly what I wanted and delivered something even better.",
        date: 'November 2024',
      },
      {
        name: 'Brandon T.',
        rating: 5,
        text: "Arely's attention to detail is unmatched. The fade was perfect and the lines were surgical. My new regular barber.",
        date: 'October 2024',
      },
      {
        name: 'Carlos M.',
        rating: 5,
        text: 'She makes the experience feel genuinely premium. Professional, skilled, and passionate about the craft.',
        date: 'September 2024',
      },
    ],
    portfolio: DEFAULT_PORTFOLIO,
    metaDescription: 'Book with Arely at Aluxury Fades in Plano, Texas for luxury styling, detail-focused cuts, and premium barber services.',
  },
  {
    id: '6',
    slug: 'tiff',
    name: 'Tiff',
    tagline: 'Sharp Looks & Premium Client Care',
    bio: "Tiff combines sharp technical skill with a warmth that makes every client feel at home in the chair. Known for delivering looks that are precise, polished, and always current, Tiff's approach to barbering is rooted in care — for the craft, for the client, and for the details that separate a good cut from a great one. Her clients leave not just looking elevated, but feeling it.",
    bookingUrl: 'https://booksy.com/placeholder-tiff', // TODO: Replace with real Booksy link
    specialties: ['Sharp Fades', 'Precision Lineups', 'Client Experience'],
    services: DEFAULT_SERVICES,
    reviews: [
      {
        name: 'David K.',
        rating: 5,
        text: "Tiff is phenomenal. Sharp cut, great energy, and she genuinely cares about getting it right. Premium experience from start to finish.",
        date: 'November 2024',
      },
      {
        name: 'Maya F.',
        rating: 5,
        text: "The most comfortable I've ever felt in a barber chair. Tiff is talented and professional — can't ask for more.",
        date: 'October 2024',
      },
      {
        name: 'James P.',
        rating: 5,
        text: 'Sharp lines, clean fade, and Tiff actually makes you feel like a priority. First-class barber experience.',
        date: 'September 2024',
      },
    ],
    portfolio: DEFAULT_PORTFOLIO,
    metaDescription: 'Book with Tiff at Aluxury Fades in Plano, Texas for sharp looks, premium client care, and luxury barber services.',
  },
  {
    id: '7',
    slug: 'lex',
    name: 'Lex',
    tagline: 'Fresh Fades & Modern Grooming',
    bio: "Lex keeps his cuts fresh and his approach current. With a deep understanding of modern barbering trends and the technical foundation to execute them flawlessly, Lex specializes in fresh fades and modern grooming that feels effortlessly cool. He's the barber you come to when you want to look your best without overthinking it — Lex just knows what works and makes it happen.",
    bookingUrl: 'https://booksy.com/placeholder-lex', // TODO: Replace with real Booksy link
    specialties: ['Fresh Fades', 'Modern Grooming', 'Trend-Forward Cuts'],
    services: DEFAULT_SERVICES,
    reviews: [
      {
        name: 'Tyler N.',
        rating: 5,
        text: "Lex has an incredible eye for style. Fresh fade every time, no exceptions. This is the spot.",
        date: 'November 2024',
      },
      {
        name: 'Austin R.',
        rating: 5,
        text: 'Lex delivers consistently clean fades with a modern twist. Exactly what I look for. Will be back.',
        date: 'October 2024',
      },
      {
        name: 'Noah S.',
        rating: 5,
        text: "Best barber experience I've had in DFW. Lex is talented, professional, and the shop atmosphere is unbeatable.",
        date: 'September 2024',
      },
    ],
    portfolio: DEFAULT_PORTFOLIO,
    metaDescription: 'Book with Lex at Aluxury Fades in Plano, Texas for fresh fades, modern grooming, and premium barber services.',
  },
  {
    id: '8',
    slug: 'shannon',
    name: 'Shannon',
    tagline: 'Elevated Cuts with Precision Detail',
    bio: "Shannon brings an elevated standard to every cut. Her work is defined by meticulous attention to detail — the lines, the blend, the finish — every element is treated with the same level of care and precision. Shannon believes that a great haircut is an act of transformation, and she approaches each client with that mission in mind. The result is always clean, always confident, always elevated.",
    bookingUrl: 'https://booksy.com/placeholder-shannon', // TODO: Replace with real Booksy link
    specialties: ['Elevated Cuts', 'Precision Blending', 'Detailed Lineups'],
    services: DEFAULT_SERVICES,
    reviews: [
      {
        name: 'Eric V.',
        rating: 5,
        text: "Shannon is dialed in. Every cut is precise, every line is clean, and the attention to detail is remarkable.",
        date: 'November 2024',
      },
      {
        name: 'Michael A.',
        rating: 5,
        text: "Shannon transformed my look. I've never felt this confident walking out of a barbershop.",
        date: 'October 2024',
      },
      {
        name: 'Phillip J.',
        rating: 5,
        text: 'Elevated is the only word for it. Shannon does elevated cuts and elevated service every single time.',
        date: 'September 2024',
      },
    ],
    portfolio: DEFAULT_PORTFOLIO,
    metaDescription: 'Book with Shannon at Aluxury Fades in Plano, Texas for elevated cuts, precision detail, and luxury barber services.',
  },
  {
    id: '9',
    slug: 'lea',
    name: 'Lea',
    tagline: 'Personalized Cuts & Luxury Styling',
    bio: "Lea understands that no two clients are the same, and her approach reflects that completely. She takes the time to truly understand your vision, your lifestyle, and the look that will make you feel your best — then delivers it with luxury precision. Lea's cuts are personal, intentional, and crafted to suit the individual. Her clients don't just leave looking great; they leave feeling understood.",
    bookingUrl: 'https://booksy.com/placeholder-lea', // TODO: Replace with real Booksy link
    specialties: ['Personalized Styling', 'Luxury Cuts', 'Consultation & Design'],
    services: DEFAULT_SERVICES,
    reviews: [
      {
        name: 'Sophia W.',
        rating: 5,
        text: "Lea listens to what you actually want and then exceeds it. Personalized service at a luxury level — exactly what this shop promises.",
        date: 'November 2024',
      },
      {
        name: 'Anthony G.',
        rating: 5,
        text: "Lea is gifted. She saw my vision, improved on it, and sent me out looking incredible. The best.",
        date: 'October 2024',
      },
      {
        name: 'Isaiah C.',
        rating: 5,
        text: 'Personalized attention, luxury execution, and a barber who genuinely cares. Lea is exceptional.',
        date: 'September 2024',
      },
    ],
    portfolio: DEFAULT_PORTFOLIO,
    metaDescription: 'Book with Lea at Aluxury Fades in Plano, Texas for personalized cuts, luxury styling, and premium barber services.',
  },
]

export function getBarberBySlug(slug: string): Barber | undefined {
  return barbers.find((b) => b.slug === slug)
}
