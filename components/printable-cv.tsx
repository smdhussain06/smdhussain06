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
      <div className="grid grid-cols-12 w-full h-[279mm] max-h-[279mm] overflow-hidden">
        {/* Left Column: Signature Coat Orange Gradient Sidebar */}
        <aside
          className="col-span-12 sm:col-span-4 text-white flex flex-col justify-between border-r border-[#E63E00] p-0"
          style={{
            background: "linear-gradient(180deg, #FF4C00 0%, #FF5A00 50%, #E63E00 100%)",
            WebkitPrintColorAdjust: "exact",
            printColorAdjust: "exact",
          }}
        >
          <div>
            {/* Zoomed Portrait Photograph flush at top matching coat outfit */}
            <div className="w-full overflow-hidden bg-[#FF4C00] aspect-[4/4] relative border-b-2 border-white/20">
              <img
                src={`${basePath}/personal-images/hussain-blazer-zoomed.png`}
                alt="Mohammed Hussain"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.src = `${basePath}/personal-images/hussain-blazer.png`
                }}
              />
            </div>

            {/* Candidate Identity */}
            <div className="px-6 py-5 space-y-4">
              <div>
                <h1 className="text-2xl font-black tracking-tight text-white uppercase leading-tight">
                  Mohammed
                  <br />
                  <span className="text-slate-950">Hussain</span>
                </h1>
                <p className="text-xs font-bold text-white/95 tracking-wide mt-1 uppercase">
                  AI & Data Science Engineer
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-2.5 pt-3">
                  <a
                    href="https://linkedin.com/in/smdhussain06"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="p-1.5 rounded-lg bg-black/20 hover:bg-black/35 text-white transition-colors border border-white/10"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-white" />
                  </a>
                  <a
                    href="https://github.com/smdhussain06"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="p-1.5 rounded-lg bg-black/20 hover:bg-black/35 text-white transition-colors border border-white/10"
                  >
                    <Github className="w-3.5 h-3.5 text-white" />
                  </a>
                  <a
                    href="mailto:s.m.d.hussainjoe@gmail.com"
                    aria-label="Email"
                    className="p-1.5 rounded-lg bg-black/20 hover:bg-black/35 text-white transition-colors border border-white/10"
                  >
                    <Mail className="w-3.5 h-3.5 text-white" />
                  </a>
                </div>
              </div>

              {/* Contact Section with High-Contrast Obsidian & White Styling */}
              <div className="space-y-2.5 pt-2 border-t border-white/25">
                <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 flex items-center justify-between">
                  <span>Contact</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </h2>
                <div className="space-y-2 text-[11px] text-white">
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-3.5 h-3.5 text-slate-950 shrink-0" />
                    <span className="truncate font-medium">s.m.d.hussainjoe@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-3.5 h-3.5 text-slate-950 shrink-0" />
                    <span className="font-medium">+91 91763 30206</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-950 shrink-0" />
                    <span className="font-medium">Chennai, Tamil Nadu, India</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Globe className="w-3.5 h-3.5 text-slate-950 shrink-0" />
                    <span className="font-medium">github.com/smdhussain06</span>
                  </div>
                </div>
              </div>

              {/* Languages Section */}
              <div className="space-y-2.5 pt-2 border-t border-white/25">
                <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 flex items-center justify-between">
                  <span>Languages</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </h2>
                <div className="space-y-2 text-[11px]">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">English</span>
                    <div className="flex gap-1 w-24">
                      <div className="h-1.5 flex-1 rounded-sm bg-white" />
                      <div className="h-1.5 flex-1 rounded-sm bg-white" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">Tamil</span>
                    <div className="flex gap-1 w-24">
                      <div className="h-1.5 flex-1 rounded-sm bg-white" />
                      <div className="h-1.5 flex-1 rounded-sm bg-white" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">Hindi</span>
                    <div className="flex gap-1 w-24">
                      <div className="h-1.5 flex-1 rounded-sm bg-white" />
                      <div className="h-1.5 flex-1 rounded-sm bg-black/25" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">Urdu</span>
                    <div className="flex gap-1 w-24">
                      <div className="h-1.5 flex-1 rounded-sm bg-white" />
                      <div className="h-1.5 flex-1 rounded-sm bg-black/25" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills Section in Left Column */}
              <div className="space-y-2.5 pt-2 border-t border-white/25">
                <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 flex items-center justify-between">
                  <span>Skills</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </h2>
                <div className="space-y-1.5 text-[11px] text-white">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-950 shrink-0" />
                    <span className="font-medium">Financial Operations & Invoicing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-950 shrink-0" />
                    <span className="font-medium">International Voice & Client Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-950 shrink-0" />
                    <span className="font-medium">Workflow Automation & APIs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-950 shrink-0" />
                    <span className="font-medium">Python & Data Analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-950 shrink-0" />
                    <span className="font-medium">Dispute Mitigation & Counseling</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-4 text-[9px] text-white/90 text-center border-t border-white/20 font-medium">
            Chennai, Tamil Nadu, India
          </div>
        </aside>

        {/* Right Column: Crisp White Layout */}
        <main className="col-span-12 sm:col-span-8 px-8 py-6 space-y-5 bg-white flex flex-col justify-between">
          <div className="space-y-5">
            {/* Profile Section */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-950">
                Profile
              </h2>
              <div className="w-10 h-0.5 bg-[#FF4C00] mt-1 mb-2.5" />
              <p className="text-[11px] leading-relaxed text-slate-700 text-justify">
                Artificial Intelligence and Data Science graduate with hands-on experience in financial operations at State Bank of India, voice processes at Zealous Services and LeadPro, and automation systems at A Generative Slice. Focused on building reliable software workflows, handling client communication, and solving operational challenges.
              </p>
            </section>

            {/* Experience Section in Clean Reference Subcolumn Format */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-950">
                Experience
              </h2>
              <div className="w-10 h-0.5 bg-[#FF4C00] mt-1 mb-2.5" />

              <div className="space-y-3">
                {/* Role 1: A Generative Slice */}
                <div className="grid grid-cols-12 gap-3">
                  <div className="col-span-4 space-y-0.5">
                    <div className="font-bold text-xs text-slate-950">Founder & Systems Architect</div>
                    <div className="text-[11px] font-semibold text-[#FF4C00]">2024 — Present</div>
                    <div className="text-[11px] text-slate-600">A Generative Slice, Chennai</div>
                  </div>
                  <div className="col-span-8">
                    <ul className="text-[11px] text-slate-600 space-y-1 list-disc list-inside leading-snug">
                      <li>Built automated email triage systems for international client communication.</li>
                      <li>Implemented OCR invoice extraction pipelines and internal ERP workflows.</li>
                      <li>Delivered custom software automation solutions for business clients.</li>
                    </ul>
                  </div>
                </div>

                {/* Role 2: State Bank of India */}
                <div className="grid grid-cols-12 gap-3 pt-2 border-t border-slate-100">
                  <div className="col-span-4 space-y-0.5">
                    <div className="font-bold text-xs text-slate-950">Financial Operations</div>
                    <div className="text-[11px] font-semibold text-slate-500">2022 — 2023</div>
                    <div className="text-[11px] text-slate-600">State Bank of India, Koyambedu</div>
                  </div>
                  <div className="col-span-8">
                    <ul className="text-[11px] text-slate-600 space-y-1 list-disc list-inside leading-snug">
                      <li>Managed customer documentation, account verification, and KYC compliance.</li>
                      <li>Assisted clients with banking inquiries, billing questions, and dispute mitigation.</li>
                      <li>Maintained high documentation accuracy and professional customer service standards.</li>
                    </ul>
                  </div>
                </div>

                {/* Role 3: Zealous Services */}
                <div className="grid grid-cols-12 gap-3 pt-2 border-t border-slate-100">
                  <div className="col-span-4 space-y-0.5">
                    <div className="font-bold text-xs text-slate-950">Voice Process Specialist</div>
                    <div className="text-[11px] font-semibold text-slate-500">2022 · 3 Months</div>
                    <div className="text-[11px] text-slate-600">Zealous Services, Ambattur</div>
                  </div>
                  <div className="col-span-8">
                    <ul className="text-[11px] text-slate-600 space-y-1 list-disc list-inside leading-snug">
                      <li>Handled US night shift calls verifying insurance coverage with US carriers.</li>
                      <li>Reviewed policy declarations to confirm active coverage prior to loan disbursement.</li>
                      <li>Maintained high verification accuracy following compliance guidelines.</li>
                    </ul>
                  </div>
                </div>

                {/* Role 4: LeadPro Business Services */}
                <div className="grid grid-cols-12 gap-3 pt-2 border-t border-slate-100">
                  <div className="col-span-4 space-y-0.5">
                    <div className="font-bold text-xs text-slate-950">Telecalling & Collections</div>
                    <div className="text-[11px] font-semibold text-slate-500">2021 — 2022 · 6 Months</div>
                    <div className="text-[11px] text-slate-600">LeadPro, Maduravoyal</div>
                  </div>
                  <div className="col-span-8">
                    <ul className="text-[11px] text-slate-600 space-y-1 list-disc list-inside leading-snug">
                      <li>Handled customer telecalling in Hindi and Tamil for Kotak Mahindra Bank accounts.</li>
                      <li>Assisted customers with structured payment schedules and resolved billing questions.</li>
                      <li>Consistently met monthly collection targets adhering to ethical guidelines.</li>
                    </ul>
                  </div>
                </div>

                {/* Role 5: A Graphic Slice */}
                <div className="grid grid-cols-12 gap-3 pt-2 border-t border-slate-100">
                  <div className="col-span-4 space-y-0.5">
                    <div className="font-bold text-xs text-slate-950">Creative Designer</div>
                    <div className="text-[11px] font-semibold text-slate-500">2020 — 2024</div>
                    <div className="text-[11px] text-slate-600">A Graphic Slice, Chennai</div>
                  </div>
                  <div className="col-span-8">
                    <ul className="text-[11px] text-slate-600 space-y-1 list-disc list-inside leading-snug">
                      <li>Designed brand assets, executive presentations, and 3D visual models.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-950">
                Education
              </h2>
              <div className="w-10 h-0.5 bg-[#FF4C00] mt-1 mb-2.5" />

              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-4 space-y-0.5">
                  <div className="font-bold text-xs text-slate-950">B.Tech AI & Data Science</div>
                  <div className="text-[11px] font-semibold text-[#FF4C00]">First Class Distinction</div>
                  <div className="text-[11px] text-slate-600">Anna University, AMSCE Chennai · 2021 — 2025</div>
                </div>
                <div className="col-span-8">
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Undergraduate engineering coursework in neural computing, statistical modeling, distributed systems, and practical software design.
                  </p>
                </div>
              </div>
            </section>

            {/* Expertise Section */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-950">
                Expertise
              </h2>
              <div className="w-10 h-0.5 bg-[#FF4C00] mt-1 mb-2.5" />

              <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-[11px]">
                <div>
                  <div className="flex justify-between font-semibold text-slate-800 mb-1">
                    <span>Financial Operations & Billing</span>
                    <span className="text-[#FF4C00]">Advanced</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-sm h-1.5 overflow-hidden">
                    <div className="bg-[#FF4C00] h-full rounded-sm w-[92%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-800 mb-1">
                    <span>International Voice & Support</span>
                    <span className="text-[#FF4C00]">Fluent</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-sm h-1.5 overflow-hidden">
                    <div className="bg-[#FF4C00] h-full rounded-sm w-[90%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-800 mb-1">
                    <span>Workflow Automation & APIs</span>
                    <span className="text-[#FF4C00]">Proficient</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-sm h-1.5 overflow-hidden">
                    <div className="bg-[#FF4C00] h-full rounded-sm w-[94%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-800 mb-1">
                    <span>Customer Relations & Care</span>
                    <span className="text-[#FF4C00]">Experienced</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-sm h-1.5 overflow-hidden">
                    <div className="bg-[#FF4C00] h-full rounded-sm w-[92%]" />
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Footer note */}
          <footer className="pt-3 border-t border-slate-200 flex items-center justify-between text-[9px] text-slate-500 font-medium">
            <div>Curriculum Vitae · Mohammed Hussain</div>
            <div>Single-Page Document · Chennai, India</div>
          </footer>
        </main>
      </div>
    </div>
  )
}
