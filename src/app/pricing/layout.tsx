import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent pricing for UGC content creation and video editing services. Packages designed to fit your needs and budget.',
  openGraph: {
    title: 'Pricing | UGC & Video Editing',
    description: 'Transparent pricing for UGC content creation and video editing services.',
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}









