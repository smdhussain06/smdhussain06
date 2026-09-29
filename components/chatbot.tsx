"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Sparkles } from "lucide-react"

interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [isInitialized, setIsInitialized] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Initialize messages after component mounts to prevent hydration issues
  useEffect(() => {
    if (!isInitialized) {
      setMessages([
        {
          id: "1",
          content: "Hello! I am Capcicum, Mohammed Hussain's AI assistant.\n\nI can help you explore Mohammed's work as Founder & Lead AI Architect at A Generative Slice and his graduation with a Bachelor of Technology in Artificial Intelligence and Data Science. He architects autonomous multi-agent systems, enterprise FastMCP workspaces, and edge AI computation, backed by years of digital design craft.\n\nWhat would you like to explore? Enterprise solutions, proprietary products, tech stack, or collaboration opportunities?",
          role: "assistant",
          timestamp: new Date()
        }
      ])
      setIsInitialized(true)
    }
  }, [isInitialized])

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Check for booking intent
  const checkBookingIntent = (message: string): boolean => {
    const bookingKeywords = ["book", "appointment", "schedule", "meeting", "call", "consultation", "calendly"]
    return bookingKeywords.some(keyword => 
      message.toLowerCase().includes(keyword)
    )
  }

  // Format timestamp consistently to prevent hydration errors
  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true
    }).toLowerCase()
  }

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      role: "user",
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    // Simulate response delay for natural feel
    setTimeout(() => {
      // Check for booking intent first
      if (checkBookingIntent(userMessage.content)) {
        const bookingResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: "Mohammed would be delighted to connect with you directly. You can schedule a strategy session or discussion here: https://calendly.com/mohammad-hussain/30min\n\nAlternatively, email him directly at s.m.d.hussainjoe@gmail.com.",
          role: "assistant",
          timestamp: new Date()
        }
        setMessages(prev => [...prev, bookingResponse])
        setIsLoading(false)
        return
      }

      // Generate intelligent response based on user input
      const response = generateOfflineResponse(userMessage.content)
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: "assistant",
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botResponse])
      setIsLoading(false)
    }, 600 + Math.random() * 400)
  }

  const generateOfflineResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    
    if (checkBookingIntent(userInput)) {
      return "Mohammed would be delighted to connect with you directly. You can schedule a strategy session or discussion here: https://calendly.com/mohammad-hussain/30min\n\nAlternatively, reach out at s.m.d.hussainjoe@gmail.com."
    }

    if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
      return "Hello! I am Capcicum, Mohammed Hussain's AI assistant. I am here to share insights about Mohammed's work in enterprise AI, autonomous agent architectures, and venture engineering at A Generative Slice. How can I help you today?"
    }

    if (input.includes("project") || input.includes("work") || input.includes("portfolio")) {
      return "Mohammed has architected several flagship systems:\n\n• **A Generative Slice** — Enterprise AI venture studio delivering autonomous systems and intelligent digital ecosystems.\n• **SliceInbox** — FastMCP AI Chief of Staff automating high-volume email workflows and triage for international clients.\n• **SliceLeads** — Autonomous B2B acquisition pipeline orchestrating browser automation with multimodal intelligence.\n• **KaiPulla Edge AI** — Fully offline, on-device intelligence executing locally on ARM64 Linux and mobile devices.\n• **Rose Chemicals Enterprise ERP** — WhatsApp commerce engine with automated OCR invoice generation and multi-godown tracking.\n\nWhich architecture would you like to know more about?"
    }

    if (input.includes("skill") || input.includes("tech") || input.includes("stack") || input.includes("technology")) {
      return "Mohammed's technical foundation spans across multiple disciplines:\n\n• **Autonomous AI & Agents**: Model Context Protocol, FastMCP, Multi-Agent Orchestration, Local LLMs, Vector Search\n• **Enterprise Engineering**: Next.js 14 and 15, TypeScript, Python, REST and GraphQL APIs, Supabase, PostgreSQL\n• **Edge AI & Systems**: ARM64 Linux, Android Termux, Tesseract OCR, Hardware Acceleration\n• **3D Spatial Computing**: Blender 3D, Procedural Modeling, WebGL Interactive Experiences\n\nHe pairs production engineering rigor with meticulous Apple-inspired design standards."
    }

    if (input.includes("experience") || input.includes("background") || input.includes("story") || input.includes("journey")) {
      return "Mohammed's journey combines relentless execution with continuous evolution: from early finance and sales at State Bank of India, to mastering digital design and spatial 3D art, earning his engineering degree in Artificial Intelligence and Data Science, and founding **A Generative Slice**.\n\nToday he directs an engineering and design studio delivering high-ticket enterprise AI solutions across India and Europe."
    }

    if (input.includes("education") || input.includes("study") || input.includes("college") || input.includes("degree")) {
      return "Mohammed has successfully graduated with a **Bachelor of Technology in Artificial Intelligence and Data Science** from Aalim Muhammed Salegh College of Engineering, affiliated with Anna University.\n\nHis academic tenure combined deep theoretical machine learning with advanced real-world deployments in autonomous agents, edge computing, and distributed software systems."
    }

    if (input.includes("contact") || input.includes("hire") || input.includes("collaborate") || input.includes("work together")) {
      return "You can reach Mohammed through several direct channels:\n\n• **Direct Email**: s.m.d.hussainjoe@gmail.com\n• **LinkedIn**: linkedin.com/in/smdhussain06\n• **GitHub**: github.com/smdhussain06\n• **Location**: Chennai, Tamil Nadu, India\n\nHe is open to enterprise consulting, autonomous AI implementations, and strategic venture collaborations."
    }

    if (input.includes("anime") || input.includes("one piece") || input.includes("fun") || input.includes("hobby")) {
      return "Outside of engineering autonomous systems, Mohammed is an ardent One Piece admirer, drawing inspiration from Luffy's unwavering determination, loyalty, and adventurous spirit. He channels that same fearless tenacity into building difficult, boundary-pushing technology."
    }

    return "Mohammed is Founder and Lead AI Architect at A Generative Slice, specializing in autonomous multi-agent systems, FastMCP, and edge computing. You can ask about his enterprise projects, technical stack, background, or how to get in touch!"
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const LoadingDots = () => (
    <div className="flex space-x-1.5 p-3">
      <div className="w-2 h-2 bg-[#FF5C00] rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
      <div className="w-2 h-2 bg-[#FF5C00] rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
      <div className="w-2 h-2 bg-[#FF5C00] rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
    </div>
  )

  return (
    <>
      {/* Floating Chat Bubble */}
      <div 
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"
        }`}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="p-3.5 bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A] text-white rounded-2xl shadow-xl hover:shadow-2xl shadow-[#FF5C00]/25 transform hover:scale-105 active:scale-95 transition-all duration-300 border border-white/20 flex items-center justify-center"
          aria-label="Open AI Assistant"
        >
          <img 
            src={`${process.env.NODE_ENV === 'production' ? '/smdhussain06' : ''}/capcicum.svg`}
            alt="Capcicum Assistant"
            className="w-7 h-7 drop-shadow"
          />
        </button>
      </div>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 z-50 w-84 sm:w-96 bg-white/95 dark:bg-[#111111]/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-black/10 dark:border-white/10 transition-all duration-300 flex flex-col overflow-hidden ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        }`}
        style={{ height: "540px" }}
      >
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 px-5 border-b border-black/5 dark:border-white/10 bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A] text-white">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center p-1.5 border border-white/30">
              <img 
                src={`${process.env.NODE_ENV === 'production' ? '/smdhussain06' : ''}/capcicum.svg`}
                alt="Capcicum"
                className="w-full h-full"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-bold text-sm tracking-tight">Capcicum</h3>
                <Sparkles className="w-3.5 h-3.5 text-white/80" />
              </div>
              <p className="text-white/80 text-xs">AI Portfolio Intelligence</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
            aria-label="Close assistant"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-sm">
          {isInitialized && messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] px-4 py-3 rounded-2xl ${
                  message.role === "user"
                    ? "bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A] text-white shadow-md shadow-[#FF5C00]/20"
                    : "bg-slate-100 dark:bg-[#1A1A1A] text-slate-900 dark:text-slate-100 border border-black/5 dark:border-white/5"
                }`}
              >
                <p className="text-xs sm:text-sm whitespace-pre-wrap leading-relaxed" dangerouslySetInnerHTML={{
                  __html: message.content
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em>$1</em>')
                }}></p>
                <p className={`text-[10px] mt-1 text-right ${
                  message.role === "user" ? "text-white/70" : "text-slate-400"
                }`}>
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-100 dark:bg-[#1A1A1A] rounded-2xl border border-black/5 dark:border-white/5">
                <LoadingDots />
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3.5 border-t border-black/5 dark:border-white/10 bg-white/50 dark:bg-[#111111]/50 backdrop-blur-md">
          <div className="flex space-x-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about Mohammed's work..."
              className="flex-1 px-4 py-2.5 rounded-2xl border border-black/10 dark:border-white/10 focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] bg-white dark:bg-[#070707] text-slate-900 dark:text-slate-100 text-xs sm:text-sm"
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A] text-white p-2.5 rounded-2xl hover:shadow-lg shadow-[#FF5C00]/25 transform hover:scale-105 active:scale-95 transition-all duration-200 disabled:opacity-40 disabled:transform-none disabled:shadow-none flex items-center justify-center"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
