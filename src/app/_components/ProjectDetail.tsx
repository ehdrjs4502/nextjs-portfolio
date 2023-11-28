import styles from "@/app/_styles/components/ProjectDetail.module.css";
import { Project } from "./ProjectSlider"; // 부모에서 지정한 타입 불러오기
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import { Tooltip } from "@mui/material";

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
      <div className={styles.slideImageBox}>
        <Slider {...settings}>
          {project.imgs.map((img, idx: number) => (
            <div key={idx}>
              <div className="slide-img">
                <Image key={idx} src={`/images/${img}`} sizes="(max-width: 768px) 100vw" fill alt="이미지" />
              </div>
            </div>
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
        <div className={styles.linkBox}>
          <h4>링크</h4>
          <Link href={project.links[0]} target="_blank">
            <Tooltip title="깃허브로 이동" arrow placement="top">
              <GitHubIcon />
            </Tooltip>
          </Link>
          <Link href={project.links[1]} target="_blank">
            <Tooltip title="페이지로 이동" arrow placement="top">
              <HomeIcon />
            </Tooltip>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .slide-img {
          position: relative;
          width: 100%;
          height: 300px;
        }

        @media (max-width: 768px) {
          .slide-img {
            height: 240px;
          }
        }
      `}</style>
    </div>
  );
}
