export interface FAQ {
  id: string
  question: string
  answer: string
  category: 'general' | 'ugc' | 'editing' | 'pricing'
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How long does it take to receive my content?',
    answer: 'Turnaround times vary by package. UGC videos typically take 5-10 business days, while editing services take 3-7 business days. Full-service packages take 10-14 business days. Rush delivery is available for an additional fee.',
    category: 'general',
  },
  {
    id: '2',
    question: 'What platforms do you create content for?',
    answer: 'I create content optimized for all major platforms including Instagram (Reels, Stories, Feed), TikTok, YouTube Shorts, Facebook, and Pinterest. Content is delivered in platform-specific formats and aspect ratios.',
    category: 'ugc',
  },
  {
    id: '3',
    question: 'Do you work with beauty brands outside of skincare?',
    answer: 'While I specialize in skincare, I also work with brands in makeup, haircare, wellness, and lifestyle niches. I\'m always open to discussing projects that align with my aesthetic and expertise.',
    category: 'general',
  },
  {
    id: '4',
    question: 'What information do you need to get started?',
    answer: 'I\'ll need your brand guidelines, product information, key messaging points, target audience details, and any specific requirements or inspiration. For editing projects, I\'ll need your raw footage and any brand assets.',
    category: 'general',
  },
  {
    id: '5',
    question: 'How many revisions are included?',
    answer: 'Revision rounds vary by package. Starter packages include 1 revision, Professional packages include 2 revisions, and Premium/Full-Service packages include unlimited revisions within the project scope.',
    category: 'pricing',
  },
  {
    id: '6',
    question: 'What are the usage rights for the content?',
    answer: 'Usage rights vary by package. Starter packages include 90 days of usage rights, Professional packages include 180 days, and Full-Service packages include 365 days. Extended usage rights can be purchased separately.',
    category: 'pricing',
  },
  {
    id: '7',
    question: 'Do you provide raw footage for UGC videos?',
    answer: 'Raw footage is not included in standard UGC packages but can be added for an additional fee. Edited final deliverables are always included.',
    category: 'ugc',
  },
  {
    id: '8',
    question: 'Can you match my brand\'s existing video style?',
    answer: 'Absolutely! I\'m experienced at adapting to different brand aesthetics. I\'ll review your existing content and brand guidelines to ensure consistency with your visual identity.',
    category: 'editing',
  },
  {
    id: '9',
    question: 'What if I need content faster than the standard turnaround?',
    answer: 'Rush delivery is available for most packages. Please contact me to discuss your timeline, and I\'ll provide options and pricing for expedited delivery.',
    category: 'general',
  },
  {
    id: '10',
    question: 'How do I book a project?',
    answer: 'You can book a project by filling out the contact form on my website, reaching out via WhatsApp, or emailing me directly. I\'ll respond within 24-48 hours to discuss your project details and provide a custom quote if needed.',
    category: 'general',
  },
]

export const faqCategories = [
  { value: 'all', label: 'All Questions' },
  { value: 'general', label: 'General' },
  { value: 'ugc', label: 'UGC Content' },
  { value: 'editing', label: 'Video Editing' },
  { value: 'pricing', label: 'Pricing' },
]









