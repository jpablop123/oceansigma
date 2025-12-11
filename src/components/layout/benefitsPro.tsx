"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import globusWhite from "@/assets/img/logo/globuswhite.png";
import {
  ShieldCheck,
  Package,
  Clock,
  Headphones,
  Truck,
  Boxes,
  ArrowRight
} from "lucide-react";

const beneficios = [
  {
    icon: ShieldCheck,
    title: "Seguridad Garantizada",
    desc: "Tus envíos viajan asegurados y con manejo profesional desde la bodega hasta tu puerta.",
  },
  {
    icon: Package,
    title: "Casillero Gratuito",
    desc: "Obtén tu dirección en EE. UU. y recibe todas tus compras sin costo de registro.",
  },
  {
    icon: Truck,
    title: "Cobertura Nacional",
    desc: "Entregamos en todo Colombia: desde las principales ciudades hasta zonas rurales.",
  },
  {
    icon: Clock,
    title: "Envíos Express",
    desc: "Opciones aéreas rápidas para quienes necesitan inmediatez y seguimiento preciso.",
  },
  {
    icon: Boxes,
    title: "Consolidación Inteligente",
    desc: "Ahorra uniendo varios paquetes en un solo envío. Sin costos ocultos.",
  },
  {
    icon: Headphones,
    title: "Soporte Personalizado",
    desc: "Te atendemos por WhatsApp o correo con respuestas reales, no bots.",
  },
];

export default function BenefitsPro() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#AFAFAF] text-white">
      
      {/* === 1. FONDO CON LOGO RECTO (Centrado y sutil) === */}
      <div className="absolute inset-0 opacity-[0.1] flex justify-center items-center select-none pointer-events-none">
        <Image
          src={globusWhite}
          alt="Globus Cargo Logo Marca"
          width={1200}
          height={1200}
          className="object-contain" // Sin rotación, totalmente recto
          priority
        />
      </div>

      {/* Gradiente muy sutil para que no se vea plano el gris */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 pointer-events-none"></div>

      {/* === CONTENIDO === */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-md">
            Beneficios Exclusivos <span className="text-[#f58220]">Globus Cargo</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-white text-lg font-medium drop-shadow-sm">
            Diseñamos nuestra logística pensando en tu tranquilidad y ahorro.
          </p>
        </div>

        {/* Grid de 3 Columnas (Mejor organización) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beneficios.map((b, i) => (
            <motion.div
              key={i}
              className="group p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm
              hover:bg-white/20 hover:border-[#f58220]/50 transition-all duration-300
              hover:-translate-y-1 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Icono */}
              <div
                className="w-14 h-14 flex items-center justify-center rounded-xl 
                bg-[#f58220] text-white shadow-md mb-5 group-hover:scale-110 transition-transform duration-300"
              >
                <b.icon size={28} />
              </div>

              {/* Texto */}
              <div className="text-left">
                <h3 className="text-xl font-bold text-white mb-2 drop-shadow-sm">
                    {b.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed font-medium">
                    {b.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botón CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-[#f58220] text-white font-bold text-lg
            hover:bg-[#d96d15] shadow-xl hover:shadow-orange-500/30 transition-all transform hover:scale-105"
          >
            Abrir mi Casillero Gratis
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}