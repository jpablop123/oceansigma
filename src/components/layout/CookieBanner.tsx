"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Revisamos si ya aceptó antes
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Esperamos 2 segundos para mostrarlo
      const timer = setTimeout(() => setShowBanner(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 z-[9999] md:max-w-md mx-auto md:mx-0 md:left-6"
        >
          <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20 flex flex-col gap-4">
            
            <div className="flex justify-between items-start">
                <div>
                    <h5 className="font-bold text-slate-900 text-sm mb-1">🍪 Política de Cookies</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">
                        Usamos cookies propias y de terceros (como Instagram y Google Maps) para mejorar tu experiencia.
                    </p>
                </div>
                <button onClick={() => setShowBanner(false)} className="text-slate-400 hover:text-slate-600">
                    <X size={16} />
                </button>
            </div>

            <div className="flex gap-3">
                <button 
                    onClick={acceptCookies}
                    className="flex-1 bg-[#245CA7] hover:bg-blue-700 text-white text-xs font-bold py-2.5 rounded-lg transition-colors shadow-lg shadow-blue-900/10"
                >
                    Aceptar Todo
                </button>
                <a 
                    href="/politica-de-datos" // Opcional: si tienes página de legales
                    className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold rounded-lg transition-colors"
                >
                    Ver Más
                </a>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}