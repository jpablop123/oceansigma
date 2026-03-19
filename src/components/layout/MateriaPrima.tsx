"use client";

import { Atom, FlaskConical, SearchCheck, PackageCheck, Wrench } from "lucide-react";

type Props = {
  dict: any;
};

export default function MateriaPrima({ dict }: Props) {
  const t = dict.materiaprima;

  const cards = [
    {
      icon: <Atom size={32} />,
      title: t.card1_title,
      desc: t.card1_desc,
      gradient: "from-amber-500 to-orange-500",
      bgLight: "bg-amber-50",
      borderHover: "hover:border-amber-400",
      iconColor: "text-amber-600",
      shadow: "group-hover:shadow-amber-200/50",
    },
    {
      icon: <FlaskConical size={32} />,
      title: t.card2_title,
      desc: t.card2_desc,
      gradient: "from-emerald-500 to-teal-500",
      bgLight: "bg-emerald-50",
      borderHover: "hover:border-emerald-400",
      iconColor: "text-emerald-600",
      shadow: "group-hover:shadow-emerald-200/50",
    },
    {
      icon: <SearchCheck size={32} />,
      title: t.card3_title,
      desc: t.card3_desc,
      gradient: "from-blue-500 to-indigo-500",
      bgLight: "bg-blue-50",
      borderHover: "hover:border-blue-400",
      iconColor: "text-blue-600",
      shadow: "group-hover:shadow-blue-200/50",
    },
    {
      icon: <PackageCheck size={32} />,
      title: t.card4_title,
      desc: t.card4_desc,
      gradient: "from-violet-500 to-purple-500",
      bgLight: "bg-violet-50",
      borderHover: "hover:border-violet-400",
      iconColor: "text-violet-600",
      shadow: "group-hover:shadow-violet-200/50",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-100/40 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/60 rounded-full blur-[80px] pointer-events-none"></div>

      {/* Patrón de puntos decorativo */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 mb-8 shadow-lg shadow-amber-200/50">
            <Wrench size={14} className="text-white" />
            <span className="text-xs font-bold uppercase tracking-widest text-white">
              {t.badge}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
            {t.title}
          </h2>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`group relative p-8 md:p-10 rounded-3xl bg-white border-2 border-gray-100 ${card.borderHover} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${card.shadow} cursor-default`}
            >
              {/* Número decorativo */}
              <span className="absolute top-6 right-8 text-7xl font-black text-gray-50 select-none group-hover:text-gray-100 transition-colors">
                0{idx + 1}
              </span>

              <div className="relative z-10">
                {/* Icono con gradiente */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {card.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
