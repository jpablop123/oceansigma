"use client";

import { Atom, FlaskConical, SearchCheck, PackageCheck, ShieldCheck, Clock, Route, Wrench } from "lucide-react";

type Props = {
  dict: any;
};

export default function MateriaPrima({ dict }: Props) {
  const t = dict.materiaprima;

  const cards = [
    {
      icon: <Atom size={28} />,
      title: t.card1_title,
      desc: t.card1_desc,
      color: "amber",
      iconBg: "bg-amber-500/10",
      iconBorder: "border-amber-500/20",
      iconText: "text-amber-400",
      hoverBorder: "hover:border-amber-500/50",
    },
    {
      icon: <FlaskConical size={28} />,
      title: t.card2_title,
      desc: t.card2_desc,
      color: "emerald",
      iconBg: "bg-emerald-500/10",
      iconBorder: "border-emerald-500/20",
      iconText: "text-emerald-400",
      hoverBorder: "hover:border-emerald-500/50",
    },
    {
      icon: <SearchCheck size={28} />,
      title: t.card3_title,
      desc: t.card3_desc,
      color: "blue",
      iconBg: "bg-blue-500/10",
      iconBorder: "border-blue-500/20",
      iconText: "text-blue-400",
      hoverBorder: "hover:border-blue-500/50",
    },
    {
      icon: <PackageCheck size={28} />,
      title: t.card4_title,
      desc: t.card4_desc,
      color: "cyan",
      iconBg: "bg-cyan-500/10",
      iconBorder: "border-cyan-500/20",
      iconText: "text-cyan-400",
      hoverBorder: "hover:border-cyan-500/50",
    },
  ];

  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden border-t border-slate-800">
      {/* Luces de fondo */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Grid sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-950/30 backdrop-blur-md mb-8">
            <Wrench size={14} className="text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
              {t.badge}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {t.title}
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed font-light">
            {t.subtitle}
          </p>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`group p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0f172a] border border-slate-800 ${card.hoverBorder} transition-all duration-500 hover:-translate-y-1`}
            >
              <div className={`w-14 h-14 ${card.iconBg} rounded-xl flex items-center justify-center mb-6 border ${card.iconBorder} ${card.iconText} group-hover:scale-110 transition-transform`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Bloque de Valor */}
        <div className="max-w-4xl mx-auto p-8 md:p-10 rounded-2xl bg-gradient-to-r from-slate-900/80 to-[#0f172a]/80 border border-slate-700/50 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
            {t.value_title}
          </h3>
          <p className="text-slate-400 leading-relaxed mb-8">
            {t.value_desc}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Clock size={18} />, label: t.value1 },
              { icon: <ShieldCheck size={18} />, label: t.value2 },
              { icon: <Route size={18} />, label: t.value3 },
              { icon: <Wrench size={18} />, label: t.value4 },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                <span className="text-amber-400">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
