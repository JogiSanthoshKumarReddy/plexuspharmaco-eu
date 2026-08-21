import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'de', 'fr', 'es'];
const defaultLocale = 'en';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if pathname starts with one of the locales
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Read preferred locale from cookie, fallback to default
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  const preferredLocale = cookieLocale && locales.includes(cookieLocale) ? cookieLocale : defaultLocale;

  // Redirect to preferred locale if missing
  request.nextUrl.pathname = `/${preferredLocale}${pathname === '/' ? '' : pathname}`;
  const response = NextResponse.redirect(request.nextUrl);
  
  // Ensure the cookie is set on the response if we are defaulting
  if (!cookieLocale) {
    response.cookies.set('NEXT_LOCALE', preferredLocale, { path: '/', maxAge: 31536000 });
  }
  
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|images|assets|pharma|favicon.ico|manifest.json).*)',
  ],
}
