'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Skincare Content That Feels {' '}
              <span className="bg-gradient-to-r from-primary-600 to-purple-500 bg-clip-text text-transparent">Real, Refined and Result Driven</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I create authentic UGC for skincare brands - focused on trust,  texture and storytelling that converts. 
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-500 text-white rounded-full font-medium hover:from-primary-700 hover:to-purple-600 transition-all hover:shadow-xl hover:scale-105 shadow-lg shadow-primary-500/50"
              >
                Book a UGC Package
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-900 rounded-full font-medium border-2 border-purple-200 hover:border-primary-400 transition-all hover:shadow-lg hover:bg-purple-50"
              >
                View My Work
                <Play className="ml-2" size={20} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-image.png"
                alt="Skincare content creator"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-purple-300/40 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-pink-300/40 rounded-full blur-3xl -z-10" />
            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-primary-400/30 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}









