"use client";

import { CarFront, Truck, Cog, PackageCheck } from "lucide-react";

type Props = {
  dict: any;
};

export default function AutoPartsGrid({ dict }: Props) {
  const t = dict.autoparts.categories;

  return (
    <section className="py-20 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        
        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Tarjeta 1: Mecánica Ligera */}
          <div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0f172a] border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 relative overflow-hidden lg:col-span-2">
            <div className="absolute right-0 top-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 translate-x-1/4 -translate-y-1/4">
                <CarFront size={200} />
            </div>
            <div className="relative z-10">
                <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                  <CarFront size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{t.light_title}</h3>
                <p className="text-slate-400 leading-relaxed max-w-md">
                  {t.light_desc}
                </p>
            </div>
          </div>

          {/* Tarjeta 2: Pesada */}
          <div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0f172a] border border-slate-800 hover:border-blue-500/50 transition-all duration-500">
            <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 border border-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
              <Truck size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{t.heavy_title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              {t.heavy_desc}
            </p>
          </div>

          {/* Tarjeta 3: Motor y Transmisión */}
          <div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0f172a] border border-slate-800 hover:border-blue-500/50 transition-all duration-500">
            <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 border border-blue-500/20 text-blue-400 group-hover:rotate-90 transition-transform duration-500">
              <Cog size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{t.engine_title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              {t.engine_desc}
            </p>
          </div>

          {/* Tarjeta 4: Logística (Más ancha) */}
          <div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0f172a] border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 lg:col-span-2">
            <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/20 text-cyan-400 group-hover:-translate-y-2 transition-transform duration-300">
              <PackageCheck size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{t.logistics_title}</h3>
            <p className="text-slate-400 leading-relaxed max-w-md">
              {t.logistics_desc}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}