import developerImg from "../assets/developer.png";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-12 sm:pt-16 pb-10 px-4 sm:px-6 max-w-5xl mx-auto w-full"
    >
      {/* Resplandor suave de fondo */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="md:col-span-5 flex justify-center items-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
            <div className="absolute inset-0 bg-emerald-100/60 rounded-full blur-2xl -z-10" />
            <img
              src={developerImg}
              alt="Jimena - Desarrolladora Full Stack"
              className="w-full h-full object-contain select-none drop-shadow-sm"
              loading="eager"
            />
          </div>
        </div>

        <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-mono text-emerald-800 mb-5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Disponible para nuevos retos y proyectos</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-text mb-3 leading-tight">
            Hola, soy <span className="text-brand-accent">Jimena</span>
          </h1>

          <h2 className="text-base sm:text-lg font-semibold text-slate-700 mb-4 font-mono">
            Desarrolladora de Software Full Stack
          </h2>

          <p className="text-brand-muted text-sm sm:text-base leading-relaxed max-w-lg">
            Construyo aplicaciones web combinando interfaces dinámicas y
            accesibles con servicios backend estructurados y APIs RESTful
            eficientes.
          </p>
        </div>
      </div>
    </section>
  );
}
