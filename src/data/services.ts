export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
  category: 'ugc' | 'editing'
}

export const services: Service[] = [
  {
    id: 'ugc-creation',
    title: 'UGC Content Creation',
    description: 'Authentic, engaging user-generated content that resonates with your audience and drives conversions.',
    features: [
      'Product showcases and reviews',
      'Skincare routine content',
      'Before/after transformations',
      'Unboxing videos',
      'Tutorial and how-to content',
      'Brand storytelling',
      'Multiple deliverables per package',
    ],
    icon: 'video',
    category: 'ugc',
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    description: 'Professional video editing services that transform raw footage into polished, compelling content.',
    features: [
      'Color grading and correction',
      'Motion graphics and text overlays',
      'Smooth transitions and effects',
      'Audio enhancement',
      'Multi-format delivery',
      'Quick turnaround times',
      'Unlimited revisions',
    ],
    icon: 'scissors',
    category: 'editing',
  },
  {
    id: 'full-service',
    title: 'Full-Service Package',
    description: 'Complete content creation from concept to final delivery - UGC creation plus professional editing.',
    features: [
      'Everything in UGC Creation',
      'Everything in Video Editing',
      'Concept development',
      'Script writing assistance',
      'Brand alignment review',
      'Optimized for platform specs',
      'Priority support',
    ],
    icon: 'layers',
    category: 'ugc',
  },
]









