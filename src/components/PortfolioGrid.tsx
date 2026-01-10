'use client'

import { useState, useMemo, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { projects, projectCategories } from '@/data/projects'
import type { Project } from '@/data/projects'

interface PortfolioGridProps {
  showAll?: boolean
}

export default function PortfolioGrid({ showAll = true }: PortfolioGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map())

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects
    return projects.filter(
      (project) => project.category === selectedCategory
    )
  }, [selectedCategory])

  const displayedProjects = showAll ? filteredProjects : filteredProjects.filter((p) => p.featured).slice(0, 6)

  // Autoplay video when modal opens
  useEffect(() => {
    if (selectedProject?.videoFile && videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Autoplay may be blocked by browser, but video will be ready to play on user interaction
        console.log('Autoplay prevented:', error)
      })
    }
  }, [selectedProject])

  // Intersection Observer for autoplay on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement
          if (entry.isIntersecting) {
            // Video is in viewport - play it
            video.play().catch((error) => {
              // Autoplay may be blocked, but that's okay
              console.log('Autoplay prevented:', error)
            })
          } else {
            // Video is out of viewport - pause it
            video.pause()
          }
        })
      },
      {
        threshold: 0.5, // Trigger when 50% of video is visible
        rootMargin: '0px',
      }
    )

    // Small delay to ensure refs are set
    const timeoutId = setTimeout(() => {
      videoRefs.current.forEach((video) => {
        if (video) observer.observe(video)
      })
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video)
      })
    }
  }, [displayedProjects])

  // Update Intersection Observer when displayed projects change
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

    // Observe all videos in the grid
    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video)
    })

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video)
      })
    }
  }, [displayedProjects])

  return (
    <>
      {showAll && (
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {projectCategories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category.value
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-neutral-700 hover:bg-neutral-50 border border-neutral-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      )}

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
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
                    <Play className="text-neutral-400" size={48} />
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
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-white">
                    Click to view details
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                {project.title}
              </h3>
              {project.client && (
                <p className="text-neutral-600 text-sm mb-2">{project.client}</p>
              )}
              <p className="text-neutral-600 text-sm line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                aria-label="Close modal"
              >
                <X size={20} className="text-neutral-900" />
              </button>

              {/* Media Display */}
              {selectedProject.videoFile ? (
                <div className="relative aspect-video w-full bg-black">
                  <video
                    key={selectedProject.id}
                    ref={videoRef}
                    src={selectedProject.videoFile}
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                    poster={selectedProject.thumbnail}
                    preload="auto"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : selectedProject.thumbnail ? (
                <div className="relative w-full bg-white flex items-center justify-center p-8">
                  <div className="relative w-full max-w-4xl" style={{ aspectRatio: 'auto', maxHeight: '70vh' }}>
                    <Image
                      src={selectedProject.thumbnail}
                      alt={selectedProject.title}
                      width={1200}
                      height={1200}
                      className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    />
                  </div>
                </div>
              ) : (
                <div className="relative aspect-video w-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50">
                  <div className="bg-gradient-to-r from-primary-600 to-purple-500 rounded-full p-6 shadow-xl mb-4">
                    <Play className="text-white" size={48} fill="white" />
                  </div>
                  <p className="text-neutral-600 font-medium">Video Content</p>
                  <p className="text-sm text-neutral-500 mt-1">Click below to watch</p>
                </div>
              )}

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-neutral-900 mb-2">
                      {selectedProject.title}
                    </h2>
                    {selectedProject.client && (
                      <p className="text-lg text-neutral-600">{selectedProject.client}</p>
                    )}
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-primary-100 to-purple-100 text-primary-700 rounded-full text-sm font-medium border border-primary-200">
                    {selectedProject.category === 'ugc'
                      ? 'UGC Content'
                      : selectedProject.category === 'photography'
                        ? 'Photography'
                        : selectedProject.category === 'productDemo'
                          ? 'Product Demo'
                          : selectedProject.category === 'unboxing'
                            ? 'Unboxing'
                            : 'UGC Content'}
                  </div>
                </div>

                <p className="text-neutral-700 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Video link - only show if TikTok URL is available */}
                {selectedProject.videoUrl && (
                  <a
                    href={selectedProject.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-500 text-white rounded-full font-medium hover:from-primary-700 hover:to-purple-600 transition-all shadow-lg shadow-primary-500/50 hover:shadow-xl"
                  >
                    Watch on TikTok
                    <ExternalLink className="ml-2" size={18} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}









