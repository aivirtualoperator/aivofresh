"use client"

import { withAuth } from "@/lib/auth-utils"
import { useAuth } from "@/context/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function ChatPage() {
  const { user, signOut } = useAuth()

  return (
    <div className="container mx-auto py-8">
      <Card className="mb-8">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Welcome to your Chatbot</CardTitle>
          <Button variant="outline" onClick={signOut}>
            Sign Out
          </Button>
        </CardHeader>
        <CardContent>
          <p>You are logged in as: {user?.email}</p>
          {/* Your existing chatbot UI would go here */}
        </CardContent>
      </Card>

      {/* This is where your chat interface would be */}
      <div className="h-[500px] rounded-lg border p-4">
        <p className="text-center text-gray-500">Your chatbot interface goes here</p>
      </div>
    </div>
  )
}

export default withAuth(ChatPage)
