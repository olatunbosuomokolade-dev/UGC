export interface PricingTier {
  id: string
  name: string
  price: number
  period: 'per video' | 'per project' | 'per package' | 'monthly'
  description: string
  features: string[]
  popular?: boolean
  cta: string
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'ugc-starter',
    name: 'UGC Starter',
    price: 299,
    period: 'per video',
    description: 'Perfect for brands testing UGC or needing single video content.',
    features: [
      '1 UGC video (30-60 seconds)',
      'HD quality delivery',
      '1 round of revisions',
      'Brand alignment review',
      'Delivery in 5-7 business days',
      'Usage rights for 90 days',
    ],
    cta: 'Book UGC Package',
  },
  {
    id: 'ugc-professional',
    name: 'UGC Professional',
    price: 799,
    period: 'per package',
    description: 'Ideal for campaigns and ongoing content needs.',
    features: [
      '3 UGC videos (30-90 seconds each)',
      'HD quality delivery',
      '2 rounds of revisions',
      'Brand alignment review',
      'Multiple product showcases',
      'Delivery in 7-10 business days',
      'Usage rights for 180 days',
      'Platform-optimized formats',
    ],
    popular: true,
    cta: 'Book UGC Package',
  },
  {
    id: 'editing-basic',
    name: 'Editing Basic',
    price: 199,
    period: 'per video',
    description: 'Professional editing for your raw footage.',
    features: [
      'Color correction & grading',
      'Basic transitions',
      'Text overlays',
      'Audio mixing',
      '1 round of revisions',
      'Delivery in 3-5 business days',
      'HD/4K export options',
    ],
    cta: 'Request Quote',
  },
  {
    id: 'editing-premium',
    name: 'Editing Premium',
    price: 499,
    period: 'per video',
    description: 'Advanced editing with motion graphics and effects.',
    features: [
      'Everything in Editing Basic',
      'Motion graphics',
      'Advanced transitions & effects',
      'Custom animations',
      'Music & sound design',
      'Unlimited revisions',
      'Delivery in 5-7 business days',
      'Multiple format delivery',
      'Brand asset integration',
    ],
    cta: 'Request Quote',
  },
  {
    id: 'full-service',
    name: 'Full-Service Package',
    price: 1299,
    period: 'per project',
    description: 'Complete content creation from concept to delivery.',
    features: [
      '3 UGC videos (60-90 seconds)',
      'Full editing suite (Premium)',
      'Concept development',
      'Script assistance',
      'Unlimited revisions',
      'Delivery in 10-14 business days',
      'Usage rights for 365 days',
      'All platform formats',
      'Priority support',
    ],
    popular: true,
    cta: 'Book Full Package',
  },
]









