"use client";

// --- IMPORTS DE COMPONENTES ---
import Hero from "@/components/layout/hero";
import QuienesSomos from "@/components/layout/QuienesSomos"; 
import BenefitsPro from "@/components/layout/benefitsPro";
import ComoFunciona from "@/components/layout/comoFunciona";
import Testimonials from "@/components/layout/testimonials"; 
import InstagramFeed from "@/components/layout/instagramFeed"; 
import PartnersMarquee from "@/components/layout/Partners"; 
import ContactSection from "@/components/layout/contactanos"; 
import ServiceHeroSlider from "@/components/layout/ServiceHeroSlider";

// ✅ 1. IMPORTAR EL BANNER
import CookieBanner from "@/components/layout/CookieBanner";

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
      <ServiceHeroSlider/>
      <BenefitsPro />
      <ComoFunciona />

      {/* 5. TESTIMONIOS */}
      {/* ... */}

      {/* 6. INSTAGRAM (Comunidad) */}
      <InstagramFeed />

      {/* 7. PARTNERS (Respaldo) */}
      <PartnersMarquee />
      <Testimonials />

      {/* 8. CONTACTO (ID: #contacto) */}
      <ContactSection />

      {/* ✅ 2. AGREGARLO AL FINAL (Para que flote encima de todo) */}
      <CookieBanner />
    
    </div>
  );
}