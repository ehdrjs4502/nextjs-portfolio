"use client"; // react-slick은 동적이기 때문에 클라이언트로 만들어야함
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectDetail from "./ProjectDetail";
import { ReactNode } from "react";

// 자식 컴포넌트에서도 타입 설정해야하니 export로 만들어줌
export type Project = {
  title: string;
  content: ReactNode;
  skills: string[];
  links: string[];
  imgs: string[];
};

export default function ProjectSlider() {
  const projectList: Project[] = [
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
      links: ["https://github.com/ehdrjs4502/assemblog", ""],
      imgs: ["img1", "img2"],
    },
  ];

  const settings = {
    dots: true, // 캐러셀 밑에 ... 을 표시할지
    infinite: true, // 슬라이드가 끝까지 가면 다시 처음으로 반복
    speed: 500, // 속도
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 개수
    slidesToScroll: 1, // 한 번에 넘어가는 슬라이드 개수
  };

  return (
    <div>
      <Slider {...settings}>
        {projectList.map((project, idx: number) => (
          <ProjectDetail key={idx} project={project} />
        ))}
      </Slider>
    </div>
  );
}
