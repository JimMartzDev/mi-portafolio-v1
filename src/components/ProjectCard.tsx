import type { ReactNode } from "react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

function getProjectIcon(title: string): ReactNode {
  if (
    title.toLowerCase().includes("api") ||
    title.toLowerCase().includes("backend")
  ) {
    return (
      <svg
        className="w-5 h-5 text-emerald-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14M12 5l7 7-7 7"
        />
      </svg>
    );
  }
  if (
    title.toLowerCase().includes("dashboard") ||
    title.toLowerCase().includes("finanzas")
  ) {
    return (
      <svg
        className="w-5 h-5 text-emerald-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    );
  }

  return (
    <svg
      className="w-5 h-5 text-emerald-700"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs hover:shadow-md hover:border-brand-accent/40 transition-all flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
            {getProjectIcon(project.title)}
          </div>

          {!project.githubUrl && (
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
              Repo Privado
            </span>
          )}
        </div>

        <h3 className="text-base font-bold text-brand-text mb-2 line-clamp-1">
          {project.title}
        </h3>
        <p className="text-brand-muted text-xs leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-auto">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono font-medium text-slate-600 hover:text-brand-accent transition-colors flex items-center gap-1"
          >
            Código <span>&rarr;</span>
          </a>
        ) : (
          <span className="text-[11px] font-mono text-slate-400">
            Confidencial
          </span>
        )}

        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver demo de ${project.title}`}
            className="w-8 h-8 rounded-full bg-brand-accent hover:bg-brand-accent-hover text-white flex items-center justify-center transition-transform hover:scale-105 shadow-xs shrink-0"
          >
            <svg
              className="w-3.5 h-3.5 fill-none stroke-current"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}
