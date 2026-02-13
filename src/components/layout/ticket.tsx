"use client";
import { TrendingUp } from "lucide-react";

type TickerProps = {
  dict: any;
};

const Ticker = ({ dict }: TickerProps) => {
  return (
    // CAMBIO: Fondo BLANCO (bg-white) y bordes gris claro
    <div className="w-full bg-white border-y border-slate-200 py-3 overflow-hidden relative z-20">
      
      {/* CAMBIO: Los degradados laterales ahora deben ser BLANCOS (from-white) */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

      {/* Contenedor de la animación */}
      <div className="flex whitespace-nowrap animate-marquee">
        
        {[...Array(4)].map((_, loopIndex) => (
          <div key={loopIndex} className="flex items-center gap-16 mx-8">
            {dict.ticker.items.map((item: string, idx: number) => (
              // CAMBIO: Texto oscuro (slate-600) que pasa a negro (slate-900) al hover
              <div key={`${loopIndex}-${idx}`} className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-slate-600 group cursor-default">
                
                {/* CAMBIO: Fondo del icono azul muy claro (bg-blue-50) para que contraste bien */}
                <span className="p-1 rounded bg-blue-50 border border-blue-100 group-hover:bg-blue-100 transition-colors">
                    <TrendingUp size={12} className="text-blue-600" />
                </span>
                
                <span className="group-hover:text-slate-900 transition-colors font-semibold">{item}</span>
              </div>
            ))}
          </div>
        ))}

      </div>
      
      <style jsx>{`
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Ticker;