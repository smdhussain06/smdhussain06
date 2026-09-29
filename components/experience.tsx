"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Building } from "lucide-react"

const experiences = [
  {
    title: "Founder and Lead AI Systems Architect",
    company: "A Generative Slice",
    type: "AI Venture Studio and Engineering Lab",
    duration: "July 2024 — Present",
    location: "Chennai, Tamil Nadu, India · Hybrid and Global",
    description:
      "Founded and leading an elite AI venture studio and engineering lab. Architected and deployed eleven client enterprise systems across logistics, banquet hospitality, civil engineering, and e-commerce alongside six proprietary AI products including SliceInbox Chief of Staff, SliceLeads automated acquisition engine, SliceDAM document generator, and Slice3D spatial computing lab. Directing an expanding multi-disciplinary engineering and design team.",
    skills: ["Venture Leadership", "Autonomous Multi-Agent Systems", "FastMCP Architecture", "Enterprise ERP Logic", "Edge AI Systems", "Team Direction"],
  },
  {
    title: "Creative Director and Technical Designer",
    company: "A Graphic Slice",
    type: "Independent Studio",
    duration: "January 2020 — Present",
    location: "Chennai, Tamil Nadu, India · Hybrid",
    description:
      "Founded A Graphic Slice delivering high-impact brand identities, 3D product visualizations in Blender, UI/UX systems, and cinematic motion graphics for high-growth startups and global brands. Pioneered procedural design workflows that now bridge directly into automated 3D spatial computing pipelines.",
    skills: ["Blender 3D", "Procedural Modeling", "Adobe Creative Suite", "Motion Graphics", "Brand Architecture", "UI/UX Design"],
  },
  {
    title: "Content Creator and Video Strategist",
    company: "MT Clothing Limited",
    type: "Full-time",
    duration: "September 2022 — January 2023",
    location: "Chennai, Tamil Nadu, India · Remote",
    description:
      "Engineered viral social media campaigns and dynamic video workflows for an apparel startup, significantly driving brand recognition and digital audience acquisition.",
    skills: ["After Effects", "Adobe Premiere Pro", "Social Media Growth", "Content Strategy"],
  },
  {
    title: "Graphic Designer",
    company: "Design Decorative",
    type: "Full-time",
    duration: "January 2021 — August 2021",
    location: "Chennai, Tamil Nadu, India · On-site",
    description:
      "Professional design role focused on print layouts, commercial typography, packaging, and digital branding assets across industry standard creative suites.",
    skills: ["Adobe Photoshop", "CorelDRAW", "Commercial Typography", "Print Production"],
  },
  {
    title: "Sales Specialist",
    company: "State Bank of India",
    type: "Full-time",
    duration: "July 2020 — January 2021",
    location: "Chennai, Tamil Nadu, India · On-site",
    description:
      "Formative role in credit card sales at State Bank of India main branch. Developed high-level communication resilience, client psychology, persuasion, and enterprise sales fundamentals.",
    skills: ["Enterprise Sales", "Communication Mastery", "Client Relations", "Strategic Thinking"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#FAFAFA] dark:bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-[#0F172A] dark:text-white tracking-tight mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A]">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A] mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FF5C00] via-[#FF8C1A] to-transparent hidden md:block opacity-40" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-[#FF5C00] rounded-full border-4 border-white dark:border-[#0A0A0A] shadow-md shadow-[#FF5C00]/50 hidden md:block" />

                <div className="md:ml-20 rounded-3xl p-8 bg-white/70 dark:bg-[#111111]/70 backdrop-blur-2xl border border-black/5 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-none hover:border-[#FF5C00]/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-1">{exp.title}</h3>
                      <div className="flex items-center text-[#FF5C00] dark:text-[#FF8C1A] font-semibold text-sm">
                        <Building className="w-4 h-4 mr-2 shrink-0" />
                        {exp.company} · {exp.type}
                      </div>
                    </div>
                    <div className="text-sm text-[#64748B] dark:text-white/60">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-2 text-[#FF5C00]" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-[#FF5C00]" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-[#64748B] dark:text-white/60 mb-6 leading-relaxed text-base">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3.5 py-1.5 bg-[#FF5C00]/10 text-[#FF5C00] dark:text-[#FF8C1A] border border-[#FF5C00]/20 rounded-xl text-xs font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
