import { StaticImageData } from "next/image";

// Importa todas las imágenes locales del blog
import blog1 from "@/assets/img/blog/Gemini_Generated_Image_cu2nwscu2nwscu2n.png";
import blog2 from "@/assets/img/blog/blog1.avif";
import blog3 from "@/assets/img/blog/blog2.avif";
import blog4 from "@/assets/img/blog/blog3.avif";
import blog5 from "@/assets/img/blog/blog4.avif";
import blog6 from "@/assets/img/blog/blog5.jpg";
import blog7 from "@/assets/img/blog/blog6.jpg";
import blog9 from "@/assets/img/blog/blog7.avif";
import blog8 from "@/assets/img/blog/blog8.jpg";
import blog10 from "@/assets/img/blog/blogfit8.avif"
import blog11 from "@/assets/img/blog/paquete.jpg"
import compras from "@/assets/img/blog/compras.jpg"
import emprender from "@/assets/img/blog/emprender.jpg"
import electro from "@/assets/img/blog/electro.jpg"
import tracking from "@/assets/img/blog/tracking.jpg"
import customs from "@/assets/img/blog/customs.jpg"



export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: StaticImageData;
  content: string;
};

export const blogPosts: BlogPost[] = [
  // ----------------------------------------------------------------
  // ARTÍCULO 1: EL HERO (CÓMO FUNCIONA EL CASILLERO)
  // ----------------------------------------------------------------
  {
    id: 1,
    title: "¿Cómo funciona un casillero en Miami y por qué lo necesitas?",
    excerpt:
      "Deja de limitarte por los envíos internacionales. Descubre paso a paso cómo recibir tus compras de Amazon, eBay y Apple en Colombia sin complicaciones y ahorrando en impuestos.",
    date: "04 Dic 2025",
    category: "Guía Principiantes",
    image: blog1,
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
  // ARTÍCULO 2: LA REGLA DE LOS 200 USD (IMPUESTOS)
  // ----------------------------------------------------------------
  {
    id: 2,
    title: "La regla de los $200 USD: Compra sin pagar IVA",
    excerpt:
      "Aprovecha el decreto 4x4. Te explicamos qué artículos están legalmente exentos de IVA y aranceles para que maximices tu cupo de importación mensual.",
    date: "02 Dic 2025",
    category: "Ahorro e Impuestos",
    image: blog2,
    content: `
        <p>Esta es la pregunta del millón: <em>"¿Cuánto tengo que pagar de impuestos?"</em>. La buena noticia es que, gracias a los tratados de libre comercio y la modalidad de tráfico postal, puedes importar muchas cosas pagando <strong>$0 pesos en impuestos</strong>.</p>
  
        <h2>¿Qué es la modalidad 4x4?</h2>
        <p>Para que tu paquete esté exento de IVA (19%) y Arancel (10%), debe cumplir con estos requisitos simultáneamente:</p>
        <ul>
          <li><strong>Valor declarado:</strong> La mercancía debe costar menos de $200 USD.</li>
          <li><strong>Peso:</strong> El paquete no puede pesar más de 50 Kg (110 libras).</li>
          <li><strong>Cantidad:</strong> No más de 6 unidades de la misma referencia.</li>
          <li><strong>Destino:</strong> Debe ser para uso personal, no comercial masivo.</li>
        </ul>
  
        <h2>¿Qué pasa si me paso de $200 USD?</h2>
        <p>Si tu compra cuesta $201 USD, automáticamente cambia de categoría. En ese caso, deberás pagar:</p>
        <ul>
          <li>Arancel del 10%</li>
          <li>IVA del 19%</li>
        </ul>
        <p>Esto suma casi un 30% adicional al costo de tu producto. Por eso, la estrategia inteligente es dividir tus compras. Si vas a comprar $300 USD en ropa, haz dos envíos de $150 USD en días diferentes. ¡Así ambos llegarán sin impuestos!</p>
  
        <p><strong>Nota importante:</strong> En Globus Cargo te asesoramos antes de enviar para asegurar que tu declaración sea correcta y aproveches este beneficio legal.</p>
      `,
  },

  // ----------------------------------------------------------------
  // ARTÍCULO 3: IMPORTAR TECNOLOGÍA (CELULARES)
  // ----------------------------------------------------------------
  {
    id: 3,
    title: "Guía para importar tecnología y celulares sin decomisos",
    excerpt:
      "La DIAN tiene reglas estrictas sobre la importación de móviles y Laptops. Conoce la homologación de IMEI y cuántos dispositivos puedes traer por envío.",
    date: "28 Nov 2025",
    category: "Tecnología y Normativa",
    image: blog3,
    content: `
        <p>Traer el último iPhone o una Laptop Gamer desde USA puede ahorrarte millones de pesos comparado con los precios locales. Sin embargo, la tecnología es la categoría más vigilada por la Aduana colombiana.</p>
  
        <h2>La regla de ORO de los Celulares</h2>
        <p>El Decreto 2142 establece una norma inquebrantable para el tráfico postal:</p>
        <blockquote>"Solo se permite el ingreso de UN (1) equipo móvil celular por envío."</blockquote>
        <p>Esto significa que no puedes enviar dos teléfonos en la misma caja, ni siquiera si uno es usado y el otro nuevo. Si la DIAN detecta dos celulares en un paquete, la aprehensión es inmediata.</p>
  
        <h2>Paso a paso para importar tu celular seguro:</h2>
        <ol>
          <li><strong>Verifica el precio:</strong> Si cuesta menos de $200 USD, no paga IVA. Si cuesta más (como la mayoría de smartphones gama alta), pagarás el 19% de IVA (los celulares están exentos de arancel, solo pagan IVA).</li>
          <li><strong>Desbloqueado de fábrica:</strong> Asegúrate de comprar equipos "Unlocked".</li>
          <li><strong>Homologación de IMEI:</strong> Una vez recibas el equipo en Colombia, debes registrar el IMEI ante tu operador móvil local usando la factura de compra o el comprobante de importación que te entrega Globus Cargo.</li>
        </ol>
  
        <h2>¿Y las Laptops y Tablets?</h2>
        <p>Tienen reglas más flexibles. Las computadoras (portátiles o de escritorio) cuyo valor sea inferior a 50 UVT (aprox $2.3 millones de pesos) están exentas de IVA si las compras en Colombia, pero al importarlas bajo modalidad postal, rige la norma de los $200 USD para la exención total.</p>
      `,
  },

  // ----------------------------------------------------------------
  // ARTÍCULO 4: CONSOLIDACIÓN (SHEIN / AMAZON)
  // ----------------------------------------------------------------
  {
    id: 4,
    title: "¿Shein o Amazon? Cómo consolidar paquetes y ahorrar hasta un 50%",
    excerpt:
      "No pagues un envío por cada blusa. Aprende a usar nuestro servicio de reempaque para juntar tus compras de múltiples tiendas en una sola caja segura.",
    date: "25 Nov 2025",
    category: "Tips de Compras",
    image: blog4,
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
  // ARTÍCULO 5: ZAPATILLAS Y MODA (ORIGINALES VS RÉPLICAS)
  // ----------------------------------------------------------------
  {
    id: 5,
    title: "Zapatillas de marca: ¿Originales o Réplicas? Cuidado con la Aduana",
    excerpt:
      "Traer Nike o Adidas exclusivos es rentable, pero las regulaciones de propiedad intelectual son severas. Evita multas y aprende a declarar correctamente tu calzado.",
    date: "20 Nov 2025",
    category: "Moda y Lifestyle",
    image: blog5,
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
        <p>Un error común es declarar unas zapatillas de $300 USD por $50 USD para no pagar impuestos. La DIAN tiene bases de datos de precios. Si ven unos Jordan 1 Travis Scott declarados en $20 dólares, no solo te ajustarán el valor, sino que te sancionarán. Es mejor pagar el impuesto (30% si supera los $200 USD) que perder la mercancía.</p>
  
        <h3>3. Máximo 6 pares</h3>
        <p>Recuerda la norma: no traigas más de 6 pares de la misma referencia en un solo envío, o se considerará importación comercial y requerirá otros permisos.</p>
      `,
  },

  // ----------------------------------------------------------------
  // ARTÍCULO 6: ARTÍCULOS PROHIBIDOS (SEGURIDAD)
  // ----------------------------------------------------------------
  {
    id: 6,
    title: "¡Alerta! 5 cosas que está terminantemente prohibido traer a Colombia",
    excerpt:
      "Evita que tu paquete sea destruido. Perfumes, aerosoles, juguetes bélicos y semillas tienen restricciones aéreas severas que debes conocer antes de comprar.",
    date: "18 Nov 2025",
    category: "Seguridad y Restricciones",
    image: blog6,
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
  // ARTÍCULO 7: REPUESTOS DE AUTOS
  // ----------------------------------------------------------------
  {
    id: 7,
    title:
      "Importar repuestos de autos: Lo que nadie te dice sobre el peso volumétrico",
    excerpt:
      "Desde bujías hasta computadoras de motor. Traer autopartes de USA es 40% más barato, pero requiere saber clasificar el peso y dimensiones volumétricas.",
    date: "15 Nov 2025",
    category: "Nichos Especiales",
    image: blog7,
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
  // ARTÍCULO 8: ERRORES DE DECLARACIÓN (SEGURIDAD LEGAL)
  // ----------------------------------------------------------------
  {
    id: 8,
    title: "Errores comunes al declarar el valor de tu paquete",
    excerpt:
      "¿Subvaluar o declarar real? Te contamos los riesgos de mentir en la factura comercial y cómo Globus Cargo te protege con pre-alertas transparentes.",
    date: "10 Nov 2025",
    category: "Seguridad Legal",
    image: customs,
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
  // ARTÍCULO 9: AÉREO VS MARÍTIMO (LOGÍSTICA)
  // ----------------------------------------------------------------
  {
    id: 9,
    title: "Envíos urgentes: Diferencias entre aéreo y marítimo",
    excerpt:
      "¿Necesitas tu carga en 4 días o puedes esperar 3 semanas? Comparativa de costos y tiempos para que elijas la logística que se adapta a tu bolsillo.",
    date: "05 Nov 2025",
    category: "Logística 101",
    image: blog9,
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
  // ARTÍCULO 10: NEGOCIOS B2B (EL CIERRE DE VENTA)
  // ----------------------------------------------------------------
  {
    id: 10,
    title: "Emprender importando: Cómo iniciar tu tienda online",
    excerpt:
      "Convierte las importaciones en un negocio rentable. Estrategias para comprar al por mayor en USA y revender en Colombia con margen de ganancia.",
    date: "01 Nov 2025",
    category: "Negocios B2B",
    image: emprender,
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
  // ARTÍCULO 11: RASTREO Y TRAZABILIDAD (SEGURIDAD)
  // ----------------------------------------------------------------
  {
    id: 11,
    title: "Rastreo 24/7: Cómo seguir tu paquete desde Miami hasta tu casa",
    excerpt:
      "La incertidumbre es el peor enemigo de las compras online. Aprende a interpretar los estados de tu guía (tracking) y por qué a veces Amazon dice 'entregado' pero no lo ves en tu casillero.",
    date: "28 Oct 2025",
    category: "Logística y Tecnología",
    image: tracking,
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
  // ARTÍCULO 12: SUPLEMENTOS Y VITAMINAS (INVIMA)
  // ----------------------------------------------------------------
  {
    id: 12,
    title:
      "Guía fit: Cómo importar proteínas y vitaminas sin problemas con el INVIMA",
    excerpt:
      "¿Quieres traer tus suplementos de USA? Descubre qué permite la regulación sanitaria en Colombia y cuántos frascos puedes traer antes de que se considere comercio ilegal.",
    date: "22 Oct 2025",
    category: "Salud y Bienestar",
    image: blog10,
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
  // ARTÍCULO 13: SEGUROS DE CARGA
  // ----------------------------------------------------------------
  {
    id: 13,
    title:
      "¿Tu paquete se perdió o llegó roto? Todo sobre el Seguro de Carga",
    excerpt:
      "Nadie quiere pensar en desastres, pero ocurren. Aprende la diferencia entre el valor declarado y el valor asegurado, y cómo proteger tus compras de alto valor.",
    date: "15 Oct 2025",
    category: "Seguridad Legal",
    image: blog11,
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
  // ARTÍCULO 14: PREPARACIÓN BLACK FRIDAY (TEMPORADA)
  // ----------------------------------------------------------------
  {
    id: 14,
    title:
      "Sobreviviendo al Black Friday: Estrategias para que tus regalos lleguen antes de Navidad",
    excerpt:
      "Noviembre y Diciembre son el caos logístico mundial. Te damos 3 estrategias probadas para evitar que tus regalos de Navidad se queden atrapados en aduana.",
    date: "10 Oct 2025",
    category: "Tips de Compras",
    image: compras,
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
  // ARTÍCULO 15: ELECTRODOMÉSTICOS (HOGAR)
  // ----------------------------------------------------------------
  {
    id: 15,
    title: "Traer electrodomésticos de USA: ¿Mito o realidad rentable?",
    excerpt:
      "Desde Air Fryers hasta Robots aspiradora. Analizamos cuándo vale la pena importar aparatos para el hogar y el tema crucial del voltaje eléctrico.",
    date: "05 Oct 2025",
    category: "Nichos Especiales",
    image: electro,
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
];