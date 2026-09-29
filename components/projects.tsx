"use client"

import { motion } from "framer-motion"
import { Brain, BarChart3, Palette, Box, Video, Sparkles, Megaphone, Bot, Layers, Building, Cpu, Globe, ArrowUpRight } from "lucide-react"
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
      return <Bot className={iconProps} />
    case 'saas':
      return <Layers className={iconProps} />
    case 'enterprise':
      return <Building className={iconProps} />
    case 'edge':
      return <Cpu className={iconProps} />
    case 'data':
      return <BarChart3 className={iconProps} />
    case 'design':
      return <Palette className={iconProps} />
    case '3d':
      return <Box className={iconProps} />
    case 'video':
      return <Megaphone className={iconProps} />
    case 'motion':
      return <Sparkles className={iconProps} />
    default:
      return <Brain className={iconProps} />
  }
}

const projects = [
  {
    title: "A Generative Slice (AGS) — Enterprise AI Ecosystem",
    category: "Autonomous AI & SaaS",
    description:
      "Flagship venture studio platform engineering elite enterprise AI software, autonomous multi-agent pipelines, FastMCP workspaces, and bespoke digital ecosystems.",
    image: "/placeholder.svg?height=300&width=400",
    iconType: "saas",
    isSlider: false,
    tags: ["Venture Studio", "FastMCP", "Multi-Agent Systems", "SaaS Hub"],
    link: "https://github.com/A-Generative-Slice",
    github: "https://github.com/A-Generative-Slice",
    buttonText: "Explore Ecosystem",
    buttonType: "github",
  },
  {
    title: "SliceInbox — Litelab AI Chief of Staff (MCP)",
    category: "Autonomous AI & SaaS",
    description:
      "Autonomous Executive AI Chief of Staff Model Context Protocol (FastMCP) workspace triaging 4 corporate Zoho Mail channels for European lighting house Litelab Milano.",
    image: "/placeholder.svg?height=300&width=400",
    iconType: "ai",
    isSlider: false,
    tags: ["FastMCP", "Zoho Mail", "Autonomous Triage", "Enterprise AI"],
    link: "https://github.com/A-Generative-Slice/SliceInbox",
    github: "https://github.com/A-Generative-Slice/SliceInbox",
    buttonText: "View Architecture",
    buttonType: "github",
  },
  {
    title: "SliceLeads — Autonomous Client Acquisition Engine",
    category: "Autonomous AI & SaaS",
    description:
      "4-tier B2B acquisition engine integrating Playwright Google Maps scraping, Groq AI, and Gemini 2.0 Flash automated cold email pitching and mailbox verification.",
    image: "/placeholder.svg?height=300&width=400",
    iconType: "ai",
    isSlider: false,
    tags: ["Playwright", "Gemini 2.0", "Groq AI", "Lead Automation"],
    link: "https://github.com/A-Generative-Slice/SliceLeads",
    github: "https://github.com/A-Generative-Slice/SliceLeads",
    buttonText: "View Pipeline",
    buttonType: "github",
  },
  {
    title: "Project Mald & Rose Chemicals — Enterprise AI ERP",
    category: "Enterprise Deployments",
    description:
      "Multi-godown stock sync ERP with Tesseract OCR waybill capture, Gemini AI invoice parsing, and Sarvam AI conversational WhatsApp ordering.",
    image: "/placeholder.svg?height=300&width=400",
    iconType: "enterprise",
    isSlider: false,
    tags: ["Enterprise ERP", "Tesseract OCR", "Gemini AI", "Sarvam AI"],
    link: "https://rosechemicals.in/",
    github: "https://github.com/A-Generative-Slice/Rose-Chemicals",
    buttonText: "Live Platform",
    buttonType: "demo",
  },
  {
    title: "KaiPulla - Edge AI & Offline Assistant",
    category: "Edge AI & Systems",
    description:
      "Private, 100% offline AI assistant powered by Ollama local models. Works natively on PC & Android (Termux) with zero cloud reliance and complete data privacy.",
    image: "/placeholder.svg?height=300&width=400",
    iconType: "edge",
    isSlider: true,
    folderPath: "edge-ai-mobile-computation",
    tags: ["Edge AI", "Ollama", "Android Termux", "Privacy First"],
    link: "https://github.com/smdhussain06/KaiPulla-offline-assistant",
    github: "https://github.com/smdhussain06/KaiPulla-offline-assistant",
    buttonText: "View Repository",
    buttonType: "github",
  },
  {
    title: "AttiTutor – Personalized Peer Learning",
    category: "Edge AI & Systems",
    description:
      "Interactive AI learning companion that explains difficult academic concepts in your peers' voice using shared memories — turning study sessions into engaging web apps.",
    image: "/placeholder.svg?height=300&width=400",
    iconType: "ai",
    isSlider: true,
    folderPath: "attitutor-learning",
    tags: ["EdTech", "AI", "Web App", "Personalized Learning"],
    link: "https://smdhussain06.github.io/AttiTutor/",
    github: "https://github.com/smdhussain06/AttiTutor",
    buttonText: "Try It Live",
    buttonType: "demo",
  },
  {
    title: "Slice3D & Spatial Computing Lab",
    category: "Creative & 3D",
    description:
      "Headless Blender 3D procedural spatial computing engine, procedural MCP bridge, and automated GLTF/GLB web asset pipelines for architectural visualization.",
    image: "/3DMOCKUP.jpg",
    iconType: "3d",
    isSlider: true,
    folderPath: "3d-projects",
    tags: ["Blender 3D", "Headless 3D", "Spatial Computing", "FastMCP"],
    link: "https://github.com/A-Generative-Slice/Slice3D",
    github: "https://github.com/A-Generative-Slice/Slice3D",
    buttonText: "View 3D Lab",
    buttonType: "gallery",
  },
  {
    title: "Motion Graphics Reel & Cinematic Systems",
    category: "Creative & 3D",
    description:
      "Creative motion graphics reel and brand identity campaigns showcasing 3D animation, typography, and visual effects across Adobe Suite and Blender.",
    image: "/placeholder.svg?height=300&width=400",
    iconType: "motion",
    isSlider: true,
    folderPath: "motion-graphics",
    tags: ["After Effects", "Motion Graphics", "3D Animation", "Visual FX"],
    link: "#",
    github: "#",
    buttonText: "Watch Reel",
    buttonType: "video",
    fileExtension: "mp4",
  },
]

const categories = [
  "All",
  "Autonomous AI & SaaS",
  "Enterprise Deployments",
  "Edge AI & Systems",
  "Creative & 3D",
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
                {project.isSlider && project.folderPath ? (
                  <ImageSlider 
                    basePath={basePath}
                    folderPath={project.folderPath}
                    alt={project.title}
                    fileExtension={project.fileExtension || "jpg"}
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

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                {project.buttonText && (
                  <div className="flex gap-2">
                    <Button
                      onClick={() => window.open(project.link, '_blank')}
                      className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      {project.buttonText}
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
