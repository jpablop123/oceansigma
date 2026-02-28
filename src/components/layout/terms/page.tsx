"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link"; 

export default function PrivacyPage() {
  return (
    // CAMBIO 1: Fondo blanco puro y padding vertical amplio
    <main className="min-h-screen bg-white py-24 px-6 md:px-12">
      
      {/* CAMBIO 2: Contenedor más ancho (max-w-4xl) y sin bordes/sombras */}
      <div className="max-w-4xl mx-auto">
        
        {/* Navegación Minimalista */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors mb-16 text-sm font-medium"
        >
          <ArrowLeft size={16} />
          Volver al inicio
        </Link>

        {/* Encabezado Editorial */}
        <header className="mb-20 border-b border-slate-100 pb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Política de Privacidad
          </h1>
          <p className="text-xl text-slate-500 font-light">
            Última actualización: Febrero 2026
          </p>
        </header>

        {/* Contenido fluido (sin cajas) */}
        <div className="space-y-16 text-slate-700 leading-relaxed text-lg">
          
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Recopilación de Información</h2>
            <p className="leading-8">
              En Ocean Sigma Export Corp, valoramos su privacidad. Recopilamos información que usted nos proporciona directamente, 
              como nombre, correo electrónico y detalles de la empresa cuando utiliza nuestros formularios de contacto 
              o solicita cotizaciones de servicios logísticos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Uso de la Información</h2>
            <p className="mb-4 leading-8">
              Utilizamos su información estrictamente para fines operativos y comerciales, tales como:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-slate-300">
              <li>Procesar y gestionar sus envíos y órdenes de exportación.</li>
              <li>Comunicación directa sobre el estado de sus servicios.</li>
              <li>Cumplimiento con regulaciones aduaneras internacionales.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Compartir Información</h2>
            <p className="leading-8">
              No vendemos su información personal. Solo compartimos datos con terceros (como autoridades portuarias, 
              aduanas o socios logísticos) cuando es <strong>estrictamente necesario</strong> para la ejecución del servicio contratado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Seguridad de Datos</h2>
            <p className="leading-8">
              Implementamos protocolos de seguridad industrial para proteger sus datos contra accesos no autorizados. 
              Sin embargo, ninguna transmisión por internet es 100% segura, por lo que actuamos bajo estándares de mejor esfuerzo y cumplimiento normativo.
            </p>
          </section>

        </div>
        
        {/* Pie de página del documento */}
        <div className="mt-20 pt-10 border-t border-slate-100 text-slate-400 text-sm">
          <p>© 2026 Ocean Sigma Export Corp. Todos los derechos reservados.</p>
        </div>

      </div>
    </main>
  );
}