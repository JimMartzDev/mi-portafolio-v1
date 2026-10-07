import { projectsData } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section
      id="proyectos"
      className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto w-full"
    >
      <div className="mb-8 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-text mb-2">
          Proyectos <span className="text-brand-accent">Destacados</span>
        </h2>
        <p className="text-brand-muted text-xs sm:text-sm">
          Selección de aplicaciones que demuestran arquitectura frontend, APIs
          backend y persistencia de datos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
