"use client"

import { motion } from "framer-motion"
import { Brain, Palette, Video, Code, Megaphone, Cpu, Layers, Sparkles } from "lucide-react"

const skills = [
  {
    category: "Autonomous AI & Agents",
    icon: Brain,
    skills: ["Multi-Agent Orchestration", "FastMCP Architecture", "Local LLMs (Ollama)", "Prompt Engineering & RAG", "Gemini 2.0 / OpenAI APIs", "Autonomous Tool Calling"],
    color: "from-orange-500 to-amber-600",
  },
  {
    category: "Enterprise Systems & SaaS",
    icon: Layers,
    skills: ["Next.js 14/15 & React", "TypeScript & Python", "Tailwind CSS", "Enterprise ERP Logic", "RESTful & GraphQL APIs", "PostgreSQL & Supabase"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    category: "Edge AI & Optimization",
    icon: Cpu,
    skills: ["Android PRoot & Termux CLI", "On-Device Local Inference", "Tesseract OCR Integration", "ARM64 Architecture Tuning", "Lightweight Agent Runtimes"],
    color: "from-purple-500 to-violet-600",
  },
  {
    category: "3D & Spatial Computing",
    icon: Palette,
    skills: ["Headless Blender Automation", "Procedural 3D Modeling", "GLTF/GLB Web Pipelines", "Interactive Spline 3D", "Spatial UI Architecture"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    category: "Creative Direction & Motion",
    icon: Video,
    skills: ["Adobe Premiere Pro", "After Effects Motion Design", "Photoshop & Illustrator", "Visual Storytelling", "Design Systems"],
    color: "from-red-500 to-rose-600",
  },
  {
    category: "Venture & Team Leadership",
    icon: Megaphone,
    skills: ["Venture Studio Leadership", "Cross-Functional Team Direction", "Enterprise Client Strategy", "Product Roadmapping", "Agile AI Delivery"],
    color: "from-amber-500 to-yellow-600",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6">Skills & Expertise</h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-black rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${skillGroup.color} mr-4`}>
                  <skillGroup.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white">{skillGroup.category}</h3>
              </div>

              <div className="space-y-2">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                    <span className="text-gray-600 dark:text-gray-300 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
