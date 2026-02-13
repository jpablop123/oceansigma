"use client";

const ImpactStats = ({ dict }: { dict: any }) => {
  // Convertimos el objeto del diccionario en un array para poder mapearlo
  const stats = [
    dict.impact.i1, // Operaciones
    dict.impact.i2, // Países
    dict.impact.i3, // Proveedores
    dict.impact.i4  // Garantía
  ];

  return (
    <section className="bg-slate-900 py-20 relative overflow-hidden">
      
      {/* Fondo decorativo (Líneas sutiles) */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
      
      {/* Efecto de luz central azulada */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-slate-800/50 md:divide-slate-800">
          
          {stats.map((stat: any, index: number) => (
            <div key={index} className="flex flex-col items-center justify-center group px-4">
              
              {/* Número Grande con Gradiente */}
              <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-2 group-hover:to-blue-400 transition-all duration-500 scale-100 group-hover:scale-110 block">
                {stat.val}
              </span>
              
              {/* Etiqueta Principal (Operaciones, Países...) */}
              <span className="text-lg font-bold text-white tracking-wide mb-1">
                {stat.label}
              </span>
              
              {/* Subtítulo pequeño (Exitosas, Verificados...) */}
              <span className="text-xs text-blue-400 uppercase tracking-[0.2em] font-medium opacity-80 group-hover:opacity-100">
                {stat.sub}
              </span>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ImpactStats;