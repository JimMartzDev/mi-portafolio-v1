export function Navbar() {
  return (
    <header className="border-b border-brand-border/60 bg-[#070913]/80 backdrop-blur-md sticky top-0 z-50 px-4 sm:px-8 py-3.5 w-full">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
        {/* Logo */}
        <a
          href="#inicio"
          className="font-bold text-base sm:text-lg tracking-tight text-white shrink-0"
        >
          JimMartz<span className="text-brand-purple">Dev</span>
        </a>

        {/* Enlaces de navegación: OCULTOS en móvil (hidden) y VISIBLES en escritorio (md:flex) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-brand-muted font-medium">
          <a href="#inicio" className="hover:text-white transition-colors">
            Inicio
          </a>
          <a href="#sobre-mi" className="hover:text-white transition-colors">
            Sobre Mí
          </a>
          <a href="#habilidades" className="hover:text-white transition-colors">
            Habilidades
          </a>
          <a href="#proyectos" className="hover:text-white transition-colors">
            Proyectos
          </a>
        </nav>

        {/* Botón Contactarme: protegido con shrink-0 para que nunca se deforme ni empuje la pantalla */}
        <a
          href="#contacto"
          className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-brand-accent to-indigo-600 hover:from-purple-600 hover:to-indigo-500 text-white font-medium text-xs sm:text-sm transition-all shadow-md shadow-brand-purple/20 shrink-0"
        >
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
          <span>Contactame</span>
        </a>
      </div>
    </header>
  );
}
