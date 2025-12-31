"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import img1 from "@/assets/img/logo/fotosreveladas/registratenglobus.webp";
import img2 from "@/assets/img/logo/fotosreveladas/compraonlineamazon.webp";
import img3 from "@/assets/img/logo/fotosreveladas/recibeenpuerta.webp";

import {
  FaPlay,
  FaUserPlus,
  FaStore,
  FaShippingFast,
  FaArrowRight,
} from "react-icons/fa";

type Step = {
  id: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
  imgUrl: StaticImageData;
  duration: string;
  link: string | null;
  youtubeId: string;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Regístrate en Globus",
    desc: "Crea tu casillero gratuito y obtén tu dirección física en Miami.",
    icon: <FaUserPlus />,
    imgUrl: img1,
    duration: "0.46",
    link: "https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7",
    youtubeId: "578TYMtFmD8",
  },
  {
    id: 2,
    title: "Compra Online",
    desc: "Compra en cualquier tienda y envía a tu nueva dirección en Miami.",
    icon: <FaStore />,
    imgUrl: img2,
    duration: "0:45",
    link: null,
    youtubeId: "wqepZ-H2JvI",
  },
  {
    id: 3,
    title: "Recibe en tu Puerta",
    desc: "Nosotros nos encargamos de la logística hasta tu hogar.",
    icon: <FaShippingFast />,
    imgUrl: img3,
    duration: "0:23",
    link: null,
    youtubeId: "yKZvLYDrfno",
  },
];

// ✅ FIX TS: tipamos Variants y el parámetro "i"
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function VideosFocused() {
  // ✅ guardamos el step completo para el modal (más fácil)
  const [activeStep, setActiveStep] = useState<Step | null>(null);

  const closeModal = () => setActiveStep(null);

  // ✅ cerrar con ESC + bloquear scroll cuando modal está abierto
  useEffect(() => {
    if (!activeStep) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeStep]);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Fondos decorativos */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#f58220] font-bold tracking-wider uppercase text-sm mb-3 block"
          >
            Video Guía
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Domina Globus en 3 Pasos
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Aprende cómo traer tus compras desde EE.UU. de forma sencilla.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
            >
              <div className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 border border-slate-100">
                {/* === ZONA DEL VIDEO (thumbnail) === */}
                <button
                  type="button"
                  onClick={() => setActiveStep(step)}
                  className="relative aspect-video bg-slate-900 group/video overflow-hidden text-left"
                  aria-label={`Reproducir: ${step.title}`}
                >
                  <Image
                    src={step.imgUrl}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover/video:scale-105"
                    placeholder="blur"
                    priority={step.id === 1}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover/video:bg-black/50 transition-colors z-10" />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="relative flex items-center justify-center w-16 h-16 bg-[#f58220] rounded-full text-white pl-1 shadow-lg transform transition-all duration-300 group-hover/video:scale-110 group-hover/video:bg-orange-500">
                      <FaPlay className="text-2xl" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded-md z-20">
                    {step.duration}
                  </div>
                </button>

                {/* === ZONA DE TEXTO === */}
                <div className="p-6 flex flex-col flex-grow relative z-10 bg-white">
                  <div className="absolute top-2 right-4 text-slate-100 text-7xl font-black leading-none select-none -z-10">
                    0{step.id}
                  </div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="shrink-0 p-3 bg-orange-100 text-[#f58220] rounded-xl text-xl">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#f58220] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {step.link && (
                    <div className="mt-auto pt-4">
                      <a
                        href={step.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#f58220] hover:text-orange-700 transition-colors group/link"
                      >
                        Registrarme ahora
                        <FaArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ MODAL RESPONSIVE (GRANDE + MOVIBLE) */}
      <AnimatePresence>
        {activeStep && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center px-3 py-6 md:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Reproductor de video: ${activeStep.title}`}
          >
            {/* overlay: click afuera cierra */}
            <motion.button
              type="button"
              aria-label="Cerrar"
              className="absolute inset-0 bg-black/70"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Panel movible */}
            <motion.div
              drag
              dragMomentum={false}
              dragElastic={0.08}
              className="relative z-10 w-full max-w-5xl"
              initial={{ y: 20, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 20, scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                {/* Header del modal */}
                <div className="flex items-center justify-between gap-3 px-4 py-3 bg-slate-900">
                  <div className="min-w-0">
                    <p className="text-white font-bold truncate">
                      {activeStep.title}
                    </p>
                    <p className="text-white/70 text-xs truncate">
                      Tip: puedes mover la ventana arrastrando 👆
                    </p>
                  </div>

                  {/* Botón cerrar grande (mobile friendly) */}
                  <button
                    type="button"
                    onClick={closeModal}
                    className="shrink-0 w-11 h-11 rounded-full bg-white/10 text-white hover:bg-red-600 transition-colors flex items-center justify-center text-lg"
                    aria-label="Cerrar video"
                  >
                    ✕
                  </button>
                </div>

                {/* Video responsive */}
                <div className="relative w-full bg-black">
                  <div className="relative w-full aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${activeStep.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                      title={activeStep.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>

                {/* Footer mini (opcional, se ve pro en mobile) */}
                <div className="px-4 py-3 bg-white border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Duración: {activeStep.duration}
                  </span>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="text-sm font-bold text-[#f58220] hover:text-orange-700 transition-colors"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}