"use client"

import { motion } from "framer-motion"
import { Brain, Layers, PhoneCall, BarChart3, ShieldCheck, Cpu } from "lucide-react"

const skills = [
  {
    category: "Financial Operations & AR Lifecycle",
    icon: ShieldCheck,
    skills: [
      "Accounts Receivable (AR) Lifecycle Tracking",
      "Invoice Verification & Dispute Mitigation",
      "Account Reconciliation & Aging Analysis",
      "Client Documentation & KYC Verification",
      "Banking Compliance & Institutional Standards",
      "Cash Flow Acceleration Strategies"
    ],
    color: "from-[#FF5C00] to-[#FF8C1A]",
  },
  {
    category: "Voice & Client Communication",
    icon: PhoneCall,
    skills: [
      "International Voice Process Standards",
      "US Client & Payer Representation",
      "Active Listening & Dispute Resolution",
      "Empathetic & Persuasive Communication",
      "High-Volume Call & Inquiry Triage",
      "Multi-Stakeholder Account Counseling"
    ],
    color: "from-blue-500 to-indigo-600",
  },
  {
    category: "Workflow Automation & AI",
    icon: Brain,
    skills: [
      "Intelligent Process Automation (IPA)",
      "Automated Communication & Ticket Routing",
      "Model Context Protocol & FastMCP Middleware",
      "Document OCR Extraction & Validation",
      "Local Machine Learning & Edge Inferences",
      "Predictive Workflow Optimization"
    ],
    color: "from-purple-500 to-violet-600",
  },
  {
    category: "Data Analytics & Reporting",
    icon: BarChart3,
    skills: [
      "Python Data Modeling & Analytics",
      "Advanced Spreadsheets & Excel Modeling",
      "SQL & PostgreSQL Relational Databases",
      "Key Metric Dashboards & DSO Reduction",
      "Operational Turnaround Time Tracking",
      "Statistical Analysis & Data Integrity"
    ],
    color: "from-emerald-500 to-teal-600",
  },
  {
    category: "Enterprise Systems & Software",
    icon: Layers,
    skills: [
      "Next.js and React Production Architectures",
      "Enterprise ERP Business Logic & Invoicing",
      "RESTful API Integration & Webhooks",
      "Supabase & Cloud Relational Storage",
      "Git & GitHub Actions CI/CD Workflows",
      "Tailwind CSS Design Systems"
    ],
    color: "from-amber-500 to-yellow-600",
  },
  {
    category: "Systems Infrastructure & Edge",
    icon: Cpu,
    skills: [
      "ARM64 Linux & Mobile Environment Tuning",
      "Tesseract Optical Character Recognition",
      "Offline Edge Tooling & Data Privacy",
      "Containerization & Service Orchestration",
      "3D Spatial Visualization in Blender",
      "Process Architecture Diagrams"
    ],
    color: "from-red-500 to-rose-600",
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
