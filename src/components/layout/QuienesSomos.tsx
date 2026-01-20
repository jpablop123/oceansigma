"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Briefcase, Stethoscope, HardHat, ShieldAlert, Siren, 
  ArrowUpCircle, BoxSelect, Activity, Zap, FlaskConical, 
  UserCheck, Target, Telescope, ArrowRight, ChevronRight, X, CheckCircle2, LayoutGrid, Sparkles
} from "lucide-react";

// --- DATOS ---
const mainServices = [
  { name: "Consultoría SG-SST", icon: Briefcase, desc: "Estrategia legal y normativa." },
  { name: "Servicios de IPS", icon: Stethoscope, desc: "Exámenes médicos laborales." },
  { name: "Elementos de Protección", icon: HardHat, desc: "Suministro de EPP certificados." },
  { name: "Seguridad Industrial", icon: ShieldAlert, desc: "Prevención de alto impacto." },
];

const secondaryServices = [
  { name: "Plan de Emergencias", icon: Siren },
  { name: "Trabajo en Alturas", icon: ArrowUpCircle },
  { name: "Espacios Confinados", icon: BoxSelect },
  { name: "Sistemas de Vigilancia", icon: Activity },
  { name: "Riesgo Físico", icon: UserCheck },
  { name: "Riesgo Eléctrico", icon: Zap },
  { name: "Riesgo Químico", icon: FlaskConical },
  { name: "Riesgo Ergonómico", icon: UserCheck },
];

const catalogCategories = [
    {
        title: "Gestión & Consultoría",
        items: ["Diseño SG-SST", "Auditorías Internas", "Planes de Emergencia", "Batería de Riesgo Psicosocial"]
    },
    {
        title: "Seguridad Industrial",
        items: ["Trabajo en Alturas", "Espacios Confinados", "Riesgo Eléctrico (RETIE)", "Bloqueo y Etiquetado"]
    },
    {
        title: "Higiene & Salud",
        items: ["Mediciones Higiénicas", "Exámenes Médicos", "Sistemas de Vigilancia", "Ergonomía"]
    }
];

