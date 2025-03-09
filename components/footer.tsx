import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t bg-[#0D3B39] text-white py-8">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <h3 className="text-lg font-medium">LegisConnect</h3>
          <p className="text-sm text-white/70">
          LegisConnect cierra la brecha entre los ciudadanos y los legisladores, permitiéndote participar directamente en el proceso democrático.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-3">Enlaces Rápidos</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <Link href="/about" className="hover:text-white">
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link href="/explore" className="hover:text-white">
                Explorar Propuestas
              </Link>
            </li>
            <li>
              <Link href="/legislators" className="hover:text-white">
                Directorio de Legisladores
              </Link>
            </li>
            <li>
              <Link href="/forums" className="hover:text-white">
                Foros de Debate
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <Link href="/terms" className="hover:text-white">
                Términos de Servicio
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-white">
                Política de Cookies
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3">Contacto</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <Link href="/contact" className="hover:text-white">
                Contáctanos
              </Link>
            </li>
            <li>
              <Link href="/help" className="hover:text-white">
                Centro de Ayuda
              </Link>
            </li>
            <li>
              <Link href="/feedback" className="hover:text-white">
                Feedback
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 pt-4 border-t border-white/10 text-center text-sm text-white/50">
        <p>© {new Date().getFullYear()} LegisConnect. All rights reserved.</p>
      </div>
    </footer>
  )
}

