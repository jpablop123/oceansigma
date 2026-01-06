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
// 👇 1. IMPORTAMOS EL BANNER NUEVO
import EmergencyTaxBanner from "@/app/EmergencyTaxBanner/page";

// (Opcional) Puedes borrar el AnuncioPopup viejo si ya no lo usas
// import AnuncioPopup from "./anuncio-popup/page"; 

export default function HomePage() {
  return (
    // 👇 2. AGREGAMOS PADDING-TOP (pt) PARA QUE EL HEADER FIJO NO TAPE EL BANNER
    <div className="font-sans text-gray-800 relative pt-20 lg:pt-28">
      
      <Header />

      {/* 👇 3. AQUÍ VA EL BANNER. 
          Al estar fuera del Header, el modal se abrirá a pantalla completa sin cortes. 
      */}
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