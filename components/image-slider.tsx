"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface ImageSliderProps {
  basePath: string
  folderPath: string
  alt: string
  className?: string
  fileExtension?: string
  maxImages?: number // Optional limit, will auto-detect if not provided
}

export default function ImageSlider({ 
  basePath, 
  folderPath, 
  alt, 
  className,
  fileExtension = "jpg",
  maxImages = 20 // Default max to check for auto-detection
}: ImageSliderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [nextImageIndex, setNextImageIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [imageCount, setImageCount] = useState(0)
  const [availableImages, setAvailableImages] = useState<string[]>([])

  // Auto-detect available images
  useEffect(() => {
    const detectImages = async () => {
      const images: string[] = []
      
      // Check for images from 1 to maxImages
      for (let i = 1; i <= maxImages; i++) {
        const imagePath = `${basePath}/${folderPath}/image-${i}.${fileExtension}`
        
        try {
          // Try to load the image to see if it exists
          const response = await fetch(imagePath, { method: 'HEAD' })
          if (response.ok) {
            images.push(imagePath)
          } else {
            // If we hit a 404, stop checking (assumes sequential numbering)
            break
          }
        } catch (error) {
          // If fetch fails, stop checking
          break
        }
      }
      
      if (images.length > 0) {
        setAvailableImages(images)
        setImageCount(images.length)
        setNextImageIndex(images.length > 1 ? 1 : 0)
      }
    }

    detectImages()
  }, [basePath, folderPath, fileExtension, maxImages])

  useEffect(() => {
    if (imageCount <= 1) return // Don't cycle if only one or no images

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
    return `${basePath}/${folderPath}/image-${imageNumber}.${fileExtension}`
  }

  // Show placeholder if no images found
  if (imageCount === 0) {
    return (
      <div className="relative w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        <img
          src={`${basePath}/placeholder.svg`}
          alt={`${alt} - No images found`}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-500 text-sm">Add images to {folderPath}/</p>
        </div>
      </div>
    )
  }

  // Show single image without transition if only one image
  if (imageCount === 1) {
    return (
      <div className="relative w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src={getImagePath(0)}
          alt={`${alt} - Image 1`}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            console.log('Image failed to load:', getImagePath(0));
            e.currentTarget.src = `${basePath}/placeholder.svg`;
          }}
        />
      </div>
    )
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

      {/* Image counter indicator */}
      <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
        {currentImageIndex + 1} / {imageCount}
      </div>
    </div>
  )
}
