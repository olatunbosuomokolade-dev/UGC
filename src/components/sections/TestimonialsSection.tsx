'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/data/testimonials'
import DecorativeFrame from '@/components/decorative/DecorativeFrame'

const frameVariants: Array<'starburst' | 'flower' | 'cloud'> = ['starburst', 'flower', 'cloud']
const frameBgColors = ['#FFB0C5', '#87CEEB', '#D4D95C']

export default function TestimonialsSection() {
  const featuredTestimonials = testimonials.filter((t) => t.featured).slice(0, 3)

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="font-display text-5xl md:text-7xl font-bold text-neutral-900 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Client<br />Love
        </motion.h2>

        <div className="space-y-16 md:space-y-20">
          {featuredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Decorative frame with image */}
              <div className="flex-shrink-0">
                <DecorativeFrame
                  variant={frameVariants[index % frameVariants.length]}
                  label={testimonial.name}
                  size={200}
                  bgColor={frameBgColors[index % frameBgColors.length]}
                />
              </div>

              {/* Testimonial text */}
              <div>
                <h3 className="font-bold text-xl text-neutral-900 mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-neutral-500 text-sm mb-4">{testimonial.company}</p>
                <p className="text-neutral-700 leading-relaxed text-lg">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
