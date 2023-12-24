import { ReactNode } from "react";
import NextjsIcon from "../../../public/svgs/nextdotjs-color.svg";
import TSicon from "../../../public/svgs/typescript-color.svg";
import ReactjsIcon from "../../../public/svgs/react-color.svg";
import NodejsIcon from "../../../public/svgs/nodedotjs-color.svg";

// 데이터 타입 지정
export type Project = {
  title: string;
  subTitle: string;
  content: ReactNode;
  skills: { name: string; icon: ReactNode }[];
  links: string[];
  imgs: string[];
};

export const projectDetailsData: Project[] = [
  {
    title: "assemblog",
    subTitle: "팀프로젝트(2명) / 프론트엔드 담당",
    content: (
      <span>
        2인 공동 개발 블로그입니다. <strong>Next.js</strong>의 <strong>Page Router</strong>를 활용하여 개발하였습니다.
        주로 <strong>SSG</strong>와 <strong>SSR</strong>을 통한 <strong>SEO 최적화</strong>, <strong>ISR</strong>을
        활용한 동적 게시글 업데이트, 그리고 <strong>Next/Image</strong>를 이용한 <strong>이미지 최적화</strong>에
        집중했습니다.
      </span>
    ),
    skills: [
      {
        name: "Next.js",
        icon: <NextjsIcon />,
      },
      {
        name: "TypeScript",
        icon: <TSicon />,
      },
    ],
    links: ["https://github.com/ehdrjs4502/assemblog", "https://assemblog.vercel.app/"],
    imgs: ["assemblog1.png", "assemblog2.png", "assemblog3.png", "assemblog4.png"],
  },
  {
    title: "Save Song!",
    subTitle: "개인 프로젝트",
    content: (
      <span>
        노래방에서 부를 노래 저장 및 공유하는 웹사이트입니다. <strong>React.js</strong>와 <strong>Node.js</strong>를
        활용하여 개발였습니다. <strong>크롤링</strong>을 통한 노래방 Top 100 <strong>데이터 저장 기능</strong>,{" "}
        <strong>사용자 검색 및 팔로우 기능</strong>을 통한 노래 공유 기능, <strong>노래 검색, 저장, 삭제 기능</strong>과{" "}
        <strong>유튜브 API</strong>를 통해 <strong>노래 재생 기능</strong>을 구현했습니다.
      </span>
    ),
    skills: [
      {
        name: "React.js",
        icon: <ReactjsIcon />,
      },
      {
        name: "TypeScript",
        icon: <TSicon />,
      },
      {
        name: "Node.js",
        icon: <NodejsIcon />,
      },
    ],
    links: ["https://github.com/ehdrjs4502/save-song"],
    imgs: ["savesong1.png", "savesong2.png", "savesong3.png", "savesong4.png", "savesong5.png"],
  },
];
