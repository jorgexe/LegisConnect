import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, FileText, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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

export default function ProposalTrackingPage() {
  // Sample proposals with tracking data
  const proposals = [
    {
      id: 1,
      title: "Renewable Energy Initiative",
      category: "Environment",
      author: "Rep. Maria Garcia",
      submitted: "Jan 15, 2023",
      currentStage: "Committee Hearing",
      progress: 60,
      nextStep: "Floor Vote",
      nextDate: "May 20, 2023",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Education Reform Act",
      category: "Education",
      author: "Sen. Robert Chen",
      submitted: "Feb 10, 2023",
      currentStage: "Public Comment Period",
      progress: 40,
      nextStep: "Committee Hearing",
      nextDate: "Apr 30, 2023",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Healthcare Access Improvement",
      category: "Healthcare",
      author: "Dr. Laura Johnson",
      submitted: "Dec 5, 2022",
      currentStage: "Final Approval",
      progress: 100,
      nextStep: "Implementation",
      nextDate: "Jun 1, 2023",
      status: "Approved",
    },
    {
      id: 4,
      title: "Public Transportation Expansion",
      category: "Infrastructure",
      author: "Urban Planning Coalition",
      submitted: "Mar 20, 2023",
      currentStage: "Initial Review",
      progress: 20,
      nextStep: "Public Comment Period",
      nextDate: "Apr 15, 2023",
      status: "In Progress",
    },
    {
      id: 5,
      title: "Digital Privacy Protection Act",
      category: "Technology",
      author: "Tech Rights Coalition",
      submitted: "Nov 12, 2022",
      currentStage: "Floor Vote",
      progress: 80,
      nextStep: "Final Approval",
      nextDate: "Apr 10, 2023",
      status: "In Progress",
    },
    {
      id: 6,
      title: "Small Business Tax Relief",
      category: "Economy",
      author: "Chamber of Commerce",
      submitted: "Oct 30, 2022",
      currentStage: "Committee Review",
      progress: 30,
      nextStep: "Public Comment Period",
      nextDate: "May 5, 2023",
      status: "In Progress",
    },
  ]

  return (
    <div className="min-h-screen bg-[#E1D7C1]">
      <div className="bg-[#0D3B39] text-white py-12">
        <div className="container">
          <h1 className="text-3xl font-bold mb-4">Proposal Tracking</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Monitor the progress of legislative proposals through the legislative process.
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
                      <SelectItem value="environment">Environment</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="economy">Economy</SelectItem>
                      <SelectItem value="infrastructure">Infrastructure</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
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
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">Current Stage</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Stages" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Stages</SelectItem>
                      <SelectItem value="initial-review">Initial Review</SelectItem>
                      <SelectItem value="public-comment">Public Comment Period</SelectItem>
                      <SelectItem value="committee-review">Committee Review</SelectItem>
                      <SelectItem value="committee-hearing">Committee Hearing</SelectItem>
                      <SelectItem value="floor-vote">Floor Vote</SelectItem>
                      <SelectItem value="final-approval">Final Approval</SelectItem>
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
                      <SelectItem value="last-30-days">Last 30 Days</SelectItem>
                      <SelectItem value="last-90-days">Last 90 Days</SelectItem>
                      <SelectItem value="last-6-months">Last 6 Months</SelectItem>
                      <SelectItem value="last-year">Last Year</SelectItem>
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
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All Proposals</TabsTrigger>
                <TabsTrigger value="following">Following</TabsTrigger>
                <TabsTrigger value="my-proposals">My Proposals</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <div className="space-y-6">
                  {proposals.map((proposal) => (
                    <Card key={proposal.id}>
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <Badge className="bg-[#C8A96A] hover:bg-[#BF9C5A]">{proposal.category}</Badge>
                          <Badge
                            className={
                              proposal.status === "Approved"
                                ? "bg-green-500"
                                : proposal.status === "Rejected"
                                  ? "bg-red-500"
                                  : "bg-blue-500"
                            }
                          >
                            {proposal.status}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl mt-3">
                          <Link href={`/proposal/${proposal.id}`} className="hover:underline">
                            {proposal.title}
                          </Link>
                        </CardTitle>
                        <CardDescription>
                          Submitted by {proposal.author} on {proposal.submitted}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Progress</span>
                              <span>{proposal.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                className="bg-[#0D3B39] h-2.5 rounded-full"
                                style={{ width: `${proposal.progress}%` }}
                              ></div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-3 rounded-md">
                              <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                                <Clock className="h-4 w-4" />
                                <span>Current Stage</span>
                              </div>
                              <p className="font-medium">{proposal.currentStage}</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-md">
                              <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                                <ArrowRight className="h-4 w-4" />
                                <span>Next Step</span>
                              </div>
                              <p className="font-medium">
                                {proposal.nextStep}
                                {proposal.nextDate && (
                                  <span className="text-sm text-gray-500 ml-1">({proposal.nextDate})</span>
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm">
                          <FileText className="mr-2 h-4 w-4" />
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Follow
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
              </TabsContent>

              <TabsContent value="following" className="mt-6">
                <Card className="p-8 text-center">
                  <CardDescription>
                    You are not following any proposals yet. Browse proposals and click "Follow" to track their
                    progress.
                  </CardDescription>
                  <Button className="mt-4 bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">Browse Proposals</Button>
                </Card>
              </TabsContent>

              <TabsContent value="my-proposals" className="mt-6">
                <Card className="p-8 text-center">
                  <CardDescription>
                    You haven't created any proposals yet. Create a new proposal to start tracking its progress.
                  </CardDescription>
                  <Button className="mt-4 bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">Create Proposal</Button>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

