"use client";

import Link from "next/link";
import { useState, useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/img/logo/globusorange.png"; 
import { Montserrat } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
// 👇 Importamos el Banner de Emergencia (Asegúrate de tener el archivo creado)
import EmergencyTaxBanner from "@/app/EmergencyTaxBanner/page"; 

import { 
  ChevronDown, 
  Menu, 
  X, 
  User, 
  Box, 
  Briefcase, 
  Info, 
  LogIn, 
  BookOpen,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Cookie
} from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type NavItem = {
  key: string;
  label: string;
  icon: ReactNode; 
  href?: string;
  links?: { href: string; label: string }[];
};

const navItems: NavItem[] = [
  {
    key: "personas",
    label: "Personas",
    icon: <User size={18} />,
    links: [
      { href: "/tarifas", label: "Tarifas USA → COL" },
      { href: "/colombiausa", label: "COL → USA" },
      { href: "/casillero", label: "Casillero Virtual" },
      { href: "/preguntas", label: "Preguntas Frecuentes" },
    ],
  },
  {
    key: "envios",
    label: "Envíos",
    icon: <Box size={18} />,
    links: [
      { href: "/cotizar", label: "Cotizar Envío" },
      { href: "/track", label: "Rastrear Paquete" },
    ],
  },
  {
    key: "empresas",
    label: "Empresas",
    icon: <Briefcase size={18} />,
    links: [
      { href: "/corporativo", label: "Corporativo" },
    ],
  },
  {
    key: "blog",
    label: "Blog",
    icon: <BookOpen size={18} />,
    href: "/blog",
  },
  {
    key: "info",
    label: "Información",
    icon: <Info size={18} />,
    links: [
      { href: "/como-funciona", label: "Cómo Funciona" },
      { href: "/nosotros", label: "Nosotros" },
      { href: "/terminos", label: "Términos" },
      { href: "/contacto", label: "Contáctanos" },
    ],
  },
];

// --- COMPONENTE 1: TOP BAR (Barra superior oscura con datos actualizados) ---
const TopBar = () => {
  return (
    <div className="bg-slate-900 text-gray-300 text-[11px] py-2 hidden lg:block border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex gap-6">
          {/* Teléfono Actualizado */}
          <a href="tel:+573150122626" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone size={14} className="text-[#f58220]" />
            <span>+57 315 0122626</span>
          </a>
          
          {/* Correo */}
          <a href="mailto:info@globuscargo.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={14} className="text-[#f58220]" />
            <span>info@globuscargo.com</span>
          </a>
        </div>

        {/* Dirección Miami Actualizada */}
        <div className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
          <MapPin size={14} className="text-[#f58220]" />
          <span>1414 NW 82nd Ave, Doral, FL 33126</span>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENTE 2: COOKIE CONSENT ---
const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("globus_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("globus_cookie_consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 z-[60] md:max-w-md w-full"
        >
          <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-6 flex flex-col gap-4">
            <div className="flex gap-3">
              <div className="p-2 bg-orange-100 rounded-lg h-fit text-[#f58220]">
                <Cookie size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">
                  Uso de Cookies y Términos
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Utilizamos cookies para mejorar tu experiencia. Al continuar, aceptas nuestros <Link href="/terminos" className="text-[#f58220] underline">Términos</Link> y Política de Privacidad.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={() => setIsVisible(false)}
                className="flex-1 px-4 py-2 rounded-lg border border-gray-200 text-xs font-bold text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Cerrar
              </button>
              <button 
                onClick={handleAccept}
                className="flex-1 px-4 py-2 rounded-lg bg-[#f58220] text-xs font-bold text-white hover:bg-[#d96d15] shadow-md shadow-orange-100 transition-colors flex items-center justify-center gap-2"
              >
                <ShieldCheck size={14} />
                Aceptar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- COMPONENTE PRINCIPAL (HEADER) ---
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const navRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const toggleMobileAccordion = (key: string) => {
    setMobileExpanded(mobileExpanded === key ? null : key);
  };

  return (
    <>
      {/* ENVOLTORIO FIXED COMPLETO 
        Contiene: TopBar -> EmergencyTaxBanner -> Navbar
      */}
      <header className={`fixed top-0 left-0 w-full z-50 shadow-sm ${montserrat.className}`}>
        
        {/* 1. BARRA SUPERIOR NEGRA */}
        <TopBar />

        {/* 2. BANNER DE EMERGENCIA (Tira Amarilla) */}
      
        {/* 3. MENÚ DE NAVEGACIÓN BLANCO */}
        <nav
          ref={navRef}
          className="w-full bg-white/95 backdrop-blur-md border-b border-gray-100 relative z-40"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 lg:h-20 h-16">
            
            {/* LOGO */}
            <Link href="/" className="relative z-50 flex items-center">
              <Image
                src={logo}
                alt="Globus Cargo Logo"
                className="h-8 lg:h-10 w-auto object-contain"
                priority
              />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => {
                if (item.href) {
                  return (
                    <Link
                      key={item.key}
                      href={item.href}
                      className={`flex items-center gap-1.5 text-[14px] xl:text-[15px] font-semibold transition-colors ${
                        pathname === item.href ? "text-[#f58220]" : "text-gray-700 hover:text-[#f58220]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <div key={item.key} className="relative group">
                    <button
                      onClick={() => toggleDropdown(item.key)}
                      className={`flex items-center gap-1.5 text-[14px] xl:text-[15px] font-semibold transition-colors ${
                        activeDropdown === item.key ? "text-[#f58220]" : "text-gray-700 hover:text-[#f58220]"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          activeDropdown === item.key ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.key && item.links && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-60 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden ring-1 ring-black/5"
                        >
                          <div className="py-2">
                            {item.links.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                className="block px-5 py-3 text-sm text-gray-600 hover:bg-orange-50 hover:text-[#f58220] transition-colors font-medium"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* ACTION BUTTONS */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="https://agencias.globuscargo.us/#/sign-in"
                className="text-sm font-semibold text-gray-600 hover:text-[#f58220] transition-colors"
              >
                Iniciar Sesión
              </Link>
              <Link
                href="/cotizar"
                className="px-5 py-2.5 rounded-full border-2 border-[#f58220] text-[#f58220] font-bold text-xs xl:text-sm hover:bg-[#f58220] hover:text-white transition-all shadow-sm hover:shadow-md"
              >
                Cotizar
              </Link>
              <Link
                href="https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7"
                className="px-5 py-2.5 rounded-full bg-[#f58220] text-white font-bold text-xs xl:text-sm hover:bg-[#d96d15] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Registrarse
              </Link>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              className="lg:hidden relative z-50 p-2 text-gray-800 hover:text-[#f58220] transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
       

        </nav>
        
      </header>

      {/* 3. MENÚ MÓVIL EXPANDIBLE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 top-0 left-0 w-full h-[100dvh] bg-white z-[60] flex flex-col lg:hidden"
          >
            {/* Espaciador (Header Height) */}
            <div className="h-32 flex-shrink-0" /> {/* Aumentado para compensar TopBar + Banner */}

            <div className="flex-1 overflow-y-auto px-6 py-4 pb-20 scrollbar-hide">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <div key={item.key} className="border-b border-gray-50 last:border-0 pb-2">
                    {item.href ? (
                       <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-4 w-full py-4 text-lg font-bold transition-colors ${
                          pathname === item.href ? "text-[#f58220]" : "text-gray-800"
                        }`}
                      >
                         <span className={`p-2 rounded-lg ${pathname === item.href ? "bg-orange-50 text-[#f58220]" : "bg-gray-100 text-gray-500"}`}>
                            {item.icon}
                        </span>
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        <button
                          onClick={() => toggleMobileAccordion(item.key)}
                          className={`flex items-center justify-between w-full py-4 text-lg font-bold transition-colors ${
                            mobileExpanded === item.key ? "text-[#f58220]" : "text-gray-800"
                          }`}
                        >
                          <span className="flex items-center gap-4">
                            <span className={`p-2 rounded-lg ${mobileExpanded === item.key ? "bg-orange-50 text-[#f58220]" : "bg-gray-100 text-gray-500"}`}>
                                {item.icon}
                            </span>
                            {item.label}
                          </span>
                          <ChevronDown
                            className={`transition-transform duration-300 ${
                              mobileExpanded === item.key ? "rotate-180 text-[#f58220]" : "text-gray-300"
                            }`}
                          />
                        </button>
                        
                        <AnimatePresence>
                          {mobileExpanded === item.key && item.links && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col gap-3 py-2 pl-[3.25rem] border-l-2 border-orange-50 ml-5 mb-2">
                                {item.links.map((link) => (
                                  <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-500 hover:text-[#f58220] font-medium text-[15px] py-1 block"
                                  >
                                    {link.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* BOTTOM CTA MOBILE */}
            <div className="flex-shrink-0 p-6 bg-white border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-50">
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/cotizar"
                    className="flex items-center justify-center py-3.5 rounded-xl border-2 border-[#f58220] text-[#f58220] font-bold active:scale-95 transition-transform"
                    onClick={() => setIsOpen(false)}
                  >
                    Cotizar
                  </Link>
                  <Link
                    href="https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7"
                    className="flex items-center justify-center py-3.5 rounded-xl bg-[#f58220] text-white font-bold shadow-lg shadow-orange-200 active:scale-95 transition-transform"
                    onClick={() => setIsOpen(false)}
                  >
                    Registrarse
                  </Link>
                </div>
                
                <Link
                  href="https://agencias.globuscargo.us/#/sign-in"
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-500 py-2 hover:text-[#f58220]"
                  onClick={() => setIsOpen(false)}
                >
                  <LogIn size={16} />
                  Ya tengo cuenta, iniciar sesión
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. COMPONENTE DE COOKIES (Renderizado al final) */}
      <CookieConsent />
    </>
  );
};

export default Header;