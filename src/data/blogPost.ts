import { StaticImageData } from "next/image";

// --- IMPORTACIÓN DE LA CONFIGURACIÓN (CLAVE PARA EL CAMBIO DINÁMICO) ---
import { TAX_LIMIT_TEXT } from "@/utils/config"; 

// --- IMPORTACIÓN DE IMÁGENES ---
import blog1 from "@/assets/img/blog/Gemini_Generated_Image_cu2nwscu2nwscu2n.png";
import blog2 from "@/assets/img/blog/blog1.webp";
import blog3 from "@/assets/img/blog/blog2.webp";
import blog4 from "@/assets/img/blog/blog3.webp";
import blog5 from "@/assets/img/blog/blog4.webp";
import blog6 from "@/assets/img/blog/blog5.webp";
import blog7 from "@/assets/img/blog/blog6.webp";
import blog9 from "@/assets/img/blog/blog7.webp";
import blog10 from "@/assets/img/blog/blogfit8.webp";
import blog11 from "@/assets/img/blog/paquete.webp";
import compras from "@/assets/img/blog/compras.webp";
import emprender from "@/assets/img/blog/emprender.webp";
import electro from "@/assets/img/blog/electro.webp";
import tracking from "@/assets/img/blog/tracking.webp";
import customs from "@/assets/img/blog/customs.webp";
// Agrega esta línea junto a tus otras importaciones de imágenes
import emergenciaImg from "@/assets/img/emergencia globus.webp";

