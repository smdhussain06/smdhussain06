"use client"

import React from "react"
import Link from "next/link"
import { ArrowLeft, Printer, Download, Sparkles } from "lucide-react"
import PrintableCV from "@/components/printable-cv"

export default function CVPage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#090D16] py-6 px-3 sm:px-6">
      {/* Top Floating Action Bar (Hidden when printing) */}
      <div className="max-w-[210mm] mx-auto mb-6 no-print">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white/80 dark:bg-[#111111]/80 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-lg">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-[#FF5C00] dark:hover:text-[#FF5C00] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 dark:text-slate-400 hidden md:inline">
              Single-Page A4 Printable Resume
            </span>
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A] text-white text-sm font-semibold shadow-lg shadow-[#FF5C00]/25 hover:shadow-xl hover:shadow-[#FF5C00]/35 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Save as PDF (Print)</span>
            </button>
          </div>
        </div>

        {/* Helper callout */}
        <div className="mt-3 px-4 py-2 rounded-xl bg-orange-500/10 border border-orange-500/20 text-xs text-orange-700 dark:text-orange-300 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#FF5C00] shrink-0" />
          <span>
            <strong>Android & Mobile Tip:</strong> Tap <strong>Save as PDF (Print)</strong> to open your phone's native print screen, then choose <strong>"Save as PDF"</strong>.
          </span>
        </div>
      </div>

      {/* CV Paper Preview */}
      <main className="max-w-[210mm] mx-auto shadow-2xl rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white">
        <PrintableCV id="print-cv-container" />
      </main>
    </div>
  )
}
