import type { ReactNode } from "react";
import { skillsData } from "../data/skills";

const categoryStyles: Record<
  string,
  { iconBg: string; iconColor: string; icon: ReactNode }
> = {
  Frontend: {
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  "Backend & APIs": {
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
  },
  "Bases de Datos & Herramientas": {
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
  },
};

export function Skills() {
  return (
    <section
      id="habilidades"
      className="relative py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto w-full"
    >
      <div className="absolute top-1/3 -right-16 w-72 h-72 bg-emerald-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="mb-8 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-text mb-2">
          Habilidades <span className="text-brand-accent">Técnicas</span>
        </h2>
        <p className="text-brand-muted text-xs sm:text-sm">
          Tecnologías y herramientas que utilizo para construir aplicaciones web
          full stack.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillsData.map((category) => {
          const style = categoryStyles[category.title] || {
            iconBg: "bg-slate-100",
            iconColor: "text-slate-600",
            icon: null,
          };

          return (
            <div
              key={category.title}
              className="bg-white border border-slate-200/70 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-brand-accent/40 transition-all flex flex-col justify-between"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${style.iconBg} ${style.iconColor}`}
                >
                  {style.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-brand-text">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 hover:text-brand-accent hover:border-brand-accent/50 hover:bg-emerald-50/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
