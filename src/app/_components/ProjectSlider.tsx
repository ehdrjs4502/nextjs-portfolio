"use client"; // react-slick은 동적이기 때문에 클라이언트로 만들어야함
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectDetail from "./ProjectDetail";
import { projectDetailsData } from "../_data/projectDetailsData"; // 데이터 불러오기

export default function ProjectSlider() {
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
        {projectDetailsData.map((project, idx: number) => (
          <ProjectDetail key={idx} project={project} />
        ))}
      </Slider>
    </div>
  );
}
