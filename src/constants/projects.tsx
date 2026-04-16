export interface Project {
  key: number;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    key: 1,
    title: "Esteira Contábil",
    company: "Cria Digital",
    description: "Plataforma de gestão contábil com implementação de NF, NFes, CTe's e MDFe's. Atuação no frontend com Next.js e participação em novas funcionalidades do projeto legado.",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
  },
  {
    key: 2,
    title: "Convergefy",
    company: "Cria Digital",
    description: "Sistema omnichannel integrado com WhatsApp, Email e Facebook. Gestão de cargos de funcionários e controladoria através de gráficos de resolução de chamados.",
    technologies: ["React", "TypeScript", "Gráficos", "API Integrações"],
  },
  {
    key: 3,
    title: "FleetDesk",
    company: "Cria Digital",
    description: "Plataforma completa de gestão de frotas com implementação de auditoria e integração com Google Maps API para criação e otimização de rotas de entrega.",
    technologies: ["React", "TypeScript", "Google Maps API", "Gráficos"],
  },
  {
    key: 4,
    title: "GPTW - Great Place to Work",
    company: "Cria Digital",
    description: "Sistema de questionários com reformulação completa de interface. Desenvolvimento moderno com React e TypeScript para melhor experiência do usuário.",
    technologies: ["React", "TypeScript", "React Hook Form", "Validações"],
  },
  {
    key: 5,
    title: "Poulp",
    company: "Cria Digital",
    description: "Plataforma de gestão financeira inteligente com integração Open Finance. Utiliza IA para análise de custos e controle financeiro automático.",
    technologies: ["React", "TypeScript", "Open Finance API", "IA/Machine Learning"],
  },
  {
    key: 6,
    title: "DarcioFlix",
    company: "Cria Digital",
    description: "Plataforma educacional de vídeos aulas na área da medicina. Geração automática de certificados ao término de cada módulo pelo usuário.",
    technologies: ["React", "TypeScript", "Video Streaming", "Certificação Digital"],
  },
  {
    key: 7,
    title: "Bodetech",
    company: "Cria Digital",
    description: "Aplicação React Native com suporte offline utilizando Realm-DB. Desenvolvido em colaboração para garantir sincronização automática dos dados.",
    technologies: ["React Native", "Realm-DB", "Offline-First", "TypeScript"],
  },
  {
    key: 8,
    title: "Automotive Business Experience",
    company: "Cria Digital",
    description: "Site institucional para evento com foco em performance e carregamento otimizado. Consumo eficiente de conteúdo dinâmico.",
    technologies: ["HTML5", "JavaScript", "CSS", "Performance Optimization"],
  },
  {
    key: 9,
    title: "SISTUR - RS",
    company: "Procergs",
    description: "Plataforma de turismo do Rio Grande do Sul. Desafio de criar todos os componentes e layouts reutilizáveis com responsividade total.",
    technologies: ["HTML5", "CSS", "Bootstrap", "Responsividade"],
    link: "https://www.sistur.rs.gov.br/turismo/",
  },
  {
    key: 10,
    title: "DETRAN - RS",
    company: "Procergs",
    description: "Desenvolvimento de módulos reutilizáveis para equipe interna utilizar. Foco em qualidade, Bootstrap e boas práticas de frontend.",
    technologies: ["HTML5", "CSS", "Bootstrap"],
  },
];
