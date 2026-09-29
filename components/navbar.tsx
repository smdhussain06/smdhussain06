"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun, Menu, X, Printer, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  onOpenCV?: () => void
}

export default function Navbar({ onOpenCV }: NavbarProps) {
  const [isDark, setIsDark] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    if (saved === "dark") {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
    localStorage.setItem("theme", !isDark ? "dark" : "light")
  }

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Newsletters", href: "#newsletters" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        isScrolled
          ? "bg-white/80 dark:bg-[#070707]/80 backdrop-blur-xl border-b border-black/5 dark:border-white/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            className="font-black text-base sm:text-lg tracking-tight text-[#0F172A] dark:text-white flex items-center select-none"
          >
            <span>MOHAMMED HUSSAIN</span>
            <span className="text-[#FF5C00] font-black text-xl ml-0.5">.</span>
          </motion.a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -1 }}
                className="text-slate-600 dark:text-slate-300 hover:text-[#FF5C00] dark:hover:text-[#FF5C00] transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </motion.a>
            ))}

            {/* Print CV Action */}
            <button
              onClick={onOpenCV}
              className="px-3.5 py-1.5 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 text-xs font-semibold hover:bg-gradient-to-r hover:from-[#FF5C00] hover:to-[#FF8C1A] hover:text-white transition-all duration-200 flex items-center gap-1.5 shadow-sm active:scale-95"
              title="View and Print 1-Page CV"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print CV</span>
            </button>

            {/* Theme Toggle */}
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="sm"
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/10"
              aria-label="Toggle dark/light mode"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile Right Controls */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Quick CV Button on Mobile Header */}
            <button
              onClick={onOpenCV}
              className="px-2.5 py-1 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 text-xs font-semibold flex items-center gap-1 active:scale-95 transition-transform"
              aria-label="Print CV"
            >
              <Printer className="w-3 h-3" />
              <span>CV</span>
            </button>

            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="sm"
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variant="ghost"
              size="sm"
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-white/95 dark:bg-[#0c0c0c]/95 backdrop-blur-2xl border-t border-black/5 dark:border-white/10 rounded-2xl my-2 p-3 shadow-xl"
            >
              <div className="space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-orange-500/10 hover:text-[#FF5C00] transition-colors text-sm font-medium"
                  >
                    {item.name}
                  </a>
                ))}

                <div className="pt-2 mt-2 border-t border-black/5 dark:border-white/10">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      onOpenCV?.()
                    }}
                    className="w-full px-3 py-3 rounded-xl bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-md shadow-[#FF5C00]/25"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print / Save CV as PDF</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
