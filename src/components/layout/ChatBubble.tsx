"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

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

export default function CustomChatbot() {
  const [isScriptInjected, setIsScriptInjected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // 1. Verificar al cargar si el script ya existe
  useEffect(() => {
    if (typeof window !== "undefined" && document.getElementById("chatbase-script")) {
      setIsScriptInjected(true);
    }
  }, []);

  // 2. Observer para sincronizar estado si el usuario cierra el chat desde la "X" interna
  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new MutationObserver(() => {
      const chatWindow = document.getElementById("chatbase-bubble-window");
      if (!chatWindow) return;

      const isVisible = chatWindow.style.display !== "none";

      setIsOpen((prev) => (prev !== isVisible ? isVisible : prev));
    });

    const intervalId = setInterval(() => {
      const chatWindow = document.getElementById("chatbase-bubble-window");
      if (chatWindow) {
        observer.observe(chatWindow, {
          attributes: true,
          attributeFilter: ["style", "class"],
        });
        clearInterval(intervalId);
      }
    }, 500);

    return () => {
      clearInterval(intervalId);
      observer.disconnect();
    };
  }, [isScriptInjected]);

  const toggleChatbot = () => {
    if (typeof window === "undefined") return;

    // Stub básico si aún no existe window.chatbase
    if (!window.chatbase) {
      const cbStub: any = (...args: any[]) => {
        if (!cbStub.q) cbStub.q = [];
        cbStub.q.push(args);
      };
      window.chatbase = cbStub;
    }

    if (isOpen) {
      // Cerrar
      window.chatbase?.("close");
      setIsOpen(false);
    } else {
      // Abrir
      if (!isScriptInjected) {
        injectChatbaseScript();
        setIsScriptInjected(true);
      }
      window.chatbase?.("open");
      setIsOpen(true);
    }
  };

  const injectChatbaseScript = () => {
    if (typeof window === "undefined") return;

    // Configuración previa
    window.chatbaseConfig = {
      chatbotId: CHATBOT_ID,
      ui: {
        fontSize: 16,
        primaryColor: BRAND_COLOR,
        backgroundColor: "#FFFFFF",
      },
      autoOpen: false,
    };

    // Estilos para ocultar la burbuja original y ajustar el widget
    const style = document.createElement("style");
    style.id = "chatbase-styles";
    style.innerHTML = `
      #chatbase-bubble-button { 
        display: none !important; 
      }
      
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
        }
      }
    `;
    document.head.appendChild(style);

    // Script de Chatbase
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
      className="fixed bottom-6 right-6 z-[10000] flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl focus:outline-none"
      style={{ backgroundColor: BRAND_COLOR }}
      aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
    >
      {isOpen ? <X size={28} /> : <MessageCircle size={28} fill="white" />}
    </button>
  );
}