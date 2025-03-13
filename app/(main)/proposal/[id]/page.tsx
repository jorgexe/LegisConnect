"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  ChevronRight,
  Clock,
  Download,
  Eye,
  MessageSquare,
  Share2,
  ThumbsDown,
  ThumbsUp,
  User,
  FileText,
  Loader2,
  AlertCircle,
  Bell
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

export default function ProposalDetail() {
  const [statusRequestOpen, setStatusRequestOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null)
  
  const handleOpenStatusRequest = (title: string) => {
    setSelectedEvent(title)
    setStatusRequestOpen(true)
  }
  
  const handleSubmitStatusRequest = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío de solicitud
    setTimeout(() => {
      setIsSubmitting(false)
      setStatusRequestOpen(false)
      setShowSuccess(true)
      
      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-[#E1D7C1]">
      <div className="container py-8">
        <div className="mb-6">
          <Link href="/explore" className="text-[#0D3B39] hover:underline flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Propuestas
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="pb-3 border-b">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className="bg-[#C8A96A] hover:bg-[#BF9C5A]">Medio Ambiente</Badge>
                  <Badge variant="outline" className="text-[#0D3B39] border-[#0D3B39]">
                    En Progreso
                  </Badge>
                </div>
                <CardTitle className="text-2xl md:text-3xl">Iniciativa de Energía Renovable</CardTitle>
                <CardDescription className="text-base mt-2">
                  Una propuesta para aumentar la producción de energía renovable en un 30% durante los próximos 5 años mediante incentivos fiscales
                  y subvenciones.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <Tabs defaultValue="details">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="details">Detalles</TabsTrigger>
                    <TabsTrigger value="discussion">Discusión</TabsTrigger>
                    <TabsTrigger value="timeline">Cronología</TabsTrigger>
                  </TabsList>

                  <TabsContent value="details" className="mt-6">
                    <div className="prose max-w-none">
                      <h3>Descripción General</h3>
                      <p>
                        Esta propuesta busca aumentar significativamente la producción de energía renovable en todo el país mediante
                        incentivos fiscales específicos para empresas y subvenciones para instituciones de investigación. La
                        iniciativa busca reducir las emisiones de carbono mientras crea nuevos empleos en el sector de energía verde.
                      </p>

                      <h3>Objetivos Clave</h3>
                      <ul>
                        <li>Aumentar la producción de energía renovable en un 30% en 5 años</li>
                        <li>Crear 50,000 nuevos empleos en el sector de energía renovable</li>
                        <li>Reducir las emisiones de carbono en un 15% respecto a los niveles actuales</li>
                        <li>Establecer 10 nuevos centros de investigación centrados en la innovación de energía renovable</li>
                      </ul>

                      <h3>Estrategia de Implementación</h3>
                      <p>
                        La implementación se realizará en fases durante 5 años, con enfoque inicial en establecer el marco
                        de incentivos fiscales y el proceso de solicitud de subvenciones. Las fases posteriores incluirán monitoreo
                        del progreso, ajuste de incentivos según sea necesario y evaluación del impacto ambiental y económico.
                      </p>

                      <h3>Implicaciones Presupuestarias</h3>
                      <p>
                        El costo estimado de esta iniciativa es de $2.5 mil millones durante 5 años, con retornos esperados
                        a través de un aumento en la recaudación fiscal por nuevos empleos y negocios, así como reducción en costos de salud
                        asociados con la contaminación.
                      </p>

                      <h3>Documentos de Apoyo</h3>
                      <div className="flex flex-col gap-2 not-prose">
                        <Button variant="outline" className="justify-start">
                          <Download className="mr-2 h-4 w-4" />
                          Documento Completo de la Propuesta (PDF)
                        </Button>
                        <Button variant="outline" className="justify-start">
                          <Download className="mr-2 h-4 w-4" />
                          Análisis de Impacto Económico (PDF)
                        </Button>
                        <Button variant="outline" className="justify-start">
                          <Download className="mr-2 h-4 w-4" />
                          Evaluación Ambiental (PDF)
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="discussion" className="mt-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-bold">Discusión (24 comentarios)</h3>
                      <Button className="bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">Añadir Comentario</Button>
                    </div>

                    <div className="space-y-6">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="border-b pb-6 last:border-0">
                          <div className="flex gap-4">
                            <Avatar>
                              <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt="Usuario" />
                              <AvatarFallback>UN</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <div>
                                  <p className="font-medium">Nombre Usuario {i}</p>
                                  <p className="text-xs text-gray-500">Ciudadano • hace 3 días</p>
                                </div>
                                <div className="flex gap-2">
                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <ThumbsUp className="h-4 w-4" />
                                  </Button>
                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <ThumbsDown className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                              <div className="mt-2">
                                <p>
                                  Apoyo firmemente esta iniciativa. La energía renovable es crucial para nuestro futuro, y
                                  los beneficios económicos descritos en esta propuesta son convincentes. Sin embargo, me gustaría
                                  ver detalles más específicos sobre cómo las comunidades rurales se beneficiarán de esta
                                  iniciativa.
                                </p>
                              </div>
                              <div className="mt-3 flex gap-2">
                                <Button variant="outline" size="sm">
                                  <MessageSquare className="mr-1 h-3 w-3" /> Responder
                                </Button>
                              </div>

                              {/* Respuesta anidada */}
                              {i === 1 && (
                                <div className="mt-4 ml-6 pt-4 border-t">
                                  <div className="flex gap-4">
                                    <Avatar>
                                      <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt="Legislador" />
                                      <AvatarFallback>LV</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                      <div className="flex justify-between items-start">
                                        <div>
                                          <p className="font-medium">Dip. María García</p>
                                          <p className="text-xs text-gray-500">Legisladora • hace 2 días</p>
                                        </div>
                                        <div className="flex gap-2">
                                          <Button variant="ghost" size="icon" className="h-8 w-8">
                                            <ThumbsUp className="h-4 w-4" />
                                          </Button>
                                          <Button variant="ghost" size="icon" className="h-8 w-8">
                                            <ThumbsDown className="h-4 w-4" />
                                          </Button>
                                        </div>
                                      </div>
                                      <div className="mt-2">
                                        <p>
                                          Gracias por su apoyo y comentarios. Actualmente estamos trabajando en
                                          disposiciones adicionales específicamente para comunidades rurales, incluyendo subvenciones dirigidas
                                          a proyectos de energía renovable agrícola y mejoras de infraestructura.
                                        </p>
                                      </div>
                                      <div className="mt-3 flex gap-2">
                                        <Button variant="outline" size="sm">
                                          <MessageSquare className="mr-1 h-3 w-3" /> Responder
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 text-center">
                      <Button variant="outline">Cargar Más Comentarios</Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="timeline" className="mt-6">
                    <div className="relative border-l-2 border-[#0D3B39] pl-6 ml-4 space-y-8">
                      {[
                        { date: "15 Ene, 2023", title: "Propuesta Enviada", status: "Completado" },
                        { date: "3 Feb, 2023", title: "Revisión Inicial", status: "Completado" },
                        { date: "10 Mar, 2023", title: "Período de Comentarios Públicos", status: "Completado" },
                        { date: "5 Abr, 2023", title: "Audiencia en Comité", status: "En Progreso" },
                        { date: "20 May, 2023", title: "Votación en Pleno", status: "Pendiente" },
                        { date: "15 Jun, 2023", title: "Aprobación Final", status: "Pendiente" },
                      ].map((event, i) => (
                        <div key={i} className="relative">
                          <div className="absolute -left-[30px] h-6 w-6 rounded-full bg-[#0D3B39] flex items-center justify-center">
                            {event.status === "Completado" ? (
                              <div className="h-3 w-3 rounded-full bg-[#C8A96A]" />
                            ) : event.status === "En Progreso" ? (
                              <div className="h-3 w-3 rounded-full bg-white animate-pulse" />
                            ) : (
                              <div className="h-3 w-3 rounded-full bg-gray-300" />
                            )}
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">{event.date}</p>
                            <h4 className="font-bold">{event.title}</h4>
                            {event.status === "En Progreso" ? (
                              <Badge
                                className="bg-[#C8A96A] hover:bg-[#BF9C5A] cursor-pointer"
                                onClick={() => handleOpenStatusRequest(event.title)}
                              >
                                {event.status}
                              </Badge>
                            ) : (
                              <Badge
                                className={
                                  event.status === "Completado"
                                    ? "bg-green-500"
                                    : "bg-gray-400"
                                }
                              >
                                {event.status}
                              </Badge>
                            )}
                            {event.status === "En Progreso" && (
                              <div className="mt-2 text-sm">
                                <p>
                                  La propuesta está siendo revisada actualmente por el Comité de Energía y Medio Ambiente. Una
                                  audiencia pública está programada para el 12 de abril de 2023.
                                </p>
                                <Button 
                                  variant="link" 
                                  className="p-0 mt-2 h-auto text-[#0D3B39] hover:text-[#0D3B39]/80 font-medium"
                                  onClick={() => handleOpenStatusRequest(event.title)}
                                >
                                  Solicitar más información →
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Información de la Propuesta</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Propuesta por</p>
                      <Link href="#" className="font-medium text-[#0D3B39] hover:underline">
                        Dip. María García
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Enviada el</p>
                      <p className="font-medium">15 de enero de 2023</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Última actualización</p>
                      <p className="font-medium">10 de marzo de 2023</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Eye className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Vistas</p>
                      <p className="font-medium">1,245</p>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <p className="text-sm text-gray-500 mb-2">Apoya esta propuesta</p>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">
                        <ThumbsUp className="mr-2 h-4 w-4" /> Apoyar (245)
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <ThumbsDown className="mr-2 h-4 w-4" /> Oponerse (32)
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <p className="text-sm text-gray-500 mb-2">Comparte esta propuesta</p>
                    <Button variant="outline" className="w-full">
                      <Share2 className="mr-2 h-4 w-4" /> Compartir
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Propuestas Relacionadas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <Link href="#" key={i} className="block">
                      <div className="flex items-start gap-3 group">
                        <div className="bg-[#0D3B39]/10 rounded p-2 group-hover:bg-[#0D3B39]/20">
                          <FileText className="h-4 w-4 text-[#0D3B39]" />
                        </div>
                        <div>
                          <p className="font-medium group-hover:text-[#0D3B39]">Extensión de Crédito Fiscal para Paneles Solares</p>
                          <p className="text-xs text-gray-500">Enviada hace 2 meses</p>
                        </div>
                        <ChevronRight className="ml-auto h-4 w-4 text-gray-400 group-hover:text-[#0D3B39]" />
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Modal de solicitud de estado */}
      <Dialog open={statusRequestOpen} onOpenChange={setStatusRequestOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Solicitar actualización de estado</DialogTitle>
            <DialogDescription>
              {selectedEvent && `Solicitar más información sobre la etapa "${selectedEvent}"`}
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmitStatusRequest} className="space-y-4">
            <div>
              <label htmlFor="reason" className="block text-sm font-medium mb-1">
                Motivo de la solicitud
              </label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione un motivo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="update">Actualización general</SelectItem>
                  <SelectItem value="progress">Información sobre avances</SelectItem>
                  <SelectItem value="timeline">Cambios en cronograma</SelectItem>
                  <SelectItem value="concerns">Dudas específicas</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Mensaje (opcional)
              </label>
              <Textarea 
                id="message"
                placeholder="Detalle su solicitud o incluya preguntas específicas"
                rows={4}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="notification" defaultChecked />
              <label htmlFor="notification" className="text-sm">
                Recibir notificaciones sobre actualizaciones de esta propuesta
              </label>
            </div>
            
            <DialogFooter>
              <Button 
                variant="outline" 
                type="button"
                onClick={() => setStatusRequestOpen(false)}
                disabled={isSubmitting}
              >
                Cancelar
              </Button>
              <Button 
                type="submit" 
                className="bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'Enviar solicitud'
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      
      {/* Mensaje de éxito */}
      {showSuccess && (
        <div className="fixed bottom-6 right-6 max-w-sm">
          <Alert className="bg-green-50 border-green-500">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Bell className="h-5 w-5 text-green-600" />
                </div>
              </div>
              <div className="ml-3">
                <AlertTitle className="text-green-800 font-semibold">
                  Solicitud enviada con éxito
                </AlertTitle>
                <AlertDescription className="text-green-700 mt-1 text-sm">
                  Recibirás una notificación cuando se actualice el estado de esta propuesta.
                </AlertDescription>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="ml-auto -mt-1 text-gray-500" 
                onClick={() => setShowSuccess(false)}
              >
                ×
              </Button>
            </div>
          </Alert>
        </div>
      )}
    </div>
  )
}

