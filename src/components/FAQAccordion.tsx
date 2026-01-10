'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqs, faqCategories } from '@/data/faqs'
import type { FAQ } from '@/data/faqs'

interface FAQAccordionProps {
  showAll?: boolean
  limit?: number
}

export default function FAQAccordion({ showAll = true, limit = 6 }: FAQAccordionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [openId, setOpenId] = useState<string | null>(null)

  const filteredFAQs = showAll
    ? faqs.filter(
        (faq) => selectedCategory === 'all' || faq.category === selectedCategory
      )
    : faqs.slice(0, limit)

  const displayedFAQs = showAll ? filteredFAQs : filteredFAQs

  return (
    <div>
      {showAll && (
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {faqCategories.map((category) => (
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

      <div className="space-y-4">
        {displayedFAQs.map((faq) => (
          <motion.div
            key={faq.id}
            className="bg-white rounded-xl border border-neutral-200 overflow-hidden"
            initial={false}
          >
            <button
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
            >
              <span className="font-semibold text-neutral-900 pr-8">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openId === faq.id ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="text-neutral-600 flex-shrink-0" size={20} />
              </motion.div>
            </button>
            <AnimatePresence>
              {openId === faq.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-neutral-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}









