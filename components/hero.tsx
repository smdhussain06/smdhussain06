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
    "AI & Data Science Enthusiast",
    "Graphic Designer", 
    "Content Creator",
    "3D Artist",
    "Photographer",
    "Marketing Strategist"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [roles.length])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-white dark:bg-black" />

      {/* Animated Background Elements - Now Stable */}
      <BackgroundDots />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-4 sm:mb-6 leading-tight"
        >
          Mohammad
          <br />
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Hussain
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 min-h-[2em] flex items-center justify-center"
        >
          <div className="relative w-full h-full text-center">
            {roles.map((role, index) => (
              <span
                key={index}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  index === currentRoleIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {role}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="px-4"
        >
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View Portfolio
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
