import { NextResponse } from "next/server"
import { getAllBlogsFromSupabase } from "@/lib/supabase-content"

export async function GET() {
  try {
    const blogs = await getAllBlogsFromSupabase()
    return NextResponse.json(blogs)
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
