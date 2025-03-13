"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, User, Settings, LogOut, Search, Users, MessageSquare, FileText, Compass } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function MainNav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0D3B39] text-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center">
            <Image
              src="/legisconnect-logo-symbol.png" 
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
                "text-sm font-medium transition-colors flex items-center gap-2 px-3 py-2 rounded-md",
                pathname === "/explore" 
                  ? "bg-[#C8A96A]/20 text-white border-b-2 border-[#C8A96A]" 
                  : "text-white/70 hover:text-[#C8A96A] hover:bg-[#C8A96A]/10"
              )}
            >
              <Compass className="h-4 w-4" />
              Explora Propuestas
            </Link>
            <Link
              href="/legislators"
              className={cn(
                "text-sm font-medium transition-colors flex items-center gap-2 px-3 py-2 rounded-md",
                pathname === "/legislators" 
                  ? "bg-[#C8A96A]/20 text-white border-b-2 border-[#C8A96A]" 
                  : "text-white/70 hover:text-[#C8A96A] hover:bg-[#C8A96A]/10"
              )}
            >
              <Users className="h-4 w-4" />
              Legisladores
            </Link>
            <Link
              href="/forums"
              className={cn(
                "text-sm font-medium transition-colors flex items-center gap-2 px-3 py-2 rounded-md",
                pathname === "/forums" 
                  ? "bg-[#C8A96A]/20 text-white border-b-2 border-[#C8A96A]" 
                  : "text-white/70 hover:text-[#C8A96A] hover:bg-[#C8A96A]/10"
              )}
            >
              <MessageSquare className="h-4 w-4" />
              Foros
            </Link>
            <Link
              href="/transparency"
              className={cn(
                "text-sm font-medium transition-colors flex items-center gap-2 px-3 py-2 rounded-md",
                pathname === "/transparency" 
                  ? "bg-[#C8A96A]/20 text-white border-b-2 border-[#C8A96A]" 
                  : "text-white/70 hover:text-[#C8A96A] hover:bg-[#C8A96A]/10"
              )}
            >
              <FileText className="h-4 w-4" />
              Transparencia
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="p-0 hover:bg-transparent flex items-center gap-2">
                  <Avatar className="h-9 w-9 border-2 border-[#C8A96A]">
                    <AvatarImage src="/hombre3.png" alt="Juan López" />
                    <AvatarFallback className="bg-[#C8A96A] text-[#0D3B39]">JL</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">Juan López</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <Link href="/dashboard">
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Mi Perfil</span>
                  </DropdownMenuItem>
                </Link>
                <Link href="/dashboard/settings">
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Configuración</span>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Cerrar Sesión</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden bg-transparent border-white/20">
                <Menu className="h-5 w-5 text-white" />
                <span className="sr-only">Alternar menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0D3B39] text-white">
              <div className="flex items-center gap-3 mb-8 mt-4">
                <Avatar className="h-10 w-10 border-2 border-[#C8A96A]">
                  <AvatarImage src="/placeholder-user.jpg" alt="Juan López" />
                  <AvatarFallback className="bg-[#C8A96A] text-[#0D3B39]">JL</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Juan López</p>
                  <p className="text-xs text-gray-300">Ciudadano</p>
                </div>
              </div>
              <nav className="flex flex-col gap-4">
                <Link href="/explore" className={cn(
                  "text-sm font-medium transition-colors flex items-center gap-2 px-3 py-2 rounded-md",
                  pathname === "/explore" 
                    ? "bg-[#C8A96A]/20 text-white border-l-2 border-[#C8A96A]" 
                    : "text-white/70 hover:text-[#C8A96A] hover:bg-[#C8A96A]/10"
                )}>
                  <Compass className="h-4 w-4" />
                  Explora Propuestas
                </Link>
                <Link href="/legislators" className={cn(
                  "text-sm font-medium transition-colors flex items-center gap-2 px-3 py-2 rounded-md",
                  pathname === "/legislators" 
                    ? "bg-[#C8A96A]/20 text-white border-l-2 border-[#C8A96A]" 
                    : "text-white/70 hover:text-[#C8A96A] hover:bg-[#C8A96A]/10"
                )}>
                  <Users className="h-4 w-4" />
                  Legisladores
                </Link>
                <Link href="/forums" className={cn(
                  "text-sm font-medium transition-colors flex items-center gap-2 px-3 py-2 rounded-md",
                  pathname === "/forums" 
                    ? "bg-[#C8A96A]/20 text-white border-l-2 border-[#C8A96A]" 
                    : "text-white/70 hover:text-[#C8A96A] hover:bg-[#C8A96A]/10"
                )}>
                  <MessageSquare className="h-4 w-4" />
                  Foros
                </Link>
                <Link href="/transparency" className={cn(
                  "text-sm font-medium transition-colors flex items-center gap-2 px-3 py-2 rounded-md",
                  pathname === "/transparency" 
                    ? "bg-[#C8A96A]/20 text-white border-l-2 border-[#C8A96A]" 
                    : "text-white/70 hover:text-[#C8A96A] hover:bg-[#C8A96A]/10"
                )}>
                  <FileText className="h-4 w-4" />
                  Transparencia
                </Link>
                <div className="flex flex-col gap-2 mt-4">
                  <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-[#C8A96A] flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Mi Perfil
                  </Link>
                  <Link href="/dashboard/settings" className="text-sm font-medium transition-colors hover:text-[#C8A96A] flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    Configuración
                  </Link>
                  <Button variant="ghost" className="justify-start p-0 hover:bg-transparent text-sm font-medium text-white/70 hover:text-[#C8A96A] flex items-center gap-2">
                    <LogOut className="h-4 w-4" />
                    Cerrar Sesión
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

