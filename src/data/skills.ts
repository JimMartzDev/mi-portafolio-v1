export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express", "REST APIs"],
  },
  {
    title: "Bases de Datos & Herramientas",
    skills: ["PostgreSQL", "Git", "GitHub", "VS Code", "Postman"],
  },
];
