import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";

export interface ButtonsHeaderType {
  key: number;
  icon: any;
  link: string;
  tooltip: string;
  down: boolean;
}

export interface Tasks {
  key: number;
  text: string;
}

export interface EmployeerType {
  key: number;
  name: string;
  position: string;
  enterDate: Date;
  finishDate: Date;
  tasks: Tasks[];
}

export const ButtonsHeader: ButtonsHeaderType[] = [
  {
    key: 1,
    icon: <FaFileDownload size={20} />,
    link: "/curriculum/SilvioHinkelman.pdf",
    tooltip: "Download do curriulum",
    down: true,
  },
  {
    key: 2,

    icon: <IoLogoLinkedin size={20} />,
    link: "https://www.linkedin.com/in/silviodesenvolvedorfrontend/",
    tooltip: "Linkedin",
    down: false,
  },
  {
    key: 3,

    icon: <BsGithub size={20} />,
    link: "https://github.com/SilvioHinkelman",
    tooltip: "GitHub",
    down: false,
  },
];

export const TypeAnimation = [
  { text: "React" },
  { text: "Next" },
  { text: "React Native" },
  { text: "Node" },
];

const concatenatedText = TypeAnimation.map((item) => item.text).join(" | ");

export const animationSequence = TypeAnimation.map((item) => [
  item.text,
  2000,
]).flat();
animationSequence.push(concatenatedText);

export const Jobs: EmployeerType[] = [
  {
    key: 1,
    name: "Cria Digital",
    position: "Desenvolvedor de front-end Jr.",
    enterDate: new Date("2021-03-01T00:00:00"),
    finishDate: new Date(),
    tasks: [
      { key: 1, text: "Tecnologias utilizadas: React - React Native - Next" },
      {
        key: 2,
        text: "Front-end: HTML5, CSS3, JavaScript, TypeScript, ReactJs, Mantine, Bootstrap, Styled-components",
      },
      {
        key: 3,
        text: "Mobile: React Native, Expo, Firebase, native-base, Realm BD off-line.",
      },
    ],
  },
  {
    key: 2,
    name: "PROCERGS",
    position: "Desenvolvedor Front-End - estagiário",
    enterDate: new Date("2021-06-01T00:00:00"),
    finishDate: new Date("2022-06-01T00:00:00"),
    tasks: [
      { key: 1, text: "Foi aonde aprendi o básico de HTML, CSS." },
      { key: 2, text: "Criar telas responsivas utilizando Angular e Ionic." },
    ],
  },
  {
    key: 3,
    name: "Bela Vista com prod e serv postais",
    position: "Motorista",
    enterDate: new Date("2004-01-10T00:00:00"),
    finishDate: new Date("2021-02-31T00:00:00"),
    tasks: [
      {
        key: 1,
        text: "Minha primeira experiência com carteira assinada, comecei como office-boy.",
      },
      {
        key: 2,
        text: "Meu segunda cargo de motorista foi aonde comecei a trabalhar diretamente com o atendimento ao cliente.",
      },
      {
        key: 3,
        text: "Além de fazer as coletas passei a visitar clientes para implementação de automatização e integração do sistema que trabalhavamos com sistemas do cliente, reduzindo o tempo de trabalho significamente.",
      },
      {
        key: 4,
        text: "Foi aonde me apaixonei pelo poder so software e procurei minha primeira formação superior.",
      },
    ],
  },
];
