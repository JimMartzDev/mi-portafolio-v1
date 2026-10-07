import { skillsData } from "../data/skills";

export function Skills() {
  return (
    <section
      id="habilidades"
      className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto w-full"
    >
      <div className="mb-8 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
          Habilidades{" "}
          <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Técnicas
          </span>
        </h2>
        <p className="text-brand-muted text-xs sm:text-sm">
          Tecnologías y herramientas que utilizo para construir aplicaciones web
          full stack.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {skillsData.map((category) => (
          <div
            key={category.title}
            className="bg-brand-card/70 border border-brand-border/80 rounded-2xl p-5 backdrop-blur-sm shadow-lg flex flex-col justify-between"
          >
            <h3 className="text-base font-semibold text-white mb-4 border-b border-brand-border/50 pb-2">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2.5 py-1 rounded-lg bg-[#070913]/60 border border-brand-border text-brand-muted hover:text-white hover:border-brand-purple/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
