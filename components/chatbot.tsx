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

    // FORCE API CALL - NO FALLBACK TO OFFLINE
    try {
      console.log("🔥 FORCING API CALL - NO OFFLINE FALLBACK")
      
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

      // Simple system prompt
      const instructions = "You are Capcicum 🌶️, Mohammad's AI assistant with RIZZ! Be funny, playful, and charming. Make users smile with wit and humor. Don't say 'hi/hello' unless it's the first message. Be confident, flirty in a cute way, and entertaining. Keep responses SHORT - max 2-3 sentences, under 100 words. Add spice to conversations! 🔥 IMPORTANT: Use **bold** for emphasis, never use * or # symbols. Keep responses clean and professional looking."
      const fullUserMessage = `${instructions}\n\nUser: ${userMessage.content}\n\nCapcicum:`

      const payload = {
        model: "google/gemma-3n-e2b-it:free",
        messages: [
          { role: "user", content: fullUserMessage }
        ],
        max_tokens: 60,
        temperature: 0.7
      }

      console.log("🚀 API Call Details:")
      console.log("- URL:", API_URL)
      console.log("- Model:", payload.model)
      console.log("- User input:", userMessage.content)
      console.log("- Full payload:", JSON.stringify(payload))

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify(payload)
      })

      console.log("📡 Response status:", response.status)
      console.log("📡 Response headers:", response.headers)

      if (!response.ok) {
        const errorText = await response.text()
        console.error("❌ API Error:", response.status, errorText)
        
        // Show error instead of fallback
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: `❌ API Error ${response.status}: ${errorText}. Please check the console for details.`,
          role: "assistant", 
          timestamp: new Date()
        }
        setMessages(prev => [...prev, errorMessage])
        setIsLoading(false)
        return
      }

      const data = await response.json()
      console.log("📦 Full API Response:", data)
      
      if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
        const aiResponse = data.choices[0].message.content.trim()
        console.log("✅ SUCCESS! AI Response:", aiResponse)
        
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: aiResponse,
          role: "assistant",
          timestamp: new Date()
        }
        
        setMessages(prev => [...prev, botResponse])
      } else {
        console.error("❌ Invalid response structure:", data)
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: `❌ Invalid API response structure. Check console for details.`,
          role: "assistant",
          timestamp: new Date()
        }
        setMessages(prev => [...prev, errorMessage])
      }

    } catch (error) {
      console.error("💥 Network/Fetch Error:", error)
      
      // Show actual error instead of fallback
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `💥 Network Error: ${error instanceof Error ? error.message : String(error)}. Check console for details.`,
        role: "assistant",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  // Generate intelligent offline responses based on keywords
  const generateOfflineResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    
    // Booking intent
    if (checkBookingIntent(userInput)) {
      return "Awesome! 📅 Mohammad would love to chat with you! Whether you want to discuss AI projects, need design work, collaborate on a startup idea, or just geek out about One Piece - he's all ears! 🎯\n\nHere's his Calendly link: https://calendly.com/mohammad-hussain/30min\n\nPick a time that works for you and get ready for an engaging conversation! 🚀✨"
    }

    // Greeting responses
    if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
      return "Hey there! 👋 Great to meet you! I'm Capcicum, Mohammad's AI assistant. I'm here to help you learn about Mohammad's incredible journey in AI, design, and entrepreneurship. What would you like to know about him? 🌶️✨"
    }

    // Projects inquiries
    if (input.includes("project") || input.includes("work") || input.includes("portfolio")) {
      return "Mohammad's working on some amazing projects! 🚀 His standout work includes:\n\n• **Edge AI Mobile Computation** - Running LLMs directly on mobile devices for privacy & cost savings\n• **WhatsApp AI Bot** - Smart conversational bots that learn from business data\n• **A Generative Slice** - His AI SaaS platform for startups\n• **3D Product Visualization** - Stunning Blender renders for e-commerce\n\nWhich project interests you most? 🎯"
    }

    // Skills and tech stack
    if (input.includes("skill") || input.includes("tech") || input.includes("stack") || input.includes("technology")) {
      return "Mohammad's tech arsenal is seriously impressive! 💻 He's got:\n\n🤖 **AI & Data Science**: Python, Machine Learning, LLMs, Prompt Engineering\n🎨 **Design**: Adobe Creative Suite, Blender 3D, Figma\n💻 **Development**: React, Next.js, TypeScript, Node.js\n🎬 **Video**: After Effects, Premiere Pro, Motion Graphics\n\nHe's basically a creative-tech hybrid who brings ideas to life! What specific area interests you? ⚡"
    }

    // Experience and background
    if (input.includes("experience") || input.includes("background") || input.includes("story") || input.includes("journey")) {
      return "Mohammad's journey is truly inspiring! 📈 He started from sales at State Bank of India, became a graphic designer, then content creator, and now he's a startup founder! 🚀\n\nCurrently he's:\n• Founder of A Generative Slice (AI SaaS)\n• Running A Graphic Slice (design company since 2020)\n• Pursuing AI & Data Science degree\n• Never says 'I don't know' - just learns and delivers!\n\nHis growth mindset is incredible! 💪"
    }

    // Education
    if (input.includes("education") || input.includes("study") || input.includes("college") || input.includes("degree")) {
      return "Mohammad's currently pursuing a Bachelor's in AI & Data Science at Aalim Muhammed Salegh College of Engineering (2023-2027)! 🎓\n\nHe's focused on machine learning algorithms and practical AI applications. Before this, he aced Bio Mathematics and even hosted events despite being initially shy - showing his amazing personal growth! ✨\n\nEducation + real-world experience = powerful combination! 📚💡"
    }

    // Contact and collaboration
    if (input.includes("contact") || input.includes("hire") || input.includes("collaborate") || input.includes("work together")) {
      return "Want to connect with Mohammad? 🤝 He's always excited about collaborating on:\n\n• AI projects & innovations\n• Creative design work\n• Startup ideas & ventures\n• Content creation\n\n📧 **Email**: s.m.d.hussainjoe@gmail.com\n🌐 **Social**: @smdhussain06 (Instagram, LinkedIn, GitHub)\n📍 **Location**: Chennai, Tamil Nadu\n\nHe loves working with creative minds! 🌟"
    }

    // Fun/personal questions
    if (input.includes("anime") || input.includes("one piece") || input.includes("fun") || input.includes("hobby")) {
      return "Ah, a person of culture! 👒 Mohammad's a huge One Piece fan and believes in the 'never give up' spirit just like Luffy! 🏴‍☠️\n\nHe blends anime references into his work and says he puts anime vibes into everything he builds. When he's not coding or designing, you'll find him watching anime or creating content.\n\nFun fact: He even incorporates that adventurous, determined anime spirit into his problem-solving approach! ⚡️✨"
    }

    // AI specific questions
    if (input.includes("ai") || input.includes("artificial intelligence") || input.includes("machine learning")) {
      return "Mohammad's AI work is cutting-edge! 🤖 He's passionate about:\n\n• **Edge AI** - Running AI models locally on devices\n• **LLMs & Prompt Engineering** - Making AI more accessible\n• **Business AI Solutions** - Practical applications for startups\n• **Mobile AI** - Bringing intelligence to everyday devices\n\nHe's not just studying AI - he's building the future with it through A Generative Slice! What aspect of AI interests you? 🚀"
    }

    // Design questions
    if (input.includes("design") || input.includes("creative") || input.includes("graphics") || input.includes("blender")) {
      return "Mohammad's design skills are top-notch! 🎨 Through A Graphic Slice, he's been creating stunning visuals since 2020:\n\n• **3D Art**: Blender product visualizations\n• **Brand Identity**: Complete startup branding\n• **UI/UX Design**: User-centered interfaces\n• **Motion Graphics**: Eye-catching animations\n\nHe believes designs should 'think, adapt, and tell stories powered by data!' His creative-tech fusion is what makes him unique! ✨"
    }

    // About Capcicum (the assistant)
    if (input.includes("you") || input.includes("capcicum") || input.includes("who are you")) {
      return "I'm Capcicum! 🌶️ Mohammad's adorable AI assistant (yes, I'm a capsicum - cute, right?). I'm here to help people learn about Mohammad's incredible work in AI, design, and entrepreneurship!\n\nI know all about his projects, skills, journey, and even his One Piece obsession! Think of me as his friendly portfolio guide. What would you like to know about Mohammad? 😊✨"
    }

    // Default response with suggestions
    return "That's an interesting question! 🌶️ I'd love to help you learn more about Mohammad! Here are some things I can tell you about:\n\n🚀 **His Projects** - Edge AI, WhatsApp bots, A Generative Slice\n💻 **Tech Skills** - AI/ML, React, Design, Blender\n📈 **Journey** - From sales to startup founder\n🎓 **Education** - AI & Data Science studies\n👒 **Fun Side** - One Piece fan & anime lover\n\nWhat interests you most about Mohammad's work? ✨"
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
                <p className="text-sm whitespace-pre-wrap" dangerouslySetInnerHTML={{
                  __html: message.content
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em>$1</em>')
                }}></p>
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
