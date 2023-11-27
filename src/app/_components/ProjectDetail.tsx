import styles from "@/app/_styles/components/ProjectDetail.module.css";
import { Project } from "./ProjectSlider"; // 부모에서 지정한 타입 불러오기
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

// props 타입 부모에 있는 Project 타입으로 설정
type ProjectProps = {
  project: Project;
};

export default function ProjectDetail({ project }: ProjectProps) {
  const settings = {
    dots: true, // 캐러셀 밑에 ... 을 표시할지
    infinite: true, // 슬라이드가 끝까지 가면 다시 처음으로 반복
    speed: 500, // 속도
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 개수
    slidesToScroll: 1, // 한 번에 넘어가는 슬라이드 개수
    draggable: false, // 마우스 드래그로 슬라이드 전환 비활성화
    autoplay: true, // 자동으로 슬라이드 넘기기
    autoplaySpeed: 2000, // 자동으로 넘기는 속도
  };
  return (
    <div className={styles.box}>
      <div style={{ width: "400px" }}>
        <Slider {...settings}>
          {project.imgs.map((img, idx: number) => (
            <Image key={idx} src={`/images/${img}`} width={380} height={320} alt="이미지" />
          ))}
        </Slider>
      </div>
      <div className={styles.infoBox}>
        <h1>{project.title}</h1>
        <p className={styles.content}>{project.content}</p>
        <div>
          <h4>사용 기술</h4>
          {project.skills.join(", ")}
        </div>
        <div>
          <h4>링크</h4>
          <Link href={project.links[0]} target="_blank">
            깃허브
          </Link>
          <Link href={project.links[1]} target="_blank">
            페이지
          </Link>
        </div>
      </div>
    </div>
  );
}
