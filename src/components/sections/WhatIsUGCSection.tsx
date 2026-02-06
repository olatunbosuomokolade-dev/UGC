'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SmileyFace from '@/components/decorative/SmileyFace'
import FanRays from '@/components/decorative/FanRays'

export default function WhatIsUGCSection() {
  return (
    <section className="bg-cream py-16 md:py-24 relative overflow-hidden">
      {/* Decorative fan rays */}
      <div className="absolute bottom-0 left-0 opacity-30 pointer-events-none">
        <FanRays color="#F5C6A0" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-5xl md:text-7xl font-bold text-neutral-900 mb-8">
              What is UGC?
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              User generated content (UGC) is any brand specific content — text, videos, images, reviews, etc. — created by people, rather than brands. Content created by real people, even when promoted by a contest, campaign, or challenge, fosters trust. This is because user generated content is authentic, and authenticity resonates with consumers.
            </p>
          </motion.div>

          {/* Decorative images */}
          <motion.div
            className="relative w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Smiley face decoration */}
            <div className="absolute -top-4 left-1/4 z-10">
              <SmileyFace size={90} />
            </div>

            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden w-full min-h-[250px] md:min-h-[320px]">
                <Image
                  src="/videos/skincare17.jpg"
                  alt="UGC content example"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 45vw, 250px"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden w-full min-h-[250px] md:min-h-[320px] mt-8">
                <Image
                  src="/videos/skincare18.jpg"
                  alt="UGC content example"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 45vw, 250px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
