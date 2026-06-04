export interface GlobalReview {
  name: string
  rating: number
  text: string
  date: string
}

// Global shop reviews shown on the home page
// Update these with real Google review content when available
export const globalReviews: GlobalReview[] = [
  {
    name: 'Marcus T.',
    rating: 5,
    text: "Clean shop, sharp cut, and great energy. One of the best barber experiences I've had in Plano. Every single detail was handled with precision.",
    date: 'November 2024',
  },
  {
    name: 'Jordan M.',
    rating: 5,
    text: "Every detail was handled with precision. The fade came out perfect and the atmosphere was genuinely premium. This is what a luxury barbershop should feel like.",
    date: 'October 2024',
  },
  {
    name: 'Devon R.',
    rating: 5,
    text: "Professional barbers, great atmosphere, and easy booking. I've been to a lot of shops across DFW and Aluxury Fades is simply on another level.",
    date: 'October 2024',
  },
  {
    name: 'Antoine W.',
    rating: 5,
    text: "Walked in without an appointment and walked out looking like a new person. The whole team is talented and the shop has an energy you can't find everywhere.",
    date: 'September 2024',
  },
  {
    name: 'Terrell B.',
    rating: 5,
    text: "I drove from Dallas specifically for this shop after a recommendation. Worth every mile. The fade was immaculate and the experience was first-class throughout.",
    date: 'September 2024',
  },
  {
    name: 'Samuel D.',
    rating: 5,
    text: "Aluxury Fades lives up to the name in every way. Luxury atmosphere, skilled barbers, and a result that speaks for itself. My go-to from now on.",
    date: 'August 2024',
  },
]

export const SHOP_STATS = {
  rating: 5.0,
  reviewCount: 36,
  platform: 'Google',
}
