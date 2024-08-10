import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./app/pages/actions/session";
import { cookies } from "next/headers";
import createMiddleware from "next-intl/middleware";

const protectedRoutes = ["/tr/home"];
const publicRoutes = ["/login", "/register", "/"];

const defaultLocale = "tr";
const intlMiddleware = createMiddleware({
  locales: ["tr", "en", "fr", "de", "it"],
  defaultLocale: defaultLocale,
});

export default async function middleware(req: NextRequest) {
  const intlResponse = intlMiddleware(req);
  if (intlResponse) return intlResponse;

  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);

  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL(`login`, req.nextUrl));
  }

  if (
    isPublicRoute &&
    session?.userId &&
    !req.nextUrl.pathname.startsWith(`/${defaultLocale}/home`)
  ) {
    return NextResponse.redirect(new URL(`home`, req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/(tr|en|fr|de|it)/:path*"],
};
