"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, HelpCircle } from "lucide-react";

export default function PQRSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipo: "PETICION",
    mensaje: ""
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    // 1. Definimos el destino
    const emailDestino = "auxadministrativo@gyg.net.co";
    
    // 2. Asunto limpio
    const asunto = `NUEVO PQR - ${formData.tipo} - ${formData.nombre}`;
    
    // 3. Cuerpo del mensaje CONSTRUIDO MANUALMENTE (Para evitar errores de formato)
    const linea1 = "Hola, se ha radicado una nueva solicitud desde la web:";
    const separador = "------------------------------------------------";
    const datos = `TIPO: ${formData.tipo}\nNOMBRE: ${formData.nombre}\nTELEFONO: ${formData.telefono}\nCORREO: ${formData.email}`;
    const detalle = `MENSAJE:\n${formData.mensaje}`;
    
    // Unimos todo con saltos de línea explícitos
    const cuerpo = `${linea1}\n\n${separador}\n${datos}\n${separador}\n\n${detalle}`;

    // 4. Generamos el link mágico
    // Usamos encodeURIComponent para asegurar que los espacios y enters pasen bien al correo
    const mailtoLink = `mailto:${emailDestino}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

    // 5. Abrimos el cliente de correo
    window.location.href = mailtoLink;
  };

  return (
    <section id="pqr" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-12">
            <span className="text-[#245CA7] font-bold tracking-widest text-xs uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Canal de Transparencia
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-4">
                Radica tu PQR
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
                En Gestión Global valoramos tu opinión. Utiliza este canal para presentar tus Peticiones, Quejas, Reclamos o Sugerencias.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
            
            {/* COLUMNA IZQUIERDA: INFORMACIÓN */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
            >
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <HelpCircle className="text-[#245CA7]" size={20} />
                        ¿Qué deseas radicar?
                    </h3>
                    <ul className="space-y-4 text-sm text-slate-600">
                        <li className="flex gap-3">
                            <span className="font-bold text-[#245CA7] min-w-[80px]">PETICIÓN:</span>
                            Solicitud de información o servicios.
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-[#245CA7] min-w-[80px]">QUEJA:</span>
                            Manifestación de inconformidad con el servicio.
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-[#245CA7] min-w-[80px]">RECLAMO:</span>
                            Exigencia por incumplimiento de un derecho.
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-[#245CA7] min-w-[80px]">SUGERENCIA:</span>
                            Propuesta para mejorar nuestros servicios.
                        </li>
                    </ul>
                </div>

                <div className="bg-blue-900 p-6 rounded-2xl text-white shadow-xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h4 className="font-bold text-lg mb-2">Tiempos de Respuesta</h4>
                        <p className="text-blue-200 text-sm">
                            Daremos respuesta a tu solicitud en un plazo máximo de <strong>15 días hábiles</strong>, conforme a la normativa legal vigente.
                        </p>
                    </div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                </div>
            </motion.div>

            {/* COLUMNA DERECHA: FORMULARIO */}
            <motion.form 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100"
            >
                <div className="space-y-5">
                    
                    {/* TIPO DE SOLICITUD */}
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Tipo de Solicitud</label>
                        <div className="grid grid-cols-2 gap-2">
                            {['PETICION', 'QUEJA', 'RECLAMO', 'SUGERENCIA'].map((type) => (
                                <button
                                    key={type}
                                    type="button"
                                    onClick={() => setFormData({...formData, tipo: type})}
                                    className={`text-xs font-bold py-3 rounded-xl border transition-all ${
                                        formData.tipo === type 
                                        ? 'bg-[#245CA7] text-white border-[#245CA7]' 
                                        : 'bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100'
                                    }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Nombre Completo</label>
                            <input 
                                type="text" 
                                name="nombre"
                                required
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#245CA7] transition-all"
                                placeholder="Tu nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Teléfono</label>
                            <input 
                                type="tel" 
                                name="telefono"
                                required
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#245CA7] transition-all"
                                placeholder="300 000 0000"
                                value={formData.telefono}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Correo Electrónico (Para respuesta)</label>
                        <input 
                            type="email" 
                            name="email"
                            required
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#245CA7] transition-all"
                            placeholder="ejemplo@empresa.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Detalle de tu solicitud</label>
                        <textarea 
                            name="mensaje"
                            required
                            rows={4}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#245CA7] transition-all resize-none"
                            placeholder="Describe detalladamente tu caso..."
                            value={formData.mensaje}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <button 
                        type="submit"
                        className="w-full bg-[#245CA7] hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/20 transition-all flex items-center justify-center gap-2 group"
                    >
                        Radicar Solicitud <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <p className="text-[10px] text-center text-slate-400">
                        Al enviar este formulario, se abrirá tu aplicación de correo predeterminada para confirmar el envío.
                    </p>
                </div>
            </motion.form>
        </div>
      </div>
    </section>
  );
}