"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ArrowUp, Bell, Bookmark, CheckCircle, ChevronDown, FileText, MessageSquare, MoreHorizontal, PenSquare, Search, Share, ThumbsUp, TrendingUp, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("populares")

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Left Sidebar */}
      <aside className="w-64 hidden lg:block sticky top-16 h-[calc(100vh-4rem)] overflow-auto p-4 border-r">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-medium text-gray-500 text-sm">ACCESOS DIRECTOS</h3>
            <div className="space-y-1">
              <Link href="/dashboard" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" alt="JL" />
                  <AvatarFallback className="bg-[#C8A96A] text-[#0D3B39]">JL</AvatarFallback>
                </Avatar>
                <span className="font-medium">Juan López</span>
              </Link>
              <Link href="/dashboard/proposals" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
                <div className="bg-gray-200 rounded-md p-2">
                  <FileText className="h-4 w-4 text-[#0D3B39]" />
                </div>
                <span>Mis Propuestas</span>
              </Link>
              <Link href="/dashboard/forums" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
                <div className="bg-gray-200 rounded-md p-2">
                  <MessageSquare className="h-4 w-4 text-[#0D3B39]" />
                </div>
                <span>Mis Foros Activos</span>
              </Link>
              <Link href="/legislators" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
                <div className="bg-gray-200 rounded-md p-2">
                  <Users className="h-4 w-4 text-[#0D3B39]" />
                </div>
                <span>Mis Legisladores</span>
              </Link>
              <Link href="/saved" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
                <div className="bg-gray-200 rounded-md p-2">
                  <Bookmark className="h-4 w-4 text-[#0D3B39]" />
                </div>
                <span>Guardados</span>
              </Link>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium text-gray-500 text-sm">TENDENCIAS</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
                <div className="bg-[#C8A96A]/10 rounded-md p-2">
                  <TrendingUp className="h-4 w-4 text-[#0D3B39]" />
                </div>
                <div>
                  <span className="block text-sm">#ReformaEducativa</span>
                  <span className="text-xs text-gray-500">245 propuestas</span>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
                <div className="bg-[#C8A96A]/10 rounded-md p-2">
                  <TrendingUp className="h-4 w-4 text-[#0D3B39]" />
                </div>
                <div>
                  <span className="block text-sm">#TransiciónEnergética</span>
                  <span className="text-xs text-gray-500">182 propuestas</span>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
                <div className="bg-[#C8A96A]/10 rounded-md p-2">
                  <TrendingUp className="h-4 w-4 text-[#0D3B39]" />
                </div>
                <div>
                  <span className="block text-sm">#SaludRural</span>
                  <span className="text-xs text-gray-500">157 propuestas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-6">
        {/* Create Post Card */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="JL" />
                <AvatarFallback className="bg-[#C8A96A] text-[#0D3B39]">JL</AvatarFallback>
              </Avatar>
              <div className="flex-1 flex items-center">
                <Button variant="outline" className="w-full justify-start text-gray-500 bg-gray-100" asChild>
                  <Link href="/create-proposal">
                    <span>¿Qué propones hoy, Juan?</span>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex mt-4 pt-4 border-t">
              <Button variant="ghost" className="flex-1 justify-center gap-2 text-gray-600">
                <PenSquare className="h-4 w-4" />
                <span>Proponer</span>
              </Button>
              <Button variant="ghost" className="flex-1 justify-center gap-2 text-gray-600">
                <MessageSquare className="h-4 w-4" />
                <span>Debatir</span>
              </Button>
              <Button variant="ghost" className="flex-1 justify-center gap-2 text-gray-600">
                <FileText className="h-4 w-4" />
                <span>Encuesta</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Feed Filters */}
        <div className="mb-6">
          <Tabs defaultValue="para-ti" className="w-full">
            <TabsList className="bg-white w-full justify-start">
              <TabsTrigger value="para-ti" className="flex-1">Para ti</TabsTrigger>
              <TabsTrigger value="siguiendo" className="flex-1">Siguiendo</TabsTrigger>
              <TabsTrigger value="tendencias" className="flex-1">Tendencias</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-2">
              <Badge 
                variant={activeFilter === "populares" ? "default" : "outline"}
                className={activeFilter === "populares" ? "bg-[#0D3B39]" : ""}
                onClick={() => setActiveFilter("populares")}
              >
                Populares
              </Badge>
              <Badge 
                variant={activeFilter === "recientes" ? "default" : "outline"}
                className={activeFilter === "recientes" ? "bg-[#0D3B39]" : ""}
                onClick={() => setActiveFilter("recientes")}
              >
                Recientes
              </Badge>
              <Badge 
                variant={activeFilter === "votacion" ? "default" : "outline"}
                className={activeFilter === "votacion" ? "bg-[#0D3B39]" : ""}
                onClick={() => setActiveFilter("votacion")}
              >
                En Votación
              </Badge>
            </div>
            <Button variant="ghost" size="sm" className="gap-1 text-sm">
              Filtrar <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Feed Content */}
        <div className="space-y-6">
          {/* Proposal Card 1 */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/mujer1.png" alt="MR" />
                    <AvatarFallback className="bg-[#C8A96A]">MR</AvatarFallback>
                  </Avatar>
                  <div>
                    <Link href="/profile/maria-rodriguez" className="font-medium hover:underline">
                      Dip. María Rodríguez
                    </Link>
                    <p className="text-xs text-gray-500">Hace 2 horas • Público</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="text-gray-500">
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </div>
              <CardTitle className="mt-3 text-xl">Iniciativa de Energía Renovable</CardTitle>
              <CardDescription className="mt-1">
                Propongo aumentar la producción de energía renovable en un 30% durante los próximos 5 años mediante incentivos fiscales y subvenciones. Esta medida busca reducir nuestra huella de carbono y crear empleos en el sector de energía limpia.
              </CardDescription>
              <div className="flex flex-wrap gap-2 mt-3">
                <Badge className="bg-[#C8A96A] hover:bg-[#BF9C5A]">Medio Ambiente</Badge>
                <Badge variant="outline" className="text-gray-500 bg-transparent">
                  En Progreso
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <Image
                src="/energia-renovable.png"
                alt="Energía Renovable"
                width={600}
                height={400}
                className="w-full rounded-md object-cover mb-3 aspect-video"
              />
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>245 apoyos</span>
                <span>32 comentarios</span>
                <span>15 compartidos</span>
              </div>
            </CardContent>
            <CardFooter className="pt-3 border-t flex justify-between">
              <Button variant="ghost" size="sm" className="flex-1 flex gap-2">
                <ThumbsUp className="h-4 w-4" />
                <span>Apoyar</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex-1 flex gap-2">
                <MessageSquare className="h-4 w-4" />
                <span>Comentar</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex-1 flex gap-2">
                <Share className="h-4 w-4" />
                <span>Compartir</span>
              </Button>
            </CardFooter>
          </Card>

          {/* Proposal Card 2 */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/hombre1.png" alt="CM" />
                    <AvatarFallback className="bg-[#3B82F6]">CM</AvatarFallback>
                  </Avatar>
                  <div>
                    <Link href="/profile/carlos-mendoza" className="font-medium hover:underline">
                      Sen. Carlos Mendoza
                    </Link>
                    <p className="text-xs text-gray-500">Ayer • Público</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="text-gray-500">
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </div>
              <CardTitle className="mt-3 text-xl">Reforma Educativa Nacional</CardTitle>
              <CardDescription className="mt-1">
                Comparto el borrador de nuestra propuesta para modernizar el sistema educativo. Incluye actualización curricular y desarrollo profesional docente. Me encantaría recibir sus comentarios y sugerencias para mejorar esta iniciativa.
              </CardDescription>
              <div className="flex flex-wrap gap-2 mt-3">
                <Badge className="bg-[#3B82F6] hover:bg-[#2563EB] text-white">Educación</Badge>
                <Badge variant="outline" className="text-amber-500 bg-transparent">
                  Borrador
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between text-xs text-gray-500 mt-3">
                <span>178 apoyos</span>
                <span>45 comentarios</span>
                <span>8 compartidos</span>
              </div>
            </CardContent>
            <CardFooter className="pt-3 border-t flex justify-between">
              <Button variant="ghost" size="sm" className="flex-1 flex gap-2">
                <ThumbsUp className="h-4 w-4" />
                <span>Apoyar</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex-1 flex gap-2">
                <MessageSquare className="h-4 w-4" />
                <span>Comentar</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex-1 flex gap-2">
                <Share className="h-4 w-4" />
                <span>Compartir</span>
              </Button>
            </CardFooter>
          </Card>

          {/* Activity Card */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="JL" />
                    <AvatarFallback className="bg-[#C8A96A] text-[#0D3B39]">JL</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm">
                      <Link href="/profile/juan-lopez" className="font-medium hover:underline">
                        Juan López
                      </Link>{" "}
                      comentó en la propuesta{" "}
                      <Link href="/proposal/ampliacion-cobertura-medica" className="font-medium text-[#0D3B39] hover:underline">
                        Ampliación de Cobertura Médica
                      </Link>
                    </div>
                    <p className="text-xs text-gray-500">Hace 5 horas</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="text-gray-500">
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </div>
              <CardDescription className="mt-3 text-base bg-gray-50 p-3 rounded-md">
                "Creo que esta propuesta debe considerar el impacto en comunidades rurales y asegurar que los centros de salud estén equipados adecuadamente. La telemedicina es una gran idea pero necesitamos garantizar conectividad en zonas remotas."
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Proposal Card 3 */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/mujer2.png" alt="LV" />
                    <AvatarFallback className="bg-[#EF4444]">LV</AvatarFallback>
                  </Avatar>
                  <div>
                    <Link href="/profile/laura-vazquez" className="font-medium hover:underline">
                      Dip. Laura Vázquez
                    </Link>
                    <p className="text-xs text-gray-500">Hace 1 día • Público</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="text-gray-500">
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </div>
              <CardTitle className="mt-3 text-xl">Ampliación de Cobertura Médica</CardTitle>
              <CardDescription className="mt-1">
                ¡Mi propuesta para extender cobertura médica a comunidades rurales ha pasado a votación! Incluye servicios de telemedicina y centros de atención primaria. Gracias a todos por sus valiosos comentarios que ayudaron a mejorar esta iniciativa.
              </CardDescription>
              <div className="flex flex-wrap gap-2 mt-3">
                <Badge className="bg-[#EF4444] hover:bg-[#DC2626] text-white">Salud</Badge>
                <Badge variant="outline" className="text-blue-500 bg-transparent">
                  En Votación
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <Image
                src="/salud-rural.jpg"
                alt="Salud Rural"
                width={600}
                height={400}
                className="w-full rounded-md object-cover mb-3 aspect-video"
              />
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>312 apoyos</span>
                <span>67 comentarios</span>
                <span>42 compartidos</span>
              </div>
            </CardContent>
            <CardFooter className="pt-3 border-t flex justify-between">
              <Button variant="ghost" size="sm" className="flex-1 flex gap-2">
                <ThumbsUp className="h-4 w-4" />
                <span>Apoyar</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex-1 flex gap-2">
                <MessageSquare className="h-4 w-4" />
                <span>Comentar</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex-1 flex gap-2">
                <Share className="h-4 w-4" />
                <span>Compartir</span>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-80 hidden lg:block sticky top-16 h-[calc(100vh-4rem)] overflow-auto p-4 border-l">
        <div className="space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Buscar en LegisConnect" className="pl-10" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-gray-500 text-sm">PRÓXIMAS VOTACIONES</h3>
              <Button variant="ghost" size="sm" className="text-xs text-[#0D3B39]">Ver todas</Button>
            </div>
            <Card>
              <CardHeader className="p-3 pb-0">
                <CardTitle className="text-sm">Ley General del Agua</CardTitle>
                <CardDescription className="text-xs">Votación: 18 de Marzo</CardDescription>
              </CardHeader>
              <CardContent className="p-3 pt-2">
                <div className="flex justify-between text-xs">
                  <Badge variant="outline" className="text-blue-500 bg-transparent text-xs">
                    En cámaras
                  </Badge>
                  <Button variant="link" size="sm" className="text-xs p-0 h-auto text-[#0D3B39]">
                    Recordar
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="p-3 pb-0">
                <CardTitle className="text-sm">Reforma al Código Penal</CardTitle>
                <CardDescription className="text-xs">Votación: 22 de Marzo</CardDescription>
              </CardHeader>
              <CardContent className="p-3 pt-2">
                <div className="flex justify-between text-xs">
                  <Badge variant="outline" className="text-blue-500 bg-transparent text-xs">
                    En cámaras
                  </Badge>
                  <Button variant="link" size="sm" className="text-xs p-0 h-auto text-[#0D3B39]">
                    Recordar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-gray-500 text-sm">LEGISLADORES A SEGUIR</h3>
              <Button variant="ghost" size="sm" className="text-xs text-[#0D3B39]">Ver más</Button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/hombre3.png" alt="RM" />
                    <AvatarFallback>RM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Raúl Morales</p>
                    <p className="text-xs text-gray-500">Diputado Federal</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="text-xs">
                  Seguir
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/mujer4.png" alt="SS" />
                    <AvatarFallback>SS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Sofia Sánchez</p>
                    <p className="text-xs text-gray-500">Senadora</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="text-xs">
                  Seguir
                </Button>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

