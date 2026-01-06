// src/utils/config.ts

// --- CONFIGURACIÓN DE ADUANAS GLOBUS CARGO ---

// Límite en USD para no pagar impuestos.
// HOY: 50 (Por decreto de emergencia).
// NORMALMENTE: 200 (Si se cae la ley, cambias este número y listo).
export const TAX_FREE_LIMIT = 50; 

// Interruptor para mostrar avisos de emergencia en la web
// true = Muestra alertas rojas/amarillas sobre el decreto.
// false = Oculta las alertas (todo normal).
export const IS_EMERGENCY_MODE = true;

// Texto formateado para usar en párrafos (Ej: "USD $50")
export const TAX_LIMIT_TEXT = `USD $${TAX_FREE_LIMIT}`;