import { createClient } from "@supabase/supabase-js"

// Create a single supabase client for client-side usage
let clientSingleton: ReturnType<typeof createClient> | null = null

export function getClientSupabaseClient() {
  if (clientSingleton) return clientSingleton

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error("Missing Supabase environment variables")
  }

  clientSingleton = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

  return clientSingleton
}

// Server-side Supabase client (for server components and API routes)
export function getServerSupabaseClient() {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("Missing Supabase environment variables")
  }

  return createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)
}
