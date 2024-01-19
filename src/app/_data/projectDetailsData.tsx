import { ReactNode } from "react";
import NextjsIcon from "@/svgs/nextdotjs-color.svg";
import TSicon from "@/svgs/typescript-color.svg";
import ReactjsIcon from "@/svgs/react-color.svg";
import NodejsIcon from "@/svgs/nodedotjs-color.svg";
import MySQLIcon from "@/svgs/mysql-color.svg";
import SeleniumIcon from "@/svgs/selenium-color.svg";
import { useTheme } from "next-themes";
import useMount from "../hooks/useMount";

// 데이터 타입 지정
export type Project = {
  title: string;
  subTitle: string;
  content: ReactNode;
  skills: { name: string; icon: ReactNode }[];
  links: string[];
  imgs: string[];
};

type DarkModeIconProps = {
  lightIcon: React.ReactNode;
  darkIcon: React.ReactNode;
};

// 테마에 따라서 아이콘 변경
const DarkModeIcon: React.FC<DarkModeIconProps> = ({ lightIcon, darkIcon }) => {
  const mounted = useMount();
  const { theme } = useTheme();

  if (!mounted) return null;

  return theme === "dark" ? darkIcon : lightIcon;
};

export const projectDetailsData: Project[] = [
  {
    title: "mallba",
    subTitle: "팀프로젝트 (FE: 1명, BE: 1명) / 프론트엔드 담당",
    content: (
      <span>
        <strong>Web3 기반</strong> 쇼핑몰입니다. <strong>React.js</strong>를 활용하여 개발하였습니다.{" "}
        <strong>메타마스크</strong>를 통한{" "}
        <strong>
          로그인<strong> 및 </strong>결제 기능 구현
        </strong>
        을 통해 보안과 신뢰성을 강화했습니다. 또한 <strong>결제 기능</strong>은 <strong>스마트 컨트랙트</strong>를
        기반으로 구축되어 투명하고 조작할 수 없는 거래 과정을 제공하도록 하였습니다.
      </span>
    ),
    skills: [
      {
        name: "React.js",
        icon: <ReactjsIcon />,
      },
    ],
    links: ["https://github.com/djLee77/web3-front", "https://mallba.netlify.app/"],
    imgs: ["mallba1.gif", "mallba2.gif", "mallba3.gif", "mallba4.gif", "mallba5.gif", "mallba6.gif"],
  },
  {
    title: "assemblog",
    subTitle: "팀프로젝트 (FE : 1명, BE : 1명) / 프론트엔드 담당",
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
        icon: <DarkModeIcon lightIcon={<NextjsIcon />} darkIcon={<NextjsIcon fill="#ffffff" />} />,
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
      {
        name: "MySQL",
        icon: <MySQLIcon />,
      },
      {
        name: "Selenium",
        icon: <SeleniumIcon />,
      },
    ],
    links: ["https://github.com/ehdrjs4502/save-song"],
    imgs: ["savesong1.png", "savesong2.png", "savesong3.png", "savesong4.png", "savesong5.png"],
  },
  {
    title: "연도별 자연재해 시각화 웹",
    subTitle: "개인 프로젝트",
    content: (
      <span>
        <strong>국민재난안전포털</strong>에서 제공하는 자연재해 데이터를 크롤링하여 시각화하는 웹 사이트입니다.{" "}
        <strong>React.js</strong>와 <strong>Node.js</strong>를 활용하여 개발였습니다. <strong>행정지도 SVG</strong>와{" "}
        <strong>Apex.js 라이브러리</strong>를 활용하여 자연재해 피해량 시각화를 구현하였습니다.
      </span>
    ),
    skills: [
      {
        name: "React.js",
        icon: <ReactjsIcon />,
      },
      {
        name: "Node.js",
        icon: <NodejsIcon />,
      },
      {
        name: "MySQL",
        icon: <MySQLIcon />,
      },
      {
        name: "Selenium",
        icon: <SeleniumIcon />,
      },
    ],
    links: ["https://github.com/ehdrjs4502/sw-project"],
    imgs: ["natural-disaster1.png", "natural-disaster2.png"],
  },
];
