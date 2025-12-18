"use client";

import { motion } from "framer-motion";
import { useState } from "react";
// 1. Importar el componente Image de Next.js
import Image from "next/image"; 

import img1 from "@/assets/img/logo/fotosreveladas/registratenglobus.avif"
import img2 from "@/assets/img/logo/fotosreveladas/compraonlineamazon.avif"
import img3 from "@/assets/img/logo/fotosreveladas/recibeenpuerta.avif"
import { 
  FaPlay, 
  FaUserPlus, 
  FaStore, 
  FaShippingFast,
  FaArrowRight,
  FaCircleNotch
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Regístrate en Globus",
    desc: "Crea tu casillero gratuito y obtén tu dirección física en Miami para tus compras.",
    icon: <FaUserPlus />,
    imgUrl: img1, // Pasamos el objeto importado directamente
    duration: "1:20",
    link: "https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7"
  },
  {
    id: 2,
    title: "Compra Online",
    desc: "Compra en cualquier tienda y envía a tu nueva dirección en Miami.",
    icon: <FaStore />,
    imgUrl: img2,
    duration: "2:05",
    link: null
  },
  {
    id: 3,
    title: "Recibe en tu Puerta",
    desc: "Genera tu orden y nosotros nos encargamos de la logística hasta tu hogar.",
    icon: <FaShippingFast />,
    imgUrl: img3,
    duration: "1:45",
    link: null
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 }
  })
};

export default function VideosFocused() {
  const [playingId, setPlayingId] = useState<number | null>(null);

  const handlePlayClick = (id: number) => {
    setPlayingId(id === playingId ? null : id);
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-200/60 rounded-full blur-3xl opacity-50 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#f58220] font-bold tracking-wider uppercase text-sm mb-3 block"
          >
            Video Guía
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
          >
            Domina Globus en 3 Pasos
          </motion.h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Mira nuestros videos rápidos para aprender cómo traer tus compras desde EE.UU. de la forma más sencilla.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const isPlaying = playingId === step.id;
            
            return (
              <motion.div
                key={step.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
              >
                <div className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 border border-slate-100">
                  
                  {/* === ZONA DEL REPRODUCTOR DE VIDEO === */}
                  <div 
                    className="relative aspect-video bg-slate-900 cursor-pointer group/video overflow-hidden"
                    onClick={() => handlePlayClick(step.id)}
                  >
                    {isPlaying ? (
                      <div className="absolute inset-0 bg-black flex flex-col items-center justify-center text-white">
                        <FaCircleNotch className="text-4xl text-[#f58220] animate-spin mb-3" />
                        <span className="text-sm font-medium">Cargando video...</span>
                        <div className="absolute bottom-0 left-0 h-1 bg-[#f58220] w-1/3"></div>
                      </div>
                    ) : (
                      <>
                        {/* 2. AQUÍ ESTÁ EL CAMBIO CLAVE: USAR <Image /> */}
                        {/* Eliminamos el div con backgroundImage y usamos Image con fill */}
                        <div className="absolute inset-0">
                          <Image 
                            src={step.imgUrl} 
                            alt={step.title}
                            fill // Hace que la imagen llene el contenedor padre
                            className="object-cover transition-transform duration-700 group-hover/video:scale-105"
                            placeholder="blur" // Opcional: añade efecto blur mientras carga si usas import estático
                          />
                        </div>

                        {/* Overlay oscuro */}
                        <div className="absolute inset-0 bg-black/40 group-hover/video:bg-black/50 transition-colors z-10"></div>

                        {/* Botón Play */}
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                          <div className="relative flex items-center justify-center w-16 h-16 bg-[#f58220] rounded-full text-white pl-1 shadow-lg transform transition-all duration-300 group-hover/video:scale-110 group-hover/video:bg-orange-500">
                            <FaPlay className="text-2xl" />
                          </div>
                        </div>

                        <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded-md z-20">
                          {step.duration}
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 z-20 opacity-0 group-hover/video:opacity-100 transition-opacity">
                          <div className="h-full w-0 bg-[#f58220] group-hover/video:w-1/4 transition-all duration-1000 ease-out"></div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* === ZONA DE INFORMACIÓN === */}
                  <div className="p-6 flex flex-col flex-grow relative z-10 bg-white">
                     <div className="absolute top-2 right-4 text-slate-100 text-7xl font-black leading-none select-none -z-10">
                      0{step.id}
                    </div>

                    <div className="flex items-start gap-4 mb-4">
                      <div className="shrink-0 p-3 bg-orange-100 text-[#f58220] rounded-xl text-xl">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#f58220] transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    {step.link && (
                      <div className="mt-auto pt-4">
                        <a 
                          href={step.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-bold text-[#f58220] hover:text-orange-700 transition-colors group/link"
                        >
                          Registrarme ahora 
                          <FaArrowRight className="group-hover/link:translate-x-1 transition-transform"/>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}