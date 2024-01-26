import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DecodedToken } from "./utils/interfaces";
import { jwtDecode } from "jwt-decode";

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("jwt");
  let decoded;
  if (cookie) {
    const token = cookie?.value || "";
    decoded = jwtDecode(token) as DecodedToken;
  }

  // Check if the path is "/dashboard/admin"
  if (request.nextUrl.pathname.startsWith("/dashboard/admin")) {
    if (cookie) {
      // If the role is "user", redirect to "/dashboard/user"
      if (decoded?.role === "user") {
        return NextResponse.redirect(new URL("/dashboard/user", request.url));
      }
      // If the role is "admin", continue processing
      if (decoded?.role === "admin") {
        return NextResponse.next();
      }
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  // if (
  //   request.nextUrl.pathname.startsWith("/dashboard/admin") ||
  //   request.nextUrl.pathname.startsWith("/dashboard")
  // ) {
  //   if (cookie) {
  //     // If the role is "user", redirect to "/dashboard/user"
  //     if (decoded?.role === "user") {
  //       return NextResponse.redirect(new URL("/dashboard/user", request.url));
  //     }
  //     // If the role is "admin", continue processing
  //     if (decoded?.role === "admin") {
  //       return NextResponse.next();
  //     }
  //   } else {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }
  // }

  // Check if the path is "/dashboard/user"
  if (request.nextUrl.pathname.startsWith("/dashboard/user")) {
    if (cookie) {
      // If the role is "admin", redirect to "/dashboard/admin"
      if (decoded?.role === "admin") {
        return NextResponse.redirect(new URL("/dashboard/admin", request.url));
      }
      // If the role is "user", continue processing
      if (decoded?.role === "user") {
        return NextResponse.next();
      }
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
