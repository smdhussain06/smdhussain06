"use client"

import { motion } from "framer-motion"
import { Sparkles, Bot, Layers, Cpu, Box } from "lucide-react"
import PersonalImageSlider from "@/components/personal-image-slider"

// Get the base path for GitHub Pages
const basePath = process.env.NODE_ENV === 'production' ? '/smdhussain06' : ''

const pillars = [
  {
    icon: Bot,
    title: "Autonomous Multi-Agent Architecture",
    desc: "Architecting collaborative multi-agent workspaces, protocol bridges, and automated client acquisition pipelines.",
  },
  {
    icon: Layers,
    title: "Enterprise AI and Scalable SaaS Platforms",
    desc: "Production deployments across real-time ERP systems, OCR processing engines, and multi-channel conversational bots.",
  },
  {
    icon: Cpu,
    title: "Edge AI and Offline Intelligence",
    desc: "Running local machine learning models and lightweight agent runtimes natively on Android Termux and edge hardware.",
  },
  {
    icon: Box,
    title: "3D Spatial Computing and Motion Design",
    desc: "Headless Blender automation, procedural 3D modeling, and cinematic After Effects visual identity systems.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white dark:bg-[#0A0A0A] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] dark:text-white tracking-tight mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1"
          >
            <div className="rounded-3xl p-3 bg-white/70 dark:bg-[#111111]/70 backdrop-blur-2xl border border-black/5 dark:border-white/10 shadow-2xl shadow-black/5 dark:shadow-none">
              <PersonalImageSlider className="w-full aspect-square rounded-2xl overflow-hidden" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-5 order-2"
          >
            <p className="text-lg sm:text-xl font-medium text-[#0F172A] dark:text-white leading-relaxed">
              I am <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A]">Mohammed Hussain</span> — Founder and Lead AI Systems Architect at A Generative Slice, and a graduate with a Bachelor of Technology in Artificial Intelligence and Data Science from Aalim Muhammed Salegh College of Engineering.
            </p>

            <p className="text-[#64748B] dark:text-white/60 leading-relaxed text-base sm:text-lg">
              My journey began with four years of creative direction and visual storytelling across the Adobe Creative Suite and 3D modeling in Blender. That design foundation evolved into something far more expansive: pioneering high-performance AI systems that solve complex enterprise bottlenecks with precision.
            </p>

            <p className="text-[#64748B] dark:text-white/60 leading-relaxed text-base sm:text-lg">
              Today, through A Generative Slice, I lead an engineering and creative team delivering eleven client enterprise deployments across industrial logistics, architectural showcases, and luxury commerce, alongside six proprietary AI platforms.
            </p>

            <p className="text-[#64748B] dark:text-white/60 leading-relaxed text-base sm:text-lg">
              Whether deploying privacy-first Edge AI running locally on mobile hardware or orchestrating autonomous agent workflows, my focus remains bridging technical rigor with bespoke design elegance.
            </p>
          </motion.div>
        </div>

        {/* Strategic Capabilities in Apple-Style Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl p-7 bg-white/70 dark:bg-[#111111]/70 backdrop-blur-2xl border border-black/5 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-none hover:border-[#FF5C00]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF5C00] to-[#FF8C1A] flex items-center justify-center text-white mb-5 shadow-lg shadow-[#FF5C00]/25">
                  <pillar.icon className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] dark:text-white mb-2 leading-snug">{pillar.title}</h3>
                <p className="text-sm text-[#64748B] dark:text-white/60 leading-relaxed">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
