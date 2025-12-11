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
    ],
  },
};

export default nextConfig;