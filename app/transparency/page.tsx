import Link from "next/link"
import { Calendar, Download, FileText, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TransparencyVotingChart } from "@/components/transparency-voting-chart"
import { TransparencySpendingChart } from "@/components/transparency-spending-chart"

export default function TransparencyPage() {
  return (
    <div className="min-h-screen bg-[#E1D7C1]">
      <div className="bg-[#0D3B39] text-white py-12">
        <div className="container">
          <h1 className="text-3xl font-bold mb-4">Legislative Transparency</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Access detailed information about legislators' voting histories, public spending, and legislative
            performance metrics.
          </p>
        </div>
      </div>

      <div className="container py-8">
        <Tabs defaultValue="voting" className="space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <TabsList className="bg-white">
              <TabsTrigger value="voting">Voting History</TabsTrigger>
              <TabsTrigger value="spending">Public Spending</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>

            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
              <Input placeholder="Search transparency data..." className="pl-8 w-full sm:w-[250px]" />
            </div>
          </div>

          {/* Voting History Tab */}
          <TabsContent value="voting" className="space-y-6">
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
                      <label className="text-sm font-medium mb-1 block">Legislator</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="All Legislators" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Legislators</SelectItem>
                          <SelectItem value="legislator1">Maria Garcia</SelectItem>
                          <SelectItem value="legislator2">Juan Martinez</SelectItem>
                          <SelectItem value="legislator3">Ana Lopez</SelectItem>
                        </SelectContent>
                      </Select>
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
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Date Range</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Last 12 Months" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="12months">Last 12 Months</SelectItem>
                          <SelectItem value="6months">Last 6 Months</SelectItem>
                          <SelectItem value="3months">Last 3 Months</SelectItem>
                          <SelectItem value="1month">Last Month</SelectItem>
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

              <div className="lg:col-span-3 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Voting Patterns Overview</CardTitle>
                    <CardDescription>
                      Analysis of voting patterns across different categories and political parties
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px]">
                      <TransparencyVotingChart />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Voting Records</CardTitle>
                    <CardDescription>Detailed voting records for recent legislative proposals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Proposal</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Votes For</TableHead>
                          <TableHead>Votes Against</TableHead>
                          <TableHead>Abstentions</TableHead>
                          <TableHead>Result</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            proposal: "Renewable Energy Initiative",
                            category: "Environment",
                            date: "Mar 15, 2023",
                            votesFor: 32,
                            votesAgainst: 18,
                            abstentions: 2,
                            result: "Passed",
                          },
                          {
                            proposal: "Education Reform Act",
                            category: "Education",
                            date: "Feb 28, 2023",
                            votesFor: 28,
                            votesAgainst: 22,
                            abstentions: 2,
                            result: "Passed",
                          },
                          {
                            proposal: "Healthcare Access Bill",
                            category: "Healthcare",
                            date: "Feb 10, 2023",
                            votesFor: 25,
                            votesAgainst: 27,
                            abstentions: 0,
                            result: "Failed",
                          },
                          {
                            proposal: "Tax Reform Proposal",
                            category: "Economy",
                            date: "Jan 22, 2023",
                            votesFor: 30,
                            votesAgainst: 20,
                            abstentions: 2,
                            result: "Passed",
                          },
                          {
                            proposal: "Public Transportation Fund",
                            category: "Infrastructure",
                            date: "Jan 15, 2023",
                            votesFor: 35,
                            votesAgainst: 15,
                            abstentions: 2,
                            result: "Passed",
                          },
                        ].map((item, i) => (
                          <TableRow key={i}>
                            <TableCell className="font-medium">
                              <Link href="#" className="text-[#0D3B39] hover:underline">
                                {item.proposal}
                              </Link>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">{item.category}</Badge>
                            </TableCell>
                            <TableCell>{item.date}</TableCell>
                            <TableCell>{item.votesFor}</TableCell>
                            <TableCell>{item.votesAgainst}</TableCell>
                            <TableCell>{item.abstentions}</TableCell>
                            <TableCell>
                              <Badge className={item.result === "Passed" ? "bg-green-500" : "bg-red-500"}>
                                {item.result}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Voting Records
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Legislator Attendance Records</CardTitle>
                    <CardDescription>Attendance rates for legislative sessions and committee meetings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Legislator</TableHead>
                          <TableHead>Party</TableHead>
                          <TableHead>Sessions Attended</TableHead>
                          <TableHead>Total Sessions</TableHead>
                          <TableHead>Attendance Rate</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            legislator: "Maria Garcia",
                            party: "Party A",
                            attended: 45,
                            total: 48,
                            rate: "94%",
                          },
                          {
                            legislator: "Juan Martinez",
                            party: "Party B",
                            attended: 42,
                            total: 48,
                            rate: "88%",
                          },
                          {
                            legislator: "Ana Lopez",
                            party: "Party A",
                            attended: 47,
                            total: 48,
                            rate: "98%",
                          },
                          {
                            legislator: "Carlos Rodriguez",
                            party: "Party C",
                            attended: 40,
                            total: 48,
                            rate: "83%",
                          },
                          {
                            legislator: "Sofia Hernandez",
                            party: "Party B",
                            attended: 44,
                            total: 48,
                            rate: "92%",
                          },
                        ].map((item, i) => (
                          <TableRow key={i}>
                            <TableCell className="font-medium">
                              <Link href="#" className="text-[#0D3B39] hover:underline">
                                {item.legislator}
                              </Link>
                            </TableCell>
                            <TableCell>{item.party}</TableCell>
                            <TableCell>{item.attended}</TableCell>
                            <TableCell>{item.total}</TableCell>
                            <TableCell>
                              <div className="flex items-center">
                                <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                  <div className="bg-[#0D3B39] h-2.5 rounded-full" style={{ width: item.rate }}></div>
                                </div>
                                <span>{item.rate}</span>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Attendance Records
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Public Spending Tab */}
          <TabsContent value="spending" className="space-y-6">
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
                      <label className="text-sm font-medium mb-1 block">Category</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="All Categories" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Categories</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="infrastructure">Infrastructure</SelectItem>
                          <SelectItem value="defense">Defense</SelectItem>
                          <SelectItem value="social">Social Programs</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Year</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="2023" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2023">2023</SelectItem>
                          <SelectItem value="2022">2022</SelectItem>
                          <SelectItem value="2021">2021</SelectItem>
                          <SelectItem value="2020">2020</SelectItem>
                          <SelectItem value="2019">2019</SelectItem>
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
                          <SelectItem value="central">Central</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Budget Range</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="All Amounts" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Amounts</SelectItem>
                          <SelectItem value="small">Under $1 Million</SelectItem>
                          <SelectItem value="medium">$1-10 Million</SelectItem>
                          <SelectItem value="large">$10-100 Million</SelectItem>
                          <SelectItem value="xlarge">Over $100 Million</SelectItem>
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

              <div className="lg:col-span-3 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Budget Allocation Overview</CardTitle>
                    <CardDescription>
                      Breakdown of public spending by category for the current fiscal year
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px]">
                      <TransparencySpendingChart />
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-gray-500">Total Budget</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$1.2 Billion</div>
                      <p className="text-xs text-gray-500">Fiscal Year 2023</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-gray-500">Approved Projects</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">248</div>
                      <p className="text-xs text-gray-500">Across all categories</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-gray-500">Budget Execution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">78%</div>
                      <p className="text-xs text-gray-500">Of allocated funds used</p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Major Spending Projects</CardTitle>
                    <CardDescription>Largest budget allocations linked to approved legislation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Project</TableHead>
                          <TableHead>Related Legislation</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Budget</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            project: "Highway Expansion Program",
                            legislation: "Infrastructure Development Act",
                            category: "Infrastructure",
                            budget: "$120 Million",
                            status: "In Progress",
                          },
                          {
                            project: "Public School Modernization",
                            legislation: "Education Reform Act",
                            category: "Education",
                            budget: "$85 Million",
                            status: "In Progress",
                          },
                          {
                            project: "Rural Healthcare Centers",
                            legislation: "Healthcare Access Bill",
                            category: "Healthcare",
                            budget: "$65 Million",
                            status: "Planning",
                          },
                          {
                            project: "Renewable Energy Grid",
                            legislation: "Renewable Energy Initiative",
                            category: "Environment",
                            budget: "$95 Million",
                            status: "In Progress",
                          },
                          {
                            project: "Affordable Housing Development",
                            legislation: "Housing Accessibility Act",
                            category: "Social Programs",
                            budget: "$75 Million",
                            status: "Planning",
                          },
                        ].map((item, i) => (
                          <TableRow key={i}>
                            <TableCell className="font-medium">
                              <Link href="#" className="text-[#0D3B39] hover:underline">
                                {item.project}
                              </Link>
                            </TableCell>
                            <TableCell>
                              <Link href="#" className="hover:underline">
                                {item.legislation}
                              </Link>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">{item.category}</Badge>
                            </TableCell>
                            <TableCell>{item.budget}</TableCell>
                            <TableCell>
                              <Badge className={item.status === "In Progress" ? "bg-[#C8A96A]" : "bg-blue-500"}>
                                {item.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Projects
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Budget Trends</CardTitle>
                    <CardDescription>Year-over-year comparison of budget allocations by category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Category</TableHead>
                          <TableHead>2021</TableHead>
                          <TableHead>2022</TableHead>
                          <TableHead>2023</TableHead>
                          <TableHead>Change</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            category: "Education",
                            y2021: "$210M",
                            y2022: "$230M",
                            y2023: "$250M",
                            change: "+8.7%",
                          },
                          {
                            category: "Healthcare",
                            y2021: "$180M",
                            y2022: "$195M",
                            y2023: "$220M",
                            change: "+12.8%",
                          },
                          {
                            category: "Infrastructure",
                            y2021: "$250M",
                            y2022: "$280M",
                            y2023: "$320M",
                            change: "+14.3%",
                          },
                          {
                            category: "Environment",
                            y2021: "$90M",
                            y2022: "$120M",
                            y2023: "$150M",
                            change: "+25.0%",
                          },
                          {
                            category: "Social Programs",
                            y2021: "$160M",
                            y2022: "$170M",
                            y2023: "$185M",
                            change: "+8.8%",
                          },
                        ].map((item, i) => (
                          <TableRow key={i}>
                            <TableCell className="font-medium">{item.category}</TableCell>
                            <TableCell>{item.y2021}</TableCell>
                            <TableCell>{item.y2022}</TableCell>
                            <TableCell>{item.y2023}</TableCell>
                            <TableCell className="text-green-600">{item.change}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-6">
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
                      <label className="text-sm font-medium mb-1 block">Report Type</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="All Types" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Types</SelectItem>
                          <SelectItem value="annual">Annual Reports</SelectItem>
                          <SelectItem value="quarterly">Quarterly Reports</SelectItem>
                          <SelectItem value="audit">Audit Reports</SelectItem>
                          <SelectItem value="performance">Performance Reports</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Year</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="2023" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2023">2023</SelectItem>
                          <SelectItem value="2022">2022</SelectItem>
                          <SelectItem value="2021">2021</SelectItem>
                          <SelectItem value="2020">2020</SelectItem>
                          <SelectItem value="2019">2019</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Category</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="All Categories" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Categories</SelectItem>
                          <SelectItem value="budget">Budget & Finance</SelectItem>
                          <SelectItem value="legislation">Legislation</SelectItem>
                          <SelectItem value="performance">Performance</SelectItem>
                          <SelectItem value="compliance">Compliance</SelectItem>
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

              <div className="lg:col-span-3 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Featured Reports</CardTitle>
                    <CardDescription>Most recent and important transparency reports</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="bg-[#0D3B39]/5 border-0">
                        <CardHeader className="pb-2">
                          <Badge className="w-fit bg-[#C8A96A] hover:bg-[#BF9C5A]">Annual Report</Badge>
                          <CardTitle className="text-xl">2023 Legislative Performance Report</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-sm text-gray-600 mb-4">
                            Comprehensive analysis of legislative activities, voting patterns, and accomplishments for
                            the 2023 fiscal year.
                          </p>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>Published: May 15, 2023</span>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">
                            <Download className="mr-2 h-4 w-4" /> Download Report
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card className="bg-[#0D3B39]/5 border-0">
                        <CardHeader className="pb-2">
                          <Badge className="w-fit bg-[#C8A96A] hover:bg-[#BF9C5A]">Audit Report</Badge>
                          <CardTitle className="text-xl">Public Spending Audit Report</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-sm text-gray-600 mb-4">
                            Independent audit of public spending linked to approved legislation, with detailed findings
                            and recommendations.
                          </p>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>Published: April 3, 2023</span>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">
                            <Download className="mr-2 h-4 w-4" /> Download Report
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Available Reports</CardTitle>
                    <CardDescription>Browse and download all transparency reports</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Report Title</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Size</TableHead>
                          <TableHead>Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            title: "2023 Legislative Performance Report",
                            type: "Annual",
                            category: "Performance",
                            date: "May 15, 2023",
                            size: "4.2 MB",
                          },
                          {
                            title: "Public Spending Audit Report",
                            type: "Audit",
                            category: "Budget & Finance",
                            date: "Apr 3, 2023",
                            size: "3.8 MB",
                          },
                          {
                            title: "Q1 2023 Legislative Activity Report",
                            type: "Quarterly",
                            category: "Legislation",
                            date: "Apr 15, 2023",
                            size: "2.5 MB",
                          },
                          {
                            title: "Compliance and Ethics Annual Review",
                            type: "Annual",
                            category: "Compliance",
                            date: "Mar 10, 2023",
                            size: "3.1 MB",
                          },
                          {
                            title: "2022 Budget Execution Report",
                            type: "Annual",
                            category: "Budget & Finance",
                            date: "Feb 28, 2023",
                            size: "5.6 MB",
                          },
                          {
                            title: "Legislator Attendance and Voting Analysis",
                            type: "Performance",
                            category: "Performance",
                            date: "Feb 15, 2023",
                            size: "2.9 MB",
                          },
                          {
                            title: "Q4 2022 Legislative Activity Report",
                            type: "Quarterly",
                            category: "Legislation",
                            date: "Jan 15, 2023",
                            size: "2.3 MB",
                          },
                        ].map((item, i) => (
                          <TableRow key={i}>
                            <TableCell className="font-medium">
                              <Link href="#" className="text-[#0D3B39] hover:underline">
                                {item.title}
                              </Link>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">{item.type}</Badge>
                            </TableCell>
                            <TableCell>{item.category}</TableCell>
                            <TableCell>{item.date}</TableCell>
                            <TableCell>{item.size}</TableCell>
                            <TableCell>
                              <Button size="sm" className="bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">
                                <Download className="mr-1 h-3 w-3" /> Download
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Reports
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Data Exports</CardTitle>
                    <CardDescription>Download raw data for your own analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">Voting Records</CardTitle>
                            <FileText className="h-5 w-5 text-gray-500" />
                          </div>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-sm text-gray-600">
                            Complete dataset of all legislative votes, including legislator, party, proposal, and vote
                            cast.
                          </p>
                        </CardContent>
                        <CardFooter className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="mr-1 h-3 w-3" /> CSV
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="mr-1 h-3 w-3" /> JSON
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="mr-1 h-3 w-3" /> Excel
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">Budget Data</CardTitle>
                            <FileText className="h-5 w-5 text-gray-500" />
                          </div>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-sm text-gray-600">
                            Detailed budget allocation and spending data by category, project, and region.
                          </p>
                        </CardContent>
                        <CardFooter className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="mr-1 h-3 w-3" /> CSV
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="mr-1 h-3 w-3" /> JSON
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="mr-1 h-3 w-3" /> Excel
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">Legislator Data</CardTitle>
                            <FileText className="h-5 w-5 text-gray-500" />
                          </div>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-sm text-gray-600">
                            Comprehensive data on legislators, including attendance, voting patterns, and sponsored
                            proposals.
                          </p>
                        </CardContent>
                        <CardFooter className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="mr-1 h-3 w-3" /> CSV
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="mr-1 h-3 w-3" /> JSON
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="mr-1 h-3 w-3" /> Excel
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">Proposal Data</CardTitle>
                            <FileText className="h-5 w-5 text-gray-500" />
                          </div>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-sm text-gray-600">
                            Data on all legislative proposals, including status, category, votes, and implementation
                            progress.
                          </p>
                        </CardContent>
                        <CardFooter className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="mr-1 h-3 w-3" /> CSV
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="mr-1 h-3 w-3" /> JSON
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="mr-1 h-3 w-3" /> Excel
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

