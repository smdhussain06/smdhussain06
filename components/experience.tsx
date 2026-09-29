"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Building, ShieldCheck } from "lucide-react"

const experiences = [
  {
    title: "Founder and Lead Systems Architect",
    company: "A Generative Slice",
    type: "Enterprise Automation and AI Systems",
    duration: "July 2024 — Present",
    location: "Chennai, Tamil Nadu, India · Hybrid and Global",
    description:
      "Founded and leading an enterprise automation and AI systems venture. Architected and deployed eleven client enterprise solutions across commercial logistics, manufacturing ERP, and overseas client workflows. Engineered SliceInbox automated communication triage for European luxury brand Litelab Milano, automated OCR invoice generation pipelines, and multi-warehouse reconciliation systems. Directing end-to-end client engagement and cross-functional team productivity.",
    skills: ["Enterprise Automation", "Workflow Triage", "OCR Invoice Generation", "FastMCP Architecture", "Client Relations", "Team Direction"],
  },
  {
    title: "Financial Operations and Client Relations Specialist",
    company: "State Bank of India",
    type: "Institutional Banking Operations",
    duration: "July 2022 — January 2023",
    location: "Koyambedu, Chennai, Tamil Nadu, India",
    description:
      "Financial operations role at State Bank of India Koyambedu branch managing customer accounts, financial documentation, KYC compliance, and credit verification. Handled high-volume customer inquiries, billing explanations, and financial dispute mitigation adhering to strict institutional regulatory standards. Developed high-level voice communication resilience, active listening, client counseling, and objection resolution.",
    skills: ["Financial Documentation", "Account Verification", "Customer Dispute Mitigation", "Voice Communication", "Banking Compliance", "Client Retention"],
  },
  {
    title: "Auto Loan Insurance Verification Specialist",
    company: "Zealous Services",
    type: "US Night Shift Voice Process",
    duration: "January 2022 — April 2022 · 3 Months",
    location: "Ambattur Industrial Estate, Chennai, Tamil Nadu, India",
    description:
      "Conducted US night-shift voice operations verifying auto insurance policies, coverage limits, and lienholder status with US insurance carriers. Reviewed policy declarations to confirm active comprehensive and collision coverage, mitigating lender risk before auto loan disbursement. Maintained ninety-nine percent verification accuracy complying with US financial services regulatory guidelines.",
    skills: ["Auto Insurance Verification", "US Night Shift Operations", "Carrier Communication", "Policy Validation", "Risk Mitigation", "International Voice"],
  },
  {
    title: "Telecalling and Loan Recovery Specialist",
    company: "LeadPro Business Services",
    type: "Kotak Mahindra Bank Loan Portfolio",
    duration: "June 2021 — December 2021 · 6 Months",
    location: "Maduravoyal, Chennai, Tamil Nadu, India",
    description:
      "Managed outbound and inbound telecalling across Hindi and Tamil customer segments for Kotak Mahindra Bank auto loan recovery. Negotiated structured repayment schedules and resolved customer account billing grievances with high persuasion, active listening, and empathy. Consistently exceeded monthly recovery and collection targets while strictly observing banking ethical recovery standards.",
    skills: ["Debt Recovery", "Telecalling in Hindi and Tamil", "Customer Negotiation", "Account Rehabilitation", "Dispute Resolution", "Target Achievement"],
  },
  {
    title: "Creative Director and Technical Designer",
    company: "A Graphic Slice",
    type: "Independent Studio",
    duration: "January 2020 — 2024",
    location: "Chennai, Tamil Nadu, India · Hybrid",
    description:
      "Founded A Graphic Slice delivering high-impact brand identities, commercial presentation systems, 3D visualizations in Blender, and UI/UX architectures for high-growth enterprises and tech ventures. Established procedural design frameworks that bridged directly into automated 3D spatial computing pipelines.",
    skills: ["Blender 3D", "Procedural Modeling", "Adobe Creative Suite", "Visual Reporting", "Brand Architecture", "UI/UX Design"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-white dark:bg-[#0A0A0A] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] dark:text-white tracking-tight mb-4">
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
