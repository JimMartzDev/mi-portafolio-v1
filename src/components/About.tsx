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
            Aunque estoy dando mis primeros pasos en el ámbito profesional,
            compenso la falta de experiencia con dedicación constante, capacidad
            de autoaprendizaje y ganas de construir software que aporte valor
            real.
          </p>
          <p>
            Me apasiona el panorama completo: desde bocetar e implementar
            componentes visuales limpios hasta diseñar endpoints RESTful y
            gestionar bases de datos.
          </p>
        </div>
      </div>
    </section>
  );
}
