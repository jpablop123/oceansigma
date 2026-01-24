"use client";

import Image from "next/image"; 
import Link from "next/link";
import logo from "@/assets/img/logo/Gestionglobal1.webp";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Award,
  Clock 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0B1120] text-slate-300 font-sans overflow-hidden pt-20">
      
      {/* === 1. FONDO INTEGRADO === */}
      {/* Mapa de puntos sutil */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
            backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/2/2f/World_map_dots_white.svg")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}
      />
      
      {/* Gradiente SUPERIOR para fusionar con la sección anterior (Dark Mode) */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0B1120] to-[#0B1120]/90 z-0 pointer-events-none" />

      {/* === CONTENIDO PRINCIPAL === */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10">
        
        {/* CTA FLOTANTE */}
        <div className="relative flex flex-col md:flex-row justify-between items-center bg-[#111827] border border-white/5 rounded-2xl p-8 mb-20 shadow-2xl group overflow-hidden">
          {/* Luz decorativa hover */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#245CA7]/10 rounded-full blur-[80px] group-hover:bg-[#245CA7]/20 transition-all duration-500 pointer-events-none"></div>
          
          <div className="mb-6 md:mb-0 relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <ShieldCheck className="text-[#245CA7]" />
              ¿Tu empresa cumple la norma?
            </h3>
            <p className="text-slate-400 max-w-lg">Evita sanciones y protege a tu equipo. Agenda una auditoría preliminar de tu SG-SST hoy mismo.</p>
          </div>
          <a 
            href="https://wa.me/573166400840"
            target="_blank"
            className="px-8 py-3 bg-[#245CA7] hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(36,92,167,0.3)] hover:shadow-[0_0_30px_rgba(36,92,167,0.5)] flex items-center gap-2 relative z-10 hover:-translate-y-1"
          >
            Consultar con Experto
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 border-b border-white/5 pb-12">
            
            {/* COLUMNA 1: IDENTIDAD */}
            <div className="lg:col-span-4 space-y-6">
                <div className="flex flex-col items-start">
                  <div className="bg-white/5 p-3 rounded-xl mb-4 backdrop-blur-sm border border-white/5 inline-block">
                    {/* Logo Blanco Puro */}
                    <Image 
                      src={logo} 
                      alt="Gestión Global de Servicios" 
                      width={180} 
                      height={60} 
                      className="h-12 w-auto object-contain brightness-0 invert opacity-90" 
                    />
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                      Somos especialistas en SG-SST. Orientamos a empresas públicas y privadas hacia el desarrollo sostenible, mitigando riesgos y potenciando el capital humano.
                  </p>
                </div>
                
                {/* Redes Sociales */}
                <div className="flex gap-3 pt-2">
                    {[
                        { icon: Instagram, href: "#" },
                        { icon: Facebook, href: "#" },
                        { icon: Linkedin, href: "#" }
                    ].map((social, i) => (
                        <a 
                            key={i} 
                            href={social.href} 
                            className="w-10 h-10 rounded-lg bg-[#1F2937] border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#245CA7] hover:border-[#245CA7] transition-all duration-300"
                        >
                            <social.icon size={18} />
                        </a>
                    ))}
                </div>
            </div>

            {/* COLUMNA 2: COBERTURA */}
            <div className="lg:col-span-3">
                <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                  <MapPin size={18} className="text-[#245CA7]" />
                  Cobertura Nacional
                </h4>
                <p className="text-[10px] text-slate-500 mb-4 uppercase tracking-wider font-bold">Operación activa en:</p>
                <ul className="grid grid-cols-2 gap-y-3 gap-x-2">
                    {[
                        "Atlántico", "Magdalena",
                        "Bolívar", "Sucre",
                        "Córdoba", "Antioquia",
                        "Cundinamarca", "Meta"
                    ].map((dpto) => (
                        <li key={dpto} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors cursor-default group">
                            <span className="w-1.5 h-1.5 bg-[#245CA7] rounded-full group-hover:scale-125 transition-transform"></span>
                            {dpto}
                        </li>
                    ))}
                </ul>
            </div>

             {/* COLUMNA 3: RESPALDO */}
             <div className="lg:col-span-2">
                <h4 className="text-white font-bold text-lg mb-6">Respaldo</h4>
                <ul className="space-y-6">
                    <li className="flex items-start gap-3 group">
                        <Award className="text-[#245CA7] mt-0.5 shrink-0 group-hover:scale-110 transition-transform" size={20} />
                        <div>
                            <p className="text-slate-200 font-bold text-sm">Licencia SST</p>
                            <p className="text-xs text-slate-500 font-mono mt-0.5">Res. 2562</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3 group">
                        <CheckCircle2 className="text-[#245CA7] mt-0.5 shrink-0 group-hover:scale-110 transition-transform" size={20} />
                        <div>
                            <p className="text-slate-200 font-bold text-sm">Calidad</p>
                            <p className="text-xs text-slate-500 mt-0.5">Garantizada</p>
                        </div>
                    </li>
                </ul>
            </div>

            {/* COLUMNA 4: CONTACTO */}
            <div className="lg:col-span-3">
                <h4 className="text-white font-bold text-lg mb-6">Sede Principal</h4>
                <ul className="space-y-5">
                    {/* === DIRECCIÓN ACTUALIZADA AQUÍ === */}
                    <li className="flex items-start gap-4">
                        <MapPin className="mt-1 text-[#245CA7]" size={20} />
                        <div className="text-sm">
                            <p className="text-slate-200 font-medium leading-snug">Centro Empresarial Las Américas 2</p>
                            <p className="text-slate-500 text-xs mt-1">Piso 6, Oficina 612</p>
                        </div>
                    </li>
                    <li className="flex items-center gap-4 group cursor-pointer">
                        <Phone className="text-[#245CA7] group-hover:text-white transition-colors" size={20} />
                        <p className="text-slate-300 group-hover:text-white transition-colors text-sm font-medium">+57 316 640 0840</p>
                    </li>
                    <li className="flex items-center gap-4 group cursor-pointer">
                        <Mail className="text-[#245CA7] group-hover:text-white transition-colors" size={20} />
                        <p className="text-slate-300 group-hover:text-white transition-colors text-sm font-medium">auxadministrativo@gyg.net.co</p>
                    </li>
                    <li className="flex items-start gap-4 pt-2 border-t border-white/5">
                        <Clock className="text-[#245CA7] mt-0.5" size={20} />
                        <div className="text-sm">
                          <p className="text-slate-300 font-medium">Lun - Vie: 08:00 – 17:00</p>
                          <p className="text-slate-500 text-xs mt-1">Sábados: 08:00 – 12:00</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        {/* COPYRIGHT */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600 font-medium pt-2">
            <p>© {new Date().getFullYear()} Gestión Global de Servicios S.A.S.</p>
            <div className="flex gap-6">
                <Link href="#" className="hover:text-[#245CA7] transition-colors">Política de Privacidad</Link>
                <Link href="#" className="hover:text-[#245CA7] transition-colors">Términos y Condiciones</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}