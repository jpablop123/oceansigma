"use client";

import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react"; 
import logo from "@/assets/img/logo/globuswhite.png";

declare global {
  interface Window {
    chatbase?: {
      (...args: any[]): void;
      q?: any[];
    };
    chatbaseConfig?: any;
  }
}

const CHATBOT_ID = "w8KioDPJAl3hBxWR8jt7_";
const SCRIPT_URL = "https://www.chatbase.co/embed.min.js";
const BRAND_COLOR = "#FF8313";
const LOGO_URL = logo?.src || ""; 

export default function CustomChatbot() {
  const [isScriptInjected, setIsScriptInjected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // Usamos esta referencia para evitar conflictos cuando nosotros mismos damos click
  const isTogglingRef = useRef(false);

  // 1. Verificar si el script ya existe
  useEffect(() => {
    if (typeof window !== 'undefined' && document.getElementById("chatbase-script")) {
      setIsScriptInjected(true);
    }
  }, []);

  // 2. EL OBSERVER MEJORADO (Detecta cierre real)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new MutationObserver(() => {
      if (isTogglingRef.current) return;

      const chatWindow = document.getElementById("chatbase-bubble-window");
      if (!chatWindow) return;

      // ✅ SOLUCIÓN CLAVE: Usamos getComputedStyle
      // Esto lee la verdad absoluta de si el elemento se ve o no,
      // incluso si Chatbase lo oculta con clases CSS y no con estilos inline.
      const computed = window.getComputedStyle(chatWindow);
      const isVisible = 
        computed.display !== "none" && 
        computed.visibility !== "hidden" && 
        computed.opacity !== "0";
      
      setIsOpen((prev) => {
        if (prev !== isVisible) return isVisible;
        return prev;
      });
    });

    const intervalId = setInterval(() => {
      const chatWindow = document.getElementById("chatbase-bubble-window");
      if (chatWindow) {
        // Observamos atributos para detectar cambios al instante
        observer.observe(chatWindow, { 
          attributes: true, 
          attributeFilter: ["style", "class", "hidden"] 
        });
        clearInterval(intervalId); 
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
      observer.disconnect();
    };
  }, [isScriptInjected]);

  // 3. Función para Abrir/Cerrar manualmente
  const toggleChatbot = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    
    if (typeof window === "undefined") return;

    isTogglingRef.current = true;

    if (!window.chatbase) {
      const cbStub: any = (...args: any[]) => {
        if (!cbStub.q) cbStub.q = [];
        cbStub.q.push(args);
      };
      window.chatbase = cbStub;
    }

    if (isOpen) {
      // === CERRANDO ===
      setIsOpen(false); // 1. Cambiamos icono YA
      
      if (typeof window.chatbase === "function") {
        window.chatbase("close"); // 2. Ordenamos cierre
      }

      // 3. Forzamos ocultar visualmente para evitar parpadeos
      const chatWindow = document.getElementById("chatbase-bubble-window");
      if (chatWindow) {
        chatWindow.style.display = "none";
      }

    } else {
      // === ABRIENDO ===
      setIsOpen(true);
      
      if (!isScriptInjected) {
        injectChatbaseScript();
        setIsScriptInjected(true);
      }
      
      if (typeof window.chatbase === "function") {
        window.chatbase("open");
      }
      
      // Restauramos display por si lo habíamos forzado a none
      const chatWindow = document.getElementById("chatbase-bubble-window");
      if (chatWindow) {
        chatWindow.style.display = "block";
      }
    }

    // Liberamos el observer después de la animación
    setTimeout(() => {
      isTogglingRef.current = false;
    }, 1000);
  };

  const injectChatbaseScript = () => {
    window.chatbaseConfig = {
      chatbotId: CHATBOT_ID,
      ui: {
        fontSize: 16,
        primaryColor: BRAND_COLOR,
        backgroundColor: "#FFFFFF",
        chatIcon: LOGO_URL,
      },
      autoOpen: false, 
    };

    const style = document.createElement("style");
    style.innerHTML = `
      #chatbase-bubble-button { display: none !important; }
      
      /* Desktop */
      #chatbase-bubble-window { 
        z-index: 2147483640 !important; 
        bottom: 84px !important; 
        right: 24px !important;
        max-height: 700px !important;
        transition: opacity 0.3s ease, transform 0.3s ease !important;
      }

      /* Mobile */
      @media (max-width: 768px) {
        #chatbase-bubble-window {
          position: fixed !important;
          bottom: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 85dvh !important; 
          border-radius: 20px 20px 0 0 !important;
          box-shadow: 0 -4px 30px rgba(0,0,0,0.15) !important;
          top: auto !important; 
          right: 0 !important;
        }
      }
    `;
    document.head.appendChild(style);

    const script = document.createElement("script");
    script.id = "chatbase-script";
    script.src = SCRIPT_URL;
    script.setAttribute("chatbotId", CHATBOT_ID);
    script.defer = true;
    document.body.appendChild(script);
  };

  return (
    <button
      onClick={toggleChatbot}
      className={`
        fixed z-[2147483647] flex h-14 w-14 cursor-pointer items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 focus:outline-none active:scale-90 select-none
        ${isOpen 
          // Estado ABIERTO:
          ? "bottom-auto top-4 right-4 md:bottom-6 md:right-6 md:top-auto bg-gray-900" 
          // Estado CERRADO:
          : "bottom-6 right-6 hover:scale-105 hover:shadow-xl"
        }
      `}
      style={{ 
        // Si está abierto gris oscuro (#333), si cerrado Naranja Globus
        backgroundColor: isOpen ? "#333" : BRAND_COLOR,
        WebkitTapHighlightColor: 'transparent'
      }}
      aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
    >
      {isOpen ? (
        <X size={28} className="animate-in fade-in zoom-in duration-200" />
      ) : (
        LOGO_URL ? (
          <img 
            src={LOGO_URL} 
            alt="Chat" 
            className="h-9 w-9 object-contain drop-shadow-sm filter brightness-0 invert animate-in fade-in zoom-in duration-200" 
            style={{ filter: "none" }} 
            draggable={false}
          />
        ) : (
          <div className="h-6 w-6 bg-white rounded-full opacity-50" />
        )
      )}
    </button>
  );
}