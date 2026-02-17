import { getDictionary } from '../../dictionaries/get-dictionary';
import Header from '@/components/layout/header'; 
import Footer from '@/components/layout/footer';

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: "es" | "en" }>;
};

export default async function LangLayout({ children, params }: Props) {
  // 1. Obtenemos los parámetros de idioma (Next.js 15 requiere await)
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  
  // 2. Cargamos el diccionario de traducciones
  const dict = await getDictionary(lang);

  return (
    // Usamos un div flexible para que el footer siempre se vaya al fondo
    <div className="flex flex-col min-h-screen">
      
      {/* Header recibe el diccionario y el idioma actual */}
      <Header dict={dict} lang={lang} />
      
      {/* Main crece para ocupar el espacio vacío */}
      <main className="flex-grow">
        {children}
      </main>

      {/* ✅ AHORA SÍ: Pasamos 'lang' y 'dict' al Footer para que los links funcionen */}
      <Footer lang={lang} dict={dict} />
      
    </div>
  );
}