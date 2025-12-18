"use client";

import { useState } from "react";
import { Montserrat } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBox,
  FaPlaneDeparture,
  FaDollarSign,
  FaWeightHanging,
  FaArrowLeft,
  FaWhatsapp,
  FaChevronDown,
  FaCalculator,
  FaMapMarkerAlt,
  FaCity
} from "react-icons/fa";
import Select from "react-select";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// Departamentos de Colombia
const departamentos = [
  "Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas", "Caquetá",
  "Casanare", "Cauca", "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare",
  "Huila", "La Guajira", "Magdalena", "Meta", "Nariño", "Norte de Santander", "Putumayo",
  "Quindío", "Risaralda", "San Andrés y Providencia", "Santander", "Sucre", "Tolima",
  "Valle del Cauca", "Vaupés", "Vichada",
].map((dep) => ({ value: dep, label: dep }));

// Estilos personalizados para el Select (para que sea naranja y limpio)
const customSelectStyles = {
  control: (base: any, state: any) => ({
    ...base,
    borderRadius: "0.75rem", // rounded-xl
    padding: "4px",
    border: "1px solid #e5e7eb",
    borderColor: state.isFocused ? "#f58220" : "#e5e7eb",
    boxShadow: state.isFocused ? "0 0 0 1px #f58220" : "none",
    "&:hover": { borderColor: "#f58220" },
    backgroundColor: "#f9fafb", // bg-gray-50
  }),
  option: (base: any, state: any) => ({
    ...base,
    backgroundColor: state.isSelected ? "#f58220" : state.isFocused ? "#fff0e6" : "white",
    color: state.isSelected ? "white" : "#333",
    cursor: "pointer",
  }),
  input: (base: any) => ({
    ...base,
    color: '#333',
  }),
  singleValue: (base: any) => ({
    ...base,
    color: '#333',
  }),
};

