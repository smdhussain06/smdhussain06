"use client"

import React from "react"
import { Mail, MapPin, Globe, Linkedin, Github, Phone } from "lucide-react"

interface PrintableCVProps {
  id?: string
  className?: string
}

export default function PrintableCV({ id = "print-cv-container", className = "" }: PrintableCVProps) {
  const basePath = process.env.NODE_ENV === "production" ? "/smdhussain06" : ""

  return (
    <div
      id={id}
      className={`bg-white text-slate-900 w-full font-sans print:p-0 print:m-0 print:max-w-none print:w-full print:h-[279mm] print:max-h-[279mm] print:overflow-hidden border-0 shadow-none ${className}`}
      style={{
        WebkitPrintColorAdjust: "exact",
        printColorAdjust: "exact",
      }}
    >
      <div className="grid grid-cols-12 w-full min-h-[279mm] h-full">
        {/* Left Column: Dark Obsidian Column matching Outfit Accent Palette */}
        <aside className="col-span-12 sm:col-span-4 bg-[#111827] text-white flex flex-col justify-between border-r border-slate-800 print:bg-[#111827]">
          <div>
            {/* Portrait Photograph flush at top like reference template */}
            <div className="w-full overflow-hidden bg-slate-900 aspect-[4/4.6] relative border-b-2 border-[#FF5C00]">
              <img
                src={`${basePath}/personal-images/hussain-blazer.png`}
                alt="Mohammed Hussain in Signature Orange Blazer"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.currentTarget.src = `${basePath}/profilepic.jpg`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-40" />
            </div>

            {/* Candidate Identity */}
            <div className="p-3.5 sm:p-4 space-y-3">
              <div>
                <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase leading-none">
                  Mohammed
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] via-[#FF7A1A] to-[#FF8C1A]">
                    Hussain
                  </span>
                </h1>
                <p className="text-[8.5px] font-bold text-orange-400 tracking-wide mt-1 uppercase leading-tight">
                  AI & Data Science Engineer
                  <br />
                  Enterprise Financial Operations
                </p>
              </div>

              {/* Social and Profile Links */}
              <div className="flex items-center gap-2 pt-0.5 text-slate-300">
                <a
                  href="https://linkedin.com/in/smdhussain06"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-1 rounded-md bg-white/10 hover:bg-[#FF5C00] transition-colors"
                >
                  <Linkedin className="w-3 h-3 text-white" />
                </a>
                <a
                  href="https://github.com/smdhussain06"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="p-1 rounded-md bg-white/10 hover:bg-[#FF5C00] transition-colors"
                >
                  <Github className="w-3 h-3 text-white" />
                </a>
                <a
                  href="mailto:s.m.d.hussainjoe@gmail.com"
                  aria-label="Email Address"
                  className="p-1 rounded-md bg-white/10 hover:bg-[#FF5C00] transition-colors"
                >
                  <Mail className="w-3 h-3 text-white" />
                </a>
                <span className="text-[7.5px] text-slate-400 font-medium">smdhussain06</span>
              </div>

              {/* Contact Section */}
              <div className="space-y-1.5 pt-1">
                <div className="text-[9.5px] font-black uppercase tracking-widest text-white flex items-center justify-between border-b border-white/15 pb-0.5">
                  <span>Contact</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00]" />
                </div>
                <div className="space-y-1 text-[8px] text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <Mail className="w-2.5 h-2.5 text-[#FF5C00] shrink-0" />
                    <span className="truncate">s.m.d.hussainjoe@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-2.5 h-2.5 text-[#FF5C00] shrink-0" />
                    <span>+91 91763 30206</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-2.5 h-2.5 text-[#FF5C00] shrink-0" />
                    <span>Chennai, Tamil Nadu, India</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Globe className="w-2.5 h-2.5 text-[#FF5C00] shrink-0" />
                    <span>github.com/smdhussain06</span>
                  </div>
                </div>
              </div>

              {/* Languages Section with Dual Meter Bars */}
              <div className="space-y-1.5 pt-1">
                <div className="text-[9.5px] font-black uppercase tracking-widest text-white flex items-center justify-between border-b border-white/15 pb-0.5">
                  <span>Languages</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00]" />
                </div>
                <div className="space-y-1.5 text-[8px]">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-200 font-medium">English</span>
                    <div className="flex gap-1 w-20">
                      <div className="h-1.5 flex-1 rounded-sm bg-[#FF5C00]" />
                      <div className="h-1.5 flex-1 rounded-sm bg-[#FF5C00]" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-200 font-medium">Tamil</span>
                    <div className="flex gap-1 w-20">
                      <div className="h-1.5 flex-1 rounded-sm bg-[#FF5C00]" />
                      <div className="h-1.5 flex-1 rounded-sm bg-[#FF5C00]" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-200 font-medium">Hindi</span>
                    <div className="flex gap-1 w-20">
                      <div className="h-1.5 flex-1 rounded-sm bg-[#FF5C00]" />
                      <div className="h-1.5 flex-1 rounded-sm bg-slate-700" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-200 font-medium">Urdu</span>
                    <div className="flex gap-1 w-20">
                      <div className="h-1.5 flex-1 rounded-sm bg-[#FF5C00]" />
                      <div className="h-1.5 flex-1 rounded-sm bg-slate-700" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Deliverable Benchmarks */}
              <div className="space-y-1.5 pt-1">
                <div className="text-[9.5px] font-black uppercase tracking-widest text-white flex items-center justify-between border-b border-white/15 pb-0.5">
                  <span>Benchmarks</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00]" />
                </div>
                <div className="grid grid-cols-2 gap-1.5 text-center pt-0.5">
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-xs font-black text-orange-400">99%+</div>
                    <div className="text-[6.5px] uppercase font-bold text-slate-400 mt-0.5 leading-tight">Verification Accuracy</div>
                  </div>
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-xs font-black text-white">11+</div>
                    <div className="text-[6.5px] uppercase font-bold text-slate-400 mt-0.5 leading-tight">Client Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 text-[7px] text-slate-400 text-center border-t border-white/10 font-medium">
            Porur DLF Corridor · Chennai · Available for Role
          </div>
        </aside>

        {/* Right Column: Crisp White Matching Turtleneck Outfit Element */}
        <main className="col-span-12 sm:col-span-8 p-4 sm:p-5 space-y-2.5 bg-white flex flex-col justify-between">
          <div className="space-y-2.5">
            {/* Profile Section */}
            <section>
              <div className="flex items-center justify-between">
                <h2 className="text-[11px] font-black uppercase tracking-wider text-slate-950">
                  Profile
                </h2>
                <span className="text-[7.5px] font-bold text-[#FF5C00] uppercase tracking-wider">
                  Executive Brief
                </span>
              </div>
              <div className="w-10 h-0.5 bg-[#FF5C00] mt-0.5 mb-1.5" />
              <p className="text-[8px] leading-relaxed text-slate-700 text-justify">
                Results-focused <strong>Artificial Intelligence and Data Science Engineer</strong> with hands-on banking operations experience at <strong>State Bank of India Koyambedu</strong>, telecalling loan recovery in Hindi and Tamil at <strong>LeadPro Business Services Maduravoyal</strong> on Kotak loan portfolios, and US night-shift auto loan insurance verification at <strong>Zealous Services Ambattur</strong>. Complemented by founding <strong>A Generative Slice</strong> to engineer automated workflow and invoicing pipelines. Skilled in accounts receivable reconciliation, billing dispute mitigation, high-velocity customer voice communication, and institutional compliance to accelerate revenue capture.
              </p>
            </section>

            {/* Experience Section in Reference Two-Subcolumn Format */}
            <section>
              <div className="flex items-center justify-between">
                <h2 className="text-[11px] font-black uppercase tracking-wider text-slate-950">
                  Experience
                </h2>
                <span className="text-[7.5px] font-bold text-slate-500 uppercase tracking-wider">
                  Career Record
                </span>
              </div>
              <div className="w-10 h-0.5 bg-[#FF5C00] mt-0.5 mb-1.5" />

              <div className="space-y-2">
                {/* Role 1: A Generative Slice */}
                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-4 space-y-0.5">
                    <div className="font-bold text-[8.5px] text-slate-950 leading-tight">Founder & Lead Architect</div>
                    <div className="text-[7.5px] font-bold text-[#FF5C00]">2024 — Present</div>
                    <div className="text-[7.5px] text-slate-600 font-medium">A Generative Slice · Chennai</div>
                  </div>
                  <div className="col-span-8">
                    <ul className="text-[7.5px] text-slate-600 space-y-0.5 list-disc list-inside leading-snug">
                      <li>Architected SliceInbox automated email triage for European luxury brand Litelab Milano.</li>
                      <li>Deployed commercial ERP with automated OCR invoice extraction and ledger reconciliation.</li>
                      <li>Engineered eleven client enterprise automation solutions, directing end-to-end client roadmaps.</li>
                    </ul>
                  </div>
                </div>

                {/* Role 2: State Bank of India */}
                <div className="grid grid-cols-12 gap-2 pt-1 border-t border-slate-100">
                  <div className="col-span-4 space-y-0.5">
                    <div className="font-bold text-[8.5px] text-slate-950 leading-tight">Financial Operations</div>
                    <div className="text-[7.5px] font-bold text-slate-500">2022 — 2023</div>
                    <div className="text-[7.5px] text-slate-600 font-medium">State Bank of India · Koyambedu</div>
                  </div>
                  <div className="col-span-8">
                    <ul className="text-[7.5px] text-slate-600 space-y-0.5 list-disc list-inside leading-snug">
                      <li>Managed high-volume customer accounts, KYC documentation, credit verification, and compliance.</li>
                      <li>Handled client counseling, billing inquiries, and financial dispute mitigation with banking standards.</li>
                      <li>Achieved top customer retention and onboarding metrics through structured voice communication.</li>
                    </ul>
                  </div>
                </div>

                {/* Role 3: Zealous Services */}
                <div className="grid grid-cols-12 gap-2 pt-1 border-t border-slate-100">
                  <div className="col-span-4 space-y-0.5">
                    <div className="font-bold text-[8.5px] text-slate-950 leading-tight">Auto Loan Verification</div>
                    <div className="text-[7.5px] font-bold text-slate-500">2022 · 3 Months</div>
                    <div className="text-[7.5px] text-slate-600 font-medium">Zealous Services · Ambattur</div>
                  </div>
                  <div className="col-span-8">
                    <ul className="text-[7.5px] text-slate-600 space-y-0.5 list-disc list-inside leading-snug">
                      <li>Conducted US night-shift voice operations verifying auto insurance policies with US carriers.</li>
                      <li>Validated comprehensive and collision coverage, mitigating lender risk before auto loan disbursement.</li>
                      <li>Maintained ninety-nine percent verification accuracy complying with US regulatory guidelines.</li>
                    </ul>
                  </div>
                </div>

                {/* Role 4: LeadPro Business Services */}
                <div className="grid grid-cols-12 gap-2 pt-1 border-t border-slate-100">
                  <div className="col-span-4 space-y-0.5">
                    <div className="font-bold text-[8.5px] text-slate-950 leading-tight">Telecalling & Recovery</div>
                    <div className="text-[7.5px] font-bold text-slate-500">2021 — 2022 · 6 Months</div>
                    <div className="text-[7.5px] text-slate-600 font-medium">LeadPro · Maduravoyal</div>
                  </div>
                  <div className="col-span-8">
                    <ul className="text-[7.5px] text-slate-600 space-y-0.5 list-disc list-inside leading-snug">
                      <li>Managed telecalling in Hindi and Tamil for Kotak Mahindra Bank auto loan accounts.</li>
                      <li>Negotiated structured repayment schedules and resolved account billing grievances with empathy.</li>
                      <li>Consistently exceeded monthly recovery targets while observing banking ethical standards.</li>
                    </ul>
                  </div>
                </div>

                {/* Role 5: A Graphic Slice */}
                <div className="grid grid-cols-12 gap-2 pt-1 border-t border-slate-100">
                  <div className="col-span-4 space-y-0.5">
                    <div className="font-bold text-[8.5px] text-slate-950 leading-tight">Creative Director</div>
                    <div className="text-[7.5px] font-bold text-slate-500">2020 — 2024</div>
                    <div className="text-[7.5px] text-slate-600 font-medium">A Graphic Slice · Chennai</div>
                  </div>
                  <div className="col-span-8">
                    <ul className="text-[7.5px] text-slate-600 space-y-0.5 list-disc list-inside leading-snug">
                      <li>Delivered commercial brand design systems, executive reporting, and 3D visual models in Blender.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section>
              <div className="flex items-center justify-between">
                <h2 className="text-[11px] font-black uppercase tracking-wider text-slate-950">
                  Education
                </h2>
                <span className="text-[7.5px] font-bold text-[#FF5C00] uppercase tracking-wider">
                  Anna University
                </span>
              </div>
              <div className="w-10 h-0.5 bg-[#FF5C00] mt-0.5 mb-1.5" />

              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-4 space-y-0.5">
                  <div className="font-bold text-[8.5px] text-slate-950 leading-tight">B.Tech AI & Data Science</div>
                  <div className="text-[7.5px] font-bold text-[#FF5C00]">First Class Distinction</div>
                  <div className="text-[7.5px] text-slate-600">AMSCE · 2021 — 2025</div>
                </div>
                <div className="col-span-8">
                  <p className="text-[7.5px] text-slate-600 leading-snug">
                    Coursework in distributed neural intelligence, autonomous workflow pipelines, statistical data modeling, and Python computing systems for operational turnaround.
                  </p>
                </div>
              </div>
            </section>

            {/* Expertise Section with Outfit Orange Meter Bars matching Reference Template */}
            <section>
              <div className="flex items-center justify-between">
                <h2 className="text-[11px] font-black uppercase tracking-wider text-slate-950">
                  Expertise
                </h2>
                <span className="text-[7.5px] font-bold text-slate-500 uppercase tracking-wider">
                  Skill Proficiency
                </span>
              </div>
              <div className="w-10 h-0.5 bg-[#FF5C00] mt-0.5 mb-1.5" />

              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[7.5px]">
                <div>
                  <div className="flex justify-between font-semibold text-slate-800 mb-0.5">
                    <span>Accounts Receivable Operations</span>
                    <span className="text-[#FF5C00] font-bold">Advanced</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-sm h-1.5 overflow-hidden">
                    <div className="bg-[#FF5C00] h-full rounded-sm w-[92%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-800 mb-0.5">
                    <span>US Voice & Verification</span>
                    <span className="text-[#FF5C00] font-bold">Night Shift</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-sm h-1.5 overflow-hidden">
                    <div className="bg-[#FF5C00] h-full rounded-sm w-[90%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-800 mb-0.5">
                    <span>Intelligent Process Automation</span>
                    <span className="text-[#FF5C00] font-bold">FastMCP / AI</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-sm h-1.5 overflow-hidden">
                    <div className="bg-[#FF5C00] h-full rounded-sm w-[95%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-800 mb-0.5">
                    <span>Client Dispute Mitigation</span>
                    <span className="text-[#FF5C00] font-bold">High Touch</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-sm h-1.5 overflow-hidden">
                    <div className="bg-[#FF5C00] h-full rounded-sm w-[94%]" />
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Footer note */}
          <footer className="pt-1.5 border-t border-slate-200 flex items-center justify-between text-[7px] text-slate-500 font-medium">
            <div>Curriculum Vitae · Mohammed Hussain · Artificial Intelligence & Data Science Engineer</div>
            <div>Single-Page Letter Document · Chennai, India</div>
          </footer>
        </main>
      </div>
    </div>
  )
}
