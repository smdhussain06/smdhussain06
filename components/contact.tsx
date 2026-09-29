"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Instagram, Github, Linkedin, Send, Sparkles } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Open user's email client directly with prefilled message
    const subject = encodeURIComponent(`Enterprise Inquiry from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.location.href = `mailto:s.m.d.hussainjoe@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Initiate Collaboration
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A] mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Ready to deploy enterprise AI architectures, build autonomous agent systems, or engineer bespoke spatial software? Let's discuss your roadmap.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6 flex flex-col justify-between"
          >
            <div className="rounded-3xl p-8 bg-white/70 dark:bg-[#111111]/70 backdrop-blur-2xl border border-black/5 dark:border-white/10 shadow-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 text-xs font-semibold mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Direct Executive Access</span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Let's Build the Future
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base mb-8">
                Whether deploying autonomous AI systems, designing custom MCP toolkits, or engineering high-performance spatial models, I collaborate with founders, enterprises, and innovators worldwide.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5">
                  <div className="p-3 bg-gradient-to-br from-[#FF5C00] to-[#FF8C1A] text-white rounded-xl shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">Location</p>
                    <p className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5">
                  <div className="p-3 bg-gradient-to-br from-[#FF5C00] to-[#FF8C1A] text-white rounded-xl shadow-md">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">Direct Email</p>
                    <a
                      href="mailto:s.m.d.hussainjoe@gmail.com"
                      className="font-semibold text-slate-900 dark:text-white hover:text-[#FF5C00] transition-colors text-sm sm:text-base break-all"
                    >
                      s.m.d.hussainjoe@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="rounded-3xl p-6 bg-white/70 dark:bg-[#111111]/70 backdrop-blur-2xl border border-black/5 dark:border-white/10 shadow-lg">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
                Executive Channels
              </h4>
              <div className="flex space-x-3">
                <a
                  href="https://linkedin.com/in/smdhussain06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-2xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/5 dark:border-white/10 hover:border-[#FF5C00]/50 hover:bg-[#FF5C00]/10 text-slate-800 dark:text-white flex items-center justify-center gap-2 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-[#FF5C00]" />
                  <span className="text-xs font-semibold">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/smdhussain06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-2xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/5 dark:border-white/10 hover:border-[#FF5C00]/50 hover:bg-[#FF5C00]/10 text-slate-800 dark:text-white flex items-center justify-center gap-2 transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4 text-[#FF5C00]" />
                  <span className="text-xs font-semibold">GitHub</span>
                </a>
                <a
                  href="https://instagram.com/smdhussain06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-2xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/5 dark:border-white/10 hover:border-[#FF5C00]/50 hover:bg-[#FF5C00]/10 text-slate-800 dark:text-white flex items-center justify-center gap-2 transition-all duration-300"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4 text-[#FF5C00]" />
                  <span className="text-xs font-semibold">Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl p-8 sm:p-10 bg-white/70 dark:bg-[#111111]/70 backdrop-blur-2xl border border-black/5 dark:border-white/10 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Send an Executive Message
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-8">
                Fill in your details below and your email client will launch with a prefilled message directly to my inbox.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Elena Rostova"
                      className="w-full px-4 py-3.5 rounded-2xl border border-black/10 dark:border-white/10 focus:border-[#FF5C00] focus:ring-2 focus:ring-[#FF5C00]/20 outline-none bg-white dark:bg-[#070707] text-slate-900 dark:text-white text-sm transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. elena@enterprise.com"
                      className="w-full px-4 py-3.5 rounded-2xl border border-black/10 dark:border-white/10 focus:border-[#FF5C00] focus:ring-2 focus:ring-[#FF5C00]/20 outline-none bg-white dark:bg-[#070707] text-slate-900 dark:text-white text-sm transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                    Project Scope & Objectives
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your requirements, system architecture, timelines, or collaboration ideas..."
                    className="w-full px-4 py-3.5 rounded-2xl border border-black/10 dark:border-white/10 focus:border-[#FF5C00] focus:ring-2 focus:ring-[#FF5C00]/20 outline-none bg-white dark:bg-[#070707] text-slate-900 dark:text-white text-sm resize-none transition-all duration-200"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A] text-white py-4 px-8 rounded-2xl font-semibold shadow-lg shadow-[#FF5C00]/25 hover:shadow-xl hover:shadow-[#FF5C00]/35 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>

                {submitted && (
                  <p className="text-center text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    Redirecting to your mail client with prefilled draft...
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
