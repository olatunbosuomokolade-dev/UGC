'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="bg-lime-400 py-16 md:py-24 relative overflow-hidden">
      {/* Squiggly line decoration */}
      <svg
        className="absolute top-8 right-8 opacity-60 pointer-events-none hidden md:block"
        width="60"
        height="80"
        viewBox="0 0 60 80"
      >
        <path
          d="M30 0 C40 10, 20 20, 30 30 C40 40, 20 50, 30 60 C40 70, 20 80, 30 80"
          fill="none"
          stroke="#171717"
          strokeWidth="2"
        />
        <path
          d="M40 0 C50 10, 30 20, 40 30 C50 40, 30 50, 40 60 C50 70, 30 80, 40 80"
          fill="none"
          stroke="#171717"
          strokeWidth="2"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo with starburst badge */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-[280px] h-[350px] md:w-[340px] md:h-[420px] rounded-2xl overflow-hidden">
              <Image
                src="/images/hero-image.png"
                alt="Itunnu - About Me"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 280px, 340px"
              />
            </div>

            {/* Starburst badge */}
            <div className="absolute -bottom-4 -left-4 md:bottom-4 md:-left-8 w-28 h-28 md:w-32 md:h-32">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {(() => {
                  const points = 20
                  const path = Array.from({ length: points * 2 })
                    .map((_, i) => {
                      const angle = (360 / (points * 2)) * i - 90
                      const r = i % 2 === 0 ? 48 : 38
                      const x = 50 + r * Math.cos((angle * Math.PI) / 180)
                      const y = 50 + r * Math.sin((angle * Math.PI) / 180)
                      return `${i === 0 ? 'M' : 'L'}${x},${y}`
                    })
                    .join(' ')
                  return <path d={`${path}Z`} fill="#171717" />
                })()}
                <text
                  x="50"
                  y="44"
                  textAnchor="middle"
                  fill="white"
                  fontSize="7"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  ZINNIA
                </text>
                <text
                  x="50"
                  y="56"
                  textAnchor="middle"
                  fill="white"
                  fontSize="6"
                  fontFamily="sans-serif"
                >
                  LIFESTYLE
                </text>
              </svg>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <h2 className="font-display text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
                About<br />me
              </h2>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Hi! I&apos;m Itunnu, and I&apos;ve spent the last year creating content and editing videos with one goal: helping beauty brands tell their stories in a way that feels authentic, relatable and real.
                </p>
                <p>
                  Skincare has always been more than just a passion for me — it&apos;s very personal. I&apos;ve spent years trying products, clearing acne marks, and tackling hyperpigmentation, so I know what works and what resonates with real people. That experience helps me create UGC and video content that feels genuine, relatable, and trustworthy.
                </p>
                <p>
                  I focus on content that not only looks great but actually engages and converts, tailored to your brand&apos;s voice and your audience&apos;s needs.
                </p>
                <p>
                  When I&apos;m not creating content, you&apos;ll find me trying new skincare products, watching video editing and set-up tutorials, keeping up with the latest trends, or experimenting with creative ways to tell brand stories.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
