"use client"

import React, { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Printer, Download, Sparkles, CheckCircle2 } from "lucide-react"
import PrintableCV from "./printable-cv"

interface CVModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  const handlePrint = () => {
    // Triggers native browser print dialog (on Android opens print spooler with "Save as PDF")
    window.print()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 no-print overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 w-full max-w-4xl bg-slate-900 border border-white/10 rounded-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden"
          >
            {/* Header Toolbar */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#FF5C00]/10 border border-[#FF5C00]/30 flex items-center justify-center text-[#FF5C00]">
                  <Printer className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm sm:text-base flex items-center gap-2">
                    Executive Curriculum Vitae
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      1-Page A4
                    </span>
                  </h3>
                  <p className="text-slate-400 text-xs hidden sm:block">
                    Optimized for single-page export and Android mobile Save as PDF
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A] text-white text-xs sm:text-sm font-semibold shadow-lg shadow-[#FF5C00]/25 hover:shadow-[#FF5C00]/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Save as PDF (Print)</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  aria-label="Close CV Modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Mobile Android Tip Banner */}
            <div className="px-5 py-2 bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-transparent border-b border-orange-500/15 text-[11px] text-orange-300 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5C00] shrink-0" />
              <span>
                <strong>Mobile & Android Tip:</strong> Tap <em>Save as PDF (Print)</em> to launch your device print screen, then select <strong>"Save as PDF"</strong> in the top dropdown.
              </span>
            </div>

            {/* CV Document Preview Viewport */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-8 bg-slate-950/60 flex justify-center">
              <div className="w-full max-w-[210mm] shadow-2xl rounded-2xl overflow-hidden border border-slate-800">
                <PrintableCV id="modal-preview-cv" className="shadow-sm" />
              </div>
            </div>

            {/* Modal Bottom Bar */}
            <div className="px-5 py-3 border-t border-white/10 bg-slate-950/80 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Anna University graduate & A Generative Slice founder profile</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="text-slate-400 hover:text-white transition-colors text-xs"
                >
                  Dismiss
                </button>
                <button
                  onClick={handlePrint}
                  className="px-4 py-1.5 rounded-lg bg-[#FF5C00] text-white font-medium hover:bg-[#FF7A1A] transition-colors flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Document</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
