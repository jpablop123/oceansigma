import { redirect } from "next/navigation";
import EnvioDinamicoClient from "@/app/envios/EnvioDinamicoClient"; // 👈 Asegúrate de que esta ruta esté bien

const VALID_ORIGINS = ["usa", "miami", "estados-unidos", "florida"];

const formatText = (str: string) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).replace("-", " ");
};

// 🟢 1. SEO DEL SERVIDOR (Metadata correcta)
export async function generateMetadata({ params }: { params: { origen: string; destino: string } }) {
  const origenRaw = params.origen?.toString().toLowerCase() || "usa";
  const destinoRaw = params.destino?.toString() || "colombia";

  const isValidOrigin = VALID_ORIGINS.includes(origenRaw);
  const origenSEO = isValidOrigin ? (origenRaw === "usa" ? "USA" : formatText(origenRaw)) : "USA";
  const destinoSEO = formatText(destinoRaw);

  return {
    title: `Envíos desde ${origenSEO} hasta ${destinoSEO} | Globus Cargo`,
    description: `Cotiza envíos desde ${origenSEO} hasta ${destinoSEO}. Casillero virtual gratuito y entrega puerta a puerta.`,
    alternates: {
      canonical: `https://globuscargo.us/envios/desde/usa/hasta/${destinoRaw}`,
    },
    openGraph: {
      title: `Envíos Express hasta ${destinoSEO}`,
      description: `La forma más segura de enviar desde ${origenSEO} hasta ${destinoSEO}.`,
    },
  };
}

// 🟢 2. COMPONENTE PRINCIPAL (Page)
export default function EnvioDinamicoPage({ params }: { params: { origen: string; destino: string } }) {
  const origenRaw = params.origen?.toString().toLowerCase() || "usa";
  const destinoRaw = params.destino?.toString() || "colombia";

  // 🛡️ REDIRECCIÓN SI EL ORIGEN ES INCORRECTO
  // Si entran a /envios/desde/china/hasta/cali -> Redirige a /envios/desde/usa/hasta/cali
  if (!VALID_ORIGINS.includes(origenRaw)) {
    redirect(`/envios/desde/usa/hasta/${destinoRaw}`);
  }

  const formattedOrigen = origenRaw === "usa" ? "USA" : formatText(origenRaw);
  const formattedDestino = formatText(destinoRaw);

  // Schema Markup para Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "International Shipping",
    "provider": {
      "@type": "Organization",
      "name": "Globus Cargo",
      "url": "https://globuscargo.us"
    },
    "areaServed": {
      "@type": "Country",
      "name": formattedDestino
    },
    "description": `Servicio de envíos internacionales desde ${formattedOrigen} hasta ${formattedDestino}.`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <EnvioDinamicoClient 
        origen={origenRaw}
        destino={destinoRaw}
        formattedOrigen={formattedOrigen}
        formattedDestino={formattedDestino}
      />
    </>
  );
}