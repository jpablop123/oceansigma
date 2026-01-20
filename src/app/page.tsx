"use client";

// --- IMPORTS DE COMPONENTES ---
import Hero from "@/components/layout/hero";
import QuienesSomos from "@/components/layout/QuienesSomos"; 
// ✅ CORREGIDO: Apuntaba mal antes
import BenefitsPro from "@/components/layout/benefitsPro";
import ComoFunciona from "@/components/layout/comoFunciona";
import Testimonials from "@/components/layout/testimonials"; // ✅ NUEVO: Los reviews anónimos
import InstagramFeed from "@/components/layout/instagramFeed"; 
import PartnersMarquee from "@/components/layout/Partners"; 
import ContactSection from "@/components/layout/contactanos"; 

export default function HomePage() {
  return (
    <div className="font-sans text-gray-800 relative">
      
      {/* 1. HERO (ID: #inicio) */}
      <section id="inicio">
        <Hero />
      </section>

      {/* 2. QUIÉNES SOMOS (ID: #nosotros) */}
      <section id="nosotros">
        <QuienesSomos />
      </section>

      {/* 3. SERVICIOS (360°) */}


      {/* 4. BENEFICIOS & PROCESO */}
      <BenefitsPro />
      <ComoFunciona />

      {/* 5. TESTIMONIOS (Muro de la Confianza) */}
      {/* Aquí encaja perfecto: ya saben qué haces, ahora ven que eres bueno */}


      {/* 6. INSTAGRAM (Comunidad) */}
      <InstagramFeed />

      {/* 7. PARTNERS (Respaldo) */}
      <PartnersMarquee />
      <Testimonials />

      {/* 8. CONTACTO (ID: #contacto) */}
      <ContactSection />
    
    </div>
  );
}