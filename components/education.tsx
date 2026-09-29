"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, Award, Users } from "lucide-react"

const education = [
  {
    institution: "Aalim Muhammed Salegh College of Engineering",
    degree: "Bachelor of Technology in Artificial Intelligence and Data Science",
    field: "Artificial Intelligence and Data Science",
    duration: "2021 — 2025",
    grade: "Graduated with First Class Distinction",
    skills: [
      "Artificial Intelligence",
      "Multi-Agent Systems",
      "Data Science and Analytics",
      "Machine Learning and Deep Learning",
      "Python and Neural Architectures",
      "Edge AI and Edge Computing",
      "Natural Language Processing",
    ],
    description:
      "Successfully completed full four-year engineering degree in Artificial Intelligence and Data Science. Mastered machine learning, deep learning, statistical modeling, distributed multi-agent systems, and production edge computing. Concluded with the Semester 8 Capstone Project engineering production-ready autonomous intelligence systems.",
  },
  {
    institution: "Fathima Central Senior Secondary School",
    degree: "Senior Secondary School",
    field: "Bio Mathematics",
    duration: "January 2018 — December 2020",
    grade: "Grade A",
    activities: ["Science Fair Project 2019 Delhi", "125th Anniversary Year Hosting"],
    skills: ["Internet of Things", "Public Communication", "Show Hosting"],
    description:
      "Formative journey to develop public speaking confidence and communication skills. Actively participated in state-level science symposiums and school hosting activities.",
  },
  {
    institution: "Al Hira Model School",
    degree: "Secondary School Education",
    field: "General Sciences and Mathematics",
    duration: "May 2009 — December 2018",
    grade: "Grade B",
    activities: ["Science Fair Project Shastha College", "Interschool Competition", "Football"],
    skills: ["Creative Problem Solving", "Analytical Thinking", "Discipline"],
    description:
      "Built fundamental discipline, basic etiquette, and strong CBSE education foundation that seeded early interest in science, mathematics, and computing.",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 bg-[#FAFAFA] dark:bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] dark:text-white tracking-tight mb-4">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A]">Milestones</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A] mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FF5C00] via-[#FF8C1A] to-transparent hidden md:block opacity-40" />

          <div className="space-y-10">
            {education.map((edu, index) => (
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
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-2">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <GraduationCap className="w-5 h-5 text-[#FF5C00] mr-2 shrink-0" />
                        <h3 className="text-xl font-bold text-[#0F172A] dark:text-white">{edu.institution}</h3>
                      </div>
                      <p className="text-lg font-semibold text-[#0F172A]/90 dark:text-white/90 mb-1">{edu.degree}</p>
                      <p className="text-[#FF5C00] dark:text-[#FF8C1A] font-medium text-sm mb-2">{edu.field}</p>
                    </div>

                    <div className="lg:text-right text-sm text-[#64748B] dark:text-white/60 lg:ml-4 shrink-0">
                      <div className="flex items-center lg:justify-end mb-1">
                        <Calendar className="w-4 h-4 mr-2 text-[#FF5C00]" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center lg:justify-end font-semibold text-[#0F172A] dark:text-white">
                        <Award className="w-4 h-4 mr-2 text-[#FF5C00]" />
                        {edu.grade}
                      </div>
                    </div>
                  </div>

                  <p className="text-[#64748B] dark:text-white/60 mb-6 leading-relaxed text-base">{edu.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, skillIndex) => (
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
