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
          content: "Hello! 👋 I'm Capcicum, Mohammed Hussain's AI assistant! 🌶️\n\nI'm here to help you explore Mohammed's journey as Founder & Lead AI Architect at A Generative Slice (AGS) and recent graduate with a B.Tech in Artificial Intelligence & Data Science! He architects autonomous multi-agent systems, FastMCP workspaces, and edge AI computation, all infused with 4+ years of creative mastery.\n\nWhat would you like to know about Mohammed? His enterprise AI platforms, AGS ecosystem, proprietary products, or One Piece adventures? 👒✨",
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

    // Simulate AI response delay for better UX
    setTimeout(() => {
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

      // Generate smart response based on user input
      const response = generateSmartResponse(userMessage.content)
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: "assistant",
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botResponse])
      setIsLoading(false)
    }, 1000 + Math.random() * 1000) // Random delay between 1-2 seconds for realism
  }

  // Generate intelligent responses with Capcicum's rizzy personality
  const generateSmartResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    
    // Greeting responses
    if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
      const greetings = [
        "Yo! 🌶️ Ready to dive into Mohammad's **amazing** world of AI and design? What's got you curious?",
        "Well well well! 🔥 You've found the **coolest** assistant around! What can I tell you about Mohammad's genius?",
        "Hey there, gorgeous! 😎 I'm Capcicum, and I'm here to spill all the **tea** about Mohammad's incredible work!"
      ]
      return greetings[Math.floor(Math.random() * greetings.length)]
    }

    // Projects inquiries
    if (input.includes("project") || input.includes("work") || input.includes("portfolio")) {
      const projectResponses = [
        "Oh honey, Mohammed's projects are **fire**! 🚀 From **A Generative Slice** enterprise ecosystems to **SliceInbox** FastMCP agents and **KaiPulla** Edge AI, the man is building the future!",
        "Mohammed's portfolio is **chef's kiss** 👌 11+ client enterprise deployments, 6+ proprietary AI products (SliceInbox, SliceLeads, Slice3D), and local offline AI! Which one's catching your eye?",
        "Ready to be **amazed**? 🤩 Mohammed's building autonomous multi-agent systems, OCR-powered ERPs, and headless 3D spatial engines. His work is honestly **next level**!"
      ]
      return projectResponses[Math.floor(Math.random() * projectResponses.length)]
    }

    // Skills and tech stack
    if (input.includes("skill") || input.includes("tech") || input.includes("stack") || input.includes("technology")) {
      const skillResponses = [
        "Mohammed's skills? **Absolutely stacked**! 💻 Autonomous Agents, FastMCP, Next.js, Python, Blender 3D, and Adobe motion graphics. The man's a **creative-tech powerhouse**!",
        "Babe, Mohammed's got **everything** covered! 🎯 Multi-agent systems, edge computing, full-stack AI, 3D spatial pipelines... he's the **whole package** and then some!",
        "Mohammed's tech arsenal is **insane**! 🔥 From local Ollama models on mobile Termux to high-ticket enterprise workflows, he's got skills that'll make your head spin in the **best way**!"
      ]
      return skillResponses[Math.floor(Math.random() * skillResponses.length)]
    }

    // Experience and background
    if (input.includes("experience") || input.includes("background") || input.includes("story") || input.includes("journey")) {
      const experienceResponses = [
        "Mohammed's journey? **Pure inspiration**! 📈 From State Bank sales to freelance design mastery to B.Tech graduate in AI & DS, and now Founder of **A Generative Slice (AGS)**! Talk about **glow up goals**!",
        "His story gives me **chills**! 🌟 Bank sales → graphic designer → AI systems architect & B.Tech graduate → AI venture studio founder. Mohammed's proof that **dreams plus relentless hustle** equals magic!",
        "Get this - Mohammed went from credit card sales to founding A Generative Slice and directing an engineering team! **That's what I call character development**! 🚀"
      ]
      return experienceResponses[Math.floor(Math.random() * experienceResponses.length)]
    }

    // Contact and collaboration
    if (input.includes("contact") || input.includes("hire") || input.includes("collaborate") || input.includes("work together")) {
      const contactResponses = [
        "Want to work with Mohammed? **Smart choice**! 🤝 Hit him up at s.m.d.hussainjoe@gmail.com or find him @smdhussain06. Trust me, he's **worth it**!",
        "Mohammed's always down for **amazing collaborations**! 💫 Email him or slide into those DMs @smdhussain06. Fair warning - his talent might **blow your mind**!",
        "Ready to create something **epic** together? 🔥 Mohammed's your guy! Chennai-based, globally minded, and **absolutely brilliant** to work with!"
      ]
      return contactResponses[Math.floor(Math.random() * contactResponses.length)]
    }

    // AI specific questions
    if (input.includes("ai") || input.includes("artificial intelligence") || input.includes("machine learning")) {
      const aiResponses = [
        "Mohammed + AI = **pure magic**! 🤖 FastMCP workspaces, local mobile LLMs, enterprise trading ERPs... he's actively **building** the future with A Generative Slice!",
        "AI is Mohammed's **playground**! 🧠 From on-device edge AI (KaiPulla) to autonomous B2B acquisition (SliceLeads), he's making tech more accessible and **brilliant**!",
        "Mohammed's AI work is **revolutionary**! 🚀 Running models locally, orchestrating multi-agent systems... the man's an **AI whisperer**!"
      ]
      return aiResponses[Math.floor(Math.random() * aiResponses.length)]
    }

    // Fun/personal questions
    if (input.includes("anime") || input.includes("one piece") || input.includes("fun") || input.includes("hobby")) {
      const funResponses = [
        "One Piece fan spotted! 👒 Mohammed's got that **Luffy energy** - never gives up, always adventures forward! His work has serious **anime protagonist vibes**!",
        "Mohammed puts **anime spirit** into everything he builds! 🏴‍☠️ That One Piece determination? It shows in every project. **Absolutely legendary**!",
        "A person of **culture**! 🔥 Mohammed channels that anime passion into his work - creative, determined, and always **pushing boundaries**!"
      ]
      return funResponses[Math.floor(Math.random() * funResponses.length)]
    }

    // About Capcicum
    if (input.includes("you") || input.includes("capcicum") || input.includes("who are you")) {
      const aboutResponses = [
        "I'm Capcicum! 🌶️ Mohammed's **spiciest** assistant with serious rizz! I know everything about his work and I'm here to make you **smile** while learning!",
        "Your friendly neighborhood **Capcicum**! 😎 Think of me as Mohammed's hype person - I've got all the **tea** on his amazing projects and personality!",
        "Capcicum at your service! 🔥 I'm here to show you why Mohammed's the **coolest** AI-design hybrid you'll ever meet. Ready to be **impressed**?"
      ]
      return aboutResponses[Math.floor(Math.random() * aboutResponses.length)]
    }

    // Default responses with personality
    const defaultResponses = [
      "That's **interesting**! 🌶️ Tell me more about what you'd like to know regarding Mohammed's **incredible** work!",
      "Ooh, **curious** are we? 😏 I love that energy! What specific aspect of Mohammed's journey has caught your **attention**?",
      "You've got **great taste** in questions! 🔥 Mohammed's world is full of surprises - what would you like to explore **first**?",
      "**Spicy** question! 🌶️ I'm here to help you discover all the **amazing** things about Mohammed's work. What's on your mind?",
      "Now we're **talking**! 🚀 Mohammed's got so many cool projects and skills. What's got you **most excited** to learn about?"
    ]
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  // Generate intelligent offline responses based on keywords
  const generateOfflineResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    
    // Booking intent
    if (checkBookingIntent(userInput)) {
      return "Awesome! 📅 Mohammed would love to chat with you! Whether you want to discuss enterprise AI solutions, collaborative venture ideas, or just geek out about One Piece - he's all ears! 🎯\n\nHere's his Calendly link: https://calendly.com/mohammad-hussain/30min\n\nPick a time that works for you and get ready for an engaging conversation! 🚀✨"
    }

    // Greeting responses
    if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
      return "Hey there! 👋 Great to meet you! I'm Capcicum, Mohammed's AI assistant. I'm here to help you explore Mohammed's work in enterprise AI, autonomous agents, and venture building. What would you like to know? 🌶️✨"
    }

    // Projects inquiries
    if (input.includes("project") || input.includes("work") || input.includes("portfolio")) {
      return "Mohammed's working on some amazing high-impact systems! 🚀 His standout work includes:\n\n• **A Generative Slice (AGS)** - Enterprise AI venture studio & solution suite\n• **SliceInbox** - FastMCP AI Chief of Staff triaging Zoho Mail for Litelab Milano\n• **SliceLeads** - Autonomous B2B acquisition pipeline (Playwright + Gemini 2.0)\n• **KaiPulla Edge AI** - 100% offline local LLM assistant on Android Termux & PC\n• **Project Mald & Rose Chemicals** - Multi-godown ERP & WhatsApp commerce\n\nWhich project interests you most? 🎯"
    }

    // Skills and tech stack
    if (input.includes("skill") || input.includes("tech") || input.includes("stack") || input.includes("technology")) {
      return "Mohammed's tech arsenal is seriously impressive! 💻 He's got:\n\n🤖 **AI & Autonomous Agents**: Multi-Agent Systems, FastMCP, Local LLMs (Ollama), Prompt Engineering\n🎨 **Design & 3D**: Blender 3D, Adobe Creative Suite, Procedural Spatial Computing\n💻 **Full-Stack**: Next.js 14/15, TypeScript, Python, Tailwind CSS, Supabase\n⚡ **Edge & CLI**: Android Termux, Linux, Tesseract OCR, ARM64 Optimization\n\nHe brings technical rigor together with bespoke aesthetics! What specific area interests you? ⚡"
    }

    // Experience and background
    if (input.includes("experience") || input.includes("background") || input.includes("story") || input.includes("journey")) {
      return "Mohammed's journey is truly inspiring! 📈 He started from sales at State Bank of India, mastered graphic design and 3D modeling, completed his B.Tech in AI & Data Science, and founded **A Generative Slice (AGS)**! 🚀\n\nToday he leads an expanding team delivering enterprise AI solutions across India and Europe. His growth mindset is unstoppable! 💪"
    }

    // Education
    if (input.includes("education") || input.includes("study") || input.includes("college") || input.includes("degree")) {
      return "Mohammed has successfully completed and graduated his **Bachelor of Technology (B.Tech) in Artificial Intelligence and Data Science** from Aalim Muhammed Salegh College of Engineering! 🎓✨\n\nHis academic journey culminated in advanced work with distributed multi-agent systems and edge intelligence, combining rigorous theory with real-world production engineering! 📚💡"
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
