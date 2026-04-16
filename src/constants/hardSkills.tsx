import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaBootstrap, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill, RiNodejsFill } from "react-icons/ri";
import {
  SiStyledcomponents,
  SiMui,
  SiSass,
  SiShadcnui,
  SiInsomnia,
  SiPostcss,
  SiPostman,
  SiYarn,
  SiBun,
  SiExpo,
  SiMongodb,
} from "react-icons/si";
import {
  TbBrandTypescript,
  TbBrandMantine,
  TbBrandReactNative,
} from "react-icons/tb";
import { VscGithub, VscVscode } from "react-icons/vsc";

export interface HardSkill {
  key: number;
  text: string;
  icon: JSX.Element;
}

export const ArrayHardSkills: HardSkill[] = [
  { key: 1, text: "React", icon: <FaReact /> },
  { key: 2, text: "Next.js", icon: <RiNextjsLine /> },
  { key: 22, text: "React Native", icon: <TbBrandReactNative /> },
  { key: 23, text: "Expo", icon: <SiExpo /> },
  { key: 24, text: "Mongo DB", icon: <SiMongodb /> },
  { key: 17, text: "GitHub", icon: <VscGithub /> },
  { key: 4, text: "TypeScript", icon: <TbBrandTypescript /> },
  { key: 19, text: "Postman", icon: <SiPostman /> },
  { key: 16, text: "Insomnia", icon: <SiInsomnia /> },
  { key: 18, text: "VSCode", icon: <VscVscode /> },
  { key: 3, text: "JavaScript", icon: <IoLogoJavascript /> },
  { key: 7, text: "Tailwind CSS", icon: <RiTailwindCssFill /> },
  { key: 5, text: "HTML5", icon: <FaHtml5 /> },
  { key: 6, text: "CSS3", icon: <FaCss3Alt /> },
  { key: 8, text: "Styled-components", icon: <SiStyledcomponents /> },
  { key: 9, text: "Node.js", icon: <RiNodejsFill /> },
  { key: 20, text: "Yarn", icon: <SiYarn /> },
  { key: 21, text: "Bun", icon: <SiBun /> },
  { key: 15, text: "PostCSS", icon: <SiPostcss /> },
  { key: 10, text: "Bootstrap", icon: <FaBootstrap /> },
  { key: 11, text: "Sass", icon: <SiSass /> },
  { key: 12, text: "Material UI", icon: <SiMui /> },
  { key: 13, text: "Mantine", icon: <TbBrandMantine /> },
  { key: 14, text: "Shadcn UI", icon: <SiShadcnui size={15} /> },
];
