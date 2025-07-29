"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [showEasterEgg, setShowEasterEgg] = useState(false)

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">Mohammad Hussain</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Blending creativity with cutting-edge AI to create extraordinary digital experiences. Let's build the
              future together, one pixel and one algorithm at a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <p className="text-gray-400 mb-4 sm:mb-0">© 2025 Mohammad Hussain – Crafted with AI & Imagination</p>

              <motion.div
                className="flex items-center space-x-2 cursor-pointer"
                onHoverStart={() => setShowEasterEgg(true)}
                onHoverEnd={() => setShowEasterEgg(false)}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-gray-400">Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span className="text-gray-400">and</span>
                <span className="text-orange-500 font-semibold">AI</span>
              </motion.div>
            </div>

            {/* One Piece Easter Egg */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: showEasterEgg ? 1 : 0, y: showEasterEgg ? 0 : 10 }}
              className="mt-4 text-center"
            >
              <p className="text-xs text-gray-500 italic">
                "Spoiler alert... we all die in the end, but the adventure makes it worthwhile! 🏴‍☠️"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
