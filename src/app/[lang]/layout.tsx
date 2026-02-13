import { getDictionary } from '../../dictionaries/get-dictionary';
import { Montserrat } from "next/font/google";
import Header from '@/components/layout/header'; 
import Footer from '@/components/layout/footer';
import "../globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Ocean Sigma Export Corp",
  description: "Global Trade Partner",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: "es" | "en" }>;
};

export default async function RootLayout({ children, params }: Props) {
  
  // ✅ Eliminamos el 'await setTimeout...' para que cargue inmediato
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={`${montserrat.className} bg-[#020617] text-white`}>
        {/* Header Global */}
        <Header dict={dict} lang={lang} />
        
        {/* Contenido de la página */}
        {children}

        {/* Footer Global */}
        <Footer />
      </body>
    </html>
  );
}