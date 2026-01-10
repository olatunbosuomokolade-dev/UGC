'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Create Premium Content?
          </h2>
          <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s work together to create authentic, engaging content that
            resonates with your audience and drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-full font-medium hover:bg-purple-50 transition-all hover:shadow-2xl hover:scale-105 shadow-lg"
            >
              Book a UGC Package
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium border-2 border-white/30 hover:bg-white/20 transition-all hover:shadow-xl"
            >
              View Pricing
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}









