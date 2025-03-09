import Image from "next/image"
import { Filter, Mail, MapPin, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LegislatorsDirectory() {
  // Datos de legisladores
  const legislators = [
    {
      name: "María García",
      prefix: "Sen.",
      gender: "female",
      image: "/mujer1.png",
      party: "MORENA",
      role: "Senadora",
      district: "Distrito 5, Baja California",
      description: "Enfocada en la protección ambiental, reforma educativa y acceso a la salud. Actualmente sirviendo su segundo término.",
      proposals: 12,
      attendance: 85
    },
    {
      name: "Carlos Mendoza",
      prefix: "Dip.",
      gender: "male",
      image: "/hombre1.png",
      party: "PAN",
      role: "Diputado",
      district: "Distrito 3, Jalisco",
      description: "Especialista en economía y finanzas públicas. Promotor de la transparencia gubernamental y la rendición de cuentas.",
      proposals: 8,
      attendance: 90
    },
    {
      name: "Alejandra Torres",
      prefix: "Sen.",
      gender: "female",
      image: "/mujer2.png",
      party: "PRI",
      role: "Senadora",
      district: "Distrito 1, Sonora",
      description: "Defensora de los derechos de las comunidades indígenas y el desarrollo rural sostenible. Ex secretaria de desarrollo social.",
      proposals: 15,
      attendance: 78
    },
    {
      name: "Roberto Sánchez",
      prefix: "Dip.",
      gender: "male",
      image: "/hombre2.png",
      party: "MC",
      role: "Diputado",
      district: "Distrito 2, Ciudad de México",
      description: "Impulsor de políticas de movilidad urbana y desarrollo metropolitano. Líder en la comisión de infraestructura.",
      proposals: 6,
      attendance: 92
    },
    {
      name: "Laura Vázquez",
      prefix: "Sen.",
      gender: "female",
      image: "/mujer3.png",
      party: "PVEM",
      role: "Senadora",
      district: "Distrito 4, Nuevo León",
      description: "Activista por la conservación de los recursos naturales y la transición energética. Presidenta de la comisión de medio ambiente.",
      proposals: 19,
      attendance: 88
    },
    {
      name: "Miguel Ángel Rojas",
      prefix: "Dip.",
      gender: "male",
      image: "/hombre3.png",
      party: "PT",
      role: "Diputado",
      district: "Distrito 7, Veracruz",
      description: "Defensor de los derechos laborales y la seguridad social. Ex dirigente sindical con amplia experiencia en negociaciones colectivas.",
      proposals: 11,
      attendance: 82
    },
    {
      name: "Patricia Hernández",
      prefix: "Dip.",
      gender: "female",
      image: "/mujer4.png",
      party: "MORENA",
      role: "Diputada",
      district: "Distrito 9, Estado de México",
      description: "Especialista en educación pública y formación docente. Impulsora de la reforma educativa inclusiva y de calidad.",
      proposals: 14,
      attendance: 95
    },
    {
      name: "Francisco Ramírez",
      prefix: "Sen.",
      gender: "male",
      image: "/hombre4.png",
      party: "PAN",
      role: "Senador",
      district: "Distrito 2, Guanajuato",
      description: "Promotor del desarrollo económico y la atracción de inversiones. Ex secretario de economía estatal y empresario.",
      proposals: 7,
      attendance: 76
    },
    {
      name: "Elena Gómez",
      prefix: "Dip.",
      gender: "female",
      image: "/mujer5.png",
      party: "PRD",
      role: "Diputada",
      district: "Distrito 6, Michoacán",
      description: "Defensora de los derechos humanos y la equidad de género. Presidenta de la comisión de igualdad de género y diversidad.",
      proposals: 16,
      attendance: 89
    }
  ];

  // Colores para los partidos políticos
  const partyColors = {
    "MORENA": "bg-[#8B0000]",
    "PAN": "bg-[#0047AB]",
    "PRI": "bg-[#006847]",
    "MC": "bg-[#FF4500]",
    "PVEM": "bg-[#008F39]",
    "PT": "bg-[#800000]",
    "PRD": "bg-[#FFFF00] text-black"
  };

  return (
    <div className="min-h-screen bg-[#E1D7C1]">
      <div className="bg-[#0D3B39] text-white py-12">
        <div className="container">
          <h1 className="text-3xl font-bold mb-4">Directorio de Legisladores</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Conéctate con tus representantes y mantente informado sobre sus actividades legislativas.
          </p>
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
                    <Input placeholder="Buscar legisladores..." className="pl-8" />
                  </div>
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
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">Cargo</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Todos los Cargos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los Cargos</SelectItem>
                      <SelectItem value="senator">Senador</SelectItem>
                      <SelectItem value="representative">Diputado</SelectItem>
                      <SelectItem value="governor">Gobernador</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">Comisión</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Todas las Comisiones" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas las Comisiones</SelectItem>
                      <SelectItem value="finance">Finanzas</SelectItem>
                      <SelectItem value="education">Educación</SelectItem>
                      <SelectItem value="health">Salud</SelectItem>
                      <SelectItem value="environment">Medio Ambiente</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <Button className="w-full bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">Aplicar Filtros</Button>
                <Button variant="outline" className="w-full">
                  Restablecer Filtros
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">Mostrando 9 de 48 legisladores</p>
              <Select defaultValue="name-asc">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name-asc">Nombre (A-Z)</SelectItem>
                  <SelectItem value="name-desc">Nombre (Z-A)</SelectItem>
                  <SelectItem value="proposals-desc">Más Propuestas</SelectItem>
                  <SelectItem value="activity-desc">Más Activos</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {legislators.map((legislator, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardHeader className="pb-0">
                    <div className="flex justify-center">
                      <div className="rounded-full border-4 border-white shadow-md h-[120px] w-[120px] relative overflow-hidden">
                        <Image
                          src={legislator.image}
                          alt={`${legislator.prefix} ${legislator.name}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center pt-4">
                    <h3 className="text-xl font-bold">{legislator.prefix} {legislator.name}</h3>
                    <div className="flex justify-center gap-2 mt-1">
                      <Badge className={`${partyColors[legislator.party] || 'bg-[#C8A96A]'} hover:opacity-90`}>
                        {legislator.party}
                      </Badge>
                      <Badge variant="outline">{legislator.role}</Badge>
                    </div>
                    <div className="flex items-center justify-center mt-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{legislator.district}</span>
                    </div>
                    <p className="mt-4 text-sm text-gray-600 line-clamp-3">
                      {legislator.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2">
                    <div className="grid grid-cols-2 w-full gap-2 text-center text-xs">
                      <div className="bg-[#0D3B39]/5 p-2 rounded">
                        <p className="font-bold text-[#0D3B39]">{legislator.proposals}</p>
                        <p className="text-gray-500">Propuestas</p>
                      </div>
                      <div className="bg-[#0D3B39]/5 p-2 rounded">
                        <p className="font-bold text-[#0D3B39]">{legislator.attendance}%</p>
                        <p className="text-gray-500">Asistencia</p>
                      </div>
                    </div>
                    <div className="flex gap-2 w-full">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Mail className="h-4 w-4 mr-1" /> Contactar
                      </Button>
                      <Button className="flex-1 bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">Ver Perfil</Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="outline" className="mx-auto">
                Cargar Más Legisladores
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