export default function CotizadorEnvio() {
  const [form, setForm] = useState({
    departamento: null as { label: string; value: string } | null,
    ciudad: "",
    peso: "",
    valor: "",
  });
  const [resultado, setResultado] = useState<any>(null);
  const [showResult, setShowResult] = useState(false);
  const [shakeField, setShakeField] = useState<"peso" | "valor" | null>(null);
  const [showLegal, setShowLegal] = useState(false);

  const handleLimitedInput = (field: "peso" | "valor", value: string) => {
    let num = Number(value);
    const max = field === "peso" ? 110 : 2000;

    if (num > max) {
      setShakeField(field);
      setTimeout(() => setShakeField(null), 1000);
      num = max;
    }
    setForm((prev) => ({ ...prev, [field]: num.toString() }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const peso = Number(form.peso) || 0;
    const valor = Number(form.valor) || 0;

    const base = 12;
    const adicional = peso > 1 ? (peso - 1) * 1.8 : 0;
    const seguro = valor * 0.02;
    const impuesto = valor > 200 ? valor * 0.19 : 0;
    const total = base + adicional + seguro + impuesto;

    setResultado({
      total,
      desglosado: { base, adicional, seguro, impuesto },
    });
    setShowResult(true);
  };

  const handleReset = () => {
    setShowResult(false);
    setForm({ departamento: null, ciudad: "", peso: "", valor: "" });
  };

  return (
    <section className={`${montserrat.className} bg-gray-50 min-h-screen relative pb-20`}>
      
      {/* === HERO NARANJA (Alto Contraste) === */}
      <div className="bg-gradient-to-r from-[#f58220] to-[#ff9b42] pt-24 pb-32 px-6 relative overflow-hidden">
        {/* Patrón de fondo sutil para textura profesional */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-wide mb-6">
                <FaCalculator /> Calculadora Online
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-sm">
                Cotiza tu envío internacional
            </h1>
            <p className="text-lg text-orange-50 max-w-2xl mx-auto font-medium">
                Obtén un estimado inmediato para tus paquetes desde USA hacia Colombia.
            </p>
        </div>
      </div>

      {/* === TARJETA FLOTANTE PRINCIPAL === */}
      <div className="relative z-20 max-w-4xl mx-auto -mt-20 px-4">
        <div className="bg-white rounded-[2rem] shadow-2xl shadow-gray-200 border border-gray-100 overflow-hidden">
            
            <div className="p-6 md:p-12">
                <AnimatePresence mode="wait">
                {!showResult ? (
                    /* === FORMULARIO === */
                    <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-8"
                    >
                        <div className="grid md:grid-cols-2 gap-8">
                            
                            {/* Grupo: Ubicación */}
                            <div className="space-y-5">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2 pb-2 border-b border-gray-100">
                                    <FaMapMarkerAlt /> Destino
                                </h3>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Departamento</label>
                                    <Select
                                        options={departamentos}
                                        value={form.departamento}
                                        onChange={(val) => setForm((prev) => ({ ...prev, departamento: val }))}
                                        placeholder="Selecciona..."
                                        styles={customSelectStyles}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Ciudad</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#f58220]">
                                            <FaCity />
                                        </div>
                                        <input
                                            type="text"
                                            value={form.ciudad}
                                            onChange={(e) => setForm((prev) => ({ ...prev, ciudad: e.target.value }))}
                                            placeholder="Ej: Medellín"
                                            className="w-full bg-gray-50 text-gray-800 border border-gray-200 rounded-xl py-3 pl-10 pr-4 outline-none focus:border-[#f58220] focus:ring-1 focus:ring-[#f58220] transition-all"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Grupo: Detalles del Paquete */}
                            <div className="space-y-5">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2 pb-2 border-b border-gray-100">
                                    <FaBox /> Detalles de Carga
                                </h3>
                                
                                <motion.div animate={shakeField === "peso" ? { x: [-5, 5, -5, 5, 0] } : {}}>
                                    <label className="flex justify-between text-sm font-bold text-gray-700 mb-2">
                                        Peso <span className="text-xs text-[#f58220] font-normal bg-orange-50 px-2 rounded-full">Máx 110 lb</span>
                                    </label>
                                    <div className={`relative group flex items-center bg-gray-50 border rounded-xl overflow-hidden focus-within:border-[#f58220] focus-within:ring-1 focus-within:ring-[#f58220] transition-all ${shakeField === "peso" ? "border-red-400" : "border-gray-200"}`}>
                                        <div className="pl-4 pr-3 text-gray-400 group-focus-within:text-[#f58220]">
                                            <FaWeightHanging />
                                        </div>
                                        <input
                                            type="number"
                                            value={form.peso}
                                            onChange={(e) => handleLimitedInput("peso", e.target.value)}
                                            placeholder="0"
                                            max={110}
                                            className="w-full bg-transparent py-3 outline-none font-medium text-gray-800"
                                            required
                                        />
                                        <span className="pr-4 text-gray-400 text-xs font-bold">LIBRAS</span>
                                    </div>
                                </motion.div>

                                <motion.div animate={shakeField === "valor" ? { x: [-5, 5, -5, 5, 0] } : {}}>
                                    <label className="flex justify-between text-sm font-bold text-gray-700 mb-2">
                                        Valor Declarado <span className="text-xs text-[#f58220] font-normal bg-orange-50 px-2 rounded-full">Máx $2000</span>
                                    </label>
                                    <div className={`relative group flex items-center bg-gray-50 border rounded-xl overflow-hidden focus-within:border-[#f58220] focus-within:ring-1 focus-within:ring-[#f58220] transition-all ${shakeField === "valor" ? "border-red-400" : "border-gray-200"}`}>
                                        <div className="pl-4 pr-3 text-gray-400 group-focus-within:text-[#f58220]">
                                            <FaDollarSign />
                                        </div>
                                        <input
                                            type="number"
                                            value={form.valor}
                                            onChange={(e) => handleLimitedInput("valor", e.target.value)}
                                            placeholder="0.00"
                                            max={2000}
                                            className="w-full bg-transparent py-3 outline-none font-medium text-gray-800"
                                            required
                                        />
                                        <span className="pr-4 text-gray-400 text-xs font-bold">USD</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Botón Submit */}
                        <div className="pt-6">
                            <motion.button
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                type="submit"
                                className="w-full bg-[#f58220] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-500/20 hover:bg-[#e0751a] hover:shadow-orange-500/40 transition-all flex items-center justify-center gap-2"
                            >
                                <FaPlaneDeparture /> Calcular Tarifa
                            </motion.button>
                        </div>
                    </motion.form>
                ) : (
                    /* === RESULTADOS (Estilo Ticket) === */
                    <motion.div
                    key="resultado"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col h-full"
                    >
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-[#1a1a1a]">Presupuesto Estimado</h3>
                            <p className="text-gray-500 text-sm">Tarifa sujeta a revisión en bodega</p>
                        </div>

                        {/* Ticket de Resumen */}
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 mb-8 relative">
                             {/* Decoración de ticket (muecas laterales) */}
                             <div className="absolute top-1/2 -left-3 w-6 h-6 bg-white rounded-full border-r border-gray-200 transform -translate-y-1/2"></div>
                             <div className="absolute top-1/2 -right-3 w-6 h-6 bg-white rounded-full border-l border-gray-200 transform -translate-y-1/2"></div>
                             <div className="border-b-2 border-dashed border-gray-200 absolute top-1/2 left-4 right-4 transform -translate-y-1/2 pointer-events-none"></div>

                            {/* Desglose */}
                            <div className="space-y-3 pb-8 relative z-10">
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Flete Base (1 lb)</span>
                                    <span className="font-semibold text-gray-900">${resultado.desglosado.base.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Peso Adicional</span>
                                    <span className="font-semibold text-gray-900">${resultado.desglosado.adicional.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Seguro (2%)</span>
                                    <span className="font-semibold text-gray-900">${resultado.desglosado.seguro.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Impuestos (IVA 19%)</span>
                                    <span className="font-semibold text-gray-900">${resultado.desglosado.impuesto.toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Total */}
                            <div className="pt-8 relative z-10">
                                <div className="flex justify-between items-end">
                                    <span className="text-lg font-bold text-gray-700">Total Estimado</span>
                                    <span className="text-4xl font-black text-[#f58220] tracking-tight">${resultado.total.toFixed(2)} <span className="text-sm font-bold text-gray-400">USD</span></span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <button
                                onClick={handleReset}
                                className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-gray-600 bg-white border border-gray-200 hover:bg-gray-50 hover:text-[#f58220] transition-all"
                            >
                                <FaArrowLeft /> Nueva Cotización
                            </button>

                            <a
                                href={`https://wa.me/573150122626?text=${encodeURIComponent(
                                `Hola Globus Cargo ✈️. Quiero enviar un paquete a ${form.departamento?.label}, ${form.ciudad}.
📦 Peso: ${form.peso} lb
💰 Valor: $${form.valor} USD
📊 Cotización Web: $${resultado.total.toFixed(2)} USD.
¿Me ayudan a procesarlo?`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20b358] shadow-lg shadow-green-500/20 transition-all"
                            >
                                <FaWhatsapp size={20} /> Enviar por WhatsApp
                            </a>
                        </div>
                    </motion.div>
                )}
                </AnimatePresence>
            </div>
        </div>

        {/* === LEGAL ACCORDION (Discreto) === */}
        <div className="mt-8 max-w-2xl mx-auto px-4">
            <button
                onClick={() => setShowLegal(!showLegal)}
                className="w-full flex items-center justify-center gap-2 text-xs md:text-sm font-semibold text-gray-400 hover:text-[#f58220] transition-colors"
            >
                <span>Términos y condiciones del simulador</span>
                <motion.div animate={{ rotate: showLegal ? 180 : 0 }}>
                    <FaChevronDown />
                </motion.div>
            </button>

            <AnimatePresence>
                {showLegal && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-4 text-justify text-xs text-gray-400 leading-relaxed bg-white p-4 rounded-xl border border-gray-100 mt-2 shadow-sm">
                            <p className="mb-2">⚠️ <strong>Importante:</strong> Este simulador proporciona un valor estimado.</p>
                            <p>
                                El costo final puede variar tras la inspección física en bodega. El valor de impuestos se calcula sobre el valor declarado, el cual debe coincidir con la factura comercial.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

      </div>
    </section>
  );
}