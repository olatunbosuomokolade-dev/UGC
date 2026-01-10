'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function PricingPage() {
  return (
    <div className="pt-20 pb-20 md:pt-28 md:pb-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Pricing
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
           Invest in content that delivers results. Custom packages available for ongoing partnerships
          </motion.p>
        </div>

        {/* Pricing Text */}
        <motion.div
          className="max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center md:text-left">
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
              Every brand is different, and so is every campaign. My goal is to create skincare content that drives engagement, builds trust, and converts viewers into customers. Rates are tailored to your brand&apos;s needs, campaign goals, and the value the content will bring.
            </p>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="bg-white rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Need a Custom Package?
          </h2>
          <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
            I offer custom pricing for ongoing partnerships, bulk orders, and
            specialized projects. Let&apos;s discuss how I can tailor a package
            to fit your specific needs.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary-600 to-purple-500 text-white rounded-full font-medium hover:from-primary-700 hover:to-purple-600 transition-all shadow-lg shadow-primary-500/50 hover:shadow-xl"
          >
            Request a Custom Quote
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

