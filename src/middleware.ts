import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Skip locale handling for /strapi routes (API proxy) - let Next.js rewrites handle it
  if (pathname.startsWith('/strapi')) {
    return NextResponse.next();
  }
  
  return intlMiddleware(request);
}

export const config = {
  // Match only internationalized pathnames
  // Explicitly exclude /strapi, /api, /_next, and static files
  matcher: [
    // Match root
    '/',
    // Match locale-prefixed paths (en, hi, mr)
    '/(en|hi|mr)/:path*'
  ]
};

