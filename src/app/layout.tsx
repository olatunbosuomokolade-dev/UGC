import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: {
    default: 'Itunnu | Skincare UGC Creator',
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
    title: 'Itunnu | Skincare UGC Creator',
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
    title: 'Itunnu | Skincare UGC Creator',
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased font-sans">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
