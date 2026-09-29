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
    title: "A Generative Slice Enterprise Platform",
    category: "Autonomous AI & SaaS",
    description:
      "Venture studio platform engineering elite enterprise AI software, autonomous multi-agent pipelines, and bespoke digital ecosystems.",
    image: "/placeholder.svg?height=300&width=400",
    iconType: "saas",
    isSlider: false,
    tags: ["Venture Studio", "Autonomous Agents", "Enterprise SaaS"],
    link: "https://github.com/A-Generative-Slice",
    github: "https://github.com/A-Generative-Slice",
    buttonText: "Explore Ecosystem",
    buttonType: "github",
  },
  {
    title: "SliceInbox Intelligent Email Automation",
    category: "Autonomous AI & SaaS",
    description:
      "Autonomous Executive AI Chief of Staff workspace triaging four corporate communication channels for European luxury lighting brand Litelab Milano.",
    image: "/placeholder.svg?height=300&width=400",
    iconType: "ai",
    isSlider: false,
    tags: ["Email Automation", "Executive AI", "Autonomous Triage"],
    link: "https://github.com/A-Generative-Slice/SliceInbox",
    github: "https://github.com/A-Generative-Slice/SliceInbox",
    buttonText: "View Architecture",
    buttonType: "github",
  },
  {
    title: "SliceLeads Automated Client Acquisition Engine",
    category: "Autonomous AI & SaaS",
    description:
      "Automated client acquisition pipeline integrating precision scraping, generative email pitching, and automated mailbox deliverability verification.",
    image: "/placeholder.svg?height=300&width=400",
    iconType: "ai",
    isSlider: false,
    tags: ["Lead Automation", "Generative Outreach", "Data Pipelines"],
    link: "https://github.com/A-Generative-Slice/SliceLeads",
    github: "https://github.com/A-Generative-Slice/SliceLeads",
    buttonText: "View Pipeline",
    buttonType: "github",
  },
  {
    title: "Project Mald and Rose Chemicals Enterprise ERP",
    category: "Enterprise Deployments",
    description:
      "Multi-godown stock synchronization ERP with optical character recognition for physical waybills, automated invoice extraction, and conversational commerce.",
    image: "/placeholder.svg?height=300&width=400",
    iconType: "enterprise",
    isSlider: false,
    tags: ["Enterprise ERP", "Document Vision", "Conversational Commerce"],
    link: "https://rosechemicals.in/",
    github: "https://github.com/A-Generative-Slice/Rose-Chemicals",
    buttonText: "Live Platform",
    buttonType: "demo",
  },
  {
    title: "KaiPulla Offline Edge Intelligence",
    category: "Edge AI & Systems",
    description:
      "Private, completely offline personal AI assistant engineered to run local language models natively on mobile Android and personal computers without internet.",
    image: "/placeholder.svg?height=300&width=400",
    iconType: "edge",
    isSlider: true,
    folderPath: "edge-ai-mobile-computation",
    tags: ["Edge AI", "Offline LLMs", "Mobile Computation", "Zero Cloud Dependency"],
    link: "https://github.com/smdhussain06/KaiPulla-offline-assistant",
    github: "https://github.com/smdhussain06/KaiPulla-offline-assistant",
    buttonText: "View Repository",
    buttonType: "github",
  },
  {
    title: "AttiTutor Personalized Learning Platform",
    category: "Edge AI & Systems",
    description:
      "Interactive conversational learning companion that simplifies complex academic curricula through contextual peer explanations and shared notes.",
    image: "/placeholder.svg?height=300&width=400",
    iconType: "ai",
    isSlider: true,
    folderPath: "attitutor-learning",
    tags: ["EdTech", "Conversational AI", "Interactive Web App"],
    link: "https://smdhussain06.github.io/AttiTutor/",
    github: "https://github.com/smdhussain06/AttiTutor",
    buttonText: "Try It Live",
    buttonType: "demo",
  },
  {
    title: "Slice3D Spatial Computing Lab",
    category: "Creative & 3D",
    description:
      "Headless Blender procedural spatial computing engine and automated 3D web asset pipelines for photorealistic architectural visualization.",
    image: "/3DMOCKUP.jpg",
    iconType: "3d",
    isSlider: true,
    folderPath: "3d-projects",
    tags: ["Blender 3D", "Procedural Modeling", "Spatial Computing"],
    link: "https://github.com/A-Generative-Slice/Slice3D",
    github: "https://github.com/A-Generative-Slice/Slice3D",
    buttonText: "View 3D Lab",
    buttonType: "gallery",
  },
  {
    title: "Motion Graphics and Visual Design Systems",
    category: "Creative & 3D",
    description:
      "Cinematic motion design reel, procedural animations, and bespoke brand design systems crafted across Adobe After Effects and Blender.",
    image: "/placeholder.svg?height=300&width=400",
    iconType: "motion",
    isSlider: true,
    folderPath: "motion-graphics",
    tags: ["After Effects", "Motion Graphics", "3D Animation", "Design Systems"],
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
    <section id="projects" className="py-20 sm:py-28 bg-white dark:bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] dark:text-white tracking-tight mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A]">Solutions</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A] mx-auto rounded-full mb-8" />

          {/* Category Filter - Responsive on mobile and desktop */}
          <div className="flex overflow-x-auto sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-3 mb-8 px-1 pb-2 sm:pb-0 no-scrollbar">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant="ghost"
                className={`px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-2xl transition-all duration-300 shrink-0 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A] text-white shadow-lg shadow-[#FF5C00]/25"
                    : "bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl border border-black/5 dark:border-white/10 text-[#0F172A] dark:text-white hover:border-[#FF5C00]/30"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group rounded-3xl overflow-hidden bg-white/70 dark:bg-[#111111]/70 backdrop-blur-2xl border border-black/5 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-none hover:border-[#FF5C00]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative overflow-hidden h-52 bg-black/5 dark:bg-black/40">
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
                      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = `${basePath}/placeholder.svg`;
                      }}
                    />
                  )}
                </div>

                <div className="p-7">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FF5C00]">{project.category}</span>
                    {getProjectIcon(project.iconType)}
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-3 group-hover:text-[#FF5C00] transition-colors duration-300 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-[#64748B] dark:text-white/60 mb-5 leading-relaxed text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-[#FF5C00]/10 text-[#FF5C00] dark:text-[#FF8C1A] border border-[#FF5C00]/20 rounded-xl text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              {project.buttonText && (
                <div className="px-7 pb-7">
                  <Button
                    onClick={() => window.open(project.link, '_blank')}
                    className="w-full bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A] hover:from-[#FF7A1A] hover:to-[#FFA033] text-white text-sm py-3 px-5 rounded-2xl transition-all duration-300 font-semibold shadow-md shadow-[#FF5C00]/20 transform hover:-translate-y-0.5 border-0"
                  >
                    {project.buttonText}
                  </Button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
