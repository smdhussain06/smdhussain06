"use client"

import { motion } from "framer-motion"
import { ExternalLink, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const newsletters = [
  {
    title: "Humanity's Final Invention: The Rise of Artificial General Intelligence",
    description: "Exploring the profound implications of AGI development and what it means for the future of humanity. A deep dive into the technological singularity and our path forward.",
    image: `${process.env.NODE_ENV === 'production' ? '/smdhussain06' : ''}/humanity's final invention .jpeg`,
    publishDate: "2024",
    readTime: "5 min read",
    url: "https://www.linkedin.com/pulse/humanitys-final-invention-rise-artificial-mohammad-hussain-dv4pc",
    tags: ["AI", "AGI", "Technology", "Future"],
  },
  {
    title: "The Amazing Secret: How AI Stole Our Brain's Blueprint - What It Means",
    description: "Uncovering how artificial intelligence systems are modeled after human neural networks and what this means for the future of machine learning and cognitive computing.",
    image: `${process.env.NODE_ENV === 'production' ? '/smdhussain06' : ''}/THEAMAZING SECRET.jpeg`,
    publishDate: "2024",
    readTime: "4 min read", 
    url: "https://www.linkedin.com/pulse/amazing-secret-how-ai-stole-brains-blueprint-what-means-hussain-zuhhc",
    tags: ["Neural Networks", "AI", "Brain Science", "Machine Learning"],
  },
]

export default function Newsletters() {
  return (
    <section id="newsletters" className="py-16 sm:py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6">
            LinkedIn Newsletters
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mb-6 sm:mb-8" />
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Insights and thoughts on AI, technology, and the future - shared through my LinkedIn newsletter series.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {newsletters.map((newsletter, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800"
            >
              <div className="relative overflow-hidden">
                <img
                  src={newsletter.image}
                  alt={newsletter.title}
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{newsletter.publishDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{newsletter.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
                  {newsletter.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed line-clamp-3">
                  {newsletter.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {newsletter.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  onClick={() => window.open(newsletter.url, '_blank')}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-orange-500/25"
                >
                  Read on LinkedIn
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            onClick={() => window.open('https://www.linkedin.com/in/smdhussain06', '_blank')}
            variant="outline"
            className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 px-8 py-3 rounded-xl font-semibold"
          >
            Follow on LinkedIn for More
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
