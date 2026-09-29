"use client"

import React from "react"
import { Mail, MapPin, Globe, Linkedin, Github } from "lucide-react"

interface PrintableCVProps {
  id?: string
  className?: string
}

export default function PrintableCV({ id = "print-cv-container", className = "" }: PrintableCVProps) {
  return (
    <div
      id={id}
      className={`bg-white text-slate-900 w-full font-sans print:p-0 print:m-0 print:max-w-none print:w-full border-0 shadow-none ${className}`}
      style={{
        WebkitPrintColorAdjust: "exact",
        printColorAdjust: "exact",
      }}
    >
      {/* Top Gradient Orange Accent Line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#FF5C00] via-[#FF7A1A] to-[#FF8C1A]" />

      {/* Modern Executive Header */}
      <header className="bg-white border-b border-slate-200 px-5 py-3.5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950 uppercase">
              Mohammed Hussain<span className="text-[#FF5C00]">.</span>
            </h1>
            <p className="text-xs sm:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A] tracking-wide mt-0.5 uppercase">
              Artificial Intelligence and Data Science Engineer · Enterprise Financial Operations
            </p>
          </div>

          <div className="text-[10px] text-slate-600 space-y-0.5 sm:text-right font-medium">
            <div className="text-slate-900 font-semibold">
              Chennai, Tamil Nadu, India · Porur DLF Corridor
            </div>
            <div>s.m.d.hussainjoe@gmail.com</div>
            <div className="text-slate-700">
              linkedin.com/in/smdhussain06 • github.com/smdhussain06
            </div>
          </div>
        </div>
      </header>

      {/* Two Column Document Body filling full Letter sheet */}
      <div className="grid grid-cols-12 w-full">
        {/* Left Column: Background, Education & Competencies (33% width / 4 cols) */}
        <aside className="col-span-12 sm:col-span-4 bg-[#FAFAFA] p-3.5 sm:p-4 border-r border-slate-200 space-y-3.5">
          {/* Education Section */}
          <div>
            <h2 className="text-[10px] font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-sm bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A]"></span>
              Education
            </h2>
            <div className="space-y-1">
              <div className="font-bold text-[9.5px] text-slate-950 leading-tight">
                Bachelor of Technology in Artificial Intelligence and Data Science
              </div>
              <div className="text-[9px] font-bold text-[#FF5C00]">
                First Class Distinction
              </div>
              <div className="text-[8.5px] text-slate-600">
                Aalim Muhammed Salegh College of Engineering, Anna University · 2021 — 2025
              </div>
              <div className="text-[8px] text-slate-500 pt-0.5 leading-snug">
                Coursework: Workflow Automation, Distributed Intelligence, Data Analytics, Python Neural Computing.
              </div>
            </div>
          </div>

          {/* Core Competencies Categorized */}
          <div>
            <h2 className="text-[10px] font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-sm bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A]"></span>
              Core Competencies
            </h2>

            <div className="space-y-2 text-[8.5px]">
              <div>
                <span className="font-bold text-slate-950 block text-[9px]">Financial Operations & AR:</span>
                <span className="text-slate-600 leading-snug block">
                  Accounts Receivable Lifecycle, Loan Recovery, Account Reconciliation, Invoice Verification, Dispute Mitigation, Regulatory Compliance.
                </span>
              </div>

              <div>
                <span className="font-bold text-slate-950 block text-[9px]">Voice & Client Communication:</span>
                <span className="text-slate-600 leading-snug block">
                  Night Shift US Process, Carrier Verification, Professional English Fluency, Active Listening, Persuasive Objection Handling.
                </span>
              </div>

              <div>
                <span className="font-bold text-slate-950 block text-[9px]">Intelligent Automation & AI:</span>
                <span className="text-slate-600 leading-snug block">
                  Intelligent Process Automation, FastMCP Middleware, Document OCR Extraction, Automated Inquiry Routing, Predictive Workflow Optimization.
                </span>
              </div>

              <div>
                <span className="font-bold text-slate-950 block text-[9px]">Analytical & Software Stack:</span>
                <span className="text-slate-600 leading-snug block">
                  Python, Advanced Excel and Spreadsheets, SQL, PostgreSQL, Process Flow Architecture, Next.js, REST APIs.
                </span>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-[10px] font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-sm bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A]"></span>
              Languages
            </h2>
            <div className="space-y-1 text-[8.5px] text-slate-700">
              <div>• <strong>English:</strong> Fluent Professional Voice</div>
              <div>• <strong>Tamil:</strong> Native</div>
              <div>• <strong>Hindi:</strong> Working Professional Fluency</div>
              <div>• <strong>Urdu:</strong> Fluent</div>
            </div>
          </div>

          {/* Key Operational Metrics */}
          <div>
            <h2 className="text-[10px] font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-sm bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A]"></span>
              Performance Benchmarks
            </h2>
            <div className="grid grid-cols-2 gap-2 text-center pt-0.5">
              <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A] leading-none">99%+</div>
                <div className="text-[7.5px] uppercase font-bold text-slate-600 mt-1">Verification Accuracy</div>
              </div>
              <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="text-sm font-black text-slate-950 leading-none">11+</div>
                <div className="text-[7.5px] uppercase font-bold text-slate-600 mt-1">Enterprise Deployments</div>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Column: Experience, Systems & Value Delivered (67% width / 8 cols) */}
        <main className="col-span-12 sm:col-span-8 p-3.5 sm:p-4 space-y-3 bg-white">
          {/* Professional Summary */}
          <section>
            <h2 className="text-[10px] font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-sm bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A]"></span>
              Professional Summary
            </h2>
            <p className="text-[8.5px] leading-relaxed text-slate-700 text-justify">
              Results-focused <strong>Artificial Intelligence and Data Science Engineer</strong> with direct hands-on experience across banking financial operations at <strong>State Bank of India Koyambedu</strong>, telecalling loan recovery in Hindi and Tamil at <strong>LeadPro Business Services Maduravoyal</strong> on Kotak loan portfolios, and US night-shift auto loan insurance verification at <strong>Zealous Services Ambattur</strong>. Complemented by founding <strong>A Generative Slice</strong> to engineer automated workflow and invoicing pipelines. Skilled in accounts receivable reconciliation, billing dispute mitigation, high-velocity customer voice communication, and institutional compliance. Combines commercial persuasion with technical rigor to accelerate revenue capture and eliminate operational bottlenecks.
            </p>
          </section>

          {/* Professional Experience */}
          <section>
            <h2 className="text-[10px] font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-sm bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A]"></span>
              Professional Experience
            </h2>

            <div className="space-y-2">
              {/* Role 1: A Generative Slice */}
              <div className="border-l-2 border-[#FF5C00] pl-2">
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-[9.5px] text-slate-950">A Generative Slice</span>
                  <span className="text-[8px] font-bold text-[#FF5C00]">2024 – PRESENT · CHENNAI</span>
                </div>
                <div className="text-[8.5px] font-semibold text-slate-700 mb-0.5">
                  Founder and Lead Systems Architect · Enterprise Workflow Automation
                </div>
                <ul className="text-[8px] text-slate-600 space-y-0.5 list-disc list-inside leading-snug">
                  <li>Engineered automated communication triage and intake routing systems for European luxury client accounts.</li>
                  <li>Deployed commercial trading ERP featuring automated OCR invoice generation and ledger reconciliation.</li>
                  <li>Successfully delivered eleven client enterprise solutions, overseeing client relations and delivery roadmaps.</li>
                </ul>
              </div>

              {/* Role 2: State Bank of India Koyambedu */}
              <div className="border-l-2 border-slate-300 pl-2">
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-[9.5px] text-slate-950">State Bank of India</span>
                  <span className="text-[8px] font-bold text-slate-600">2022 – 2023 · KOYAMBEDU, CHENNAI</span>
                </div>
                <div className="text-[8.5px] font-semibold text-slate-700 mb-0.5">
                  Financial Operations and Customer Relations Specialist · Koyambedu Branch
                </div>
                <ul className="text-[8px] text-slate-600 space-y-0.5 list-disc list-inside leading-snug">
                  <li>Managed high-volume customer accounts, KYC documentation, credit verification, and compliance validation.</li>
                  <li>Handled client counseling, billing inquiries, and financial dispute mitigation adhering to strict banking standards.</li>
                  <li>Achieved top customer retention and onboarding metrics through structured, empathetic voice communication.</li>
                </ul>
              </div>

              {/* Role 3: Zealous Services Ambattur Car Loan Insurance Verification Night Shift */}
              <div className="border-l-2 border-slate-300 pl-2">
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-[9.5px] text-slate-950">Zealous Services</span>
                  <span className="text-[8px] font-bold text-slate-600">2022 · 3 MONTHS · AMBATTUR, CHENNAI</span>
                </div>
                <div className="text-[8.5px] font-semibold text-slate-700 mb-0.5">
                  Auto Loan Insurance Verification Specialist · US Night Shift Process
                </div>
                <ul className="text-[8px] text-slate-600 space-y-0.5 list-disc list-inside leading-snug">
                  <li>Conducted US night-shift voice operations verifying auto insurance policies, coverage limits, and lienholder status with US insurance carriers.</li>
                  <li>Reviewed policy declarations to confirm active comprehensive and collision coverage, mitigating lender risk before auto loan disbursement.</li>
                  <li>Maintained ninety-nine percent verification accuracy complying with US financial services regulatory guidelines.</li>
                </ul>
              </div>

              {/* Role 4: LeadPro Business Services Maduravoyal Kotak Loan Recovery Hindi and Tamil */}
              <div className="border-l-2 border-slate-300 pl-2">
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-[9.5px] text-slate-950">LeadPro Business Services</span>
                  <span className="text-[8px] font-bold text-slate-600">2021 – 2022 · 6 MONTHS · MADURAVOYAL, CHENNAI</span>
                </div>
                <div className="text-[8.5px] font-semibold text-slate-700 mb-0.5">
                  Telecalling and Loan Recovery Specialist · Kotak Mahindra Bank Loan Portfolio
                </div>
                <ul className="text-[8px] text-slate-600 space-y-0.5 list-disc list-inside leading-snug">
                  <li>Managed outbound and inbound telecalling across Hindi and Tamil customer segments for Kotak Mahindra Bank loan recovery.</li>
                  <li>Negotiated structured repayment schedules and resolved customer account billing grievances with high persuasion, active listening, and empathy.</li>
                  <li>Consistently exceeded monthly recovery and collection targets while strictly observing banking ethical recovery standards.</li>
                </ul>
              </div>

              {/* Role 5: A Graphic Slice */}
              <div className="border-l-2 border-slate-300 pl-2">
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-[9.5px] text-slate-950">A Graphic Slice</span>
                  <span className="text-[8px] font-bold text-slate-600">2020 – 2024 · CHENNAI</span>
                </div>
                <div className="text-[8.5px] font-semibold text-slate-700 mb-0.5">
                  Founder and Creative Director · Commercial Design Systems
                </div>
                <ul className="text-[8px] text-slate-600 space-y-0.5 list-disc list-inside leading-snug">
                  <li>Delivered commercial design systems, technical presentations, and executive reporting assets for commercial brands.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Selected Enterprise Systems */}
          <section>
            <h2 className="text-[10px] font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-sm bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A]"></span>
              Selected Enterprise Systems
            </h2>

            <div className="space-y-1 text-[8px]">
              <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200">
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-[8.5px] text-slate-950">Commercial Chemical ERP and Invoice OCR Pipeline</span>
                  <span className="text-[7.5px] text-[#FF5C00] font-bold uppercase">Automated Billing</span>
                </div>
                <p className="text-slate-600 leading-tight mt-0.5">
                  Automated OCR data extraction from invoices and purchase orders, preventing billing discrepancies and streamlining accounts reconciliation across multiple inventory warehouses.
                </p>
              </div>

              <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200">
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-[8.5px] text-slate-950">SliceInbox · International Communication Triage</span>
                  <span className="text-[7.5px] text-[#FF5C00] font-bold uppercase">Workflow Routing</span>
                </div>
                <p className="text-slate-600 leading-tight mt-0.5">
                  Automated email triage and intelligent inquiry routing system deployed for Milan-based luxury lighting agency Litelab Milano, ensuring zero missed communications and priority account escalation.
                </p>
              </div>
            </div>
          </section>

          {/* Footer note */}
          <footer className="pt-1.5 border-t border-slate-200 flex items-center justify-between text-[7.5px] text-slate-500 font-medium">
            <div>Professional Curriculum Vitae · Mohammed Hussain · Anna University Graduate</div>
            <div>Single-Page Letter Document · Chennai, India</div>
          </footer>
        </main>
      </div>
    </div>
  )
}
