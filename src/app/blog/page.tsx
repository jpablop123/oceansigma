"use client";

import { useState } from "react";
import { blogPosts } from "@/data/blogPost";
import BlogCard from "@/components/blogCard";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link"; 

const POSTS_PER_PAGE = 9;

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);

  // --- LÓGICA DE PAGINACIÓN ---
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Separamos el Hero del resto solo en la página 1
  const heroPost = blogPosts[0];
  const gridPosts = currentPage === 1 ? currentPosts.slice(1) : currentPosts;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#FF8313] selection:text-white">
        <div className="container mx-auto px-4 pt-32 md:pt-40 pb-20 max-w-7xl">
          
          {/* --- HEADER EDITORIAL --- */}
          <div className="mb-16 border-b border-gray-200 pb-8 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <span className="text-[#FF8313] font-bold tracking-[0.2em] text-xs uppercase mb-2 block">
                Globus Cargo Journal
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900">
                Logistics<span className="text-[#FF8313]">.</span>
              </h1>
            </div>
            <p className="text-[#847E7E] max-w-md text-sm md:text-right leading-relaxed font-medium">
              Tu fuente definitiva sobre importaciones, aduanas y comercio global. 
              <br />Domina la logística con estilo.
            </p>
          </div>

          {/* --- HERO SECTION (Solo visible en página 1) --- */}
          {currentPage === 1 && heroPost && (
            // ✅ CAMBIO 1: Usamos heroPost.slug en vez de heroPost.id
            <Link href={`/blog/${heroPost.slug}`} className="block mb-20 group cursor-pointer">
              <div className="relative h-[500px] w-full rounded-3xl overflow-hidden border border-gray-200 shadow-2xl shadow-gray-200/50">
                
                <div className="absolute inset-0 bg-gray-800 transition-transform duration-700 group-hover:scale-105">
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 p-8 md:p-14 max-w-4xl z-10">
                  <span className="bg-[#FF8313] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4 inline-block shadow-lg shadow-orange-900/20">
                    Destacado
                  </span>
                  <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-white drop-shadow-lg">
                    {heroPost.title}
                  </h2>
                  <p className="text-gray-200 text-lg md:text-xl line-clamp-2 max-w-2xl mb-6 font-light drop-shadow-md">
                    {heroPost.excerpt}
                  </p>
                  <div className="text-sm text-gray-300 font-mono flex items-center gap-2">
                    <span className="text-[#FF8313]">•</span> {heroPost.date} — Leer artículo &rarr;
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* --- GRID DE ARTÍCULOS --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {gridPosts.map((post) => (
              // ✅ CAMBIO 2: Usamos post.slug en vez de post.id
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block h-full">
                <BlogCard post={post} />
              </Link>
            ))}
          </div>

          {/* --- PAGINACIÓN (Igual que antes) --- */}
          <div className="mt-24 pt-12 border-t border-gray-200 flex justify-center items-center gap-4">
            
            <button 
              onClick={() => { setCurrentPage(prev => Math.max(prev - 1, 1)); scrollToTop(); }}
              disabled={currentPage === 1}
              className="p-3 px-5 rounded-full border border-gray-300 text-[#847E7E] hover:border-[#FF8313] hover:text-[#FF8313] disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm font-medium"
            >
               &larr; Anterior
            </button>

            <div className="flex gap-2 font-mono text-sm">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                 <button
                  key={page}
                  onClick={() => { setCurrentPage(page); scrollToTop(); }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    currentPage === page 
                      ? "bg-[#FF8313] text-white font-bold shadow-lg shadow-orange-500/30 transform scale-110" 
                      : "bg-gray-100 text-[#847E7E] hover:bg-gray-200"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button 
              onClick={() => { setCurrentPage(prev => Math.min(prev + 1, totalPages)); scrollToTop(); }}
              disabled={currentPage === totalPages}
              className="p-3 px-5 rounded-full border border-gray-300 text-[#847E7E] hover:border-[#FF8313] hover:text-[#FF8313] disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm font-medium"
            >
              Siguiente &rarr;
            </button>

          </div>

        </div>
      </main>

      <Footer/>
    </>
  );
}