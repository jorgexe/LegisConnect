"use client"

import Link from "next/link"
import Image from "next/image" // Add this import
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MainNav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0D3B39] text-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center">
            {/* Replace text with logo image */}
            <Image
              src="/legisconnect-logo-nobg.png" 
              alt="LegisConnect Logo"
              width={140}
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/explore"
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#C8A96A]",
                pathname === "/explore" ? "text-white" : "text-white/70",
              )}
            >
              Explora Propuestas
            </Link>
            <Link
              href="/legislators"
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#C8A96A]",
                pathname === "/legislators" ? "text-white" : "text-white/70",
              )}
            >
              Legisladores
            </Link>
            <Link
              href="/forums"
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#C8A96A]",
                pathname === "/forums" ? "text-white" : "text-white/70",
              )}
            >
              Foros
            </Link>
            <Link
              href="/transparency"
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#C8A96A]",
                pathname === "/transparency" ? "text-white" : "text-white/70",
              )}
            >
              Transparencia
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex gap-2">
            <Link href="/login">
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Iniciar Sesión
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">Regístrate</Button>
            </Link>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden bg-transparent border-white/20">
                <Menu className="h-5 w-5 text-white" />
                <span className="sr-only">Alternar menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0D3B39] text-white">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/explore" className="text-sm font-medium transition-colors hover:text-[#C8A96A]">
                  Explora Propuestas
                </Link>
                <Link href="/legislators" className="text-sm font-medium transition-colors hover:text-[#C8A96A]">
                  Legisladores
                </Link>
                <Link href="/forums" className="text-sm font-medium transition-colors hover:text-[#C8A96A]">
                  Foros
                </Link>
                <Link href="/transparency" className="text-sm font-medium transition-colors hover:text-[#C8A96A]">
                  Transparencia
                </Link>
                <div className="flex flex-col gap-2 mt-4">
                  <Link href="/login" className="w-full">
                    <Button
                      variant="outline"
                      className="bg-transparent text-white border-white hover:bg-white/10 w-full"
                    >
                      Iniciar Sesión
                    </Button>
                  </Link>
                  <Link href="/register" className="w-full">
                    <Button className="bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A] w-full">Regístrate</Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

