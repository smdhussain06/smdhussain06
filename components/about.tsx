"use client"

import { motion } from "framer-motion"
import { Sparkles, Bot, Layers, Cpu, Box } from "lucide-react"
import PersonalImageSlider from "@/components/personal-image-slider"

// Get the base path for GitHub Pages
const basePath = process.env.NODE_ENV === 'production' ? '/smdhussain06' : ''

const pillars = [
  {
    icon: Bot,
    title: "Autonomous Agents & FastMCP",
    desc: "Architecting multi-agent workspaces, MCP protocols, and automated client acquisition pipelines.",
  },
  {
    icon: Layers,
    title: "Enterprise AI & Scalable SaaS",
    desc: "Production deployments across ERP systems, OCR pipelines, and multi-channel conversational bots.",
  },
  {
    icon: Cpu,
    title: "Edge AI & Mobile Computation",
    desc: "Running local LLMs (Ollama) and lightweight agent runtimes directly on Android Termux and edge hardware.",
  },
  {
    icon: Box,
    title: "3D Spatial Computing & Motion",
    desc: "Headless Blender automation, procedural 3D modeling, and cinematic After Effects motion design.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6">About Me</h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-1"
          >
            <div className="relative">
              <PersonalImageSlider className="w-64 h-64 sm:w-72 sm:h-72 lg:w-full lg:h-full lg:max-w-md mx-auto lg:mx-0 lg:aspect-square" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 order-2 lg:order-2 lg:flex lg:flex-col lg:justify-center"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                Hey there! 👋 I'm <strong className="text-black dark:text-white">Mohammed Hussain</strong> — Founder & Lead AI Architect at{" "}
                <span className="text-orange-500 font-semibold">A Generative Slice (AGS)</span>, and a recent graduate with a{" "}
                <strong className="text-black dark:text-white">B.Tech in Artificial Intelligence & Data Science</strong> from Aalim Muhammed Salegh College of Engineering. 🎓🚀
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                My journey began with 4+ years of deep freelance design and visual storytelling across the Adobe Creative Suite (Premiere Pro, Photoshop, After Effects) and 3D modeling in Blender. That creative foundation evolved into something far more expansive: pioneering high-performance AI systems that don't just generate content, but actively solve complex enterprise bottlenecks.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                Today, through <strong className="text-black dark:text-white">A Generative Slice</strong>, I lead an engineering and creative team delivering 11+ client enterprise deployments (from intelligent trading ERPs to luxury architectural showcases) and 6+ proprietary AI software platforms, including executive FastMCP agents, autonomous client acquisition engines, and headless 3D spatial pipelines.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                Whether deploying privacy-first Edge AI running locally on mobile devices or architecting multi-agent collaborative workflows, my mission is to bridge technical rigor with bespoke design elegance.
              </p>

              <motion.p
                className="text-orange-500 dark:text-orange-400 font-semibold text-base sm:text-lg pt-2"
                whileHover={{ scale: 1.01 }}
              >
                Let's collaborate to engineer autonomous intelligence and extraordinary digital experiences! 🌐💡
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Strategic Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-orange-500/50 hover:shadow-lg transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-3">
                <pillar.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-black dark:text-white mb-2">{pillar.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
