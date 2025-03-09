"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, CheckCircle, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    // Simple validation
    if (!email) {
      setError("Please enter your email address")
      setIsLoading(false)
      return
    }

    try {
      // In a real application, you would call your API here
      // For demo purposes, we'll simulate a successful password reset request after a brief delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsSubmitted(true)
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#E1D7C1] flex flex-col">
      <div className="container flex flex-col items-center justify-center flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="mb-8">
          <div className="flex items-center justify-center text-center">
            <h1 className="text-3xl font-bold text-[#0D3B39]">LegisConnect</h1>
          </div>
        </Link>

        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            {!isSubmitted ? (
              <>
                <CardTitle className="text-2xl font-bold text-center">Forgot password</CardTitle>
                <CardDescription className="text-center">
                  Enter your email address and we'll send you a link to reset your password
                </CardDescription>
              </>
            ) : (
              <>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-center">Check your email</CardTitle>
                <CardDescription className="text-center">
                  We've sent a password reset link to <span className="font-medium">{email}</span>
                </CardDescription>
              </>
            )}
          </CardHeader>
          <CardContent>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      className="pl-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending link..." : "Send reset link"}
                </Button>
              </form>
            ) : (
              <div className="space-y-4">
                <p className="text-center text-sm text-gray-500">
                  If you don't receive the email within a few minutes, please check your spam folder or try again.
                </p>
                <Button
                  className="w-full bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]"
                  onClick={() => (window.location.href = "/login")}
                >
                  Return to login
                </Button>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-center">
            <div className="text-center text-sm">
              <Link href="/login" className="text-[#0D3B39] hover:underline flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to login
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

