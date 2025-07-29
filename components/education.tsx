"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, Award, Users } from "lucide-react"

const education = [
  {
    institution: "Aalim Muhammed Salegh College of Engineering",
    degree: "Bachelor in Artificial Intelligence and Data Science",
    field: "Artificial Intelligence",
    duration: "Feb 2023 - Feb 2027",
    grade: "In Progress",
    skills: [
      "Artificial Intelligence (AI)",
      "Data Science",
      "Python (Programming Language)",
      "Machine Learning",
      "Data Analytics",
    ],
    description:
      "Currently pursuing advanced studies in AI and Data Science, focusing on machine learning algorithms, data analytics, and practical applications of artificial intelligence in real-world scenarios.",
  },
  {
    institution: "Fathima Central Senior Secondary School",
    degree: "Senior Secondary School",
    field: "Bio Mathematics",
    duration: "Jan 2018 - Dec 2020",
    grade: "A",
    activities: ["Science Fair Project 2019 Delhi", "125th Anniversary Year Hosting"],
    skills: ["Internet of Things (IoT)", "Communication", "Show Hosting"],
    description:
      "Important journey to gain confidence in communication. Despite having communication skills, I initially avoided speaking with people, but the supportive staff and friends encouraged me to participate in events and hosting activities.",
  },
  {
    institution: "Al Hira Model School",
    degree: "Middle School, Secondary Education",
    field: "Secondary Education",
    duration: "May 2009 - Dec 2018",
    grade: "B",
    activities: ["Science Fair Project Shastha College", "Interschool Competition", "Soccer"],
    skills: ["English", "Hindi", "Creative Problem Solving"],
    description:
      "My favorite school that built me from scratch. They provided essential survival skills at a young age, giving confidence for real life. Built discipline, taught basic manners, and provided excellent CBSE education foundation.",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-6">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-orange-600 hidden md:block" />

          <div className="space-y-12">
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
                <div className="absolute left-6 w-4 h-4 bg-orange-500 rounded-full border-4 border-white dark:border-gray-50 hidden md:block" />

                <div className="md:ml-20 bg-white dark:bg-black rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-800">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <GraduationCap className="w-5 h-5 text-orange-500 mr-2" />
                        <h3 className="text-xl font-bold text-black dark:text-white">{edu.institution}</h3>
                      </div>
                      <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">{edu.degree}</p>
                      <p className="text-orange-500 dark:text-orange-400 font-medium mb-2">{edu.field}</p>
                    </div>

                    <div className="lg:text-right text-sm text-gray-500 dark:text-gray-400 lg:ml-4">
                      <div className="flex items-center lg:justify-end mb-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center lg:justify-end">
                        <Award className="w-4 h-4 mr-2" />
                        Grade: {edu.grade}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{edu.description}</p>

                  {edu.activities && (
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <Users className="w-4 h-4 text-orange-500 mr-2" />
                        <span className="font-semibold text-gray-700 dark:text-gray-300">Activities & Societies:</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {edu.activities.map((activity, actIndex) => (
                          <span
                            key={actIndex}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, skillIndex) => (
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
