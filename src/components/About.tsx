export function About() {
  return (
    <section
      id="sobre-mi"
      className="py-12 px-4 sm:px-6 max-w-4xl mx-auto w-full"
    >
      <div className="bg-brand-card/70 border border-brand-border/80 rounded-2xl p-6 sm:p-10 backdrop-blur-sm shadow-xl">
        {/* Cabecera del perfil */}
        <div className="flex items-center gap-4 mb-6">
          <div>
            <h3 className="text-lg font-bold text-white">Sobre mi</h3>

            <p className="text-xs text-brand-muted">Colombia</p>
          </div>
        </div>

        {/* Texto de presentación */}
        <div className="space-y-4 text-brand-muted text-sm sm:text-base leading-relaxed">
          <p>
            Desarrolladora con 5 años de trayectoria previa en análisis y
            control de calidad industrial, experiencia que aportó a mi perfil un
            enfoque metódico, disciplina en la validación de procesos y alta
            atención al detalle.
          </p>
          <p>
            Especializada en el ecosistema JavaScript/TypeScript, construyo
            aplicaciones web completas: desde interfaces intuitivas, responsivas
            y modulares con React y Tailwind CSS, hasta servicios backend con
            Node.js, APIs RESTful y persistencia de datos mediante ORMs.
            Enfocada en la creación de software estable, bien estructurado y con
            valor de negocio medible.
          </p>
        </div>
      </div>
    </section>
  );
}
