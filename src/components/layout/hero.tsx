"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import globusLogo from "@/assets/img/logo/globusorange.png";
import { ArrowRight, CheckCircle, Package, Plane, ShieldCheck } from "lucide-react";

// === TUS FOTOS ===
import slide1 from "@/assets/img/logo/fotosreveladas/AP0A0716.jpg";
import slide2 from "@/assets/img/logo/fotosreveladas/AP0A0753.jpg";

export default function HeroDinamico() {
  const params = useParams();
  const origen = params.origen?.toString() || "USA";
  const destino = params.destino?.toString() || "Colombia";

  const format = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1).replace("-", " ");

  const formattedOrigen = format(origen);
  const formattedDestino = format(destino);

  useEffect(() => {
    document.title = `Envíos desde ${formattedOrigen} a ${formattedDestino} | Globus Cargo`;
  }, [formattedOrigen, formattedDestino]);

  return (
    <section className="relative bg-white overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
      
      {/* === 1. FONDO TÉCNICO & DECORACIÓN === */}
      {/* Patrón de puntos sutil para dar textura "Logística" */}
      <div className="absolute inset-0 z-0 opacity-[0.4]" 
           style={{ backgroundImage: "radial-gradient(#e5e7eb 1.5px, transparent 1.5px)", backgroundSize: "32px 32px" }}>
      </div>
      
      {/* Orbes de luz de marca (Blur) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/60 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/60 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/4 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* === 2. COLUMNA DE TEXTO === */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Badge Superior */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-[#f58220] text-sm font-bold tracking-wide uppercase shadow-sm">
              <Plane size={16} className="animate-pulse" />
              Logística Internacional
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight">
              De <span className="text-gray-400 decoration-gray-200 underline decoration-4 underline-offset-4">{formattedOrigen}</span> a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f58220] to-[#ff9a44]">
                {formattedDestino}
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              Simplificamos tus envíos internacionales. <br className="hidden md:block"/>
              Tu carga viaja segura, rápida y con el mejor precio del mercado.
            </p>

            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7"
                className="group flex items-center justify-center gap-2 bg-[#f58220] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#d96d15] transition-all shadow-[0_10px_25px_rgba(245,130,32,0.3)] hover:-translate-y-1"
              >
                Crear Casillero
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/573001112233"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-[#f58220] hover:text-[#f58220] transition-all hover:bg-orange-50"
              >
                Cotizar Envío
              </a>
            </div>

            {/* Trust Badges (Social Proof) */}
            <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3 text-sm font-medium text-gray-500">
                <div className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-500" /> Carga Asegurada
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-500" /> Sin Costos Ocultos
                </div>
            </div>
          </motion.div>

          {/* === 3. COLUMNA VISUAL (SLIDER + ELEMENTOS FLOTANTES) === */}
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative"
          >
            {/* Marco del Slider */}
            <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-orange-900/10 border-[6px] border-white z-10">
                <HeroSlider />
                
                {/* Gradiente Overlay inferior para legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none"></div>
            </div>

            {/* Elemento Flotante 1: Tarjeta de Tracking Simulada */}
            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-12 bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-white/50 z-20 max-w-[260px]"
            >
                <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-full text-green-600">
                        <Package size={24} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Estado del envío</p>
                        <p className="text-gray-900 font-bold text-lg leading-none mb-1">En Tránsito ✈️</p>
                        <p className="text-xs text-gray-400">Destino: {formattedDestino}</p>
                    </div>
                </div>
            </motion.div>

            {/* Elemento Flotante 2: Logo Flotante */}
            <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white/50">
                <Image src={globusLogo} alt="Logo" width={40} height={40} className="w-10 h-10 object-contain" />
            </div>

            {/* Decoración Detrás del Slider */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-[#f58220] rounded-[2.5rem] opacity-20"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// === SLIDER CON EFECTO KEN BURNS (ZOOM SUAVE) ===
function HeroSlider() {
  const [index, setIndex] = useState(0);

  const slides = [
    { image: slide1 },
    { image: slide2 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 segundos para dar tiempo al zoom
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full bg-gray-100">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }} // Empieza con zoom
          animate={{ opacity: 1, scale: 1 }}   // Hace zoom-out suave
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].image}
            alt={`Logística Globus Cargo ${index}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}