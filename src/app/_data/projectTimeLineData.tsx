import { ReactNode } from "react";

// 데이터 타입 지정
export type Project = {
  date: string;
  name: string;
  projectType: ReactNode;
  summaryList: ReactNode[];
}[];

export const projectTimeLineData: Project = [
  {
    date: "2023. 06 ~ 08 (3개월)",
    name: "assemblog",
    projectType: <span key="1">팀 프로젝트(2명) / 프론트엔드 담당</span>,
    summaryList: [
      <span key="2">
        <strong>Next.js</strong>를 활용하여 개발한 2인 공동 블로그 개발 프로젝트
      </span>,
      <span key="3">
        <strong>SEO</strong> 최적화를 위해 <strong>SSG</strong> 활용
      </span>,
      <span key="4">
        <strong>TypeScript</strong>를 사용하여 컴파일 에러 방지
      </span>,
      <span key="5">
        <strong>마크다운 형식</strong>의 글 작성 구현
      </span>,
      <span key="6">
        <strong>ISR</strong>을 통해 블로그 게시글 업데이트
      </span>,
      <span key="7">
        <strong>Next/Image</strong>를 활용하여 이미지 사이즈 최적화
      </span>,
    ],
  },
  {
    date: "2023. 03 ~ 06 (4개월)",
    name: "Save Song!",
    projectType: <span key="8">개인 프로젝트</span>,
    summaryList: [
      <span key="9">
        <strong>React.js, TypeScript. Node.js</strong>를 활용한 개인 프로젝트
      </span>,
      <span key="10">
        <strong>last.fm Open API</strong>를 통한 노래 검색 기능 구현
      </span>,
      <span key="11">
        다른 사용자와 노래 공유할 수 있도록 <strong>사용자 검색 기능 및 팔로우 기능 구현</strong>
      </span>,
      <span key="12">
        <strong>Youtube API</strong>를 통해 노래 재생 기능 구현
      </span>,
      <span key="13">
        <strong>Python Selenium</strong>을 활용하여 tj 노래방 인기차트 크롤링 및 데이터베이스에 저장 기능 구현
      </span>,
    ],
  },
  {
    date: "2022. 09 ~ 12 (4개월)",
    name: "연도별 자연재해 시각화 웹 사이트",
    projectType: <span key="14">개인 프로젝트</span>,
    summaryList: [
      <span key="15">
        <strong>React.js, Node.js</strong>를 활용한 개인 프로젝트
      </span>,
      <span key="16">
        <strong>Apex.js 라이브러리</strong>를 통한 자연재해 피해량 차트 구현
      </span>,
      <span key="17">
        행정지도 SVG 를 활용해 시도별 <strong>자연재해 피해량 시각화</strong> 구현
      </span>,
      <span key="18">
        <strong>Python Selenium</strong>을 활용하여 국민재난안전포털 데이터 크롤링 및 DB 저장 구현
      </span>,
    ],
  },
];
