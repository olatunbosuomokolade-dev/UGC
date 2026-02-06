'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { projects } from '@/data/projects'

export default function PortfolioSection() {
  const photoProjects = projects.filter((p) => p.category === 'photography').slice(0, 4)

  return (
    <section className="bg-lavender-200 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold uppercase tracking-[0.2em] text-neutral-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Portfolio
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {photoProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-3 bg-neutral-200">
                {project.thumbnail && (
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                )}
              </div>
              <h3 className="font-bold text-neutral-900 text-sm">
                {project.title}{project.client ? `, ${project.client}` : ''}
              </h3>
              <p className="text-neutral-600 text-xs mt-1 line-clamp-2">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
