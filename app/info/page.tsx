import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function InfoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar simplificado 140 x 140 */}
      <header className="bg-[#0D3B39] text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center gap-2">
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
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:underline">
              Iniciar Sesión
            </Link>
            <Button asChild className="bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">
              <Link href="/register">Registrarse</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section con imagen de fondo */}
      <section className="relative bg-cover bg-center min-h-[600px] flex items-center" 
         style={{ backgroundImage: 'url("/legisladores.png")' }}>
        {/* Overlay oscuro para mejorar legibilidad */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Contenido centrado */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Conectando ciudadanos con sus legisladores
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              LegisConnect es la plataforma que empodera a los ciudadanos para participar activamente 
              en el proceso legislativo, creando un puente directo con sus representantes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">
                <Link href="/register">
                  Crear cuenta <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-black hover:bg-white/20">
                Ver demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Características principales */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0D3B39]">
            ¿Por qué LegisConnect?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="bg-[#C8A96A]/20 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-[#0D3B39]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 9L13.9558 13.5662C13.5299 14.2051 12.5728 14.1455 12.2294 13.4587L11.7706 12.5413C11.4272 11.8545 10.4701 11.7949 10.0442 12.4338L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Transparencia</h3>
              <p className="text-gray-600">
                Sigue el proceso legislativo de forma transparente y monitorea las iniciativas que te importan.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="bg-[#C8A96A]/20 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-[#0D3B39]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth="2"/>
                  <path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Participación</h3>
              <p className="text-gray-600">
                Haz oír tu voz directamente ante los legisladores y contribuye a la formación de leyes.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="bg-[#C8A96A]/20 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-[#0D3B39]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 12.5L11 15.5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 3L17.5 5.5L17.5 18.5L12 21L6.5 18.5V5.5L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Rendición de Cuentas</h3>
              <p className="text-gray-600">
                Evalúa el desempeño de tus representantes y mantente informado sobre sus acciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final - Ahora con fondo kaki */}
      <section className="py-12 bg-[#C8A96A] text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#0D3B39]">¡Únete hoy a LegisConnect!</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-[#0D3B39]/90">
            Forma parte de la comunidad que está transformando la participación ciudadana en el proceso legislativo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-[#0D3B39] text-white hover:bg-[#0D3B39]/90">
              <Link href="/register">Crear cuenta</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-[#0D3B39] text-[#0D3B39] hover:bg-[#0D3B39]/10">
              <Link href="/login">Iniciar sesión</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - Ahora con fondo verde */}
      <footer className="bg-[#0D3B39] py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image src="/legisconnect-logo-symbol.png" alt="LegisConnect Logo" width={140} height={30} />
            </div>
            <div className="flex gap-6 text-sm text-white/70">
              <Link href="#" className="hover:text-white">Términos de uso</Link>
              <Link href="#" className="hover:text-white">Privacidad</Link>
              <Link href="#" className="hover:text-white">Soporte</Link>
              <Link href="#" className="hover:text-white">Contacto</Link>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-white/60">
            © {new Date().getFullYear()} LegisConnect. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}