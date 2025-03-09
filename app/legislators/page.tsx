import Image from "next/image"
import { Filter, Mail, MapPin, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LegislatorsDirectory() {
  return (
    <div className="min-h-screen bg-[#E1D7C1]">
      <div className="bg-[#0D3B39] text-white py-12">
        <div className="container">
          <h1 className="text-3xl font-bold mb-4">Legislators Directory</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Connect with your representatives and stay informed about their legislative activities.
          </p>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="mr-2 h-5 w-5" /> Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Search</label>
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                    <Input placeholder="Search legislators..." className="pl-8" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">Political Party</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Parties" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Parties</SelectItem>
                      <SelectItem value="party1">Party A</SelectItem>
                      <SelectItem value="party2">Party B</SelectItem>
                      <SelectItem value="party3">Party C</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">Region</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Regions" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Regions</SelectItem>
                      <SelectItem value="north">North</SelectItem>
                      <SelectItem value="south">South</SelectItem>
                      <SelectItem value="east">East</SelectItem>
                      <SelectItem value="west">West</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">Position</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Positions" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Positions</SelectItem>
                      <SelectItem value="senator">Senator</SelectItem>
                      <SelectItem value="representative">Representative</SelectItem>
                      <SelectItem value="governor">Governor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">Committee</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Committees" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Committees</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="health">Health</SelectItem>
                      <SelectItem value="environment">Environment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <Button className="w-full bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">Apply Filters</Button>
                <Button variant="outline" className="w-full">
                  Reset Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">Showing 12 of 48 legislators</p>
              <Select defaultValue="name-asc">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                  <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                  <SelectItem value="proposals-desc">Most Proposals</SelectItem>
                  <SelectItem value="activity-desc">Most Active</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardHeader className="pb-0">
                    <div className="flex justify-center">
                      <Image
                        src={`/placeholder.svg?height=120&width=120`}
                        alt="Legislator"
                        width={120}
                        height={120}
                        className="rounded-full border-4 border-white shadow-md"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="text-center pt-4">
                    <h3 className="text-xl font-bold">Sen. Maria Garcia</h3>
                    <div className="flex justify-center gap-2 mt-1">
                      <Badge className="bg-[#C8A96A] hover:bg-[#BF9C5A]">Party A</Badge>
                      <Badge variant="outline">Senator</Badge>
                    </div>
                    <div className="flex items-center justify-center mt-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>District 5, Baja California</span>
                    </div>
                    <p className="mt-4 text-sm text-gray-600 line-clamp-3">
                      Focused on environmental protection, education reform, and healthcare access. Currently serving
                      her second term.
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2">
                    <div className="grid grid-cols-2 w-full gap-2 text-center text-xs">
                      <div className="bg-[#0D3B39]/5 p-2 rounded">
                        <p className="font-bold text-[#0D3B39]">12</p>
                        <p className="text-gray-500">Proposals</p>
                      </div>
                      <div className="bg-[#0D3B39]/5 p-2 rounded">
                        <p className="font-bold text-[#0D3B39]">85%</p>
                        <p className="text-gray-500">Attendance</p>
                      </div>
                    </div>
                    <div className="flex gap-2 w-full">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Mail className="h-4 w-4 mr-1" /> Contact
                      </Button>
                      <Button className="flex-1 bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">View Profile</Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="outline" className="mx-auto">
                Load More Legislators
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

