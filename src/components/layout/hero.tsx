"use client";

import Link from "next/link";
import { ArrowRight, Activity, ShieldCheck } from "lucide-react";

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

        {/* SLOGAN */}
        <p className="text-sm md:text-base text-cyan-400 font-mono uppercase tracking-[0.2em] mb-6">
          {dict.hero.slogan}
        </p>

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
          
          <a
            href="https://wa.me/17866949244"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#20bd5a] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all flex items-center justify-center gap-2 group"
          >
            <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white"><path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.826 32 16.004S24.826 0 16.004 0zm9.35 22.616c-.392 1.098-1.94 2.01-3.172 2.276-.846.18-1.95.322-5.67-1.218-4.762-1.97-7.826-6.804-8.064-7.118-.23-.314-1.926-2.566-1.926-4.892s1.218-3.472 1.65-3.946c.394-.432 1.036-.648 1.65-.648.2 0 .378.01.54.018.432.018.648.044.934.722.354.844 1.218 2.97 1.324 3.186.108.216.216.504.072.792-.136.294-.254.476-.47.73-.216.254-.424.45-.64.724-.2.236-.424.488-.178.934.246.442 1.094 1.804 2.35 2.924 1.614 1.438 2.974 1.886 3.396 2.094.314.154.69.134.942-.134.316-.338.708-.898 1.108-1.452.284-.394.644-.444.99-.298.352.14 2.228 1.05 2.61 1.242.382.192.636.29.73.446.09.154.09.892-.302 1.99z"/></svg>
            WhatsApp
          </a>
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