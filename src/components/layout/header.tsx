"use client";

import Link from "next/link";
import { useState, useEffect, useRef, type ReactNode } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

import logo from "@/assets/img/logo/Gestionglobal1.webp";

import { 
  Menu, X, Phone, Mail, MapPin, Activity,
  Users, Home, MessageCircle
} from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type NavItem = {
  key: string;
  label: string;
  icon: ReactNode; 
  href: string;
};

// ✅ CAMBIO CLAVE: Usamos # para navegar en la misma página
const navItems: NavItem[] = [
  {
    key: "inicio",
    label: "Inicio",
    icon: <Home size={18} />,
    href: "#inicio", // ID del Hero
  },
  {
    key: "nosotros",
    label: "Quiénes Somos",
    icon: <Users size={18} />,
    href: "#nosotros", // ID de la sección Nosotros
  },
  {
    key: "contacto",
    label: "Contacto",
    icon: <MessageCircle size={18} />,
    href: "#contacto", // ID de la sección Contacto
  },
];

const TopBar = () => {
  return (
    <div className="bg-[#020617] text-slate-400 text-[11px] py-2 hidden lg:block border-b border-white/5 relative z-[60]">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex gap-6">
          <a href="tel:+573166400840" className="flex items-center gap-2 hover:text-white transition-colors group">
            <Phone size={14} className="text-[#245CA7] group-hover:scale-110 transition-transform" />
            <span>+57 316 640 0840</span>
          </a>
          <div className="flex items-center gap-2 group cursor-pointer hover:text-white transition-colors">
            <Mail size={14} className="text-[#245CA7] group-hover:scale-110 transition-transform" />
            <span>contacto@gyg.net.co</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-[#245CA7]" />
            <span>Puerto Colombia, Atlántico</span>
          </div>
          <span className="bg-[#245CA7]/10 text-blue-400 px-2 py-0.5 rounded border border-[#245CA7]/20 font-medium">
            Licencia SST No. 2562
          </span>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  // Función para hacer scroll suave manualmente (opcional, por si el CSS falla)
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault(); // Evita el salto brusco
    setIsOpen(false); // Cierra menú móvil si está abierto
    
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    
    if (elem) {
      // Ajuste de offset para que el header fijo no tape el título (-100px)
      const headerOffset = 100;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else if (href === "#inicio") {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 shadow-sm ${montserrat.className}`}>
        <TopBar />
        
        <nav ref={navRef} className="w-full bg-white/90 backdrop-blur-xl border-b border-slate-100 relative z-[70]">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 lg:h-20 h-16">
            
            {/* LOGO (Scroll al inicio) */}
            <Link href="#inicio" onClick={(e) => handleScroll(e, "#inicio")} className="relative z-50 flex items-center group">
              <Image
                src={logo}
                alt="Gestión Global de Servicios"
                width={200}
                height={60}
                className="h-10 lg:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-[14px] font-bold text-slate-600 hover:text-[#245CA7] transition-all flex flex-col items-center gap-1 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-2 w-0 h-0.5 bg-[#245CA7] group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* BOTÓN DESKTOP */}
            <div className="hidden lg:flex items-center">
              <Link
                href="https://wa.me/573166400840"
                target="_blank"
                className="group px-6 py-2.5 rounded-full bg-[#245CA7] text-white font-bold text-sm hover:bg-[#1b4680] hover:shadow-lg hover:shadow-blue-900/20 transition-all flex items-center gap-2 overflow-hidden relative"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Activity size={18} className="group-hover:animate-pulse" />
                  Agendar Consultoría
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
            </div>

            {/* BOTÓN MÓVIL */}
            <button 
                className="lg:hidden p-2 text-slate-800 relative z-50 hover:bg-slate-100 rounded-lg transition-colors" 
                onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* MENÚ MÓVIL */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-0 bg-white z-[60] flex flex-col lg:hidden pt-24"
            >
              <div className="absolute inset-0 opacity-[0.4] pointer-events-none" 
                  style={{ backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "24px 24px" }}>
              </div>

              <div className="flex-1 overflow-y-auto px-8 relative z-10">
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link 
                      key={item.key} 
                      href={item.href}
                      onClick={(e) => handleScroll(e, item.href)} // Cierra y hace scroll suave
                      className="py-4 border-b border-slate-100 flex items-center gap-4 text-xl font-bold text-slate-800"
                    >
                       <div className="p-2 rounded-lg bg-slate-50 text-slate-400">
                          {item.icon}
                       </div>
                       {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-8 relative z-10 bg-white/50 backdrop-blur-md border-t border-slate-100">
                <Link href="https://wa.me/573166400840" className="w-full flex justify-center items-center gap-2 py-4 bg-[#245CA7] text-white rounded-xl font-bold shadow-lg shadow-blue-900/20 active:scale-95 transition-transform">
                  <Phone size={20} />
                  Contactar Asesor
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;