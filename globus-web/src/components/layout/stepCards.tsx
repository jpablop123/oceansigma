"use client";

import { motion } from "framer-motion";
import { Package, Home, Boxes, Truck } from "lucide-react";

// URL para el paso de registro
const REGISTRATION_URL = "https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7";

const steps = [
  {
    icon: Package,
    title: "Regístrate",
    desc: "Crea tu casillero en Miami en menos de un minuto, gratis y sin trámites complicados.",
    // Añadimos la URL solo a este paso
    href: REGISTRATION_URL, 
  },
  {
    icon: Boxes,
    title: "Envía tus compras",
    desc: "Compra en tus tiendas favoritas de EE. UU. y mándalas a tu casillero personal.",
  },
  {
    icon: Truck,
    title: "Consolidamos y transportamos",
    desc: "Unimos tus paquetes y los enviamos por aéreo o marítimo según lo necesites.",
  },
  {
    icon: Home,
    title: "Recibe en casa",
    desc: "Entrega rápida y segura en la puerta de tu casa, en cualquier ciudad de Colombia.",
  },
];

export default function StepCards() {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Fondo con degradado diagonal */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-50 via-white to-gray-50 -z-10" />

      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#f58220]">
          Cómo funciona
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Solo cuatro pasos para que tus compras desde Estados Unidos lleguen directo a tu puerta.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-14">
          {steps.map((step, i) => {
            // Decidimos qué componente usar: motion.a si tiene href, sino motion.div
            const CardComponent = step.href ? motion.a : motion.div;
            
            // Clases base para el estilo de la tarjeta
            const cardClasses = "relative bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition flex flex-col items-center text-center group";
            
            // Agregamos clases específicas para el enlace (cursor-pointer y -translate-y-2 al hacer hover)
            const linkClasses = " hover:-translate-y-2 cursor-pointer";
            
            return (
              <CardComponent
                key={i}
                // Si es un enlace, agregamos el href, target y las clases de hover
                {...(step.href ? { 
                  href: step.href, 
                  target: "_blank", // Opcional: abre el enlace en una nueva pestaña
                  rel: "noopener noreferrer", 
                  className: `${cardClasses} ${linkClasses}`
                } : {
                  // Si no es un enlace, solo agregamos las clases base
                  className: `${cardClasses}`
                })}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Números grandes en background */}
                <span className="absolute top-4 left-4 text-6xl font-extrabold text-gray-100 opacity-50">
                  {`0${i + 1}`}
                </span>

                {/* Icono */}
                <div className="w-16 h-16 flex items-center justify-center bg-[#f58220]/10 text-[#f58220] rounded-full mb-6 group-hover:bg-[#f58220] group-hover:text-white transition">
                  <step.icon size={30} />
                </div>

                {/* Título y texto */}
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{step.desc}</p>
              </CardComponent>
            );
          })}
        </div>
      </div>
    </section>
  );
}