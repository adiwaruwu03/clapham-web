import { revalidatePath, revalidateTag } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

function isAuthorized(request: NextRequest) {
  const secret = process.env.REVALIDATE_SECRET

  if (!secret) {
    throw new Error("REVALIDATE_SECRET is missing.")
  }

  const bearerToken = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "")
  const requestSecret =
    bearerToken ??
    request.headers.get("x-revalidate-secret") ??
    request.nextUrl.searchParams.get("secret")

  return requestSecret === secret
}

export async function POST(request: NextRequest) {
  try {
    if (!isAuthorized(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    revalidateTag("events")
    revalidatePath("/")
    revalidatePath("/events/[slug]", "page")

    return NextResponse.json({
      revalidated: true,
      tags: ["events"],
      paths: ["/", "/events/[slug]"],
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
