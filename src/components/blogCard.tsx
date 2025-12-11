import React from "react";
import Image, { StaticImageData } from "next/image"; // 👈 Importamos también StaticImageData

// Interfaz para TypeScript
interface BlogPost {
  id: string | number;
  title: string;
  excerpt: string;
  date: string;
  category?: string;
  // 👇 Clave: aceptar tanto StaticImageData (imports locales) como string (URL)
  image?: string | StaticImageData;
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="group cursor-pointer flex flex-col h-full">
      {/* 1. CONTENEDOR DE IMAGEN */}
      <div className="h-64 bg-gray-200 rounded-2xl mb-6 overflow-hidden relative border border-gray-100 shadow-sm transition-all duration-300 group-hover:shadow-md">
        {/* Renderizado condicional: Solo si hay imagen */}
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill // Hace que la imagen llene el contenedor padre (h-64)
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          // Fallback visual por si no hay imagen (Opcional)
          <div className="flex items-center justify-center h-full text-gray-400">
            <span className="text-xs">Sin imagen</span>
          </div>
        )}

        {/* Etiqueta flotante */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
            {post.category || "Logística"}
          </span>
        </div>
      </div>

      {/* 2. CONTENIDO DE TEXTO */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-medium text-[#FF8313]">
            Globus Insight
          </span>
          <span className="text-xs text-gray-400">•</span>
          <span className="text-xs text-gray-500 font-mono">{post.date}</span>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#FF8313] transition-colors leading-tight">
          {post.title}
        </h3>

        <p className="text-[#847E7E] leading-relaxed line-clamp-3 text-sm mb-4 flex-grow">
          {post.excerpt}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-100 flex justify-end">
          <span className="text-gray-400 group-hover:translate-x-1 transition-transform duration-300 text-lg">
            &rarr;
          </span>
        </div>
      </div>
    </div>
  );
}