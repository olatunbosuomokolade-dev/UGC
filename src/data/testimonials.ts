export interface Testimonial {
  id: string
  name: string
  company: string
  image?: string
  content: string
  rating: number
  featured: boolean
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Yeong',
    company: 'B : Lab',
    image: '/images/testimonials/sarah-chen.jpg',
    content: 'We are so grateful for the time, effort, and creativity you put into showcasing B : Lab, and the content turned out absolutely stunningWe could not be happier with your video reviews, and we are so excited to continue this beautiful journey of collaboration with you.',
    rating: 5,
    featured: true,
  },
  {
    id: '2',
    name: 'Eun Ji Yeom',
    company: 'Jolse Cosmetics',
    image: '/images/testimonials/michael-rodriguez.jpg',
    content: 'I watched your video and It was so great.',
    rating: 5,
    featured: true,
  },
  {
    id: '3',
    name: 'Changkun',
    company: 'Aegis Labs',
    image: '/images/testimonials/emily-johnson.jpg',
    content: 'Your video is already perfect as it is. ✨ There is absolutely no need for revisions.',
    rating: 5,
    featured: true,
  },
  
]