// 🟢 TIPO DEFINIDO CON CAMPOS SEO
export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  seoTitle: string;
  excerpt: string;
  seoDescription: string;
  date: string;
  category: string;
  image: StaticImageData;
  imageAlt: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  // ----------------------------------------------------------------
  // ARTÍCULO 1 (Sin cambios de $200)
  // ----------------------------------------------------------------
  {
    id: 1,
    slug: "como-funciona-casillero-virtual-miami-colombia",
    title: "¿Cómo funciona un casillero en Miami y por qué lo necesitas?",
    seoTitle: "Casillero Virtual en Miami para Colombia | Guía 2025",
    seoDescription: "Aprende cómo traer tus compras de Amazon y eBay a Colombia. Guía paso a paso para usar tu casillero virtual, ahorrar impuestos y recibir en casa.",
    excerpt: "Deja de limitarte por los envíos internacionales. Descubre paso a paso cómo recibir tus compras de Amazon, eBay y Apple en Colombia sin complicaciones.",
    date: "04 Dic 2025",
    category: "Guía Principiantes",
    image: blog1,
    imageAlt: "Persona recibiendo paquete de compras online en su casa",
    content: `
        <p class="lead">Comprar en Estados Unidos y recibir en la puerta de tu casa en Colombia ya no es un lujo, es una necesidad para ahorrar dinero y acceder a productos exclusivos. Pero, ¿cómo lograrlo si la tienda no envía internacionalmente o cobra demasiado?</p>
        
        <h2>¿Qué es exactamente un Casillero Virtual?</h2>
        <p>Imagina que tienes un amigo viviendo en Miami que recibe tus paquetes y te los lleva a Colombia en su maleta. Un casillero funciona igual, pero de manera profesional y legal. <strong>Globus Cargo</strong> te asigna una dirección física real en nuestras bodegas de Miami.</p>
  
        <h2>El Proceso paso a paso</h2>
        <ol>
          <li><strong>Regístrate Gratis:</strong> Al crear tu cuenta con nosotros, obtienes inmediatamente un código de casillero (ej: G-1234) y nuestra dirección en Miami.</li>
          <li><strong>Compra en tus tiendas favoritas:</strong> Entra a Amazon, Sephora, eBay o Apple. Al momento del "Shipping Address", coloca la dirección que te dimos junto con tu código de casillero.</li>
          <li><strong>Recepción y Alerta:</strong> Nosotros recibimos tu paquete. Lo pesamos, inspeccionamos que no venga roto y te notificamos por correo y WhatsApp con la foto de tu caja.</li>
          <li><strong>Despacho a Colombia:</strong> Tú decides cuándo enviarlo. Procesamos la aduana, pagamos los impuestos (si aplican) y te lo entregamos en la puerta de tu casa.</li>
        </ol>
  
        <h2>Beneficios Clave</h2>
        <ul>
          <li><strong>Ahorro Masivo:</strong> Accedes a precios de USA y ofertas como Black Friday que no existen en Colombia.</li>
          <li><strong>Seguridad:</strong> Tus paquetes están asegurados desde que llegan a nuestra bodega hasta que tú firmas el recibido.</li>
          <li><strong>Consolidación:</strong> Puedes comprar en 5 tiendas diferentes, esperar a que lleguen todas, y te las enviamos en una sola caja para que pagues un solo flete.</li>
        </ul>
  
        <p>No dejes que las fronteras limiten tus compras. Empieza hoy mismo.</p>
      `,
  },

  // ----------------------------------------------------------------
  // ARTÍCULO 2 (DINÁMICO - ESTE CAMBIA CON EL CONFIG)
  // ----------------------------------------------------------------
  {
    id: 2,
    slug: "regla-200-usd-impuestos-aduaneros-colombia",
    // Título dinámico
    title: `La regla de los ${TAX_LIMIT_TEXT}: Compra sin pagar IVA`,
    seoTitle: `Impuestos Aduaneros en Colombia: La Regla de los ${TAX_LIMIT_TEXT}`,
    seoDescription: `¿Debo pagar impuestos por mis compras? Conoce la modalidad 4x4 y cómo importar a Colombia sin pagar IVA si tu compra es menor a ${TAX_LIMIT_TEXT}.`,
    excerpt: "Aprovecha el decreto 4x4. Te explicamos qué artículos están legalmente exentos de IVA y aranceles para que maximices tu cupo de importación mensual.",
    date: "02 Dic 2025",
    category: "Ahorro e Impuestos",
    image: blog2,
    imageAlt: "Calculadora y dinero mostrando ahorro en impuestos de aduana",
    content: `
        <p>Esta es la pregunta del millón: <em>"¿Cuánto tengo que pagar de impuestos?"</em>. La buena noticia es que, gracias a los tratados de libre comercio y la modalidad de tráfico postal, puedes importar muchas cosas pagando <strong>$0 pesos en impuestos</strong>.</p>
  
        <h2>¿Qué es la modalidad 4x4?</h2>
        <p>Para que tu paquete esté exento de IVA (19%) y Arancel (10%), debe cumplir con estos requisitos simultáneamente:</p>
        <ul>
          <li><strong>Valor declarado:</strong> La mercancía debe costar menos de <strong>${TAX_LIMIT_TEXT}</strong>.</li>
          <li><strong>Peso:</strong> El paquete no puede pesar más de 50 Kg (110 libras).</li>
          <li><strong>Cantidad:</strong> No más de 6 unidades de la misma referencia.</li>
          <li><strong>Destino:</strong> Debe ser para uso personal, no comercial masivo.</li>
        </ul>
  
        <h2>¿Qué pasa si me paso de ${TAX_LIMIT_TEXT}?</h2>
        <p>Si tu compra supera el límite de <strong>${TAX_LIMIT_TEXT}</strong>, automáticamente cambia de categoría. En ese caso, deberás pagar:</p>
        <ul>
          <li>Arancel del 10%</li>
          <li>IVA del 19%</li>
        </ul>
        <p>Esto suma casi un 30% adicional al costo de tu producto. Por eso, la estrategia inteligente es dividir tus compras. Si tienes varios productos, haz envíos separados que no superen los ${TAX_LIMIT_TEXT} cada uno. ¡Así llegarán sin impuestos!</p>
  
        <p><strong>Nota importante:</strong> En Globus Cargo te asesoramos antes de enviar para asegurar que tu declaración sea correcta y aproveches este beneficio legal.</p>
      `,
  },

  // ----------------------------------------------------------------
  // ARTÍCULO 3 (DINÁMICO - CELULARES)
  // ----------------------------------------------------------------
  {
    id: 3,
    slug: "guia-importar-celulares-tecnologia-colombia",
    title: "Guía para importar tecnología y celulares sin decomisos",
    seoTitle: "Guía para Importar Celulares y Laptops a Colombia 2025",
    seoDescription: "Normativa DIAN para importar celulares: Homologación IMEI, límites de unidades y cómo evitar decomisos al traer tecnología de USA.",
    excerpt: "La DIAN tiene reglas estrictas sobre la importación de móviles y Laptops. Conoce la homologación de IMEI y cuántos dispositivos puedes traer por envío.",
    date: "28 Nov 2025",
    category: "Tecnología y Normativa",
    image: blog3,
    imageAlt: "Smartphones modernos y laptops listos para envío",
    content: `
        <p>Traer el último iPhone o una Laptop Gamer desde USA puede ahorrarte millones de pesos comparado con los precios locales. Sin embargo, la tecnología es la categoría más vigilada por la Aduana colombiana.</p>
  
        <h2>La regla de ORO de los Celulares</h2>
        <p>El Decreto 2142 establece una norma inquebrantable para el tráfico postal:</p>
        <blockquote>"Solo se permite el ingreso de UN (1) equipo móvil celular por envío."</blockquote>
        <p>Esto significa que no puedes enviar dos teléfonos en la misma caja, ni siquiera si uno es usado y el otro nuevo. Si la DIAN detecta dos celulares en un paquete, la aprehensión es inmediata.</p>
  
        <h2>Paso a paso para importar tu celular seguro:</h2>
        <ol>
          <li><strong>Verifica el precio:</strong> Si cuesta menos de <strong>${TAX_LIMIT_TEXT}</strong>, no paga IVA. Si cuesta más (como la mayoría de smartphones gama alta), pagarás el 19% de IVA (los celulares están exentos de arancel, solo pagan IVA).</li>
          <li><strong>Desbloqueado de fábrica:</strong> Asegúrate de comprar equipos "Unlocked".</li>
          <li><strong>Homologación de IMEI:</strong> Una vez recibas el equipo en Colombia, debes registrar el IMEI ante tu operador móvil local usando la factura de compra o el comprobante de importación que te entrega Globus Cargo.</li>
        </ol>
  
        <h2>¿Y las Laptops y Tablets?</h2>
        <p>Tienen reglas más flexibles. Las computadoras (portátiles o de escritorio) cuyo valor sea inferior a 50 UVT (aprox $2.3 millones de pesos) están exentas de IVA si las compras en Colombia, pero al importarlas bajo modalidad postal, rige la norma de los <strong>${TAX_LIMIT_TEXT}</strong> para la exención total en envíos urgentes.</p>
      `,
  },

  // ----------------------------------------------------------------
  // ARTÍCULO 4 (Sin cambios específicos de límite, solo ejemplos)
  // ----------------------------------------------------------------
  {
    id: 4,
    slug: "consolidacion-paquetes-ahorro-envios",
    title: "¿Shein o Amazon? Cómo consolidar paquetes y ahorrar hasta un 50%",
    seoTitle: "Consolidación de Casillero: Ahorra 50% en Envíos de USA",
    seoDescription: "No envíes caja por caja. Aprende a consolidar tus compras de Shein, Amazon y Carter's en un solo envío económico a Colombia.",
    excerpt: "No pagues un envío por cada blusa. Aprende a usar nuestro servicio de reempaque para juntar tus compras de múltiples tiendas en una sola caja segura.",
    date: "25 Nov 2025",
    category: "Tips de Compras",
    image: blog4,
    imageAlt: "Cajas de Amazon y Shein siendo consolidadas en un solo paquete",
    content: `
        <p class="lead">Uno de los errores más costosos de los importadores novatos es el "envío hormiga": comprar una carcasa en Amazon, una blusa en Shein y unas vitaminas en Walmart, y enviarlos a Colombia por separado. <strong>Esto es un suicidio financiero.</strong></p>
        
        <h2>El secreto de la Consolidación de Carga</h2>
        <p>La tarifa mínima de envío internacional suele cobrar la primera libra más costosa. Si envías 3 paquetes de 1 libra cada uno, pagarás esa "tarifa mínima" tres veces. Aquí es donde entra la magia de la <strong>consolidación de casillero</strong>.</p>
  
        <h3>Caso de Estudio: El Ahorro Real</h3>
        <p>Imagina que María quiere traer lo siguiente:</p>
        <ul>
          <li><strong>Amazon:</strong> Un Echo Dot (1 libra).</li>
          <li><strong>Shein:</strong> 5 prendas de ropa (2 libras).</li>
          <li><strong>Sephora:</strong> Maquillaje (0.5 libras).</li>
        </ul>
        
        <p><strong>Sin consolidar (3 envíos separados):</strong> Pagaría aprox $35 USD solo en fletes mínimos + 3 trámites de aduana.</p>
        <p><strong>Con Globus Cargo (1 envío consolidado):</strong> Esperamos a que lleguen los 3 paquetes a tu casillero en Miami. Los sacamos de sus cajas originales (que suelen ser puro aire), los re-empacamos profesionalmente en una sola caja compacta y te cobramos un solo envío por 3.5 libras. <strong>Ahorro estimado: $18 USD.</strong></p>
  
        <h2>¿Cómo funciona el Reempaque?</h2>
        <p>No solo juntamos cajas. Hacemos ingeniería de empaque:</p>
        <ol>
          <li>Eliminamos cajas de zapatos innecesarias (si lo solicitas) para reducir volumen.</li>
          <li>Protegemos líquidos y frágiles con burbuja extra.</li>
          <li>Verificamos que todo coincida con tus facturas.</li>
        </ol>
  
        <p>La próxima vez que compres, no tengas miedo de pedir en múltiples tiendas. Nosotros nos encargamos de armar el rompecabezas en Miami.</p>
      `,
  },

  // ----------------------------------------------------------------
  // ARTÍCULO 5 (DINÁMICO - ZAPATILLAS)
  // ----------------------------------------------------------------
  {
    id: 5,
    slug: "importar-zapatillas-originales-vs-replicas",
    title: "Zapatillas de marca: ¿Originales o Réplicas? Cuidado con la Aduana",
    seoTitle: "Importar Zapatillas a Colombia: Riesgos de Réplicas y Aduana",
    seoDescription: "¿Es seguro traer réplicas AAA? Evita problemas con la DIAN al importar zapatillas Nike o Adidas. Consejos para declarar correctamente.",
    excerpt: "Traer Nike o Adidas exclusivos es rentable, pero las regulaciones de propiedad intelectual son severas. Evita multas y aprende a declarar correctamente.",
    date: "20 Nov 2025",
    category: "Moda y Lifestyle",
    image: blog5,
    imageAlt: "Colección de zapatillas de marca Nike y Adidas",
    content: `
        <p>El mercado de las "Sneakers" ha explotado. Traer unos <strong>Jordan Retro</strong> o unos <strong>Yeezy</strong> desde USA puede ser un gran negocio o un capricho personal increíble. Sin embargo, hay una línea delgada que puede hacer que tu inversión termine incinerada en una bodega de la DIAN.</p>
  
        <h2>El problema de la Propiedad Intelectual</h2>
        <p>La Aduana de Colombia protege las marcas registradas. Si intentas ingresar zapatillas que son <strong>"Réplicas AAA"</strong>, "G5" o cualquier eufemismo para "falsificación", corres un riesgo altísimo.</p>
        <blockquote>"Si el funcionario de aduanas sospecha que el producto no es original y no tienes una factura de un distribuidor autorizado, tiene la potestad de aprehender la mercancía bajo sospecha de fraude marcarío."</blockquote>
  
        <h2>¿Cómo importar zapatillas de forma segura?</h2>
        <p>Para evitar problemas, sigue estas reglas de oro:</p>
        
        <h3>1. Compra en tiendas verificadas</h3>
        <p>Evita páginas chinas dudosas o vendedores de Instagram sin reputación. Las plataformas más seguras y aceptadas por aduana son:</p>
        <ul>
          <li><strong>StockX y GOAT:</strong> Son intermediarios que verifican la autenticidad. Su factura es "oro" ante la aduana.</li>
          <li><strong>Tiendas oficiales:</strong> Nike.com, FootLocker, Eastbay, Champs Sports.</li>
          <li><strong>eBay (Authenticity Guarantee):</strong> Solo si tienen el check azul de verificación.</li>
        </ul>
  
        <h3>2. Declara el valor real</h3>
        <p>Un error común es declarar unas zapatillas de $300 USD por $50 USD para no pagar impuestos. La DIAN tiene bases de datos de precios. Si ven unos Jordan 1 Travis Scott declarados en $20 dólares, no solo te ajustarán el valor, sino que te sancionarán. Es mejor pagar el impuesto (30% si supera los <strong>${TAX_LIMIT_TEXT}</strong>) que perder la mercancía.</p>
  
        <h3>3. Máximo 6 pares</h3>
        <p>Recuerda la norma: no traigas más de 6 pares de la misma referencia en un solo envío, o se considerará importación comercial y requerirá otros permisos.</p>
      `,
  },

  // ----------------------------------------------------------------
  // ARTÍCULO 6
  // ----------------------------------------------------------------
  {
    id: 6,
    slug: "articulos-prohibidos-envios-aereos-colombia",
    title: "¡Alerta! 5 cosas que está terminantemente prohibido traer a Colombia",
    seoTitle: "Artículos Prohibidos en Envíos Aéreos a Colombia (Lista 2025)",
    seoDescription: "Evita decomisos. Lista actualizada de mercancía peligrosa: aerosoles, armas de juguete, semillas y perfumes en envíos courier a Colombia.",
    excerpt: "Evita que tu paquete sea destruido. Perfumes, aerosoles, juguetes bélicos y semillas tienen restricciones aéreas severas que debes conocer antes de comprar.",
    date: "18 Nov 2025",
    category: "Seguridad y Restricciones",
    image: blog6,
    imageAlt: "Señal de alerta sobre mercancía peligrosa en aeropuerto",
    content: `
        <p>Nada duele más que recibir un correo diciendo: <em>"Tu paquete contiene mercancía prohibida y no puede viajar"</em>. No es capricho nuestro; son regulaciones internacionales de la IATA (Asociación de Transporte Aéreo Internacional) y normas aduaneras colombianas.</p>
  
        <h2>La lista negra del transporte aéreo</h2>
        <p>Estos artículos son considerados <strong>Mercancía Peligrosa (HazMat)</strong> y no pueden subir a un avión comercial bajo ninguna circunstancia en paquetería estándar:</p>
  
        <h3>1. Aerosoles y Gases Comprimidos</h3>
        <p>Desodorantes en spray, lacas para el cabello, crema batida en lata o bloqueadores solares en aerosol. Al estar bajo presión, pueden explotar con los cambios de altitud.</p>
  
        <h3>2. Perfumes (Con asterisco *)</h3>
        <p>Los perfumes contienen alcohol, lo que los hace inflamables. <strong>Ojo:</strong> En Globus Cargo podemos manejarlos, pero requieren un proceso de reempaque especial y vuelan en aviones de carga específicos, lo que puede tener un costo adicional o tiempos distintos. ¡Consúltanos antes de comprar!</p>
  
        <h3>3. Armas (Incluyendo Juguetes Bélicos)</h3>
        <p>Esto es muy serio. No puedes traer armas de fuego, ni partes de ellas (miras, culatas). Pero cuidado: las armas de <strong>Paintball, Airsoft o balines</strong> también tienen restricciones severas y a menudo requieren permisos de Indumil. Incluso las pistolas de juguete que parecen reales pueden ser decomisadas.</p>
  
        <h3>4. Semillas y Productos Biológicos</h3>
        <p>El ICA prohíbe el ingreso de semillas, plantas vivas, madera sin tratar o alimentos perecederos (carnes, frutas) para proteger la agricultura colombiana de plagas. Si compras semillas en Amazon, serán incineradas en el aeropuerto.</p>
  
        <h3>5. Baterías de Litio Sueltas</h3>
        <p>Si la batería viene <em>dentro</em> del equipo (como en un celular o laptop), está bien. Pero las baterías sueltas (Power banks de alta capacidad o repuestos de baterías) tienen restricciones de cantidad y potencia.</p>
      `,
  },

  // ----------------------------------------------------------------
  // ARTÍCULO 7
  // ----------------------------------------------------------------
  {
    id: 7,
    slug: "importar-repuestos-autos-usa-colombia",
    title: "Importar repuestos de autos: Lo que nadie te dice sobre el peso volumétrico",
    seoTitle: "Cómo Importar Repuestos de Autos de USA a Colombia",
    seoDescription: "Guía para traer autopartes baratas: Cuidado con el peso volumétrico. Compra repuestos en RockAuto o eBay y recíbelos en Colombia.",
    excerpt: "Desde bujías hasta computadoras de motor. Traer autopartes de USA es 40% más barato, pero requiere saber clasificar el peso y dimensiones volumétricas.",
    date: "15 Nov 2025",
    category: "Nichos Especiales",
    image: blog7,
    imageAlt: "Repuestos automotrices y herramientas mecánicas",
    content: `
        <p>Mantener un carro en Colombia es costoso. Los concesionarios a veces cobran el triple por un repuesto que en Estados Unidos es genérico y barato. Sitios como <strong>RockAuto, eBay Motors o Amazon Automotive</strong> son el paraíso de los mecánicos y dueños de vehículos.</p>
        
        <h2>¿Vale la pena traer repuestos?</h2>
        <p>Absolutamente. Especialmente para marcas americanas (Ford, Chevrolet, Jeep) o de alta gama (BMW, Mercedes, Audi). Un sensor que aquí vale $800.000 COP, allá puede costar $40 USD.</p>
  
        <h2>El enemigo invisible: El Peso Volumétrico</h2>
        <p>En logística, los aviones no se llenan solo por peso, sino por espacio. Una defensa (bomper) de plástico puede pesar solo 5 kilos, pero ocupa el espacio de 50 kilos de mercancía.</p>
        <blockquote>"Si el volumen de tu caja es mayor a su peso real, la aerolínea cobrará basado en el volumen."</blockquote>
        
        <h3>Estrategia para importar autopartes:</h3>
        <ul>
          <li><strong>Lo ideal (Aéreo):</strong> Repuestos pequeños y densos. Computadoras de motor (ECU), sensores, bujías, inyectores, módulos electrónicos, filtros pequeños, empaques. Estos pagan flete por peso real y llegan rápido.</li>
          <li><strong>Lo difícil (Requiere análisis):</strong> Farolas (ocupan mucho espacio), partes de carrocería, radiadores. Para esto, a veces es mejor cotizar nuestro servicio marítimo si no tienes afán.</li>
          <li><strong>Usados vs Nuevos:</strong> La norma colombiana restringe la importación de ciertos repuestos usados. Siempre intenta comprar "New" o "Remanufactured" (repotenciado con garantía) para evitar trabas aduaneras.</li>
        </ul>
  
        <p>Antes de comprar ese exhosto gigante, escríbenos al WhatsApp con el link. Te haremos el cálculo de volumen para que sepas exactamente cuánto costará puesto en Bogotá.</p>
      `,
  },

  // ----------------------------------------------------------------
  // ARTÍCULO 8
  // ----------------------------------------------------------------
  {
    id: 8,
    slug: "errores-declaracion-valor-aduanas",
    title: "Errores comunes al declarar el valor de tu paquete",
    seoTitle: "Errores al Declarar Valor en Aduana: Evita Multas DIAN",
    seoDescription: "¿Subvaluar o declarar real? Conoce las consecuencias de mentir en la factura comercial y cómo la pre-alerta protege tu mercancía.",
    excerpt: "¿Subvaluar o declarar real? Te contamos los riesgos de mentir en la factura comercial y cómo Globus Cargo te protege con pre-alertas transparentes.",
    date: "10 Nov 2025",
    category: "Seguridad Legal",
    image: customs,
    imageAlt: "Oficial de aduanas revisando documentación de importación",
    content: `
        <p class="lead">Existe un mito urbano muy peligroso en el mundo de las importaciones: <em>"Pídele al vendedor que ponga que es un regalo (Gift) o que vale $10 dólares"</em>. Hacer esto en 2025 no solo es inútil, sino que puede costarte tu mercancía y una multa.</p>
  
        <h2>El riesgo de la "Subvaluación"</h2>
        <p>La DIAN (Aduana Colombiana) modernizó sus sistemas. Ahora cruzan referencias de precios en tiempo real. Si traes una Laptop Gamer de $1.000 USD y declaras que costó $150 USD para no pagar impuestos, el sistema levantará una alerta automática.</p>
        
        <h3>Consecuencias de mentir en la declaración:</h3>
        <ul>
          <li><strong>Reajuste de Valor:</strong> El inspector no creerá tu factura falsa. Buscará el precio en Amazon y te cobrará los impuestos basándose en el precio más alto que encuentre.</li>
          <li><strong>Sanción (Multa):</strong> Te cobrarán el 100% de los impuestos dejados de pagar como castigo.</li>
          <li><strong>Aprehensión:</strong> En casos graves o reincidentes, decomisan la mercancía definitivamente.</li>
        </ul>
  
        <h2>La Solución: La Pre-Alerta Honesta</h2>
        <p>En Globus Cargo defendemos tus intereses haciéndolo bien desde el principio. Cuando haces la <strong>Pre-Alerta</strong> en nuestro sistema:</p>
        <ol>
          <li>Subes la factura real de tu compra (PDF o Screenshot del checkout).</li>
          <li>Nosotros declaramos ese valor exacto ante la aduana.</li>
          <li>Si la DIAN pregunta, tenemos el soporte documental perfecto para defender tu paquete y liberarlo rápidamente.</li>
        </ol>
        <p>Dorme tranquilo sabiendo que tu carga viaja legal.</p>
      `,
  },

  // ----------------------------------------------------------------
  // ARTÍCULO 9
  // ----------------------------------------------------------------
  {
    id: 9,
    slug: "diferencia-envio-aereo-vs-maritimo",
    title: "Envíos urgentes: Diferencias entre aéreo y marítimo",
    seoTitle: "Envío Aéreo vs Marítimo: ¿Cuál elegir para traer de USA?",
    seoDescription: "Comparativa de costos y tiempos. ¿Cuándo usar casillero aéreo y cuándo carga marítima para importar a Colombia desde Miami?",
    excerpt: "¿Necesitas tu carga en 4 días o puedes esperar 3 semanas? Comparativa de costos y tiempos para que elijas la logística que se adapta a tu bolsillo.",
    date: "05 Nov 2025",
    category: "Logística 101",
    image: blog9,
    imageAlt: "Contenedores marítimos y avión de carga logística",
    content: `
        <p>Al momento de traer mercancía de USA a Colombia, existen dos autopistas principales: el cielo y el mar. Elegir la incorrecta puede hacerte gastar el doble de dinero o esperar el triple de tiempo.</p>
  
        <h2>Casillero Aéreo (Courier Express)</h2>
        <p>Es el servicio estándar que usas para tus compras personales de Amazon, ropa o tecnología.</p>
        <ul>
          <li><strong>Velocidad:</strong> Muy rápida (3 a 8 días hábiles aprox).</li>
          <li><strong>Costo:</strong> Se cobra por libra (peso real) o volumen si es muy grande.</li>
          <li><strong>Ideal para:</strong> Celulares, ropa, zapatos, cosméticos, laptops, repuestos pequeños. Todo lo que pese menos de 5-10 kilos y necesites pronto.</li>
        </ul>
  
        <h2>Carga Marítima</h2>
        <p>Pensado para cargas pesadas, mudanzas o mercancía comercial de gran volumen.</p>
        <ul>
          <li><strong>Velocidad:</strong> Lenta (3 a 5 semanas dependiendo del puerto y consolidación).</li>
          <li><strong>Costo:</strong> Mucho más económico por kilo, pero suelen tener tarifas mínimas de despacho (ej: mínimo 1 metro cúbico o cajas de grandes dimensiones).</li>
          <li><strong>Ideal para:</strong> Muebles, maquinaria industrial, 50 llantas de carro, menaje de casa, o stock comercial muy pesado donde el tiempo no es prioridad pero el costo sí.</li>
        </ul>
  
        <h2>La Regla de Decisión</h2>
        <p>Hazte esta pregunta: <em>"¿Pesa más de 30-40 kilos y no tengo afán?"</em>. Si la respuesta es SÍ, cotiza marítimo. Para todo lo demás (el 90% de las compras online), el aéreo es imbatible en eficiencia.</p>
      `,
  },

  // ----------------------------------------------------------------
  // ARTÍCULO 10
  // ----------------------------------------------------------------
  {
    id: 10,
    slug: "como-iniciar-negocio-importaciones",
    title: "Emprender importando: Cómo iniciar tu tienda online",
    seoTitle: "Emprender Importando: Inicia tu Tienda Online con Casillero",
    seoDescription: "Estrategias B2B para importar al por mayor de USA y revender en Colombia. Calcula márgenes de ganancia y encuentra nichos rentables.",
    excerpt: "Convierte las importaciones en un negocio rentable. Estrategias para comprar al por mayor en USA y revender en Colombia con margen de ganancia.",
    date: "01 Nov 2025",
    category: "Negocios B2B",
    image: emprender,
    imageAlt: "Emprendedor gestionando pedidos de su tienda online",
    content: `
        <p class="lead">¿Sabías que muchos de los productos que ves en Instagram o MercadoLibre son traídos usando casilleros como el nuestro? Convertirte en importador no requiere millones de pesos, solo estrategia.</p>
  
        <h2>Identifica un Nicho Rentable</h2>
        <p>No intentes competir vendiendo lo mismo que Éxito o Falabella. El dinero está en los nichos específicos que las grandes tiendas ignoran:</p>
        <ul>
          <li><strong>Maquillaje de marcas "Indie":</strong> Marcas virales en TikTok que no se consiguen en Colombia.</li>
          <li><strong>Vitaminas y Suplementos específicos:</strong> Marcas premium de USA.</li>
          <li><strong>Juguetería de colección:</strong> Funko Pops exclusivos, Legos de edición limitada.</li>
          <li><strong>Repuestos especializados:</strong> Para cámaras, drones o bicicletas de alta gama.</li>
        </ul>
  
        <h2>Las Matemáticas del Importador</h2>
        <p>Para que sea negocio, debes calcular tu precio de venta así:</p>
        <p style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; font-family: monospace;">
          Costo Producto (USA) <br>
          + Envío a Miami (Shipping)<br>
          + Flete a Colombia (Globus Cargo)<br>
          + Impuestos (Si aplica)<br>
          + Tu Ganancia (30-50%)<br>
          = <strong>Precio Final de Venta</strong>
        </p>
  
        <h2>Globus Cargo como tu Socio Logístico</h2>
        <p>No somos solo un casillero; somos el departamento de logística de tu emprendimiento. Ofrecemos tarifas especiales para clientes corporativos que mueven volumen constante. Si planeas traer mercancía para revender, contáctanos para hablar de tarifas mayoristas.</p>
        <p><strong>Empieza pequeño, piensa en grande.</strong></p>
      `,
  },

  // ----------------------------------------------------------------
  // ARTÍCULO 11
  // ----------------------------------------------------------------
  {
    id: 11,
    slug: "rastreo-paquetes-tracking-internacional",
    title: "Rastreo 24/7: Cómo seguir tu paquete desde Miami hasta tu casa",
    seoTitle: "Rastreo de Paquetes: Sigue tu compra de Miami a Colombia",
    seoDescription: "Entiende los estados de tu guía de rastreo. Qué significa 'Delivered to Agent' y cómo monitorear el tránsito aduanero paso a paso.",
    excerpt: "La incertidumbre es el peor enemigo de las compras online. Aprende a interpretar los estados de tu guía (tracking) y por qué a veces Amazon marca 'entregado' pero no lo ves.",
    date: "28 Oct 2025",
    category: "Logística y Tecnología",
    image: tracking,
    imageAlt: "Mapa digital mostrando rastreo de paquete internacional",
    content: `
        <p class="lead">Haces clic en 'Comprar', esperas unos días y luego la ansiedad ataca: <em>¿Dónde está mi paquete?</em>. Entender la logística detrás del rastreo te dará paz mental y te ayudará a detectar problemas a tiempo.</p>
  
        <h2>El ciclo de vida de tu tracking</h2>
        <p>Existen dos etapas críticas en el rastreo de tu carga:</p>
        
        <h3>1. El 'Last Mile' en USA (UPS, USPS, FedEx, Amazon)</h3>
        <p>Es el viaje desde la tienda hasta nuestra bodega en Miami. Aquí el error más común es el estado <strong>"Delivered to Agent"</strong> o "Left at Dock".</p>
        <ul>
          <li><strong>¿Qué significa?</strong> Que el transportista dejó el paquete en nuestra zona de recepción masiva.</li>
          <li><strong>El retraso normal:</strong> A veces Amazon marca "Entregado" a las 2:00 PM, pero en nuestra bodega se procesan cientos de paquetes. Puede tardar hasta 24 horas en aparecer ingresado en tu cuenta de Globus Cargo. ¡Paciencia!</li>
        </ul>
  
        <h3>2. La Guía Internacional (Globus Cargo)</h3>
        <p>Una vez despachamos tu caja a Colombia, generamos una guía nueva. Aquí verás estados como:</p>
        <ul>
          <li><strong>En Tránsito:</strong> Volando hacia Bogotá.</li>
          <li><strong>Proceso de Aduana (DIAN):</strong> El momento de la verdad. Suele durar 1-2 días hábiles si todo está bien declarado.</li>
          <li><strong>En Reparto Local:</strong> La transportadora colombiana (Coordinadora, Deprisa, etc.) va camino a tu casa.</li>
        </ul>
  
        <p><strong>Consejo Pro:</strong> Siempre pre-alerta tus compras. Un paquete sin pre-alertar es un "paquete huérfano" que tarda el triple en ser identificado en bodega.</p>
      `,
  },

  // ----------------------------------------------------------------
  // ARTÍCULO 12
  // ----------------------------------------------------------------
  {
    id: 12,
    slug: "importar-suplementos-vitaminas-invima",
    title: "Guía fit: Cómo importar proteínas y vitaminas sin problemas con el INVIMA",
    seoTitle: "Importar Suplementos y Vitaminas a Colombia: Reglas INVIMA",
    seoDescription: "¿Cuántas proteínas puedo traer? Normativa postal para importar vitaminas y suplementos fit de USA sin problemas sanitarios.",
    excerpt: "¿Quieres traer tus suplementos de USA? Descubre qué permite la regulación sanitaria en Colombia y cuántos frascos puedes traer antes de que se considere comercio ilegal.",
    date: "22 Oct 2025",
    category: "Salud y Bienestar",
    image: blog10,
    imageAlt: "Suplementos deportivos, proteínas y vitaminas",
    content: `
        <p class="lead">El mercado fitness en USA es gigante y barato. Marcas como <em>Optimum Nutrition</em>, <em>GNC</em> o <em>Bloom</em> cuestan la mitad que en Colombia. Pero cuidado: son productos de ingestión humana y tienen vigilancia especial.</p>
  
        <h2>La Regla de los 6 Frascos</h2>
        <p>El INVIMA y la DIAN tienen un acuerdo tácito para envíos postales:</p>
        <blockquote>"Se permite el ingreso de suplementos para consumo personal, siempre que no superen las 6 unidades por envío y no tengan fines comerciales."</blockquote>
        
        <h3>¿Qué está permitido?</h3>
        <ul>
          <li>Proteínas en polvo (Whey Protein).</li>
          <li>Multivitamínicos (Gomitas, cápsulas).</li>
          <li>Creatina y Pre-entrenos convencionales.</li>
        </ul>
  
        <h3>¿Qué está PROHIBIDO?</h3>
        <p>Mucho cuidado con suplementos que contengan ingredientes activos no regulados:</p>
        <ol>
          <li><strong>CBD o derivados del Cannabis:</strong> Estrictamente prohibidos en paquetería postal.</li>
          <li><strong>Quemadores de grasa fuertes:</strong> Si contienen sustancias como Yohimbina en dosis altas, pueden ser retenidos.</li>
          <li><strong>Medicamentos con receta:</strong> No puedes traer fármacos que requieran prescripción médica sin adjuntar la fórmula apostillada (un proceso costoso y largo).</li>
        </ol>
  
        <p>Si eres dueño de un gimnasio y quieres traer 50 tarros de proteína, contáctanos. Eso requiere un registro sanitario INVIMA y es una importación de carga comercial, no de casillero.</p>
      `,
  },

  // ----------------------------------------------------------------
  // ARTÍCULO 13
  // ----------------------------------------------------------------
  {
    id: 13,
    slug: "seguro-carga-envios-internacionales",
    title: "¿Tu paquete se perdió o llegó roto? Todo sobre el Seguro de Carga",
    seoTitle: "Seguro de Carga Internacional: Protege tus Compras",
    seoDescription: "¿Qué pasa si mi paquete se pierde o llega roto? Diferencia entre valor declarado y asegurado en envíos internacionales. Protege tu inversión.",
    excerpt: "Nadie quiere pensar en desastres, pero ocurren. Aprende la diferencia entre el valor declarado y el valor asegurado, y cómo proteger tus compras de alto valor.",
    date: "15 Oct 2025",
    category: "Seguridad Legal",
    image: blog11,
    imageAlt: "Paquete dañado y concepto de seguro de mercancía",
    content: `
        <p class="lead">Imagina que compras una Laptop de $800 USD. El avión atraviesa una turbulencia severa o el camión de reparto sufre un accidente. ¿Quién responde por tu dinero?</p>
  
        <h2>El Seguro Automático vs. Seguro Adicional</h2>
        <p>En Globus Cargo, manejamos dos niveles de protección:</p>
        
        <h3>1. Cobertura Básica</h3>
        <p>Por ley, las empresas de mensajería ofrecen una cobertura mínima basada en el peso del paquete. Sin embargo, esto suele ser insuficiente para artículos electrónicos costosos.</p>
  
        <h3>2. Seguro de Valor Declarado (Recomendado)</h3>
        <p>Al momento de despachar, puedes optar por asegurar tu mercancía por el 100% de su valor comercial. Suele costar un pequeño porcentaje del valor del producto (ej: 2% - 5%).</p>
        <ul>
          <li><strong>Requisito vital:</strong> Debes haber declarado el valor REAL. Si aseguras un iPhone por $100 USD (cuando vale $1.000) y se pierde, la aseguradora te pagará $100 USD. <strong>El seguro paga lo que declaras, no lo que vale.</strong></li>
        </ul>
  
        <h2>¿Qué hacer si llega roto?</h2>
        <p>El protocolo es estricto:</p>
        <ol>
          <li><strong>No firmes a ciegas:</strong> Si ves la caja externa muy golpeada, anótalo en la guía del transportista antes de firmar.</li>
          <li><strong>Video de 'Unboxing':</strong> Graba un video continuo abriendo la caja. Es la prueba reina para reclamaciones ante Amazon o ante la aseguradora.</li>
          <li><strong>Reporte inmediato:</strong> Tienes 24 horas para notificar el daño. Pasado ese tiempo, se asume que el daño ocurrió en tu casa.</li>
        </ol>
      `,
  },

  // ----------------------------------------------------------------
  // ARTÍCULO 14
  // ----------------------------------------------------------------
  {
    id: 14,
    slug: "estrategias-compras-black-friday-navidad",
    title: "Sobreviviendo al Black Friday: Estrategias para que tus regalos lleguen antes de Navidad",
    seoTitle: "Black Friday y Navidad: Estrategias de Envío a Tiempo",
    seoDescription: "Que tus regalos no se queden en aduana. Fechas límite de envío para recibir antes del 24 de Diciembre en Colombia. Estrategias Black Friday.",
    excerpt: "Noviembre y Diciembre son el caos logístico mundial. Te damos 3 estrategias probadas para evitar que tus regalos de Navidad se queden atrapados en aduana.",
    date: "10 Oct 2025",
    category: "Tips de Compras",
    image: compras,
    imageAlt: "Compras de navidad y black friday online",
    content: `
        <p class="lead">El último trimestre del año es la "Tormenta Perfecta" logística: Black Friday, Cyber Monday y Navidad. Los aeropuertos colapsan y las aduanas se vuelven lentas. Si no te preparas, tu "Niño Dios" llegará en Enero.</p>
  
        <h2>Estrategia 1: La regla del '10 de Diciembre'</h2>
        <p>En Globus Cargo hemos analizado la data de los últimos 5 años. Cualquier paquete que llegue a nuestra bodega en Miami <strong>después del 10 de Diciembre</strong> tiene un 50% de probabilidad de NO ser entregado antes del 24 de diciembre.</p>
        <p><strong>Meta:</strong> Haz tus compras de regalos durante el Black Friday (finales de Noviembre) y despacha inmediatamente.</p>
  
        <h2>Estrategia 2: Evita los 'Juguetes Problema'</h2>
        <p>Algunos regalos infantiles son dolores de cabeza en aduana:</p>
        <ul>
          <li><strong>Juguetes con baterías de litio gigantes:</strong> (Carros eléctricos montables). A veces no pueden viajar en avión de pasajeros.</li>
          <li><strong>Pistolas de juguete realistas:</strong> Pueden ser retenidas para inspección de seguridad, retrasando todo tu envío 5 días más.</li>
          <li><strong>Kits de química o Slime:</strong> Líquidos y polvos desconocidos siempre llaman la atención del escáner.</li>
        </ul>
  
        <h2>Estrategia 3: Separa lo Urgente</h2>
        <p>Si compraste el regalo de tu hijo y también unos repuestos para el carro que no te urgen, <strong>no los consolides</strong>. Envía el regalo solo y rápido. La consolidación ahorra dinero, pero toma tiempo extra en bodega para re-empacar.</p>
      `,
  },

  // ----------------------------------------------------------------
  // ARTÍCULO 15
  // ----------------------------------------------------------------
  {
    id: 15,
    slug: "importar-electrodomesticos-usa-voltaje",
    title: "Traer electrodomésticos de USA: ¿Mito o realidad rentable?",
    seoTitle: "Importar Electrodomésticos de USA: Voltaje y Costos",
    seoDescription: "¿Sirven los electrodomésticos de USA en Colombia? Guía sobre voltaje 110v, peso volumétrico y cuándo vale la pena importar Air Fryers o Robots.",
    excerpt: "Desde Air Fryers hasta Robots aspiradora. Analizamos cuándo vale la pena importar aparatos para el hogar y el tema crucial del voltaje eléctrico.",
    date: "05 Oct 2025",
    category: "Nichos Especiales",
    image: electro,
    imageAlt: "Electrodomésticos de cocina modernos air fryer",
    content: `
        <p class="lead">Entras a Amazon y ves esa batidora KitchenAid por $200 USD que en Colombia cuesta $1.500.000 COP. Parece el negocio del siglo, pero debes hacer bien las cuentas del peso y la electricidad.</p>
  
        <h2>El factor Voltaje: 110v vs 220v</h2>
        <p>¡Buenas noticias! Colombia y Estados Unidos comparten el mismo estándar eléctrico (110v - 120v) y el mismo tipo de enchufe (Patas planas). A diferencia de traer cosas de Europa (220v), <strong>los electrodomésticos de USA funcionan perfecto en Colombia</strong> sin transformadores.</p>
  
        <h2>El desafío del Peso Volumétrico</h2>
        <p>Una <em>Air Fryer</em> es barata, pero es puro "aire". La caja es enorme.</p>
        <ul>
          <li><strong>Ejemplo real:</strong> Una freidora cuesta $50 USD. Pero su envío puede costar $60 USD por el volumen que ocupa en el avión.</li>
          <li><strong>¿Cuándo vale la pena?</strong> En artículos de alta tecnología y densidad, o marcas premium no disponibles aquí:
            <ul>
              <li>Robots aspiradora (Roomba, Roborock).</li>
              <li>Procesadores de alimentos potentes (Vitamix, Ninja).</li>
              <li>Cafeteras de expreso compactas (Breville).</li>
            </ul>
          </li>
        </ul>
  
        <h2>Garantía Internacional</h2>
        <p>Ten en cuenta que la mayoría de garantías de electrodomésticos comprados en USA solo son válidas allá. Si tu robot aspiradora falla a los 3 meses, la marca en Colombia podría no cubrirlo. Es el riesgo que asumes a cambio del precio bajo.</p>
      `,
  },

  {
    id: 15,
    slug: "importar-electrodomesticos-usa-voltaje",
    title: "Traer electrodomésticos de USA: ¿Mito o realidad rentable?",
    seoTitle: "Importar Electrodomésticos de USA: Voltaje y Costos",
    seoDescription: "¿Sirven los electrodomésticos de USA en Colombia? Guía sobre voltaje 110v, peso volumétrico y cuándo vale la pena importar Air Fryers o Robots.",
    excerpt: "Desde Air Fryers hasta Robots aspiradora. Analizamos cuándo vale la pena importar aparatos para el hogar y el tema crucial del voltaje eléctrico.",
    date: "05 Oct 2025",
    category: "Nichos Especiales",
    image: electro,
    imageAlt: "Electrodomésticos de cocina modernos air fryer",
    content: `
        <p class="lead">Entras a Amazon y ves esa batidora KitchenAid por $200 USD que en Colombia cuesta $1.500.000 COP. Parece el negocio del siglo, pero debes hacer bien las cuentas del peso y la electricidad.</p>
  
        <h2>El factor Voltaje: 110v vs 220v</h2>
        <p>¡Buenas noticias! Colombia y Estados Unidos comparten el mismo estándar eléctrico (110v - 120v) y el mismo tipo de enchufe (Patas planas). A diferencia de traer cosas de Europa (220v), <strong>los electrodomésticos de USA funcionan perfecto en Colombia</strong> sin transformadores.</p>
  
        <h2>El desafío del Peso Volumétrico</h2>
        <p>Una <em>Air Fryer</em> es barata, pero es puro "aire". La caja es enorme.</p>
        <ul>
          <li><strong>Ejemplo real:</strong> Una freidora cuesta $50 USD. Pero su envío puede costar $60 USD por el volumen que ocupa en el avión.</li>
          <li><strong>¿Cuándo vale la pena?</strong> En artículos de alta tecnología y densidad, o marcas premium no disponibles aquí:
            <ul>
              <li>Robots aspiradora (Roomba, Roborock).</li>
              <li>Procesadores de alimentos potentes (Vitamix, Ninja).</li>
              <li>Cafeteras de expreso compactas (Breville).</li>
            </ul>
          </li>
        </ul>
  
        <h2>Garantía Internacional</h2>
        <p>Ten en cuenta que la mayoría de garantías de electrodomésticos comprados en USA solo son válidas allá. Si tu robot aspiradora falla a los 3 meses, la marca en Colombia podría no cubrirlo. Es el riesgo que asumes a cambio del precio bajo.</p>
      `,
  },
  // ----------------------------------------------------------------
  // ARTÍCULO 16 - EMERGENCIA ECONÓMICA (NUEVO)
  // ----------------------------------------------------------------
 // ----------------------------------------------------------------
  // ARTÍCULO 16 - EMERGENCIA ECONÓMICA (VERSIÓN PROFESIONAL)
  // ----------------------------------------------------------------
  {
    id: 16,
    slug: "normativa-2026-emergencia-economica-impuestos-50-usd",
    title: "Decreto de Emergencia Económica: Análisis del nuevo límite de importación",
    seoTitle: "Decreto 1474 y Nuevos Impuestos Aduaneros 2026 | Globus Cargo",
    seoDescription: "Análisis técnico del Decreto Legislativo 1474. Entienda la reducción del cupo de importación a USD $50 y el impacto tributario en sus envíos de USA a Colombia.",
    excerpt: "El Gobierno Nacional ha expedido el Decreto 1474 bajo el marco de la Emergencia Económica, modificando sustancialmente el régimen de tráfico postal. Analizamos el impacto fiscal para importadores.",
    date: "06 Ene 2026",
    category: "Normativa y Aduanas",
    image: customs, // Asegúrate de tener importada esta variable arriba
    imageAlt: "Gráfico estadístico sobre impacto fiscal y aduanero en Colombia",
    content: `
        <p class="lead">En el marco de la <strong>Emergencia Económica, Social y Ecológica</strong>, el Gobierno Nacional ha expedido el <strong>Decreto Legislativo 1474 de 2026</strong>. Esta normativa introduce cambios importantes al Estatuto Aduanero que afectan la importación bajo la modalidad de Tráfico Postal y Envíos Urgentes.</p>

        <h2>Cambios en la Normativa Aduanera</h2>
        <p>La modificación principal afecta la exención de tributos para envíos de bajo valor. Anteriormente, los paquetes con un valor inferior a <strong>USD $200</strong> estaban exentos de impuestos.</p>

        <div style="background-color: #f8fafc; border-left: 4px solid #0f172a; padding: 20px; margin: 25px 0; border-radius: 4px;">
          <h3 style="margin-top: 0; color: #0f172a; font-size: 1.1em;">Nueva Regla (2026):</h3>
          <p style="margin-bottom: 0; color: #334155;"><em>"Se reduce el tope de la exención (mínima cuantía) a <strong>USD $50 FOB</strong>. Todo paquete cuyo valor declarado supere los $50 USD estará sujeto al pago pleno de Arancel e IVA."</em></p>
        </div>

        <h2>Ejemplo de Liquidación de Impuestos</h2>
        <p>Para mayor claridad, presentamos un ejemplo con un artículo valorado en <strong>USD $60</strong>. Al superar el nuevo límite de $50, este artículo pasa a pagar impuestos completos, a diferencia de la norma anterior donde estaba exento.</p>

        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 0.95em;">
            <thead>
              <tr style="background-color: #f1f5f9; text-align: left;">
                <th style="padding: 12px; border-bottom: 2px solid #cbd5e1;">Concepto</th>
                <th style="padding: 12px; border-bottom: 2px solid #cbd5e1;">Normativa Anterior (Tope $200)</th>
                <th style="padding: 12px; border-bottom: 2px solid #cbd5e1; color: #c2410c;">Nueva Normativa (Tope $50)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">Valor FOB Producto</td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">$60.00 USD</td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">$60.00 USD</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">Arancel (10%)</td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #16a34a;"><strong>$0.00 (Exento)</strong></td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">$6.00</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">IVA (19%)</td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #16a34a;"><strong>$0.00 (Exento)</strong></td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">~$12.54</td>
              </tr>
              <tr style="font-weight: bold; background-color: #fff7ed;">
                <td style="padding: 12px;">TOTAL IMPUESTOS A PAGAR</td>
                <td style="padding: 12px; color: #16a34a;">$0.00 USD</td>
                <td style="padding: 12px; color: #c2410c;">~$18.54 USD</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style="font-size: 0.9em; color: #64748b;">*Nota: El cálculo del IVA se realiza sobre la base gravable (Valor CIF + Arancel), lo que genera un efecto compuesto.</p>

        <h2>Estrategias y Recomendaciones</h2>
        <p>Ante este nuevo panorama fiscal, adaptar la forma en que compramos en línea es clave para optimizar costos. En Globus Cargo le sugerimos:</p>

        <ul>
          <li style="margin-bottom: 10px;"><strong>Opte por Despachos Individuales (No Consolidar):</strong> Al realizar compras en sus tiendas favoritas, la estrategia más efectiva es enviar cada paquete por separado apenas llegue a nuestra bodega. Evite utilizar la opción de "consolidar" o agrupar múltiples compras en una sola caja si la suma total supera los USD $50, ya que esto activará automáticamente el cobro de impuestos sobre el total.</li>
          <li style="margin-bottom: 10px;"><strong>Declaración Exacta:</strong> La precisión en el valor declarado es fundamental. Cualquier discrepancia puede generar reajustes por parte de la DIAN. Es vital declarar el valor real pagado por el producto.</li>
          <li><strong>Gestión de Pre-Alertas:</strong> Utilice nuestra plataforma para adjuntar sus facturas comerciales antes de que el paquete sea procesado. Esto agiliza el trámite aduanero y asegura la correcta clasificación de sus envíos.</li>
        </ul>

        <p>Como su aliado logístico, Globus Cargo continuará monitoreando la implementación de este decreto para mantenerlo informado y garantizar la eficiencia de sus importaciones.</p>
    `
},
];