import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { ChatbotAssistant } from "@/components/chatbot-assistant" // Importar el componente
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "LegisConnect",
  description: "Conectando a los ciudadanos con sus legisladores para una democracia más transparente.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen flex-col bg-background">
            <MainNav />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          
          {/* El chatbot se coloca fuera del flujo principal pero dentro de ThemeProvider */}
          <ChatbotAssistant />
        </ThemeProvider>
      </body>
    </html>
  )
}

