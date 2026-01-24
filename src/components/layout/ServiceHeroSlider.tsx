'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from '../../assets/img/servicio1.webp';
import img2 from '../../assets/img/servicio2.webp';
import img3 from '../../assets/img/servicio3.webp';
import img4 from '../../assets/img/servicio4.webp';
import img5 from '../../assets/img/servicio5.webp';
import img6 from '../../assets/img/servicio6.webp';
import img7 from '../../assets/img/servicio7.webp';
import img8 from '../../assets/img/servicio8.webp';
import img9 from '../../assets/img/servicio9.webp';

interface SlideData {
  id: number;
  image: any;
  title: string;
  category: string;
  code: string;
}

// DATOS TRADUCIDOS AL ESPAÑOL
const serviceSlides: SlideData[] = [
  { id: 1, image: img1, title: "Ritmo Activo", category: "Bienestar", code: "SYS-01" },
  { id: 2, image: img2, title: "Sinergia", category: "Capacitación", code: "TRN-02" }, // Antes "Team Power"
  { id: 3, image: img3, title: "Logística Pro", category: "Distribución", code: "LOG-03" },
  { id: 4, image: img4, title: "Zona Segura", category: "Seguridad", code: "SEC-04" },
  { id: 5, image: img5, title: "Rescate", category: "Auxilios", code: "MED-05" },
  { id: 6, image: img6, title: "En Campo", category: "Operación", code: "OPS-06" },
  { id: 7, image: img7, title: "Planta", category: "Industrial", code: "IND-07" },
  { id: 8, image: img8, title: "Personal Élite", category: "Equipo", code: "HR-08" }, // Antes "Elite Staff"
  { id: 9, image: img9, title: "Construcción", category: "Obras", code: "BLD-09" }, // Antes "Construct"
];

const ServiceHeroSlider: React.FC = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-[#0f172a] via-[#020617] to-black overflow-hidden relative selection:bg-cyan-500 selection:text-white">
      
      {/* LUZ AMBIENTAL (SPOTLIGHT) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      
      {/* Grid decorativo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0"></div>

      {/* Título */}
      <div className="container mx-auto px-4 mb-10 text-center relative z-10">
        {/* ETIQUETA TRADUCIDA */}
        <div className="inline-block mb-3 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-900/10 text-cyan-400 text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase shadow-[0_0_15px_rgba(34,211,238,0.1)]">
          Visión General
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter drop-shadow-2xl">
          Nuestra <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Acción</span>
        </h2>
      </div>

      <div className="container mx-auto relative z-10 px-4 md:px-0">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200, 
            modifier: 1.5,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="w-full h-[600px] py-10 custom-swiper-glow"
        >
          {serviceSlides.map((slide, index) => (
            <SwiperSlide 
              key={slide.id} 
              className="w-[300px] md:w-[400px] h-[450px] md:h-[500px] relative rounded-2xl overflow-hidden bg-[#0f172a] border border-white/10 group select-none shadow-2xl"
            >
              <img 
                src={slide.image.src} 
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90"></div>

              <div className="absolute inset-0 border-[1px] border-transparent group-hover:border-cyan-500/50 rounded-2xl transition-all duration-500 pointer-events-none z-20"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end h-full z-30">
                <span className="absolute top-4 right-4 text-5xl font-black text-white/5 font-mono group-hover:text-cyan-500/10 transition-colors">
                  0{index + 1}
                </span>

                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-bold text-white bg-blue-600/80 px-2 py-1 rounded backdrop-blur-sm uppercase tracking-wider">
                      {slide.category}
                    </span>
                    <span className="text-[10px] text-cyan-300/70 font-mono tracking-widest">
                      {slide.code}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white uppercase leading-none mb-3 drop-shadow-lg">
                    {slide.title}
                  </h3>
                  
                  <div className="w-12 h-1 bg-white/20 rounded-full group-hover:w-full group-hover:bg-cyan-500 transition-all duration-700"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev !text-white hover:!text-cyan-400 transition-colors bg-white/5 backdrop-blur-md rounded-full w-14 h-14 !hidden md:!flex items-center justify-center border border-white/10 hover:bg-white/10"></div>
          <div className="swiper-button-next !text-white hover:!text-cyan-400 transition-colors bg-white/5 backdrop-blur-md rounded-full w-14 h-14 !hidden md:!flex items-center justify-center border border-white/10 hover:bg-white/10"></div>
        </Swiper>
      </div>
      
      {/* --- LÍNEA SEPARADORA --- */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent z-20"></div>

      <style jsx global>{`
        .custom-swiper-glow .swiper-slide-shadow-left,
        .custom-swiper-glow .swiper-slide-shadow-right {
          background-image: linear-gradient(to bottom, rgba(2, 6, 23, 0.6), rgba(2, 6, 23, 0.95)) !important;
        }

        .custom-swiper-glow .swiper-slide-active {
          box-shadow: 0 20px 50px -12px rgba(6, 182, 212, 0.25);
          border-color: rgba(34, 211, 238, 0.3);
          z-index: 50;
        }

        .custom-swiper-glow .swiper-pagination-bullet {
          background: white;
          opacity: 0.2;
        }
        .custom-swiper-glow .swiper-pagination-bullet-active {
          background: #22d3ee;
          opacity: 1;
          width: 20px;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default ServiceHeroSlider;