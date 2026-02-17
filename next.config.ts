import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // --- CAMBIO 1: OBLIGATORIO PARA CLOUDFLARE PAGES ---
  output: 'export', 
  // ---------------------------------------------------

  reactStrictMode: true,

  images: {
    // --- CAMBIO 2: OBLIGATORIO EN MODO STATIC ---
    unoptimized: true, 
    // --------------------------------------------

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      // === AGREGADO PARA INSTAGRAM ===
      {
        protocol: 'https',
        hostname: '**.cdninstagram.com', 
      },
      {
        protocol: 'https',
        hostname: '**.fbcdn.net', 
      },
      {
        protocol: 'https',
        hostname: 'feeds.behold.so', 
      },
    ],
  },
};

export default nextConfig;