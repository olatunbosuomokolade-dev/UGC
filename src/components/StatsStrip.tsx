'use client'

import { motion } from 'framer-motion'
import { stats } from '@/data/stats'

export default function StatsStrip() {
  return (
    <section className="py-12 md:py-16 bg-white border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-2">
                {stat.value}
                {stat.suffix && (
                  <span className="bg-gradient-to-r from-primary-600 to-purple-500 bg-clip-text text-transparent">{stat.suffix}</span>
                )}
              </div>
              <div className="text-sm md:text-base text-neutral-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}









