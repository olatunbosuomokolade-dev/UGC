'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { projects } from '@/data/projects'

export default function PhotoGridSection() {
  const photoProjects = projects.filter((p) => p.category === 'photography').slice(4, 8)

  if (photoProjects.length === 0) return null

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {photoProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="grid grid-cols-2 gap-2 rounded-lg overflow-hidden mb-3">
                {project.thumbnail && (
                  <div className="relative aspect-square col-span-2 bg-neutral-200">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}
              </div>
              <h3 className="font-bold text-neutral-900">
                {project.title}{project.client ? `, ${project.client}` : ''}
              </h3>
              <p className="text-neutral-600 text-sm mt-1 line-clamp-2">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
