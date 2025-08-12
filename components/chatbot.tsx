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
        "Oh honey, Mohammad's projects are **fire**! 🚀 His Edge AI runs LLMs on phones (no servers needed!), plus those WhatsApp bots are pure **genius**. Which one's catching your eye?",
        "Mohammad's portfolio is **chef's kiss** 👌 Edge AI, WhatsApp bots, A Generative Slice... the man doesn't miss! What type of project gets you excited?",
        "Ready to be **amazed**? 🤩 Mohammad's building the future with Edge AI and smart bots. His work is honestly **next level** - what interests you most?"
      ]
      return projectResponses[Math.floor(Math.random() * projectResponses.length)]
    }

    // Skills and tech stack
    if (input.includes("skill") || input.includes("tech") || input.includes("stack") || input.includes("technology")) {
      const skillResponses = [
        "Mohammad's skills? **Absolutely stacked**! 💻 AI/ML wizard, React ninja, Blender master, and design god. The man's basically a **creative-tech superhero**!",
        "Babe, Mohammad's got **everything** covered! 🎯 Python, React, AI magic, 3D artistry... he's the **whole package** and then some!",
        "Mohammad's tech arsenal is **insane**! 🔥 From AI algorithms to stunning designs, he's got skills that'll make your head spin in the **best way**!"
      ]
      return skillResponses[Math.floor(Math.random() * skillResponses.length)]
    }

    // Experience and background
    if (input.includes("experience") || input.includes("background") || input.includes("story") || input.includes("journey")) {
      const experienceResponses = [
        "Mohammad's journey? **Pure inspiration**! 📈 From sales to design to startup founder - talk about **glow up goals**! Never says 'I don't know', just learns and **delivers**!",
        "His story gives me **chills**! 🌟 Bank sales → graphic design → AI genius → startup boss. Mohammad's proof that **dreams plus hustle** equals magic!",
        "Get this - Mohammad went from State Bank sales to AI startup founder! **That's what I call character development**! 🚀 Pure determination and **never-give-up** vibes!"
      ]
      return experienceResponses[Math.floor(Math.random() * experienceResponses.length)]
    }

    // Contact and collaboration
    if (input.includes("contact") || input.includes("hire") || input.includes("collaborate") || input.includes("work together")) {
      const contactResponses = [
        "Want to work with Mohammad? **Smart choice**! 🤝 Hit him up at s.m.d.hussainjoe@gmail.com or find him @smdhussain06. Trust me, he's **worth it**!",
        "Mohammad's always down for **amazing collaborations**! 💫 Email him or slide into those DMs @smdhussain06. Fair warning - his talent might **blow your mind**!",
        "Ready to create something **epic** together? 🔥 Mohammad's your guy! Chennai-based, globally minded, and **absolutely brilliant** to work with!"
      ]
      return contactResponses[Math.floor(Math.random() * contactResponses.length)]
    }

    // AI specific questions
    if (input.includes("ai") || input.includes("artificial intelligence") || input.includes("machine learning")) {
      const aiResponses = [
        "Mohammad + AI = **pure magic**! 🤖 Edge AI, LLMs, business solutions... he's not just studying the future, he's **building** it with A Generative Slice!",
        "AI is Mohammad's **playground**! 🧠 From mobile AI to prompt engineering, he's making tech more accessible and **absolutely brilliant**. What aspect interests you?",
        "Mohammad's AI work is **revolutionary**! 🚀 Running models locally, creating smart solutions... the man's basically an **AI whisperer**!"
      ]
      return aiResponses[Math.floor(Math.random() * aiResponses.length)]
    }

    // Fun/personal questions
    if (input.includes("anime") || input.includes("one piece") || input.includes("fun") || input.includes("hobby")) {
      const funResponses = [
        "One Piece fan spotted! 👒 Mohammad's got that **Luffy energy** - never gives up, always adventures forward! His work has serious **anime protagonist vibes**!",
        "Mohammad puts **anime spirit** into everything he builds! 🏴‍☠️ That One Piece determination? It shows in every project. **Absolutely legendary**!",
        "A person of **culture**! 🔥 Mohammad channels that anime passion into his work - creative, determined, and always **pushing boundaries**!"
      ]
      return funResponses[Math.floor(Math.random() * funResponses.length)]
    }

    // About Capcicum
    if (input.includes("you") || input.includes("capcicum") || input.includes("who are you")) {
      const aboutResponses = [
        "I'm Capcicum! 🌶️ Mohammad's **spiciest** assistant with serious rizz! I know everything about his work and I'm here to make you **smile** while learning!",
        "Your friendly neighborhood **Capcicum**! 😎 Think of me as Mohammad's hype person - I've got all the **tea** on his amazing projects and personality!",
        "Capcicum at your service! 🔥 I'm here to show you why Mohammad's the **coolest** AI-design hybrid you'll ever meet. Ready to be **impressed**?"
      ]
      return aboutResponses[Math.floor(Math.random() * aboutResponses.length)]
    }

    // Default responses with personality
    const defaultResponses = [
      "That's **interesting**! 🌶️ Tell me more about what you'd like to know regarding Mohammad's **incredible** work!",
      "Ooh, **curious** are we? 😏 I love that energy! What specific aspect of Mohammad's journey has caught your **attention**?",
      "You've got **great taste** in questions! 🔥 Mohammad's world is full of surprises - what would you like to explore **first**?",
      "**Spicy** question! 🌶️ I'm here to help you discover all the **amazing** things about Mohammad's work. What's on your mind?",
      "Now we're **talking**! 🚀 Mohammad's got so many cool projects and skills. What's got you **most excited** to learn about?"
    ]
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
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
