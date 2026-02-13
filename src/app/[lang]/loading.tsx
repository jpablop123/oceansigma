export default function Loading() {
  return (
    // Z-INDEX 100 asegura que tape todo mientras carga
    <div className="fixed inset-0 z-[100] flex min-h-screen w-full flex-col items-center justify-center bg-[#020617]">
      
      {/* 1. Efecto de luz de fondo (Cian / Índigo) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>

      {/* 2. Spinner Técnico */}
      <div className="relative flex h-20 w-20 items-center justify-center mb-8">
        {/* Anillo exterior (Lento) */}
        <div className="absolute h-full w-full animate-spin rounded-full border-[3px] border-slate-800 border-t-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.3)]" style={{ animationDuration: '3s' }}></div>
        
        {/* Anillo medio (Rápido, dirección contraria) */}
        <div className="absolute h-14 w-14 animate-spin rounded-full border-[3px] border-slate-800 border-b-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.3)]" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        
        {/* Núcleo central pulsante */}
        <div className="h-4 w-4 bg-white rounded-full animate-ping opacity-20"></div>
      </div>

      {/* 3. Texto de carga "Hacker Style" */}
      <div className="flex flex-col items-center gap-2 font-mono text-xs tracking-[0.2em] relative z-10">
        <span className="text-cyan-400 font-bold animate-pulse drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
          INITIALIZING SYSTEM
        </span>
        <div className="flex gap-1 text-slate-500">
          <span>LOADING ASSETS</span>
          <span className="animate-bounce delay-75">.</span>
          <span className="animate-bounce delay-150">.</span>
          <span className="animate-bounce delay-200">.</span>
        </div>
      </div>

    </div>
  );
}