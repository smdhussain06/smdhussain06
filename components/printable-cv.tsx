"use client"

import React from "react"
import { Mail, MapPin, Globe, Linkedin, Github, ExternalLink, Award, Sparkles, Terminal, Code, Cpu } from "lucide-react"

interface PrintableCVProps {
  id?: string
  className?: string
}

export default function PrintableCV({ id = "print-cv-container", className = "" }: PrintableCVProps) {
  return (
    <div
      id={id}
      className={`bg-white text-slate-900 w-full max-w-[210mm] mx-auto p-6 sm:p-8 font-sans print:p-0 print:max-w-none print:w-full ${className}`}
      style={{
        WebkitPrintColorAdjust: "exact",
        printColorAdjust: "exact",
      }}
    >
      {/* CV Header */}
      <header className="border-b-2 border-[#FF5C00] pb-4 mb-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950 uppercase">
              Mohammed Hussain<span className="text-[#FF5C00]">.</span>
            </h1>
            <p className="text-xs sm:text-sm font-bold text-[#FF5C00] tracking-wide mt-0.5 uppercase">
              Founder & Lead AI Systems Architect · AI & Data Science Engineer
            </p>
          </div>
          <div className="text-[10px] sm:text-[11px] text-slate-600 space-y-0.5 sm:text-right font-medium">
            <div>Chennai, Tamil Nadu, India</div>
            <div className="text-slate-900 font-semibold">s.m.d.hussainjoe@gmail.com</div>
            <div className="flex items-center sm:justify-end gap-2 text-slate-700">
              <span>linkedin.com/in/smdhussain06</span>
              <span>•</span>
              <span>github.com/smdhussain06</span>
            </div>
          </div>
        </div>
      </header>

      {/* Executive Summary */}
      <section className="mb-4">
        <h2 className="text-[11px] font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-1.5 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-sm bg-[#FF5C00]"></span>
          Executive Summary
        </h2>
        <p className="text-[10px] sm:text-[10.5px] leading-relaxed text-slate-700 text-justify">
          High-velocity AI Systems Architect and Founder of <strong>A Generative Slice</strong>. Proven track record architecting autonomous multi-agent systems, FastMCP enterprise integrations, and 100% offline edge computing on ARM64 Linux and mobile hardware. Successfully delivered 11+ client deployments across India and Europe. Combines formal theoretical depth with 4+ years of venture leadership and creative-tech craftsmanship.
        </p>
      </section>

      {/* Main Grid: 2 Columns */}
      <div className="grid grid-cols-12 gap-5">
        {/* Left Column (4 cols) */}
        <div className="col-span-12 sm:col-span-5 space-y-4">
          {/* Education */}
          <section>
            <h2 className="text-[11px] font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-sm bg-[#FF5C00]"></span>
              Education
            </h2>
            <div className="space-y-1">
              <div className="font-bold text-[10.5px] text-slate-950 leading-tight">
                Bachelor of Technology in Artificial Intelligence & Data Science
              </div>
              <div className="text-[10px] font-semibold text-[#FF5C00]">
                Graduated with First Class Distinction
              </div>
              <div className="text-[9.5px] text-slate-600">
                Aalim Muhammed Salegh College of Engineering (Anna University)
              </div>
              <div className="text-[9px] text-slate-500 pt-0.5 leading-snug">
                Core: Autonomous Multi-Agent Orchestration, Neural Networks, Distributed Systems, Edge ML.
              </div>
            </div>
          </section>

          {/* Core Technical Stack */}
          <section>
            <h2 className="text-[11px] font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-sm bg-[#FF5C00]"></span>
              Technical Competencies
            </h2>
            <div className="space-y-2 text-[9.5px]">
              <div>
                <span className="font-bold text-slate-900 block">Autonomous AI & Multi-Agent:</span>
                <span className="text-slate-600">Model Context Protocol, FastMCP, Local LLMs, Agent Tooling, RAG Pipelines, Vector Search</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 block">Full-Stack & Cloud:</span>
                <span className="text-slate-600">Next.js 14/15, TypeScript, Python, Tailwind CSS, Supabase, PostgreSQL, REST/GraphQL APIs</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 block">Edge & Infrastructure:</span>
                <span className="text-slate-600">ARM64 Linux, Android Termux, Tesseract OCR, Git/GitHub Actions CI/CD, Containerization</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 block">Spatial & Design Systems:</span>
                <span className="text-slate-600">Blender 3D Modeling, Procedural Shading, UI/UX Design, Figma, Motion Graphics</span>
              </div>
            </div>
          </section>

          {/* Key Metrics / Highlights */}
          <section>
            <h2 className="text-[11px] font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-sm bg-[#FF5C00]"></span>
              Impact Metrics
            </h2>
            <div className="grid grid-cols-2 gap-2 text-center pt-1">
              <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200">
                <div className="text-base font-black text-[#FF5C00] leading-none">11+</div>
                <div className="text-[8px] uppercase tracking-wider text-slate-600 font-semibold mt-0.5">Enterprise Deployments</div>
              </div>
              <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200">
                <div className="text-base font-black text-[#FF5C00] leading-none">6+</div>
                <div className="text-[8px] uppercase tracking-wider text-slate-600 font-semibold mt-0.5">Proprietary AI SaaS</div>
              </div>
              <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200">
                <div className="text-base font-black text-[#FF5C00] leading-none">30+</div>
                <div className="text-[8px] uppercase tracking-wider text-slate-600 font-semibold mt-0.5">Automated Workflows</div>
              </div>
              <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200">
                <div className="text-base font-black text-[#FF5C00] leading-none">100%</div>
                <div className="text-[8px] uppercase tracking-wider text-slate-600 font-semibold mt-0.5">Offline Edge Capability</div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column (7 cols) */}
        <div className="col-span-12 sm:col-span-7 space-y-4">
          {/* Venture Leadership & Experience */}
          <section>
            <h2 className="text-[11px] font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-sm bg-[#FF5C00]"></span>
              Venture Leadership & Experience
            </h2>

            <div className="space-y-3">
              {/* Role 1 */}
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-[10.5px] text-slate-950">A Generative Slice</span>
                  <span className="text-[9px] font-semibold text-slate-500">2024 – PRESENT</span>
                </div>
                <div className="text-[9.5px] font-semibold text-[#FF5C00] mb-0.5">
                  Founder & Lead AI Systems Architect
                </div>
                <ul className="text-[9px] text-slate-700 space-y-0.5 list-disc list-inside leading-snug">
                  <li>Orchestrating autonomous multi-agent pipelines and enterprise FastMCP middleware.</li>
                  <li>Shipped 11+ production AI systems across Indian commerce and European design agencies.</li>
                  <li>Directing end-to-end engineering, client acquisition, and proprietary SaaS product roadmaps.</li>
                </ul>
              </div>

              {/* Role 2 */}
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-[10.5px] text-slate-950">A Graphic Slice</span>
                  <span className="text-[9px] font-semibold text-slate-500">2020 – 2024</span>
                </div>
                <div className="text-[9.5px] font-semibold text-[#FF5C00] mb-0.5">
                  Founder & Creative Director
                </div>
                <ul className="text-[9px] text-slate-700 space-y-0.5 list-disc list-inside leading-snug">
                  <li>Delivered 3D spatial computing visuals, procedural motion graphics, and UI/UX systems.</li>
                  <li>Partnered with global creators and emerging brands, establishing strong design foundations.</li>
                </ul>
              </div>

              {/* Role 3 */}
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-[10.5px] text-slate-950">State Bank of India (SBI Cards)</span>
                  <span className="text-[9px] font-semibold text-slate-500">2022 – 2023</span>
                </div>
                <div className="text-[9.5px] font-semibold text-slate-700 mb-0.5">
                  Sales & Financial Operations Specialist
                </div>
                <ul className="text-[9px] text-slate-700 space-y-0.5 list-disc list-inside leading-snug">
                  <li>Executed high-volume financial onboarding, credit verification, and client acquisition.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Systems & Flagship Architectures */}
          <section>
            <h2 className="text-[11px] font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-sm bg-[#FF5C00]"></span>
              Selected Flagship Systems
            </h2>

            <div className="space-y-2 pt-0.5">
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-[10px] text-slate-950">SliceInbox · FastMCP AI Chief of Staff</span>
                  <span className="text-[8.5px] text-[#FF5C00] font-semibold">Production</span>
                </div>
                <p className="text-[9px] text-slate-600 leading-snug">
                  Autonomous email processing and intelligent triage pipeline deployed for Milan-based lighting agency Litelab Milano via FastMCP with high-reliability client routing.
                </p>
              </div>

              <div>
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-[10px] text-slate-950">SliceLeads · Autonomous B2B Engine</span>
                  <span className="text-[8.5px] text-[#FF5C00] font-semibold">Proprietary</span>
                </div>
                <p className="text-[9px] text-slate-600 leading-snug">
                  Zero-touch lead intelligence pipeline marrying browser automation with multimodal vision models for real-time contact extraction and outbound enrichment.
                </p>
              </div>

              <div>
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-[10px] text-slate-950">KaiPulla Edge AI · Offline Mobile Intelligence</span>
                  <span className="text-[8.5px] text-[#FF5C00] font-semibold">ARM64 Edge</span>
                </div>
                <p className="text-[9px] text-slate-600 leading-snug">
                  Fully local, zero-cloud assistant running quantized LLMs on mobile Android Termux and low-power Linux workstations with zero network dependency.
                </p>
              </div>

              <div>
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-[10px] text-slate-950">Rose Chemicals ERP · WhatsApp Commerce Suite</span>
                  <span className="text-[8.5px] text-[#FF5C00] font-semibold">Enterprise</span>
                </div>
                <p className="text-[9px] text-slate-600 leading-snug">
                  End-to-end trading system with automated OCR invoice generation, multi-godown chemical inventory management, and conversational order fulfillment.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer verification note */}
      <footer className="mt-4 pt-2 border-t border-slate-200 flex items-center justify-between text-[8px] text-slate-500 font-medium">
        <div>Official Executive Curriculum Vitae · Mohammed Hussain · A Generative Slice</div>
        <div>Verified Single-Page Document · {new Date().getFullYear()}</div>
      </footer>
    </div>
  )
}
