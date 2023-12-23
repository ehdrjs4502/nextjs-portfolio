import { ReactNode } from "react";
import HtmlIcon from "../../../public/svgs/html5-color.svg";
import CssIcon from "../../../public/svgs/css3-color.svg";
import JsIcon from "../../../public/svgs/javascript-color.svg";
import NextjsIcon from "../../../public/svgs/nextdotjs-color.svg";
import ReactjsIcon from "../../../public/svgs/react-color.svg";
import NodejsIcon from "../../../public/svgs/nodedotjs-color.svg";
import NotionIcon from "../../../public/svgs/notion-color.svg";
import FigmaIcon from "../../../public/svgs/figma-color.svg";
import GithubIcon from "../../../public/svgs/github-color.svg";

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
