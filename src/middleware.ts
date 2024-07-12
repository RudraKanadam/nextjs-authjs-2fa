import { NextResponse } from "next/server";
import { getToken, GetTokenParams } from "next-auth/jwt";
import { NextRequest } from "next/server";
import {
  DEFAULT_USER_LOGIN_REDIRECT,
  DEFAULT_ADMIN_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
  internalRoutes,
  customerRoutes,
} from "./routes";

export default async function middleware(req: NextRequest) {
  const secret = process.env.AUTH_SECRET;

  if (!secret) {
    throw new Error("AUTH_SECRET is not defined");
  }

  const token = await getToken({
    req: req as any,
    secret,
  } as GetTokenParams);

  const { pathname, origin } = req.nextUrl;

  const isLoggedIn = !!token;
  const isApiAuthRoute = pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(pathname);
  const isAuthRoute = authRoutes.includes(pathname);
  const isAdminRoute = internalRoutes.includes(pathname);
  const isUserRoute = customerRoutes.includes(pathname);

  if (isApiAuthRoute) {
    return NextResponse.next();
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      if (token?.role === "admin") {
        return NextResponse.redirect(
          new URL(DEFAULT_ADMIN_LOGIN_REDIRECT, origin)
        );
      }
      return NextResponse.redirect(
        new URL(DEFAULT_USER_LOGIN_REDIRECT, origin)
      );
    }
    return NextResponse.next();
  }

  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", origin));
  }

  if (isLoggedIn && token?.role) {
    if (token.role === "admin") {
      if (!isAdminRoute && pathname !== DEFAULT_ADMIN_LOGIN_REDIRECT) {
        return NextResponse.redirect(
          new URL(DEFAULT_ADMIN_LOGIN_REDIRECT, origin)
        );
      }
    } else if (token.role === "user") {
      if (!isUserRoute && pathname !== DEFAULT_USER_LOGIN_REDIRECT) {
        return NextResponse.redirect(
          new URL(DEFAULT_USER_LOGIN_REDIRECT, origin)
        );
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
