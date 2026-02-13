import { getDictionary } from '../../dictionaries/get-dictionary';
import { Montserrat } from "next/font/google";
import Header from '@/components/layout/header'; 
import Footer from '@/components/layout/footer';




type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: "es" | "en" }>;
};

export default async function LangLayout({ children, params }: Props) {
  // Obtenemos los parámetros de idioma
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

  return (

    // AQUÍ usamos un fragmento o div, NO html/body
    <div className="flex flex-col min-h-screen">
      <Header dict={dict} lang={lang} />
      
      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
}