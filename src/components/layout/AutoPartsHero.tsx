"use client";

import { Settings, Wrench, ArrowRight } from "lucide-react";
import Link from "next/link";

type Props = {
  dict: any;
  lang: string;
};

export default function AutoPartsHero({ dict, lang }: Props) {
  const t = dict.autoparts;

  return (
    <section className="relative py-24 bg-[#020617] overflow-hidden border-t border-slate-800">
      {/* Fondo de luces tecnológicas */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Etiqueta animada */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-md mb-8">
          <Settings size={14} className="text-cyan-400 animate-[spin_4s_linear_infinite]" />
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
            {t.badge}
          </span>
        </div>

        {/* Título y Subtítulo */}
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 max-w-4xl tracking-tight">
          {t.title.split(' ').slice(0, -1).join(' ')}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            {t.title.split(' ').slice(-1)}
          </span>
        </h2>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          {t.subtitle}
        </p>

        {/* Botón */}
        <Link 
          href={`/${lang}#quote`}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:shadow-[0_0_40px_rgba(8,145,178,0.5)]"
        >
          <Wrench size={18} className="group-hover:-rotate-12 transition-transform" />
          {t.cta}
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}