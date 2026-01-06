// Archivo: src/components/AnuncioPopup.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // 👈 1. Importamos el Router

// 👇 IMPORTANTE: Lo cambié a .webp porque ya lo convertiste.
// Si por alguna razón borraste el webp, cambia esto de nuevo a .jpeg
import popupImg from '@/assets/img/emergencia globus.webp'; 

export default function AnuncioPopup() {
  const [mostrar, setMostrar] = useState(false);
  const router = useRouter(); // 👈 2. Inicializamos el Router

  useEffect(() => {
    const yaVisto = sessionStorage.getItem('popup_normativa_visto');

    if (!yaVisto) {
      const timer = setTimeout(() => {
        setMostrar(true);
      }, 500); 
      return () => clearTimeout(timer);
    }
  }, []);

  const cerrarPopup = () => {
    setMostrar(false);
    sessionStorage.setItem('popup_normativa_visto', 'true');
  };

  // 👇 3. Función para ir al blog y cerrar el popup
  const irAlBlog = () => {
    setMostrar(false); // Cerramos el popup para que no estorbe
    sessionStorage.setItem('popup_normativa_visto', 'true'); // Lo marcamos como visto
    router.push('/blog/normativa-2026-emergencia-economica-impuestos-50-usd'); // Navegamos
  };

  if (!mostrar) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-300">
      
      {/* Contenedor principal del modal */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-300 max-h-[90vh] md:max-h-[80vh]">
        
        {/* BOTÓN CERRAR */}
        <button 
          onClick={cerrarPopup}
          className="absolute top-3 right-3 z-20 p-2 bg-white/90 rounded-full hover:bg-gray-100 text-gray-500 transition-colors shadow-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>

        {/* === LADO IZQUIERDO: IMAGEN === */}
        <div className="w-full md:w-1/2 bg-gray-50 relative min-h-[350px] md:h-auto flex items-center justify-center p-4">
          <Image 
            src={popupImg} 
            alt="Aviso Importante Normativa 2026" 
            fill
            className="object-contain shadow-sm rounded-lg" 
            priority
          />
        </div>

        {/* LADO DERECHO: TEXTO */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center bg-white text-left overflow-y-auto">
          <div className="mb-3">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Urgente
            </span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            Atención: Nueva Normativa 2026
          </h2>
          
          <div className="text-gray-600 mb-8 space-y-3 text-sm md:text-base leading-relaxed">
            <p>
              El gobierno ha actualizado los límites de importación.
            </p>
            <p className="font-medium text-gray-800 bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
              Las compras de <strong>USD $50 o más</strong> ahora están sujetas al pago de IVA y Aranceles.
            </p>
            <p>
              Evita retenciones en aduana informándote sobre los nuevos cambios antes de realizar tus compras.
            </p>
          </div>

          <div className="flex flex-col gap-3 mt-auto">
            {/* 👇 4. AQUI CONECTAMOS LA FUNCIÓN */}
            <button 
              onClick={irAlBlog}
              className="w-full bg-[#F97316] hover:bg-[#e06510] text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-orange-200 active:scale-[0.98]"
            >
              Leer el Comunicado Oficial
            </button>
            
            <button 
              onClick={cerrarPopup}
              className="w-full py-3 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-xl text-sm font-medium transition-colors"
            >
              Entendido, continuar al sitio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}