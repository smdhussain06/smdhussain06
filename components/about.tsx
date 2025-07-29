"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

// Get the base path for GitHub Pages
const basePath = process.env.NODE_ENV === 'production' ? '/smdhussain06' : ''

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-6">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-3xl bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 flex items-center justify-center overflow-hidden">
                <img
                  src={`${basePath}/profilepic.jpg`}
                  alt="Mohammad Hussain"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                Hey there! 👋 I'm your friendly neighborhood graphic designer turned AI wizard-in-training! 🎨🤖
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                With 4+ years crafting visual magic as a freelance graphic designer, I've mastered the Adobe Creative
                Suite - Premiere Pro, Photoshop, After Effects, Lightroom and even ventured into the exciting world of
                3D with Blender. But wait, there's more! 🌟
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                Currently leveling up my skills with a Bachelor's in Artificial Intelligence & Data Science at Aalim
                Muhammed Salegh College of Engineering, I'm on a mission to blend creativity with cutting-edge AI.
                Imagine designs that don't just look stunning - they think, adapt, and tell stories powered by data!
                📊✨
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                When I'm not busy training algorithms or designing pixels to perfection, you'll find me vlogging,
                creating content, and storytelling, helping brands and individuals share their vision in the most
                engaging ways possible. 🎥📖
              </p>

              <motion.p
                className="text-orange-500 dark:text-orange-400 font-semibold text-lg"
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
