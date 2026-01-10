import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'Skincare Content Creator & Video Editor | Premium UGC',
    template: '%s | Zinnialifestyle_'
  },
  description: 'Professional skincare content creator and video editor specializing in UGC for beauty brands. Premium content that converts.',
  keywords: ['skincare content creator', 'UGC creator', 'video editor', 'beauty content', 'social media content'],
  authors: [{ name: 'Zinnialifestyle_' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourwebsite.com',
    siteName: 'Zinnialifestyle - Skincare Content Creator',
    title: 'Skincare Content Creator & Video Editor | Premium UGC',
    description: 'Professional skincare content creator and video editor specializing in UGC for beauty brands.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zinnialifestyle_ - Skincare Content Creator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skincare Content Creator & Video Editor | Premium UGC',
    description: 'Professional skincare content creator and video editor specializing in UGC for beauty brands.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}









