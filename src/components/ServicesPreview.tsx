'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Video, Scissors, Layers } from 'lucide-react'
import { services } from '@/data/services'

const iconMap = {
  video: Video,
  scissors: Scissors,
  layers: Layers,
}

export default function ServicesPreview() {
  return (
    <section className="py-20 md:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            What I Offer
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Comprehensive content creation and photography services tailored to
            your brand needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Video
            return (
              <motion.div
                key={service.id}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-neutral-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-purple-100 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <Icon className="text-primary-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span className="text-neutral-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}









