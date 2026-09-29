import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Chatbot from "@/components/chatbot"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mohammed Hussain — Founder @ A Generative Slice | AI Engineer & Systems Architect",
  description:
    "Official portfolio of Mohammed Hussain — Graduate in Artificial Intelligence and Data Science, Founder & Lead AI Architect at A Generative Slice. Architecting autonomous multi-agent systems, enterprise AI solutions, edge intelligence, and bespoke digital ecosystems.",
  keywords: [
    "Mohammed Hussain",
    "A Generative Slice",
    "AGS",
    "AI Engineer",
    "Autonomous Multi-Agent Systems",
    "Model Context Protocol",
    "MCP",
    "Edge AI",
    "Data Science",
    "Machine Learning",
    "Graphic Designer",
    "3D Spatial Computing",
    "Blender",
  ],
  authors: [{ name: "Mohammed Hussain" }],
  creator: "Mohammed Hussain",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohammadhussain.dev",
    title: "Mohammed Hussain — Founder @ A Generative Slice | AI Engineer",
    description: "Portfolio of Mohammed Hussain — B.Tech in AI & Data Science, Founder & CEO of A Generative Slice. Architecting autonomous multi-agent systems and enterprise AI solutions.",
    siteName: "Mohammed Hussain Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Hussain — Founder @ A Generative Slice | AI Engineer",
    description: "Portfolio of Mohammed Hussain — B.Tech in AI & Data Science, Founder & CEO of A Generative Slice.",
    creator: "@smdhussain06",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  )
}
