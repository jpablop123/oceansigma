"use client";

import { Quote, MapPin, Star } from "lucide-react";

// Recibimos 'dict' como prop
const Testimonials = ({ dict }: { dict: any }) => {
  
  const testimonials = [
    {
      id: 1,
      text: "La trazabilidad en tiempo real cambió nuestra operación. Ahora sabemos exactamente dónde está cada contenedor.",
      author: "Carlos Mendoza",
      role: "Gerente Logística",
      location: "Bogotá, CO",
    },
    {
      id: 2,
      text: "Ocean Sigma bridged the financial gap we had with Asian suppliers. Their payment structuring is world-class.",
      author: "Sarah Jenkins",
      role: "Procurement Dir.",
      location: "Miami, USA",
    },
    {
      id: 3,
      text: "Necesitábamos un socio que entendiera la normativa aduanera compleja de México. Su equipo es impecable.",
      author: "Fernando Ruiz",
      role: "CEO ImportMex",
      location: "CDMX, MX",
    },
    {
      id: 4,
      text: "The sourcing validation prevented us from making a $50k mistake. Detailed and brutally honest reports.",
      author: "David Koch",
      role: "Operations Head",
      location: "Toronto, CA",
    },
    {
      id: 5,
      text: "Impresionante capacidad de respuesta. Siempre traen la solución antes de notificarnos el problema.",
      author: "Andrea Palacios",
      role: "Jefa Importaciones",
      location: "Lima, PE",
    },
    {
      id: 6,
      text: "We switched 100% of our freight to them. The Tier-1 security protocols gave us total peace of mind.",
      author: "Michael Sterling",
      role: "Supply Chain VP",
      location: "London, UK",
    },
  ];

  // Duplicamos la lista para el efecto infinito
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 bg-[#020617] relative overflow-hidden">
      
      {/* Grid Decorativo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none"></div>
      
      {/* Luz ambiental */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 mb-12 text-center">
        {/* TÍTULO TRADUCIBLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase">
          <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">///</span> {dict.testimonials.title}
        </h2>
        {/* SUBTÍTULO TRADUCIBLE */}
        <p className="text-slate-400 max-w-xl mx-auto">
          {dict.testimonials.subtitle}
        </p>
      </div>

      {/* --- CAROUSEL INFINITO --- */}
      <div className="relative w-full overflow-hidden">
        
        {/* Máscaras de gradiente */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#020617] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#020617] to-transparent z-20 pointer-events-none"></div>

        {/* Track Animado */}
        <div className="flex gap-6 w-max animate-scroll hover:pause">
          
          {infiniteTestimonials.map((item, index) => (
            <div 
              key={`${item.id}-${index}`} 
              className="group relative w-[350px] md:w-[400px] flex-shrink-0 p-8 rounded-2xl bg-[#0f172a]/50 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:bg-[#0f172a] cursor-default"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="mb-6 flex justify-between items-start">
                <Quote size={32} className="text-cyan-500/20 group-hover:text-cyan-400 transition-colors fill-current" />
                <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="text-slate-700 group-hover:text-yellow-500 fill-current transition-colors" />
                    ))}
                </div>
              </div>
              
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-light">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto border-t border-slate-800/50 pt-4 group-hover:border-cyan-500/20 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-cyan-400 font-bold border border-slate-700 shadow-inner uppercase">
                    {item.author.split(' ').map(n => n[0]).join('')}
                </div>
                
                <div className="flex flex-col">
                  <span className="text-white text-sm font-bold group-hover:text-cyan-200 transition-colors">{item.author}</span>
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider mb-0.5">{item.role}</span>
                  
                  <div className="flex items-center gap-1.5 text-[10px] text-cyan-600 font-mono">
                    <MapPin size={10} />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        .hover\:pause:hover {
          animation-play-state: paused;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>

    </section>
  );
};

export default Testimonials;