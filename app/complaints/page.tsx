"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle,
  Eye,
  EyeOff,
  FileText,
  HelpCircle,
  Info,
  Send,
  Shield,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ComplaintsPage() {
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  // Sample complaint categories
  const categories = [
    "Corruption",
    "Lack of Transparency",
    "Abuse of Power",
    "Conflict of Interest",
    "Misuse of Public Funds",
    "Ethical Violations",
    "Procedural Irregularities",
    "Other",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowConfirmation(true)
    // In a real app, you would submit the form data to your backend here
  }

  return (
    <div className="min-h-screen bg-[#E1D7C1]">
      <div className="bg-[#0D3B39] text-white py-12">
        <div className="container">
          <div className="mb-2">
            <Link href="/" className="text-white/80 hover:text-white flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
          <h1 className="text-3xl font-bold mb-4">Citizen Complaints</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Submit complaints about corruption, lack of transparency, or abuse of power.
          </p>
        </div>
      </div>

      <div className="container py-8">
        {showConfirmation ? (
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Complaint Submitted Successfully</CardTitle>
              <CardDescription>
                Thank you for submitting your complaint. Your input helps improve transparency and accountability.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">What happens next?</h3>
                <ol className="space-y-2 text-sm text-gray-600 list-decimal pl-4">
                  <li>Your complaint will be reviewed by our moderation team within 2-3 business days.</li>
                  <li>
                    If additional information is needed, you will be contacted via the email provided (unless submitted
                    anonymously).
                  </li>
                  <li>Once verified, the complaint will be forwarded to the appropriate oversight committee.</li>
                  <li>You will receive updates on the status of your complaint if you provided contact information.</li>
                </ol>
              </div>

              <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
                <div className="flex">
                  <Info className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-blue-800 mb-1">Complaint Reference Number</h3>
                    <p className="text-sm text-blue-700">
                      Your complaint reference number is{" "}
                      <span className="font-mono font-bold">
                        CMP-
                        {Math.floor(Math.random() * 10000)
                          .toString()
                          .padStart(4, "0")}
                      </span>
                      . Please save this number for future reference.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center gap-4">
              <Button variant="outline" onClick={() => setShowConfirmation(false)}>
                Submit Another Complaint
              </Button>
              <Button
                className="bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]"
                onClick={() => (window.location.href = "/")}
              >
                Return to Home
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Submit a Complaint</CardTitle>
                  <CardDescription>
                    Use this form to report issues related to legislative processes, representatives, or government
                    operations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="anonymous" className="text-base font-medium">
                          Submit Anonymously
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <HelpCircle className="h-4 w-4 inline-block ml-1 text-gray-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="w-80">
                                  Anonymous submissions protect your identity, but we won't be able to follow up with
                                  you for additional information or updates.
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Label>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="anonymous"
                            checked={isAnonymous}
                            onCheckedChange={(checked) => setIsAnonymous(checked === true)}
                          />
                          <label
                            htmlFor="anonymous"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Yes, I want to remain anonymous
                          </label>
                        </div>
                      </div>

                      {!isAnonymous && (
                        <div className="space-y-4 mt-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="first-name">First name</Label>
                              <Input id="first-name" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="last-name">Last name</Label>
                              <Input id="last-name" />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="name@example.com" />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone (optional)</Label>
                            <Input id="phone" type="tel" />
                          </div>
                        </div>
                      )}
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <Label htmlFor="category">
                        Complaint Category
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircle className="h-4 w-4 inline-block ml-1 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="w-80">
                                Select the category that best describes your complaint. This helps route it to the
                                appropriate department.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Label>
                      <Select>
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category.toLowerCase().replace(" ", "-")}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Brief description of your complaint" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">
                        Detailed Description
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircle className="h-4 w-4 inline-block ml-1 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="w-80">
                                Provide as much detail as possible, including dates, names, locations, and any relevant
                                context. The more specific you are, the better we can address your complaint.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your complaint in detail..."
                        className="min-h-[200px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="evidence">Evidence or Documentation (optional)</Label>
                      <div className="border-2 border-dashed rounded-md p-6 text-center">
                        <FileText className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500 mb-2">Drag and drop files here, or click to browse</p>
                        <p className="text-xs text-gray-400">Supports PDF, DOCX, JPG, PNG (max 10MB per file)</p>
                        <Input type="file" className="hidden" id="file-upload" multiple />
                        <Button
                          variant="outline"
                          className="mt-4"
                          onClick={() => document.getElementById("file-upload")?.click()}
                          type="button"
                        >
                          <FileText className="mr-2 h-4 w-4" />
                          Browse Files
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" required />
                        <label
                          htmlFor="terms"
                          className="text-sm text-gray-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I certify that the information provided is true and accurate to the best of my knowledge.
                        </label>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-md border border-yellow-100">
                      <div className="flex">
                        <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-yellow-800 mb-1">Important Notice</h3>
                          <p className="text-sm text-yellow-700">
                            Filing a false complaint may result in legal consequences. Please ensure all information
                            provided is accurate and truthful.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button type="submit" className="bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">
                        <Send className="mr-2 h-4 w-4" />
                        Submit Complaint
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-2 h-5 w-5" /> Privacy & Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <div className="bg-[#0D3B39]/10 rounded-full p-2 h-8 w-8 flex items-center justify-center shrink-0">
                      <Eye className="h-4 w-4 text-[#0D3B39]" />
                    </div>
                    <div>
                      <h4 className="font-medium">Confidentiality</h4>
                      <p className="text-sm text-gray-600">
                        All complaints are handled with strict confidentiality. Your information will only be shared
                        with those directly involved in addressing your complaint.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="bg-[#0D3B39]/10 rounded-full p-2 h-8 w-8 flex items-center justify-center shrink-0">
                      <EyeOff className="h-4 w-4 text-[#0D3B39]" />
                    </div>
                    <div>
                      <h4 className="font-medium">Anonymous Reporting</h4>
                      <p className="text-sm text-gray-600">
                        You can submit complaints anonymously. However, this may limit our ability to follow up or
                        provide updates on your case.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="bg-[#0D3B39]/10 rounded-full p-2 h-8 w-8 flex items-center justify-center shrink-0">
                      <Shield className="h-4 w-4 text-[#0D3B39]" />
                    </div>
                    <div>
                      <h4 className="font-medium">Protection</h4>
                      <p className="text-sm text-gray-600">
                        Whistleblower protections are in place to prevent retaliation against those who report
                        misconduct in good faith.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What happens after I submit a complaint?</AccordionTrigger>
                      <AccordionContent>
                        Your complaint will be reviewed by our moderation team within 2-3 business days. If it meets our
                        criteria, it will be forwarded to the appropriate oversight committee for investigation. You'll
                        receive updates if you provided contact information.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Can I check the status of my complaint?</AccordionTrigger>
                      <AccordionContent>
                        Yes, if you submitted with contact information, you'll receive a reference number. You can use
                        this number to check the status of your complaint through our portal or by contacting our
                        support team.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>What types of complaints are accepted?</AccordionTrigger>
                      <AccordionContent>
                        We accept complaints related to corruption, lack of transparency, abuse of power, conflicts of
                        interest, misuse of public funds, ethical violations, and procedural irregularities in
                        government operations.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Is my identity protected?</AccordionTrigger>
                      <AccordionContent>
                        Yes, your identity is protected. You can choose to submit anonymously, or if you provide contact
                        information, it will be kept confidential and only shared with those directly involved in
                        addressing your complaint.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    If you need assistance with submitting a complaint or have questions, our support team is here to
                    help.
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      Call Support: (123) 456-7890
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      Email: support@legisconnect.org
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                      Live Chat Support
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

