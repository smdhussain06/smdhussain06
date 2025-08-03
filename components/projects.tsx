"use client"

import { motion } from "framer-motion"
import { Brain, BarChart3, Palette, Box, Video, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import ImageSlider from "./image-slider"

// Get the base path for GitHub Pages
const basePath = process.env.NODE_ENV === 'production' ? '/smdhussain06' : ''

// Icon mapping for different project types
const getProjectIcon = (iconType: string) => {
  const iconProps = "w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors duration-300"
  
  switch (iconType) {
    case 'ai':
      return <Brain className={iconProps} />
    case 'data':
      return <BarChart3 className={iconProps} />
    case 'design':
      return <Palette className={iconProps} />
    case '3d':
      return <Box className={iconProps} />
    case 'video':
      return <Video className={iconProps} />
    case 'motion':
      return <Sparkles className={iconProps} />
    default:
      return <Brain className={iconProps} />
  }
}

const projects = [
  {
    title: "Edge AI Mobile Computation",
    category: "AI Engineering",
    description:
      "Purpose-built system that enables large language models to run directly on mobile devices, eliminating server dependence to boost privacy and cut operational costs.",
    image: "/placeholder.svg?height=300&width=400",
    iconType: "ai",
    isSlider: true,
    sliderConfig: {
      folderPath: "ai-design-tool",
      imageCount: 4 // Update this number based on how many images you add
    },
    tags: ["Edge AI", "Mobile AI", "LLM", "Privacy"],
    link: "#",
    github: "#",
  },
  {
    title: "Data Visualization Dashboard",
    category: "AI Engineering",
    description: "Interactive dashboard for data analysis and visualization using Python and modern web technologies.",
    image: "/placeholder.svg?height=300&width=400",
    iconType: "data",
    isSlider: true,
    sliderConfig: {
      folderPath: "data-visualization",
      imageCount: 3 // Update this number based on how many images you add
    },
    tags: ["Python", "Data Science", "Visualization", "Dashboard"],
    link: "#",
    github: "#",
  },
  {
    title: "Brand Identity Campaign",
    category: "Digital Marketing",
    description:
      "Complete brand identity design for a tech startup including logo, color palette, and marketing materials.",
    image: "/placeholder.svg?height=300&width=400",
    iconType: "design",
    isSlider: true,
    sliderConfig: {
      folderPath: "brand-identity",
      imageCount: 5 // Update this number based on how many images you add
    },
    tags: ["Branding", "Logo Design", "Adobe Illustrator", "Marketing"],
    link: "#",
    github: "#",
  },
  {
    title: "3D Product Visualization",
    category: "Digital Marketing",
    description: "Stunning 3D product renders and animations created in Blender for e-commerce and marketing campaigns.",
    image: "/3DMOCKUP.jpg",
    iconType: "3d",
    isSlider: true,
    sliderConfig: {
      folderPath: "3d-projects",
      imageCount: 5 // Update this number based on how many images you add
    },
    tags: ["Blender", "3D Modeling", "Product Design", "Marketing"],
    link: "#",
    github: "#",
  },
  {
    title: "Social Media Campaign",
    category: "Content Creation",
    description: "Comprehensive social media campaign with video content, graphics, and strategic content planning.",
    image: "/placeholder.svg?height=300&width=400",
    iconType: "video",
    isSlider: true,
    sliderConfig: {
      folderPath: "social-media-campaign",
      imageCount: 6 // Update this number based on how many images you add
    },
    tags: ["Video Editing", "Social Media", "Content Strategy", "After Effects"],
    link: "#",
    github: "#",
  },
  {
    title: "Motion Graphics Reel",
    category: "Content Creation",
    description: "Creative motion graphics reel showcasing various animation techniques and visual effects.",
    image: "/placeholder.svg?height=300&width=400",
    iconType: "motion",
    isSlider: true,
    sliderConfig: {
      folderPath: "motion-graphics",
      imageCount: 4 // Update this number based on how many images you add
    },
    tags: ["After Effects", "Motion Graphics", "Animation", "Visual Effects"],
    link: "#",
    github: "#",
  },
]

const categories = [
  "All",
  "AI Engineering",
  "Digital Marketing",
  "Content Creation",
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="projects" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6">Featured Projects</h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mb-6 sm:mb-8" />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`px-3 sm:px-4 py-2 text-sm sm:text-base rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                    : "border-gray-300 dark:border-gray-600 hover:border-orange-500 dark:hover:border-orange-400"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800"
            >
              <div className="relative overflow-hidden h-48">
                {project.isSlider && project.sliderConfig ? (
                  <ImageSlider 
                    basePath={basePath}
                    folderPath={project.sliderConfig.folderPath}
                    imageCount={project.sliderConfig.imageCount}
                    alt={project.title}
                    fileExtension="jpg"
                  />
                ) : (
                  <img
                    src={`${basePath}${project.image}` || `${basePath}/placeholder.svg`}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      console.log('Image failed to load:', project.image);
                      e.currentTarget.src = `${basePath}/placeholder.svg`;
                    }}
                    onLoad={() => console.log('Image loaded successfully:', project.image)}
                  />
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-orange-500 dark:text-orange-400">{project.category}</span>
                  {getProjectIcon(project.iconType)}
                </div>

                <h3 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-orange-500 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
