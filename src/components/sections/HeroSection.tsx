'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SocialIcons from '@/components/SocialIcons'
import Sunburst from '@/components/decorative/Sunburst'
import FanRays from '@/components/decorative/FanRays'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-peach-100 via-cream to-pink-300 pt-20 pb-12">
      {/* Decorative sunburst - top right */}
      <div className="absolute -top-10 -right-10 md:top-0 md:right-0 opacity-80 pointer-events-none">
        <Sunburst size={250} color="#F5C06A" />
      </div>

      {/* Decorative fan rays - bottom left */}
      <div className="absolute bottom-20 left-0 opacity-40 pointer-events-none">
        <FanRays color="#171717" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content - Left */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1
              className="font-display text-7xl md:text-8xl lg:text-9xl font-black text-neutral-900 leading-[0.9] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Zinnia
            </motion.h1>

            <motion.div
              className="inline-block mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-block bg-white text-neutral-900 px-8 py-3 rounded-full text-sm md:text-base font-bold uppercase tracking-[0.3em] border-2 border-neutral-900">
                UGC Creator
              </span>
            </motion.div>

            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <SocialIcons size="md" />
            </motion.div>
          </motion.div>

          {/* Photo - Right */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="arch-frame relative w-[280px] h-[380px] md:w-[350px] md:h-[470px] lg:w-[400px] lg:h-[540px] shadow-2xl">
              <Image
                src="/images/hero-image.png"
                alt="Zinnia - UGC Creator"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 350px, 400px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
