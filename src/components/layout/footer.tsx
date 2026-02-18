import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

// Definimos que el Footer espera recibir el idioma
interface FooterProps {
  lang: string;
  dict?: any; 
}

const Footer = ({ lang, dict }: FooterProps) => {
  
  const legalLinks = [
    { name: 'Términos de Uso', href: `/${lang}/terms` },          
    { name: 'Política de Privacidad', href: `/${lang}/privacy` },  
    { name: 'Cookies', href: `/${lang}/cookies` },                 
    { name: 'Compliance', href: `/${lang}/compliance` },           
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0f172a] to-[#020617] border-t border-[#1e293b] text-slate-400 pt-20 pb-10 relative overflow-hidden font-sans">
      
      {/* Grid de Fondo */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
            style={{ 
              backgroundImage: "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)", 
              backgroundSize: "30px 30px" 
            }}>
      </div>
      
      {/* Luz ambiental */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent shadow-[0_0_20px_#3b82f6]"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Grid de 3 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* COLUMNA 1: BRANDING (Sin redes sociales) */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tighter">
              OCEAN SIGMA <span className="text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">EXPORT</span>
            </h3>
            <p className="text-sm leading-relaxed opacity-90 max-w-xs">
              Infraestructura logística de precisión para mercados globales. Conectamos tu negocio con el mundo.
            </p>
          </div>

          {/* COLUMNA 2: LEGAL */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs border-b border-slate-800 pb-2 inline-block">Legal</h4>
            <ul className="space-y-3 text-sm">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-blue-400 transition-colors flex items-center gap-2 group w-fit">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 3: CONTACTO */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs border-b border-slate-800 pb-2 inline-block">Contacto</h4>
            <ul className="space-y-4 text-sm">
             
              <li className="flex items-center gap-3 group">
                <Phone className="text-blue-500 shrink-0 group-hover:rotate-12 transition-transform" size={16} />
                <a href="tel:+17866200121" className="hover:text-white transition-colors decoration-blue-500/30 hover:underline">+1 (786) 694-9244</a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="text-blue-500 shrink-0 group-hover:scale-110 transition-transform" size={16} />
                <a href="mailto:Oceansigmacorp@gmail.com" className="hover:text-white transition-colors decoration-blue-500/30 hover:underline">Oceansigmacorp@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* BARRA INFERIOR */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2026 Ocean Sigma Export Corp. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 font-mono">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> SYSTEM: STABLE
            </span>
            <span className="uppercase">{lang === 'en' ? 'EN - English' : 'ES - Español'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;