"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface PersonalImageSliderProps {
  className?: string
}

export default function PersonalImageSlider({ className = "" }: PersonalImageSliderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [nextImageIndex, setNextImageIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [availableImages, setAvailableImages] = useState<number[]>([])
  const [loading, setLoading] = useState(true)

  // Get the base path for GitHub Pages
  const basePath = process.env.NODE_ENV === 'production' ? '/smdhussain06' : ''

  // Auto-detect available images
  useEffect(() => {
    const detectImages = async () => {
      const imageIndices: number[] = []
      
      // Check for images from 1 to 20
      for (let i = 1; i <= 20; i++) {
        try {
          const response = await fetch(`${basePath}/personal-images/image-${i}.jpg`, { method: 'HEAD' })
          if (response.ok) {
            imageIndices.push(i)
          }
        } catch (error) {
          // Image doesn't exist, continue checking
          continue
        }
      }

      setAvailableImages(imageIndices)
      setLoading(false)
      
      // Set next image index
      if (imageIndices.length > 1) {
        setNextImageIndex(1 % imageIndices.length)
      }
    }

    detectImages()
  }, [basePath])

  // Auto-advance slides with smooth transition
  useEffect(() => {
    if (availableImages.length <= 1) return

    const interval = setInterval(() => {
      setIsTransitioning(true)
      
      // After transition completes, update indices
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % availableImages.length)
        setNextImageIndex((prev) => (prev + 1) % availableImages.length)
        setIsTransitioning(false)
      }, 800) // Match the transition duration
      
    }, 3000) // Show each image for 3 seconds

    return () => clearInterval(interval)
  }, [availableImages.length])

  if (loading) {
    return (
      <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 ${className} flex items-center justify-center`}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  // If no images found, show fallback to original profile pic
  if (availableImages.length === 0) {
    return (
      <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 ${className}`}>
        <img
          src={`${basePath}/profilepic.jpg`}
          alt="Mohammad Hussain"
          className="w-full h-full object-cover"
        />
      </div>
    )
  }

  // If only one image, show it statically
  if (availableImages.length === 1) {
    return (
      <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 ${className}`}>
        <img
          src={`${basePath}/personal-images/image-${availableImages[0]}.jpg`}
          alt="Mohammad Hussain"
          className="w-full h-full object-cover"
        />
      </div>
    )
  }

  // Multiple images - show slider with smooth slide transition
  return (
    <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 ${className}`}>
      {/* Current Image - Always visible as base layer */}
      <img
        src={`${basePath}/personal-images/image-${availableImages[currentImageIndex]}.jpg`}
        alt={`Mohammad Hussain - Photo ${currentImageIndex + 1}`}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src = `${basePath}/profilepic.jpg`;
        }}
      />
      
      {/* Next Image - Slides in from right to overlay the current image */}
      <motion.img
        key={`next-${nextImageIndex}`}
        src={`${basePath}/personal-images/image-${availableImages[nextImageIndex]}.jpg`}
        alt={`Mohammad Hussain - Photo ${nextImageIndex + 1}`}
        className="absolute inset-0 w-full h-full object-cover z-10"
        initial={{ x: "100%" }}
        animate={{ 
          x: isTransitioning ? "0%" : "100%" 
        }}
        transition={{
          duration: 0.8,
          ease: [0.4, 0.0, 0.2, 1] // Custom smooth easing curve
        }}
        onError={(e) => {
          e.currentTarget.src = `${basePath}/profilepic.jpg`;
        }}
      />

      {/* Image Counter */}
      <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-xs font-medium z-20">
        {currentImageIndex + 1} / {availableImages.length}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-4 flex space-x-2 z-20">
        {availableImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentImageIndex(index)
              setNextImageIndex((index + 1) % availableImages.length)
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
