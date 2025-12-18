"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaInstagram, FaExternalLinkAlt, FaArrowRight, FaPlay, FaClone, FaTimes } from "react-icons/fa";

// Tu URL oficial de Behold
const INSTAGRAM_FEED_URL = "https://feeds.behold.so/7h145nVZyZOfwQmsbbAi"; 

export default function InstagramFeed() {
  // CORRECCIÓN AQUÍ: <any[]> permite que el array reciba datos después
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Estado para saber qué post está abierto (null = ninguno)
  const [selectedPost, setSelectedPost] = useState<any>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(INSTAGRAM_FEED_URL);
        const data = await response.json();
        
        // Corrección de estructura de datos
        const validPosts = data.posts ? data.posts : data;
        if (Array.isArray(validPosts)) {
            setPosts(validPosts.slice(0, 4));
        }
      } catch (error) {
        console.error("Error cargando Instagram:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Función para cerrar el modal
  const closeModal = () => setSelectedPost(null);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* === HEADER === */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 mb-2"
            >
              <span className="p-2 bg-pink-50 rounded-lg text-pink-600">
                <FaInstagram className="text-xl" />
              </span>
              <span className="text-sm font-bold tracking-wider text-pink-600 uppercase">
                @globuscargo_
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              Lo último en <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">Instagram</span>
            </h2>
          </div>

          <a 
            href="https://instagram.com/globuscargo_"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-bold transition-all hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-pink-500/30"
          >
            Ver Feed Completo
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* === GRID DE POSTS === */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {loading ? (
            [1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-slate-100 rounded-3xl animate-pulse"></div>
            ))
          ) : (
            posts.map((post: any, index) => {
              const imageUrl = post.mediaType === "VIDEO" ? post.thumbnailUrl : post.mediaUrl;
              const TypeIcon = post.mediaType === "VIDEO" ? FaPlay : (post.children ? FaClone : FaInstagram);

              return (
                <motion.div
                  key={post.id}
                  layoutId={`post-${post.id}`} // Animación mágica al abrir
                  onClick={() => setSelectedPost(post)} // AL CLIC: Abrir Modal
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative block aspect-square rounded-3xl overflow-hidden cursor-pointer bg-slate-100 shadow-sm hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300 z-10"
                >
                  <Image
                    src={imageUrl} 
                    alt="Instagram Post"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    unoptimized={true}
                  />

                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md text-white p-2 rounded-full text-xs z-10 border border-white/10">
                    <TypeIcon />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <p className="text-slate-200 text-xs font-medium line-clamp-2 mb-2 leading-relaxed">
                      {post.caption || "Ver contenido"}
                    </p>
                    <div className="flex items-center gap-2 text-[#f58220] font-bold text-xs uppercase tracking-wider">
                      {post.mediaType === "VIDEO" ? <FaPlay className="text-[10px]" /> : <FaExternalLinkAlt />} 
                      {post.mediaType === "VIDEO" ? "Reproducir" : "Ver Foto"}
                    </div>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>
      </div>

      {/* === MODAL / LIGHTBOX (REPRODUCTOR) === */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-md"
            onClick={closeModal} // Cerrar al hacer clic fuera
          >
            {/* Botón cerrar */}
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 text-white/70 hover:text-white hover:bg-white/10 p-3 rounded-full transition-all"
            >
              <FaTimes className="text-3xl" />
            </button>

            {/* Contenido del Modal */}
            <motion.div 
              layoutId={`post-${selectedPost.id}`}
              className="relative w-full max-w-4xl max-h-[90vh] bg-black rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()} // Evitar cerrar al hacer clic dentro
            >
              
              {/* LADO IZQUIERDO: MEDIA (VIDEO O FOTO) */}
              <div className="flex-1 bg-black flex items-center justify-center relative min-h-[50vh] md:min-h-[70vh]">
                {selectedPost.mediaType === "VIDEO" ? (
                  // REPRODUCTOR DE VIDEO
                  <video 
                    src={selectedPost.mediaUrl} 
                    controls 
                    autoPlay 
                    className="w-full h-full max-h-[85vh] object-contain"
                  />
                ) : (
                  // VISOR DE IMAGEN
                  <div className="relative w-full h-full min-h-[50vh]">
                    <Image
                      src={selectedPost.mediaUrl}
                      alt="Post Full"
                      fill
                      className="object-contain"
                      unoptimized={true}
                    />
                  </div>
                )}
              </div>

              {/* LADO DERECHO: INFO (Solo en Desktop para no tapar el video en móvil) */}
              <div className="w-full md:w-80 bg-white p-6 flex flex-col overflow-y-auto max-h-[30vh] md:max-h-auto">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-full overflow-hidden">
                     {/* Aquí podrías poner el logo de Globus si quieres */}
                     <FaInstagram className="w-full h-full p-2 text-slate-400"/>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">@globuscargo_</h4>
                    <span className="text-xs text-slate-500">Instagram Oficial</span>
                  </div>
                </div>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 whitespace-pre-line">
                  {selectedPost.caption}
                </p>

                <a 
                  href={selectedPost.permalink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 w-full py-3 bg-[#f58220] text-white font-bold rounded-xl hover:bg-orange-600 transition-colors text-sm"
                >
                  <FaInstagram /> Ver en Instagram App
                </a>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}