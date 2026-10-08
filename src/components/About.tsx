export function About() {
  return (
    <section id="sobre-mi" className="py-8 px-4 max-w-5xl mx-auto w-full">
      <div className="bg-white/90 backdrop-blur-xs border border-emerald-100/90 rounded-2xl p-6 sm:p-8 shadow-lg shadow-emerald-950/5 hover:shadow-xl hover:border-emerald-300/80 transition-all">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-emerald-50">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
            Perfil Profesional
          </span>
          <span className="text-xs text-brand-muted font-medium">Colombia</span>
        </div>

        <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
          <p>
            Desarrolladora Full Stack con 5 años de trayectoria previa en
            análisis y control de calidad industrial . Esta experiencia aportó a
            mi perfil un enfoque metódico, disciplina estricta en la validación
            de procesos y alta atención al detalle aplicada a la arquitectura de
            software.
          </p>
          <p className="text-brand-muted text-xs sm:text-sm">
            Especializada en crear aplicaciones web mantenibles, conectando
            interfaces modulares con servicios backend bien estructurados y
            gestión confiable de bases de datos.
          </p>
        </div>
      </div>
    </section>
  );
}
