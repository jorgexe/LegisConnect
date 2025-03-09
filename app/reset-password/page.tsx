"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, Lock, AlertCircle, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isReset, setIsReset] = useState(false)

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

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    // Validation
    if (password !== confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    if (passwordStrength < 50) {
      setError("Please use a stronger password")
      setIsLoading(false)
      return
    }

    try {
      // In a real application, you would call your API here
      // For demo purposes, we'll simulate a successful password reset after a brief delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setIsReset(true)
    } catch (err) {
      setError("Password reset failed. Please try again.")
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
            {!isReset ? (
              <>
                <CardTitle className="text-2xl font-bold text-center">Reset password</CardTitle>
                <CardDescription className="text-center">Enter your new password below</CardDescription>
              </>
            ) : (
              <>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-center">Password reset successful</CardTitle>
                <CardDescription className="text-center">Your password has been reset successfully</CardDescription>
              </>
            )}
          </CardHeader>
          <CardContent>
            {!isReset ? (
              <form onSubmit={handleResetPassword} className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-2">
                  <Label htmlFor="password">New Password</Label>
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
                    <Progress value={passwordStrength} className="h-1.5" />
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

                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="confirm-password"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="pl-10"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-500" />
                      )}
                      <span className="sr-only">{showConfirmPassword ? "Hide password" : "Show password"}</span>
                    </Button>
                  </div>
                  {password && confirmPassword && password !== confirmPassword && (
                    <p className="text-xs text-red-500 mt-1">Passwords do not match</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]"
                  disabled={isLoading}
                >
                  {isLoading ? "Resetting password..." : "Reset password"}
                </Button>
              </form>
            ) : (
              <div className="space-y-4">
                <p className="text-center text-sm text-gray-500">
                  Your password has been successfully reset. You can now log in with your new password.
                </p>
                <Button
                  className="w-full bg-[#C8A96A] text-[#0D3B39] hover:bg-[#BF9C5A]"
                  onClick={() => (window.location.href = "/login")}
                >
                  Go to Login
                </Button>
              </div>
            )}
          </CardContent>
          {!isReset && (
            <CardFooter className="flex justify-center">
              <div className="text-center text-sm">
                <Link href="/login" className="text-[#0D3B39] hover:underline">
                  Back to login
                </Link>
              </div>
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  )
}

