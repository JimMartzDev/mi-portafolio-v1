function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col overflow-x-hidden">
      {/* Barra de navegación minimalista y fija */}
      <header className="border-b border-brand-border px-4 py-3 bg-brand-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <span className="font-bold text-base sm:text-lg tracking-tight text-white">
            JimMartz<span className="text-brand-accent">Dev</span>
          </span>

          <nav className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-brand-muted">
            <a
              href="#proyectos"
              className="hover:text-brand-accent transition-colors"
            >
              Proyectos
            </a>
            <a
              href="#habilidades"
              className="hover:text-brand-accent transition-colors"
            >
              Habilidades
            </a>
            <a
              href="#contacto"
              className="hover:text-brand-accent transition-colors"
            >
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section adaptativo */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-12 sm:py-20">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-accent/10 text-brand-accent border border-brand-accent/30 rounded-full mb-6">
          Disponible para oportunidades laborales
        </span>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 break-words">
          Desarrolladora <span className="text-brand-accent">Full Stack</span>
        </h1>

        <p className="max-w-xl text-brand-muted text-sm sm:text-base md:text-lg mb-8 px-2">
          Construyendo aplicaciones web modernas, escalables y con código
          limpio.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none">
          <button className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-brand-accent text-white font-semibold hover:bg-brand-accent-hover transition-colors shadow-lg shadow-brand-accent/20 cursor-pointer">
            Ver proyectos
          </button>
          <button className="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-brand-border text-brand-text font-medium hover:bg-brand-card transition-colors cursor-pointer">
            Contáctame
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
