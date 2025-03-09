import Link from "next/link"
import Image from "next/image"
import { Filter, Search, Plus, MessageSquare, Users, Clock, Eye, ArrowUpDown, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function ForumsPage() {
  // Categorías de muestra para filtrado
  const categories = [
    "Medio Ambiente",
    "Educación",
    "Salud",
    "Economía",
    "Infraestructura",
    "Seguridad Pública",
    "Tecnología",
    "Agricultura",
  ]

  // Temas del foro de muestra
  const forumTopics = [
    {
      id: 1,
      title: "Legislación sobre Cambio Climático: ¿Qué está funcionando?",
      category: "Medio Ambiente",
      author: "María García",
      authorType: "Legislador",
      replies: 42,
      views: 1250,
      lastActivity: "hace 2 horas",
      isHot: true,
    },
    {
      id: 2,
      title: "Prioridades del Presupuesto Educativo para 2023",
      category: "Educación",
      author: "Juan Pérez",
      authorType: "Ciudadano",
      replies: 28,
      views: 876,
      lastActivity: "hace 5 horas",
      isHot: false,
    },
    {
      id: 3,
      title: "Acceso a la Salud en Comunidades Rurales",
      category: "Salud",
      author: "Dra. Laura Jiménez",
      authorType: "Organización",
      replies: 35,
      views: 1120,
      lastActivity: "hace 1 día",
      isHot: true,
    },
    {
      id: 4,
      title: "Debate sobre la Ampliación del Transporte Público",
      category: "Infraestructura",
      author: "Carlos Rodríguez",
      authorType: "Ciudadano",
      replies: 19,
      views: 645,
      lastActivity: "hace 2 días",
      isHot: false,
    },
    {
      id: 5,
      title: "Propuestas de Reforma Fiscal: Pros y Contras",
      category: "Economía",
      author: "Sen. Roberto Chen",
      authorType: "Legislador",
      replies: 56,
      views: 1890,
      lastActivity: "hace 6 horas",
      isHot: true,
    },
    {
      id: 6,
      title: "Discusión sobre Legislación de Privacidad Digital",
      category: "Tecnología",
      author: "Coalición por los Derechos Digitales",
      authorType: "Organización",
      replies: 31,
      views: 980,
      lastActivity: "hace 3 días",
      isHot: false,
    },
  ]

  return (
    <div className="min-h-screen bg-[#E1D7C1]">
      <div className="bg-[#0D3B39] text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-4">Foros de Debate</h1>
              <p className="text-lg opacity-90 max-w-2xl">
                Participa en discusiones significativas sobre temas y propuestas legislativas.
              </p>
            </div>
            <Button className="mt-6 md:mt-0 bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">
              <Plus className="mr-2 h-4 w-4" /> Crear Nuevo Tema
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="mr-2 h-5 w-5" /> Filtros
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Buscar</label>
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                    <Input placeholder="Buscar en foros..." className="pl-8" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">Categoría</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Todas las Categorías" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas las Categorías</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category.toLowerCase()}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">Tipo de Autor</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Todos los Autores" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los Autores</SelectItem>
                      <SelectItem value="citizen">Ciudadanos</SelectItem>
                      <SelectItem value="legislator">Legisladores</SelectItem>
                      <SelectItem value="organization">Organizaciones</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">Período de Tiempo</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Cualquier Momento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Cualquier Momento</SelectItem>
                      <SelectItem value="today">Hoy</SelectItem>
                      <SelectItem value="this-week">Esta Semana</SelectItem>
                      <SelectItem value="this-month">Este Mes</SelectItem>
                      <SelectItem value="this-year">Este Año</SelectItem>
                      </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div className="space-y-2">
                  <label className="text-sm font-medium mb-1 block">Etiquetas Populares</label>
                  <div className="flex flex-wrap gap-2">
                    {["Clima", "Educación", "Reforma Fiscal", "Salud", "Transporte"].map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="cursor-pointer hover:bg-[#C8A96A]/10 hover:border-[#C8A96A]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator />

                <Button className="w-full bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">Aplicar Filtros</Button>
                <Button variant="outline" className="w-full">
                  Reiniciar Filtros
                </Button>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Estadísticas del Foro</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Total de Temas:</span>
                  <span className="font-medium">1,245</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Total de Publicaciones:</span>
                  <span className="font-medium">24,689</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Usuarios Activos:</span>
                  <span className="font-medium">3,782</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Temas Hoy:</span>
                  <span className="font-medium">42</span>
                </div>

                <Separator />

                <div>
                  <h4 className="text-sm font-medium mb-2">Principales Contribuyentes</h4>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Image
                          src={`/placeholder.svg?height=32&width=32`}
                          alt="Usuario"
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                        <div>
                          <p className="text-sm font-medium">Nombre Usuario {i}</p>
                          <p className="text-xs text-gray-500">{150 - i * 30} publicaciones</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Tabs defaultValue="all">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <TabsList>
                  <TabsTrigger value="all">Todos los Temas</TabsTrigger>
                  <TabsTrigger value="hot">Temas Destacados</TabsTrigger>
                  <TabsTrigger value="unanswered">Sin Respuestas</TabsTrigger>
                  <TabsTrigger value="my-topics">Mis Temas</TabsTrigger>
                </TabsList>

                <div className="flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="flex items-center">
                        <ArrowUpDown className="mr-2 h-4 w-4" />
                        Ordenar por
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Más Recientes</DropdownMenuItem>
                      <DropdownMenuItem>Más Respuestas</DropdownMenuItem>
                      <DropdownMenuItem>Más Vistos</DropdownMenuItem>
                      <DropdownMenuItem>Alfabético (A-Z)</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <TabsContent value="all" className="mt-0">
                <Card>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      {forumTopics.map((topic) => (
                        <div key={topic.id} className="p-4 hover:bg-gray-50">
                          <div className="flex items-start gap-4">
                            <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0D3B39]/10">
                              <MessageSquare className="h-5 w-5 text-[#0D3B39]" />
                            </div>
                            <div className="flex-1 space-y-1">
                              <div className="flex items-center gap-2">
                                <Badge className="bg-[#C8A96A] hover:bg-[#BF9C5A]">{topic.category}</Badge>
                                {topic.isHot && (
                                  <Badge variant="outline" className="text-red-500 border-red-200 bg-red-50">
                                    Destacado
                                  </Badge>
                                )}
                              </div>
                              <Link href={`/forums/topic/${topic.id}`} className="block">
                                <h3 className="text-lg font-medium hover:text-[#0D3B39] hover:underline">
                                  {topic.title}
                                </h3>
                              </Link>
                              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
                                <div className="flex items-center gap-1">
                                  <Users className="h-4 w-4" />
                                  <span>
                                    Iniciado por{" "}
                                    <Link href="#" className="font-medium text-[#0D3B39] hover:underline">
                                      {topic.author}
                                    </Link>{" "}
                                    <Badge variant="outline" className="text-xs">
                                      {topic.authorType}
                                    </Badge>
                                  </span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MessageSquare className="h-4 w-4" />
                                  <span>{topic.replies} respuestas</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Eye className="h-4 w-4" />
                                  <span>{topic.views} vistas</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  <span>Última respuesta {topic.lastActivity}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Pagination className="mt-8">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </TabsContent>

              <TabsContent value="hot" className="mt-0">
                <Card>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      {forumTopics
                        .filter((topic) => topic.isHot)
                        .map((topic) => (
                          <div key={topic.id} className="p-4 hover:bg-gray-50">
                            <div className="flex items-start gap-4">
                              <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0D3B39]/10">
                                <MessageSquare className="h-5 w-5 text-[#0D3B39]" />
                              </div>
                              <div className="flex-1 space-y-1">
                                <div className="flex items-center gap-2">
                                  <Badge className="bg-[#C8A96A] hover:bg-[#BF9C5A]">{topic.category}</Badge>
                                  <Badge variant="outline" className="text-red-500 border-red-200 bg-red-50">
                                    Destacado
                                  </Badge>
                                </div>
                                <Link href={`/forums/topic/${topic.id}`} className="block">
                                  <h3 className="text-lg font-medium hover:text-[#0D3B39] hover:underline">
                                    {topic.title}
                                  </h3>
                                </Link>
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
                                  <div className="flex items-center gap-1">
                                    <Users className="h-4 w-4" />
                                    <span>
                                      Iniciado por{" "}
                                      <Link href="#" className="font-medium text-[#0D3B39] hover:underline">
                                        {topic.author}
                                      </Link>{" "}
                                      <Badge variant="outline" className="text-xs">
                                        {topic.authorType}
                                      </Badge>
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MessageSquare className="h-4 w-4" />
                                    <span>{topic.replies} respuestas</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Eye className="h-4 w-4" />
                                    <span>{topic.views} vistas</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    <span>Última respuesta {topic.lastActivity}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="unanswered" className="mt-0">
                <Card className="p-8 text-center">
                  <CardDescription>
                    No hay temas sin respuestas en este momento. Vuelve más tarde o sé el primero en crear un nuevo tema.
                  </CardDescription>
                </Card>
              </TabsContent>

              <TabsContent value="my-topics" className="mt-0">
                <Card className="p-8 text-center">
                  <CardDescription>
                    Aún no has creado ningún tema. Inicia una discusión haciendo clic en el botón "Crear Nuevo Tema".
                  </CardDescription>
                  <Button className="mt-4 bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">
                    <Plus className="mr-2 h-4 w-4" /> Crear Nuevo Tema
                  </Button>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

