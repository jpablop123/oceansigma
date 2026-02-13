"use client";

import { FileText, AlertCircle, HelpCircle, Send, ShieldCheck } from "lucide-react";

const PQR = ({ dict }: { dict: any }) => {
  return (
    // ID "contact" para que el botón del menú navegue aquí
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      
      {/* Decoración de fondo sutil (Grid gris muy claro para textura) */}
      <div className="absolute inset-0 bg-[linear-gradient(#f1f5f9_1px,transparent_1px),linear-gradient(90deg,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* COLUMNA IZQUIERDA: Contexto e Información */}
          <div>
            {/* Badge Corporativo */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-[10px] font-bold text-blue-700 tracking-widest uppercase">Support Center</span>
            </div>

            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              {dict.pqr.title}
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              {dict.pqr.subtitle}
            </p>

            {/* Guía visual de tipos de PQR */}
            <div className="grid gap-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors group">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-blue-600 group-hover:scale-110 transition-transform"><FileText size={20}/></div>
                    <div>
                        <h4 className="font-bold text-slate-800 text-sm">{dict.pqr.types.p}</h4>
                        <p className="text-xs text-slate-500 mt-1">Solicitudes generales de información.</p>
                    </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-orange-200 transition-colors group">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-orange-500 group-hover:scale-110 transition-transform"><AlertCircle size={20}/></div>
                    <div>
                        <h4 className="font-bold text-slate-800 text-sm">{dict.pqr.types.q}</h4>
                        <p className="text-xs text-slate-500 mt-1">Insatisfacción con el servicio recibido.</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-red-200 transition-colors group">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-red-500 group-hover:scale-110 transition-transform"><HelpCircle size={20}/></div>
                    <div>
                        <h4 className="font-bold text-slate-800 text-sm">{dict.pqr.types.r}</h4>
                        <p className="text-xs text-slate-500 mt-1">Irregularidades en facturación o procesos.</p>
                    </div>
                </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: El Formulario */}
          <div className="bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 relative">
            
            {/* Sello de seguridad decorativo */}
            <div className="absolute top-4 right-4 text-slate-200">
                <ShieldCheck size={40} strokeWidth={1} />
            </div>

            <form className="flex flex-col gap-6 relative z-10">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">{dict.pqr.form_name}</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-400" placeholder="Ej: Juan Pérez" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">{dict.pqr.form_email}</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-400" placeholder="ejemplo@empresa.com" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">{dict.pqr.form_type}</label>
                  <div className="relative">
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all appearance-none cursor-pointer">
                        <option value="p">{dict.pqr.types.p}</option>
                        <option value="q">{dict.pqr.types.q}</option>
                        <option value="r">{dict.pqr.types.r}</option>
                        <option value="s">{dict.pqr.types.s}</option>
                    </select>
                    {/* Flecha custom para el select */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>
              </div>

              <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">{dict.pqr.form_msg}</label>
                  <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none placeholder:text-slate-400" placeholder="Describa su solicitud detalladamente..."></textarea>
              </div>

              {/* Checkbox de términos */}
              <div className="flex items-start gap-3 mt-2">
                <div className="flex items-center h-5">
                  <input type="checkbox" id="terms" className="w-4 h-4 border border-slate-300 rounded text-blue-600 focus:ring-blue-500 cursor-pointer" />
                </div>
                <label htmlFor="terms" className="text-xs text-slate-500 cursor-pointer">
                  <span className="font-bold text-slate-700">Legal Compliance:</span> Acepto el tratamiento de datos personales bajo la política de privacidad corporativa.
                </label>
              </div>

              <button type="button" className="group w-full py-4 bg-slate-900 hover:bg-blue-600 text-white font-bold rounded-lg transition-all duration-300 shadow-xl hover:shadow-blue-500/20 flex items-center justify-center gap-2 mt-2">
                {dict.pqr.btn}
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PQR;