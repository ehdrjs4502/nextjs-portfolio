"use client"; // react-slick은 동적이기 때문에 클라이언트로 만들어야함
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectDetail from "./ProjectDetail";

// 자식 컴포넌트에서도 타입 설정해야하니 export로 만들어줌
export type Project = {
  title: string;
  content: string;
  skills: string[];
  github: string;
  imgs: string[];
};

export default function ProjectSlider() {
  const projectList: Project[] = [
    {
      title: "assemblog",
      content: `프로젝트를 통해 Next.js의 핵심 개념 및 기능을 습득했습니다. 주로 SSG와 SSR을 통한 SEO 최적화, ISR을 활용한 동적 게시글 업데이트, 그리고 Next/Image를 이용한 이미지 최적화에 집중했습니다. 백엔드와의 협업을 통해 클라이언트와 서버 렌더링의 협업 방식을 익히고, 프로젝트에서 발생한 다양한 문제를 해결하며 성장했습니다. 이 경험은 웹 개발 및 프론트엔드 기술에 대한 실질적인 이해를 제공했으며, 문제 해결과 기술 습득을 통한 성장 기회였습니다.`,
      skills: ["Next.js", "typescript"],
      github: "https://github.com/ehdrjs4502/assemblog",
      imgs: ["img1", "img2"],
    },
  ];
  const settings = {
    dots: true, // 캐러셀 밑에 ... 을 표시할지
    infinite: true, // 슬라이드가 끝까지 가면 다시 처음으로 반복
    speed: 500, // 속도
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 개수
    slidesToScroll: 1, // 한 번에 넘어가는 슬라이드 개수
    arrows: true,
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
