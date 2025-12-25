import { blogPosts } from "@/data/blogPost";
import type { BlogPost } from "@/data/blogPost";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next"; // Importar tipos para Metadata

interface PageProps {
  params: Promise<{ id: string }>;
}

// 1. MEJORA DE SEO: Metadata Dinámica
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id.toString() === id);

  if (!post) return { title: "Post no encontrado" };

  return {
    title: `${post.title} | Globus Cargo Blog`,
    description: post.content?.substring(0, 160) || "Lee nuestro último artículo.",
    openGraph: {
      title: post.title,
      description: post.content?.substring(0, 160), // O usa un campo 'excerpt' si lo tienes
      images: post.image ? [{ url: typeof post.image === 'string' ? post.image : post.image.src }] : [],
    },
  };
}

// 2. MEJORA DE RENDIMIENTO: Generación Estática (SSG)
// Esto convierte la página de dinámica a estática pura, cargando instantáneamente.
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

// Función auxiliar para tiempo de lectura
function calculateReadingTime(content: string) {
  const wordsPerMinute = 200;
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min de lectura`;
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const post = blogPosts.find((p) => p.id.toString() === id) as BlogPost | undefined;

  if (!post) {
    notFound();
  }

  // 3. MEJORA DE RETENCIÓN: Posts Relacionados (Lógica simple)
  // Tomamos 2 posts que NO sean el actual
  const relatedPosts = blogPosts
    .filter((p) => p.id.toString() !== id)
    .slice(0, 2);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#FF8313] selection:text-white pt-32 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          {/* Botón Volver */}
          <Link
            href="/blog"
            className="inline-flex items-center text-[#847E7E] hover:text-[#FF8313] mb-8 transition-colors font-medium text-sm group"
          >
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">
              &larr;
            </span>{" "}
            Volver al Blog
          </Link>

          {/* Encabezado del Artículo */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
              <span className="bg-[#FF8313]/10 text-[#FF8313] px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[10px]">
                {post.category || "Artículos"}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-[#847E7E] font-mono">{post.date}</span>
              <span className="text-gray-400">•</span>
              {/* 4. MEJORA UX: Tiempo de lectura */}
              <span className="text-[#847E7E] font-medium flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.content ? calculateReadingTime(post.content) : "1 min"}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>
          </header>

          {/* Imagen Principal */}
          <div className="w-full h-[300px] md:h-[400px] bg-gray-100 rounded-2xl overflow-hidden mb-12 shadow-sm border border-gray-100 relative">
            {post.image ? (
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                <span className="text-gray-300 font-bold text-4xl opacity-20">
                  GLOBUS CARGO
                </span>
              </div>
            )}
          </div>

          {/* Contenido del Post */}
          <div
            className="prose prose-lg prose-gray max-w-none 
            prose-headings:font-bold prose-headings:text-gray-900 
            prose-p:text-[#847E7E] prose-p:leading-relaxed
            prose-strong:text-gray-900 prose-strong:font-bold
            prose-a:text-[#FF8313] prose-a:no-underline hover:prose-a:underline
            prose-li:text-[#847E7E] mb-16" // mb-16 para separar de relacionados
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
          />
          
          <hr className="border-gray-100 mb-12" />

          {/* 3. SECCIÓN: Artículos Relacionados */}
          {relatedPosts.length > 0 && (
            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">También te podría interesar</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((related) => (
                  <Link key={related.id} href={`/blog/${related.id}`} className="group block">
                    <div className="bg-gray-50 rounded-xl p-5 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
                      <span className="text-xs font-bold text-[#FF8313] uppercase mb-2 block">
                        {related.category || "Blog"}
                      </span>
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#FF8313] transition-colors mb-2">
                        {related.title}
                      </h4>
                      <p className="text-sm text-[#847E7E] line-clamp-2">
                         {/* Truco: Eliminar HTML tags para el preview si content tiene HTML */}
                        {related.content?.replace(/<[^>]*>/g, '').substring(0, 100)}...
                      </p>
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