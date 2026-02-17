import { getDictionary } from '../../dictionaries/get-dictionary';

import Hero from '@/components/layout/hero';
import Ticker from '@/components/layout/ticket';
import Services from '@/components/layout/services';
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
      
      <Hero dict={dict} lang={lang} />

      <Ticker dict={dict} />

      <Services dict={dict} />

      <Stats dict={dict}  />
      <Testimonials dict={dict}/> 
      <PhotoGallery dict={dict} />
    
      <ImpactStats dict={dict} />
       <ContactForm dict={dict}/>
      
      {/* Aquí NO ponemos el Footer, porque ya está en el Layout */}

    </main>
  );
}