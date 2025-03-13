"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUp, Bell, Bookmark, Calendar, CheckCircle, ChevronDown, Eye, FileText, 
         MessageSquare, MoreHorizontal, PenSquare, Search, Share, ThumbsUp, 
         TrendingUp, Users, ImageIcon, X, Clock, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("populares")
  const [createDialogOpen, setCreateDialogOpen] = useState(false)
  const [proposalType, setProposalType] = useState("proposal")
  const [proposalData, setProposalData] = useState({
    title: "",
    content: "",
    category: "",
    image: null as File | null,
    imagePreview: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  
  const handleCreateProposal = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false)
      setCreateDialogOpen(false)
      
      // Mostrar mensaje de éxito
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)
      
      // Resetear formulario
      setProposalData({
        title: "",
        content: "",
        category: "",
        image: null,
        imagePreview: ""
      })
    }, 1500)
  }
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setProposalData({
        ...proposalData,
        image: file,
        imagePreview: URL.createObjectURL(file)
      })
    }
  }
  
  const removeImage = () => {
    if (proposalData.imagePreview) {
      URL.revokeObjectURL(proposalData.imagePreview)
    }
    setProposalData({
      ...proposalData,
      image: null,
      imagePreview: ""
    })
  }

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
                  <AvatarImage src="/hombre3.png" alt="JL" />
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
                <AvatarImage src="/hombre3.png" alt="JL" />
                <AvatarFallback className="bg-[#C8A96A] text-[#0D3B39]">JL</AvatarFallback>
              </Avatar>
              <div className="flex-1 flex items-center">
                <Button 
                  variant="outline" 
                  className="w-full justify-start text-gray-500 bg-gray-100" 
                  onClick={() => setCreateDialogOpen(true)}
                >
                  <span>¿Qué propones hoy, Juan?</span>
                </Button>
              </div>
            </div>
            <div className="flex mt-4 pt-4 border-t">
              <Button 
                variant="ghost" 
                className="flex-1 justify-center gap-2 text-gray-600"
                onClick={() => {
                  setProposalType("proposal");
                  setCreateDialogOpen(true);
                }}
              >
                <PenSquare className="h-4 w-4" />
                <span>Proponer</span>
              </Button>
              <Button 
                variant="ghost" 
                className="flex-1 justify-center gap-2 text-gray-600"
                onClick={() => {
                  setProposalType("debate");
                  setCreateDialogOpen(true);
                }}
              >
                <MessageSquare className="h-4 w-4" />
                <span>Debatir</span>
              </Button>
              <Button 
                variant="ghost" 
                className="flex-1 justify-center gap-2 text-gray-600"
                onClick={() => {
                  setProposalType("poll");
                  setCreateDialogOpen(true);
                }}
              >
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
            
            {/* Contenido de "Para ti" */}
            <TabsContent value="para-ti">
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
              
              {/* Aquí va el contenido existente de "Para ti" */}
              <div className="space-y-6 mt-6">
                {/* Contenido existente - las 3 cards actuales */}
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
            </TabsContent>
            
            {/* NUEVA SECCIÓN: Contenido de "Siguiendo" */}
            <TabsContent value="siguiendo">
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Mostrando contenido de</span>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[160px] h-8 text-xs">
                      <SelectValue placeholder="Todas las fuentes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas las fuentes</SelectItem>
                      <SelectItem value="legislators">Legisladores</SelectItem>
                      <SelectItem value="topics">Temas seguidos</SelectItem>
                      <SelectItem value="organizations">Organizaciones</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="ghost" size="sm" className="gap-1 text-sm">
                  Filtrar <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Feed de Siguiendo */}
              <div className="space-y-6 mt-6">
                {/* Actualización de estado */}
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src="/hombre3.png" alt="RM" />
                          <AvatarFallback className="bg-green-600">RM</AvatarFallback>
                        </Avatar>
                        <div>
                          <Link href="/profile/raul-morales" className="font-medium hover:underline">
                            Dip. Raúl Morales
                          </Link>
                          <p className="text-xs text-gray-500">Hace 35 minutos • Público</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="text-gray-500">
                        <MoreHorizontal className="h-5 w-5" />
                      </Button>
                    </div>
                    <CardDescription className="mt-3 text-base">
                      Hoy tuvimos una sesión muy productiva en la comisión de Infraestructura. Hemos avanzado significativamente en el proyecto de modernización de carreteras rurales que presentaré la próxima semana. ¡Atentos a las actualizaciones!
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>87 apoyos</span>
                      <span>14 comentarios</span>
                      <span>5 compartidos</span>
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
                
                {/* Evento */}
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src="/mujer4.png" alt="SS" />
                          <AvatarFallback className="bg-purple-600">SS</AvatarFallback>
                        </Avatar>
                        <div>
                          <Link href="/profile/sofia-sanchez" className="font-medium hover:underline">
                            Sen. Sofia Sánchez
                          </Link>
                          <p className="text-xs text-gray-500">Ayer • Evento</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="text-gray-500">
                        <MoreHorizontal className="h-5 w-5" />
                      </Button>
                    </div>
                    <CardTitle className="mt-3 text-xl">Foro Ciudadano: Reforma de Justicia Penal</CardTitle>
                    <CardDescription className="mt-1">
                      Los invito a participar en este foro donde discutiremos los elementos clave de la reforma judicial. Compartiremos avances legislativos y escucharemos sus inquietudes.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="bg-gray-50 p-3 rounded-md my-3 flex items-center gap-3">
                      <div className="bg-[#0D3B39]/10 h-12 w-12 rounded-md flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-[#0D3B39]" />
                      </div>
                      <div>
                        <p className="font-medium">20 de Marzo, 2025 • 17:00</p>
                        <p className="text-sm text-gray-600">Centro Cultural Legislativo, CDMX</p>
                      </div>
                      <Button className="ml-auto bg-[#0D3B39] hover:bg-[#0D3B39]/90 text-white">
                        Me interesa
                      </Button>
                    </div>
                    <Image
                      src="/foro-justicia.jpeg"
                      alt="Foro de Justicia"
                      width={600}
                      height={400}
                      className="w-full rounded-md object-cover mb-3 aspect-video"
                    />
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>145 interesados</span>
                      <span>23 comentarios</span>
                      <span>31 compartidos</span>
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
                
                {/* Logro o actualización de etapa */}
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src="/hombre1.png" alt="CM" />
                          <AvatarFallback className="bg-[#3B82F6]">CM</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-sm">
                            La propuesta de{" "}
                            <Link href="/profile/carlos-mendoza" className="font-medium hover:underline">
                              Sen. Carlos Mendoza
                            </Link>{" "}
                            ha avanzado a la etapa de votación
                          </div>
                          <p className="text-xs text-gray-500">Hace 2 días</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="text-gray-500">
                        <Bell className="h-5 w-5" />
                      </Button>
                    </div>
                    <div className="mt-3 bg-blue-50 p-4 rounded-md">
                      <div className="flex justify-between items-center">
                        <div>
                          <Link href="/proposal/mejora-infraestructura-digital" className="font-medium text-lg hover:underline text-[#0D3B39]">
                            Mejora de Infraestructura Digital Nacional
                          </Link>
                          <div className="flex flex-wrap gap-2 mt-1">
                            <Badge className="bg-blue-500 hover:bg-blue-600 text-white">Tecnología</Badge>
                            <Badge variant="outline" className="text-blue-500 bg-transparent">
                              En Votación
                            </Badge>
                          </div>
                        </div>
                        <ArrowUp className="h-10 w-10 text-green-500" />
                      </div>
                      <div className="mt-3">
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div className="h-2 bg-green-500 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                        <div className="flex justify-between mt-1 text-xs text-gray-500">
                          <span>Propuesta</span>
                          <span>Comité</span>
                          <span className="font-medium text-green-500">Votación</span>
                          <span>Implementación</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-700">
                      Esta iniciativa busca mejorar la conectividad digital en zonas rurales y urbanas marginadas, impulsando la inclusión digital.
                    </p>
                  </CardContent>
                  <CardFooter className="pt-3 border-t flex justify-between">
                    <Button variant="ghost" size="sm" className="flex-1 flex gap-2">
                      <Eye className="h-4 w-4" />
                      <span>Ver detalles</span>
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
                
                {/* Ningún contenido */}
                {false && (
                  <div className="bg-white rounded-lg p-8 text-center">
                    <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <Users className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Aún no sigues a nadie</h3>
                    <p className="text-gray-500 mb-6">
                      Sigue a legisladores y temas de tu interés para personalizar tu feed de noticias
                    </p>
                    <Button className="bg-[#0D3B39] hover:bg-[#0D3B39]/90">
                      Explorar perfiles para seguir
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
            
            {/* Contenido de "Tendencias" - se puede implementar después */}
            <TabsContent value="tendencias">
              {/* Contenido para la pestaña de tendencias */}
            </TabsContent>
          </Tabs>
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
        
        {/* Modal de Creación de Propuesta */}
        <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>
                {proposalType === "proposal" 
                  ? "Crear Nueva Propuesta" 
                  : proposalType === "debate" 
                    ? "Iniciar Debate" 
                    : "Crear Encuesta"}
              </DialogTitle>
              <DialogDescription>
                {proposalType === "proposal" 
                  ? "Comparte tu propuesta legislativa con la comunidad" 
                  : proposalType === "debate" 
                    ? "Inicia una conversación sobre un tema legislativo" 
                    : "Crea una encuesta para conocer la opinión pública"}
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleCreateProposal}>
              <div className="grid gap-4 py-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="JL" />
                    <AvatarFallback className="bg-[#C8A96A] text-[#0D3B39]">JL</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Juan López</p>
                    <Select defaultValue="public">
                      <SelectTrigger className="h-7 text-xs w-[120px] border-none px-0">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Público</SelectItem>
                        <SelectItem value="followers">Seguidores</SelectItem>
                        <SelectItem value="private">Privado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                {/* Campo de título */}
                <div>
                  <Input 
                    placeholder={
                      proposalType === "proposal" 
                        ? "Título de tu propuesta" 
                        : proposalType === "debate" 
                          ? "Tema del debate" 
                          : "Pregunta de la encuesta"
                    }
                    className="text-lg font-medium"
                    value={proposalData.title}
                    onChange={(e) => setProposalData({...proposalData, title: e.target.value})}
                    required
                  />
                </div>
                
                {/* Contenido */}
                <div>
                  <Textarea
                    placeholder={
                      proposalType === "proposal" 
                        ? "Describe tu propuesta y sus objetivos..." 
                        : proposalType === "debate" 
                          ? "Introduce el tema de debate y tu postura..." 
                          : "Proporciona más contexto sobre tu encuesta..."
                    }
                    rows={5}
                    className="resize-none"
                    value={proposalData.content}
                    onChange={(e) => setProposalData({...proposalData, content: e.target.value})}
                    required
                  />
                </div>
                
                {/* Selector de categoría */}
                <div className="grid gap-2">
                  <label className="text-sm text-gray-500">Categoría</label>
                  <Select 
                    value={proposalData.category} 
                    onValueChange={(value) => setProposalData({...proposalData, category: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="medio-ambiente">Medio Ambiente</SelectItem>
                      <SelectItem value="educacion">Educación</SelectItem>
                      <SelectItem value="salud">Salud</SelectItem>
                      <SelectItem value="economia">Economía</SelectItem>
                      <SelectItem value="seguridad">Seguridad</SelectItem>
                      <SelectItem value="tecnologia">Tecnología</SelectItem>
                      <SelectItem value="derechos">Derechos Civiles</SelectItem>
                      <SelectItem value="infraestructura">Infraestructura</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Previsualización de imagen */}
                {proposalData.imagePreview && (
                  <div className="relative mt-2">
                    <div className="relative w-full h-[200px] rounded-md overflow-hidden">
                      <Image 
                        src={proposalData.imagePreview} 
                        alt="Vista previa" 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8"
                      onClick={removeImage}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                )}
                
                {/* Encuesta (si el tipo es poll) */}
                {proposalType === "poll" && (
                  <div className="space-y-3 mt-2">
                    <p className="text-sm text-gray-500">Opciones de encuesta</p>
                    <div className="flex items-center gap-2">
                      <Input placeholder="Opción 1" className="flex-1" />
                      <Button type="button" variant="ghost" size="icon">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input placeholder="Opción 2" className="flex-1" />
                      <Button type="button" variant="ghost" size="icon">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button type="button" variant="outline" className="w-full">
                      + Agregar opción
                    </Button>
                  </div>
                )}
                
                {/* Programación (opcional) */}
                {proposalType === "proposal" && (
                  <div className="flex items-center mt-2 gap-2">
                    <Button type="button" variant="outline" className="text-sm">
                      <Clock className="mr-2 h-4 w-4" />
                      Programar publicación
                    </Button>
                  </div>
                )}
              </div>
              
              <DialogFooter className="flex justify-between items-center border-t pt-4">
                <div className="flex gap-2">
                  <label
                    htmlFor="image-upload"
                    className="cursor-pointer hover:bg-gray-100 p-2 rounded-md flex items-center gap-2 text-gray-600 text-sm"
                  >
                    <ImageIcon className="h-4 w-4" />
                    <span>Imagen</span>
                    <input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </label>
                  
                  {proposalType === "proposal" && (
                    <Button type="button" variant="ghost" className="text-sm">
                      <Upload className="mr-2 h-4 w-4" />
                      Archivo
                    </Button>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="mr-2">Publicando</span>
                      <span className="animate-spin">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      </span>
                    </>
                  ) : (
                    <>Publicar</>
                  )}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
        
        {/* Notificación de éxito */}
        {showSuccess && (
          <div className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-in slide-in-from-bottom-5 z-50">
            <CheckCircle className="h-5 w-5" />
            <div>
              <p className="font-medium">¡Publicado con éxito!</p>
              <p className="text-sm opacity-90">Tu {proposalType === "proposal" ? "propuesta" : proposalType === "debate" ? "debate" : "encuesta"} ya está visible.</p>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="ml-2 text-white hover:bg-green-700" 
              onClick={() => setShowSuccess(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
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

