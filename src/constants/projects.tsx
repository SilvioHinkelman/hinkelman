export interface Project {
  key: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    key: 1,
    title: "Projeto 1",
    description: "Descrição do seu primeiro projeto e o que você desenvolveu",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://seu-projeto-1.com",
    github: "https://github.com/seu-usuario/projeto-1",
  },
  {
    key: 2,
    title: "Projeto 2",
    description: "Descrição do seu segundo projeto e as funcionalidades principais",
    technologies: ["Next.js", "GraphQL", "Node.js"],
    link: "https://seu-projeto-2.com",
    github: "https://github.com/seu-usuario/projeto-2",
  },
  {
    key: 3,
    title: "Projeto 3",
    description: "Descrição do seu terceiro projeto e impacto gerado",
    technologies: ["React Native", "Expo", "Firebase"],
    link: "https://seu-projeto-3.com",
    github: "https://github.com/seu-usuario/projeto-3",
  },
];
