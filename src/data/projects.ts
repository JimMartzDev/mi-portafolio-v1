export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Sitio Corporativo - CRJ Construcciones",
    description:
      "Sitio web comercial desarrollado para empresa de construcción, enfocado en presencia digital, catálogo de proyectos/servicios y diseño adaptado a dispositivos móviles.",
    tags: ["React", "TypeScript", "TailwindCSS"],
    demoUrl: "https://crjconstrucciones.com/",
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
