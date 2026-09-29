"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Printer, ArrowRight, Compass } from "lucide-react"

interface HeroProps {
  onOpenCV?: () => void
}

export default function Hero({ onOpenCV }: HeroProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const roles = [
    "Founder & Lead AI Architect at A Generative Slice",
    "Bachelor of Technology in Artificial Intelligence and Data Science",
    "Autonomous Multi-Agent Systems Architect",
    "Offline Edge Intelligence Specialist",
    "Enterprise AI Solutions Builder",
    "Creative Technologist & 3D Spatial Visualizer"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2800)

    return () => clearInterval(interval)
  }, [roles.length])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-[90vh] sm:min-h-screen flex items-center justify-center relative overflow-hidden pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6">
      {/* Brand Ambient Glow Backdrop matching A Generative Slice */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#FF5C00]/12 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-[#FF8C1A]/10 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent opacity-50" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white mb-4 sm:mb-6 tracking-tight leading-[0.95]"
        >
          MOHAMMED
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] via-[#FF7A1A] to-[#FF8C1A]">
            HUSSAIN
          </span>
        </motion.h1>

        {/* Dynamic Role Display with Smooth Transition */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-sm sm:text-xl font-bold text-slate-800/90 dark:text-white/90 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed px-2 min-h-[2.2em] sm:min-h-[2.6em] flex items-center justify-center"
        >
          <div className="relative w-full h-full text-center">
            {roles.map((role, index) => (
              <span
                key={index}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 transform ${
                  index === currentRoleIndex 
                    ? 'opacity-100 translate-y-0 text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A] font-bold' 
                    : 'opacity-0 translate-y-2 pointer-events-none'
                }`}
              >
                {role}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Minimal Narrative Statement */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 font-normal"
        >
          Architecting autonomous multi-agent ecosystems, high-impact enterprise AI workflows, and spatial 3D computing with mathematical precision and Apple-grade craft.
        </motion.p>

        {/* Action Buttons with Apple Rounded Corners */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-2 mb-12 sm:mb-16 w-full max-w-xl"
        >
          <Button
            onClick={() => scrollToSection("projects")}
            size="lg"
            className="flex-1 sm:flex-initial bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A] hover:from-[#FF7A1A] hover:to-[#FFA033] text-white px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold rounded-2xl shadow-xl shadow-[#FF5C00]/25 hover:shadow-[#FF5C00]/40 transition-all duration-300 transform hover:-translate-y-0.5 border-0 flex items-center justify-center gap-2"
          >
            <span>Explore Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Button>

          {/* Dedicated Print CV Action */}
          <Button
            onClick={onOpenCV}
            variant="outline"
            size="lg"
            className="flex-1 sm:flex-initial bg-white/70 dark:bg-white/[0.05] backdrop-blur-xl border border-black/10 dark:border-white/10 hover:border-[#FF5C00]/40 hover:bg-orange-500/10 text-slate-900 dark:text-white px-5 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base font-semibold rounded-2xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <Printer className="w-4 h-4 text-[#FF5C00]" />
            <span>Print CV (PDF)</span>
          </Button>

          <Button
            onClick={() => scrollToSection("experience")}
            variant="ghost"
            size="lg"
            className="hidden sm:inline-flex text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 px-6 py-4 text-sm font-semibold rounded-2xl transition-all"
          >
            Founder Journey
          </Button>
        </motion.div>

        {/* Minimal Executive Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl mx-auto"
        >
          {[
            { value: "11+", label: "Client Enterprise Deployments" },
            { value: "6+", label: "Proprietary AI SaaS Platforms" },
            { value: "30+", label: "Autonomous Digital Solutions" },
            { value: "Completed", label: "Artificial Intelligence and Data Science" },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 bg-white/70 dark:bg-[#111111]/70 backdrop-blur-2xl border border-black/5 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-none hover:border-[#FF5C00]/30 hover:-translate-y-0.5 transition-all duration-300"
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
