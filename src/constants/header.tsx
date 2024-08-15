import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";

export const butns: BtnsHeader[] = [
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

export interface BtnsHeader {
  key: number;
  icon: any;
  link: string;
  tooltip: string;
  down: boolean;
}
