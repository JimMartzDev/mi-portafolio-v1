export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Gestor de Tareas Full Stack",
    description:
      "Aplicación para administración de tareas y proyectos con autenticación, filtrado por estados y persistencia en base de datos.",
    tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/JimMartzDev",
    demoUrl: "https://ejemplo-demo.com",
  },
  {
    id: 2,
    title: "API REST de Comercio Electrónico",
    description:
      "Servicio backend robusto con endpoints para gestión de usuarios, catálogo de productos y órdenes de compra seguras.",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT", "Swagger"],
    githubUrl: "https://github.com/JimMartzDev",
  },
  {
    id: 3,
    title: "Dashboard de Finanzas Personales",
    description:
      "Interfaz dinámica para el seguimiento de ingresos y gastos con visualización de métricas y diseño responsivo.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/JimMartzDev",
    demoUrl: "https://ejemplo-demo.com",
  },
];
