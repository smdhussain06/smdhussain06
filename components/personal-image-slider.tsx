"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PersonalImageSliderProps {
  className?: string
}

const IMAGES = [
  {
    path: "/personal-images/hussain-blazer.png",
    alt: "Mohammed Hussain in Signature Orange Blazer",
    label: "Founder and Lead Systems Architect",
  },
  {
    path: "/personal-images/image-1.jpg",
    alt: "Mohammed Hussain Portrait",
    label: "Artificial Intelligence and Data Science",
  },
  {
    path: "/personal-images/image-2.jpg",
    alt: "Mohammed Hussain Technical Portrait",
    label: "Enterprise Operations and Automation",
  },
  {
    path: "/personal-images/image-3.jpg",
    alt: "Mohammed Hussain Creative Portrait",
    label: "Systems Architecture and Client Engagement",
  },
]

export default function PersonalImageSlider({ className = "" }: PersonalImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const basePath = process.env.NODE_ENV === "production" ? "/smdhussain06" : ""

  const handleNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % IMAGES.length)
  }, [])

  const handlePrev = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length)
  }, [])

  // Auto-advance slides every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 4500)
    return () => clearInterval(timer)
  }, [handleNext])

  // Touch swipe support for mobile dashboard
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > 45) {
      handleNext()
    } else if (distance < -45) {
      handlePrev()
    }
  }

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  }

  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-slate-950 select-none ${className}`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 260, damping: 28 },
            opacity: { duration: 0.35 },
          }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={`${basePath}${IMAGES[currentIndex].path}`}
            alt={IMAGES[currentIndex].alt}
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.currentTarget.src = `${basePath}/profilepic.jpg`
            }}
          />
          {/* Subtle bottom gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Label and Badge Overlay */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex items-end justify-between pointer-events-none">
        <div className="space-y-0.5">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FF5C00] text-white shadow-md shadow-[#FF5C00]/40">
            Profile
          </span>
          <p className="text-white text-xs sm:text-sm font-semibold drop-shadow-md">
            {IMAGES[currentIndex].label}
          </p>
        </div>

        {/* Counter Badge */}
        <div className="bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-xl text-xs font-bold border border-white/10 shrink-0">
          {currentIndex + 1} / {IMAGES.length}
        </div>
      </div>

      {/* Previous and Next Navigation Arrows */}
      <button
        onClick={handlePrev}
        aria-label="Previous profile photo"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next profile photo"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute top-4 right-4 z-20 flex space-x-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/10">
        {IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-5 bg-[#FF5C00]" : "w-1.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
