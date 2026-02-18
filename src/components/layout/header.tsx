"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Montserrat, Roboto_Mono } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, Globe, Zap, ArrowRight } from "lucide-react";

// Asegúrate de que la ruta de tu logo sea correcta
import logo from "@/assets/img/logo/oceansigma.png";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"], weight: ["400", "500"] });

type HeaderProps = {
  lang: "es" | "en";
  dict: any;
};

// --- BARRA SUPERIOR ---
const TopBar = () => (
  <div className="bg-[#080808] text-[#BDC3C7] text-[10px] py-1.5 hidden lg:block border-b border-[#2C3E50]/50 relative z-[60]">
    <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
      <div className={`flex gap-6 ${robotoMono.className}`}>
        <div className="flex items-center gap-2 px-2 py-0.5 rounded bg-[#121212] border border-[#2C3E50]/60">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#007BFF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#007BFF]"></span>
          </span>
          <span className="tracking-widest uppercase text-[#007BFF] font-bold">SYSTEM: ONLINE</span>
        </div>
      </div>

      <div className="flex items-center gap-6 font-medium">
        <a href="mailto:Oceansigmacorp@gmail.com" className="flex items-center gap-2 hover:text-[#007BFF] transition-colors cursor-pointer group">
          <Mail size={12} className="text-[#BDC3C7] group-hover:text-[#007BFF] transition-colors" />
          <span>Oceansigmacorp@gmail.com</span>
        </a>
        <span className="text-[#2C3E50]">|</span>
        <a href="tel:+17866200121" className="hover:text-white transition-colors">
            +1 (786) 694-9244
        </a>
      </div>
    </div>
  </div>
);

// --- HEADER PRINCIPAL ---
const Header = ({ dict, lang }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!dict || !dict.navigation) return null;

  const switchLang = (newLang: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    if (segments.length > 1) {
        segments[1] = newLang;
    } else {
        return `/${newLang}`;
    }
    return segments.join("/");
  };

  const navLinks = [
    { key: "home", href: `/${lang}`, label: dict.navigation.home },
    { key: "services", href: `/${lang}#services`, label: dict.navigation.services },
    { key: "about", href: `/${lang}#about`, label: dict.navigation.about },
    // AHORA APUNTA A #quote PARA QUE COINCIDA CON EL FORMULARIO
    { key: "contact", href: `/${lang}#quote`, label: dict.navigation.contact },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${montserrat.className}`}>
      <TopBar />
      
      <nav className={`w-full transition-all duration-500 border-b relative z-50 ${
        scrolled 
          ? "bg-[#121212]/90 backdrop-blur-xl border-[#2C3E50] py-2 shadow-2xl" 
          : "bg-transparent border-transparent py-4"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          
          {/* LOGO */}
          <Link href={`/${lang}`} className="relative group flex items-center shrink-0">
             <Image
                src={logo}
                alt="Ocean Sigma"
                width={800} 
                height={300}
                quality={100}
                priority 
                className="h-12 lg:h-20 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-all duration-500" 
              />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="relative px-5 py-2 text-[13px] font-bold text-[#BDC3C7] hover:text-white transition-colors group overflow-hidden rounded-md"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 bg-[#2C3E50]/30 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out rounded-md"></span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#007BFF] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="hidden lg:flex items-center gap-6">
            <div className={`flex items-center p-1 border border-[#2C3E50] rounded-lg bg-[#0a0a0a] ${robotoMono.className}`}>
              <Globe size={14} className="ml-2 mr-3 text-[#007BFF] animate-spin-slow" />
              <div className="flex relative">
                  <Link href={switchLang("es")} className={`relative z-10 px-3 py-1 text-[10px] font-bold transition-colors ${lang === 'es' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}>ES</Link>
                  <Link href={switchLang("en")} className={`relative z-10 px-3 py-1 text-[10px] font-bold transition-colors ${lang === 'en' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}>EN</Link>
                  <div className={`absolute top-0 bottom-0 w-1/2 bg-[#2C3E50] rounded transition-transform duration-300 ${lang === 'en' ? 'translate-x-full' : 'translate-x-0'}`}></div>
              </div>
            </div>

            <Link
              href={`/${lang}#quote`}
              className="group relative px-6 py-2.5 bg-transparent border border-[#007BFF] text-[#007BFF] font-bold text-xs uppercase tracking-widest overflow-hidden rounded hover:text-white transition-colors duration-300 hover:shadow-[0_0_20px_rgba(0,123,255,0.6)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                {dict.hero.cta}
                <Zap size={14} className="group-hover:fill-current transition-transform group-hover:rotate-12" />
              </span>
              <div className="absolute inset-0 bg-[#007BFF] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out skew-x-12 scale-150"></div>
            </Link>
          </div>

          {/* TOGGLE MÓVIL */}
          <button 
            className="lg:hidden text-white p-2 hover:bg-[#2C3E50] rounded border border-transparent hover:border-[#007BFF] transition-all duration-300 active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} className="text-[#007BFF]" /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MENÚ MÓVIL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 top-0 bg-[#121212] z-40 lg:hidden flex flex-col pt-24"
          >
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                 style={{ 
                    backgroundImage: "linear-gradient(#007BFF 1px, transparent 1px), linear-gradient(90deg, #007BFF 1px, transparent 1px)", 
                    backgroundSize: "40px 40px" 
                 }}>
            </div>

            <div className="p-8 flex flex-col gap-4 relative z-10 h-full overflow-y-auto">
              {navLinks.map((item, idx) => (
                <Link 
                  key={item.key} 
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between p-4 border border-[#2C3E50] bg-[#1a1a1a]/50 backdrop-blur rounded-xl hover:border-[#007BFF] hover:bg-[#007BFF]/10 transition-all duration-300"
                >
                  <span className="flex items-center gap-4">
                    <span className={`text-[#007BFF] font-bold text-sm bg-[#007BFF]/10 px-2 py-1 rounded ${robotoMono.className}`}>0{idx + 1}</span>
                    <span className="text-xl font-medium text-gray-200 group-hover:text-white">{item.label}</span>
                  </span>
                  <ArrowRight className="text-[#2C3E50] group-hover:text-[#007BFF] group-hover:translate-x-2 transition-transform" size={20} />
                </Link>
              ))}

              <div className="mt-8 grid grid-cols-2 gap-4">
                 <Link href={switchLang("es")} className={`flex items-center justify-center py-4 rounded-xl border font-bold ${lang === 'es' ? 'border-[#007BFF] bg-[#007BFF]/20 text-white' : 'border-[#2C3E50] text-gray-500'}`}>ESPAÑOL</Link>
                 <Link href={switchLang("en")} className={`flex items-center justify-center py-4 rounded-xl border font-bold ${lang === 'en' ? 'border-[#007BFF] bg-[#007BFF]/20 text-white' : 'border-[#2C3E50] text-gray-500'}`}>ENGLISH</Link>
              </div>

               <Link
                href={`/${lang}#quote`}
                onClick={() => setIsOpen(false)}
                className="mt-6 w-full py-5 bg-[#007BFF] text-white font-bold text-center uppercase tracking-widest rounded-xl hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(0,123,255,0.4)] flex justify-center items-center gap-2"
              >
                {dict.hero.cta} <Zap size={18} fill="currentColor"/>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;