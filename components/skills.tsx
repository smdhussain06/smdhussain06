"use client"

import { motion } from "framer-motion"
import { Brain, Palette, Video, Code, Megaphone, Lightbulb } from "lucide-react"

const skills = [
  {
    category: "AI & Data Science",
    icon: Brain,
    skills: ["Artificial Intelligence", "Data Science", "Machine Learning", "Python", "LLMs", "Prompt Engineering"],
    color: "from-blue-500 to-purple-600",
  },
  {
    category: "Design & Creative",
    icon: Palette,
    skills: ["Adobe Photoshop", "Illustrator", "After Effects", "Lightroom", "Figma", "Blender 3D"],
    color: "from-orange-500 to-red-600",
  },
  {
    category: "Video & Motion",
    icon: Video,
    skills: ["Premiere Pro", "After Effects", "3D Animation", "Motion Graphics", "Video Editing"],
    color: "from-green-500 to-teal-600",
  },
  {
    category: "Development",
    icon: Code,
    skills: ["Web Design", "UI/UX Design", "Responsive Design", "Branding", "Typography"],
    color: "from-purple-500 to-pink-600",
  },
  {
    category: "Content & Marketing",
    icon: Megaphone,
    skills: ["Content Creation", "Social Media Marketing", "Digital Marketing", "Storytelling"],
    color: "from-yellow-500 to-orange-600",
  },
  {
    category: "Soft Skills",
    icon: Lightbulb,
    skills: ["Communication", "Show Hosting", "Strategic Thinking", "Leadership", "Problem Solving"],
    color: "from-indigo-500 to-blue-600",
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
