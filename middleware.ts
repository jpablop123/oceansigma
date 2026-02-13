import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "es"];
const defaultLocale = "es"; // Tu idioma por defecto

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Si la URL ya tiene /en o /es, o es un archivo (imagen, favicon), no hacemos nada
  if (
    pathname.startsWith("/en") ||
    pathname.startsWith("/es") ||
    pathname.includes(".") // Esto evita bloquear imágenes o CSS
  ) {
    return;
  }

  // Si no tiene idioma, redirigir al default (Español)
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Aplicar a todas las rutas excepto las internas de Next.js
    '/((?!_next).*)',
  ],
};