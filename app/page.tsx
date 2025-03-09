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
        style={{ backgroundImage: 'url(/legisladores2.png)', backgroundSize: 'cover' }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
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
            <h2 className="text-3xl font-bold tracking-tight text-[#0D3B39] mb-4">How LegisConnect Works</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              A simple process to make your voice heard in the legislative process
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl mb-12">
            <div className="aspect-video rounded-xl overflow-hidden relative bg-black/5 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="How LegisConnect Works"
                width={1280}
                height={720}
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="icon" className="w-16 h-16 rounded-full bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">
                  <Play className="h-8 w-8" />
                  <span className="sr-only">Play video</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 bg-[#0D3B39]/10 w-12 h-12 rounded-full flex items-center justify-center">
                <span className="text-[#0D3B39] font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#0D3B39] mb-2">Create an Account</h3>
              <p className="text-gray-600">
                Sign up as a citizen, legislator, or organization to access all platform features.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 bg-[#0D3B39]/10 w-12 h-12 rounded-full flex items-center justify-center">
                <span className="text-[#0D3B39] font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#0D3B39] mb-2">Engage with Proposals</h3>
              <p className="text-gray-600">
                Browse, create, or debate legislative proposals that matter to you and your community.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 bg-[#0D3B39]/10 w-12 h-12 rounded-full flex items-center justify-center">
                <span className="text-[#0D3B39] font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#0D3B39] mb-2">Track Progress</h3>
              <p className="text-gray-600">
                Follow the journey of proposals through the legislative process with real-time updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Proposals Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-[#0D3B39]">Featured Proposals</h2>
            <Link href="/explore" className="text-[#C8A96A] hover:text-[#BF9C5A] font-medium flex items-center">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <Badge className="bg-[#C8A96A] hover:bg-[#BF9C5A]">Environment</Badge>
                    <Badge variant="outline" className="text-gray-500 bg-transparent">
                      In Progress
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mt-3">Renewable Energy Initiative {i}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    A proposal to increase renewable energy production by 30% over the next 5 years through tax
                    incentives and grants.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-gray-500">
                  <div className="flex items-center mb-3">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Author"
                      width={24}
                      height={24}
                      className="rounded-full mr-2"
                    />
                    <span>
                      Proposed by{" "}
                      <Link href="#" className="text-[#0D3B39] font-medium">
                        Rep. Maria Garcia
                      </Link>
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span>245 supporters</span>
                    <span>32 comments</span>
                    <span>Updated 2 days ago</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-3 border-t flex justify-between">
                  <Button variant="ghost" size="sm" className="text-[#0D3B39]">
                    <CheckCircle className="mr-1 h-4 w-4" /> Support
                  </Button>
                  <Button variant="outline" size="sm" className="text-[#0D3B39] border-[#C8A96A]">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#E1D7C1]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#0D3B39] mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Hear from citizens and legislators who are using LegisConnect to make a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="User"
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">Carlos Mendez</h4>
                    <p className="text-sm text-gray-500">Citizen, Tijuana</p>
                  </div>
                </div>
                <p className="italic text-gray-700">
                  "LegisConnect has transformed how I engage with my representatives. I've been able to propose ideas
                  and see real action taken on issues that matter to my community."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="User"
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">Sen. Laura Vazquez</h4>
                    <p className="text-sm text-gray-500">State Senator, Baja California</p>
                  </div>
                </div>
                <p className="italic text-gray-700">
                  "This platform has revolutionized how I connect with my constituents. I can now gather feedback
                  directly and ensure legislation truly represents the people's needs."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0D3B39] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Make Your Voice Heard?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of citizens and legislators already using LegisConnect to create a more transparent and
            participatory democracy.
          </p>
          <Button className="bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A] px-8 py-6 text-lg">Register Now</Button>
        </div>
      </section>
    </div>
  )
}

