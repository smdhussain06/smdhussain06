"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import PersonalImageSlider from "@/components/personal-image-slider"

// Get the base path for GitHub Pages
const basePath = process.env.NODE_ENV === 'production' ? '/smdhussain06' : ''

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6">About Me</h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-1"
          >
            <div className="relative">
              <PersonalImageSlider className="w-64 h-64 sm:w-72 sm:h-72 lg:w-full lg:h-full lg:max-w-md mx-auto lg:mx-0 lg:aspect-square" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 order-2 lg:order-2 lg:flex lg:flex-col lg:justify-center"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                Hey there! 👋 I'm your friendly neighborhood graphic designer turned AI wizard-in-training! 🎨🤖
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                With 4+ years crafting visual magic as a freelance graphic designer, I've mastered the Adobe Creative
                Suite - Premiere Pro, Photoshop, After Effects, Lightroom and even ventured into the exciting world of
                3D with Blender. But wait, there's more! 🌟
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                Currently leveling up my skills with a Bachelor's in Artificial Intelligence & Data Science at Aalim
                Muhammed Salegh College of Engineering, I'm on a mission to blend creativity with cutting-edge AI.
                Imagine designs that don't just look stunning - they think, adapt, and tell stories powered by data!
                📊✨
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                When I'm not busy training algorithms or designing pixels to perfection, you'll find me vlogging,
                creating content, and storytelling, helping brands and individuals share their vision in the most
                engaging ways possible. 🎥📖
              </p>

              <motion.p
                className="text-orange-500 dark:text-orange-400 font-semibold text-base sm:text-lg"
                whileHover={{ scale: 1.02 }}
              >
                Let's connect and explore how we can use design + AI to create something truly extraordinary! 🌐💡
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
