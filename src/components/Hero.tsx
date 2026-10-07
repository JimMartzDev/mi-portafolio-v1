export function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-8 sm:pt-16 pb-12 sm:pb-20 px-4 sm:px-6 flex flex-col items-center text-center w-full max-w-4xl mx-auto overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-brand-purple/15 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-brand-card/90 border border-brand-border text-xs sm:text-sm text-brand-muted mb-6 max-w-[90%] text-center">
        <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
        <span className="truncate sm:overflow-visible">
          Disponible para nuevos retos y proyectos
        </span>
      </div>

      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 wrap-break-word">
        Hola, soy{" "}
        <span className="bg-linear-to-r from-purple-400 via-brand-purple to-cyan-400 bg-clip-text text-transparent">
          Jimena
        </span>
      </h1>

      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white/90 mb-4 px-2">
        Desarrolladora de Software Full Stack
      </h2>

      <p className="max-w-xl text-brand-muted text-sm sm:text-base leading-relaxed mb-8 px-2">
        Construyo aplicaciones web integrales combinando interfaces modernas,
        dinámicas y accesibles con servicios backend estructurados y APIs
        RESTful eficientes.
      </p>
    </section>
  );
}
