'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PricingSection() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Photography tier */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-12">
            <div className="flex-1">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Product photography
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Professional product photography showcasing your skincare items with elegant composition and styling. Color correction, retouching, and multi-format delivery included.
              </p>
            </div>
            <div className="flex-shrink-0 space-y-2 text-neutral-900">
              <p className="font-bold">5 photos: $100</p>
              <p className="font-bold">10 photos: $175</p>
              <p className="font-bold">15 photos: $250</p>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <hr className="border-neutral-300 mb-12" />

        {/* UGC Videos tier */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-12">
            <div className="flex-1">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                UGC Videos | Tiktok/Reels
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Authentic, engaging user-generated video content for TikTok, Instagram Reels, and other platforms. Includes concept development, filming, editing, and brand alignment review.
              </p>
            </div>
            <div className="flex-shrink-0 space-y-2 text-neutral-900">
              <p className="font-bold">1 video: $150</p>
              <p className="font-bold">3 videos: $250</p>
              <p className="font-bold">5 videos: $400</p>
            </div>
          </div>
        </motion.div>

        {/* Custom package CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-neutral-600 mb-4">Need a custom package?</p>
          <Link
            href="#contact"
            className="inline-block px-8 py-3 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors"
          >
            Request a Custom Quote
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
