"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
// Remove ChevronDown from imports since it's no longer used
import { Button } from "@/components/ui/button"

// Pure CSS background - no React re-renders
const BackgroundDots = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(50px, -50px) scale(1.2); }
          50% { transform: translate(100px, -100px) scale(1.5); }
          75% { transform: translate(50px, -50px) scale(1.2); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-30px, 40px) scale(1.3); }
          50% { transform: translate(-60px, 80px) scale(1.1); }
          75% { transform: translate(-30px, 40px) scale(1.3); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(70px, 30px) scale(1.4); }
          50% { transform: translate(140px, 60px) scale(1); }
          75% { transform: translate(70px, 30px) scale(1.4); }
        }
        .floating-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          background: rgb(254 215 170 / 0.6);
          border-radius: 50%;
          will-change: transform;
        }
        .dark .floating-dot {
          background: rgb(154 52 18 / 0.6);
        }
        .dot-1 { left: 10%; top: 20%; animation: float1 12s ease-in-out infinite; }
        .dot-2 { left: 20%; top: 60%; animation: float2 15s ease-in-out infinite; }
        .dot-3 { left: 70%; top: 10%; animation: float3 18s ease-in-out infinite; }
        .dot-4 { left: 80%; top: 70%; animation: float1 14s ease-in-out infinite; animation-delay: -2s; }
        .dot-5 { left: 30%; top: 30%; animation: float2 16s ease-in-out infinite; animation-delay: -4s; }
        .dot-6 { left: 60%; top: 80%; animation: float3 13s ease-in-out infinite; animation-delay: -1s; }
        .dot-7 { left: 90%; top: 40%; animation: float1 17s ease-in-out infinite; animation-delay: -3s; }
        .dot-8 { left: 40%; top: 90%; animation: float2 11s ease-in-out infinite; animation-delay: -5s; }
        .dot-9 { left: 15%; top: 75%; animation: float3 19s ease-in-out infinite; animation-delay: -1.5s; }
        .dot-10 { left: 75%; top: 25%; animation: float1 13.5s ease-in-out infinite; animation-delay: -3.5s; }
        .dot-11 { left: 55%; top: 55%; animation: float2 16.5s ease-in-out infinite; animation-delay: -2.5s; }
        .dot-12 { left: 85%; top: 15%; animation: float3 14.5s ease-in-out infinite; animation-delay: -4.5s; }
        .dot-13 { left: 25%; top: 85%; animation: float1 15.5s ease-in-out infinite; animation-delay: -1s; }
        .dot-14 { left: 95%; top: 60%; animation: float2 12.5s ease-in-out infinite; animation-delay: -6s; }
        .dot-15 { left: 5%; top: 45%; animation: float3 18.5s ease-in-out infinite; animation-delay: -2s; }
        .dot-16 { left: 45%; top: 15%; animation: float1 16.8s ease-in-out infinite; animation-delay: -4s; }
        .dot-17 { left: 65%; top: 95%; animation: float2 13.8s ease-in-out infinite; animation-delay: -3s; }
        .dot-18 { left: 35%; top: 65%; animation: float3 17.2s ease-in-out infinite; animation-delay: -5s; }
        .dot-19 { left: 50%; top: 35%; animation: float1 14.2s ease-in-out infinite; animation-delay: -1.8s; }
        .dot-20 { left: 82%; top: 88%; animation: float2 15.8s ease-in-out infinite; animation-delay: -3.8s; }
      `}</style>
      <div className="floating-dot dot-1"></div>
      <div className="floating-dot dot-2"></div>
      <div className="floating-dot dot-3"></div>
      <div className="floating-dot dot-4"></div>
      <div className="floating-dot dot-5"></div>
      <div className="floating-dot dot-6"></div>
      <div className="floating-dot dot-7"></div>
      <div className="floating-dot dot-8"></div>
      <div className="floating-dot dot-9"></div>
      <div className="floating-dot dot-10"></div>
      <div className="floating-dot dot-11"></div>
      <div className="floating-dot dot-12"></div>
      <div className="floating-dot dot-13"></div>
      <div className="floating-dot dot-14"></div>
      <div className="floating-dot dot-15"></div>
      <div className="floating-dot dot-16"></div>
      <div className="floating-dot dot-17"></div>
      <div className="floating-dot dot-18"></div>
      <div className="floating-dot dot-19"></div>
      <div className="floating-dot dot-20"></div>
    </div>
  )
}

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const roles = [
    "Founder and Lead Systems Architect at A Generative Slice",
    "Bachelor of Technology in Artificial Intelligence and Data Science",
    "Autonomous Multi-Agent Systems Architect",
    "Offline Edge Intelligence Specialist",
    "Enterprise AI Solutions Builder",
    "Creative Technologist and 3D Visualizer"
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-20 px-6">
      {/* Brand Ambient Glow Backdrop matching A Generative Slice */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#FF5C00]/15 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-[#FF8C1A]/10 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent opacity-60" />
      </div>

      {/* Animated Background Elements */}
      <BackgroundDots />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Main Headline with Masking Effect */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#0F172A] dark:text-white mb-6 tracking-tight leading-[0.9]"
        >
          MOHAMMED
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] via-[#FF7A1A] to-[#FF8C1A]">
            HUSSAIN
          </span>
        </motion.h1>

        {/* Dynamic Role Display with Smooth Transition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-2xl font-semibold text-[#0F172A]/80 dark:text-white/80 mb-6 max-w-3xl mx-auto leading-relaxed px-4 min-h-[2.8em] flex items-center justify-center"
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

        {/* Lead Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-xl text-[#64748B] dark:text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Architecting autonomous multi-agent ecosystems, high-impact enterprise AI workflows, and spatial 3D computing at the intersection of deep engineering and visual mastery.
        </motion.p>

        {/* Action Buttons with Apple-like Rounded Corners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 px-4 mb-16"
        >
          <Button
            onClick={() => scrollToSection("projects")}
            size="lg"
            className="bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A] hover:from-[#FF7A1A] hover:to-[#FFA033] text-white px-9 py-4 text-base font-semibold rounded-2xl shadow-xl shadow-[#FF5C00]/25 hover:shadow-[#FF5C00]/40 transition-all duration-300 transform hover:-translate-y-0.5 border-0"
          >
            Explore Solutions
          </Button>
          <Button
            onClick={() => scrollToSection("experience")}
            variant="outline"
            size="lg"
            className="bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl border border-black/10 dark:border-white/10 hover:border-[#FF5C00]/30 hover:bg-black/[0.03] dark:hover:bg-white/[0.08] text-[#0F172A] dark:text-white px-9 py-4 text-base font-semibold rounded-2xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Founder Journey
          </Button>
        </motion.div>

        {/* Executive Stats in Apple-Style Glass Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto"
        >
          {[
            { value: "11+", label: "Client Enterprise Deployments" },
            { value: "6+", label: "Proprietary AI SaaS Platforms" },
            { value: "30+", label: "Autonomous Digital Solutions" },
            { value: "Completed", label: "Artificial Intelligence and Data Science" },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-3xl p-6 bg-white/70 dark:bg-[#111111]/70 backdrop-blur-2xl border border-black/5 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-none hover:border-[#FF5C00]/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A] mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-[#64748B] dark:text-white/60 font-medium leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
