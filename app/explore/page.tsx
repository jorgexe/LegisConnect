import Link from "next/link"
import Image from "next/image"
import { Filter, Search, Plus, ChevronDown, ArrowUpDown, ThumbsUp, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function ExplorePage() {
  // Sample categories for filtering
  const categories = [
    "Environment",
    "Education",
    "Healthcare",
    "Economy",
    "Infrastructure",
    "Public Safety",
    "Technology",
    "Agriculture",
  ]

  // Sample statuses for filtering
  const statuses = ["Draft", "Under Review", "In Discussion", "Voting", "Approved", "Rejected"]

  return (
    <div className="min-h-screen bg-[#E1D7C1]">
      <div className="bg-[#0D3B39] text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-4">Explore Legislative Proposals</h1>
              <p className="text-lg opacity-90 max-w-2xl">
                Discover, support, and engage with legislative proposals from citizens and legislators.
              </p>
            </div>
            <Button className="mt-6 md:mt-0 bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">
              <Plus className="mr-2 h-4 w-4" /> Create Proposal
            </Button>
          </div>
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
                    <Input placeholder="Search proposals..." className="pl-8" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">Category</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category.toLowerCase()}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">Status</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Statuses" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      {statuses.map((status) => (
                        <SelectItem key={status} value={status.toLowerCase().replace(" ", "-")}>
                          {status}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">Author Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Authors" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Authors</SelectItem>
                      <SelectItem value="citizen">Citizens</SelectItem>
                      <SelectItem value="legislator">Legislators</SelectItem>
                      <SelectItem value="organization">Organizations</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">Date Range</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any Time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any Time</SelectItem>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="this-week">This Week</SelectItem>
                      <SelectItem value="this-month">This Month</SelectItem>
                      <SelectItem value="this-year">This Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div className="space-y-2">
                  <label className="text-sm font-medium mb-1 block">Popular Tags</label>
                  <div className="flex flex-wrap gap-2">
                    {["Climate", "Education", "Tax Reform", "Healthcare", "Transportation"].map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="cursor-pointer hover:bg-[#C8A96A]/10 hover:border-[#C8A96A]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
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
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <h2 className="text-xl font-bold text-[#0D3B39]">Showing 24 proposals</h2>
                <p className="text-sm text-gray-600">Displaying the most recent proposals</p>
              </div>
              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center">
                      <ArrowUpDown className="mr-2 h-4 w-4" />
                      Sort by
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Most Recent</DropdownMenuItem>
                    <DropdownMenuItem>Most Popular</DropdownMenuItem>
                    <DropdownMenuItem>Most Discussed</DropdownMenuItem>
                    <DropdownMenuItem>Alphabetical (A-Z)</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Select defaultValue="grid">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="View" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grid">Grid View</SelectItem>
                    <SelectItem value="list">List View</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <Badge className="bg-[#C8A96A] hover:bg-[#BF9C5A]">{categories[i % categories.length]}</Badge>
                      <Badge variant="outline" className="text-gray-500 bg-transparent">
                        {statuses[i % statuses.length]}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mt-3">
                      <Link href={`/proposal/${i}`} className="hover:underline">
                        {i % 2 === 0
                          ? "Renewable Energy Initiative"
                          : i % 3 === 0
                            ? "Education Reform Act"
                            : "Public Transportation Expansion"}
                      </Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {i % 2 === 0
                        ? "A proposal to increase renewable energy production by 30% over the next 5 years through tax incentives and grants."
                        : i % 3 === 0
                          ? "Comprehensive reform of the education system focusing on teacher training, curriculum updates, and infrastructure improvements."
                          : "Expanding public transportation options in urban and rural areas to reduce traffic congestion and improve accessibility."}
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
                        <Link href="#" className="text-[#0D3B39] font-medium hover:underline">
                          {i % 2 === 0 ? "Rep. Maria Garcia" : "John Citizen"}
                        </Link>
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center">
                        <ThumbsUp className="h-3 w-3 mr-1" />
                        <span>{Math.floor(Math.random() * 500)} supporters</span>
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="h-3 w-3 mr-1" />
                        <span>{Math.floor(Math.random() * 100)} comments</span>
                      </div>
                      <span>{Math.floor(Math.random() * 30) + 1} days ago</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-3 border-t flex justify-between">
                    <Button variant="ghost" size="sm" className="text-[#0D3B39]">
                      <ThumbsUp className="mr-1 h-4 w-4" /> Support
                    </Button>
                    <Button variant="outline" size="sm" className="text-[#0D3B39] border-[#C8A96A]">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <Pagination className="mt-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  )
}

