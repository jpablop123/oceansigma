"use client";

import { useState } from "react";
import { Mail, Phone, Calculator, Send, PackageSearch } from "lucide-react";

const ContactForm = ({ dict }: { dict: any }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "air",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getServiceName = (key: string) => {
    return dict.quote?.services?.[key] || key;
  };

  const mailtoLink = `mailto:oceangima@gmail.com?subject=${encodeURIComponent(
    `${dict.quote.email_subject}: ${getServiceName(formData.serviceType)} - ${formData.name}`
  )}&body=${encodeURIComponent(
    `Hola/Hello Globus Cargo,\n\n` +
    `Name: ${formData.name}\n` +
    `Email: ${formData.email}\n` +
    `Service: ${getServiceName(formData.serviceType)}\n\n` +
    `Details:\n${formData.message}`
  )}`;

  return (
    // CAMBIO IMPORTANTE: id="quote" y scroll-mt-32
    <section id="quote" className="py-24 bg-white relative overflow-hidden scroll-mt-32">
      
      {/* Decoración de fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(#f1f5f9_1px,transparent_1px),linear-gradient(90deg,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* COLUMNA IZQUIERDA */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-[10px] font-bold text-blue-700 tracking-widest uppercase">{dict.quote.badge}</span>
            </div>

            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              {dict.quote.title}
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              {dict.quote.subtitle}
            </p>

            <div className="grid gap-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 transition-colors group hover:border-blue-200">
                    <div className="p-3 bg-white rounded-lg shadow-sm text-blue-600"><Calculator size={20}/></div>
                    <div>
                        <h4 className="font-bold text-slate-800 text-sm">{dict.quote.features.rates_title}</h4>
                        <p className="text-sm text-slate-500 mt-1">{dict.quote.features.rates_desc}</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 transition-colors group hover:border-blue-200">
                    <div className="p-3 bg-white rounded-lg shadow-sm text-blue-600"><Phone size={20}/></div>
                    <div>
                        <h4 className="font-bold text-slate-800 text-sm">{dict.quote.features.support_title}</h4>
                        <p className="text-sm text-slate-500 mt-1">{dict.quote.features.support_desc}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 transition-colors group hover:border-blue-200">
                    <div className="p-3 bg-white rounded-lg shadow-sm text-blue-600"><Mail size={20}/></div>
                    <div>
                        <h4 className="font-bold text-slate-800 text-sm">{dict.quote.features.fast_title}</h4>
                        <p className="text-sm text-slate-500 mt-1">{dict.quote.features.fast_desc}</p>
                    </div>
                </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Formulario */}
          <div className="bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 relative">
            
            <div className="absolute top-4 right-4 text-slate-100">
                <PackageSearch size={60} strokeWidth={1} />
            </div>

            <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">{dict.quote.form.name}</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-400" 
                    placeholder="Nombre/Name" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">{dict.quote.form.email}</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-400" 
                    placeholder="tu@empresa.com" 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">{dict.quote.form.service_label}</label>
                  <div className="relative">
                    <select 
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all appearance-none cursor-pointer"
                    >
                        <option value="air">{dict.quote.services.air}</option>
                        <option value="ocean">{dict.quote.services.ocean}</option>
                        <option value="door">{dict.quote.services.door}</option>
                        <option value="locker">{dict.quote.services.locker}</option>
                        <option value="container">{dict.quote.services.container}</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>
              </div>

              <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">{dict.quote.form.details_label}</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none placeholder:text-slate-400" 
                    placeholder={dict.quote.form.details_placeholder}
                  ></textarea>
              </div>

              <a 
                href={mailtoLink}
                className="group w-full py-4 bg-slate-900 hover:bg-blue-600 text-white font-bold rounded-lg transition-all duration-300 shadow-xl hover:shadow-blue-500/20 flex items-center justify-center gap-2 mt-4"
              >
                {dict.quote.form.btn}
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;