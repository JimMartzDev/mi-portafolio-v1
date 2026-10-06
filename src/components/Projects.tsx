import { projectsData } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section
      id="proyectos"
      className="py-20 px-4 sm:px-6 max-w-6xl mx-auto w-full"
    >
      <div className="mb-12 text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-text mb-3">
          Proyectos <span className="text-brand-accent">Destacados</span>
        </h2>
        <p className="text-brand-muted text-sm sm:text-base max-w-2xl">
          Selección de aplicaciones que demuestran la integración entre
          frontend, backend y bases de datos con código limpio y buenas
          prácticas.
        </p>
      </div>

      {/* Cuadrícula responsiva: 1 columna en móvil, 2 en tablet y 3 en pantallas grandes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
