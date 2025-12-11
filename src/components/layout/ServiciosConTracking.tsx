"use client";

import { motion } from "framer-motion";
import { Package, Plane, Ship, ShieldCheck, ArrowRight, Lock } from "lucide-react";

const servicios = [
  {
    icon: Package,
    title: "Casillero en Miami",
    desc: "Dirección física gratuita para tus compras en USA con reempaque incluido.",
  },
  {
    icon: Plane,
    title: "Carga Aérea",
    desc: "La opción más veloz para paquetería urgente y compras personales.",
  },
  {
    icon: Ship,
    title: "Carga Marítima",
    desc: "Consolidación de carga para grandes volúmenes y mercancía pesada.",
  },
  {
    icon: ShieldCheck,
    title: "Aduana y Seguros",
    desc: "Gestión aduanal completa y seguro al 100% sobre el valor declarado.",
  },
];

const LOGIN_URL = "https://www.globuscargo.us/#/sign-in";

export default function ServiciosConTracking() {
  return (
    <section className="relative py-24 px-6 bg-[#f8f9fa] overflow-hidden">
      
      {/* Fondo técnico sutil */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)", 
             backgroundSize: "40px 40px" 
           }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* === 1. BANNER DE RASTREO (Diseño tipo Dashboard) === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-24"
        >
          <div className="flex flex-col md:flex-row items-center">
            
            {/* Lado Izquierdo: Icono y Texto */}
            <div className="p-8 md:p-12 flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#f58220] text-xs font-bold uppercase tracking-wide mb-4">
                <Lock size={12} /> Área Segura de Clientes
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-4">
                Rastrea tu envío en tiempo real
              </h2>
              <p className="text-gray-500 text-lg max-w-xl">
                Por seguridad y privacidad de la información, el estado detallado de tus paquetes está disponible exclusivamente en tu portal de cliente.
              </p>
            </div>

            {/* Lado Derecho: Botón de Acción Grande */}
            <div className="p-8 md:p-12 bg-gray-50 w-full md:w-auto h-full flex items-center justify-center border-t md:border-t-0 md:border-l border-gray-100">
              <a
                href={LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 px-8 py-4 bg-[#f58220] text-white font-bold text-lg rounded-xl shadow-lg shadow-orange-500/20 hover:bg-[#d96d15] transition-all transform hover:scale-[1.02]"
              >
                Ingresar al Sistema
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>


        {/* === 2. SERVICIOS (Grid Limpio) === */}
        <div className="text-center mb-16">
          <span className="text-[#f58220] font-bold tracking-widest uppercase text-xs mb-2 block">
            Nuestras Soluciones
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a]">
            Todo lo que necesitas para importar
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-orange-500/5 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icono con efecto hover */}
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-[#f58220] mb-6 group-hover:bg-[#f58220] group-hover:text-white transition-colors duration-300">
                <s.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#f58220] transition-colors">
                {s.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}