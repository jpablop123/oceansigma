"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaInstagram, FaPlay, FaClone, FaTimes, FaHeart } from "react-icons/fa";

// Importamos el logo
import logo from "@/assets/img/logo/Gestionglobal1.webp";

const INSTAGRAM_FEED_URL = "https://feeds.behold.so/7h145nVZyZOfwQmsbbAi"; 

// --- MARQUEE ---
const Marquee = () => {
  return (
    <div className="relative flex overflow-hidden py-3 bg-[#1e4b8a]/20 backdrop-blur-sm border-y border-white/5 z-20">
      <motion.div 
        className="flex whitespace-nowrap gap-20 items-center"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-3 opacity-50">
                <FaInstagram className="text-white text-lg" />
                <span className="text-white font-medium tracking-[0.2em] text-xs uppercase">
                    @gestionglobal_co
                </span>
            </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function InstagramFeed() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<any>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(INSTAGRAM_FEED_URL);
        const data = await response.json();
        const validPosts = data.posts ? data.posts : data;
        if (Array.isArray(validPosts)) setPosts(validPosts.slice(0, 4));
      } catch (error) {
        console.error("Error cargando Instagram:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Bloquear scroll al abrir modal
  useEffect(() => {
    if (selectedPost) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [selectedPost]);

  const closeModal = () => setSelectedPost(null);

  return (
    <section className="relative bg-[#020617] overflow-hidden py-0">
      
      {/* Fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1e3a8a]/20 via-[#020617] to-[#020617]"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5"></div>

      <Marquee />

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        
        {/* === HEADER CENTRADO === */}
        <div className="text-center mb-16 space-y-6">
            <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-[10px] font-bold uppercase tracking-widest"
            >
                <FaInstagram /> Comunidad Digital
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center justify-center"
            >
                <h2 className="text-3xl md:text-4xl font-medium text-slate-300 mb-6">
                  Todo lo nuevo de
                </h2>
                <div className="relative w-40 h-40 md:w-52 md:h-52">
                    <Image 
                        src={logo} 
                        alt="Gestión Global Logo" 
                        fill 
                        className="object-contain brightness-0 invert drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
                    />
                </div>
            </motion.div>

            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-slate-400 max-w-lg mx-auto text-sm md:text-base pt-4"
            >
                Mantente al día con nuestras últimas capacitaciones, noticias y cultura de prevención.
            </motion.p>
        </div>

        {/* === GRID DE POSTS === */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {loading ? [1, 2, 3, 4].map((i) => <div key={i} className="aspect-square bg-white/5 rounded-2xl animate-pulse"></div>) : 
            posts.map((post: any, index) => {
              const imageUrl = post.mediaType === "VIDEO" ? post.thumbnailUrl : post.mediaUrl;
              const TypeIcon = post.mediaType === "VIDEO" ? FaPlay : (post.children ? FaClone : FaInstagram);
              
              return (
                <motion.div
                  key={post.id}
                  layoutId={`post-${post.id}`} 
                  onClick={() => setSelectedPost(post)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative block aspect-square rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border border-white/10 hover:border-blue-500 transition-all duration-300 shadow-lg"
                >
                  <Image 
                    src={imageUrl} 
                    alt="Post" 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                    sizes="(max-width: 768px) 50vw, 25vw"
                    unoptimized={true} 
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md text-white p-2 rounded-full border border-white/10">
                    <TypeIcon size={12} />
                  </div>
                </motion.div>
              );
            })
          }
        </div>

        {/* Botón CTA */}
        <div className="flex justify-center mt-12">
            <a href="https://instagram.com/tu_usuario_real" target="_blank" rel="noopener noreferrer" 
                className="group flex items-center gap-3 px-8 py-3 bg-[#245CA7] text-white rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-900/30 hover:-translate-y-1"
            >
                <FaInstagram className="text-xl" />
                <span>Seguir en Instagram</span>
            </a>
        </div>
      </div>

      {/* === MODAL RESPONSIVE === */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex flex-col md:flex-row items-end md:items-center justify-center bg-black/90 backdrop-blur-md md:p-8"
            onClick={closeModal}
          >
            {/* Botón flotante solo para PC (Opcional, pero útil) */}
            <button 
              onClick={closeModal} 
              className="hidden md:block absolute top-6 right-6 z-[100] bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md border border-white/10 transition-transform hover:rotate-90"
            >
              <FaTimes size={24} />
            </button>

            {/* TARJETA DEL MODAL */}
            <motion.div 
              layoutId={`post-${selectedPost.id}`}
              className="relative w-full h-[85vh] md:h-auto md:max-h-[85vh] md:max-w-6xl bg-[#0F172A] rounded-t-[2rem] md:rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* IMAGEN / VIDEO */}
              <div className="w-full md:w-[60%] h-[40vh] md:h-auto bg-black flex items-center justify-center relative shrink-0">
                {selectedPost.mediaType === "VIDEO" ? (
                  <video src={selectedPost.mediaUrl} controls autoPlay playsInline className="w-full h-full object-contain" />
                ) : (
                  <Image src={selectedPost.mediaUrl} alt="Post" fill className="object-contain" unoptimized={true} />
                )}
              </div>

              {/* CONTENIDO TEXTO */}
              <div className="flex-1 flex flex-col w-full h-full md:h-auto overflow-hidden bg-[#0F172A]">
                
                {/* HEADER DEL MODAL CON BOTÓN DE CERRAR RESPONSIVE */}
                <div className="p-5 border-b border-white/5 flex items-center justify-between shrink-0 bg-[#0F172A]">
                   <div className="flex items-center gap-3">
                       <div className="w-10 h-10 relative rounded-full overflow-hidden bg-white/5 border border-white/10">
                            <Image src={logo} alt="Logo" fill className="object-contain brightness-0 invert p-1" />
                       </div>
                       <div>
                        <h4 className="font-bold text-white text-sm">Gestión Global</h4>
                        <span className="text-xs text-blue-400 font-medium tracking-wide">@gestionglobal_sst</span>
                       </div>
                   </div>

                   {/* BOTÓN CERRAR (VISIBLE SIEMPRE AQUÍ) */}
                   <button 
                     onClick={closeModal} 
                     className="bg-white/10 hover:bg-red-500/20 text-slate-400 hover:text-red-400 p-2 rounded-full transition-colors"
                   >
                     <FaTimes size={20} />
                   </button>
                </div>

                {/* TEXTO (CAPTION) */}
                <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                    <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line font-light">{selectedPost.caption}</p>
                </div>

                {/* BOTÓN VER EN INSTAGRAM */}
                <div className="p-6 border-t border-white/5 bg-[#0F172A] shrink-0 pb-10 md:pb-6">
                   <a href={selectedPost.permalink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-4 bg-[#245CA7] hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(36,92,167,0.3)]">
                      <FaInstagram className="text-xl" /> Ver en Instagram
                   </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}