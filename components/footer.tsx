"use client"

import { motion } from "framer-motion"
import { Heart, ArrowUpRight } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [showEasterEgg, setShowEasterEgg] = useState(false)

  return (
    <footer className="relative bg-white dark:bg-[#070707] text-slate-800 dark:text-white py-16 border-t border-black/5 dark:border-white/10">

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
              Mohammed Hussain<span className="text-[#FF5C00]">.</span>
            </h3>
            <p className="text-[#FF5C00] font-semibold text-sm sm:text-base mb-4 tracking-wide">
              Founder & Lead AI Architect at A Generative Slice · Bachelor of Technology in AI & Data Science
            </p>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Architecting autonomous multi-agent systems, enterprise AI workflows, and spatial 3D digital experiences. Building tomorrow's intelligent software with mathematical precision and Apple-grade design craftsmanship.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="border-t border-black/5 dark:border-white/10 pt-8"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                © {new Date().getFullYear()} Mohammed Hussain · A Generative Slice. All rights reserved.
              </p>

              <motion.div
                className="flex items-center space-x-2 cursor-pointer select-none"
                onHoverStart={() => setShowEasterEgg(true)}
                onHoverEnd={() => setShowEasterEgg(false)}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Made with</span>
                <Heart className="w-3.5 h-3.5 text-[#FF5C00] fill-[#FF5C00]" />
                <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">and</span>
                <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A] bg-clip-text text-transparent">
                  Autonomous AI
                </span>
              </motion.div>
            </div>

            {/* Easter Egg */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: showEasterEgg ? 1 : 0, y: showEasterEgg ? 0 : 10 }}
              className="mt-6 text-center"
            >
              <p className="text-xs text-slate-400 dark:text-slate-500 italic">
                "Spoiler alert... we all die in the end, but the adventure makes it worthwhile! 🏴‍☠️"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
