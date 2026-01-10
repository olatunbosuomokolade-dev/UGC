import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'Read what brands say about working with me. Real testimonials from satisfied clients.',
  openGraph: {
    title: 'Testimonials | Client Reviews',
    description: 'Read what brands say about working with me.',
  },
}

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}









