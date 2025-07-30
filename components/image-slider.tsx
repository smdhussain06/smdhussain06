"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface ImageSliderProps {
  basePath: string
  folderPath: string
  imageCount: number
  alt: string
  className?: string
  fileExtension?: string
}

export default function ImageSlider({ 
  basePath, 
  folderPath, 
  imageCount, 
  alt, 
  className,
  fileExtension = "jpg" 
}: ImageSliderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [nextImageIndex, setNextImageIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      
      // After transition completes, update indices
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % imageCount)
        setNextImageIndex((prev) => (prev + 1) % imageCount)
        setIsTransitioning(false)
      }, 800) // Match the transition duration
      
    }, 3000) // Show each image for 3 seconds

    return () => clearInterval(interval)
  }, [imageCount])

  const getImagePath = (index: number) => {
    const imageNumber = (index % imageCount) + 1
    return `${basePath}/${folderPath}/${imageNumber}.${fileExtension}`
  }

  const currentImagePath = getImagePath(currentImageIndex)
  const nextImagePath = getImagePath(nextImageIndex)

  return (
    <div className="relative w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
      {/* Current Image - Always visible as base layer */}
      <img
        src={currentImagePath}
        alt={`${alt} - Image ${currentImageIndex + 1}`}
        className="absolute inset-0 w-full h-full object-cover z-10"
        onError={(e) => {
          console.log('Current image failed to load:', currentImagePath);
          e.currentTarget.src = `${basePath}/placeholder.svg`;
        }}
      />
      
      {/* Next Image - Slides in from right to overlay the current image */}
      <motion.img
        key={`next-${nextImageIndex}`}
        src={nextImagePath}
        alt={`${alt} - Image ${nextImageIndex + 1}`}
        className="absolute inset-0 w-full h-full object-cover z-20"
        initial={{ x: "100%" }}
        animate={{ 
          x: isTransitioning ? "0%" : "100%" 
        }}
        transition={{
          duration: 0.8,
          ease: [0.4, 0.0, 0.2, 1] // Custom smooth easing curve
        }}
        onError={(e) => {
          console.log('Next image failed to load:', nextImagePath);
          e.currentTarget.src = `${basePath}/placeholder.svg`;
        }}
      />
    </div>
  )
}
