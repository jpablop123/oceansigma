"use client";

import { Target, Eye, Globe2, CheckCircle2 } from "lucide-react";

type Props = {
  dict: any;
};

export default function About({ dict }: Props) {
  const t = dict.about;

  return (
    <section id="about" className="py-24 bg-[#020617] relative overflow-hidden border-t border-slate-800 scroll-mt-24">
      
      {/* Luces de fondo decorativas */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* COLUMNA IZQUIERDA: Quiénes Somos y Valores */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
              <Globe2 size={14} className="text-blue-400" />
              <span className="text-[10px] font-bold text-blue-400 tracking-widest uppercase">
                {t.title}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              {t.who_we_are_title}
            </h2>
            
            <p className="text-slate-400 text-lg mb-10 leading-relaxed font-light">
              {t.who_we_are_desc}
            </p>

            {/* Valores en formato de lista de 2 columnas */}
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4 border-b border-slate-800 pb-2 inline-block">
              {t.values_title}
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {[t.v1, t.v2, t.v3, t.v4].map((value: string, index: number) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-cyan-500" />
                  <span className="text-slate-300 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMNA DERECHA: Tarjetas de Misión y Visión */}
          <div className="space-y-6">
            
            {/* Tarjeta Misión */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0f172a] border border-slate-800 hover:border-blue-500/50 transition-all duration-500 shadow-2xl relative overflow-hidden group">
              {/* Detalle visual de la esquina */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-[100px] -z-0 group-hover:bg-blue-500/10 transition-colors duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 border border-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t.mission_title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {t.mission_desc}
                </p>
              </div>
            </div>

            {/* Tarjeta Visión (Desplazada hacia la derecha en desktop para un efecto de "cascada") */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0f172a] border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 shadow-2xl relative overflow-hidden group ml-0 lg:ml-12">
              {/* Detalle visual de la esquina */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-[100px] -z-0 group-hover:bg-cyan-500/10 transition-colors duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  <Eye size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t.vision_title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {t.vision_desc}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* LÍNEA SEPARADORA CON GLOW (MÁS GRANDE Y NOTORIA) */}
      <div className="absolute bottom-0 left-0 w-full">
        {/* Resplandor (glow) de color para darle volumen y separación */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[12px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent blur-md"></div>
        {/* Línea principal más gruesa y brillante */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-slate-300/60 to-transparent"></div>
      </div>

    </section>
  );
}