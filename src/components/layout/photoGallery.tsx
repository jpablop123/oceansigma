"use client";

import { ArrowUpRight, Plus } from "lucide-react";

// Configuración de las imágenes MEJORADA
const galleryItems = [
  {
    // 1. EL ANCLA (Grande, Cuadrado)
    // Mantiene el foco visual a la izquierda
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1470&auto=format&fit=crop",
    alt: "Logistics Warehouse",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
    dictKey: "img1"
  },
  {
    // 2. PANORÁMICA SUPERIOR (Ancha)
    // Rompe la monotonía vertical
    src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1470&auto=format&fit=crop",
    alt: "Cargo Ship",
    colSpan: "md:col-span-2", 
    rowSpan: "md:row-span-1",
    dictKey: "img2"
  },
  {
    // 3. DETALLE 1 (Pequeño)
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1474&auto=format&fit=crop",
    alt: "Air Freight",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    dictKey: "img3"
  },
  {
    // 4. DETALLE 2 (Pequeño)
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1470&auto=format&fit=crop",
    alt: "Port Operations",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    dictKey: "img4"
  },
  {
    // 5. BASE SÓLIDA IZQUIERDA (Ancha)
    // Ideal para mostrar vehículos en movimiento
    src: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1470&auto=format&fit=crop",
    alt: "Trucking",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
    dictKey: "img5"
  },
  {
    // 6. BASE SÓLIDA DERECHA (Ancha)
    // Ideal para fotos de grupo o reuniones
    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1469&auto=format&fit=crop",
    alt: "Team",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
    dictKey: "img6"
  },
];

const PhotoGallery = ({ dict }: { dict: any }) => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Fondo Decorativo */}
      <div className="absolute inset-0 bg-[linear-gradient(#e2e8f0_1px,transparent_1px),linear-gradient(90deg,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-60"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-[10px] font-bold text-slate-600 tracking-widest uppercase">
                {dict.gallery.badge}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              {dict.gallery.title}
            </h2>
          </div>
          <p className="text-slate-600 text-lg max-w-md leading-relaxed text-right md:text-left">
            {dict.gallery.subtitle}
          </p>
        </div>

        {/* Bento Grid Optimizado */}
        {/* Ajusté la altura base a 280px para que el layout completo se vea bien en pantallas estándar */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] gap-6">
          
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className={`relative group rounded-3xl overflow-hidden cursor-pointer ${item.colSpan} ${item.rowSpan}`}
            >
              {/* Imagen de fondo */}
              <div className="absolute inset-0 w-full h-full bg-slate-200">
                 <img 
                    src={item.src} 
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 will-change-transform"
                  />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/30 transition-colors duration-500"></div>

              {/* Botón Flotante */}
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-20">
                <ArrowUpRight size={20} />
              </div>

              {/* Panel de Texto */}
              <div className="absolute inset-x-4 bottom-4 p-5 bg-white/90 backdrop-blur-xl rounded-2xl border border-white/50 shadow-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-slate-900 font-bold text-lg mb-1 leading-tight group-hover:text-blue-700 transition-colors">
                      {dict.gallery.images[item.dictKey].title}
                    </h3>
                    <p className="text-slate-500 text-xs font-medium line-clamp-2">
                      {dict.gallery.images[item.dictKey].desc}
                    </p>
                  </div>
                  
                  <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
                    <Plus size={16} />
                  </div>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default PhotoGallery;