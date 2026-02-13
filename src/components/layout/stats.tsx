import { TrendingUp, Globe, ShieldCheck, Box } from "lucide-react";

type StatsProps = {
  dict: any;
};

const Stats = ({ dict }: StatsProps) => {
  // Array dinámico usando los textos del diccionario
  const stats = [
    { label: dict.stats.s1, val: "1.2K+", icon: <TrendingUp className="w-6 h-6 mb-3 text-blue-600 mx-auto"/> },
    { label: dict.stats.s2, val: "500+", icon: <Globe className="w-6 h-6 mb-3 text-blue-600 mx-auto"/> },
    { label: dict.stats.s3, val: "100%", icon: <ShieldCheck className="w-6 h-6 mb-3 text-blue-600 mx-auto"/> },
    { label: dict.stats.s4, val: "12", icon: <Box className="w-6 h-6 mb-3 text-blue-600 mx-auto"/> },
  ];

  return (
    // CAMBIO: Fondo BLANCO (bg-white) y borde gris claro
    <section className="py-20 border-t border-slate-100 bg-white relative z-10">
       <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
              // CAMBIO: Hover ahora oscurece ligeramente el fondo (bg-slate-50)
              <div key={i} className="flex flex-col items-center group cursor-default p-4 rounded-xl hover:bg-slate-50 transition-all duration-300">
                  <div className="group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  {/* CAMBIO: Texto oscuro (text-slate-900) para contraste */}
                  <span className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">
                    {stat.val}
                  </span>
                  {/* CAMBIO: Texto descriptivo en gris medio */}
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500">
                    {stat.label}
                  </span>
              </div>
          ))}
       </div>
    </section>
  );
};

export default Stats;