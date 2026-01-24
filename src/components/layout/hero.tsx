"use client";

import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, CheckCircle2, FileText, Shield } from "lucide-react";
import logo from "@/assets/img/logo/Gestionglobal1.webp"; 

export default function HeroSST() {

  useEffect(() => {
    document.title = `Gestión Global de Servicios | Expertos en SG-SST`;
  }, []);

  // Parallax Effect
  const { scrollY } = useScroll();
  const yBackground = useTransform(scrollY, [0, 500], [0, 100]);
  const yCards = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section className="relative bg-[#F8FAFC] overflow-hidden pt-36 pb-20 lg:pt-48 lg:pb-32">
      
      {/* === 1. FONDO VIVO (PARALLAX) === */}
      <motion.div style={{ y: yBackground }} className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none">
         <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(#245CA7 1px, transparent 1px), linear-gradient(90deg, #245CA7 1px, transparent 1px)", backgroundSize: "50px 50px" }}></div>
      </motion.div>
      
      {/* Luces Ambientales */}
      <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* === 2. COLUMNA TEXTO === */}
          <div className="text-center lg:text-left space-y-8 relative">
             
             {/* Badge Tech */}
             <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#245CA7] text-[11px] font-bold uppercase tracking-widest mb-2"
             >
              <Shield size={12} className="text-blue-500"/>
              {/* === CAMBIO AQUI === */}
              Seguridad Industrial & Seguridad Salud en el Trabajo
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight"
            >
              Protegemos <br/>
              tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#245CA7] via-blue-500 to-cyan-500 animate-gradient">
                Futuro Empresarial
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-slate-500 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Transformamos el cumplimiento normativo en una ventaja competitiva real. Gestión integral de riesgos con tecnología y experiencia.
            </motion.p>

            {/* Botones (CORREGIDOS) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <a
                href="#servicios"
                className="group relative overflow-hidden bg-[#245CA7] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-blue-900/20 transition-all hover:-translate-y-1"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative flex items-center gap-2">
                  Nuestros Servicios <ArrowRight size={20} />
                </span>
              </a>
              
              {/* ✅ CORREGIDO: Ahora coincide con tu Header */}
              <a
                href="https://wa.me/573166400840"
                target="_blank"
                className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:border-[#245CA7] hover:text-[#245CA7] transition-all shadow-sm hover:shadow-md"
              >
                <Calendar size={20} className="text-[#245CA7]" />
                Agendar Consultoría
              </a>
            </motion.div>

            {/* Stats Minimalistas */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="pt-10 flex items-center justify-center lg:justify-start gap-10 border-t border-slate-200/60 mt-10"
            >
                <div>
                    <p className="text-4xl font-black text-slate-900 tracking-tighter">+500</p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mt-1">Empresas Seguras</p>
                </div>
                <div>
                    <p className="text-4xl font-black text-slate-900 tracking-tighter">100%</p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mt-1">Cumplimiento Legal</p>
                </div>
            </motion.div>
          </div>

          {/* === 3. COLUMNA VISUAL === */}
          <motion.div style={{ y: yCards }} className="relative h-[600px] w-full hidden lg:block perspective-1000">
            
            {/* CÍRCULO BASE */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-50 to-white rounded-full border border-white shadow-[0_0_80px_-20px_rgba(36,92,167,0.1)] flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-blue-100 opacity-50 scale-90"></div>
                
                {/* LOGO FLOTANTE 3D */}
                <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-64 h-64 drop-shadow-2xl"
                >
                    <Image src={logo} alt="Logo 3D" fill className="object-contain" />
                </motion.div>
            </div>

            {/* CARD 1: ALCANCE */}
            <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                className="absolute top-16 right-0 bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-white hover:scale-105 transition-transform"
            >
                <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg text-[#245CA7]"><MapPin size={22}/></div>
                    <div>
                        <p className="font-bold text-slate-900 text-sm">Cobertura Nacional</p>
                        <p className="text-[10px] text-slate-500 font-medium">Gestión en todo el país</p>
                    </div>
                </div>
            </motion.div>

            {/* CARD 2: LICENCIA (✅ CORREGIDO CON DATO REAL) */}
            <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
                className="absolute bottom-24 left-0 bg-[#0F172A] p-5 rounded-2xl shadow-2xl border border-slate-700 w-72"
            >
                <div className="flex justify-between items-start mb-3">
                    <div>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Certificación</p>
                        {/* Dato real sacado de tu captura de pantalla */}
                        <p className="font-bold text-white text-lg leading-none">Licencia SST</p>
                        <p className="text-[#245CA7] font-mono text-sm mt-1">No. 2562</p>
                    </div>
                    <div className="bg-green-500/20 p-1.5 rounded-full text-green-400">
                        <CheckCircle2 size={18} />
                    </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] text-slate-400">Vigente / Avalada</span>
                </div>
            </motion.div>

            {/* CARD 3: GESTIÓN */}
            <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-10 right-10 bg-white p-4 pr-6 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center gap-4"
            >
                <div className="p-3 rounded-xl bg-orange-50 text-orange-500">
                    <FileText size={24} />
                </div>
                <div>
                    <p className="font-bold text-slate-900 leading-tight">Normativa al Día</p>
                    <p className="text-xs text-slate-500 mt-0.5">Gestión documental</p>
                </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}