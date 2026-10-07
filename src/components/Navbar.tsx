export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-border/60 bg-white/80 backdrop-blur-md px-4 sm:px-8 py-3.5">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-2 group">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-accent group-hover:scale-125 transition-transform" />
          <span className="font-semibold text-sm sm:text-base tracking-tight text-brand-text font-mono">
            JimMartz<span className="text-brand-muted">Dev</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider font-mono text-brand-muted">
          <a
            href="#sobre-mi"
            className="hover:text-brand-accent transition-colors"
          >
            Sobre Mí
          </a>
          <a
            href="#habilidades"
            className="hover:text-brand-accent transition-colors"
          >
            Habilidades
          </a>
          <a
            href="#proyectos"
            className="hover:text-brand-accent transition-colors"
          >
            Proyectos
          </a>
        </nav>

        <a
          href="#contacto"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent hover:bg-brand-accent-hover text-white text-xs sm:text-sm font-medium transition-all shadow-sm shadow-emerald-500/20 shrink-0"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
          <span>Contactar</span>
        </a>
      </div>
    </header>
  );
}
