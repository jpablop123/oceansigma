import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    // CAMBIO: Fondo con degradado sutil para que no sea "negro plano" y aburrido
    <footer className="bg-gradient-to-b from-[#0f172a] to-[#020617] border-t border-[#1e293b] text-slate-400 pt-20 pb-10 relative overflow-hidden font-sans">
      
      {/* Grid de Fondo (Más visible y divertido) */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
            style={{ 
              backgroundImage: "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)", 
              backgroundSize: "30px 30px" 
            }}>
      </div>
      
      {/* Luz ambiental superior para separar del resto de la página */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent shadow-[0_0_20px_#3b82f6]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMNA 1: BRANDING */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tighter">
              OCEAN SIGMA <span className="text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">EXPORT</span>
            </h3>
            <p className="text-sm leading-relaxed opacity-90 max-w-xs">
              Infraestructura logística de precisión para mercados globales. Conectamos tu negocio con el mundo.
            </p>
            <div className="flex gap-3">
              {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
                <Link key={i} href="#" className="p-2.5 rounded-lg bg-[#1e293b]/50 border border-slate-700 hover:border-blue-500 hover:bg-blue-500/10 hover:text-white transition-all duration-300 group">
                  <Icon size={18} className="group-hover:scale-110 transition-transform"/>
                </Link>
              ))}
            </div>
          </div>

          {/* COLUMNA 2: NAVEGACIÓN */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs border-b border-slate-800 pb-2 inline-block">Compañía</h4>
            <ul className="space-y-3 text-sm">
              {['Nosotros', 'Servicios', 'Casos de Éxito', 'Noticias'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2 group w-fit">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 3: LEGAL */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs border-b border-slate-800 pb-2 inline-block">Legal</h4>
            <ul className="space-y-3 text-sm">
              {['Términos de Uso', 'Política de Privacidad', 'Cookies', 'Compliance'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 4: CONTACTO */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs border-b border-slate-800 pb-2 inline-block">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin className="text-blue-500 mt-0.5 shrink-0 group-hover:animate-bounce" size={16} />
                <span className="group-hover:text-white transition-colors">Barranquilla, Colombia<br/>MIA • SHZ • BOG</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="text-blue-500 shrink-0 group-hover:rotate-12 transition-transform" size={16} />
                <a href="tel:+573166400840" className="hover:text-white transition-colors decoration-blue-500/30 hover:underline">+57 316 640 0840</a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="text-blue-500 shrink-0 group-hover:scale-110 transition-transform" size={16} />
                <a href="mailto:miguelsalazar@gmail.com" className="hover:text-white transition-colors decoration-blue-500/30 hover:underline">miguelsalazar@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* BARRA INFERIOR */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2026 Ocean Sigma Export Corp. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 font-mono">
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> SYSTEM: STABLE</span>
            <span>v2.0.4</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;