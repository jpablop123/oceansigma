"use client";

import { ShieldCheck, Coins, Globe, CarFront, Truck, Cog, Box } from "lucide-react";

type Props = {
  dict: any;
};

export default function ValueAndProducts({ dict }: Props) {
  const t = dict.catalog;

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-slate-800">
      
      {/* Luces de fondo */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Encabezado de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <ShieldCheck size={14} className="text-cyan-400" />
            <span className="text-[10px] font-bold text-cyan-400 tracking-widest uppercase">
              {t.badge}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {t.title}
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed font-light">
            {t.subtitle}
          </p>
        </div>

        {/* CONTENEDOR PRINCIPAL: 2 Columnas */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-20">
          
          {/* COLUMNA IZQUIERDA: Ventajas (Ocupa 5 columnas en desktop) */}
          <div className="xl:col-span-5 space-y-10">
            <h3 className="text-2xl font-bold text-white border-b border-slate-800 pb-4 mb-8">
              {t.advantages_title}
            </h3>

            {/* Ventaja 1 */}
            <div className="flex gap-6 group">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                  <Globe size={24} />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-200 mb-2">{t.adv1_title}</h4>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base">{t.adv1_desc}</p>
              </div>
            </div>

            {/* Ventaja 2 */}
            <div className="flex gap-6 group">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white group-hover:border-cyan-500 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                  <Coins size={24} />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-200 mb-2">{t.adv2_title}</h4>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base">{t.adv2_desc}</p>
              </div>
            </div>

            {/* Ventaja 3 */}
            <div className="flex gap-6 group">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-500 transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0)] group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                  <ShieldCheck size={24} />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-200 mb-2">{t.adv3_title}</h4>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base">{t.adv3_desc}</p>
              </div>
            </div>
          </div>


          {/* COLUMNA DERECHA: Productos y Repuestos (Ocupa 7 columnas en desktop) */}
          <div className="xl:col-span-7 bg-slate-900/50 p-8 md:p-10 rounded-3xl border border-slate-800">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-cyan-500 rounded-full"></span>
              {t.products_title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-[1fr]">
              
              {/* Producto 1: Mecánica Ligera */}
              <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-700/50 hover:border-cyan-500/50 transition-colors group flex flex-col h-full">
                <div className="mb-4 text-cyan-400 group-hover:-translate-y-1 transition-transform">
                  <CarFront size={32} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{t.prod1_title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                  {t.prod1_desc}
                </p>
              </div>

              {/* Producto 2: Línea Pesada */}
              <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-700/50 hover:border-blue-500/50 transition-colors group flex flex-col h-full">
                <div className="mb-4 text-blue-400 group-hover:-translate-y-1 transition-transform">
                  <Truck size={32} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{t.prod2_title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                  {t.prod2_desc}
                </p>
              </div>

              {/* Producto 3: Motores */}
              <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-700/50 hover:border-indigo-500/50 transition-colors group flex flex-col h-full">
                <div className="mb-4 text-indigo-400 group-hover:rotate-90 transition-transform duration-500">
                  <Cog size={32} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{t.prod3_title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                  {t.prod3_desc}
                </p>
              </div>

              {/* Producto 4: Carga General */}
              <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-700/50 hover:border-slate-400/50 transition-colors group flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-slate-500/5 rounded-bl-full -z-0"></div>
                <div className="mb-4 text-slate-300 group-hover:-translate-y-1 transition-transform relative z-10">
                  <Box size={32} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 relative z-10">{t.prod4_title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed flex-grow relative z-10">
                  {t.prod4_desc}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}