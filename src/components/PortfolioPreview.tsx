'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { projects } from '@/data/projects'
import { useEffect, useRef } from 'react'

export default function PortfolioPreview() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map())

  // Intersection Observer for autoplay on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement
          if (entry.isIntersecting) {
            video.play().catch((error) => {
              console.log('Autoplay prevented:', error)
            })
          } else {
            video.pause()
          }
        })
      },
      {
        threshold: 0.5,
        rootMargin: '0px',
      }
    )

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video)
    })

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video)
      })
    }
  }, [featuredProjects])

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl">
              Recent projects showcasing premium UGC content and professional
              photography work
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/work"
              className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              View All Work
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/work#${project.id}`}>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-black">
                  {project.videoFile ? (
                    <video
                      ref={(el) => {
                        if (el) {
                          videoRefs.current.set(project.id, el)
                        } else {
                          videoRefs.current.delete(project.id)
                        }
                      }}
                      src={project.videoFile}
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                      preload="metadata"
                    />
                  ) : project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-neutral-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white">
                      {project.category === 'ugc'
                        ? 'UGC'
                        : project.category === 'photography'
                          ? 'Photography'
                          : project.category === 'productDemo'
                            ? 'Product Demo'
                            : project.category === 'unboxing'
                              ? 'Unboxing'
                              : 'UGC'}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {project.title}
                </h3>
                {project.client && (
                  <p className="text-neutral-600 text-sm mb-2">
                    {project.client}
                  </p>
                )}
                <p className="text-neutral-600 text-sm line-clamp-2">
                  {project.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}









