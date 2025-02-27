import {NextResponse} from "next/server"
import type {NextRequest} from "next/server"
export function middleware(request: NextRequest) {
  const verify = request.cookies.get("token")
  if (!verify && request.nextUrl.pathname.includes("/dashboard")) {
    return NextResponse.redirect(new URL("/log-in", request.url))
  }
  if (verify && request.nextUrl.pathname === "/log-in") {
    return NextResponse.redirect(new URL("/", request.url))
  }
}
