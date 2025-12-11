import { blogPosts } from "@/data/blogPost"; // 👈 mismo archivo de data
import type { BlogPost } from "@/data/blogPost";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

// Definimos la interfaz para los parámetros en Next.js 15
interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const post = blogPosts.find((p) => p.id.toString() === id) as BlogPost | undefined;

  if (!post) {
    notFound();
  }

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
            <div className="flex items-center gap-3 text-sm mb-4">
              <span className="bg-[#FF8313]/10 text-[#FF8313] px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[10px]">
                {post.category || "Artículos"}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-[#847E7E] font-mono">{post.date}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>
          </header>

          {/* Imagen Principal */}
          <div className="w-full h-[300px] md:h-[400px] bg-gray-100 rounded-2xl overflow-hidden mb-12 shadow-sm border border-gray-100 relative">
            {post.image ? (
              <Image
                src={post.image}      // ✅ ahora sí: StaticImageData -> OK
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

          {/* Contenido del Post (HTML renderizado) */}
          <div
            className="prose prose-lg prose-gray max-w-none 
            prose-headings:font-bold prose-headings:text-gray-900 
            prose-p:text-[#847E7E] prose-p:leading-relaxed
            prose-strong:text-gray-900 prose-strong:font-bold
            prose-a:text-[#FF8313] prose-a:no-underline hover:prose-a:underline
            prose-li:text-[#847E7E]"
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}