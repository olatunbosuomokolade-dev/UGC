'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Video, Scissors, Layers, Check } from 'lucide-react'
import { services } from '@/data/services'

const iconMap = {
  video: Video,
  scissors: Scissors,
  layers: Layers,
}

export default function ServicesPage() {
  return (
    <div className="pt-20 pb-20 md:pt-28 md:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Services
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Comprehensive content creation and editing services tailored to your
            brand needs
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Video
            return (
              <motion.div
                key={service.id}
                className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-purple-100 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-primary-200">
                  <Icon className="text-primary-600" size={32} />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-neutral-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="text-primary-600 mr-3 mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Process Section */}
        <motion.div
          className="bg-gradient-to-br from-purple-50 via-white to-pink-50 rounded-2xl p-8 md:p-12 border border-purple-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We discuss your brand, goals, and content needs',
              },
              {
                step: '02',
                title: 'Planning',
                description: 'I create a content plan aligned with your brand voice',
              },
              {
                step: '03',
                title: 'Creation',
                description: 'I produce and edit your content to perfection',
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'You receive your content optimized for all platforms',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-purple-500 bg-clip-text text-transparent mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

