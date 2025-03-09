import Link from "next/link"
import { Calendar, Download, FileText, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TransparencyVotingChart } from "@/components/transparency-voting-chart"
import { TransparencySpendingChart } from "@/components/transparency-spending-chart"

export default function TransparencyPage() {
  return (
    <div className="min-h-screen bg-[#E1D7C1]">
      <div className="bg-[#0D3B39] text-white py-12">
        <div className="container">
          <h1 className="text-3xl font-bold mb-4">Transparencia Legislativa</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Accede a información detallada sobre el historial de votación de los legisladores, el gasto público y las métricas de desempeño legislativo.
          </p>
        </div>
      </div>

      <div className="container py-8">
        <Tabs defaultValue="voting" className="space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <TabsList className="bg-white">
              <TabsTrigger value="voting">Historial de Votación</TabsTrigger>
              <TabsTrigger value="spending">Gasto Público</TabsTrigger>
              <TabsTrigger value="reports">Informes</TabsTrigger>
            </TabsList>

            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
              <Input placeholder="Buscar datos de transparencia..." className="pl-8 w-full sm:w-[250px]" />
            </div>
          </div>

          {/* Pestaña de Historial de Votación */}
          <TabsContent value="voting" className="space-y-6">
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
                      <label className="text-sm font-medium mb-1 block">Legislador</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Todos los Legisladores" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todos los Legisladores</SelectItem>
                          <SelectItem value="legislator1">María García</SelectItem>
                          <SelectItem value="legislator2">Juan Martínez</SelectItem>
                          <SelectItem value="legislator3">Ana López</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Partido Político</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Todos los Partidos" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todos los Partidos</SelectItem>
                          <SelectItem value="party1">Partido A</SelectItem>
                          <SelectItem value="party2">Partido B</SelectItem>
                          <SelectItem value="party3">Partido C</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Categoría</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Todas las Categorías" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todas las Categorías</SelectItem>
                          <SelectItem value="environment">Medio Ambiente</SelectItem>
                          <SelectItem value="education">Educación</SelectItem>
                          <SelectItem value="healthcare">Salud</SelectItem>
                          <SelectItem value="economy">Economía</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Rango de Fechas</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Últimos 12 Meses" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="12months">Últimos 12 Meses</SelectItem>
                          <SelectItem value="6months">Últimos 6 Meses</SelectItem>
                          <SelectItem value="3months">Últimos 3 Meses</SelectItem>
                          <SelectItem value="1month">Último Mes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Separator />

                    <Button className="w-full bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">Aplicar Filtros</Button>
                    <Button variant="outline" className="w-full">
                      Reiniciar Filtros
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-3 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Resumen de Patrones de Votación</CardTitle>
                    <CardDescription>
                      Análisis de patrones de votación entre diferentes categorías y partidos políticos
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px]">
                      <TransparencyVotingChart />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Registros de Votación Recientes</CardTitle>
                    <CardDescription>Registros detallados de votación para propuestas legislativas recientes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Propuesta</TableHead>
                          <TableHead>Categoría</TableHead>
                          <TableHead>Fecha</TableHead>
                          <TableHead>Votos A Favor</TableHead>
                          <TableHead>Votos En Contra</TableHead>
                          <TableHead>Abstenciones</TableHead>
                          <TableHead>Resultado</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            proposal: "Iniciativa de Energía Renovable",
                            category: "Medio Ambiente",
                            date: "15 Mar, 2023",
                            votesFor: 32,
                            votesAgainst: 18,
                            abstentions: 2,
                            result: "Aprobada",
                          },
                          {
                            proposal: "Acta de Reforma Educativa",
                            category: "Educación",
                            date: "28 Feb, 2023",
                            votesFor: 28,
                            votesAgainst: 22,
                            abstentions: 2,
                            result: "Aprobada",
                          },
                          {
                            proposal: "Proyecto de Ley de Acceso a Salud",
                            category: "Salud",
                            date: "10 Feb, 2023",
                            votesFor: 25,
                            votesAgainst: 27,
                            abstentions: 0,
                            result: "Rechazada",
                          },
                          {
                            proposal: "Propuesta de Reforma Fiscal",
                            category: "Economía",
                            date: "22 Ene, 2023",
                            votesFor: 30,
                            votesAgainst: 20,
                            abstentions: 2,
                            result: "Aprobada",
                          },
                          {
                            proposal: "Fondo de Transporte Público",
                            category: "Infraestructura",
                            date: "15 Ene, 2023",
                            votesFor: 35,
                            votesAgainst: 15,
                            abstentions: 2,
                            result: "Aprobada",
                          },
                        ].map((item, i) => (
                          <TableRow key={i}>
                            <TableCell className="font-medium">
                              <Link href="#" className="text-[#0D3B39] hover:underline">
                                {item.proposal}
                              </Link>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">{item.category}</Badge>
                            </TableCell>
                            <TableCell>{item.date}</TableCell>
                            <TableCell>{item.votesFor}</TableCell>
                            <TableCell>{item.votesAgainst}</TableCell>
                            <TableCell>{item.abstentions}</TableCell>
                            <TableCell>
                              <Badge className={item.result === "Aprobada" ? "bg-green-500" : "bg-red-500"}>
                                {item.result}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Ver Todos los Registros de Votación
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Registros de Asistencia de Legisladores</CardTitle>
                    <CardDescription>Tasas de asistencia para sesiones legislativas y reuniones de comités</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Legislador</TableHead>
                          <TableHead>Partido</TableHead>
                          <TableHead>Sesiones Asistidas</TableHead>
                          <TableHead>Total de Sesiones</TableHead>
                          <TableHead>Tasa de Asistencia</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            legislator: "María García",
                            party: "Partido A",
                            attended: 45,
                            total: 48,
                            rate: "94%",
                          },
                          {
                            legislator: "Juan Martínez",
                            party: "Partido B",
                            attended: 42,
                            total: 48,
                            rate: "88%",
                          },
                          {
                            legislator: "Ana López",
                            party: "Partido A",
                            attended: 47,
                            total: 48,
                            rate: "98%",
                          },
                          {
                            legislator: "Carlos Rodríguez",
                            party: "Partido C",
                            attended: 40,
                            total: 48,
                            rate: "83%",
                          },
                          {
                            legislator: "Sofía Hernández",
                            party: "Partido B",
                            attended: 44,
                            total: 48,
                            rate: "92%",
                          },
                        ].map((item, i) => (
                          <TableRow key={i}>
                            <TableCell className="font-medium">
                              <Link href="#" className="text-[#0D3B39] hover:underline">
                                {item.legislator}
                              </Link>
                            </TableCell>
                            <TableCell>{item.party}</TableCell>
                            <TableCell>{item.attended}</TableCell>
                            <TableCell>{item.total}</TableCell>
                            <TableCell>
                              <div className="flex items-center">
                                <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                  <div className="bg-[#0D3B39] h-2.5 rounded-full" style={{ width: item.rate }}></div>
                                </div>
                                <span>{item.rate}</span>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Ver Todos los Registros de Asistencia
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Pestaña de Gasto Público */}
          <TabsContent value="spending" className="space-y-6">
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
                      <label className="text-sm font-medium mb-1 block">Categoría</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Todas las Categorías" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todas las Categorías</SelectItem>
                          <SelectItem value="education">Educación</SelectItem>
                          <SelectItem value="healthcare">Salud</SelectItem>
                          <SelectItem value="infrastructure">Infraestructura</SelectItem>
                          <SelectItem value="defense">Defensa</SelectItem>
                          <SelectItem value="social">Programas Sociales</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Año</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="2023" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2023">2023</SelectItem>
                          <SelectItem value="2022">2022</SelectItem>
                          <SelectItem value="2021">2021</SelectItem>
                          <SelectItem value="2020">2020</SelectItem>
                          <SelectItem value="2019">2019</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Región</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Todas las Regiones" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todas las Regiones</SelectItem>
                          <SelectItem value="north">Norte</SelectItem>
                          <SelectItem value="south">Sur</SelectItem>
                          <SelectItem value="east">Este</SelectItem>
                          <SelectItem value="west">Oeste</SelectItem>
                          <SelectItem value="central">Centro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Rango de Presupuesto</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Todas las Cantidades" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todas las Cantidades</SelectItem>
                          <SelectItem value="small">Menos de $1 Millón</SelectItem>
                          <SelectItem value="medium">$1-10 Millones</SelectItem>
                          <SelectItem value="large">$10-100 Millones</SelectItem>
                          <SelectItem value="xlarge">Más de $100 Millones</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Separator />

                    <Button className="w-full bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">Aplicar Filtros</Button>
                    <Button variant="outline" className="w-full">
                      Reiniciar Filtros
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-3 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Resumen de Asignación Presupuestaria</CardTitle>
                    <CardDescription>
                      Desglose del gasto público por categoría para el año fiscal actual
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px]">
                      <TransparencySpendingChart />
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-gray-500">Presupuesto Total</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$1.2 Mil Millones</div>
                      <p className="text-xs text-gray-500">Año Fiscal 2023</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-gray-500">Proyectos Aprobados</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">248</div>
                      <p className="text-xs text-gray-500">En todas las categorías</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-gray-500">Ejecución Presupuestaria</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">78%</div>
                      <p className="text-xs text-gray-500">De fondos asignados utilizados</p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Principales Proyectos de Gasto</CardTitle>
                    <CardDescription>Mayores asignaciones presupuestarias vinculadas a legislación aprobada</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Proyecto</TableHead>
                          <TableHead>Legislación Relacionada</TableHead>
                          <TableHead>Categoría</TableHead>
                          <TableHead>Presupuesto</TableHead>
                          <TableHead>Estado</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            project: "Programa de Expansión de Carreteras",
                            legislation: "Acta de Desarrollo de Infraestructura",
                            category: "Infraestructura",
                            budget: "$120 Millones",
                            status: "En Progreso",
                          },
                          {
                            project: "Modernización de Escuelas Públicas",
                            legislation: "Acta de Reforma Educativa",
                            category: "Educación",
                            budget: "$85 Millones",
                            status: "En Progreso",
                          },
                          {
                            project: "Centros de Salud Rurales",
                            legislation: "Proyecto de Ley de Acceso a Salud",
                            category: "Salud",
                            budget: "$65 Millones",
                            status: "Planificación",
                          },
                          {
                            project: "Red de Energía Renovable",
                            legislation: "Iniciativa de Energía Renovable",
                            category: "Medio Ambiente",
                            budget: "$95 Millones",
                            status: "En Progreso",
                          },
                          {
                            project: "Desarrollo de Viviendas Asequibles",
                            legislation: "Ley de Accesibilidad a la Vivienda",
                            category: "Programas Sociales",
                            budget: "$75 Millones",
                            status: "Planificación",
                          },
                        ].map((item, i) => (
                          <TableRow key={i}>
                            <TableCell className="font-medium">
                              <Link href="#" className="text-[#0D3B39] hover:underline">
                                {item.project}
                              </Link>
                            </TableCell>
                            <TableCell>
                              <Link href="#" className="hover:underline">
                                {item.legislation}
                              </Link>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">{item.category}</Badge>
                            </TableCell>
                            <TableCell>{item.budget}</TableCell>
                            <TableCell>
                              <Badge className={item.status === "En Progreso" ? "bg-[#C8A96A]" : "bg-blue-500"}>
                                {item.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Ver Todos los Proyectos
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Tendencias Presupuestarias</CardTitle>
                    <CardDescription>Comparación año tras año de asignaciones presupuestarias por categoría</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Categoría</TableHead>
                          <TableHead>2021</TableHead>
                          <TableHead>2022</TableHead>
                          <TableHead>2023</TableHead>
                          <TableHead>Cambio</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            category: "Educación",
                            y2021: "$210M",
                            y2022: "$230M",
                            y2023: "$250M",
                            change: "+8.7%",
                          },
                          {
                            category: "Salud",
                            y2021: "$180M",
                            y2022: "$195M",
                            y2023: "$220M",
                            change: "+12.8%",
                          },
                          {
                            category: "Infraestructura",
                            y2021: "$250M",
                            y2022: "$280M",
                            y2023: "$320M",
                            change: "+14.3%",
                          },
                          {
                            category: "Medio Ambiente",
                            y2021: "$90M",
                            y2022: "$120M",
                            y2023: "$150M",
                            change: "+25.0%",
                          },
                          {
                            category: "Programas Sociales",
                            y2021: "$160M",
                            y2022: "$170M",
                            y2023: "$185M",
                            change: "+8.8%",
                          },
                        ].map((item, i) => (
                          <TableRow key={i}>
                            <TableCell className="font-medium">{item.category}</TableCell>
                            <TableCell>{item.y2021}</TableCell>
                            <TableCell>{item.y2022}</TableCell>
                            <TableCell>{item.y2023}</TableCell>
                            <TableCell className="text-green-600">{item.change}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Pestaña de Informes */}
          <TabsContent value="reports" className="space-y-6">
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
                      <label className="text-sm font-medium mb-1 block">Tipo de Informe</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Todos los Tipos" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todos los Tipos</SelectItem>
                          <SelectItem value="annual">Informes Anuales</SelectItem>
                          <SelectItem value="quarterly">Informes Trimestrales</SelectItem>
                          <SelectItem value="audit">Informes de Auditoría</SelectItem>
                          <SelectItem value="performance">Informes de Desempeño</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Año</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="2023" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2023">2023</SelectItem>
                          <SelectItem value="2022">2022</SelectItem>
                          <SelectItem value="2021">2021</SelectItem>
                          <SelectItem value="2020">2020</SelectItem>
                          <SelectItem value="2019">2019</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Categoría</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Todas las Categorías" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todas las Categorías</SelectItem>
                          <SelectItem value="budget">Presupuesto y Finanzas</SelectItem>
                          <SelectItem value="legislation">Legislación</SelectItem>
                          <SelectItem value="performance">Desempeño</SelectItem>
                          <SelectItem value="compliance">Cumplimiento</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Separator />

                    <Button className="w-full bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">Aplicar Filtros</Button>
                    <Button variant="outline" className="w-full">
                      Reiniciar Filtros
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-3 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Informes Destacados</CardTitle>
                    <CardDescription>Informes de transparencia más recientes e importantes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="bg-[#0D3B39]/5 border-0">
                        <CardHeader className="pb-2">
                          <Badge className="w-fit bg-[#C8A96A] hover:bg-[#BF9C5A]">Informe Anual</Badge>
                          <CardTitle className="text-xl">Informe de Desempeño Legislativo 2023</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-sm text-gray-600 mb-4">
                            Análisis exhaustivo de actividades legislativas, patrones de votación y logros para el año fiscal 2023.
                          </p>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>Publicado: 15 May, 2023</span>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">
                            <Download className="mr-2 h-4 w-4" /> Descargar Informe
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card className="bg-[#0D3B39]/5 border-0">
                        <CardHeader className="pb-2">
                          <Badge className="w-fit bg-[#C8A96A] hover:bg-[#BF9C5A]">Informe de Auditoría</Badge>
                          <CardTitle className="text-xl">Informe de Auditoría de Gasto Público</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-sm text-gray-600 mb-4">
                            Auditoría independiente del gasto público vinculado a la legislación aprobada, con hallazgos y recomendaciones detalladas.
                          </p>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>Publicado: 3 Abr, 2023</span>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">
                            <Download className="mr-2 h-4 w-4" /> Descargar Informe
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Informes Disponibles</CardTitle>
                    <CardDescription>Explora y descarga todos los informes de transparencia</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Título del Informe</TableHead>
                          <TableHead>Tipo</TableHead>
                          <TableHead>Categoría</TableHead>
                          <TableHead>Fecha</TableHead>
                          <TableHead>Tamaño</TableHead>
                          <TableHead>Acción</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            title: "Informe de Desempeño Legislativo 2023",
                            type: "Anual",
                            category: "Desempeño",
                            date: "15 May, 2023",
                            size: "4.2 MB",
                          },
                          {
                            title: "Informe de Auditoría de Gasto Público",
                            type: "Auditoría",
                            category: "Presupuesto y Finanzas",
                            date: "3 Abr, 2023",
                            size: "3.8 MB",
                          },
                          {
                            title: "Informe de Actividad Legislativa Q1 2023",
                            type: "Trimestral",
                            category: "Legislación",
                            date: "15 Abr, 2023",
                            size: "2.5 MB",
                          },
                          {
                            title: "Revisión Anual de Cumplimiento y Ética",
                            type: "Anual",
                            category: "Cumplimiento",
                            date: "10 Mar, 2023",
                            size: "3.1 MB",
                          },
                          {
                            title: "Informe de Ejecución Presupuestaria 2022",
                            type: "Anual",
                            category: "Presupuesto y Finanzas",
                            date: "28 Feb, 2023",
                            size: "5.6 MB",
                          },
                          {
                            title: "Análisis de Asistencia y Votación de Legisladores",
                            type: "Desempeño",
                            category: "Desempeño",
                            date: "15 Feb, 2023",
                            size: "2.9 MB",
                          },
                          {
                            title: "Informe de Actividad Legislativa Q4 2022",
                            type: "Trimestral",
                            category: "Legislación",
                            date: "15 Ene, 2023",
                            size: "2.3 MB",
                          },
                        ].map((item, i) => (
                          <TableRow key={i}>
                            <TableCell className="font-medium">
                              <Link href="#" className="text-[#0D3B39] hover:underline">
                                {item.title}
                              </Link>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">{item.type}</Badge>
                            </TableCell>
                            <TableCell>{item.category}</TableCell>
                            <TableCell>{item.date}</TableCell>
                            <TableCell>{item.size}</TableCell>
                            <TableCell>
                              <Button size="sm" className="bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">
                                <Download className="mr-1 h-3 w-3" /> Descargar
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Ver Todos los Informes
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Exportaciones de Datos</CardTitle>
                    <CardDescription>Descarga datos en bruto para tu propio análisis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">Registros de Votación</CardTitle>
                            <FileText className="h-5 w-5 text-gray-500" />
                          </div>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-sm text-gray-600">
                            Conjunto de datos completo de todas las votaciones legislativas, incluyendo legislador, partido, propuesta y voto emitido.
                          </p>
                        </CardContent>
                        <CardFooter className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="mr-1 h-3 w-3" /> CSV
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="mr-1 h-3 w-3" /> JSON
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="mr-1 h-3 w-3" /> Excel
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">Datos de Presupuesto</CardTitle>
                            <FileText className="h-5 w-5 text-gray-500" />
                          </div>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-sm text-gray-600">
                            Datos detallados de asignación y gasto presupuestario por categoría, proyecto y región.
                          </p>
                        </CardContent>
                        <CardFooter className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="mr-1 h-3 w-3" /> CSV
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="mr-1 h-3 w-3" /> JSON
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="mr-1 h-3 w-3" /> Excel
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">Datos de Legisladores</CardTitle>
                            <FileText className="h-5 w-5 text-gray-500" />
                          </div>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-sm text-gray-600">
                            Datos completos sobre los legisladores, incluyendo asistencia, patrones de votación y propuestas patrocinadas.
                          </p>
                        </CardContent>
                        <CardFooter className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="mr-1 h-3 w-3" /> CSV
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="mr-1 h-3 w-3" /> JSON
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="mr-1 h-3 w-3" /> Excel
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">Datos de Propuestas</CardTitle>
                            <FileText className="h-5 w-5 text-gray-500" />
                          </div>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-sm text-gray-600">
                            Datos sobre todas las propuestas legislativas, incluyendo estado, categoría, votos y progreso de implementación.
                          </p>
                        </CardContent>
                        <CardFooter className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="mr-1 h-3 w-3" /> CSV
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="mr-1 h-3 w-3" /> JSON
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="mr-1 h-3 w-3" /> Excel
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

