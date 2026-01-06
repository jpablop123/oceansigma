"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExclamationTriangle, FaTimes, FaEye, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TAX_LIMIT_TEXT, IS_EMERGENCY_MODE } from "@/utils/config";

// Asegúrate de que este import apunte a tu imagen .webp correctamente
import bannerImg from "@/assets/img/emergencia globus.webp";

export default function EmergencyTaxBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const BLOG_URL = "/blog/normativa-2026-emergencia-economica-impuestos-50-usd";

  if (!IS_EMERGENCY_MODE) return null;

  const irAlBlog = () => {
    setShowModal(false);
    router.push(BLOG_URL);
  };

  return (
    <>
      {/* === 1. TIRA AMARILLA (BANNER) === */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-yellow-50 border-b border-yellow-200 relative z-40"
          >
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div className="flex items-center gap-3 text-sm text-yellow-900">
                <div className="text-yellow-600 text-lg shrink-0">
                  <FaExclamationTriangle />
                </div>
                <p className="leading-tight">
                  <span className="font-bold">Aviso Normativa 2026: </span>
                  Las importaciones de <strong>{TAX_LIMIT_TEXT} o más</strong> ahora pagan IVA y Aranceles.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowModal(true)}
                  className="flex items-center gap-2 bg-yellow-200 hover:bg-yellow-300 text-yellow-900 px-4 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm"
                >
                  <FaEye /> Ver Comunicado
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-yellow-600 hover:text-yellow-900 hover:bg-yellow-100 p-2 rounded-full transition-colors"
                >
                  <FaTimes />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === 2. MODAL MEJORADO (Tipo Tarjeta Móvil/Desktop) === */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            {/* CAJA DEL MODAL */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              // CLASES CLAVE:
              // flex flex-col: Para ordenar cabecera, cuerpo y pie.
              // max-h-[85vh]: Nunca será más alto que el 85% de la pantalla.
              // w-full max-w-md: Ancho controlado, perfecto para infografías verticales.
              className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-md max-h-[85vh] flex flex-col relative"
            >
              
              {/* --- A. CABECERA FIJA --- */}
              <div className="bg-[#f58220] px-5 py-4 flex justify-between items-center shrink-0 z-10 shadow-sm">
                <h3 className="font-bold text-white text-lg tracking-wide">
                  Comunicado Oficial
                </h3>
                <button 
                  onClick={() => setShowModal(false)}
                  className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              {/* --- B. CUERPO CON SCROLL (Aquí va la imagen) --- */}
              {/* overflow-y-auto: Permite scroll si la imagen es muy larga */}
              <div className="flex-1 overflow-y-auto bg-gray-50 p-0 relative">
                 <Image
                  src={bannerImg} 
                  alt="Infografía Normativa"
                  className="w-full h-auto block" 
                  priority
                />
                {/* Degradado inferior para indicar que hay más contenido si scrolleas */}
                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              </div>

              {/* --- C. PIE FIJO (Botón de acción) --- */}
              <div className="p-5 bg-white border-t border-gray-100 shrink-0 flex flex-col gap-2 z-10">
                <div className="flex justify-between items-center text-xs text-gray-400 mb-1">
                   <span>Decreto Legislativo 1474</span>
                   <span>Globus Cargo 2026</span>
                </div>
                <button
                  onClick={irAlBlog}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#f58220] hover:bg-[#e06510] text-white rounded-xl font-bold text-base transition-all shadow-lg shadow-orange-200 active:scale-[0.98]"
                >
                  Leer Noticia Completa <FaArrowRight size={16} />
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}