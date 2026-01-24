"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Cookie } from "lucide-react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false); // Estado para abrir el modal de texto

  useEffect(() => {
    // Revisamos si ya aceptó antes
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
    setShowPolicy(false);
  };

  return (
    <>
      {/* === 1. BANNER FLOTANTE (Lo que sale primero) === */}
      <AnimatePresence>
        {showBanner && !showPolicy && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-4 left-4 right-4 z-[9990] md:max-w-md mx-auto md:mx-0 md:left-6"
          >
            <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-slate-200 flex flex-col gap-4">
              
              <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                      <div className="p-2 bg-blue-100 text-blue-600 rounded-lg h-fit">
                        <Cookie size={20} />
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-900 text-sm mb-1">Transparencia de Datos</h5>
                        <p className="text-xs text-slate-500 leading-relaxed">
                            Usamos cookies para integrar Instagram y Google Maps. No guardamos datos personales sensibles sin tu permiso.
                        </p>
                      </div>
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
                      Aceptar y Continuar
                  </button>
                  <button 
                      onClick={() => setShowPolicy(true)} // AHORA ABRE EL MODAL
                      className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold rounded-lg transition-colors"
                  >
                      Ver Política
                  </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === 2. MODAL DE POLÍTICA COMPLETA (Al dar clic en "Ver Política") === */}
      <AnimatePresence>
        {showPolicy && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowPolicy(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Header del Modal */}
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                  <div className="flex items-center gap-3">
                      <ShieldCheck className="text-[#245CA7]" size={24} />
                      <h2 className="text-lg font-bold text-slate-800">Política de Cookies y Datos</h2>
                  </div>
                  <button onClick={() => setShowPolicy(false)} className="p-2 hover:bg-slate-200 rounded-full text-slate-500 transition-colors">
                      <X size={20} />
                  </button>
              </div>

              {/* Contenido (Scrollable) */}
              <div className="p-6 overflow-y-auto text-slate-600 text-sm leading-relaxed space-y-4">
                  <p>
                    En <strong>Gestión Global</strong>, valoramos tu privacidad. Cumpliendo con la normativa vigente en Colombia, te informamos sobre el uso de cookies en nuestro sitio web.
                  </p>
                  
                  <h3 className="font-bold text-slate-900 mt-4">1. ¿Qué son las Cookies?</h3>
                  <p>Son pequeños archivos de texto que se guardan en tu navegador para mejorar la experiencia de usuario y permitir ciertas funcionalidades técnicas.</p>

                  <h3 className="font-bold text-slate-900 mt-4">2. Cookies de Terceros que usamos</h3>
                  <ul className="list-disc pl-5 space-y-1">
                      <li><strong>Google Maps:</strong> Para mostrarte nuestra ubicación exacta en el mapa interactivo.</li>
                      <li><strong>Instagram (Feed):</strong> Para mostrar nuestras últimas publicaciones y conectar contigo en redes sociales.</li>
                      <li><strong>Vercel Analytics:</strong> Para medir el rendimiento técnico de la página (anonimizado).</li>
                  </ul>

                  <h3 className="font-bold text-slate-900 mt-4">3. Tus Derechos</h3>
                  <p>Puedes desactivar las cookies en cualquier momento desde la configuración de tu navegador. Sin embargo, algunas funciones como el mapa o el feed de Instagram podrían dejar de verse correctamente.</p>
                  
                  <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg text-blue-800 text-xs mt-4">
                    Al hacer clic en "Aceptar", confirmas que estás de acuerdo con el uso de estas tecnologías para los fines descritos.
                  </div>
              </div>

              {/* Footer del Modal */}
              <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
                  <button 
                      onClick={acceptCookies}
                      className="px-6 py-2.5 bg-[#245CA7] hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg shadow-blue-900/10 transition-transform active:scale-95"
                  >
                      Entendido, Aceptar Todo
                  </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}