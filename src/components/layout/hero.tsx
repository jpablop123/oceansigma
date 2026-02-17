"use client";

import Link from "next/link";
import { ArrowRight, Activity, Globe, ShieldCheck } from "lucide-react";

type HeroProps = {
  dict: any;
  lang: string;
};

const Hero = ({ dict, lang }: HeroProps) => {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-[#020617] via-[#0a1128] to-[#020617]">
      
      {/* FONDO */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 -left-[10%] w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
          <div className="absolute bottom-0 -right-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] opacity-30"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        
        {/* BADGE */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-md mb-8 animate-fade-in-up">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-cyan-300">Global Logistics Network • Active</span>
        </div>

        {/* TÍTULO */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 text-white drop-shadow-2xl">
          OCEAN SIGMA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_35px_rgba(34,211,238,0.4)]">
            EXPORT
          </span>
        </h1>

        {/* SUBTÍTULO */}
        <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light border-l-2 border-cyan-500 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
          {dict.hero.subtitle}
        </p>

        {/* BOTONES */}
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          {/* BOTÓN PRINCIPAL: Va a #quote */}
          <Link 
            href={`/${lang}#quote`}
            className="group px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-all shadow-[0_0_25px_rgba(8,145,178,0.3)] hover:shadow-[0_0_50px_rgba(8,145,178,0.5)] flex items-center justify-center gap-2"
          >
            {dict.hero.cta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            href={`/${lang}#services`}
            className="px-8 py-4 bg-transparent border border-slate-700 text-slate-300 font-bold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all flex items-center justify-center gap-2 group"
          >
            <Globe className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors"/>
            Explorar Red Global
          </Link>
        </div>

        {/* DATOS */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center opacity-70 border-t border-slate-800/50 pt-8 w-full max-w-4xl">
            <div className="flex flex-col items-center gap-1 group">
                <ShieldCheck className="w-5 h-5 text-cyan-500 mb-1 group-hover:text-cyan-300 transition-colors" />
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Security</span>
                <span className="text-white font-bold group-hover:text-cyan-200 transition-colors">Tier-1</span>
            </div>
            <div className="flex flex-col items-center gap-1 group">
                <Activity className="w-5 h-5 text-cyan-500 mb-1 group-hover:text-cyan-300 transition-colors" />
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Uptime</span>
                <span className="text-white font-bold group-hover:text-cyan-200 transition-colors">99.9%</span>
            </div>
            <div className="hidden md:flex flex-col items-center gap-1">
                <span className="text-cyan-500 font-mono text-xs">Lat: 40.7128° N</span>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Location</span>
            </div>
             <div className="hidden md:flex flex-col items-center gap-1">
                <span className="text-cyan-500 font-mono text-xs">Lon: 74.0060° W</span>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Tracking</span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;