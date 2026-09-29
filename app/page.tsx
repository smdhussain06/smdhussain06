"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Newsletters from "@/components/newsletters"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import LoadingScreen from "@/components/loading-screen"
import CVModal from "@/components/cv-modal"
import PrintableCV from "@/components/printable-cv"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [isCVOpen, setIsCVOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="relative overflow-x-hidden selection:bg-[#FF5C00]/20 selection:text-[#FF5C00]">
      {/* Dedicated Print Target: Always rendered in DOM, only visible when window.print() is called */}
      <PrintableCV id="print-cv-container" className="hidden print:block" />

      {/* Main Interactive Website Structure */}
      <div className="no-print">
        <Navbar onOpenCV={() => setIsCVOpen(true)} />

        <motion.div style={{ opacity }} className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-15" />
        </motion.div>

        <main className="relative z-10">
          <Hero onOpenCV={() => setIsCVOpen(true)} />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Newsletters />
          <Contact />
        </main>

        <Footer />

        {/* Executive CV Modal Dialog */}
        <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
      </div>
    </div>
  )
}
