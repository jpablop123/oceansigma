"use client";

import Header from "@/components/layout/header";
import Hero from "@/components/layout/hero";
import StepCards from "@/components/layout/stepCards";
import Testimonials from "@/components/layout/testimonials";
import BenefitsPro from "@/components/layout/benefitsPro";
import ServiciosConTracking from "@/components/layout/ServiciosConTracking";
import QuoteForm from "@/components/layout/quoteForm";
import Footer from "@/components/layout/footer";
import ChatBubble from "@/components/layout/ChatBubble"; 
import Videos from "@/components/layout/videos";
import InstagramFeed from "@/components/layout/instagramFeed";
import EmergencyTaxBanner from "@/app/EmergencyTaxBanner/page";

// 👇 1. DESCOMENTA E IMPORTA EL POPUP CORRECTAMENTE
// Asegúrate de que la ruta coincida con donde guardaste el archivo.
// Si el archivo está en src/components/AnuncioPopup.tsx:
import AnuncioPopup from "@/app/anuncio-popup/page"; 

export default function HomePage() {
  return (
    <div className="font-sans text-gray-800 relative pt-20 lg:pt-28">
      
      {/* 👇 2. AGREGA EL COMPONENTE AQUÍ */}
      {/* Al ponerlo aquí arriba, se cargará junto con la página. 
          Como tiene "fixed" en su CSS, flotará sobre todo lo demás. */}
      <AnuncioPopup />

      <Header />
      <EmergencyTaxBanner />
      <Hero />
      <ServiciosConTracking />
      <QuoteForm />
      <BenefitsPro />
      <InstagramFeed/>
      <StepCards />
      <Videos/>
      <Testimonials />
      <Footer />
      <ChatBubble />
    </div>
  );
}