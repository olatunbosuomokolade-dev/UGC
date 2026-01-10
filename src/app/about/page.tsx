'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="pt-20 pb-20 md:pt-28 md:pb-28">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            About Me
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Passionate about creating authentic content that connects
            beauty brands with their audience
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-black">
              <video
                src="/videos/skincare14.mov"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                preload="auto"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">My Story</h2>
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              <p>
              Hi! I’m Itunnu , and I’ve spent the last year creating content and editing videos with one goal: helping beauty brands tell their stories in a way that feels authentic , relatable and real.
              </p>
              <p>
              Skincare has always been more than just a passion for me ,it’s very personal. I’ve spent years trying products, clearing acne marks, and tackling hyperpigmentation, so I know what works and what resonates with real people. That experience helps me create UGC and video content that feels genuine, relatable, and trustworthy.
              </p>
              <p>
              I focus on content that not only looks great but actually engages and converts, tailored to your brand’s voice and your audience’s needs.
              </p>
              <p>When I’m not creating content, you’ll find me trying new skincare products, watching video editing and set-up tutorials, keeping up with the latest trends, or experimenting with creative ways to tell brand stories.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          className="bg-gradient-to-br from-purple-50 via-white to-pink-50 rounded-2xl p-8 md:p-12 mb-16 border border-purple-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            What I Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Authenticity
              </h3>
              <p className="text-neutral-600">
                I believe in creating genuine content that resonates with real
                people. No fake reviews, no overly produced content—just
                authentic storytelling.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Quality</h3>
              <p className="text-neutral-600">
                Every piece of content is crafted with attention to detail,
                ensuring it meets the highest standards of quality and
                professionalism.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Results-Driven
              </h3>
              <p className="text-neutral-600">
                I&apos;m not just creating content—I&apos;m helping you achieve
                your business goals, whether that&apos;s brand awareness,
                engagement, or conversions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills/Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            My Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'UGC Creation',
              'Video Editing',
              'Color Grading',
              'Brand Alignment',
              'Product Photography',
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white rounded-xl p-6 text-center border border-neutral-200 hover:border-purple-300 hover:bg-purple-50 transition-all hover:shadow-md"
              >
                <p className="font-medium text-neutral-900">{skill}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}

