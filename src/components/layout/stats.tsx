"use client";

import { FileText, Box, Plane, CheckCircle2, ArrowRight } from "lucide-react";

type Props = {
  dict: any;
};

const Stats = ({ dict }: Props) => {
  // Definimos los pasos del proceso
  const steps = [
    { 
      icon: <FileText size={24} />, 
      title: dict.process.s1_title, 
      desc: dict.process.s1_desc 
    },
    { 
      icon: <Box size={24} />, 
      title: dict.process.s2_title, 
      desc: dict.process.s2_desc 
    },
    { 
      icon: <Plane size={24} />, 
      title: dict.process.s3_title, 
      desc: dict.process.s3_desc 
    },
    { 
      icon: <CheckCircle2 size={24} />, 
      title: dict.process.s4_title, 
      desc: dict.process.s4_desc 
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="container mx-auto px-6">
        
        {/* Título de la Sección */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2 block">
            {dict.process.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            {dict.process.title}
          </h2>
        </div>

        {/* Grid de Pasos */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {/* Línea conectora (Solo visible en Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-100 -z-10"></div>

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center group relative">
              
              {/* Círculo del Icono */}
              <div className="w-24 h-24 bg-white border border-slate-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-blue-200 group-hover:shadow-md transition-all duration-300 relative z-10">
                <div className="text-slate-400 group-hover:text-blue-600 transition-colors duration-300">
                  {step.icon}
                </div>
                {/* Número flotante */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-slate-50 rounded-full border border-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">
                  {i + 1}
                </div>
              </div>

              {/* Contenido */}
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">
                {step.desc}
              </p>

              {/* Flecha conectora (Visual para mobile/desktop) */}
              {i < steps.length - 1 && (
                 <div className="md:hidden mt-8 text-slate-200">
                    <ArrowRight size={24} className="rotate-90" />
                 </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;