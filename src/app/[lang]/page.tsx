import { getDictionary } from '../../dictionaries/get-dictionary';

import Hero from '@/components/layout/hero';
import Ticker from '@/components/layout/ticket';
import About from '@/components/layout/about';
import Services from '@/components/layout/services';
import AutoPartsHero from '@/components/layout/AutoPartsHero'; // <-- NUEVO: Hero de Autopartes
import AutoPartsGrid from '@/components/layout/AutoPartsGrid'; // <-- NUEVO: Grid de Autopartes
import Stats from '@/components/layout/stats';
// ❌ Borramos el import de Footer de aquí
import Testimonials from '@/components/layout/testimonial';
import ContactForm from '@/components/layout/pqr';
import PhotoGallery from '@/components/layout/photoGallery';
import ImpactStats from '@/components/layout/ImpactStats';

// --- ESTO SOLUCIONA EL ERROR: Define qué idiomas generar ---
export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}
// -----------------------------------------------------------

type Props = {
  params: Promise<{ lang: "en" | "es" }>;
};

export default async function Home({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-[#020617] text-white selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      
      {/* 1. Inicio y Presentación */}
      <Hero dict={dict} lang={lang} />
      <Ticker dict={dict} />
      
      {/* 2. ADN Corporativo (Misión, Visión, Quiénes Somos) */}
      <About dict={dict} />

      {/* 3. Servicios Generales Logísticos */}
      <Services dict={dict} />

      {/* 4. División Especializada: Autopartes */}
      <AutoPartsHero dict={dict} lang={lang} />
      <AutoPartsGrid dict={dict} />

      {/* 5. Métricas, Confianza y Galería */}
      <Stats dict={dict}  />
      <PhotoGallery dict={dict} />
      <Testimonials dict={dict}/> 
      <ImpactStats dict={dict} />
      
      {/* 6. Cotización / Contacto */}
      <ContactForm dict={dict}/>
      
      {/* Aquí NO ponemos el Footer, porque ya está en el Layout */}

    </main>
  );
}