"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#FF8313] selection:text-white pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* --- ENCABEZADO DE LA PÁGINA --- */}
          <div className="mb-12 border-b border-gray-100 pb-10">
            <Link 
               href="/" 
               className="inline-flex items-center text-[#847E7E] hover:text-[#FF8313] mb-6 transition-colors font-medium text-sm group"
            >
              <span className="mr-2 group-hover:-translate-x-1 transition-transform">&larr;</span> Volver al Inicio
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Política de Privacidad
            </h1>
            <p className="text-[#847E7E]">
              Última actualización: <span className="text-gray-900 font-medium">04 de Diciembre, 2025</span>
            </p>
          </div>

          {/* --- CONTENIDO LEGAL --- */}
          <div className="space-y-12 text-[#847E7E] leading-relaxed text-lg">
            
            {/* Introducción */}
            <section>
              <p className="mb-6">
                En <strong>Globus Cargo</strong> ("nosotros", "nuestro"), valoramos su confianza y nos comprometemos a proteger su información personal. Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos sus datos cuando utiliza nuestros servicios de casillero virtual, envíos internacionales y sitio web.
              </p>
              <div className="bg-gray-50 border-l-4 border-[#FF8313] p-6 rounded-r-lg">
                <p className="text-gray-700 text-base font-medium">
                  Al registrarse o utilizar nuestros servicios, usted acepta las prácticas descritas en esta política y el tratamiento de sus datos conforme a la legislación colombiana (Ley 1581 de 2012 - Habeas Data).
                </p>
              </div>
            </section>

            {/* Sección 1 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información que Recopilamos</h2>
              <p className="mb-4">
                Para prestar nuestros servicios de logística y aduanas de manera eficiente, necesitamos recopilar cierta información personal, que incluye pero no se limita a:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#FF8313]">
                <li><strong>Identificación:</strong> Nombre completo, número de cédula o NIT (requerido por la DIAN para nacionalización).</li>
                <li><strong>Contacto:</strong> Dirección física de entrega en Colombia, correo electrónico y número de teléfono móvil.</li>
                <li><strong>Información de Transacción:</strong> Facturas comerciales de sus compras, detalles de tarjetas de crédito (procesados de forma encriptada) e historial de envíos.</li>
              </ul>
            </section>

            {/* Sección 2 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Uso de la Información</h2>
              <p className="mb-4">
                Utilizamos sus datos exclusivamente para los siguientes fines operativos y legales:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#FF8313]">
                <li>Procesar la recepción, transporte y entrega de sus paquetes.</li>
                <li>Realizar los trámites aduaneros y declaraciones de importación ante la DIAN.</li>
                <li>Notificarle sobre el estado de sus envíos (alertas de rastreo).</li>
                <li>Facturación de servicios y gestión de cobros.</li>
                <li>Cumplir con normativas de seguridad aérea y prevención de lavado de activos.</li>
              </ul>
            </section>

            {/* Sección 3 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Compartir Información con Terceros</h2>
              <p className="mb-4">
                Globus Cargo no vende sus datos personales. Sin embargo, para completar su envío, debemos compartir información estrictamente necesaria con:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 border border-gray-100 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Autoridades Aduaneras</h3>
                  <p className="text-sm">La DIAN requiere su número de identificación y facturas para legalizar la mercancía.</p>
                </div>
                <div className="p-4 border border-gray-100 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Aerolíneas y Transportistas</h3>
                  <p className="text-sm">Para la logística aérea y la entrega de última milla en su domicilio.</p>
                </div>
              </div>
            </section>

            {/* Sección 4 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Seguridad de Datos</h2>
              <p>
                Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos contra el acceso no autorizado, pérdida o alteración. Nuestro sitio web utiliza encriptación <strong>SSL (Secure Socket Layer)</strong> para garantizar que la transmisión de datos sea segura.
              </p>
            </section>

            {/* Sección 5 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Sus Derechos (Habeas Data)</h2>
              <p className="mb-4">
                Como titular de los datos, usted tiene derecho a:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#FF8313]">
                <li>Conocer, actualizar y rectificar sus datos personales.</li>
                <li>Solicitar prueba de la autorización otorgada.</li>
                <li>Revocar la autorización y/o solicitar la supresión del dato cuando no exista un deber legal o contractual de permanecer en la base de datos.</li>
              </ul>
            </section>

            {/* Sección 6: Contacto */}
            <section className="pt-8 border-t border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contacto</h2>
              <p className="mb-4">
                Si tiene preguntas sobre esta política o desea ejercer sus derechos, puede contactar a nuestro Oficial de Protección de Datos:
              </p>
              <div className="bg-gray-900 text-white p-6 rounded-2xl inline-block pr-12">
                <p className="font-bold text-lg mb-1">Globus Cargo Legal Team</p>
                <p className="text-gray-400 text-sm mb-4">Miami, FL & Bogotá, CO</p>
                <a href="mailto:privacidad@globuscargo.com" className="text-[#FF8313] hover:text-white transition-colors font-mono">
                  info@globuscargo.com
                </a>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}