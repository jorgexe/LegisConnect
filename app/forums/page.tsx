import Link from "next/link"
import Image from "next/image"
import { Filter, Search, Plus, MessageSquare, Users, Clock, Eye, ArrowUpDown, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function ForumsPage() {
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

  // Sample forum topics
  const forumTopics = [
    {
      id: 1,
      title: "Climate Change Legislation: What's Working?",
      category: "Environment",
      author: "Maria Garcia",
      authorType: "Legislator",
      replies: 42,
      views: 1250,
      lastActivity: "2 hours ago",
      isHot: true,
    },
    {
      id: 2,
      title: "Education Budget Priorities for 2023",
      category: "Education",
      author: "John Smith",
      authorType: "Citizen",
      replies: 28,
      views: 876,
      lastActivity: "5 hours ago",
      isHot: false,
    },
    {
      id: 3,
      title: "Healthcare Access in Rural Communities",
      category: "Healthcare",
      author: "Dr. Laura Johnson",
      authorType: "Organization",
      replies: 35,
      views: 1120,
      lastActivity: "1 day ago",
      isHot: true,
    },
    {
      id: 4,
      title: "Public Transportation Expansion Debate",
      category: "Infrastructure",
      author: "Carlos Rodriguez",
      authorType: "Citizen",
      replies: 19,
      views: 645,
      lastActivity: "2 days ago",
      isHot: false,
    },
    {
      id: 5,
      title: "Tax Reform Proposals: Pros and Cons",
      category: "Economy",
      author: "Sen. Robert Chen",
      authorType: "Legislator",
      replies: 56,
      views: 1890,
      lastActivity: "6 hours ago",
      isHot: true,
    },
    {
      id: 6,
      title: "Digital Privacy Legislation Discussion",
      category: "Technology",
      author: "Tech Rights Coalition",
      authorType: "Organization",
      replies: 31,
      views: 980,
      lastActivity: "3 days ago",
      isHot: false,
    },
  ]

  return (
    <div className="min-h-screen bg-[#E1D7C1]">
      <div className="bg-[#0D3B39] text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-4">Debate Forums</h1>
              <p className="text-lg opacity-90 max-w-2xl">
                Engage in meaningful discussions about legislative issues and proposals.
              </p>
            </div>
            <Button className="mt-6 md:mt-0 bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">
              <Plus className="mr-2 h-4 w-4" /> Create New Topic
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
                    <Input placeholder="Search forums..." className="pl-8" />
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
                  <label className="text-sm font-medium mb-1 block">Time Period</label>
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

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Forum Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Total Topics:</span>
                  <span className="font-medium">1,245</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Total Posts:</span>
                  <span className="font-medium">24,689</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Active Users:</span>
                  <span className="font-medium">3,782</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Topics Today:</span>
                  <span className="font-medium">42</span>
                </div>

                <Separator />

                <div>
                  <h4 className="text-sm font-medium mb-2">Top Contributors</h4>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Image
                          src={`/placeholder.svg?height=32&width=32`}
                          alt="User"
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                        <div>
                          <p className="text-sm font-medium">User Name {i}</p>
                          <p className="text-xs text-gray-500">{150 - i * 30} posts</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Tabs defaultValue="all">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <TabsList>
                  <TabsTrigger value="all">All Topics</TabsTrigger>
                  <TabsTrigger value="hot">Hot Topics</TabsTrigger>
                  <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
                  <TabsTrigger value="my-topics">My Topics</TabsTrigger>
                </TabsList>

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
                      <DropdownMenuItem>Most Replies</DropdownMenuItem>
                      <DropdownMenuItem>Most Views</DropdownMenuItem>
                      <DropdownMenuItem>Alphabetical (A-Z)</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <TabsContent value="all" className="mt-0">
                <Card>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      {forumTopics.map((topic) => (
                        <div key={topic.id} className="p-4 hover:bg-gray-50">
                          <div className="flex items-start gap-4">
                            <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0D3B39]/10">
                              <MessageSquare className="h-5 w-5 text-[#0D3B39]" />
                            </div>
                            <div className="flex-1 space-y-1">
                              <div className="flex items-center gap-2">
                                <Badge className="bg-[#C8A96A] hover:bg-[#BF9C5A]">{topic.category}</Badge>
                                {topic.isHot && (
                                  <Badge variant="outline" className="text-red-500 border-red-200 bg-red-50">
                                    Hot
                                  </Badge>
                                )}
                              </div>
                              <Link href={`/forums/topic/${topic.id}`} className="block">
                                <h3 className="text-lg font-medium hover:text-[#0D3B39] hover:underline">
                                  {topic.title}
                                </h3>
                              </Link>
                              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
                                <div className="flex items-center gap-1">
                                  <Users className="h-4 w-4" />
                                  <span>
                                    Started by{" "}
                                    <Link href="#" className="font-medium text-[#0D3B39] hover:underline">
                                      {topic.author}
                                    </Link>{" "}
                                    <Badge variant="outline" className="text-xs">
                                      {topic.authorType}
                                    </Badge>
                                  </span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MessageSquare className="h-4 w-4" />
                                  <span>{topic.replies} replies</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Eye className="h-4 w-4" />
                                  <span>{topic.views} views</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  <span>Last reply {topic.lastActivity}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

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
              </TabsContent>

              <TabsContent value="hot" className="mt-0">
                <Card>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      {forumTopics
                        .filter((topic) => topic.isHot)
                        .map((topic) => (
                          <div key={topic.id} className="p-4 hover:bg-gray-50">
                            <div className="flex items-start gap-4">
                              <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0D3B39]/10">
                                <MessageSquare className="h-5 w-5 text-[#0D3B39]" />
                              </div>
                              <div className="flex-1 space-y-1">
                                <div className="flex items-center gap-2">
                                  <Badge className="bg-[#C8A96A] hover:bg-[#BF9C5A]">{topic.category}</Badge>
                                  <Badge variant="outline" className="text-red-500 border-red-200 bg-red-50">
                                    Hot
                                  </Badge>
                                </div>
                                <Link href={`/forums/topic/${topic.id}`} className="block">
                                  <h3 className="text-lg font-medium hover:text-[#0D3B39] hover:underline">
                                    {topic.title}
                                  </h3>
                                </Link>
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
                                  <div className="flex items-center gap-1">
                                    <Users className="h-4 w-4" />
                                    <span>
                                      Started by{" "}
                                      <Link href="#" className="font-medium text-[#0D3B39] hover:underline">
                                        {topic.author}
                                      </Link>{" "}
                                      <Badge variant="outline" className="text-xs">
                                        {topic.authorType}
                                      </Badge>
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MessageSquare className="h-4 w-4" />
                                    <span>{topic.replies} replies</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Eye className="h-4 w-4" />
                                    <span>{topic.views} views</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    <span>Last reply {topic.lastActivity}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="unanswered" className="mt-0">
                <Card className="p-8 text-center">
                  <CardDescription>
                    No unanswered topics at the moment. Check back later or be the first to create a new topic!
                  </CardDescription>
                </Card>
              </TabsContent>

              <TabsContent value="my-topics" className="mt-0">
                <Card className="p-8 text-center">
                  <CardDescription>
                    You haven't created any topics yet. Start a discussion by clicking the "Create New Topic" button.
                  </CardDescription>
                  <Button className="mt-4 bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">
                    <Plus className="mr-2 h-4 w-4" /> Create New Topic
                  </Button>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

