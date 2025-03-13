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
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

