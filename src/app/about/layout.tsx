import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn about my journey as a skincare content creator and video editor, and why I specialize in creating premium UGC for beauty brands.',
  openGraph: {
    title: 'About Me | Skincare Content Creator',
    description: 'Learn about my journey as a skincare content creator and video editor.',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}









