"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"

export default function Hero() {
  const basePath = process.env.NODE_ENV === "production" ? "/smdhussain06" : ""

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-[85vh] sm:min-h-screen flex items-center justify-center relative bg-white dark:bg-[#0A0A0A] pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6">
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white mb-4 sm:mb-6 tracking-tight leading-[0.95]"
        >
          MOHAMMED
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] via-[#FF7A1A] to-[#FF8C1A]">
            HUSSAIN
          </span>
        </motion.h1>

        {/* Stable Subtitle: Blending AI Systems Architecture & Financial Enterprise Operations */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-base sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed px-2 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A]">
            AI & Data Science Engineer
          </span>
          <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">·</span>
          <span className="text-slate-700 dark:text-slate-300 font-semibold">
            Enterprise Operations & Automation
          </span>
        </motion.div>

        {/* Minimal Executive Statement */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 font-normal"
        >
          Bridging artificial intelligence engineering, financial operations, and enterprise workflow automation to accelerate revenue capture, client engagement, and operational accuracy.
        </motion.p>

        {/* Action Buttons: Minimal, with Print icon and CV only */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-2 mb-12 sm:mb-16 w-full max-w-md"
        >
          <Button
            onClick={() => scrollToSection("projects")}
            size="lg"
            className="flex-1 sm:flex-initial bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A] hover:from-[#FF7A1A] hover:to-[#FFA033] text-white px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold rounded-2xl shadow-xl shadow-[#FF5C00]/25 hover:shadow-[#FF5C00]/40 transition-all duration-300 transform hover:-translate-y-0.5 border-0 flex items-center justify-center gap-2"
          >
            <span>Explore Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Button>

          {/* Direct Download of authentic vector PDF — instant, 100% reliable across all phones */}
          <a
            href={`${basePath}/mohammed-hussain-cv.pdf`}
            download="Mohammed_Hussain_CV.pdf"
            className="flex-1 sm:flex-initial bg-white dark:bg-[#111111] border border-black/10 dark:border-white/10 hover:border-[#FF5C00]/40 hover:bg-orange-500/10 text-slate-900 dark:text-white px-5 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base font-semibold rounded-2xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#FF4C00]" />
            <span>CV</span>
          </a>
        </motion.div>

        {/* Executive Stats Grid on Flat White Surface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl mx-auto"
        >
          {[
            { value: "11+", label: "Client Enterprise Deployments" },
            { value: "Banking", label: "State Bank of India Operations" },
            { value: "99%+", label: "Workflow Accuracy & Compliance" },
            { value: "2025", label: "Anna University AI & Data Science" },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 bg-white dark:bg-[#111111] border border-black/5 dark:border-white/10 shadow-sm hover:border-[#FF5C00]/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A] mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-semibold leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
