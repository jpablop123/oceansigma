"use client";

import { motion } from "framer-motion";
import { 
  MapPin, Phone, Mail, Send, 
  MessageCircle
} from "lucide-react";

export default function ContactSection() {
  
  const handleWhatsApp = () => {
    const message = "Hola Gestión Global, estoy interesado en una asesoría de SST.";
    window.open(`https://wa.me/573166400840?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="contacto" className="relative py-24 bg-slate-50 overflow-hidden">
      
      {/* === FONDO MAPA MUNDI === */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
         
         {/* 1. EL MAPA */}
         <div 
            className="absolute inset-0 opacity-[0.6]" 
            style={{
                backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/2/2f/World_map_dots_white.svg")`,
                filter: "invert(1) contrast(200%)", 
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
         />

         {/* 2. MANCHAS DE LUZ */}
         <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-200/50 rounded-full blur-[150px] mix-blend-multiply"></div>
         <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-indigo-200/50 rounded-full blur-[150px] mix-blend-multiply"></div>
         
         {/* 3. MÁSCARA DE DESVANECIMIENTO */}
         <div className="absolute inset-0 bg-gradient-to-t from-slate-50/80 via-transparent to-slate-50/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* HEADER DE LA SECCIÓN */}
        <div className="text-center mb-16 relative">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <span className="inline-block py-1 px-3 rounded-full bg-white border border-blue-100 text-[#245CA7] font-bold tracking-widest text-xs uppercase mb-4 shadow-sm">
                    Canales de Atención 24/7
                </span>
                <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
                    Conectemos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#245CA7] to-blue-500">Ahora Mismo</span>
                </h2>
                <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                    Estamos listos para atenderte. Ya sea para una auditoría, una consulta o una emergencia, nuestro equipo de especialistas está a un clic de distancia.
                </p>
            </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* === TARJETA DE MAPA === */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative h-[500px] rounded-[2.5rem] overflow-hidden border border-white shadow-2xl shadow-blue-900/10 bg-white"
          >
             {/* NOTA: El mapa es estático visualmente, si quieres un mapa real de Google Maps de esa ubicación avísame para generar el link nuevo */}
             <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src="https://maps.google.com/maps?q=Centro%20Empresarial%20Las%20Americas%20Barranquilla&t=&z=15&ie=UTF8&iwloc=&output=embed"
                style={{ filter: "grayscale(20%) contrast(1.05)" }}
                className="absolute inset-0 opacity-100 transition-opacity duration-500"
             ></iframe>

             {/* RADAR ANIMADO */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="relative">
                    <div className="w-4 h-4 bg-[#245CA7] rounded-full animate-ping absolute inset-0"></div>
                    <div className="w-4 h-4 bg-[#245CA7] border-2 border-white rounded-full relative z-10 shadow-lg"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#245CA7]/30 rounded-full animate-[spin_4s_linear_infinite]"></div>
                </div>
             </div>

             {/* INFO FLOTANTE */}
             <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl border border-white/50 p-6 rounded-3xl shadow-xl">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#245CA7] rounded-xl text-white shadow-lg shadow-blue-500/30">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h4 className="text-slate-900 font-bold text-lg">Sede Principal</h4>
                        <p className="text-slate-500 text-sm mt-1">
                            Calle 77B # 59 - 61 <br/>
                            Centro Empresarial Las Américas 2 <br/>
                            Piso 6, Oficina 612 <br/>
                            Barranquilla, Colombia
                        </p>
                        <div className="mt-3 flex items-center gap-2">
                             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                             <span className="text-xs font-bold text-green-600 uppercase tracking-wide">Abierto Hoy: 8am - 5pm</span>
                        </div>
                    </div>
                </div>
             </div>
          </motion.div>

          {/* === BOTONES DE ACCIÓN === */}
          <div className="flex flex-col justify-center gap-6">
            
            {/* WHATSAPP */}
            <motion.button 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                onClick={handleWhatsApp}
                className="group relative w-full p-8 bg-gradient-to-r from-[#245CA7] to-blue-600 rounded-[2.5rem] shadow-2xl shadow-blue-900/20 hover:scale-[1.02] hover:shadow-blue-900/40 transition-all duration-300 text-left overflow-hidden border border-white/20"
            >
                <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-white/20 transition-colors"></div>
                <MessageCircle size={140} className="absolute -right-8 -bottom-8 text-white/10 rotate-12 group-hover:rotate-0 transition-transform duration-500 animate-pulse" />

                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
                        <span className="animate-pulse">●</span> Respuesta Inmediata
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-2">
                        Hablar por WhatsApp
                    </h3>
                    <p className="text-blue-100 text-lg mb-8 max-w-md">
                        Conecta directamente con un especialista en SST sin esperas.
                    </p>
                    
                    <div className="inline-flex items-center gap-3 bg-white text-[#245CA7] px-6 py-3 rounded-xl font-bold text-sm group-hover:bg-slate-900 group-hover:text-white transition-colors shadow-lg">
                        Iniciar Chat Ahora <Send size={18} />
                    </div>
                </div>
            </motion.button>

            {/* SECUNDARIOS */}
            <div className="grid grid-cols-2 gap-4">
                <motion.a 
                    href="tel:+573166400840"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="group p-6 bg-white border border-white rounded-[2rem] hover:border-blue-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all flex flex-col justify-between h-48"
                >
                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-[#245CA7] group-hover:text-white transition-all border border-slate-100">
                        <Phone size={20} />
                    </div>
                    <div>
                        <p className="text-slate-400 text-xs font-bold uppercase mb-1 group-hover:text-[#245CA7]">Línea Directa</p>
                        <p className="text-slate-900 font-bold text-lg leading-tight group-hover:text-[#245CA7] transition-colors">
                            +57 316 640 0840
                        </p>
                    </div>
                </motion.a>

                <motion.a 
                    href="mailto:auxadministrativa@gyg.net.co"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="group p-6 bg-white border border-white rounded-[2rem] hover:border-blue-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all flex flex-col justify-between h-48"
                >
                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-[#245CA7] group-hover:text-white transition-all border border-slate-100">
                        <Mail size={20} />
                    </div>
                    <div>
                        <p className="text-slate-400 text-xs font-bold uppercase mb-1 group-hover:text-[#245CA7]">Correo Electrónico</p>
                        <p className="text-slate-900 font-bold text-lg leading-tight break-words group-hover:text-[#245CA7] transition-colors">
                        auxadministrativa@gyg.net.co
                        </p>
                    </div>
                </motion.a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}