export interface Plan {
  id: string
  name: string
  price: number
  period: string
  durationMonths: number
  bonusMonths: number
  extraTela: boolean
  features: string[]
  whatsapp: string
  popular: boolean
  bestValue: boolean
}

export interface Testimonial {
  name: string
  city: string
  text: string
  rating: number
}

export interface FaqItem {
  question: string
  answer: string
}
