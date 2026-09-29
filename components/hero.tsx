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
    "Founder & CEO @ A Generative Slice",
    "B.Tech in Artificial Intelligence & Data Science",
    "Autonomous Multi-Agent Systems Architect",
    "FastMCP & Edge Intelligence Pioneer",
    "Enterprise AI Solutions Builder",
    "Creative Technologist & 3D Visualizer"
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-white dark:bg-black" />

      {/* Animated Background Elements */}
      <BackgroundDots />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-600 dark:text-orange-400 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
          <span>Founder @ A Generative Slice · B.Tech Graduate in AI & Data Science</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black dark:text-white mb-4 sm:mb-6 tracking-tight leading-none"
        >
          Mohammed
          <br />
          <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
            Hussain
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-2xl font-medium text-gray-700 dark:text-gray-200 mb-6 max-w-3xl mx-auto leading-relaxed px-4 min-h-[2.5em] flex items-center justify-center"
        >
          <div className="relative w-full h-full text-center">
            {roles.map((role, index) => (
              <span
                key={index}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 transform ${
                  index === currentRoleIndex 
                    ? 'opacity-100 translate-y-0 text-orange-600 dark:text-orange-400 font-semibold' 
                    : 'opacity-0 translate-y-2 pointer-events-none'
                }`}
              >
                {role}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4"
        >
          Architecting autonomous multi-agent systems, high-impact enterprise AI workflows, and spatial 3D computing at the intersection of deep engineering and creative mastery.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 px-4 mb-14"
        >
          <Button
            onClick={() => scrollToSection("projects")}
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-105"
          >
            Explore Solutions & Work
          </Button>
          <Button
            onClick={() => scrollToSection("experience")}
            variant="outline"
            size="lg"
            className="border-gray-300 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-400 text-gray-800 dark:text-gray-200 px-8 py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Founder Journey
          </Button>
        </motion.div>

        {/* Executive Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto px-4"
        >
          {[
            { value: "11+", label: "Client Enterprise Deployments" },
            { value: "6+", label: "Proprietary AI SaaS Products" },
            { value: "30+", label: "Autonomous Solutions & FastMCP" },
            { value: "B.Tech", label: "Artificial Intelligence & Data Science" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 backdrop-blur-md shadow-sm hover:border-orange-500/50 transition-all"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-orange-500 dark:text-orange-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
