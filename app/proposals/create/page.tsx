"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, FileText, HelpCircle, Info, Paperclip, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function CreateProposalPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [inputTag, setInputTag] = useState("")

  // Sample categories for the dropdown
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

  // Sample tags for suggestions
  const suggestedTags = [
    "Climate",
    "Renewable",
    "Budget",
    "Reform",
    "Innovation",
    "Public Health",
    "Transportation",
    "Digital",
    "Rural",
    "Urban",
  ]

  const addTag = (tag: string) => {
    if (tag && !selectedTags.includes(tag) && selectedTags.length < 5) {
      setSelectedTags([...selectedTags, tag])
      setInputTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setSelectedTags(selectedTags.filter((tag) => tag !== tagToRemove))
  }

  return (
    <div className="min-h-screen bg-[#E1D7C1]">
      <div className="container py-8">
        <div className="mb-6">
          <Link href="/dashboard" className="text-[#0D3B39] hover:underline flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Create New Proposal</CardTitle>
                <CardDescription>Submit your legislative proposal for review and discussion</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">
                    Proposal Title
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="h-4 w-4 inline-block ml-1 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-80">
                            Create a clear, concise title that summarizes your proposal. Good titles are specific and
                            highlight the main objective.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Label>
                  <Input id="title" placeholder="e.g., Renewable Energy Tax Incentive Program" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category.toLowerCase()}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="tags">Tags (up to 5)</Label>
                    <span className="text-xs text-gray-500">{selectedTags.length}/5 tags</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {selectedTags.map((tag) => (
                      <Badge key={tag} className="bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">
                        {tag}
                        <button className="ml-1 text-[#0D3B39] hover:text-[#0D3B39]/70" onClick={() => removeTag(tag)}>
                          ×
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      id="tags"
                      placeholder="Add a tag"
                      value={inputTag}
                      onChange={(e) => setInputTag(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          addTag(inputTag)
                        }
                      }}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => addTag(inputTag)}
                      disabled={!inputTag || selectedTags.length >= 5}
                    >
                      Add
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    <span className="text-xs text-gray-500 mr-1">Suggestions:</span>
                    {suggestedTags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="cursor-pointer hover:bg-[#C8A96A]/10 hover:border-[#C8A96A]"
                        onClick={() => addTag(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="summary">
                    Executive Summary
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="h-4 w-4 inline-block ml-1 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-80">
                            Provide a brief summary (1-2 paragraphs) of your proposal. This should clearly state the
                            problem and your proposed solution.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Label>
                  <Textarea
                    id="summary"
                    placeholder="Briefly describe the purpose and goals of your proposal..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Detailed Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide a comprehensive description of your proposal, including background information, implementation details, and expected outcomes..."
                    className="min-h-[200px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="benefits">Benefits and Impact</Label>
                  <Textarea
                    id="benefits"
                    placeholder="Describe the specific benefits and positive impacts of your proposal. Consider economic, social, and environmental factors..."
                    className="min-h-[150px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Implications (if applicable)</Label>
                  <Textarea
                    id="budget"
                    placeholder="Outline any costs associated with implementing your proposal and potential funding sources..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Supporting Documents</Label>
                  <div className="border-2 border-dashed rounded-md p-6 text-center">
                    <Paperclip className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500 mb-2">Drag and drop files here, or click to browse</p>
                    <p className="text-xs text-gray-400">Supports PDF, DOCX, XLSX, JPG, PNG (max 10MB per file)</p>
                    <Input type="file" className="hidden" id="file-upload" multiple />
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={() => document.getElementById("file-upload")?.click()}
                    >
                      <Paperclip className="mr-2 h-4 w-4" />
                      Browse Files
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">
                  <Save className="mr-2 h-4 w-4" />
                  Save as Draft
                </Button>
                <Button className="bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">
                  <FileText className="mr-2 h-4 w-4" />
                  Submit Proposal
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Submission Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <div className="bg-[#0D3B39]/10 rounded-full p-2 h-8 w-8 flex items-center justify-center shrink-0">
                    <span className="text-[#0D3B39] font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Be Clear and Specific</h4>
                    <p className="text-sm text-gray-600">
                      Clearly state the problem and your proposed solution. Avoid vague language.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-[#0D3B39]/10 rounded-full p-2 h-8 w-8 flex items-center justify-center shrink-0">
                    <span className="text-[#0D3B39] font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Provide Evidence</h4>
                    <p className="text-sm text-gray-600">
                      Support your proposal with data, research, and examples where possible.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-[#0D3B39]/10 rounded-full p-2 h-8 w-8 flex items-center justify-center shrink-0">
                    <span className="text-[#0D3B39] font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Consider All Stakeholders</h4>
                    <p className="text-sm text-gray-600">
                      Address how your proposal affects different groups and communities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-[#0D3B39]/10 rounded-full p-2 h-8 w-8 flex items-center justify-center shrink-0">
                    <span className="text-[#0D3B39] font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Be Realistic</h4>
                    <p className="text-sm text-gray-600">
                      Ensure your proposal is feasible in terms of implementation and budget.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle>What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <span className="font-bold">1.</span>
                    <span>Your proposal will be reviewed by our moderation team within 2-3 business days.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">2.</span>
                    <span>If approved, it will be published for public comment and discussion.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">3.</span>
                    <span>Legislators can review and potentially sponsor your proposal.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">4.</span>
                    <span>You'll receive notifications about comments and status changes.</span>
                  </li>
                </ol>

                <div className="mt-4 p-3 bg-blue-50 rounded-md border border-blue-100">
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-700">
                      Need help with your proposal? Join our weekly workshop sessions or contact our support team for
                      guidance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

