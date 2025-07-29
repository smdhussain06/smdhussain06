"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Building } from "lucide-react"

const experiences = [
  {
    title: "Founder",
    company: "A Generative Slice",
    type: "Self-employed",
    duration: "Jul 2025 - Present",
    location: "Chennai, Tamil Nadu, India · Remote",
    description:
      "A Generative Slice provides a Software as a Service (SaaS) platform for startups, using Artificial Intelligence (AI) to address business challenges and drive growth. The platform offers smart, scalable AI solutions to optimize operations, enhance decision-making, and gain a competitive edge.",
    skills: ["Business Ownership", "Start-up Leadership", "AI Solutions", "SaaS Development"],
  },
  {
    title: "Freelance Graphic Designer",
    company: "A Graphic Slice",
    type: "Freelance",
    duration: "Jan 2020 - Present",
    location: "Chennai, Tamil Nadu, India · Hybrid",
    description:
      'Created A Graphic Slice, a graphic design company helping individual and wholesale clients. Gained extensive knowledge working as a freelancer, never saying "I don\'t know" to anything but always learning and providing solutions by deadlines.',
    skills: ["Blender", "UI/UX Design", "Adobe Creative Suite", "Client Management", "Creative Problem Solving"],
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
    <section id="experience" className="py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
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
