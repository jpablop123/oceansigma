"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Activity,
  Headphones,
  Truck,
  ArrowRight,
  Leaf,
  CheckCircle2
} from "lucide-react";

const diferenciales = [
  {
    icon: ShieldCheck,
    title: "Excelencia Normativa",
    desc: "Garantizamos el cumplimiento estricto de la normativa vigente, mitigando riesgos legales y operativos.",
  },
  {
    icon: Users,
    title: "Capital Humano",
    desc: "Elevamos el perfil de sus trabajadores mediante capacitación técnica y una cultura de autocuidado.",
  },
  {
    icon: Truck,
    title: "Cobertura Nacional",
    desc: "Capacidad operativa en las principales regiones del país con estandarización de procesos.",
  },
  {
    icon: Activity,
    title: "Gestión Basada en Datos",
    desc: "Diagnósticos precisos y seguimiento de indicadores para la toma de decisiones gerenciales.",
  },
  {
    icon: Leaf,
    title: "Sostenibilidad Corporativa",
    desc: "Integramos la seguridad y salud como pilares fundamentales del desarrollo sostenible de su empresa.",
  },
  {
    icon: Headphones,
    title: "Soporte Especializado",
    desc: "Acceso directo a un equipo multidisciplinario de expertos para resolver situaciones críticas.",
  },
];

export default function DiferencialesSSTProfessionalDark() {
  return (
    <section className="relative py-24 px-6 bg-[#0B1120] overflow-hidden">
      
      {/* === FONDO ELEGANTE === */}
      {/* Foco de luz superior sutil (Spotlight) para dar profundidad sin ser "gamer" */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#245CA7] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
      
      {/* Patrón de puntos muy sutil */}
      <div className="absolute inset-0 opacity-[0.05]" 
           style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* === HEADER === */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
             <ShieldCheck size={14} /> Por qué elegirnos
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight"
          >
            Respaldo Integral para su <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#245CA7]">
                Gestión de Riesgos
            </span>
          </motion.h2>
          
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="mt-6 text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Combinamos rigor técnico con visión estratégica para convertir la seguridad en una ventaja competitiva para su organización.
          </motion.p>
        </div>

        {/* === GRID CORPORATIVO DARK === */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diferenciales.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative bg-[#111827] p-8 rounded-2xl border border-white/5 hover:border-[#245CA7]/50 transition-all duration-300"
            >
              {/* Efecto hover suave: cambio de fondo muy sutil */}
              <div className="absolute inset-0 bg-[#245CA7] opacity-0 group-hover:opacity-[0.03] rounded-2xl transition-opacity duration-300 pointer-events-none"></div>

              {/* Encabezado Tarjeta */}
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1F2937] text-blue-400 border border-white/5 group-hover:bg-[#245CA7] group-hover:text-white group-hover:border-[#245CA7] transition-all duration-300 shadow-lg">
                  <d.icon size={26} strokeWidth={1.5} />
                </div>
                <CheckCircle2 size={20} className="text-slate-700 group-hover:text-blue-500 transition-colors" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors relative z-10">
                  {d.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4 mt-4 group-hover:border-blue-500/20 transition-colors relative z-10">
                  {d.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* === CTA === */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
        >
          <a
            href="https://wa.me/573166400840"
            target="_blank"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-[#245CA7] text-white font-bold text-lg hover:bg-blue-600 transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 hover:-translate-y-1"
          >
            Solicitar Asesoría Corporativa
            <ArrowRight size={20} />
          </a>
          <p className="mt-4 text-xs text-slate-500 font-medium uppercase tracking-wide">
            Atención prioritaria para empresas
          </p>
        </motion.div>
      </div>
    </section>
  );
}