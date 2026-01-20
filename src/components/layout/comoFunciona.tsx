"use client";

import { motion } from "framer-motion";
import { 
  Target, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2,
  Award,
  Layers,
  Zap
} from "lucide-react";

const policyFeatures = [
  {
    title: "Consultoría Experta",
    desc: "Equipo de asesores altamente capacitados y alianzas estratégicas para tu tranquilidad.",
    icon: Users,
  },
  {
    title: "Protección Integral",
    desc: "Controles precisos para la seguridad física y legal de trabajadores y terceros.",
    icon: ShieldCheck,
  },
  {
    title: "Mejora Continua",
    desc: "Evolución constante del sistema ante nuevos desafíos y normativas legales.",
    icon: TrendingUp,
  },
];

export default function AboutSection() {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden" id="nosotros">
      
      {/* === FONDO DECORATIVO === */}
      <div className="absolute inset-0 z-0 opacity-[0.05]" 
           style={{ backgroundImage: "linear-gradient(#245CA7 1px, transparent 1px), linear-gradient(90deg, #245CA7 1px, transparent 1px)", backgroundSize: "40px 40px" }}>
      </div>
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-blue-100/60 rounded-full blur-[120px] translate-x-1/2 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* === SECCIÓN SUPERIOR (Igual que antes, que te gustó) === */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
          
          {/* TEXTO */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 shadow-sm text-[#245CA7] text-xs font-bold tracking-widest uppercase mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#245CA7]"></span>
              </span>
              Nuestra Esencia
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Especialistas en <br/>
              <span className="text-[#245CA7] relative">
                Gestión Sostenible
                <svg className="absolute w-full h-2 bottom-0 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
              Somos un equipo experto en SG-SST. Nuestra misión es transformar el cumplimiento normativo en una ventaja estratégica que garantice un <strong className="text-slate-900">desarrollo sostenible</strong>.
            </p>
            
            <p className="text-base text-slate-500 leading-relaxed">
              Priorizamos la excelencia para mitigar riesgos y potenciar el capital humano en entidades públicas y privadas en <strong className="text-[#245CA7]">todo el territorio nacional.</strong>
            </p>

            <div className="mt-8 pt-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 text-[#245CA7] mb-1">
                        <Award size={20} />
                        <h4 className="text-2xl font-black text-slate-900">+10</h4>
                    </div>
                    <p className="text-xs font-bold text-slate-500 uppercase">Años de Experiencia</p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 text-[#245CA7] mb-1">
                        <Layers size={20} />
                        <h4 className="text-2xl font-black text-slate-900">100%</h4>
                    </div>
                    <p className="text-xs font-bold text-slate-500 uppercase">Cobertura Nacional</p>
                </div>
            </div>
          </motion.div>

          {/* VISUAL */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-full min-h-[450px] w-full hidden lg:block"
          >
            <div className="absolute top-0 right-0 w-[90%] h-[90%] bg-gradient-to-br from-[#245CA7] to-[#1a4580] rounded-[2rem] shadow-2xl rotate-3 z-10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
                <Target size={140} className="text-white/10" />
            </div>

            <div className="absolute bottom-0 left-0 w-[85%] h-[80%] bg-white/80 backdrop-blur-xl border border-white/60 rounded-[2rem] shadow-xl -rotate-2 z-20 p-8 flex flex-col justify-between hover:rotate-0 transition-transform duration-500">
                <div className="flex items-start justify-between">
                    <div>
                        <p className="text-[#245CA7] font-black text-lg tracking-tight">ENFOQUE ESTRATÉGICO</p>
                        <p className="text-slate-500 text-sm mt-1">Metodología comprobada</p>
                    </div>
                    <div className="p-3 bg-blue-100 rounded-full text-[#245CA7]">
                        <CheckCircle2 size={24} />
                    </div>
                </div>

                <div className="space-y-4 mt-6">
                    {[
                        { title: "Diagnóstico", desc: "Identificación precisa de peligros" },
                        { title: "Intervención", desc: "Controles operativos efectivos" },
                        { title: "Seguimiento", desc: "Auditoría y mejora continua" }
                    ].map((step, i) => (
                        <div key={i} className="flex gap-4 items-start group">
                            <div className="w-8 h-8 rounded-full bg-white border border-blue-100 text-[#245CA7] flex items-center justify-center font-bold text-sm shadow-sm group-hover:bg-[#245CA7] group-hover:text-white transition-colors">
                                {i + 1}
                            </div>
                            <div>
                                <p className="text-slate-900 font-bold text-sm">{step.title}</p>
                                <p className="text-slate-500 text-xs">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </motion.div>
        </div>

        {/* === AQUÍ ESTÁ EL CAMBIO BRUTAL: POLÍTICA EMPRESARIAL === */}
        <div className="relative">
            <div className="text-center mb-12">
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                    Política <span className="text-[#245CA7]">Empresarial</span>
                </h3>
                <p className="text-slate-600 mt-4 max-w-2xl mx-auto font-medium">
                    Compromiso total con la seguridad, respaldado por un equipo humano de alto nivel.
                </p>
            </div>

            {/* Tarjetas Oscuras "Estilo Monolito" */}
            <div className="grid md:grid-cols-3 gap-6">
                {policyFeatures.map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="group relative overflow-hidden rounded-2xl bg-[#0f172a] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20"
                    >
                        {/* Efecto de Gradiente en Hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#245CA7]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Icono Flotante Grande (Marca de agua) */}
                        <div className="absolute -right-4 -top-4 text-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                            <feature.icon size={100} />
                        </div>

                        {/* Contenido */}
                        <div className="relative z-10">
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-[#245CA7] group-hover:text-white transition-colors duration-300">
                                <feature.icon size={24} />
                            </div>
                            
                            <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                {feature.title}
                                <Zap size={14} className="text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h4>
                            
                            <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">
                                {feature.desc}
                            </p>
                        </div>

                        {/* Borde inferior de color */}
                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#245CA7] transition-all duration-300 group-hover:w-full"></div>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}