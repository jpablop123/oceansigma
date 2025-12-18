"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Testimonials from "@/components/layout/testimonials";
import {
  FaShieldAlt,
  FaDollarSign,
  FaClock,
  FaShoppingCart,
  FaWarehouse,
  FaHome,
  FaPlaneDeparture,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

export default function EnvioDinamicoPage() {
  const params = useParams();
  const origen = params.origen?.toString() || "usa";
  const destino = params.destino?.toString() || "colombia";

  const format = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1).replace("-", " ");

  const formattedOrigen = format(origen);
  const formattedDestino = format(destino);

  useEffect(() => {
    const title = `Envíos Internacionales desde ${formattedOrigen} a ${formattedDestino} | Globus Cargo`;
    const description = `Servicio de Courier y carga desde ${formattedOrigen} hacia ${formattedDestino}. La mejor tarifa en envíos aéreos y marítimos con casillero gratuito.`;

    document.title = title;
    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) metaDesc.setAttribute("content", description);
    else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = description;
      document.head.appendChild(newMeta);
    }
  }, [formattedOrigen, formattedDestino]);

  return (
    <main className="bg-white text-[#1a1a1a] min-h-screen font-sans selection:bg-[#f58220] selection:text-white overflow-x-hidden">
      <Header />

      {/* === HERO SECTION: Diseño Técnico + Color Corporativo === */}
      {/* CAMBIO: De Slate-900 a Gradiente Naranja Corporativo */}
      <section className="relative pt-40 pb-28 md:pt-52 md:pb-40 px-6 overflow-hidden bg-gradient-to-br from-[#f58220] via-[#ea7615] to-[#d16005]">
        
        {/* Fondo: Patrón de cuadrícula técnico (Mantenido, pero ajustado para fondo naranja) */}
        <div className="absolute inset-0 z-0 opacity-[0.1]" 
             style={{ 
               backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", 
               backgroundSize: "40px 40px" 
             }}>
        </div>

        {/* Glow Effects (Ahora en blanco para resaltar sobre naranja) */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-[0.1] blur-[120px] rounded-full translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          
          {/* Badge de Ruta - Estilo Glassmorphism sobre Naranja */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-bold tracking-wide uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            Ruta Express Habilitada
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white tracking-tight leading-[1.05] drop-shadow-md">
            Envíos desde <span className="text-orange-100 opacity-90">{formattedOrigen}</span><br />
            <span className="relative whitespace-nowrap">
              hacia <span className="text-white relative z-10">{formattedDestino}</span>
              {/* Subrayado decorativo sutil */}
              <div className="absolute bottom-2 left-0 w-full h-3 bg-white/20 -z-0 skew-x-12"></div>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-orange-50 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            La solución logística integral para tus compras y carga comercial. 
            Seguridad, rapidez y tarifas transparentes en cada kilómetro.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md mx-auto sm:max-w-none">
            {/* Botón Principal: Blanco sobre Naranja para máximo contraste */}
            <a
              href="/cotizar"
              className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#f58220] font-bold text-lg rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:bg-orange-50 transition-all transform hover:-translate-y-1"
            >
              Cotizar Envío Gratis
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform"/>
            </a>
            
            {/* Botón Secundario: Transparente con borde blanco */}
            <a
              href="https://wa.me/573150122626"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-medium text-lg rounded-xl hover:bg-white/20 transition-all"
            >
              Hablar con Asesor
            </a>
          </div>

          {/* Estadísticas Rápidas - Adaptadas a fondo Naranja */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/20 pt-10 text-orange-100 text-sm font-medium">
            <div className="flex flex-col items-center group">
              <span className="text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform">+50k</span>
              Envíos Entregados
            </div>
            <div className="flex flex-col items-center group">
              <span className="text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform">24/7</span>
              Soporte Real
            </div>
            <div className="flex flex-col items-center group">
              <span className="text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform">100%</span>
              Carga Asegurada
            </div>
            <div className="flex flex-col items-center group">
              <span className="text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform">0%</span>
              Costos Ocultos
            </div>
          </div>
        </div>
      </section>

      {/* === VENTAJAS: Estructura Idéntica, Colores Neutros === */}
      <section className="py-24 md:py-32 px-6 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#1a1a1a] mb-6 tracking-tight">
                Logística inteligente para tus necesidades.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                No solo movemos cajas, conectamos negocios y familias. Descubre por qué somos la opción preferida para envíos entre {formattedOrigen} y {formattedDestino}.
              </p>
            </div>
            <div className="flex justify-start md:justify-end">
               <a href="/servicios" className="text-[#f58220] font-bold hover:underline flex items-center gap-2 group">
                 Ver todos los servicios <FaArrowRight className="group-hover:translate-x-1 transition-transform"/>
               </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: <FaClock />, 
                title: "Tiempos Récord", 
                desc: "Vuelos diarios y salidas marítimas semanales para garantizar la entrega más rápida del mercado." 
              },
              { 
                icon: <FaShieldAlt />, 
                title: "Seguro Todo Riesgo", 
                desc: "Tu inversión está protegida. Pólizas integrales que cubren desde la recepción hasta la entrega." 
              },
              { 
                icon: <FaDollarSign />, 
                title: "Tarifas All-In", 
                desc: "Precios competitivos por libra o volumen. Sin sorpresas ni recargos de última hora." 
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                {/* Detalle decorativo mantenido */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-[100px] -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-orange-100 text-[#f58220] rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-[#f58220] group-hover:text-white transition-colors duration-300 shadow-sm">
                    {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[#1a1a1a]">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CÓMO FUNCIONA: Mismo Diseño, Colores Limpios === */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="text-[#f58220] font-bold tracking-wider uppercase text-xs mb-3 block">Proceso Simplificado</span>
                <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-4">Tu envío en 3 pasos simples</h2>
                <p className="text-gray-500">Hemos eliminado la complejidad de la importación. Tú compras, nosotros hacemos el resto.</p>
            </div>

          <div className="relative grid md:grid-cols-3 gap-12">
            {/* Línea conectora */}
            <div className="hidden md:block absolute top-[2.5rem] left-[15%] right-[15%] h-[2px] bg-gray-100 z-0">
                <div className="h-full bg-gradient-to-r from-orange-100 to-orange-300 w-full animate-pulse"></div>
            </div>

            {[
              { icon: <FaShoppingCart />, title: "1. Compra Online", desc: "Envía tus compras de Amazon, eBay o proveedores a tu casillero en USA." },
              { icon: <FaWarehouse />, title: "2. Procesamiento", desc: "Recibimos, verificamos y consolidamos tus paquetes para ahorrar espacio." },
              { icon: <FaHome />, title: "3. Entrega Local", desc: `Despacho aduanal y entrega directa en tu dirección en ${formattedDestino}.` },
            ].map((item, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center z-10">
                <div className="w-20 h-20 bg-white border-4 border-[#f58220] rounded-full flex items-center justify-center text-2xl text-[#f58220] shadow-xl shadow-orange-100 mb-6 transition-transform hover:scale-105">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#1a1a1a]">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TESTIMONIOS === */}
      <section className="py-28 bg-[#f8f8f8] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black text-[#1a1a1a] tracking-tight">
                    Clientes Satisfechos
                </h2>
                <p className="mt-4 text-gray-600">Lo que dicen quienes ya confían en Globus Cargo.</p>
            </div>
            <Testimonials />
        </div>
      </section>

      {/* === CTA FINAL: Estructura de Tarjeta, Colores Oscuros Corporativos === */}
      {/* CAMBIO: De Slate Oscuro a Negro/Gris Corporativo (#111 y #1a1a1a) */}
      <section className="relative py-24 px-6 bg-[#111111] overflow-hidden">
        {/* Decoración sutil */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f58220] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f58220] opacity-5 blur-[80px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto bg-[#1a1a1a] rounded-3xl p-8 md:p-16 text-center border border-white/5 shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            ¿Listo para enviar a {formattedDestino}?
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Obtén tu dirección de casillero GRATIS hoy mismo y comienza a disfrutar de las compras internacionales sin fronteras.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/registro"
              className="px-8 py-4 bg-[#f58220] hover:bg-[#d96508] text-white font-bold text-lg rounded-xl shadow-lg transition-all transform hover:scale-105"
            >
              Abrir Casillero Gratis
            </a>
            <a
              href="/cotizar"
              className="px-8 py-4 bg-transparent border border-gray-600 text-white hover:bg-white hover:text-[#1a1a1a] font-semibold text-lg rounded-xl transition-all"
            >
              Calcular Envío
            </a>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500">
            <FaCheckCircle className="text-[#f58220]" /> Sin costos de suscripción mensual
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}