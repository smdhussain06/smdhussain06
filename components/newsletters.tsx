"use client"

import { motion } from "framer-motion"
import { ExternalLink, Calendar, Clock } from "lucide-react"

const newsletters = [
  {
    title: "Humanity's Final Invention: The Rise of Artificial General Intelligence",
    description: "Exploring the profound implications of AGI development and what it means for the future of humanity. A deep architectural dive into the technological singularity and our collective path forward.",
    image: `${process.env.NODE_ENV === 'production' ? '/smdhussain06' : ''}/humanity's final invention .jpeg`,
    publishDate: "2024",
    readTime: "5 min read",
    url: "https://www.linkedin.com/pulse/humanitys-final-invention-rise-artificial-mohammad-hussain-dv4pc",
    tags: ["Artificial Intelligence", "AGI", "Future Architecture", "Machine Learning"],
  },
  {
    title: "The Amazing Secret: How AI Stole Our Brain's Blueprint - What It Means",
    description: "Uncovering how artificial intelligence systems are modeled after human neural networks and what this means for the next frontier of deep machine learning and cognitive computing.",
    image: `${process.env.NODE_ENV === 'production' ? '/smdhussain06' : ''}/THEAMAZING SECRET.jpeg`,
    publishDate: "2024",
    readTime: "4 min read", 
    url: "https://www.linkedin.com/pulse/amazing-secret-how-ai-stole-brains-blueprint-what-means-hussain-zuhhc",
    tags: ["Neural Networks", "Cognitive Systems", "Biological AI", "Deep Learning"],
  },
]

export default function Newsletters() {
  return (
    <section id="newsletters" className="relative py-24 sm:py-32 bg-[#FAFAFA] dark:bg-[#0A0A0A] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#FF5C00]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Published Insights & Articles
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A] mx-auto rounded-full mb-6" />
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Deep architectural insights and strategic thought leadership on frontier AI, cognitive systems, and the future of intelligent machines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {newsletters.map((newsletter, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group rounded-3xl overflow-hidden bg-white/70 dark:bg-[#111111]/70 backdrop-blur-2xl border border-black/5 dark:border-white/10 shadow-lg hover:shadow-2xl hover:border-[#FF5C00]/30 transition-all duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[16/9] w-full">
                <img
                  src={newsletter.image}
                  alt={newsletter.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-[#FF5C00]" />
                      <span>{newsletter.publishDate}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#FF5C00]" />
                      <span>{newsletter.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#FF5C00] transition-colors duration-300 line-clamp-2">
                    {newsletter.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm sm:text-base leading-relaxed line-clamp-3">
                    {newsletter.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {newsletter.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-xl text-xs font-semibold border border-orange-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={newsletter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A] text-white font-medium py-3.5 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#FF5C00]/20 hover:shadow-xl hover:shadow-[#FF5C00]/30 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Read Article on LinkedIn</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a
            href="https://www.linkedin.com/in/smdhussain06"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-sm sm:text-base text-slate-900 dark:text-white bg-white/80 dark:bg-[#151515]/80 backdrop-blur-xl border border-black/10 dark:border-white/10 hover:border-[#FF5C00] hover:text-[#FF5C00] shadow-md transition-all duration-300"
          >
            <span>Follow LinkedIn Publications</span>
            <ExternalLink className="w-4 h-4 text-[#FF5C00]" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
