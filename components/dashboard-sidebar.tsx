"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart, FileText, Home, Map, MessageSquare, Settings, Users } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

export function DashboardSidebar() {
  const pathname = usePathname()

  const routes = [
    {
      title: "Panel de Control",
      icon: Home,
      href: "/dashboard",
    },
    {
      title: "Mis Propuestas",
      icon: FileText,
      href: "/dashboard/proposals",
    },
    {
      title: "Foros",
      icon: MessageSquare,
      href: "/dashboard/forums",
    },
    {
      title: "Legisladores",
      icon: Users,
      href: "/dashboard/legislators",
    },
    {
      title: "Mapa Interactivo",
      icon: Map,
      href: "/dashboard/map",
    },
    {
      title: "Estadísticas",
      icon: BarChart,
      href: "/dashboard/statistics",
    },
    {
      title: "Configuración",
      icon: Settings,
      href: "/dashboard/settings",
    },
  ]

  return (
    <SidebarProvider>
      <Sidebar className="border-r bg-white">
        <SidebarHeader className="border-b p-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl text-[#0D3B39]">LegisConnect</span>
          </Link>
        </SidebarHeader>
        <SidebarContent className="p-2">
          <SidebarMenu>
            {routes.map((route) => (
              <SidebarMenuItem key={route.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === route.href}
                  className={cn(
                    "flex items-center gap-2",
                    pathname === route.href
                      ? "bg-[#0D3B39] text-white hover:bg-[#0D3B39]/90 hover:text-white"
                      : "text-gray-600 hover:bg-[#0D3B39]/10",
                  )}
                >
                  <Link href={route.href}>
                    <route.icon className="h-5 w-5" />
                    <span>{route.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="border-t p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#0D3B39]/10 flex items-center justify-center">
              <span className="text-[#0D3B39] font-bold">JD</span>
            </div>
            <div>
              <p className="font-medium">Juan Lopez</p>
              <p className="text-xs text-gray-500">Ciudadano</p>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
}

