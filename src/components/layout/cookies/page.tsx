"use client";

import { ArrowLeft, ShieldCheck } from "lucide-react";
import Link from "next/link"; 

export default function CompliancePage() {
  return (
    <main className="min-h-screen bg-white py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors mb-16 text-sm font-medium"
        >
          <ArrowLeft size={16} />
          Volver al inicio
        </Link>

        <header className="mb-20 border-b border-slate-100 pb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-700">
               <ShieldCheck size={32} />
            </div>
            <span className="text-sm font-bold text-blue-700 tracking-wider uppercase">Integridad Corporativa</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Compliance & Ética
          </h1>
          <p className="text-xl text-slate-500 font-light max-w-2xl">
            Operamos bajo los más estrictos estándares de legalidad internacional y transparencia comercial.
          </p>
        </header>

        <div className="space-y-16 text-slate-700 leading-relaxed text-lg">
          
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Trade Compliance</h2>
            <p className="leading-8">
              Nos adherimos rigurosamente a las regulaciones de comercio internacional, incluidas las normativas de la Oficina de Control 
              de Activos Extranjeros (OFAC) de los Estados Unidos y las leyes aduaneras locales de cada jurisdicción donde operamos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Prevención de Lavado de Activos (AML)</h2>
            <p className="leading-8">
              Mantenemos políticas estrictas de "Conozca a su Cliente" (KYC) y monitoreo de transacciones para prevenir el uso de nuestra 
              infraestructura logística para actividades ilícitas, lavado de dinero o financiamiento del terrorismo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Código de Ética</h2>
            <p className="leading-8">
              Nuestros empleados y socios comerciales están obligados a actuar con integridad, honestidad y transparencia en todas las operaciones. 
              Rechazamos cualquier forma de soborno o corrupción en nuestras cadenas de suministro.
            </p>
          </section>

          <section className="bg-slate-50 p-8 rounded-none border-l-4 border-blue-600">
            <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-2">Canal de Denuncias</h2>
            <p className="text-base mb-4">
              Si tiene conocimiento de alguna irregularidad o violación de nuestras políticas de cumplimiento, repórtelo inmediatamente.
            </p>
            <a href="mailto:compliance@oceansigma.com" className="text-blue-600 font-semibold hover:underline text-lg">
              compliance@oceansigma.com
            </a>
          </section>

        </div>
        
        <div className="mt-20 pt-10 border-t border-slate-100 text-slate-400 text-sm">
          <p>© 2026 Ocean Sigma Export Corp. Todos los derechos reservados.</p>
        </div>

      </div>
    </main>
  );
}