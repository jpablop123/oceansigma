import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // CASO 1: Si el usuario entra a la raíz "/" exacta
  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/es"; // Redirigir a Español por defecto
    return NextResponse.redirect(url);
  }

  // CASO 2: Verificar si la ruta ya tiene el idioma (/es o /en)
  const pathnameHasLocale = pathname.startsWith("/es") || pathname.startsWith("/en");

  // Si ya tiene idioma, dejamos pasar la petición sin hacer nada
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // CASO 3: Si intenta entrar a una ruta interna sin idioma (ej: /contacto), lo mandamos a /es/contacto
  // (Solo si no es un archivo estático, que ya filtramos en el config)
  const url = request.nextUrl.clone();
  url.pathname = `/es${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Este matcher es VITAL. Le dice a Next.js: "Ejecuta este middleware en TODO, MENOS en..."
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - Assets con extensiones comunes (png, jpg, svg, etc)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.svg$).*)',
  ],
};