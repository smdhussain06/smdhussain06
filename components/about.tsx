"use client"

import { motion } from "framer-motion"
import { Sparkles, Bot, Layers, Cpu, ShieldCheck } from "lucide-react"
import PersonalImageSlider from "@/components/personal-image-slider"

const pillars = [
  {
    icon: Bot,
    title: "Autonomous Workflow Automation",
    desc: "Architecting intelligent workflow routing, intake triage pipelines, and automated multi-channel communication bridges.",
  },
  {
    icon: Layers,
    title: "Financial Operations & Enterprise ERP",
    desc: "Hands-on experience in banking client verification at State Bank of India, paired with custom billing, OCR invoice extraction, and reconciliation systems.",
  },
  {
    icon: ShieldCheck,
    title: "Client Relations & Voice Communication",
    desc: "High-touch customer counseling, international voice standards, dispute resolution, and regulatory compliance across multi-stakeholder accounts.",
  },
  {
    icon: Cpu,
    title: "Data Analytics & Predictive Insights",
    desc: "Rigorous academic and practical foundation in AI, statistical modeling, data integrity, and operational turnaround optimization.",
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
              I am <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A]">Mohammed Hussain</span> — an Artificial Intelligence & Data Science Engineer and Founder of A Generative Slice, blending financial operations rigor with modern automated workflow systems.
            </p>

            <p className="text-[#64748B] dark:text-white/60 leading-relaxed text-base sm:text-lg">
              My professional foundation combines direct institutional banking and financial customer relations at State Bank of India with formal engineering training in machine learning, statistics, and distributed software systems at Anna University.
            </p>

            <p className="text-[#64748B] dark:text-white/60 leading-relaxed text-base sm:text-lg">
              Through A Generative Slice, I have engineered and deployed eleven enterprise software systems — ranging from OCR-driven trading ERPs that eliminate invoice reconciliation bottlenecks to automated communication triage platforms that handle international customer inquiries with zero friction.
            </p>

            <p className="text-[#64748B] dark:text-white/60 leading-relaxed text-base sm:text-lg">
              Whether optimizing accounts lifecycle workflows, resolving client queries through high-touch voice communication, or deploying intelligent tools to accelerate cash turnaround, my commitment is driving operational accuracy and measurable performance.
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
