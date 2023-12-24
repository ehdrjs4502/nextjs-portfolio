import { ReactNode } from "react";

// 데이터 타입 지정
export type Project = {
  date: string;
  title: string;
  subTitle: ReactNode;
  summaryList: ReactNode[];
}[];

export const timeLineData: Project = [
  {
    date: "2023. 11",
    title: "정보처리산업기사 취득",
    subTitle: <span>한국산업인력공단</span>,
    summaryList: [],
  },
  {
    date: "2023. 06 ~ 08 (3개월)",
    title: "assemblog",
    subTitle: <span>팀 프로젝트(2명) / 프론트엔드 담당</span>,
    summaryList: [
      <span>
        <strong>Next.js</strong>를 활용하여 개발한 2인 공동 블로그 개발 프로젝트
      </span>,
      <span>
        <strong>SEO</strong> 최적화를 위해 <strong>SSG</strong> 활용
      </span>,
      <span>
        <strong>TypeScript</strong>를 사용하여 컴파일 에러 방지
      </span>,
      <span>
        <strong>마크다운 형식</strong>의 글 작성 구현
      </span>,
      <span>
        <strong>ISR</strong>을 통해 블로그 게시글 업데이트
      </span>,
      <span>
        <strong>Next/Image</strong>를 활용하여 이미지 사이즈 최적화
      </span>,
    ],
  },
  {
    date: "2023. 03 ~ 06 (4개월)",
    title: "Save Song!",
    subTitle: <span>개인 프로젝트</span>,
    summaryList: [
      <span>
        <strong>React.js, TypeScript. Node.js</strong>를 활용한 개인 프로젝트
      </span>,
      <span>
        <strong>last.fm Open API</strong>를 통한 노래 검색 기능 구현
      </span>,
      <span>
        다른 사용자와 노래 공유할 수 있도록 <strong>사용자 검색 기능 및 팔로우 기능 구현</strong>
      </span>,
      <span>
        <strong>Youtube API</strong>를 통해 노래 재생 기능 구현
      </span>,
      <span>
        <strong>Python Selenium</strong>을 활용하여 tj 노래방 인기차트 크롤링 및 데이터베이스에 저장 기능 구현
      </span>,
    ],
  },
  {
    date: "2022. 09 ~ 12 (4개월)",
    title: "연도별 자연재해 시각화 웹 사이트",
    subTitle: <span>개인 프로젝트</span>,
    summaryList: [
      <span>
        <strong>React.js, Node.js</strong>를 활용한 개인 프로젝트
      </span>,
      <span>
        <strong>Apex.js 라이브러리</strong>를 통한 자연재해 피해량 차트 구현
      </span>,
      <span>
        행정지도 SVG 를 활용해 시도별 <strong>자연재해 피해량 시각화</strong> 구현
      </span>,
      <span>
        <strong>Python Selenium</strong>을 활용하여 국민재난안전포털 데이터 크롤링 및 DB 저장 구현
      </span>,
    ],
  },
  {
    date: "2019. 03 ~",
    title: "인하공업전문대학 진학",
    subTitle: "",
    summaryList: [<strong>컴퓨터정보과 / 학점 3.9 (4.5)</strong>],
  },
];
