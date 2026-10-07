export function About() {
  return (
    <section id="sobre-mi" className="py-8 px-4 max-w-5xl mx-auto w-full">
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-brand-accent">
            Perfil Profesional
          </span>
          <span className="text-xs text-brand-muted font-mono">Colombia</span>
        </div>

        <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
          <p>
            Desarrolladora Full Stack con{" "}
            <strong className="text-brand-text font-semibold">
              5 años de trayectoria previa en análisis y control de calidad
              industrial
            </strong>
            . Esta experiencia aportó a mi perfil un enfoque metódico,
            disciplina estricta en la validación de procesos y alta atención al
            detalle aplicada a la arquitectura de software.
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
