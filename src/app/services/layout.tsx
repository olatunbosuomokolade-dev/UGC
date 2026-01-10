import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Professional UGC content creation and video editing services for beauty brands. Premium content that converts.',
  openGraph: {
    title: 'Services | UGC & Video Editing',
    description: 'Professional UGC content creation and video editing services.',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}









