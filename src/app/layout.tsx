import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Ocean Sigma Export Corp",
  description: "Global Trade Partner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // IMPORTANTE: Aquí definimos html y body para TODA la app
    <html lang="es">
      <body className={`${montserrat.className} bg-[#020617] text-white`}>
        {children}
      </body>
    </html>
  );
}