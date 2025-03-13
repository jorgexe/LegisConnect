import Link from "next/link"
import Image from "next/image"

export function AuthNavbar() {
  return (
    <header className="border-b bg-[#0D3B39] shadow-sm">
      <div className="container flex h-16 items-center px-4 md:px-6">
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
    </header>
  )
}