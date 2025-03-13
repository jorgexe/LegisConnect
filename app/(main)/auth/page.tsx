"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, User, Building, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [userType, setUserType] = useState("citizen")

  return (
    <div className="min-h-screen bg-[#E1D7C1] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-bold text-[#0D3B39]">LegisConnect</h1>
          </Link>
          <p className="mt-2 text-gray-600">Your voice in the legislative process</p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          {/* Login Tab */}
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Welcome back</CardTitle>
                <CardDescription>Sign in to your account to continue</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="name@example.com" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="/auth/reset-password" className="text-xs text-[#0D3B39] hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-500" />
                      )}
                      <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">Sign In</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Register Tab */}
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Create an account</CardTitle>
                <CardDescription>Join LegisConnect to participate in the legislative process</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>I am a:</Label>
                  <RadioGroup defaultValue="citizen" className="grid grid-cols-3 gap-4" onValueChange={setUserType}>
                    <div>
                      <RadioGroupItem value="citizen" id="citizen" className="peer sr-only" />
                      <Label
                        htmlFor="citizen"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-[#C8A96A] peer-data-[state=checked]:border-[#C8A96A] peer-data-[state=checked]:bg-[#C8A96A]/10"
                      >
                        <User className="mb-2 h-6 w-6" />
                        <span className="text-sm font-medium">Citizen</span>
                      </Label>
                    </div>

                    <div>
                      <RadioGroupItem value="legislator" id="legislator" className="peer sr-only" />
                      <Label
                        htmlFor="legislator"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-[#C8A96A] peer-data-[state=checked]:border-[#C8A96A] peer-data-[state=checked]:bg-[#C8A96A]/10"
                      >
                        <Users className="mb-2 h-6 w-6" />
                        <span className="text-sm font-medium">Legislator</span>
                      </Label>
                    </div>

                    <div>
                      <RadioGroupItem value="organization" id="organization" className="peer sr-only" />
                      <Label
                        htmlFor="organization"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-[#C8A96A] peer-data-[state=checked]:border-[#C8A96A] peer-data-[state=checked]:bg-[#C8A96A]/10"
                      >
                        <Building className="mb-2 h-6 w-6" />
                        <span className="text-sm font-medium">Organization</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

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
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-500" />
                      )}
                      <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                    </Button>
                  </div>
                </div>

                {userType === "legislator" && (
                  <div className="space-y-2 p-4 border rounded-md bg-yellow-50">
                    <p className="text-sm text-yellow-800">
                      <strong>Note:</strong> Legislator accounts require verification. You will need to provide
                      additional documentation after registration.
                    </p>
                  </div>
                )}

                {userType === "organization" && (
                  <div className="space-y-2">
                    <Label htmlFor="org-name">Organization name</Label>
                    <Input id="org-name" placeholder="Organization name" />
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex flex-col">
                <Button className="w-full bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]">Create Account</Button>
                <p className="text-xs text-center mt-4 text-gray-500">
                  By creating an account, you agree to our{" "}
                  <Link href="/terms" className="text-[#0D3B39] hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-[#0D3B39] hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

