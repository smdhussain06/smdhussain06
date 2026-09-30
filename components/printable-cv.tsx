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
      className={`bg-white text-slate-900 w-full font-sans print:p-0 print:m-0 print:max-w-none print:w-full border-0 shadow-none ${className}`}
      style={{
        WebkitPrintColorAdjust: "exact",
        printColorAdjust: "exact",
      }}
    >
      <div className="grid grid-cols-12 w-full min-h-full">
        {/* Left Column: Signature Coat Orange Gradient Sidebar with Guaranteed Vector Background */}
        <aside
          className="col-span-12 sm:col-span-4 text-white flex flex-col justify-between border-r border-[#E63E00] p-0 relative overflow-hidden min-h-full"
          style={{
            backgroundColor: "#FF4C00",
            background: "linear-gradient(180deg, #FF4C00 0%, #FF5A00 50%, #E63E00 100%)",
            WebkitPrintColorAdjust: "exact",
            printColorAdjust: "exact",
          }}
        >
          {/* Guaranteed Print SVG Background - Vector shapes are never stripped by PDF writers */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <svg
              className="w-full h-full"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="coatOrangePdfGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FF4C00" />
                  <stop offset="50%" stopColor="#FF5A00" />
                  <stop offset="100%" stopColor="#E63E00" />
                </linearGradient>
              </defs>
              <rect width="100" height="100" fill="url(#coatOrangePdfGrad)" />
            </svg>
          </div>

          <div className="relative z-10">
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
                  <span className="text-white">Hussain</span>
                </h1>
                <p className="text-xs font-bold text-white tracking-wide mt-1 uppercase">
                  AI & Data Science Engineer
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-2.5 pt-3">
                  <a
                    href="https://linkedin.com/in/smdhussain06"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors border border-white/25"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-white" />
                  </a>
                  <a
                    href="https://github.com/smdhussain06"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors border border-white/25"
                  >
                    <Github className="w-3.5 h-3.5 text-white" />
                  </a>
                  <a
                    href="mailto:s.m.d.hussainjoe@gmail.com"
                    aria-label="Email"
                    className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors border border-white/25"
                  >
                    <Mail className="w-3.5 h-3.5 text-white" />
                  </a>
                </div>
              </div>

              {/* Contact Section in Pure White */}
              <div className="space-y-2.5 pt-2 border-t border-white/25">
                <h2 className="text-xs font-black uppercase tracking-wider text-white flex items-center justify-between">
                  <span>Contact</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </h2>
                <div className="space-y-2 text-[11px] text-white">
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-3.5 h-3.5 text-white shrink-0" />
                    <span className="truncate font-medium">s.m.d.hussainjoe@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-3.5 h-3.5 text-white shrink-0" />
                    <span className="font-medium">+91 91763 30206</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-3.5 h-3.5 text-white shrink-0" />
                    <span className="font-medium">Chennai, Tamil Nadu, India</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Globe className="w-3.5 h-3.5 text-white shrink-0" />
                    <span className="font-medium">github.com/smdhussain06</span>
                  </div>
                </div>
              </div>

              {/* Languages Section with Vector Meter Bars */}
              <div className="space-y-2.5 pt-2 border-t border-white/25">
                <h2 className="text-xs font-black uppercase tracking-wider text-white flex items-center justify-between">
                  <span>Languages</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </h2>
                <div className="space-y-2 text-[11px]">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">English</span>
                    <svg className="w-24 h-2 rounded-sm" viewBox="0 0 100 8" preserveAspectRatio="none">
                      <rect width="47" height="8" rx="2" fill="#FFFFFF" />
                      <rect x="53" width="47" height="8" rx="2" fill="#FFFFFF" />
                    </svg>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">Tamil</span>
                    <svg className="w-24 h-2 rounded-sm" viewBox="0 0 100 8" preserveAspectRatio="none">
                      <rect width="47" height="8" rx="2" fill="#FFFFFF" />
                      <rect x="53" width="47" height="8" rx="2" fill="#FFFFFF" />
                    </svg>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">Hindi</span>
                    <svg className="w-24 h-2 rounded-sm" viewBox="0 0 100 8" preserveAspectRatio="none">
                      <rect width="47" height="8" rx="2" fill="#FFFFFF" />
                      <rect x="53" width="47" height="8" rx="2" fill="#FFFFFF" fillOpacity="0.3" />
                    </svg>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">Urdu</span>
                    <svg className="w-24 h-2 rounded-sm" viewBox="0 0 100 8" preserveAspectRatio="none">
                      <rect width="47" height="8" rx="2" fill="#FFFFFF" />
                      <rect x="53" width="47" height="8" rx="2" fill="#FFFFFF" fillOpacity="0.3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Skills Section with Vector Bullets */}
              <div className="space-y-2.5 pt-2 border-t border-white/25">
                <h2 className="text-xs font-black uppercase tracking-wider text-white flex items-center justify-between">
                  <span>Skills</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </h2>
                <div className="space-y-1.5 text-[11px] text-white">
                  <div className="flex items-center gap-2">
                    <svg className="w-1.5 h-1.5 shrink-0" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3" fill="#FFFFFF" />
                    </svg>
                    <span className="font-medium">Financial Operations & Invoicing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-1.5 h-1.5 shrink-0" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3" fill="#FFFFFF" />
                    </svg>
                    <span className="font-medium">International Voice & Client Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-1.5 h-1.5 shrink-0" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3" fill="#FFFFFF" />
                    </svg>
                    <span className="font-medium">Workflow Automation & APIs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-1.5 h-1.5 shrink-0" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3" fill="#FFFFFF" />
                    </svg>
                    <span className="font-medium">Python & Data Analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-1.5 h-1.5 shrink-0" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3" fill="#FFFFFF" />
                    </svg>
                    <span className="font-medium">Dispute Mitigation & Counseling</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-4 text-[9px] text-white/90 text-center border-t border-white/20 font-medium relative z-10">
            Chennai, Tamil Nadu, India
          </div>
        </aside>

        {/* Right Column: Crisp White Layout */}
        <main className="col-span-12 sm:col-span-8 px-8 py-6 space-y-5 bg-white flex flex-col justify-between min-h-full">
          <div className="space-y-5">
            {/* Profile Section */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-950">
                Profile
              </h2>
              <svg className="w-10 h-1 mt-1 mb-2.5" viewBox="0 0 40 4">
                <rect width="40" height="4" rx="2" fill="#FF4C00" />
              </svg>
              <p className="text-[11px] leading-relaxed text-slate-700 text-justify">
                Artificial Intelligence and Data Science graduate with hands-on experience in financial operations at State Bank of India, voice processes at Zealous Services and LeadPro, and automation systems at A Generative Slice. Focused on building reliable software workflows, handling client communication, and solving operational challenges.
              </p>
            </section>

            {/* Experience Section in Clean Reference Subcolumn Format */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-950">
                Experience
              </h2>
              <svg className="w-10 h-1 mt-1 mb-2.5" viewBox="0 0 40 4">
                <rect width="40" height="4" rx="2" fill="#FF4C00" />
              </svg>

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
              <svg className="w-10 h-1 mt-1 mb-2.5" viewBox="0 0 40 4">
                <rect width="40" height="4" rx="2" fill="#FF4C00" />
              </svg>

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

            {/* Expertise Section with Vector Progress Bars */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-950">
                Expertise
              </h2>
              <svg className="w-10 h-1 mt-1 mb-2.5" viewBox="0 0 40 4">
                <rect width="40" height="4" rx="2" fill="#FF4C00" />
              </svg>

              <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-[11px]">
                <div>
                  <div className="flex justify-between font-semibold text-slate-800 mb-1">
                    <span>Financial Operations & Billing</span>
                    <span className="text-[#FF4C00]">Advanced</span>
                  </div>
                  <svg className="w-full h-1.5 rounded-sm" viewBox="0 0 100 6" preserveAspectRatio="none">
                    <rect width="100" height="6" rx="2" fill="#F1F5F9" />
                    <rect width="92" height="6" rx="2" fill="#FF4C00" />
                  </svg>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-800 mb-1">
                    <span>International Voice & Support</span>
                    <span className="text-[#FF4C00]">Fluent</span>
                  </div>
                  <svg className="w-full h-1.5 rounded-sm" viewBox="0 0 100 6" preserveAspectRatio="none">
                    <rect width="100" height="6" rx="2" fill="#F1F5F9" />
                    <rect width="90" height="6" rx="2" fill="#FF4C00" />
                  </svg>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-800 mb-1">
                    <span>Workflow Automation & APIs</span>
                    <span className="text-[#FF4C00]">Proficient</span>
                  </div>
                  <svg className="w-full h-1.5 rounded-sm" viewBox="0 0 100 6" preserveAspectRatio="none">
                    <rect width="100" height="6" rx="2" fill="#F1F5F9" />
                    <rect width="94" height="6" rx="2" fill="#FF4C00" />
                  </svg>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-800 mb-1">
                    <span>Customer Relations & Care</span>
                    <span className="text-[#FF4C00]">Experienced</span>
                  </div>
                  <svg className="w-full h-1.5 rounded-sm" viewBox="0 0 100 6" preserveAspectRatio="none">
                    <rect width="100" height="6" rx="2" fill="#F1F5F9" />
                    <rect width="92" height="6" rx="2" fill="#FF4C00" />
                  </svg>
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
