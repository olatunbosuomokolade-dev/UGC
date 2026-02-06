'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState, useCallback } from 'react'
import { projects } from '@/data/projects'

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const allVideoProjects = projects.filter((p) => p.videoFile)

export default function VideoPortfolioSection() {
  const [videoProjects, setVideoProjects] = useState(() => allVideoProjects.slice(0, 8))
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map())
  const sectionRef = useRef<HTMLElement>(null)
  const wasVisible = useRef(true)

  // Shuffle on initial mount (client-only) to avoid hydration mismatch
  useEffect(() => {
    setVideoProjects(shuffleArray(allVideoProjects).slice(0, 8))
  }, [])

  // Reshuffle when section leaves viewport
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!wasVisible.current) {
              setVideoProjects(shuffleArray(allVideoProjects).slice(0, 8))
            }
            wasVisible.current = true
          } else {
            wasVisible.current = false
          }
        })
      },
      { threshold: 0.05 }
    )

    observer.observe(section)
    return () => observer.unobserve(section)
  }, [])

  // Video autoplay observer
  const setupVideoObserver = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement
          if (entry.isIntersecting) {
            video.play().catch(() => {})
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.5 }
    )

    const refs = videoRefs.current
    refs.forEach((video) => {
      if (video) observer.observe(video)
    })

    return () => {
      refs.forEach((video) => {
        if (video) observer.unobserve(video)
      })
    }
  }, [])

  useEffect(() => {
    return setupVideoObserver()
  }, [videoProjects, setupVideoObserver])

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold uppercase tracking-[0.2em] text-neutral-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Video Portfolio
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {videoProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {/* Phone mockup */}
              <div className="phone-mockup aspect-[9/16] relative">
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
              </div>

              <div className="mt-3">
                <h3 className="font-bold text-neutral-900 text-sm">
                  {project.title}{project.client ? `, ${project.client}` : ''}
                </h3>
                <p className="text-neutral-600 text-xs mt-1 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