export default function ServicesMission() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <section className="relative pt-32 pb-32 overflow-hidden bg-slate-50">
      
      {/* === NUEVO SEPARADOR HORIZONTAL (Horizontal Premium) === */}
      {/* Se ubica en la parte superior absoluta para crear el corte */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-center pt-10 pb-10 z-20">
          
          {/* Línea Izquierda */}
          <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-slate-300 to-slate-300 opacity-50"></div>
          
          {/* Etiqueta Central */}
          <div className="mx-4 relative">
              <div className="absolute inset-0 bg-blue-100 blur-xl rounded-full opacity-50"></div>
              <span className="relative flex items-center gap-2 px-6 py-2 bg-white border border-blue-100 rounded-full text-[#245CA7] text-[10px] font-bold uppercase tracking-[0.2em] shadow-sm">
                  <Sparkles size={12} className="text-blue-400" />
                  Nuestro Propósito
              </span>
          </div>
          
          {/* Línea Derecha */}
          <div className="w-1/3 h-px bg-gradient-to-r from-slate-300 via-slate-300 to-transparent opacity-50"></div>
      </div>


      {/* === 0. FONDO === */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/60 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>
      <div className="absolute inset-0 opacity-[0.4]" 
           style={{ backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "32px 32px" }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mt-16"> {/* mt-16 para dar espacio tras el separador */}

        {/* === 1. MISIÓN Y VISIÓN === */}
        <div className="grid lg:grid-cols-2 gap-8 mb-32">
            
            {/* MISIÓN */}
            <Link href="/nosotros" className="block h-full group">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden h-full hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-2"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-transparent opacity-50 rounded-full blur-3xl -mr-16 -mt-16"></div>

                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-14 h-14 bg-blue-50 text-[#245CA7] rounded-2xl flex items-center justify-center border border-blue-100 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <Target size={28} />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-[#245CA7] group-hover:text-white transition-all duration-300">
                                <ArrowRight size={20} />
                            </div>
                        </div>
                        
                        <h3 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-[#245CA7] transition-colors">Nuestra Misión</h3>
                        <p className="text-slate-600 text-lg leading-relaxed font-medium">
                            Fortalecer la cultura de <span className="text-[#245CA7] font-bold">Seguridad y Salud</span> transformando el cumplimiento normativo en una ventaja competitiva real.
                        </p>
                    </div>
                </motion.div>
            </Link>

            {/* VISIÓN */}
            <Link href="/nosotros" className="block h-full group">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="relative bg-gradient-to-br from-[#245CA7] to-[#1e4b8a] p-10 rounded-[2.5rem] shadow-2xl shadow-blue-900/30 text-white overflow-hidden h-full hover:scale-[1.02] transition-transform duration-500"
                >
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                     <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-400 rounded-full blur-[80px] opacity-30"></div>

                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-inner group-hover:rotate-12 transition-transform duration-500">
                                <Telescope size={28} />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/50 group-hover:bg-white group-hover:text-[#245CA7] transition-all duration-300">
                                <ArrowRight size={20} />
                            </div>
                        </div>

                        <h3 className="text-3xl font-black mb-4">Nuestra Visión</h3>
                        <p className="text-blue-100 text-lg leading-relaxed font-medium">
                            Ser el referente nacional indiscutible en innovación y excelencia en la gestión de riesgos laborales para el año <span className="font-bold text-white">2030</span>.
                        </p>
                    </div>
                </motion.div>
            </Link>
        </div>

        {/* === 2. HEADER SERVICIOS === */}
        <div className="text-center max-w-3xl mx-auto mb-20">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
             >
                 <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 text-[#245CA7] font-bold tracking-widest text-xs uppercase mb-6 shadow-sm">
                    <LayoutGrid size={14} /> Portafolio Integral
                 </span>
                 <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
                    Soluciones <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#245CA7] to-blue-500">360°</span>
                 </h2>
                 <p className="text-slate-500 text-lg font-medium">
                    Diseñamos estrategias de seguridad a la medida de tu industria, combinando rigor técnico con innovación tecnológica.
                 </p>
             </motion.div>
        </div>

        {/* === 3. GRID SERVICIOS === */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {mainServices.map((service, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-slate-200 to-slate-100 group-hover:from-[#245CA7] group-hover:to-blue-400 transition-all duration-500"></div>
                    
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 mb-6 group-hover:bg-[#245CA7] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-blue-500/30">
                        <service.icon size={30} />
                    </div>
                    
                    <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#245CA7] transition-colors">{service.name}</h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{service.desc}</p>
                </motion.div>
            ))}
        </div>

        {/* GRID SECUNDARIO */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {secondaryServices.map((service, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (idx * 0.05) }}
                    className="group bg-white/60 backdrop-blur-sm px-5 py-4 rounded-2xl border border-white/50 shadow-sm flex items-center gap-3 hover:bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 cursor-default hover:-translate-y-1"
                >
                    <div className="text-slate-400 group-hover:text-[#245CA7] transition-colors p-1.5 bg-slate-100 rounded-lg group-hover:bg-blue-50">
                        <service.icon size={18} />
                    </div>
                    <span className="text-xs font-bold text-slate-600 group-hover:text-[#245CA7] transition-colors">
                        {service.name}
                    </span>
                </motion.div>
            ))}
        </div>

        {/* BOTÓN CENTRAL */}
        <div className="flex justify-center">
            <button 
                onClick={() => setIsModalOpen(true)}
                className="group relative flex items-center gap-4 px-10 py-5 bg-[#245CA7] text-white rounded-full font-bold shadow-xl shadow-blue-900/20 hover:shadow-blue-900/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
                <span className="relative z-10 text-sm tracking-wide">VER CATÁLOGO COMPLETO</span>
                <div className="relative z-10 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ChevronRight size={18} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            </button>
        </div>

        {/* === MODAL === */}
        {mounted && createPortal(
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[99999] flex items-center justify-center px-4">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
                        />

                        <motion.div 
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="relative w-full max-w-5xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[85vh] border border-white/20"
                        >
                            <button 
                                onClick={() => setIsModalOpen(false)} 
                                className="absolute top-4 right-4 z-50 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 transition-colors"
                            >
                                <X size={20} />
                            </button>

                            {/* Columna Marca */}
                            <div className="w-full md:w-1/3 bg-[#020617] p-10 text-white flex flex-col justify-between relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none"></div>
                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/10 backdrop-blur-sm">
                                        <LayoutGrid size={28} />
                                    </div>
                                    <h3 className="text-3xl font-black mb-4">Nuestro Catálogo</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                        Explore nuestra oferta integral diseñada para cubrir cada aspecto de la seguridad laboral.
                                    </p>
                                    <div className="h-1 w-20 bg-[#245CA7] rounded-full"></div>
                                </div>
                            </div>

                            {/* Columna Lista */}
                            <div className="flex-1 p-10 overflow-y-auto bg-slate-50/50 custom-scrollbar">
                                <div className="grid gap-10">
                                    {catalogCategories.map((cat, i) => (
                                        <div key={i}>
                                            <h5 className="text-xs font-bold text-[#245CA7] uppercase tracking-widest mb-5 flex items-center gap-3">
                                                <span className="w-2 h-2 rounded-full bg-[#245CA7]"></span>
                                                {cat.title}
                                            </h5>
                                            <div className="grid sm:grid-cols-2 gap-3">
                                                {cat.items.map((item, j) => (
                                                    <div 
                                                        key={j} 
                                                        className="group flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-blue-200 hover:shadow-md cursor-default transition-all duration-200"
                                                    >
                                                        <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-500 group-hover:bg-green-100 transition-colors">
                                                            <CheckCircle2 size={14} />
                                                        </div>
                                                        <span className="text-sm text-slate-700 font-medium group-hover:text-[#245CA7] transition-colors">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10 pt-6 border-t border-slate-200 flex justify-end">
                                    <a 
                                        href="https://wa.me/573166400840" 
                                        target="_blank"
                                        className="flex items-center gap-2 bg-[#245CA7] text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-[#1b4680] hover:shadow-lg transition-all"
                                    >
                                        Solicitar Cotización Personalizada <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>,
            document.body
        )}

      </div>
    </section>
  );
}