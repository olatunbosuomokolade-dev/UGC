'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import Image from 'next/image'
import SocialIcons from '@/components/SocialIcons'

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'mwvveoav'

export default function ContactFooter() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('company', formData.company || 'Not provided')
      formDataToSend.append('service', formData.service || 'Not specified')
      formDataToSend.append('message', formData.message)
      formDataToSend.append('_subject', `New Contact Form Submission from ${formData.name}`)

      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json',
        },
      })

      let data
      try {
        data = await response.json()
      } catch {
        throw new Error('Invalid response from server')
      }

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', company: '', service: '', message: '' })
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        console.error('Formspree error:', { status: response.status, data })
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-neutral-900 text-white relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left - Photo + Heading */}
        <div className="relative min-h-[400px] lg:min-h-[600px]">
          <Image
            src="/images/hero-image.png"
            alt="Let's work together"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-end p-8 md:p-12">
            <motion.h2
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold italic"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Let&apos;s Work<br />Together
            </motion.h2>
          </div>
        </div>

        {/* Right - Contact info + Form */}
        <div className="p-8 md:p-12 lg:p-16">
          {/* Contact info */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#D4D95C] rounded-full flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </div>
                <a href="https://zinnialifestyle.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-colors">zinnialifestyle.vercel.app</a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <a href="mailto:brownskingirl19@gmail.com" className="text-neutral-300 hover:text-white transition-colors">
                  brownskingirl19@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#171717">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </div>
                <span className="text-neutral-300">@zinnialifestyle_</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name *"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:ring-2 focus:ring-peach-300 focus:border-transparent transition-all"
              />
              <input
                type="email"
                placeholder="Email *"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:ring-2 focus:ring-peach-300 focus:border-transparent transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Company/Brand"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:ring-2 focus:ring-peach-300 focus:border-transparent transition-all"
              />
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:ring-2 focus:ring-peach-300 focus:border-transparent transition-all"
              >
                <option value="">Select a service</option>
                <option value="ugc">UGC Content Creation</option>
                <option value="editing">Video Editing</option>
                <option value="full">Full-Service Package</option>
                <option value="custom">Custom Package</option>
              </select>
            </div>

            <textarea
              placeholder="Tell me about your project..."
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:ring-2 focus:ring-peach-300 focus:border-transparent transition-all resize-none"
            />

            {submitStatus === 'success' && (
              <div className="bg-green-900/50 border border-green-700 text-green-300 px-4 py-3 rounded-lg">
                Thank you! Your message has been sent. I&apos;ll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg">
                <p className="font-semibold mb-1">Something went wrong.</p>
                <p className="text-sm">
                  Please contact me directly at{' '}
                  <a href="mailto:brownskingirl19@gmail.com" className="underline">
                    brownskingirl19@gmail.com
                  </a>
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-white text-neutral-900 rounded-full font-medium hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  Send Message
                  <Send size={16} />
                </>
              )}
            </button>
          </motion.form>

          {/* Footer bottom */}
          <div className="mt-12 pt-8 border-t border-neutral-800">
            <p className="text-neutral-500 text-sm">
              &copy; {new Date().getFullYear()} Zinnialifestyle_. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
