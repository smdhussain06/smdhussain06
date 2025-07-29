import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mohammad Hussain - AI & Data Science Enthusiast | Graphic Designer",
  description:
    "Portfolio of Mohammad Hussain - AI & Data Science Enthusiast, Graphic Designer, and Content Creator. Blending creativity with cutting-edge AI to create extraordinary digital experiences.",
  keywords: [
    "Mohammad Hussain",
    "AI",
    "Data Science",
    "Graphic Design",
    "Content Creator",
    "Machine Learning",
    "Adobe Creative Suite",
    "Blender",
  ],
  authors: [{ name: "Mohammad Hussain" }],
  creator: "Mohammad Hussain",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohammadhussain.dev",
    title: "Mohammad Hussain - AI & Data Science Enthusiast | Graphic Designer",
    description: "Portfolio of Mohammad Hussain - AI & Data Science Enthusiast, Graphic Designer, and Content Creator.",
    siteName: "Mohammad Hussain Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Hussain - AI & Data Science Enthusiast | Graphic Designer",
    description: "Portfolio of Mohammad Hussain - AI & Data Science Enthusiast, Graphic Designer, and Content Creator.",
    creator: "@smdhussain06",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
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
        </ThemeProvider>
      </body>
    </html>
  )
}
