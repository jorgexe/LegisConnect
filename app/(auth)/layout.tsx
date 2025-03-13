import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthNavbar } from "@/components/auth-navbar"
import "../globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "LegisConnect - Autenticación",
  description: "Inicia sesión o regístrate en LegisConnect",
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen flex-col bg-[#E1D7C1]">
            {/* Usar el componente AuthNavbar */}
            <AuthNavbar />
            
            {/* Contenido principal */}
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}