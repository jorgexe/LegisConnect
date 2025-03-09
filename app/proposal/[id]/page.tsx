import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  ChevronRight,
  Clock,
  Download,
  Eye,
  MessageSquare,
  Share2,
  ThumbsDown,
  ThumbsUp,
  User,
  FileText,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProposalDetail() {
  return (
    <div className="min-h-screen bg-[#E1D7C1]">
      <div className="container py-8">
        <div className="mb-6">
          <Link href="/explore" className="text-[#0D3B39] hover:underline flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Proposals
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="pb-3 border-b">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className="bg-[#C8A96A] hover:bg-[#BF9C5A]">Environment</Badge>
                  <Badge variant="outline" className="text-[#0D3B39] border-[#0D3B39]">
                    In Progress
                  </Badge>
                </div>
                <CardTitle className="text-2xl md:text-3xl">Renewable Energy Initiative</CardTitle>
                <CardDescription className="text-base mt-2">
                  A proposal to increase renewable energy production by 30% over the next 5 years through tax incentives
                  and grants.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <Tabs defaultValue="details">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="discussion">Discussion</TabsTrigger>
                    <TabsTrigger value="timeline">Timeline</TabsTrigger>
                  </TabsList>

                  <TabsContent value="details" className="mt-6">
                    <div className="prose max-w-none">
                      <h3>Overview</h3>
                      <p>
                        This proposal aims to significantly increase renewable energy production across the country by
                        providing targeted tax incentives for businesses and grants for research institutions. The
                        initiative seeks to reduce carbon emissions while creating new jobs in the green energy sector.
                      </p>

                      <h3>Key Objectives</h3>
                      <ul>
                        <li>Increase renewable energy production by 30% within 5 years</li>
                        <li>Create 50,000 new jobs in the renewable energy sector</li>
                        <li>Reduce carbon emissions by 15% compared to current levels</li>
                        <li>Establish 10 new research centers focused on renewable energy innovation</li>
                      </ul>

                      <h3>Implementation Strategy</h3>
                      <p>
                        The implementation will be phased over 5 years, with initial focus on establishing the tax
                        incentive framework and grant application process. Subsequent phases will include monitoring
                        progress, adjusting incentives as needed, and evaluating the environmental and economic impact.
                      </p>

                      <h3>Budget Implications</h3>
                      <p>
                        The estimated cost of this initiative is $2.5 billion over 5 years, with expected returns
                        through increased tax revenue from new jobs and businesses, as well as reduced healthcare costs
                        associated with pollution.
                      </p>

                      <h3>Supporting Documents</h3>
                      <div className="flex flex-col gap-2 not-prose">
                        <Button variant="outline" className="justify-start">
                          <Download className="mr-2 h-4 w-4" />
                          Full Proposal Document (PDF)
                        </Button>
                        <Button variant="outline" className="justify-start">
                          <Download className="mr-2 h-4 w-4" />
                          Economic Impact Analysis (PDF)
                        </Button>
                        <Button variant="outline" className="justify-start">
                          <Download className="mr-2 h-4 w-4" />
                          Environmental Assessment (PDF)
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="discussion" className="mt-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-bold">Discussion (24 comments)</h3>
                      <Button className="bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">Add Comment</Button>
                    </div>

                    <div className="space-y-6">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="border-b pb-6 last:border-0">
                          <div className="flex gap-4">
                            <Avatar>
                              <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt="User" />
                              <AvatarFallback>UN</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <div>
                                  <p className="font-medium">User Name {i}</p>
                                  <p className="text-xs text-gray-500">Citizen • 3 days ago</p>
                                </div>
                                <div className="flex gap-2">
                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <ThumbsUp className="h-4 w-4" />
                                  </Button>
                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <ThumbsDown className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                              <div className="mt-2">
                                <p>
                                  I strongly support this initiative. Renewable energy is crucial for our future, and
                                  the economic benefits outlined in this proposal are compelling. However, I would like
                                  to see more specific details about how rural communities will benefit from this
                                  initiative.
                                </p>
                              </div>
                              <div className="mt-3 flex gap-2">
                                <Button variant="outline" size="sm">
                                  <MessageSquare className="mr-1 h-3 w-3" /> Reply
                                </Button>
                              </div>

                              {/* Nested reply */}
                              {i === 1 && (
                                <div className="mt-4 ml-6 pt-4 border-t">
                                  <div className="flex gap-4">
                                    <Avatar>
                                      <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt="Legislator" />
                                      <AvatarFallback>LV</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                      <div className="flex justify-between items-start">
                                        <div>
                                          <p className="font-medium">Rep. Maria Garcia</p>
                                          <p className="text-xs text-gray-500">Legislator • 2 days ago</p>
                                        </div>
                                        <div className="flex gap-2">
                                          <Button variant="ghost" size="icon" className="h-8 w-8">
                                            <ThumbsUp className="h-4 w-4" />
                                          </Button>
                                          <Button variant="ghost" size="icon" className="h-8 w-8">
                                            <ThumbsDown className="h-4 w-4" />
                                          </Button>
                                        </div>
                                      </div>
                                      <div className="mt-2">
                                        <p>
                                          Thank you for your support and feedback. We are currently working on
                                          additional provisions specifically for rural communities, including targeted
                                          grants for agricultural renewable energy projects and infrastructure
                                          improvements.
                                        </p>
                                      </div>
                                      <div className="mt-3 flex gap-2">
                                        <Button variant="outline" size="sm">
                                          <MessageSquare className="mr-1 h-3 w-3" /> Reply
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 text-center">
                      <Button variant="outline">Load More Comments</Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="timeline" className="mt-6">
                    <div className="relative border-l-2 border-[#0D3B39] pl-6 ml-4 space-y-8">
                      {[
                        { date: "Jan 15, 2023", title: "Proposal Submitted", status: "Completed" },
                        { date: "Feb 3, 2023", title: "Initial Review", status: "Completed" },
                        { date: "Mar 10, 2023", title: "Public Comment Period", status: "Completed" },
                        { date: "Apr 5, 2023", title: "Committee Hearing", status: "In Progress" },
                        { date: "May 20, 2023", title: "Floor Vote", status: "Pending" },
                        { date: "Jun 15, 2023", title: "Final Approval", status: "Pending" },
                      ].map((event, i) => (
                        <div key={i} className="relative">
                          <div className="absolute -left-[30px] h-6 w-6 rounded-full bg-[#0D3B39] flex items-center justify-center">
                            {event.status === "Completed" ? (
                              <div className="h-3 w-3 rounded-full bg-[#C8A96A]" />
                            ) : event.status === "In Progress" ? (
                              <div className="h-3 w-3 rounded-full bg-white animate-pulse" />
                            ) : (
                              <div className="h-3 w-3 rounded-full bg-gray-300" />
                            )}
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">{event.date}</p>
                            <h4 className="font-bold">{event.title}</h4>
                            <Badge
                              className={
                                event.status === "Completed"
                                  ? "bg-green-500"
                                  : event.status === "In Progress"
                                    ? "bg-[#C8A96A]"
                                    : "bg-gray-400"
                              }
                            >
                              {event.status}
                            </Badge>
                            {event.status === "In Progress" && (
                              <p className="mt-2 text-sm">
                                The proposal is currently being reviewed by the Energy and Environment Committee. A
                                public hearing is scheduled for April 12, 2023.
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Proposal Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Proposed by</p>
                      <Link href="#" className="font-medium text-[#0D3B39] hover:underline">
                        Rep. Maria Garcia
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Submitted on</p>
                      <p className="font-medium">January 15, 2023</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Last updated</p>
                      <p className="font-medium">March 10, 2023</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Eye className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Views</p>
                      <p className="font-medium">1,245</p>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <p className="text-sm text-gray-500 mb-2">Support this proposal</p>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">
                        <ThumbsUp className="mr-2 h-4 w-4" /> Support (245)
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <ThumbsDown className="mr-2 h-4 w-4" /> Oppose (32)
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <p className="text-sm text-gray-500 mb-2">Share this proposal</p>
                    <Button variant="outline" className="w-full">
                      <Share2 className="mr-2 h-4 w-4" /> Share
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Proposals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <Link href="#" key={i} className="block">
                      <div className="flex items-start gap-3 group">
                        <div className="bg-[#0D3B39]/10 rounded p-2 group-hover:bg-[#0D3B39]/20">
                          <FileText className="h-4 w-4 text-[#0D3B39]" />
                        </div>
                        <div>
                          <p className="font-medium group-hover:text-[#0D3B39]">Solar Panel Tax Credit Extension</p>
                          <p className="text-xs text-gray-500">Submitted 2 months ago</p>
                        </div>
                        <ChevronRight className="ml-auto h-4 w-4 text-gray-400 group-hover:text-[#0D3B39]" />
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

