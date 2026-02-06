'use client'

import { motion } from 'framer-motion'
import { stats } from '@/data/stats'

const bgColors = ['bg-black', 'bg-peach-300', 'bg-mint-300']
const textColors = ['text-white', 'text-neutral-900', 'text-neutral-900']

export default function WhyUGCStats() {
  const displayStats = stats.slice(0, 3)

  return (
    <section className="py-16 md:py-24">
      {/* Why UGC heading */}
      <div className="bg-black py-12 md:py-16 mb-8">
        <h2 className="font-display text-5xl md:text-7xl font-bold text-white text-center">
          Why Zinnia?
        </h2>
      </div>

      {/* Stats boxes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0">
          {displayStats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className={`${bgColors[index]} ${textColors[index]} p-10 md:p-12 rounded-2xl`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="font-display text-6xl md:text-7xl font-black mb-4">
                {stat.value}
                {stat.suffix}
              </div>
              <p className="text-base md:text-lg font-medium leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 4th stat as a smaller callout */}
        {stats[3] && (
          <motion.div
            className="mt-4 text-center py-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="font-display text-4xl font-bold text-neutral-900">
              {stats[3].value}{stats[3].suffix}
            </span>
            <span className="text-neutral-600 ml-3 text-lg">
              {stats[3].label}
            </span>
          </motion.div>
        )}
      </div>
    </section>
  )
}
