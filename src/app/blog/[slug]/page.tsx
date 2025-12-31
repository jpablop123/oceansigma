import { blogPosts } from "@/data/blogPost";
import type { BlogPost } from "@/data/blogPost"; 
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";

// Definimos que el parámetro ahora es 'slug' (no id)
interface PageProps {
  params: Promise<{ slug: string }>;
}

const stripHtml = (html: string) => {
  return html.replace(/<[^>]*>?/gm, '');
};

// 1. METADATA CON SLUG (SEO)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  // 👇 CAMBIO CLAVE: Buscamos por slug, no por id
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return { title: "Post no encontrado" };

  const canonicalUrl = `https://globuscargo.us/blog/${post.slug}`;
  
  // Usamos la imagen del post
  const ogImage = post.image.src; 

  return {
    title: post.seoTitle || post.title, // Usamos el título optimizado si existe
    description: post.seoDescription || post.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      url: canonicalUrl,
      type: 'article',
      publishedTime: post.date,
      images: [{ url: ogImage, alt: post.imageAlt }],
      siteName: 'Globus Cargo',
    },
  };
}

// 2. GENERACIÓN ESTÁTICA CON SLUG
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug, // 👇 Generamos las rutas estáticas basadas en el slug
  }));
}

function calculateReadingTime(content: string) {
  const wordsPerMinute = 200;
  const words = stripHtml(content).split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min de lectura`;
}

// 3. COMPONENTE PRINCIPAL
export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  // 👇 CAMBIO CLAVE: Buscamos el post correcto usando el slug de la URL
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id) // Excluimos el actual por ID
    .slice(0, 2);

  // Schema Markup (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.seoTitle || post.title,
    "image": [post.image.src],
    "datePublished": post.date, 
    "author": {
      "@type": "Organization",
      "name": "Globus Cargo",
      "url": "https://globuscargo.us"
    },
    "description": post.seoDescription || post.excerpt,
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://globuscargo.us/blog/${post.slug}` // 👇 URL Canónica en el Schema
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />
      <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#FF8313] selection:text-white pt-32 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center text-[#847E7E] hover:text-[#FF8313] mb-8 transition-colors font-medium text-sm group"
          >
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">&larr;</span> Volver al Blog
          </Link>

          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
              <span className="bg-[#FF8313]/10 text-[#FF8313] px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[10px]">
                {post.category}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-[#847E7E] font-mono">{post.date}</span>
              <span className="text-gray-400">•</span>
              <span className="text-[#847E7E] font-medium flex items-center gap-1">
                {post.content ? calculateReadingTime(post.content) : "1 min"}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>
          </header>

          <div className="w-full h-[300px] md:h-[400px] bg-gray-100 rounded-2xl overflow-hidden mb-12 shadow-sm border border-gray-100 relative">
            <Image
              src={post.image}
              alt={post.imageAlt || post.title} // 👇 Usamos el Alt text optimizado
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          <div
            className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-[#847E7E] prose-p:leading-relaxed prose-strong:text-gray-900 prose-a:text-[#FF8313] prose-a:no-underline hover:prose-a:underline mb-16"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <hr className="border-gray-100 mb-12" />

          {relatedPosts.length > 0 && (
            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">También te podría interesar</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((related) => (
                  // 👇 CAMBIO CLAVE: El link ahora apunta al slug
                  <Link key={related.id} href={`/blog/${related.slug}`} className="group block">
                    <div className="bg-gray-50 rounded-xl p-5 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
                      <span className="text-xs font-bold text-[#FF8313] uppercase mb-2 block">
                        {related.category}
                      </span>
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#FF8313] transition-colors mb-2">
                        {related.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

        </article>
      </main>
      <Footer />
    </>
  );
}