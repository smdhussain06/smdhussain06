"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Building } from "lucide-react"

const experiences = [
  {
    title: "Founder & Lead AI Systems Architect",
    company: "A Generative Slice (AGS)",
    type: "Venture Studio & AI Engineering Lab",
    duration: "Jul 2024 - Present",
    location: "Chennai, Tamil Nadu, India · Hybrid / Global",
    description:
      "Founded and leading an elite AI venture studio and engineering lab. Architected and deployed 11+ client enterprise systems across logistics, F&B, civil engineering, and e-commerce alongside 6+ proprietary AI products (SliceInbox FastMCP Chief of Staff, SliceLeads automated acquisition engine, SliceDAM document generator, and Slice3D headless spatial computing lab). Directing an expanding multi-disciplinary engineering and design team.",
    skills: ["Venture Leadership", "Autonomous Multi-Agent Systems", "FastMCP Architecture", "Enterprise ERP & AI Workflows", "Edge AI & LLM Deployment", "Team Direction"],
  },
  {
    title: "Creative Director & Technical Designer",
    company: "A Graphic Slice",
    type: "Independent Studio",
    duration: "Jan 2020 - Present",
    location: "Chennai, Tamil Nadu, India · Hybrid",
    description:
      "Founded A Graphic Slice delivering high-impact brand identities, 3D product visualizations (Blender), UI/UX systems, and cinematic motion graphics for high-growth startups and global brands. Pioneered procedural design workflows that now bridge directly into automated 3D spatial pipelines.",
    skills: ["Blender 3D", "Procedural Modeling", "Adobe Creative Suite", "Motion Graphics", "Brand Architecture", "UI/UX Design"],
  },
  {
    title: "Content Creator",
    company: "MT CLOTHING LIMITED",
    type: "Full-time",
    duration: "Sep 2022 - Jan 2023",
    location: "Chennai, Tamil Nadu, India · Remote",
    description:
      "Helped a startup company with low staff and investment increase their growth through social media to gain potential customers. Worked hard with dedication to develop technical skills in video editing and social media management.",
    skills: ["After Effects", "Adobe Premiere Pro", "Social Media Management", "Content Strategy"],
  },
  {
    title: "Graphic Designer",
    company: "Design Decorative",
    type: "Full-time",
    duration: "Jan 2021 - Aug 2021",
    location: "Chennai, Tamil Nadu, India · On-site",
    description:
      "First professional role switching to my field of interest. Provided decent salary with creative freedom. Seniors helped me learn new software and develop skills in a peaceful work environment.",
    skills: ["Adobe Photoshop", "CorelDRAW", "Typography", "Print Design", "Creative Design"],
  },
  {
    title: "Sales Employee",
    company: "State Bank of India",
    type: "Full-time",
    duration: "Jul 2020 - Jan 2021",
    location: "Chennai, Tamil Nadu, India · On-site",
    description:
      "Worked in credit card sales for six months at State Bank of India main branch. Gained broad knowledge and strategies about sales, developing extroverted communication skills and confidence to communicate with strangers.",
    skills: ["Communication", "Sales", "Customer Service", "Strategic Thinking"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-6">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-orange-600 hidden md:block" />

          <div className="space-y-12">
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
                <div className="absolute left-6 w-4 h-4 bg-orange-500 rounded-full border-4 border-white dark:border-black hidden md:block" />

                <div className="md:ml-20 bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-800">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-black dark:text-white mb-1">{exp.title}</h3>
                      <div className="flex items-center text-orange-500 dark:text-orange-400 font-semibold mb-2">
                        <Building className="w-4 h-4 mr-2" />
                        {exp.company} · {exp.type}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium"
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
