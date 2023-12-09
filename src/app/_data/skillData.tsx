import { ReactNode } from "react";
import HtmlIcon from "../../../public/icons/html5-color.svg";
import CssIcon from "../../../public/icons/css3-color.svg";
import JsIcon from "../../../public/icons/javascript-color.svg";
import NextjsIcon from "../../../public/icons/nextdotjs-color.svg";
import ReactjsIcon from "../../../public/icons/react-color.svg";
import NodejsIcon from "../../../public/icons/nodedotjs-color.svg";
import NotionIcon from "../../../public/icons/notion-color.svg";
import FigmaIcon from "../../../public/icons/figma-color.svg";
import GithubIcon from "../../../public/icons/github-color.svg";

type Skill = {
  name: string;
  icon: ReactNode;
};

type Etc = {
  name: string;
  icon: ReactNode;
};

export type SkillData = {
  skills: Skill[];
  etcs: Etc[];
};

export const skillData: SkillData = {
  skills: [
    {
      name: "Javascript",
      icon: <JsIcon />,
    },
    {
      name: "React.js",
      icon: <ReactjsIcon />,
    },
    {
      name: "Next.js",
      icon: <NextjsIcon />,
    },
    {
      name: "HTML 5",
      icon: <HtmlIcon />,
    },
    {
      name: "CSS 3",
      icon: <CssIcon />,
    },
    {
      name: "Node.js",
      icon: <NodejsIcon />,
    },
  ],
  etcs: [
    {
      name: "Github",
      icon: <GithubIcon />,
    },
    {
      name: "Figma",
      icon: <FigmaIcon />,
    },
    {
      name: "Notion",
      icon: <NotionIcon />,
    },
  ],
};
