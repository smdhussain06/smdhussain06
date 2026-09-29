"use client"

import React from "react"
import { Mail, MapPin, Globe, Linkedin, Github, Phone, Award, CheckCircle2, Building, GraduationCap, Cpu, ShieldCheck } from "lucide-react"

interface PrintableCVProps {
  id?: string
  className?: string
}

export default function PrintableCV({ id = "print-cv-container", className = "" }: PrintableCVProps) {
  return (
    <div
      id={id}
      className={`bg-white text-slate-900 w-full max-w-[210mm] mx-auto font-sans print:p-0 print:m-0 print:max-w-none print:w-full border border-slate-200 print:border-none shadow-xl print:shadow-none ${className}`}
      style={{
        WebkitPrintColorAdjust: "exact",
        printColorAdjust: "exact",
      }}
    >
      {/* Top Header Banner with Deep Corporate Navy & Orange Accent */}
      <header className="bg-[#0A192F] text-white p-5 sm:p-6 print:p-5 border-b-4 border-[#FF5C00]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase">
                Mohammed Hussain<span className="text-[#FF5C00]">.</span>
              </h1>
              <span className="text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-[#FF5C00]/20 text-[#FF5C00] border border-[#FF5C00]/40">
                Immediate Joiner
              </span>
            </div>
            <p className="text-xs sm:text-[13px] font-bold text-[#FF8C1A] tracking-wider mt-1 uppercase">
              AI & Data Science Engineer · Financial Operations & Enterprise Systems
            </p>
          </div>

          <div className="text-[10px] sm:text-[10.5px] text-slate-300 space-y-1 sm:text-right font-medium">
            <div className="flex items-center sm:justify-end gap-1.5 text-white">
              <MapPin className="w-3 h-3 text-[#FF5C00] shrink-0" />
              <span>Chennai, Tamil Nadu, India · Porur DLF Corridor</span>
            </div>
            <div className="flex items-center sm:justify-end gap-1.5">
              <Mail className="w-3 h-3 text-[#FF5C00] shrink-0" />
              <span className="text-slate-100 font-semibold">s.m.d.hussainjoe@gmail.com</span>
            </div>
            <div className="flex items-center sm:justify-end gap-2 text-slate-300">
              <span className="text-slate-200">linkedin.com/in/smdhussain06</span>
              <span>•</span>
              <span className="text-slate-200">github.com/smdhussain06</span>
            </div>
          </div>
        </div>
      </header>

      {/* Two Column Document Body */}
      <div className="grid grid-cols-12 min-h-[920px]">
        {/* Left Column: Background, Education & Competencies (35% width / 4 cols) */}
        <aside className="col-span-12 sm:col-span-4 bg-[#F8FAFC] p-4 sm:p-5 print:p-4 border-r border-slate-200 space-y-4">
          {/* Quick Profile Summary */}
          <div>
            <h2 className="text-[10.5px] font-black uppercase tracking-wider text-[#0A192F] border-b-2 border-[#0A192F]/20 pb-1 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF5C00]"></span>
              Candidate Profile
            </h2>
            <div className="space-y-1.5 text-[9px] text-slate-700">
              <div className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>2025 Graduate:</strong> Anna University B.Tech in AI & Data Science (First Class Distinction).</span>
              </div>
              <div className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Banking & Finance:</strong> State Bank of India operations, verification & dispute handling.</span>
              </div>
              <div className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Shift Flexibility:</strong> Ready for International Voice / Night Shifts & US client timelines.</span>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-[10.5px] font-black uppercase tracking-wider text-[#0A192F] border-b-2 border-[#0A192F]/20 pb-1 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF5C00]"></span>
              Education
            </h2>
            <div className="space-y-1">
              <div className="font-bold text-[10px] text-slate-950 leading-tight">
                Bachelor of Technology in Artificial Intelligence & Data Science
              </div>
              <div className="text-[9.5px] font-bold text-[#FF5C00]">
                Graduated with First Class Distinction
              </div>
              <div className="text-[9px] text-slate-600">
                Aalim Muhammed Salegh College of Engineering (Anna University) · 2021 — 2025
              </div>
              <div className="text-[8.5px] text-slate-500 pt-0.5 leading-snug">
                Relevant Coursework: Workflow Automation, Distributed Intelligence, Data Analytics, Python Neural Computing.
              </div>
            </div>
          </div>

          {/* Core Competencies (Categorized) */}
          <div>
            <h2 className="text-[10.5px] font-black uppercase tracking-wider text-[#0A192F] border-b-2 border-[#0A192F]/20 pb-1 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF5C00]"></span>
              Core Competencies
            </h2>

            <div className="space-y-2.5 text-[9px]">
              <div>
                <span className="font-bold text-[#0A192F] block text-[9.5px]">Financial Operations & AR:</span>
                <span className="text-slate-600 leading-snug block">
                  Accounts Receivable (AR) Lifecycle, Account Reconciliation, Invoicing Verification, Dispute Mitigation, Compliance & Audit.
                </span>
              </div>

              <div>
                <span className="font-bold text-[#0A192F] block text-[9.5px]">Voice & Communication:</span>
                <span className="text-slate-600 leading-snug block">
                  International Voice Standards, US Client Representation, Professional Active Listening, Objection Handling, Multi-Channel Triage.
                </span>
              </div>

              <div>
                <span className="font-bold text-[#0A192F] block text-[9.5px]">Workflow Automation & AI:</span>
                <span className="text-slate-600 leading-snug block">
                  Intelligent Process Automation, FastMCP Middleware, Document OCR Extraction, Predictive Lead Routing, Automated Ticketing.
                </span>
              </div>

              <div>
                <span className="font-bold text-[#0A192F] block text-[9.5px]">Data & Analytical Stack:</span>
                <span className="text-slate-600 leading-snug block">
                  Python, Advanced Spreadsheets/Excel, SQL/PostgreSQL, Process Flow Diagrams, Data Validation, Statistical Reporting.
                </span>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-[10.5px] font-black uppercase tracking-wider text-[#0A192F] border-b-2 border-[#0A192F]/20 pb-1 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF5C00]"></span>
              Languages
            </h2>
            <div className="grid grid-cols-2 gap-1 text-[9px] text-slate-700">
              <div>• <strong>English:</strong> Fluent (Voice)</div>
              <div>• <strong>Tamil:</strong> Native</div>
              <div>• <strong>Hindi:</strong> Working</div>
              <div>• <strong>Urdu:</strong> Fluent</div>
            </div>
          </div>

          {/* Key Metrics Strip */}
          <div>
            <h2 className="text-[10.5px] font-black uppercase tracking-wider text-[#0A192F] border-b-2 border-[#0A192F]/20 pb-1 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF5C00]"></span>
              Operational Metrics
            </h2>
            <div className="grid grid-cols-2 gap-1.5 text-center">
              <div className="p-1.5 rounded bg-white border border-slate-200">
                <div className="text-sm font-black text-[#FF5C00] leading-none">99%+</div>
                <div className="text-[7.5px] uppercase font-bold text-slate-600 mt-0.5">Workflow Accuracy</div>
              </div>
              <div className="p-1.5 rounded bg-white border border-slate-200">
                <div className="text-sm font-black text-[#0A192F] leading-none">11+</div>
                <div className="text-[7.5px] uppercase font-bold text-slate-600 mt-0.5">Client Deployments</div>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Column: Experience, Systems & Value Delivered (65% width / 8 cols) */}
        <main className="col-span-12 sm:col-span-8 p-4 sm:p-5 print:p-4 space-y-4">
          {/* Executive Summary */}
          <section>
            <h2 className="text-[11px] font-black uppercase tracking-wider text-[#0A192F] border-b-2 border-[#0A192F]/20 pb-1 mb-1.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF5C00]"></span>
              Professional Summary
            </h2>
            <p className="text-[9.5px] leading-relaxed text-slate-700 text-justify">
              Articulate and analytically driven <strong>Artificial Intelligence & Data Science Engineer</strong> with demonstrated financial operations and customer relationship experience at <strong>State Bank of India</strong>, complemented by venture leadership in automated workflow pipelines at <strong>A Generative Slice</strong>. Skilled in the accounts receivable lifecycle, financial record verification, dispute mitigation, and cross-border client communication. Combines formal engineering discipline with commercial persuasion to accelerate revenue capture, ensure regulatory accuracy, and minimize process leakage.
            </p>
          </section>

          {/* Professional Experience */}
          <section>
            <h2 className="text-[11px] font-black uppercase tracking-wider text-[#0A192F] border-b-2 border-[#0A192F]/20 pb-1 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF5C00]"></span>
              Professional Experience
            </h2>

            <div className="space-y-3">
              {/* Role 1: State Bank of India (Finance & Customer Operations) */}
              <div className="border-l-2 border-[#0A192F]/30 pl-3">
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-[10.5px] text-slate-950">State Bank of India (SBI Cards)</span>
                  <span className="text-[9px] font-bold text-[#FF5C00]">2022 – 2023 · CHENNAI</span>
                </div>
                <div className="text-[9.5px] font-semibold text-slate-700 mb-1">
                  Sales & Financial Operations Specialist · Customer Relations
                </div>
                <ul className="text-[9px] text-slate-700 space-y-0.5 list-disc list-inside leading-snug">
                  <li>Managed high-volume customer accounts, KYC documentation, credit verification, and compliance validation.</li>
                  <li>Handled client counseling, billing inquiries, and financial dispute mitigation adhering to strict institutional banking standards.</li>
                  <li>Achieved top client acquisition and retention metrics through structured, empathetic, and persuasive voice communication.</li>
                </ul>
              </div>

              {/* Role 2: A Generative Slice (Enterprise Automation & Invoicing) */}
              <div className="border-l-2 border-[#0A192F]/30 pl-3">
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-[10.5px] text-slate-950">A Generative Slice</span>
                  <span className="text-[9px] font-bold text-[#FF5C00]">2024 – PRESENT · CHENNAI</span>
                </div>
                <div className="text-[9.5px] font-semibold text-slate-700 mb-1">
                  Founder & Lead Systems Architect · Enterprise Automation
                </div>
                <ul className="text-[9px] text-slate-700 space-y-0.5 list-disc list-inside leading-snug">
                  <li>Engineered automated communication triage and intake routing systems (SliceInbox) for European luxury client accounts.</li>
                  <li>Deployed multi-godown chemical trading ERP featuring automated OCR invoice generation and payment tracking.</li>
                  <li>Successfully delivered 11+ client solutions, overseeing end-to-end service delivery and client stakeholder management.</li>
                </ul>
              </div>

              {/* Role 3: A Graphic Slice (Creative & Design Systems) */}
              <div className="border-l-2 border-[#0A192F]/30 pl-3">
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-[10.5px] text-slate-950">A Graphic Slice</span>
                  <span className="text-[9px] font-bold text-slate-500">2020 – 2024 · CHENNAI</span>
                </div>
                <div className="text-[9.5px] font-semibold text-slate-700 mb-1">
                  Founder & Creative Director · Digital Identity
                </div>
                <ul className="text-[9px] text-slate-700 space-y-0.5 list-disc list-inside leading-snug">
                  <li>Delivered commercial design systems, pitch decks, and digital assets for emerging enterprises and tech ventures.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Production Systems & Workflow Deployments */}
          <section>
            <h2 className="text-[11px] font-black uppercase tracking-wider text-[#0A192F] border-b-2 border-[#0A192F]/20 pb-1 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF5C00]"></span>
              Selected Enterprise Systems & Projects
            </h2>

            <div className="space-y-2 text-[9px]">
              <div className="p-2 rounded bg-slate-50 border border-slate-200">
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-[9.5px] text-slate-950">Commercial Chemical ERP & Invoice OCR Pipeline</span>
                  <span className="text-[8.5px] text-[#FF5C00] font-bold uppercase">Automated Billing</span>
                </div>
                <p className="text-slate-600 leading-snug mt-0.5">
                  End-to-end trading system incorporating automated optical character recognition (OCR) for invoice extraction, preventing billing discrepancies and streamlining accounts reconciliation across multiple inventory warehouses.
                </p>
              </div>

              <div className="p-2 rounded bg-slate-50 border border-slate-200">
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-[9.5px] text-slate-950">SliceInbox · International Communication Triage</span>
                  <span className="text-[8.5px] text-[#FF5C00] font-bold uppercase">Workflow Routing</span>
                </div>
                <p className="text-slate-600 leading-snug mt-0.5">
                  Automated email triage and intelligent inquiry routing system deployed for Milan-based luxury lighting agency Litelab Milano, ensuring zero missed communications and rapid escalation of priority client accounts.
                </p>
              </div>

              <div className="p-2 rounded bg-slate-50 border border-slate-200">
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-[9.5px] text-slate-950">Automated B2B Lead Intelligence Pipeline</span>
                  <span className="text-[8.5px] text-[#FF5C00] font-bold uppercase">Data Extraction</span>
                </div>
                <p className="text-slate-600 leading-snug mt-0.5">
                  Autonomous data extraction and validation pipeline enriching corporate prospect data and validating contact authenticity for targeted enterprise outreach.
                </p>
              </div>
            </div>
          </section>

          {/* Footer certification */}
          <footer className="pt-2 border-t border-slate-200 flex items-center justify-between text-[8px] text-slate-500 font-medium">
            <div>Professional Curriculum Vitae · Mohammed Hussain · Anna University Graduate</div>
            <div>Single-Page Document · Ready for Immediate Joining</div>
          </footer>
        </main>
      </div>
    </div>
  )
}
