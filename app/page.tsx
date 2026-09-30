"use client"

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
import PrintableCV from "@/components/printable-cv"

export default function Home() {
  return (
    <div className="relative bg-white dark:bg-[#0A0A0A] text-slate-900 dark:text-white overflow-x-hidden print:overflow-visible selection:bg-[#FF5C00]/20 selection:text-[#FF5C00]">
      {/* Dedicated Print Target: Pre-rendered offscreen to eliminate render delay or flash */}
      <PrintableCV id="print-cv-container" />

      {/* Main Website Structure: Clean, minimal, flat white */}
      <div className="no-print">
        <Navbar />

        <main className="relative z-10 bg-white dark:bg-[#0A0A0A]">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Newsletters />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  )
}
