"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Instagram, Quote, Star, CheckCircle } from "lucide-react";
import Image from "next/image";
import { Montserrat } from "next/font/google";

// Importación de imágenes
import adrianAlvarez from "@/assets/img/logo/fotosreveladas/adrianalvarez.jpeg";
import catarodriguez from "@/assets/img/logo/fotosreveladas/catalianrodriguez.jpeg";
import nicoCortes from "@/assets/img/logo/fotosreveladas/nicolas cortes.jpeg";
import joseBravo from "@/assets/img/logo/fotosreveladas/josebravo.jpeg";
import eduard from "@/assets/img/logo/fotosreveladas/eduardo oliveros.jpeg";
import jose from "@/assets/img/logo/fotosreveladas/josealejandro.jpeg";
import sebastian from "@/assets/img/logo/fotosreveladas/sebastian.jpeg";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const testimonials = [
  {
    name: "Adrian Alvarez",
    city: "Bogotá",
    role: "Emprendedor",
    ig: "@adrianzon",
    text: "Excelente servicio, mis compras llegaron puntuales y en perfecto estado. Los recomiendo totalmente.",
    imgSrc: adrianAlvarez,
    rating: 5,
  },
  {
    name: "Catalina Rodriguez",
    city: "Bucaramanga",
    role: "Cliente Frecuente",
    ig: "@catalinarodriguez27",
    text: "Me asesoraron en todo y el envío salió más económico de lo que pensaba. Cero estrés.",
    imgSrc: catarodriguez,
    rating: 5,
  },
  {
    name: "Nicolas Cortes",
    city: "Bogotá",
    role: "Comprador Online",
    ig: "@nicolascortesd",
    text: "La atención por WhatsApp fue inmediata, sentí mucha confianza. Seguiré usando Globus Cargo.",
    imgSrc: nicoCortes,
    rating: 5,
  },
  {
    name: "Jose Fernando Bravo",
    city: "Bogotá",
    role: "Cliente VIP",
    ig: "@josebravo100",
    text: "El proceso fue súper fácil, desde que registré mi casillero hasta que recibí en casa.",
    imgSrc: joseBravo,
    rating: 5,
  },
  {
    name: "Eduardo Oliveros",
    city: "Medellín",
    role: "Empresario",
    ig: "@eduardoliveros",
    text: "Rápidos, seguros y económicos. Mis pedidos siempre con Globus.",
    imgSrc: eduard,
    rating: 5,
  },
  
  {
    name: "Sebastian Amaya",
    city: "Bogota",
    role: "Cliente Frecuente",
    ig: "@sebastianamaya",
    text: "Yo solo quería que llegara bien… y llegó perfecto, sin enredos ni vueltas raras. Hasta me sorprendió lo fácil que fue.",
    imgSrc: sebastian,
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className={`${montserrat.className} relative py-24 px-6 overflow-hidden bg-slate-50`}>
      
      {/* === Background Decorativo Sutil === */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* === Header === */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#f58220] font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block">
            Voces Reales
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            Clientes Felices
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Más de 50,000 envíos entregados con éxito. Así es como ayudamos a personas y empresas a conectar con el mundo.
          </p>
        </div>

        {/* === Carrusel === */}
        <div 
            className="relative max-w-4xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
          {/* Botones Flotantes Desktop */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-12 xl:-left-16 z-20 hidden lg:block">
             <button onClick={prev} className="p-3 bg-white rounded-full shadow-md text-gray-400 hover:text-[#f58220] hover:scale-110 transition-all border border-gray-100 group">
                <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
             </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-12 xl:-right-16 z-20 hidden lg:block">
             <button onClick={next} className="p-3 bg-white rounded-full shadow-md text-gray-400 hover:text-[#f58220] hover:scale-110 transition-all border border-gray-100 group">
                <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
             </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-white relative overflow-hidden"
            >
              {/* Marca de agua decorativa */}
              <Quote className="absolute top-6 right-8 text-orange-50 w-32 h-32 md:w-40 md:h-40 rotate-12 -z-0" />

              <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10">
                
                {/* === IMAGEN (Avatar Controlado) === */}
                <div className="shrink-0 relative">
                   {/* Contenedor de imagen circular con borde */}
                   <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-orange-50 shadow-inner relative">
                        <Image
                            src={testimonials[current].imgSrc}
                            alt={testimonials[current].name}
                            fill
                            className="object-cover"
                        />
                   </div>
                   {/* Badge de Verificado */}
                   <div className="absolute bottom-1 right-1 bg-white p-1.5 rounded-full shadow-sm">
                       <CheckCircle className="text-[#f58220] w-6 h-6 fill-orange-50" />
                   </div>
                </div>

                {/* === CONTENIDO === */}
                <div className="flex-1 text-center md:text-left">
                    {/* Estrellas */}
                    <div className="flex justify-center md:justify-start gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={18} fill="#fbbf24" className="text-[#fbbf24]" />
                        ))}
                    </div>

                    {/* Texto Testimonio */}
                    <p className="text-xl text-gray-700 italic font-medium leading-relaxed mb-6">
                        &ldquo;{testimonials[current].text}&rdquo;
                    </p>

                    {/* Info del Usuario */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-t border-gray-100 pt-5 mt-auto">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">{testimonials[current].name}</h3>
                            <p className="text-sm text-gray-500 font-medium">{testimonials[current].role} • {testimonials[current].city}</p>
                        </div>

                        <a 
                             href={`https://instagram.com/${testimonials[current].ig.substring(1)}`}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-50 hover:bg-[#f58220] text-gray-600 hover:text-white rounded-full text-xs font-bold transition-colors duration-300 self-center md:self-auto"
                        >
                            <Instagram size={14} />
                            {testimonials[current].ig}
                        </a>
                    </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* === Indicadores (Puntos) === */}
          <div className="flex justify-center mt-10 gap-2">
             {testimonials.map((_, i) => (
               <button
                 key={i}
                 onClick={() => setCurrent(i)}
                 className={`h-2 rounded-full transition-all duration-300 ${
                   i === current ? "w-8 bg-[#f58220]" : "w-2 bg-gray-300 hover:bg-gray-400"
                 }`}
                 aria-label={`Ir al testimonio ${i + 1}`}
               />
             ))}
          </div>

           {/* Botones Móviles */}
           <div className="flex justify-center gap-6 mt-6 lg:hidden">
              <button onClick={prev} className="p-3 bg-white shadow rounded-full text-gray-600 active:scale-95"><ChevronLeft/></button>
              <button onClick={next} className="p-3 bg-white shadow rounded-full text-gray-600 active:scale-95"><ChevronRight/></button>
           </div>

        </div>
      </div>
    </section>
  );
}