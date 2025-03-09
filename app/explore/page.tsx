import Link from "next/link"
import Image from "next/image"
import { Filter, Search, Plus, ChevronDown, ArrowUpDown, ThumbsUp, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function ExplorePage() {
  // Arrays de categorías y estados traducidos
  const categories = [
    "Medio Ambiente",
    "Educación",
    "Salud", 
    "Economía",
    "Infraestructura", 
    "Seguridad Pública",
    "Tecnología", 
    "Agricultura"
  ]

  const statuses = ["Borrador", "En Revisión", "En Discusión", "Votación", "Aprobado", "Rechazado"]

  const proposals = [
    {
      id: 1,
      title: "Iniciativa de Energía Renovable",
      description: "Una propuesta para aumentar la producción de energía renovable en un 30% durante los próximos 5 años mediante incentivos fiscales y subvenciones.",
      category: "Medio Ambiente",
      status: "En Discusión",
      author: {
        name: "Dip. María García",
        image: "/mujer1.png",
        type: "legislator"
      },
      stats: {
        followers: 245,
        comments: 32,
        days: 2
      }
    },
    {
      id: 2,
      title: "Ley de Protección al Consumidor Digital",
      description: "Propuesta para regular el comercio electrónico y fortalecer los derechos de los consumidores en plataformas digitales, incluyendo devoluciones y garantías.",
      category: "Tecnología",
      status: "Borrador",
      author: {
        name: "Carlos Martínez",
        image: "/hombre1.png",
        type: "citizen"
      },
      stats: {
        followers: 187,
        comments: 54,
        days: 5
      }
    },
    {
      id: 3,
      title: "Reforma al Sistema de Salud Primaria",
      description: "Propuesta para ampliar la cobertura sanitaria a comunidades rurales y mejorar el acceso a medicamentos y servicios médicos esenciales.",
      category: "Salud",
      status: "Votación",
      author: {
        name: "Sen. Roberto Méndez",
        image: "/hombre2.png",
        type: "legislator"
      },
      stats: {
        followers: 312,
        comments: 78,
        days: 1
      }
    },
    {
      id: 4,
      title: "Plan Integral de Seguridad Vial",
      description: "Iniciativa para reducir accidentes de tránsito mediante la implementación de nuevas tecnologías de vigilancia y programas educativos en escuelas.",
      category: "Seguridad Pública",
      status: "En Revisión",
      author: {
        name: "Asociación Nacional de Transportistas",
        image: "/mujer2.png",
        type: "organization"
      },
      stats: {
        followers: 156,
        comments: 42,
        days: 8
      }
    },
    {
      id: 5,
      title: "Reforma al Sistema Educativo Nacional",
      description: "Iniciativa para actualizar el currículo nacional, mejorar la formación docente y modernizar la infraestructura educativa en todos los niveles.",
      category: "Educación",
      status: "Aprobado",
      author: {
        name: "Dip. Alejandra Vega",
        image: "/mujer3.png",
        type: "legislator"
      },
      stats: {
        followers: 287,
        comments: 63,
        days: 3
      }
    },
    {
      id: 6,
      title: "Plan de Desarrollo Rural Sostenible",
      description: "Propuesta para apoyar a pequeños agricultores con tecnologías sustentables, acceso a mercados y programas de financiamiento adaptados.",
      category: "Agricultura",
      status: "En Discusión",
      author: {
        name: "Juan Pérez",
        image: "/hombre4.png",
        type: "citizen"
      },
      stats: {
        followers: 203,
        comments: 47,
        days: 6
      }
    }
  ];

  return (
    <div className="min-h-screen bg-[#E1D7C1]">
      <div className="bg-[#0D3B39] text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-4">Explorar Propuestas Legislativas</h1>
              <p className="text-lg opacity-90 max-w-2xl">
                Descubre, apoya y participa en propuestas legislativas de ciudadanos y legisladores.
              </p>
            </div>
            <Button className="mt-6 md:mt-0 bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">
              <Plus className="mr-2 h-4 w-4" /> Crear Propuesta
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
                    <Input placeholder="Buscar propuestas..." className="pl-8" />
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
                  <label className="text-sm font-medium mb-1 block">Estado</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Todos los Estados" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los Estados</SelectItem>
                      {statuses.map((status) => (
                        <SelectItem key={status} value={status.toLowerCase().replace(" ", "-")}>
                          {status}
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
                  <label className="text-sm font-medium mb-1 block">Rango de Fecha</label>
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

                <Button className="w-full bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">
                  Aplicar Filtros
                </Button>
                <Button variant="outline" className="w-full">
                  Restablecer Filtros
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <h2 className="text-xl font-bold text-[#0D3B39]">Mostrando 24 propuestas</h2>
                <p className="text-sm text-gray-600">Mostrando las propuestas más recientes</p>
              </div>
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
                    <DropdownMenuItem>Más Populares</DropdownMenuItem>
                    <DropdownMenuItem>Más Discutidas</DropdownMenuItem>
                    <DropdownMenuItem>Alfabético (A-Z)</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Select defaultValue="grid">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Vista" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grid">Vista de Cuadrícula</SelectItem>
                    <SelectItem value="list">Vista de Lista</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {proposals.map((proposal) => (
                <Card key={proposal.id} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <Badge className={`
                        ${proposal.category === "Medio Ambiente" ? "bg-green-600" : 
                          proposal.category === "Tecnología" ? "bg-purple-600" :
                          proposal.category === "Salud" ? "bg-red-600" :
                          proposal.category === "Seguridad Pública" ? "bg-blue-800" :
                          proposal.category === "Educación" ? "bg-blue-600" :
                          proposal.category === "Agricultura" ? "bg-amber-700" :
                          "bg-[#C8A96A]"} hover:opacity-90 text-white`}>
                        {proposal.category}
                      </Badge>
                      <Badge variant="outline" className={`
                        ${proposal.status === "Aprobado" ? "text-green-600" : 
                          proposal.status === "Rechazado" ? "text-red-600" :
                          proposal.status === "Votación" ? "text-blue-600" :
                          proposal.status === "Borrador" ? "text-amber-600" :
                          "text-gray-500"} bg-transparent`}>
                        {proposal.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mt-3">
                      <Link href={`/proposal/${proposal.id}`} className="hover:underline">
                        {proposal.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {proposal.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-gray-500">
                    <div className="flex items-center mb-3">
                      <Image
                        src={proposal.author.image}
                        alt={`Foto de ${proposal.author.name}`}
                        width={24}
                        height={24}
                        className="rounded-full mr-2"
                      />
                      <span>
                        Propuesto por{" "}
                        <Link href="#" className="text-[#0D3B39] font-medium hover:underline">
                          {proposal.author.name}
                        </Link>
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center">
                        <ThumbsUp className="h-3 w-3 mr-1" />
                        <span>{proposal.stats.followers} seguidores</span>
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="h-3 w-3 mr-1" />
                        <span>{proposal.stats.comments} comentarios</span>
                      </div>
                      <span>hace {proposal.stats.days} día{proposal.stats.days !== 1 ? 's' : ''}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-3 border-t flex justify-between">
                    <Button variant="ghost" size="sm" className="text-[#0D3B39]">
                      <ThumbsUp className="mr-1 h-4 w-4" /> Apoyar
                    </Button>
                    <Button variant="outline" size="sm" className="text-[#0D3B39] border-[#C8A96A]">
                      Ver Detalles
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

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
          </div>
        </div>
      </div>
    </div>
  )
}

