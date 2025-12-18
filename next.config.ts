import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. reactStrictMode va en la raíz del objeto
  reactStrictMode: true,

  // 2. Configuración de imágenes
  images: {
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
        hostname: '**.cdninstagram.com', // Cubre todos los subdominios de Instagram (scontent, etc.)
      },
      {
        protocol: 'https',
        hostname: '**.fbcdn.net', // A veces Instagram sirve imágenes desde servidores de Facebook
      },
      {
        protocol: 'https',
        hostname: 'feeds.behold.so', // Por si Behold sirve alguna imagen cacheada
      },
    ],
  },
};

export default nextConfig;