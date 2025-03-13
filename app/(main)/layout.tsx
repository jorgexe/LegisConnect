import type React from "react"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { ChatbotAssistant } from "@/components/chatbot-assistant"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-background">
        <MainNav />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      
      {/* El chatbot se coloca fuera del flujo principal pero dentro de ThemeProvider */}
      <ChatbotAssistant />
    </>
  )
}