"use client"

import { motion } from "framer-motion"

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#FAFAFA] dark:bg-[#070707] flex items-center justify-center z-50 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute w-72 h-72 bg-[#FF5C00]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="text-center relative z-10">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6"
        >
          <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-[#FF5C00] to-[#FF8C1A] flex items-center justify-center shadow-2xl shadow-[#FF5C00]/30 border border-white/20">
            <span className="text-white font-bold text-2xl tracking-wider">MH</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A] rounded-full mx-auto shadow-sm"
          style={{ maxWidth: "160px" }}
        />

        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-5 text-slate-500 dark:text-slate-400 font-medium text-xs sm:text-sm tracking-wide uppercase"
        >
          A Generative Slice
        </motion.p>
      </div>
    </motion.div>
  )
}
