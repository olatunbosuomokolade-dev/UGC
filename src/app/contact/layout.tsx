import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch to discuss your UGC content or video editing project. Email, WhatsApp, or contact form available.',
  openGraph: {
    title: 'Contact | Get In Touch',
    description: 'Get in touch to discuss your UGC content or video editing project.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}









