"use client"

import { motion } from "framer-motion"
import { Brain, Palette, Video, Code, Megaphone, Cpu, Layers, Sparkles } from "lucide-react"

const skills = [
  {
    category: "Autonomous AI and Agents",
    icon: Brain,
    skills: ["Multi-Agent Orchestration", "FastMCP Protocol Architecture", "Local Offline Language Models", "Prompt Engineering and Retrieval Systems", "Gemini and OpenAI Model Pipelines", "Autonomous Tool Calling"],
    color: "from-[#FF5C00] to-[#FF8C1A]",
  },
  {
    category: "Enterprise Systems and SaaS",
    icon: Layers,
    skills: ["Next.js and React Architecture", "TypeScript and Python", "Tailwind CSS", "Enterprise ERP Business Logic", "RESTful and GraphQL Services", "PostgreSQL and Supabase"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    category: "Edge AI and Systems",
    icon: Cpu,
    skills: ["Android Termux and Linux Tooling", "On-Device Local Inference", "Optical Character Recognition", "ARM64 Architecture Optimization", "Lightweight Agent Runtimes"],
    color: "from-purple-500 to-violet-600",
  },
  {
    category: "3D Spatial Computing",
    icon: Palette,
    skills: ["Headless Blender Automation", "Procedural 3D Modeling", "GLTF and GLB Web Pipelines", "Interactive Spline 3D", "Spatial UI Architecture"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    category: "Creative Direction and Motion",
    icon: Video,
    skills: ["Adobe Premiere Pro", "After Effects Motion Design", "Photoshop and Illustrator", "Cinematic Storytelling", "Design Systems"],
    color: "from-red-500 to-rose-600",
  },
  {
    category: "Venture and Team Leadership",
    icon: Megaphone,
    skills: ["Venture Studio Leadership", "Cross-Functional Team Direction", "Enterprise Client Strategy", "Product Roadmapping", "Agile AI Delivery"],
    color: "from-amber-500 to-yellow-600",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-white dark:bg-[#0A0A0A] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] dark:text-white tracking-tight mb-4">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A]">Capabilities</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl p-8 bg-white/70 dark:bg-[#111111]/70 backdrop-blur-2xl border border-black/5 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-none hover:border-[#FF5C00]/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${skillGroup.color} flex items-center justify-center mr-4 text-white shadow-lg shrink-0`}>
                  <skillGroup.icon className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] dark:text-white leading-tight">{skillGroup.category}</h3>
              </div>

              <div className="space-y-3">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 + skillIndex * 0.03 }}
                    viewport={{ once: true }}
                    className="flex items-center text-sm font-medium text-[#64748B] dark:text-white/70"
                  >
                    <div className="w-2 h-2 bg-[#FF5C00] rounded-full mr-3 shrink-0" />
                    <span>{skill}</span>
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
