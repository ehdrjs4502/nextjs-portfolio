import { ReactNode } from "react";

// 데이터 타입 지정
export type Project = {
  title: string;
  content: ReactNode;
  skills: string[];
  links: string[];
  imgs: string[];
};

export const projectDetailsData: Project[] = [
  {
    title: "assemblog",
    content: (
      <span>
        2인 공동 개발 블로그입니다. <strong>Next.js</strong>의 <strong>Page Router</strong>를 사용하여 개발하였습니다.
        주로 <strong>SSG</strong>와 <strong>SSR</strong>을 통한 <strong>SEO 최적화</strong>, <strong>ISR</strong>을
        활용한 동적 게시글 업데이트, 그리고 <strong>Next/Image</strong>를 이용한 <strong>이미지 최적화</strong>에
        집중했습니다.
      </span>
    ),
    skills: ["Next.js", "typescript"],
    links: ["https://github.com/ehdrjs4502/assemblog", "https://assemblog.vercel.app/"],
    imgs: ["assemblog1.png", "assemblog2.png", "assemblog3.png", "assemblog4.png"],
  },
];
