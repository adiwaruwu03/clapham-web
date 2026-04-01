import { NextResponse } from "next/server"
import { getAllEventsFromSupabase } from "@/lib/supabase-content"

export async function GET() {
  try {
    const events = await getAllEventsFromSupabase()
    return NextResponse.json(events)
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
