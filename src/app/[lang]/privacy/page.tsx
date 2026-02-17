import { getDictionary } from '../../../dictionaries/get-dictionary';
import { ArrowLeft } from "lucide-react";
import Link from "next/link"; 

type Props = {
  params: Promise<{ lang: "es" | "en" }>;
};

export default async function PrivacyPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.legal.privacy; // Acceso directo a la sección de privacidad

  return (
    <div className="min-h-screen">
      
      {/* HEADER OSCURO (pt-48 para evitar solapamiento) */}
      <section className="bg-[#0f172a] text-white pt-48 pb-16 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
            style={{ backgroundImage: "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)", backgroundSize: "30px 30px" }}>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm font-medium hover:bg-white/10 p-2 rounded-lg -ml-2"
          >
            <ArrowLeft size={16} />
            {t.back}
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            {t.title}
          </h1>
          <p className="text-xl text-slate-400 font-light">
            {t.date}
          </p>
        </div>
      </section>

      {/* CONTENIDO (Conectado al JSON) */}
      <section className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-16 text-slate-700 leading-relaxed text-lg">
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{t.sections.s1_title}</h2>
            <p className="leading-8">{t.sections.s1_text}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{t.sections.s2_title}</h2>
            <p className="mb-4 leading-8">{t.sections.s2_text}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{t.sections.s3_title}</h2>
            <p className="leading-8">{t.sections.s3_text}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{t.sections.s4_title}</h2>
            <p className="leading-8">{t.sections.s4_text}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{t.sections.s5_title}</h2>
            <p className="leading-8">{t.sections.s5_text}</p>
          </section>
          
          <div className="pt-10 border-t border-slate-100 text-slate-400 text-sm">
            <p>2026 Ocean Sigma Export Corp.</p>
          </div>

        </div>
      </section>
    </div>
  );
}