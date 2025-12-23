"use client";

import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react"; 
import logo from "@/assets/img/logo/globuswhite.png";

// ==== Declaración global para TypeScript ====
declare global {
  interface Window {
    chatbase?: {
      (...args: any[]): void;
      q?: any[];
    };
    chatbaseConfig?: any;
  }
}

// === Configuración ===
const CHATBOT_ID = "w8KioDPJAl3hBxWR8jt7_";
const SCRIPT_URL = "https://www.chatbase.co/embed.min.js";
const BRAND_COLOR = "#FF8313";

const LOGO_URL = logo?.src || ""; 

export default function CustomChatbot() {
  const [isScriptInjected, setIsScriptInjected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // Ref para bloquear el observador mientras animamos el cierre manual
  const isTogglingRef = useRef(false);

  // 1. Verificar persistencia del script
  useEffect(() => {
    if (typeof window !== 'undefined' && document.getElementById("chatbase-script")) {
      setIsScriptInjected(true);
    }
  }, []);

  // 2. Observer para sincronización
  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new MutationObserver(() => {
      if (isTogglingRef.current) return;

      const chatWindow = document.getElementById("chatbase-bubble-window");
      if (!chatWindow) return;

      const isVisible = chatWindow.style.display !== "none";
      
      setIsOpen((prev) => {
        if (prev !== isVisible) return isVisible;
        return prev;
      });
    });

    const intervalId = setInterval(() => {
      const chatWindow = document.getElementById("chatbase-bubble-window");
      if (chatWindow) {
        observer.observe(chatWindow, { attributes: true, attributeFilter: ["style", "class"] });
        clearInterval(intervalId); 
      }
    }, 500);

    return () => {
      clearInterval(intervalId);
      observer.disconnect();
    };
  }, [isScriptInjected]);

  // ✅ CORRECCIÓN: Simplificamos para usar solo eventos nativos de React
  const toggleChatbot = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (typeof window === "undefined") return;

    isTogglingRef.current = true;

    // Inicialización Stub: Aseguramos que window.chatbase EXISTA
    if (!window.chatbase) {
      const cbStub: any = (...args: any[]) => {
        if (!cbStub.q) cbStub.q = [];
        cbStub.q.push(args);
      };
      window.chatbase = cbStub;
    }

    if (isOpen) {
      // CERRAR
      // ✅ CORRECCIÓN CRÍTICA: Quitamos el `?.` para evitar que Next.js use .call() internamente
      // Como ya garantizamos arriba que window.chatbase existe, esto es seguro.
      if (typeof window.chatbase === "function") {
        window.chatbase("close");
      }
      setIsOpen(false);
    } else {
      // ABRIR
      if (!isScriptInjected) {
        injectChatbaseScript();
        setIsScriptInjected(true);
      }
      
      // ✅ CORRECCIÓN CRÍTICA: Llamada directa sin `?.`
      if (typeof window.chatbase === "function") {
        window.chatbase("open");
      }
      setIsOpen(true);
    }

    // Desbloqueamos después de 1 segundo
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
    style.id = "chatbase-styles";
    style.innerHTML = `
      #chatbase-bubble-button { display: none !important; }
      
      /* Desktop */
      #chatbase-bubble-window { 
        z-index: 9999 !important; 
        bottom: 84px !important; 
        right: 24px !important;
        max-height: 700px !important;
      }

      /* Mobile Bottom Sheet */
      @media (max-width: 768px) {
        #chatbase-bubble-window {
          position: fixed !important;
          bottom: 0 !important;
          right: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 80vh !important; 
          border-radius: 20px 20px 0 0 !important;
          box-shadow: 0 -4px 20px rgba(0,0,0,0.15) !important;
          pointer-events: auto !important;
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
        fixed z-[2147483647] flex h-14 w-14 cursor-pointer items-center justify-center rounded-full text-white shadow-lg transition-all focus:outline-none overflow-hidden active:scale-95 select-none
        ${isOpen 
          // En móvil: Arriba a la derecha. Ajustado a top-6/right-6 para evitar área segura (notch/status bar)
          ? "bottom-6 right-6 max-md:bottom-auto max-md:top-6 max-md:right-6" 
          // Cerrado: Abajo a la derecha
          : "bottom-6 right-6 hover:scale-105 hover:shadow-xl"
        }
      `}
      style={{ 
        backgroundColor: BRAND_COLOR,
        pointerEvents: 'auto',
        WebkitTapHighlightColor: 'transparent'
      }}
      aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
    >
      {isOpen ? (
        <X size={28} />
      ) : (
        LOGO_URL ? (
          <img 
            src={LOGO_URL} 
            alt="Chat" 
            className="h-9 w-9 object-contain drop-shadow-sm filter brightness-0 invert" 
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