"use client"

import React from "react"
import { Mail, MapPin, Linkedin, Github, Phone } from "lucide-react"

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
      <div className="w-full max-w-4xl mx-auto p-6 sm:p-8 space-y-3.5 print:p-0 print:space-y-3 print:max-w-none bg-white">
        {/* Classical Executive Header - Photo-Free, Crisp, Neat */}
        <header className="border-b-2 border-slate-900 pb-3">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950 uppercase">
                Mohammed Hussain
              </h1>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">
                AI & Data Science Engineer · Enterprise Operations and Systems Architecture
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-[10px] font-bold text-[#FF4C00] uppercase tracking-widest block">
                Executive Curriculum Vitae
              </span>
              <span className="text-[10px] text-slate-500 font-medium">
                Chennai, Tamil Nadu, India
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-slate-700 mt-2.5 pt-2 border-t border-slate-100 font-medium">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#FF4C00]" />
              Chennai, Tamil Nadu, India
            </span>
            <span className="text-slate-300">·</span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-[#FF4C00]" />
              +91 91763 30206
            </span>
            <span className="text-slate-300">·</span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-[#FF4C00]" />
              s.m.d.hussainjoe@gmail.com
            </span>
            <span className="text-slate-300">·</span>
            <span className="flex items-center gap-1.5">
              <Linkedin className="w-3 h-3 text-[#FF4C00]" />
              linkedin.com/in/smdhussain06
            </span>
            <span className="text-slate-300">·</span>
            <span className="flex items-center gap-1.5">
              <Github className="w-3 h-3 text-[#FF4C00]" />
              github.com/smdhussain06
            </span>
          </div>
        </header>

        {/* Profile / Summary Section */}
        <section>
          <div className="flex items-center justify-between border-b border-slate-200 pb-1 mb-1.5">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-950">
              Profile
            </h2>
            <span className="text-[9px] font-bold text-[#FF4C00] uppercase tracking-wider">
              Executive Summary
            </span>
          </div>
          <p className="text-[10.5px] leading-relaxed text-slate-700 text-justify">
            Artificial Intelligence and Data Science graduate with hands-on experience in financial operations at State Bank of India Koyambedu, voice processes at Zealous Services Ambattur and LeadPro Business Services Maduravoyal, and automation systems at A Generative Slice. Focused on building reliable software workflows, handling client communication, and solving operational challenges.
          </p>
        </section>

        {/* Professional Experience Section */}
        <section>
          <div className="flex items-center justify-between border-b border-slate-200 pb-1 mb-2">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-950">
              Professional Experience
            </h2>
            <span className="text-[9px] font-bold text-[#FF4C00] uppercase tracking-wider">
              Career Record
            </span>
          </div>

          <div className="space-y-2.5">
            {/* Role 1: A Generative Slice */}
            <div>
              <div className="flex items-baseline justify-between">
                <div className="text-xs font-bold text-slate-950">
                  Founder and Lead Systems Architect · <span className="font-semibold text-slate-700">A Generative Slice, Chennai</span>
                </div>
                <div className="text-[10px] font-semibold text-[#FF4C00]">
                  2024 — Present
                </div>
              </div>
              <ul className="text-[10px] text-slate-600 space-y-0.5 list-disc list-inside mt-0.5 leading-snug">
                <li>Architected automated email triage systems for international client communication.</li>
                <li>Implemented OCR invoice extraction pipelines and internal ERP workflows.</li>
                <li>Delivered custom software automation solutions for business clients.</li>
              </ul>
            </div>

            {/* Role 2: State Bank of India */}
            <div>
              <div className="flex items-baseline justify-between">
                <div className="text-xs font-bold text-slate-950">
                  Financial Operations Specialist · <span className="font-semibold text-slate-700">State Bank of India, Koyambedu</span>
                </div>
                <div className="text-[10px] font-semibold text-slate-500">
                  2022 — 2023
                </div>
              </div>
              <ul className="text-[10px] text-slate-600 space-y-0.5 list-disc list-inside mt-0.5 leading-snug">
                <li>Managed customer documentation, account verification, and KYC compliance.</li>
                <li>Assisted clients with banking inquiries, billing questions, and dispute mitigation.</li>
                <li>Maintained high documentation accuracy and professional customer service standards.</li>
              </ul>
            </div>

            {/* Role 3: Zealous Services */}
            <div>
              <div className="flex items-baseline justify-between">
                <div className="text-xs font-bold text-slate-950">
                  Voice Process Specialist · <span className="font-semibold text-slate-700">Zealous Services, Ambattur</span>
                </div>
                <div className="text-[10px] font-semibold text-slate-500">
                  2022 · 3 Months
                </div>
              </div>
              <ul className="text-[10px] text-slate-600 space-y-0.5 list-disc list-inside mt-0.5 leading-snug">
                <li>Handled US night shift calls verifying insurance coverage with US carriers.</li>
                <li>Reviewed policy declarations to confirm active coverage prior to loan disbursement.</li>
                <li>Maintained high verification accuracy following compliance guidelines.</li>
              </ul>
            </div>

            {/* Role 4: LeadPro Business Services */}
            <div>
              <div className="flex items-baseline justify-between">
                <div className="text-xs font-bold text-slate-950">
                  Telecalling and Collections Specialist · <span className="font-semibold text-slate-700">LeadPro, Maduravoyal</span>
                </div>
                <div className="text-[10px] font-semibold text-slate-500">
                  2021 — 2022 · 6 Months
                </div>
              </div>
              <ul className="text-[10px] text-slate-600 space-y-0.5 list-disc list-inside mt-0.5 leading-snug">
                <li>Handled customer telecalling in Hindi and Tamil for Kotak Mahindra Bank accounts.</li>
                <li>Assisted customers with structured payment schedules and resolved billing questions.</li>
                <li>Consistently met monthly collection targets adhering to ethical guidelines.</li>
              </ul>
            </div>

            {/* Role 5: A Graphic Slice */}
            <div>
              <div className="flex items-baseline justify-between">
                <div className="text-xs font-bold text-slate-950">
                  Creative Designer · <span className="font-semibold text-slate-700">A Graphic Slice, Chennai</span>
                </div>
                <div className="text-[10px] font-semibold text-slate-500">
                  2020 — 2024
                </div>
              </div>
              <ul className="text-[10px] text-slate-600 space-y-0.5 list-disc list-inside mt-0.5 leading-snug">
                <li>Designed brand assets, executive presentations, and 3D visual models.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section>
          <div className="flex items-center justify-between border-b border-slate-200 pb-1 mb-1.5">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-950">
              Education
            </h2>
            <span className="text-[9px] font-bold text-[#FF4C00] uppercase tracking-wider">
              Anna University
            </span>
          </div>

          <div className="flex items-baseline justify-between">
            <div className="text-xs font-bold text-slate-950">
              Bachelor of Technology in Artificial Intelligence and Data Science
            </div>
            <div className="text-[10px] font-semibold text-slate-600">
              2021 — 2025
            </div>
          </div>
          <p className="text-[10px] text-slate-600 mt-0.5 leading-snug">
            Aalim Muhammed Salegh College of Engineering, Anna University, Chennai. Coursework in neural computing, statistical modeling, distributed systems, and practical software design.
          </p>
        </section>

        {/* Core Competencies & Technical Skills */}
        <section>
          <div className="flex items-center justify-between border-b border-slate-200 pb-1 mb-1.5">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-950">
              Core Competencies & Skills
            </h2>
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">
              Capabilities
            </span>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-[10px]">
            <div>
              <span className="font-bold text-slate-950">Financial Operations:</span>{" "}
              <span className="text-slate-600">Accounts Receivable, Billing Verification, KYC Compliance, Account Reconciliation, Dispute Resolution.</span>
            </div>
            <div>
              <span className="font-bold text-slate-950">Voice & Client Communication:</span>{" "}
              <span className="text-slate-600">US Night Shift Operations, Carrier Verification, Customer Retention, Telecalling in Hindi and Tamil.</span>
            </div>
            <div>
              <span className="font-bold text-slate-950">Intelligent Automation:</span>{" "}
              <span className="text-slate-600">Intelligent Process Automation, FastMCP, OCR Extraction, REST APIs, Python, SQL, PostgreSQL.</span>
            </div>
            <div>
              <span className="font-bold text-slate-950">Languages:</span>{" "}
              <span className="text-slate-600">English Fluent Professional Voice · Tamil Native · Hindi Working Professional Fluency · Urdu Fluent.</span>
            </div>
          </div>
        </section>

        {/* Footer note */}
        <footer className="pt-2 border-t border-slate-200 flex items-center justify-between text-[9px] text-slate-500 font-medium">
          <div>Curriculum Vitae · Mohammed Hussain</div>
          <div>Chennai, Tamil Nadu, India</div>
        </footer>
      </div>
    </div>
  )
}
