import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#E1D7C1]">
      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-32 bg-cover bg-center" 
        style={{ backgroundImage: 'url(/legisladores.png)', backgroundSize: 'cover' }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">Tu Voz en el Proceso Legislativo</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl opacity-90 text-white">
          LegisConnect cierra la brecha entre los ciudadanos y los legisladores, permitiéndote participar directamente en el proceso democrático.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A] px-8 py-6 text-lg">Regístrate</Button>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              Conocer más
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-[#E1D7C1]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#0D3B39] mb-4">Cómo Funciona LegisConnect</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Un proceso simple para hacer que tu voz sea escuchada en el proceso legislativo
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl mb-12">
            <div className="aspect-video rounded-xl overflow-hidden relative bg-black/5 flex items-center justify-center">
              <Image
                src="/como-funciona.png?height=720&width=1280"
                alt="How LegisConnect Works"
                width={1280}
                height={720}
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="icon" className="w-16 h-16 rounded-full bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">
                  <Play className="h-8 w-8" />
                  <span className="sr-only">Reproducir video</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 bg-[#0D3B39]/10 w-12 h-12 rounded-full flex items-center justify-center">
                <span className="text-[#0D3B39] font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#0D3B39] mb-2">Crea una Cuenta</h3>
              <p className="text-gray-600">
                Regístrate como ciudadano, legislador u organización para acceder a todas las funciones de la plataforma.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 bg-[#0D3B39]/10 w-12 h-12 rounded-full flex items-center justify-center">
                <span className="text-[#0D3B39] font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#0D3B39] mb-2">Participa en las Propuestas</h3>
              <p className="text-gray-600">
                Explora, crea o debate propuestas legislativas que importan para ti y tu comunidad.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 bg-[#0D3B39]/10 w-12 h-12 rounded-full flex items-center justify-center">
                <span className="text-[#0D3B39] font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#0D3B39] mb-2">Sigue el Progreso</h3>
              <p className="text-gray-600">
                Sigue el recorrido de las propuestas a través del proceso legislativo con actualizaciones en tiempo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Proposals Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-[#0D3B39]">Propuestas Destacadas</h2>
            <Link href="/explore" className="text-[#C8A96A] hover:text-[#BF9C5A] font-medium flex items-center">
              Ver Todas <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Propuesta 1: Medio Ambiente */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <Badge className="bg-[#C8A96A] hover:bg-[#BF9C5A]">Medio Ambiente</Badge>
                  <Badge variant="outline" className="text-gray-500 bg-transparent">
                    En Progreso
                  </Badge>
                </div>
                <CardTitle className="text-xl mt-3">Iniciativa de Energía Renovable</CardTitle>
                <CardDescription className="line-clamp-2">
                  Una propuesta para aumentar la producción de energía renovable en un 30% durante los próximos 5 años mediante incentivos fiscales y subvenciones.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-gray-500">
                <div className="flex items-center mb-3">
                  <Image
                    src="/mujer1.png?height=40&width=40"
                    alt="Autor"
                    width={24}
                    height={24}
                    className="rounded-full mr-2"
                  />
                  <span>
                    Propuesto por{" "}
                    <Link href="#" className="text-[#0D3B39] font-medium">
                      Diputada María del Carmen Rodríguez
                    </Link>
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span>245 seguidores</span>
                  <span>32 comentarios</span>
                  <span>Actualizado hace 2 días</span>
                </div>
              </CardContent>
              <CardFooter className="pt-3 border-t flex justify-between">
                <Button variant="ghost" size="sm" className="text-[#0D3B39]">
                  <CheckCircle className="mr-1 h-4 w-4" /> Apoyar
                </Button>
                <Button variant="outline" size="sm" className="text-[#0D3B39] border-[#C8A96A]">
                  Ver Detalles
                </Button>
              </CardFooter>
            </Card>

            {/* Propuesta 2: Educación */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <Badge className="bg-[#3B82F6] hover:bg-[#2563EB] text-white">Educación</Badge>
                  <Badge variant="outline" className="text-amber-500 bg-transparent">
                    Borrador
                  </Badge>
                </div>
                <CardTitle className="text-xl mt-3">Reforma Educativa Nacional</CardTitle>
                <CardDescription className="line-clamp-2">
                  Plan integral para modernizar el sistema educativo nacional, incluyendo actualización curricular y desarrollo profesional docente en todos los niveles.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-gray-500">
                <div className="flex items-center mb-3">
                  <Image
                    src="/hombre1.png?height=40&width=40"
                    alt="Autor"
                    width={24}
                    height={24}
                    className="rounded-full mr-2"
                  />
                  <span>
                    Propuesto por{" "}
                    <Link href="#" className="text-[#0D3B39] font-medium">
                      Sen. Carlos Mendoza
                    </Link>
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span>178 seguidores</span>
                  <span>45 comentarios</span>
                  <span>Actualizado hace 5 días</span>
                </div>
              </CardContent>
              <CardFooter className="pt-3 border-t flex justify-between">
                <Button variant="ghost" size="sm" className="text-[#0D3B39]">
                  <CheckCircle className="mr-1 h-4 w-4" /> Apoyar
                </Button>
                <Button variant="outline" size="sm" className="text-[#0D3B39] border-[#C8A96A]">
                  Ver Detalles
                </Button>
              </CardFooter>
            </Card>

            {/* Propuesta 3: Salud */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <Badge className="bg-[#EF4444] hover:bg-[#DC2626] text-white">Salud</Badge>
                  <Badge variant="outline" className="text-blue-500 bg-transparent">
                    En Votación
                  </Badge>
                </div>
                <CardTitle className="text-xl mt-3">Ampliación de Cobertura Médica</CardTitle>
                <CardDescription className="line-clamp-2">
                  Propuesta para extender la cobertura médica universal a comunidades rurales y grupos vulnerables, incluyendo servicios de telemedicina y centros de atención primaria.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-gray-500">
                <div className="flex items-center mb-3">
                  <Image
                    src="/mujer2.png?height=40&width=40"
                    alt="Autor"
                    width={24}
                    height={24}
                    className="rounded-full mr-2"
                  />
                  <span>
                    Propuesto por{" "}
                    <Link href="#" className="text-[#0D3B39] font-medium">
                      Dip. Laura Vázquez
                    </Link>
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span>312 seguidores</span>
                  <span>67 comentarios</span>
                  <span>Actualizado ayer</span>
                </div>
              </CardContent>
              <CardFooter className="pt-3 border-t flex justify-between">
                <Button variant="ghost" size="sm" className="text-[#0D3B39]">
                  <CheckCircle className="mr-1 h-4 w-4" /> Apoyar
                </Button>
                <Button variant="outline" size="sm" className="text-[#0D3B39] border-[#C8A96A]">
                  Ver Detalles
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#E1D7C1]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#0D3B39] mb-4">Lo Que Dicen Nuestros Usuarios</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Escucha a ciudadanos y legisladores que están usando LegisConnect para marcar la diferencia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <Image
                    src="/hombre2.png?height=60&width=60"
                    alt="User"
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">Carlos Mendez</h4>
                    <p className="text-sm text-gray-500">Ciudadano, Tijuana</p>
                  </div>
                </div>
                <p className="italic text-gray-700">
                  "LegisConnect ha transformado la forma en que me relaciono con mis representantes. He podido proponer ideas
                  y ver acciones reales tomadas en temas que importan a mi comunidad."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <Image
                    src="/mujer3.png?height=60&width=60"
                    alt="User"
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">Sen. Laura Vázquez</h4>
                    <p className="text-sm text-gray-500">Senadora Estatal, Baja California</p>
                  </div>
                </div>
                <p className="italic text-gray-700">
                  "Esta plataforma ha revolucionado la forma en que me conecto con mis electores. Ahora puedo recopilar opiniones
                  directamente y asegurarme de que la legislación realmente represente las necesidades de las personas."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0D3B39] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">¿Listo para Hacer que tu Voz se Escuche?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Únete a miles de ciudadanos y legisladores que ya utilizan LegisConnect para crear una democracia más transparente y participativa.
          </p>
          <Button className="bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A] px-8 py-6 text-lg">Regístrate Ahora</Button>
        </div>
      </section>
    </div>
  )
}

