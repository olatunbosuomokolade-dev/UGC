'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Send } from 'lucide-react'

// Get Formspree form ID from environment variable
// Create a .env.local file with: NEXT_PUBLIC_FORMSPREE_ID=your_form_id
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'mwvveoav'

export default function ContactPage() {
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
      // Use FormData format which Formspree prefers
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('company', formData.company || 'Not provided')
      formDataToSend.append('service', formData.service || 'Not specified')
      formDataToSend.append('message', formData.message)
      formDataToSend.append('_subject', `New Contact Form Submission from ${formData.name}`)

      console.log('Submitting to Formspree with ID:', FORMSPREE_ID)

      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json',
        },
      })

      console.log('Response status:', response.status)
      
      let data
      try {
        data = await response.json()
        console.log('Response data:', data)
      } catch (parseError) {
        console.error('Failed to parse response as JSON:', parseError)
        const text = await response.text()
        console.log('Response text:', text)
        throw new Error('Invalid response from server')
      }

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', company: '', service: '', message: '' })
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        // Log detailed error for debugging
        console.error('Formspree error response:', {
          status: response.status,
          statusText: response.statusText,
          data: data,
        })
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
    <div className="pt-20 pb-20 md:pt-28 md:pb-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Ready to create premium content together? Let&apos;s discuss your
            project and see how I can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-purple-100 rounded-lg flex items-center justify-center mr-4 border border-primary-200">
                    <Mail className="text-primary-600" size={20} />
                  </div>
                  <h3 className="font-semibold text-neutral-900">Email</h3>
                </div>
                <a
                  href="mailto:brownskingirl19@gmail.com"
                  className="text-neutral-600 hover:text-primary-600 transition-colors ml-14"
                >
                  brownskingirl19@gmail.com
                </a>
              </div>

              <div>
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-purple-100 rounded-lg flex items-center justify-center mr-4 border border-primary-200">
                    <MessageCircle className="text-primary-600" size={20} />
                  </div>
                  <h3 className="font-semibold text-neutral-900">
                    Response Time
                  </h3>
                </div>
                <p className="text-neutral-600 ml-14">
                  I typically respond within 24-48 hours
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="bg-neutral-50 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-900 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-900 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-neutral-900 mb-2"
                    >
                      Company/Brand
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-neutral-900 mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="ugc">UGC Content Creation</option>
                      <option value="editing">Video Editing</option>
                      <option value="full">Full-Service Package</option>
                      <option value="custom">Custom Package</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-900 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    Thank you! Your message has been sent. I&apos;ll get back to
                    you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    <p className="font-semibold mb-1">Something went wrong.</p>
                    <p className="text-sm">
                      Please check your browser console (F12) for details, or contact me directly at{' '}
                      <a href="mailto:brownskingirl19@gmail.com" className="underline">
                        brownskingirl19@gmail.com
                      </a>
                    </p>
                    <p className="text-xs mt-2 opacity-75">
                      Tip: Make sure your Formspree form is verified by checking your email inbox.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-500 text-white rounded-full font-medium hover:from-primary-700 hover:to-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg shadow-primary-500/50 hover:shadow-xl"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2" size={18} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

