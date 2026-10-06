import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="bg-brand-card border border-brand-border rounded-xl p-6 flex flex-col justify-between hover:border-brand-accent/50 transition-colors">
      <div>
        <h3 className="text-xl font-bold text-brand-text mb-2">
          {project.title}
        </h3>

        <p className="text-brand-muted text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Lista de tecnologías (Tags) */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md bg-brand-bg text-brand-muted border border-brand-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Enlaces a código y demo */}
      <div className="flex items-center gap-4 pt-4 border-t border-brand-border/50 text-sm">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-text hover:text-brand-accent transition-colors font-medium flex items-center gap-1"
        >
          Código en GitHub &rarr;
        </a>

        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-accent hover:text-brand-accent-hover transition-colors font-medium flex items-center gap-1"
          >
            Demo en vivo &rarr;
          </a>
        )}
      </div>
    </article>
  );
}
