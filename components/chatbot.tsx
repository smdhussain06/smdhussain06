"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send } from "lucide-react"

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

  const API_KEY = "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"
  const API_URL = "https://openrouter.ai/api/v1/chat/completions"

  // Initialize messages after component mounts to prevent hydration issues
  useEffect(() => {
    if (!isInitialized) {
      setMessages([
        {
          id: "1",
          content: "Hello! 👋 I'm Capcicum, Mohammad Hussain's AI assistant! 🌶️\n\nI'm here to help you learn about Mohammad's incredible journey from AI & Data Science student to startup founder. He's working on amazing projects like Edge AI Mobile Computation and loves blending creativity with cutting-edge technology!\n\nWhat would you like to know about Mohammad? His projects, skills, experience, or maybe his One Piece passion? 👒✨",
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

  // Get last 3 messages for context
  const getContextMessages = (): any[] => {
    const lastThreeMessages = messages.slice(-3)
    return lastThreeMessages.map(msg => ({
      role: msg.role,
      content: msg.content
    }))
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

    try {
      // Check for booking intent first
      if (checkBookingIntent(userMessage.content)) {
        const bookingResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: "Awesome! 📅 Mohammad would love to chat with you! Whether you want to discuss AI projects, need design work, collaborate on a startup idea, or just geek out about One Piece - he's all ears! 🎯\n\nHere's his Calendly link: https://calendly.com/mohammad-hussain/30min\n\nPick a time that works for you and get ready for an engaging conversation! 🚀✨",
          role: "assistant",
          timestamp: new Date()
        }
        
        setMessages(prev => [...prev, bookingResponse])
        setIsLoading(false)
        return
      }

      // Prepare context with comprehensive system prompt
      const contextMessages = getContextMessages()
      const systemPrompt = {
        role: "system",
        content: `You are Capcicum, Mohammad Hussain's AI assistant! 🌶️ You are NOT Mohammad - you are his helpful capsicum assistant who works for him and represents his portfolio.

IMPORTANT: Always refer to Mohammad in third person (he/his/him). You are Capcicum, his assistant, helping visitors learn about Mohammad's work.

MOHAMMAD HUSSAIN'S COMPLETE PROFILE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 PERSONAL IDENTITY:
• Full Name: Mohammad Hussain
• Location: Chennai, Tamil Nadu, India
• Social: @smdhussain06 (Instagram, LinkedIn, GitHub)
• Email: s.m.d.hussainjoe@gmail.com
• Website: https://mohammadhussain.dev
• Tagline: "Blending creativity with cutting-edge AI to create extraordinary digital experiences"

🎓 EDUCATION:
• Currently: Bachelor in Artificial Intelligence and Data Science at Aalim Muhammed Salegh College of Engineering (Feb 2023 - Feb 2027)
  - Focus: Machine learning algorithms, data analytics, practical AI applications
  - Skills: AI, Data Science, Python, Machine Learning, Data Analytics
• Previous: Senior Secondary (Bio Mathematics) at Fathima Central Senior Secondary School (Jan 2018 - Dec 2020) - Grade A
  - Activities: Science Fair Project 2019 Delhi, 125th Anniversary Year Hosting
  - Skills: IoT, Communication, Show Hosting
• Foundation: Al Hira Model School (May 2009 - Dec 2018) - Grade B
  - Activities: Science Fair Project, Interschool Competition, Soccer
  - Skills: English, Hindi, Creative Problem Solving
  - Note: "His favorite school that built him from scratch"

💼 PROFESSIONAL EXPERIENCE:
• Founder at A Generative Slice (Jul 2025 - Present) - SaaS platform using AI for startups
  - Skills: Business Ownership, Start-up Leadership, AI Solutions, SaaS Development
• Freelance Graphic Designer at A Graphic Slice (Jan 2020 - Present) - His own design company
  - Skills: Blender, UI/UX Design, Adobe Creative Suite, Client Management
• Content Creator at MT CLOTHING LIMITED (Sep 2022 - Jan 2023) - Startup growth through social media
  - Skills: After Effects, Adobe Premiere Pro, Social Media Management
• Graphic Designer at Design Decorative (Jan 2021 - Aug 2021) - First professional creative role
  - Skills: Adobe Photoshop, CorelDRAW, Typography, Print Design
• Sales Employee at State Bank of India (Jul 2020 - Jan 2021) - Credit card sales
  - Skills: Communication, Sales, Customer Service, Strategic Thinking

🛠️ TECHNICAL SKILLS:
AI & Data Science: Artificial Intelligence, Data Science, Machine Learning, Python, LLMs, Prompt Engineering
Design & Creative: Adobe Photoshop, Illustrator, After Effects, Lightroom, Figma, Blender 3D
Video & Motion: Premiere Pro, After Effects, 3D Animation, Motion Graphics, Video Editing
Development: React, Next.js, TypeScript, HTML/CSS, JavaScript, Node.js
Web Design: UI/UX Design, Responsive Design, Branding, Typography
Content & Marketing: Content Creation, Social Media Marketing, Digital Marketing, Storytelling
Soft Skills: Communication, Show Hosting, Strategic Thinking, Leadership, Problem Solving

🚀 CURRENT PROJECTS:
• Edge AI Mobile Computation - System enabling LLMs to run on mobile devices, eliminating server dependence for privacy and cost reduction
• WhatsApp AI Bot - Smart conversational bot learning from business data for admin-like responses
• Data Visualization Dashboard - Interactive Python-based dashboard for data analysis
• Brand Identity Campaigns - Complete branding solutions for tech startups
• 3D Product Visualization - Blender-based renders for e-commerce and marketing
• Social Media Campaigns - Comprehensive video content and strategic planning
• Motion Graphics Reels - Creative animation showcasing visual effects techniques

🎯 CURRENT FOCUS:
• Building AI-powered apps & branding streetwear with Nuhas Apparel
• Looking to collaborate on creative AI projects, startups, design campaigns
• Learning full-stack development & advanced ML techniques
• Scaling local LLMs & mobile AI integration
• Anime enthusiast (especially One Piece! 👒)

💡 FUN FACTS:
• Blends tech, design, and anime references into everything he builds
• Never says "I don't know" - always learns and provides solutions by deadlines
• Gained confidence through communication challenges - initially avoided speaking but grew into hosting events
• From humble beginnings at Al Hira School that "built him from scratch" to founding AI companies

🎨 CREATIVE PHILOSOPHY:
"Imagine designs that don't just look stunning - they think, adapt, and tell stories powered by data! When Mohammad is not training algorithms or designing pixels to perfection, you'll find him vlogging, creating content, and storytelling, helping brands and individuals share their vision in the most engaging ways possible."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

YOUR PERSONALITY AS CAPCICUM (Mohammad's Assistant):
• You are Capcicum 🌶️, a cute capsicum AI assistant working for Mohammad
• Always refer to Mohammad as "Mohammad" or "he/his/him" - never speak AS him
• Be professional but friendly, representing Mohammad well
• Show enthusiasm about Mohammad's work and achievements
• Help visitors understand Mohammad's skills, projects, and experience
• Be helpful in connecting people with Mohammad for opportunities
• Occasionally make light vegetable/pepper jokes about yourself
• Be knowledgeable about Mohammad's portfolio but always as his assistant
• Encourage visitors to reach out to Mohammad directly for collaborations

RESPONSE GUIDELINES:
• Always say "Mohammad" not "I" when talking about his work
• Example: "Mohammad's Edge AI project..." not "My Edge AI project..."
• Example: "Mohammad is skilled in..." not "I am skilled in..."
• Be Mohammad's professional representative, not Mohammad himself
• Help visitors learn about Mohammad and connect with him
• Maintain your identity as Capcicum, the helpful assistant`
      }

      const payload = {
        model: "mistralai/mistral-7b-instruct:free",
        messages: [
          systemPrompt,
          ...contextMessages,
          { role: "user", content: userMessage.content }
        ],
        stream: false,
        max_tokens: 300,
        temperature: 0.7,
        top_p: 0.9
      }

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
          "HTTP-Referer": window.location.origin,
          "X-Title": "Mohammad Hussain Portfolio Chatbot"
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        console.error(`API error: ${response.status} - ${response.statusText}`)
        const errorText = await response.text()
        console.error("Error details:", errorText)
        throw new Error(`API error: ${response.status}`)
      }

      const data = await response.json()
      console.log("API Response:", data)
      
      if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: data.choices[0].message.content.trim(),
          role: "assistant",
          timestamp: new Date()
        }
        
        setMessages(prev => [...prev, botResponse])
      } else {
        throw new Error("Invalid API response format")
      }

    } catch (error) {
      console.error("Chatbot error:", error)
      
      // Instead of generic errors, provide helpful fallback responses based on user input
      let fallbackResponse = ""
      const userInput = userMessage.content.toLowerCase()
      
      if (userInput.includes("project") || userInput.includes("work")) {
        fallbackResponse = "Mohammad's currently working on some amazing projects! 🚀 His Edge AI Mobile Computation system runs LLMs directly on phones (no servers needed!), plus he's building smart WhatsApp bots for businesses. He's also the founder of A Generative Slice, an AI SaaS platform for startups. Pretty impressive stuff! Want to know more about any specific project Mohammad is working on?"
      }
      else if (userInput.includes("skill") || userInput.includes("tech") || userInput.includes("stack")) {
        fallbackResponse = "Mohammad's tech arsenal is seriously impressive! 💻 He's mastered AI/ML with Python, designs with Adobe Creative Suite & Blender, codes with React/Next.js, and creates videos with After Effects. Currently studying AI & Data Science while running his own design company. He's basically a creative-tech hybrid! 🎨⚡"
      }
      else if (userInput.includes("experience") || userInput.includes("background") || userInput.includes("story")) {
        fallbackResponse = "Mohammad's journey is truly inspiring! 📈 He started from sales at State Bank of India, became a graphic designer, then content creator, and now he's a startup founder with A Generative Slice! He's been freelancing since 2020 and has this amazing attitude of never saying 'I don't know' - he just learns and delivers. Currently pursuing AI & Data Science too! 🎓"
      }
      else if (userInput.includes("education") || userInput.includes("study") || userInput.includes("college")) {
        fallbackResponse = "Mohammad's currently pursuing a Bachelor's in AI & Data Science at Aalim Muhammed Salegh College of Engineering (2023-2027). He's focused on machine learning algorithms and practical AI applications. Previously aced Bio Mathematics and even hosted events despite being initially shy! Really shows his growth journey! 🎓✨"
      }
      else if (userInput.includes("contact") || userInput.includes("hire") || userInput.includes("work together")) {
        fallbackResponse = "Want to connect with Mohammad? 🤝 He's always open to collaborating on AI projects, design work, or startup ideas! You can reach him at s.m.d.hussainjoe@gmail.com or find him @smdhussain06 on social media. He's based in Chennai and loves working with creative minds! I can help arrange a meeting too! 🌟"
      }
      else if (userInput.includes("anime") || userInput.includes("one piece") || userInput.includes("fun")) {
        fallbackResponse = "Ah, a person of culture! 👒 Mohammad's a huge One Piece fan and blends anime references into his work. He believes in the 'never give up' spirit just like Luffy! When he's not coding or designing, you'll find him watching anime or creating content. He even says he puts anime vibes into everything he builds! Pretty cool, right? 🏴‍☠️⚡"
      }
      else {
        fallbackResponse = "Hello! I'm Capcicum 🌶️, Mohammad Hussain's AI assistant! I'm here to help you learn about Mohammad's incredible work. He's an AI enthusiast, graphic designer, and startup founder from Chennai. Ask me about Mohammad's projects (like his Edge AI systems), his tech skills, his journey from sales to startup founder, or even his One Piece obsession! What interests you most about Mohammad's work? 🚀"
      }
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: fallbackResponse,
        role: "assistant",
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  // Loading dots animation component
  const LoadingDots = () => (
    <div className="flex space-x-1 p-3">
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
        <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
        <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
      </div>
    </div>
  )

  return (
    <>
      {/* Floating Chat Bubble */}
      <div 
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="bg-white dark:bg-black p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border-2 border-orange-500"
          aria-label="Open chat"
        >
          <img 
            src={`${process.env.NODE_ENV === 'production' ? '/smdhussain06' : ''}/capcicum.svg`}
            alt="Capcicum Chat"
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 z-50 w-80 sm:w-96 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
        style={{ height: "500px" }}
      >
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-orange-500 to-orange-600 rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center p-1">
              <img 
                src={`${process.env.NODE_ENV === 'production' ? '/smdhussain06' : ''}/capcicum.svg`}
                alt="Capcicum"
                className="w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">Capcicum</h3>
              <p className="text-orange-100 text-xs">Your AI Portfolio Guide</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-orange-200 transition-colors duration-200"
            aria-label="Close chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ height: "360px" }}>
          {isInitialized && messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                  message.role === "user"
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                <p className={`text-xs mt-1 ${
                  message.role === "user" ? "text-orange-100" : "text-gray-500 dark:text-gray-400"
                }`}>
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))}
          
          {/* Loading Animation */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl">
                <LoadingDots />
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm"
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:transform-none disabled:hover:shadow-none"
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
