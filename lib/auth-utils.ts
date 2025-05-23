"use client"

import type React from "react"

import { useAuth } from "@/context/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function withAuth<P extends object>(Component: React.ComponentType<P>) {
  return function ProtectedRoute(props: P) {
    const { user, isLoading } = useAuth()
    const router = useRouter()

    useEffect(() => {
      if (!isLoading && !user) {
        router.push("/login")
      }
    }, [user, isLoading, router])

    if (isLoading) {
      return <div className="flex h-screen items-center justify-center">Loading...</div>
    }

    if (!user) {
      return null
    }

    return <Component {...props} />
  }
}
