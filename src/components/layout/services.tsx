import { Globe, Container, Landmark } from "lucide-react";

const Services = ({ dict }: { dict: any }) => {
  // Color de sombra en blanco puro (RGB: 255, 255, 255)
  const shadowColorRGB = "255,255,255";

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#020617] to-[#0f172a]">
      
      {/* CAMBIO: Luz ambiental blanca/plateada muy sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Encabezado */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {/* CAMBIO: Las barras /// ahora son blancas con brillo */}
            <span className={`text-white drop-shadow-[0_0_15px_rgba(${shadowColorRGB},0.8)]`}>///</span> {dict.services.title}
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">{dict.services.subtitle}</p>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Tarjeta 1: Sourcing */}
          <div className={`group p-8 rounded-2xl bg-[#0a1128] border border-slate-800 hover:border-white/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(${shadowColorRGB},0.10)] hover:-translate-y-1`}>
            {/* CAMBIO: Icono blanco sobre fondo semitransparente blanco */}
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/10 group-hover:border-white/50 group-hover:bg-white/20">
              <Globe className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
            </div>
            {/* Título blanco brillante al hacer hover */}
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              {dict.services.s1_title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">{dict.services.s1_desc}</p>
          </div>

          {/* Tarjeta 2: Logística */}
          <div className={`group p-8 rounded-2xl bg-[#0a1128] border border-slate-800 hover:border-white/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(${shadowColorRGB},0.10)] hover:-translate-y-1`}>
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/10 group-hover:border-white/50 group-hover:bg-white/20">
              <Container className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              {dict.services.s2_title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">{dict.services.s2_desc}</p>
          </div>

          {/* Tarjeta 3: Financiero */}
          <div className={`group p-8 rounded-2xl bg-[#0a1128] border border-slate-800 hover:border-white/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(${shadowColorRGB},0.10)] hover:-translate-y-1`}>
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/10 group-hover:border-white/50 group-hover:bg-white/20">
              <Landmark className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              {dict.services.s3_title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">{dict.services.s3_desc}</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;