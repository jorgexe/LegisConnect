"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, User, Building, Users, Mail, Lock, AlertCircle, Info, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [userType, setUserType] = useState("citizen")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [orgName, setOrgName] = useState("")
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [registrationStep, setRegistrationStep] = useState(1)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [registrationComplete, setRegistrationComplete] = useState(false)

  // Function to check password strength
  const checkPasswordStrength = (password: string) => {
    let strength = 0
    if (password.length >= 8) strength += 25
    if (/[A-Z]/.test(password)) strength += 25
    if (/[0-9]/.test(password)) strength += 25
    if (/[^A-Za-z0-9]/.test(password)) strength += 25
    setPasswordStrength(strength)
  }

  // Handle password change with strength checking
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value
    setPassword(newPassword)
    checkPasswordStrength(newPassword)
  }

  const handleNextStep = () => {
    // Validate current step
    if (registrationStep === 1) {
      if (!email || !password || passwordStrength < 50) {
        setError("Please complete all fields with a strong password")
        return
      }
    } else if (registrationStep === 2) {
      if (userType === "citizen" && (!firstName || !lastName)) {
        setError("Please provide your name")
        return
      }
      if (userType === "organization" && !orgName) {
        setError("Please provide your organization name")
        return
      }
    }

    setError(null)
    if (registrationStep < 3) {
      setRegistrationStep(registrationStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (registrationStep > 1) {
      setRegistrationStep(registrationStep - 1)
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    // Validate registration
    if (!termsAccepted) {
      setError("You must accept the terms and conditions")
      setIsLoading(false)
      return
    }

    try {
      // In a real app, you would call your registration API here
      // For demo purposes, we'll simulate a successful registration after a brief delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setRegistrationComplete(true)
    } catch (err) {
      setError("Registration failed. Please try again.")
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

        {registrationComplete ? (
          <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-center">Registration Successful</CardTitle>
              <CardDescription className="text-center">Your account has been created successfully</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-center text-sm text-gray-500">
                We've sent a confirmation email to <span className="font-medium">{email}</span>. Please check your inbox
                and verify your email to activate your account.
              </p>

              {userType === "legislator" && (
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Verification Required</AlertTitle>
                  <AlertDescription>
                    As a legislator, your account requires additional verification. Our team will contact you within 1-2
                    business days to complete the verification process.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                className="bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]"
                onClick={() => (window.location.href = "/login")}
              >
                Proceed to Login
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card className="w-full max-w-xl">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
              <CardDescription className="text-center">
                Join LegisConnect to participate in the legislative process
              </CardDescription>

              {/* Progress indicator */}
              <div className="mt-4">
                <div className="flex justify-between mb-1 text-xs">
                  <span>Step {registrationStep} of 3</span>
                  <span>
                    {registrationStep === 1 ? "Account" : registrationStep === 2 ? "Profile" : "Verification"}
                  </span>
                </div>
                <Progress value={registrationStep * 33.33} className="h-2" />
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleRegister} className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {/* Step 1: Account Information */}
                {registrationStep === 1 && (
                  <div className="space-y-4">
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

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="pl-10"
                          value={password}
                          onChange={handlePasswordChange}
                          required
                        />
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

                      {/* Password strength meter */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Password strength</span>
                          <span>
                            {passwordStrength < 25
                              ? "Weak"
                              : passwordStrength < 50
                                ? "Fair"
                                : passwordStrength < 75
                                  ? "Good"
                                  : "Strong"}
                          </span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-200 rounded-full">
                          <div
                            className={`h-full rounded-full ${
                              passwordStrength < 25
                                ? "bg-red-500"
                                : passwordStrength < 50
                                  ? "bg-orange-500"
                                  : passwordStrength < 75
                                    ? "bg-yellow-500"
                                    : "bg-green-500"
                            }`}
                            style={{ width: `${passwordStrength}%` }}
                          ></div>
                        </div>
                        <ul className="text-xs text-gray-500 space-y-1 mt-2">
                          <li className="flex items-center">
                            <span
                              className={`inline-block w-3 h-3 mr-2 rounded-full ${password.length >= 8 ? "bg-green-500" : "bg-gray-300"}`}
                            ></span>
                            At least 8 characters
                          </li>
                          <li className="flex items-center">
                            <span
                              className={`inline-block w-3 h-3 mr-2 rounded-full ${/[A-Z]/.test(password) ? "bg-green-500" : "bg-gray-300"}`}
                            ></span>
                            At least one uppercase letter
                          </li>
                          <li className="flex items-center">
                            <span
                              className={`inline-block w-3 h-3 mr-2 rounded-full ${/[0-9]/.test(password) ? "bg-green-500" : "bg-gray-300"}`}
                            ></span>
                            At least one number
                          </li>
                          <li className="flex items-center">
                            <span
                              className={`inline-block w-3 h-3 mr-2 rounded-full ${/[^A-Za-z0-9]/.test(password) ? "bg-green-500" : "bg-gray-300"}`}
                            ></span>
                            At least one special character
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Profile Information */}
                {registrationStep === 2 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>I am registering as:</Label>
                      <RadioGroup
                        defaultValue={userType}
                        className="grid grid-cols-3 gap-4"
                        onValueChange={setUserType}
                      >
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

                      {userType === "legislator" && (
                        <Alert className="mt-2 bg-yellow-50 border-yellow-200 text-yellow-800">
                          <Info className="h-4 w-4" />
                          <AlertDescription>
                            Legislator accounts require verification. You will need to provide additional documentation.
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>

                    {(userType === "citizen" || userType === "legislator") && (
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First name</Label>
                          <Input
                            id="first-name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last name</Label>
                          <Input
                            id="last-name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    )}

                    {userType === "organization" && (
                      <div className="space-y-2">
                        <Label htmlFor="org-name">Organization name</Label>
                        <Input
                          id="org-name"
                          placeholder="Organization name"
                          value={orgName}
                          onChange={(e) => setOrgName(e.target.value)}
                          required
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Step 3: Terms and Verification */}
                {registrationStep === 3 && (
                  <div className="space-y-4">
                    <div className="rounded-md border p-4 bg-gray-50">
                      <div className="text-sm font-medium mb-2">Account Summary</div>
                      <dl className="space-y-1 text-sm">
                        <div className="flex">
                          <dt className="w-1/3 font-medium text-gray-500">Email:</dt>
                          <dd>{email}</dd>
                        </div>
                        <div className="flex">
                          <dt className="w-1/3 font-medium text-gray-500">Account Type:</dt>
                          <dd className="capitalize">{userType}</dd>
                        </div>
                        {(userType === "citizen" || userType === "legislator") && (
                          <div className="flex">
                            <dt className="w-1/3 font-medium text-gray-500">Name:</dt>
                            <dd>
                              {firstName} {lastName}
                            </dd>
                          </div>
                        )}
                        {userType === "organization" && (
                          <div className="flex">
                            <dt className="w-1/3 font-medium text-gray-500">Organization:</dt>
                            <dd>{orgName}</dd>
                          </div>
                        )}
                      </dl>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-base">Terms and Conditions</Label>
                      <div className="rounded-md border p-4 h-40 overflow-y-auto text-sm text-gray-700">
                        <h4 className="font-medium mb-2">Terms of Use for LegisConnect</h4>
                        <p className="mb-2">
                          By creating an account on LegisConnect, you agree to these Terms of Use and our Privacy
                          Policy. LegisConnect is a platform designed to connect citizens and legislators, promoting
                          transparency and civic engagement in the legislative process.
                        </p>
                        <p className="mb-2">
                          Users must provide accurate information and maintain the confidentiality of their account.
                          Content posted must be respectful, lawful, and on-topic. LegisConnect reserves the right to
                          moderate content and suspend accounts that violate these terms.
                        </p>
                        <p>
                          For legislator accounts, additional verification is required to ensure the authenticity of
                          representation. All data is processed according to our Privacy Policy and applicable laws.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          checked={termsAccepted}
                          onCheckedChange={(checked) => setTermsAccepted(checked === true)}
                          required
                        />
                        <label
                          htmlFor="terms"
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to the{" "}
                          <Link href="/terms" className="text-[#0D3B39] underline hover:text-[#0D3B39]/80">
                            terms of service
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" className="text-[#0D3B39] underline hover:text-[#0D3B39]/80">
                            privacy policy
                          </Link>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation buttons */}
                <div className="flex justify-between mt-6">
                  {registrationStep > 1 ? (
                    <Button type="button" variant="outline" onClick={handlePrevStep}>
                      Previous
                    </Button>
                  ) : (
                    <div></div> // Empty div for spacing
                  )}

                  {registrationStep < 3 ? (
                    <Button
                      type="button"
                      className="bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]"
                      onClick={handleNextStep}
                    >
                      Next
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating account..." : "Create account"}
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link href="/login" className="text-[#0D3B39] underline hover:text-[#0D3B39]/80">
                  Sign in
                </Link>
              </div>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}

