"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users } from "lucide-react"; 

// --- 1. IMPORTAMOS LOS NUEVOS LOGOS WEBP ---
import colpatria from "@/assets/img/logo/colpatria.webp";
import sura from "@/assets/img/logo/sura.webp";
import bolivar from "@/assets/img/logo/bolivar.webp";
import equidad from "@/assets/img/logo/equidad.webp";
import positiva from "@/assets/img/logo/positiva.webp";

// --- 2. ARRAY DE PARTNERS ---
const partners = [
  { name: "Positiva", src: positiva }, 
  { name: "Sura", src: sura },     
  { name: "Seguros Bolívar", src: bolivar },
  { name: "AXA Colpatria", src: colpatria },
  { name: "Equidad Seguros", src: equidad },
];

// Duplicamos x6 para efecto infinito
const infinitePartners = [...partners, ...partners, ...partners, ...partners, ...partners, ...partners];

export default function PartnersMarquee() {
  return (
    <section className="relative py-32 bg-slate-50 overflow-hidden border-y border-white">
      
      {/* FONDO TECNOLÓGICO */}
      <div className="absolute inset-0 opacity-[0.5]" 
           style={{ 
               backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", 
               backgroundSize: "24px 24px" 
           }}>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-white via-white/60 to-transparent z-0 pointer-events-none"></div>

      {/* SYSTEM LINK */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-center z-20">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
        <div className="absolute flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm shadow-slate-200/50 -translate-y-1/2">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">System Link Active</span>
        </div>
      </div>

      {/* HEADER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-lg bg-[#245CA7] text-white font-bold tracking-widest text-[10px] uppercase mb-5 shadow-lg shadow-blue-900/20">
                <Users size={12} className="text-blue-200" /> Ecosistema de Confianza
            </span>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                Trabajamos con <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#245CA7] to-blue-500">los Mejores</span>
            </h3>
        </motion.div>
      </div>

      {/* CINTA INFINITA */}
      <div className="relative w-full overflow-visible py-4 z-10">
        <div className="absolute top-0 left-0 z-30 h-full w-24 md:w-48 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 z-30 h-full w-24 md:w-48 bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent pointer-events-none"></div>

        <div className="flex items-center">
            <motion.div
              className="flex items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 80, ease: "linear", repeat: Infinity }}
              style={{ width: "max-content" }}
            >
              {infinitePartners.map((partner, index) => (
                <div key={index} className="flex items-center relative">
                  
                  {/* CARD */}
                  <div className="group relative w-[240px] h-[120px] md:w-[300px] md:h-[160px] bg-white rounded-[2rem] flex items-center justify-center p-8 cursor-pointer transition-all duration-500 z-10
                    border border-slate-100 
                    shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] 
                    hover:border-blue-200 hover:shadow-[0_25px_50px_-12px_rgba(36,92,167,0.25)] hover:-translate-y-2"
                  >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity duration-500"></div>
                      <div className="relative z-10 w-full h-full flex items-center justify-center">
                        <div className="relative w-full h-full filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out transform group-hover:scale-110">
                            <Image src={partner.src} alt={partner.name} fill className="object-contain p-2" />
                        </div>
                      </div>
                  </div>

                  {/* CONECTOR TECH */}
                  <div className="relative flex items-center justify-center w-8 md:w-16 -z-10">
                      <div className="w-[120%] h-[2px] bg-slate-200"></div>
                      <motion.div 
                          className="absolute left-0 w-8 h-[2px] bg-gradient-to-r from-transparent via-[#245CA7] to-transparent z-10"
                          animate={{ left: ["-20%", "120%"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: index * 0.2 }}
                      />
                      <div className="absolute flex items-center justify-center z-20 bg-slate-50 p-1 rounded-full border border-slate-100">
                        <div className="w-1.5 h-1.5 bg-slate-300 rounded-full group-hover:bg-[#245CA7] transition-colors duration-300"></div>
                      </div>
                  </div>

                </div>
              ))}
            </motion.div>
        </div>
      </div>

      {/* FOOTER DE SECCIÓN */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-20">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-gradient-to-r from-transparent via-[#245CA7] to-transparent opacity-80 shadow-[0_0_10px_#245CA7]"></div>
        <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#245CA7] blur-[100px] opacity-20"></div>
      </div>

    </section>
  );
}