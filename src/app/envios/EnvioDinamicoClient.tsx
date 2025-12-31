"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Testimonials from "@/components/layout/testimonials";
import InstagramFeed from "@/components/layout/instagramFeed";
import Videos from "@/components/layout/videos";
import {
  FaShieldAlt,
  FaDollarSign,
  FaClock,
  FaShoppingCart,
  FaWarehouse,
  FaHome,
  FaArrowRight,
  FaPlane,
  FaShip,
  FaCalculator,
  FaInfoCircle,
  FaExclamationTriangle,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const REGISTER_URL =
  "https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7";

type EnvioDinamicoClientProps = {
  origen: string;
  destino: string;
  formattedOrigen: string;
  formattedDestino: string;
};

export default function EnvioDinamicoClient({
  origen,
  destino,
  formattedOrigen,
  formattedDestino,
}: EnvioDinamicoClientProps) {
  const router = useRouter();

  const [quickWeight, setQuickWeight] = useState<string>("");
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqData = [
    {
      q: `¿Cuánto tiempo tarda el envío desde ${formattedOrigen} hasta ${formattedDestino}?`,
      a: "Nuestros envíos aéreos express toman entre 3 a 5 días hábiles, mientras que los envíos marítimos económicos pueden tomar de 15 a 20 días hábiles dependiendo de la aduana.",
    },
    {
      q: "¿Debo pagar impuestos por mis compras?",
      a: "Depende del valor declarado. Si tu paquete vale menos de $200 USD (y pesa menos de 50KG), está 100% exento de impuestos. Mayor a $200 USD paga impuestos (IVA y Arancel).",
    },
    {
      q: "¿El casillero tiene algún costo?",
      a: "No. Abrir y mantener tu casillero en Globus Cargo es 100% gratuito. Solo pagas por el peso o volumen de lo que envías.",
    },
    {
      q: "¿Cómo aseguran mi mercancía?",
      a: "Seguro básico incluido. Aseguramos el 100% del valor declarado por una prima del 2%.",
    },
  ];

  const handleCalculateOrContinue = () => {
    if (!quickWeight) return;
    if (estimatedCost === null) {
      const weight = parseFloat(quickWeight);
      if (!isNaN(weight) && weight > 0) {
        if (weight > 2000) {
          setError("Máximo 2000 lbs permitido.");
          return;
        }
        let total = weight <= 1 ? 12 : 12 + (weight - 1) * 1.8;
        setEstimatedCost(total);
        setError(null);
      }
    } else {
      router.push(`/cotizar?peso=${quickWeight}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleCalculateOrContinue();
  };

  const heroReveal = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 10 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <main className="bg-white text-[#1a1a1a] min-h-screen font-sans selection:bg-[#f58220] selection:text-white overflow-x-hidden">
      <Header />

      {/* Breadcrumbs */}
      <div className="pt-24 pb-2 px-6 bg-orange-50/50 hidden md:block">
        <div className="max-w-7xl mx-auto text-xs text-gray-500 font-medium">
          <span className="hover:text-[#f58220] cursor-pointer">Inicio</span>{" "}
          &gt;
          <span className="hover:text-[#f58220] cursor-pointer ml-1">
            Envíos
          </span>{" "}
          &gt;
          <span className="text-[#f58220] ml-1 font-bold">
            Desde {formattedOrigen} hasta {formattedDestino}
          </span>
        </div>
      </div>

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center pt-10 pb-20 px-6 overflow-hidden bg-gradient-to-br from-[#f58220] via-[#ff9f50] to-[#ffb675]">
        <div
          className="absolute inset-0 z-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 20%, rgba(255,255,255,0.2) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(255,255,255,0.2) 0%, transparent 20%)",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="text-left"
          >
            <motion.div
              variants={heroReveal}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/20 border border-white/40 text-white text-xs font-bold tracking-widest uppercase shadow-sm backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              Ruta Internacional Express
            </motion.div>

            <motion.h1
              variants={heroReveal}
              className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight leading-[1.1] drop-shadow-sm"
            >
              Desde{" "}
              <span className="text-white opacity-95">{formattedOrigen}</span>
              <br />
              hasta{" "}
              <span className="text-white relative inline-block">
                {formattedDestino}
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-white opacity-40"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={heroReveal}
              className="text-lg md:text-xl text-white/90 max-w-xl mb-10 leading-relaxed font-medium"
            >
              La conexión logística definitiva. Sin intermediarios innecesarios.
              Tu carga viaja segura con tecnología de rastreo avanzada.
            </motion.p>

            <motion.div
              variants={heroReveal}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#f58220] font-bold text-lg rounded-xl shadow-lg hover:bg-orange-50 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                Crear Casillero Gratis{" "}
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/cotizar"
                className="flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-md border border-white/40 text-white font-medium text-lg rounded-xl hover:bg-white/30 transition-all"
              >
                Cotizar Envío
              </a>
            </motion.div>
          </motion.div>

          {/* CALCULADORA */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)", scale: 0.95 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/30 p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-1">
                    Calculadora Express
                  </p>
                  <h3 className="text-white text-2xl font-bold flex items-center gap-2">
                    <FaCalculator /> Cotiza al instante
                  </h3>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-sm">
                <div className="mb-4">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 block">
                    Peso del paquete
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      placeholder="0"
                      value={quickWeight}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (val === "") {
                          setQuickWeight("");
                          setEstimatedCost(null);
                          setError(null);
                          return;
                        }
                        const num = parseFloat(val);
                        if (!isNaN(num) && num > 2000) {
                          setError("¡No puedes exceder 2000 lbs!");
                          return;
                        }
                        setQuickWeight(val);
                        setEstimatedCost(null);
                        setError(null);
                      }}
                      onKeyDown={handleKeyDown}
                      className={`w-full bg-gray-50 border ${
                        error
                          ? "border-red-500 text-red-600"
                          : "border-gray-200 text-[#1a1a1a] focus:border-[#f58220]"
                      } text-3xl font-bold rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-all placeholder:text-gray-300`}
                      min="1"
                      max="2000"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">
                      LB
                    </span>
                  </div>
                  <AnimatePresence>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-red-500 text-xs font-bold flex items-start gap-1 overflow-hidden"
                      >
                        <FaExclamationTriangle className="shrink-0 mt-0.5" />{" "}
                        <span>{error}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <AnimatePresence>
                  {estimatedCost !== null && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mb-4 overflow-hidden"
                    >
                      <div className="flex justify-between items-end border-b border-dashed border-gray-200 pb-3 mb-2">
                        <span className="text-gray-500 font-medium text-sm">
                          Tarifa Estimada:
                        </span>
                        <span className="text-3xl font-black text-[#f58220]">
                          ${estimatedCost.toFixed(2)} USD
                        </span>
                      </div>
                      <div className="bg-orange-50 text-orange-800 text-xs p-3 rounded-lg flex items-start gap-2">
                        <FaInfoCircle className="mt-0.5 shrink-0" />
                        <p>
                          <strong>Valor aproximado.</strong> Incluye flete base.
                          No incluye seguro ni impuestos.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={handleCalculateOrContinue}
                  className="w-full bg-[#f58220] text-white font-bold py-4 rounded-xl hover:bg-[#ff9f50] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  {estimatedCost !== null ? "Continuar" : "Calcular Envío"}{" "}
                  <FaArrowRight />
                </button>
              </div>
              <div className="mt-6 flex justify-between text-white/80 text-xs font-medium px-2">
                <span>* 1ra Libra: $12.00</span>
                <span>* Libra Adicional: $1.80</span>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-[-20px] right-[-20px] w-24 h-24 bg-white rounded-full opacity-20 blur-xl"
            ></motion.div>
          </motion.div>
        </div>
      </section>

      {/* VENTAJAS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#f58220] font-bold tracking-widest uppercase text-xs mb-3 block">
              ¿Por qué Globus Cargo?
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-6 tracking-tight">
              Logística sin fronteras
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Diseñamos un proceso fluido para que comprar en {formattedOrigen} se
              sienta como comprar localmente en {formattedDestino}.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaClock />,
                title: "Velocidad Garantizada",
                desc: "Vuelos diarios y procesos optimizados.",
              },
              {
                icon: <FaShieldAlt />,
                title: "Seguro Automático",
                desc: "Cada paquete asegurado al 100%.",
              },
              {
                icon: <FaDollarSign />,
                title: "Sin Cobros Sorpresa",
                desc: "Tarifas claras antes de enviar.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 bg-gray-50 rounded-[2rem] border border-gray-100 hover:border-[#f58220]/20 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(245,130,32,0.1)] transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl text-[#f58220] mb-8 shadow-sm group-hover:scale-110 group-hover:bg-[#f58220] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#1a1a1a]">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PASOS */}
      <section className="py-24 bg-[#f8f9fa] text-[#1a1a1a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-[#f58220] font-bold tracking-widest uppercase text-xs mb-3 block">
                Paso a Paso
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Tu envío en piloto automático
              </h2>
            </div>
            <a
              href={REGISTER_URL}
              className="px-8 py-3 rounded-full border-2 border-[#f58220] text-[#f58220] hover:bg-[#f58220] hover:text-white transition-all font-bold"
            >
              Comenzar ahora
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-[2px] bg-gray-200"></div>
            {[
              {
                icon: <FaShoppingCart />,
                step: "01",
                title: "Compra Online",
                desc: `Envía tus compras a tu casillero en ${formattedOrigen}.`,
              },
              {
                icon: <FaWarehouse />,
                step: "02",
                title: "Procesamos",
                desc: "Consolidamos y preparamos tu carga.",
              },
              {
                icon: <FaHome />,
                step: "03",
                title: "Recibe Feliz",
                desc: `Entregamos en tu puerta en ${formattedDestino}.`,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative flex flex-col items-start p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#f58220]/10 transition-all group"
              >
                <div className="absolute top-8 right-8 text-5xl font-black text-gray-100 group-hover:text-[#f58220]/10 transition-colors">
                  {item.step}
                </div>
                <div className="w-16 h-16 rounded-full bg-[#f58220] flex items-center justify-center text-2xl text-white shadow-[0_10px_20px_rgba(245,130,32,0.3)] mb-8 z-10 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1a1a1a]">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Y CTA */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a]">
              Resolvemos tus dudas
            </h2>
          </div>
          <div className="space-y-4">
            {faqData.map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:border-[#f58220]/30 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 bg-gray-50 text-left font-bold text-[#1a1a1a] hover:bg-white transition-colors"
                >
                  <span className="pr-8">{item.q}</span>
                  {openFaq === idx ? (
                    <FaChevronUp className="text-[#f58220]" />
                  ) : (
                    <FaChevronDown className="text-gray-400" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-white"
                    >
                      <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-4">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-gray-100">
        <Videos />
      </div>
      <div className="border-t border-gray-100">
        <InstagramFeed />
      </div>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Testimonials />
        </div>
      </section>

      <section className="relative py-32 px-6 overflow-hidden bg-gray-50 pb-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f58220] opacity-[0.05] blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#f58220] opacity-[0.05] blur-[120px] rounded-full pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-black text-[#1a1a1a] mb-8"
          >
            ¿Listo para enviar a {formattedDestino}?
          </motion.h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 bg-[#f58220] text-white font-bold text-lg rounded-xl shadow-lg hover:bg-[#d96508] transition-all"
            >
              Abrir Casillero Gratis
            </a>
            <a
              href="/cotizar"
              className="px-12 py-5 bg-white border border-gray-200 text-[#1a1a1a] font-bold text-lg rounded-xl hover:border-[#f58220] transition-all"
            >
              Consultar Tarifas
            </a>
          </div>
        </div>
      </section>

      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 2 }}
        className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-[0_-10px_20px_rgba(0,0,0,0.1)] z-50 md:hidden flex items-center justify-between gap-4"
      >
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-bold text-gray-400">
            Oferta Especial
          </span>
          <span className="text-sm font-bold text-[#1a1a1a]">
            Casillero Gratis
          </span>
        </div>
        <a
          href={REGISTER_URL}
          className="bg-[#f58220] text-white px-6 py-3 rounded-full font-bold text-sm shadow-md"
        >
          Registrarme
        </a>
      </motion.div>

      <Footer />
    </main>
  );
}