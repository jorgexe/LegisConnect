"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Info, MapPin, Search, User, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function InteractiveMapPage() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [selectedLegislator, setSelectedLegislator] = useState<any | null>(null)

  // Sample regions data
  const regions = [
    { id: "north", name: "Northern District", color: "#4CAF50" },
    { id: "central", name: "Central District", color: "#2196F3" },
    { id: "south", name: "Southern District", color: "#FFC107" },
    { id: "east", name: "Eastern District", color: "#9C27B0" },
    { id: "west", name: "Western District", color: "#FF5722" },
  ]

  // Sample legislators data
  const legislators = {
    north: [
      {
        id: 1,
        name: "Maria Garcia",
        title: "Senator",
        party: "Party A",
        proposals: 12,
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: 2,
        name: "John Smith",
        title: "Representative",
        party: "Party B",
        proposals: 8,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    central: [
      {
        id: 3,
        name: "Robert Chen",
        title: "Senator",
        party: "Party A",
        proposals: 15,
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: 4,
        name: "Sarah Johnson",
        title: "Representative",
        party: "Party C",
        proposals: 6,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    south: [
      {
        id: 5,
        name: "Carlos Rodriguez",
        title: "Senator",
        party: "Party B",
        proposals: 9,
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: 6,
        name: "Emily Wilson",
        title: "Representative",
        party: "Party A",
        proposals: 11,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    east: [
      {
        id: 7,
        name: "David Kim",
        title: "Senator",
        party: "Party C",
        proposals: 7,
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: 8,
        name: "Lisa Martinez",
        title: "Representative",
        party: "Party B",
        proposals: 10,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    west: [
      {
        id: 9,
        name: "Michael Brown",
        title: "Senator",
        party: "Party A",
        proposals: 14,
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: 10,
        name: "Jennifer Lee",
        title: "Representative",
        party: "Party C",
        proposals: 5,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
  }

  const handleRegionClick = (regionId: string) => {
    setSelectedRegion(regionId)
    setSelectedLegislator(null)
  }

  const handleLegislatorClick = (legislator: any) => {
    setSelectedLegislator(legislator)
  }

  return (
    <div className="min-h-screen bg-[#E1D7C1]">
      <div className="bg-[#0D3B39] text-white py-12">
        <div className="container">
          <h1 className="text-3xl font-bold mb-4">Interactive Map of Legislators</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Explore legislative districts and connect with your representatives.
          </p>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Find Your District</CardTitle>
                <CardDescription>Search by address or select a region to view legislators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                  <Input placeholder="Enter your address..." className="pl-8" />
                </div>

                <Button className="w-full bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">Find My District</Button>

                <div className="text-center text-sm text-gray-500">- OR -</div>

                <div>
                  <label className="text-sm font-medium mb-1 block">Select a Region</label>
                  <Select onValueChange={handleRegionClick} value={selectedRegion || undefined}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a region" />
                    </SelectTrigger>
                    <SelectContent>
                      {regions.map((region) => (
                        <SelectItem key={region.id} value={region.id}>
                          {region.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {selectedRegion && (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>{regions.find((r) => r.id === selectedRegion)?.name} Legislators</CardTitle>
                  <CardDescription>Select a legislator to view their profile</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {legislators[selectedRegion as keyof typeof legislators].map((legislator) => (
                      <div
                        key={legislator.id}
                        className={`flex items-center gap-3 p-3 rounded-md cursor-pointer transition-colors ${
                          selectedLegislator?.id === legislator.id
                            ? "bg-[#0D3B39]/10 border border-[#0D3B39]/30"
                            : "hover:bg-gray-100 border border-transparent"
                        }`}
                        onClick={() => handleLegislatorClick(legislator)}
                      >
                        <Image
                          src={legislator.image || "/placeholder.svg"}
                          alt={legislator.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div>
                          <p className="font-medium">{legislator.name}</p>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {legislator.title}
                            </Badge>
                            <Badge className="bg-[#C8A96A] text-[#0D3B39] text-xs">{legislator.party}</Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardContent className="p-0">
                <div className="relative aspect-[16/9] bg-gray-100 rounded-md overflow-hidden">
                  {/* This would be replaced with an actual interactive map component */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full p-8 relative">
                      {/* Simplified map visualization */}
                      <svg viewBox="0 0 500 300" className="w-full h-full">
                        {/* Northern Region */}
                        <path
                          d="M50,50 L450,50 L400,100 L100,100 Z"
                          fill={selectedRegion === "north" ? regions.find((r) => r.id === "north")?.color : "#E5E7EB"}
                          stroke="#000"
                          strokeWidth="1"
                          className="cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={() => handleRegionClick("north")}
                        />

                        {/* Western Region */}
                        <path
                          d="M50,50 L100,100 L100,200 L50,250 Z"
                          fill={selectedRegion === "west" ? regions.find((r) => r.id === "west")?.color : "#E5E7EB"}
                          stroke="#000"
                          strokeWidth="1"
                          className="cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={() => handleRegionClick("west")}
                        />

                        {/* Central Region */}
                        <path
                          d="M100,100 L400,100 L400,200 L100,200 Z"
                          fill={
                            selectedRegion === "central" ? regions.find((r) => r.id === "central")?.color : "#E5E7EB"
                          }
                          stroke="#000"
                          strokeWidth="1"
                          className="cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={() => handleRegionClick("central")}
                        />

                        {/* Eastern Region */}
                        <path
                          d="M400,100 L450,50 L450,250 L400,200 Z"
                          fill={selectedRegion === "east" ? regions.find((r) => r.id === "east")?.color : "#E5E7EB"}
                          stroke="#000"
                          strokeWidth="1"
                          className="cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={() => handleRegionClick("east")}
                        />

                        {/* Southern Region */}
                        <path
                          d="M50,250 L100,200 L400,200 L450,250 Z"
                          fill={selectedRegion === "south" ? regions.find((r) => r.id === "south")?.color : "#E5E7EB"}
                          stroke="#000"
                          strokeWidth="1"
                          className="cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={() => handleRegionClick("south")}
                        />

                        {/* Region Labels */}
                        <text x="250" y="75" textAnchor="middle" fill="#000" fontSize="12">
                          Northern District
                        </text>
                        <text x="75" y="150" textAnchor="middle" fill="#000" fontSize="12">
                          Western District
                        </text>
                        <text x="250" y="150" textAnchor="middle" fill="#000" fontSize="12">
                          Central District
                        </text>
                        <text x="425" y="150" textAnchor="middle" fill="#000" fontSize="12">
                          Eastern District
                        </text>
                        <text x="250" y="225" textAnchor="middle" fill="#000" fontSize="12">
                          Southern District
                        </text>

                        {/* Map pins for legislators if a region is selected */}
                        {selectedRegion &&
                          legislators[selectedRegion as keyof typeof legislators].map((legislator, index) => {
                            // Calculate pin positions based on region
                            let x = 250
                            let y = 150

                            if (selectedRegion === "north") {
                              x = 150 + index * 200
                              y = 75
                            } else if (selectedRegion === "south") {
                              x = 150 + index * 200
                              y = 225
                            } else if (selectedRegion === "east") {
                              x = 425
                              y = 100 + index * 50
                            } else if (selectedRegion === "west") {
                              x = 75
                              y = 100 + index * 50
                            } else if (selectedRegion === "central") {
                              x = 175 + index * 150
                              y = 150
                            }

                            return (
                              <g
                                key={legislator.id}
                                className="cursor-pointer"
                                onClick={() => handleLegislatorClick(legislator)}
                              >
                                <circle
                                  cx={x}
                                  cy={y}
                                  r="8"
                                  fill={selectedLegislator?.id === legislator.id ? "#0D3B39" : "#C8A96A"}
                                  stroke="#fff"
                                  strokeWidth="2"
                                />
                                <text
                                  x={x}
                                  y={y + 20}
                                  textAnchor="middle"
                                  fill="#000"
                                  fontSize="10"
                                  fontWeight={selectedLegislator?.id === legislator.id ? "bold" : "normal"}
                                >
                                  {legislator.name.split(" ")[0]}
                                </text>
                              </g>
                            )
                          })}
                      </svg>

                      {/* Map Legend */}
                      <div className="absolute bottom-2 left-2 bg-white p-2 rounded-md shadow-sm text-xs">
                        <div className="font-medium mb-1">Legend</div>
                        <div className="flex flex-col gap-1">
                          {regions.map((region) => (
                            <div key={region.id} className="flex items-center gap-1">
                              <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: region.color }}></div>
                              <span>{region.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {!selectedRegion && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                      <div className="bg-white p-4 rounded-md shadow-md text-center max-w-xs">
                        <MapPin className="h-8 w-8 mx-auto text-[#0D3B39] mb-2" />
                        <p className="font-medium">Select a region on the map</p>
                        <p className="text-sm text-gray-500 mt-1">Click on a district to view its legislators</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {selectedLegislator ? (
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex justify-between">
                    <Badge className="bg-[#C8A96A] hover:bg-[#BF9C5A]">{selectedLegislator.party}</Badge>
                    <Badge variant="outline">{selectedLegislator.title}</Badge>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <Image
                      src={selectedLegislator.image || "/placeholder.svg"}
                      alt={selectedLegislator.name}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-2xl">{selectedLegislator.name}</CardTitle>
                      <CardDescription>{regions.find((r) => r.id === selectedRegion)?.name}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-md">
                      <div className="text-sm text-gray-500 mb-1">Proposals Submitted</div>
                      <p className="font-medium text-lg">{selectedLegislator.proposals}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md">
                      <div className="text-sm text-gray-500 mb-1">Approval Rating</div>
                      <p className="font-medium text-lg">{Math.floor(Math.random() * 30) + 60}%</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Biography</h3>
                    <p className="text-sm text-gray-600">
                      {selectedLegislator.name} is a dedicated {selectedLegislator.title.toLowerCase()} representing the{" "}
                      {regions.find((r) => r.id === selectedRegion)?.name}. With a focus on{" "}
                      {
                        ["education", "healthcare", "environmental protection", "economic development"][
                          Math.floor(Math.random() * 4)
                        ]
                      }
                      , they have authored {selectedLegislator.proposals} legislative proposals during their tenure.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Committee Memberships</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {[
                        "Finance Committee",
                        "Education and Workforce Development",
                        "Environmental Protection",
                        "Public Safety",
                      ]
                        .slice(0, Math.floor(Math.random() * 3) + 1)
                        .map((committee, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#0D3B39]"></div>
                            {committee}
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Recent Proposals</h3>
                    <div className="space-y-2">
                      {[
                        "Renewable Energy Initiative",
                        "Education Reform Act",
                        "Healthcare Access Improvement",
                        "Public Transportation Expansion",
                      ]
                        .slice(0, Math.floor(Math.random() * 3) + 1)
                        .map((proposal, i) => (
                          <div key={i} className="bg-gray-50 p-2 rounded-md text-sm">
                            <Link href="#" className="font-medium hover:text-[#0D3B39] hover:underline">
                              {proposal}
                            </Link>
                            <p className="text-xs text-gray-500 mt-1">
                              Submitted {Math.floor(Math.random() * 30) + 1} days ago
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button className="flex-1 bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">
                    <User className="mr-2 h-4 w-4" />
                    View Full Profile
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Users className="mr-2 h-4 w-4" />
                    Contact
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              <Card className="bg-gray-50 border-dashed border-2 p-8 flex flex-col items-center justify-center text-center">
                <MapPin className="h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-700">No Legislator Selected</h3>
                <p className="text-sm text-gray-500 mt-2 max-w-md">
                  Select a region on the map and then click on a legislator pin to view their detailed profile and
                  legislative activities.
                </p>
                <div className="mt-6 p-3 bg-blue-50 rounded-md border border-blue-100 text-left w-full max-w-md">
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-700">
                      You can also search for your address or select a region from the dropdown menu to find your
                      representatives.
                    </p>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

