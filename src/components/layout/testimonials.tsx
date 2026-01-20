"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle2, ShieldCheck, User, Quote } from "lucide-react";

// --- FUNCIÓN DE FECHA ---
const getTimeAgo = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const days = Math.floor(diffInSeconds / 86400);
  if (days === 0) return "Hoy";
  if (days === 1) return "Ayer";
  if (days < 7) return `Hace ${days} días`;
  if (days < 30) return `Hace ${Math.floor(days / 7)} semanas`;
  if (days < 365) return `Hace ${Math.floor(days / 30)} meses`;
  return "Hace más de un año";
};

// --- DATOS ---
const reviews = [
  {
    sector: "Sector Construcción",
    title: "Resolvieron un requerimiento crítico",
    text: "Teníamos una visita del Ministerio encima y necesitábamos organizar todo el sistema de alturas. Su respuesta fue inmediata.",
    rating: 5,
    date: "2025-01-15"
  },
  {
    sector: "Logística y Transporte",
    title: "Excelente gestión documental",
    text: "La plataforma para descargar los conceptos médicos nos ahorra horas de trabajo administrativo. Muy organizados.",
    rating: 5,
    date: "2025-01-10"
  },
  {
    sector: "Propiedad Horizontal",
    title: "Auditoría RUC aprobada",
    text: "Gracias a su acompañamiento logramos el puntaje necesario en la auditoría del RUC. Conocen la norma a la perfección.",
    rating: 5,
    date: "2024-12-28"
  },
  {
    sector: "Sector Salud (IPS)",
    title: "Respaldo jurídico real",
    text: "Tuvimos un accidente laboral complejo y su equipo jurídico nos blindó completamente. Sentirse respaldado así da tranquilidad.",
    rating: 5,
    date: "2024-12-15"
  },
  {
    sector: "Industria Manufacturera",
    title: "Eficiencia y cero papel",
    text: "Por fin una empresa de SST que no te llena de papeles inútiles. Todo digital, rápido y enfocado.",
    rating: 5,
    date: "2024-11-20"
  },
];

const infiniteReviews = [...reviews, ...reviews, ...reviews];

export default function Testimonials() {
  return (
    <section className="relative py-32 bg-[#020617] overflow-hidden">
      
      {/* === 1. FONDO AMBIENTAL (LUCES) === */}
      {/* Luz Azul Izquierda */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#245CA7] opacity-20 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      {/* Luz Cian Derecha */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500 opacity-10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 translate-y-1/3"></div>
      
      {/* Ruido sutil para textura */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-20">
        
        {/* === HEADER (Minimalista Dark) === */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-10">
            <div className="max-w-2xl">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 mb-4"
                >
                    <div className="h-[2px] w-10 bg-gradient-to-r from-[#245CA7] to-cyan-400"></div>
                    <span className="text-cyan-400 font-bold tracking-widest text-xs uppercase glow-text">Experiencias Reales</span>
                </motion.div>
                
                <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-black text-white leading-tight"
                >
                    La confianza se construye con <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#245CA7] via-blue-400 to-cyan-300">Resultados</span>
                </motion.h3>
            </div>

            {/* Stats en Caja de Cristal */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-6 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md"
            >
                <div className="text-right">
                    <div className="flex gap-1 mb-1">
                        {[1,2,3,4,5].map(i => (
                            <Star key={i} size={18} fill="#22c55e" strokeWidth={0} />
                        ))}
                    </div>
                    <p className="text-xs text-slate-400 font-medium">4.9/5 Promedio</p>
                </div>
                <div className="h-10 w-[1px] bg-white/10"></div>
                <div>
                    <ShieldCheck size={32} className="text-white mb-1" />
                    <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">Verificado</p>
                </div>
            </motion.div>
        </div>
      </div>

      {/* === BANDA INFINITA (Dark Glass Cards) === */}
      <div className="relative w-full overflow-visible">
        
        {/* Máscaras de desvanecimiento laterales (Oscuras) */}
        <div className="absolute top-0 left-0 z-20 h-full w-32 bg-gradient-to-r from-[#020617] to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 z-20 h-full w-32 bg-gradient-to-l from-[#020617] to-transparent pointer-events-none"></div>

        <motion.div
            className="flex gap-6 w-max pl-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
                repeat: Infinity, 
                ease: "linear", 
                duration: 60 // Velocidad suave
            }}
        >
            {infiniteReviews.map((review, index) => (
                <div 
                    key={index} 
                    className="w-[350px] md:w-[420px] flex-shrink-0 group relative"
                >
                    {/* Tarjeta de Cristal */}
                    <div className="bg-white/[0.03] hover:bg-white/[0.07] backdrop-blur-xl p-8 rounded-[2rem] border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
                        
                        {/* Comillas decorativas */}
                        <Quote className="absolute top-8 right-8 text-white/5 group-hover:text-cyan-500/20 transition-colors duration-500" size={48} fill="currentColor" />

                        {/* Estrellas */}
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star 
                                        key={i} 
                                        size={16} 
                                        fill={i < review.rating ? "#22c55e" : "none"} // Verde vibrante
                                        strokeWidth={i < review.rating ? 0 : 2}
                                        className={i >= review.rating ? "text-slate-700" : ""}
                                    />
                                ))}
                            </div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide bg-white/5 px-2 py-1 rounded-md">
                                {getTimeAgo(review.date)}
                            </span>
                        </div>

                        {/* Contenido */}
                        <h4 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-1">
                            {review.title}
                        </h4>
                        <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3 group-hover:text-slate-300 transition-colors">
                            "{review.text}"
                        </p>

                        {/* Footer Card */}
                        <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#245CA7] to-cyan-500 p-[1px]">
                                <div className="w-full h-full rounded-full bg-[#0B1120] flex items-center justify-center">
                                    <User size={16} className="text-white" />
                                </div>
                            </div>
                            <div>
                                <p className="text-white font-bold text-xs">Cliente Verificado</p>
                                <p className="text-[10px] text-cyan-500 font-bold uppercase tracking-wide">
                                    {review.sector}
                                </p>
                            </div>
                            <div className="ml-auto text-green-500 opacity-50 group-hover:opacity-100 transition-opacity">
                                <CheckCircle2 size={18} />
                            </div>
                        </div>

                    </div>
                    
                    {/* Glow Effect detrás de la tarjeta al hover */}
                    <div className="absolute inset-0 bg-blue-500/20 rounded-[2rem] blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
            ))}
        </motion.div>
      </div>

    </section>
  );
}