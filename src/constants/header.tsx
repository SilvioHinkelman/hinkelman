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
  500,
]).flat();
animationSequence.push(concatenatedText);
