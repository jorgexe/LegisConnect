import Link from "next/link"
import { Bell, FileText, MessageSquare, Plus, Search, Settings, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#E1D7C1]">
      <DashboardSidebar />

      <div className="flex-1">
        <div className="container py-6">
          <header className="mb-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-[#0D3B39]">Dashboard</h1>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Bell className="h-6 w-6 text-gray-600" />
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                    3
                  </span>
                </div>
                <Button variant="outline" className="gap-2">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Button>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">My Proposals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Followed Proposals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Forum Contributions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28</div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-[#0D3B39]">Quick Actions</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-auto py-6 bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A] flex flex-col items-center gap-2">
                <FileText className="h-6 w-6" />
                <span>Create Proposal</span>
              </Button>
              <Button
                variant="outline"
                className="h-auto py-6 border-[#C8A96A] text-[#0D3B39] hover:bg-[#C8A96A]/10 flex flex-col items-center gap-2"
              >
                <MessageSquare className="h-6 w-6" />
                <span>Join Discussion</span>
              </Button>
              <Button
                variant="outline"
                className="h-auto py-6 border-[#C8A96A] text-[#0D3B39] hover:bg-[#C8A96A]/10 flex flex-col items-center gap-2"
              >
                <Users className="h-6 w-6" />
                <span>Find Legislators</span>
              </Button>
              <Button
                variant="outline"
                className="h-auto py-6 border-[#C8A96A] text-[#0D3B39] hover:bg-[#C8A96A]/10 flex flex-col items-center gap-2"
              >
                <Search className="h-6 w-6" />
                <span>Explore Proposals</span>
              </Button>
            </div>
          </div>

          <Tabs defaultValue="activity">
            <TabsList className="bg-white">
              <TabsTrigger value="activity">Recent Activity</TabsTrigger>
              <TabsTrigger value="proposals">My Proposals</TabsTrigger>
              <TabsTrigger value="following">Following</TabsTrigger>
            </TabsList>

            <TabsContent value="activity" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest interactions on the platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-start gap-4 pb-4 border-b last:border-0">
                        <div className="bg-[#0D3B39]/10 rounded-full p-2">
                          <MessageSquare className="h-5 w-5 text-[#0D3B39]" />
                        </div>
                        <div>
                          <p className="font-medium">
                            You commented on{" "}
                            <Link href="#" className="text-[#0D3B39] font-bold hover:underline">
                              Renewable Energy Initiative
                            </Link>
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            "I think this proposal needs to consider the impact on rural communities..."
                          </p>
                          <p className="text-xs text-gray-400 mt-2">2 days ago</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Activity
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="proposals" className="mt-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>My Proposals</CardTitle>
                    <CardDescription>Proposals you've created</CardDescription>
                  </div>
                  <Button className="bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">
                    <Plus className="mr-2 h-4 w-4" />
                    New Proposal
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <Card key={i} className="overflow-hidden">
                        <CardHeader className="pb-3">
                          <div className="flex justify-between items-start">
                            <Badge className="bg-[#C8A96A] hover:bg-[#BF9C5A]">Education</Badge>
                            <Badge variant="outline" className="text-gray-500 bg-transparent">
                              Draft
                            </Badge>
                          </div>
                          <CardTitle className="text-xl mt-3">Digital Literacy Program {i}</CardTitle>
                          <CardDescription className="line-clamp-2">
                            A proposal to implement comprehensive digital literacy programs in public schools to prepare
                            students for the digital economy.
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="text-sm text-gray-500">
                          <div className="flex items-center justify-between text-xs">
                            <span>Created 1 week ago</span>
                            <span>Last edited 2 days ago</span>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-3 border-t flex justify-between">
                          <Button variant="ghost" size="sm" className="text-[#0D3B39]">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="text-[#0D3B39] border-[#C8A96A]">
                            Publish
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Proposals
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="following" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Proposals You're Following</CardTitle>
                  <CardDescription>Stay updated on proposals that interest you</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-start gap-4 pb-4 border-b last:border-0">
                        <div className="bg-[#0D3B39]/10 rounded-full p-2">
                          <FileText className="h-5 w-5 text-[#0D3B39]" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <p className="font-medium">Urban Green Spaces Initiative {i}</p>
                            <Badge variant="outline" className="text-gray-500 bg-transparent">
                              In Review
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                            A proposal to increase urban green spaces by 20% in all major cities through public-private
                            partnerships.
                          </p>
                          <div className="flex items-center mt-2 text-xs text-gray-400">
                            <span>By Rep. Juan Martinez</span>
                            <span className="mx-2">•</span>
                            <span>Updated 3 days ago</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Following
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

