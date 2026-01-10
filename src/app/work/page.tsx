import type { Metadata } from 'next'
import PortfolioGrid from '@/components/PortfolioGrid'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Browse my portfolio of UGC content and video editing work for beauty and skincare brands.',
  openGraph: {
    title: 'Portfolio | UGC & Video Editing Work',
    description: 'Browse my portfolio of UGC content and video editing work.',
  },
}

export default function WorkPage() {
  return (
    <div className="pt-20 pb-20 md:pt-28 md:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            My Work
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Explore my portfolio of premium UGC content and professional video
            editing projects for beauty and skincare brands
          </p>
        </div>
        <PortfolioGrid showAll={true} />
      </div>
    </div>
  )
}









