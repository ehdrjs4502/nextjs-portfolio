import styles from "@/app/_styles/components/projects/ProjectDetail.module.css";
import { Project } from "../../_data/projectDetailsData"; // 데이터에서 지정한 타입 불러오기
import Image from "next/image";
import Slider from "react-slick";
import GithubLink from "../links/GithubLink";
import PageLink from "../links/PageLink";
import { Tooltip } from "@mui/material";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowForwardIos, ArrowBackIosNew } from "@mui/icons-material";

// props 타입 부모에 있는 Project 타입으로 설정
type ProjectProps = {
  project: Project;
};

export default function ProjectDetail({ project }: ProjectProps) {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const slickRef = useRef<Slider>(null); // 슬라이더에 쓸거니 <Slider> 타입

  const previous = useCallback(() => slickRef.current?.slickPrev(), []);
  const next = useCallback(() => slickRef.current?.slickNext(), []);

  // ssr에서 말고 클라이언트 측에서 렌더링 되고 나서 스타일 렌더링하도록 설정
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const settings = {
    dots: true, // 캐러셀 밑에 ... 을 표시할지
    infinite: true, // 슬라이드가 끝까지 가면 다시 처음으로 반복
    speed: 500, // 속도
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 개수
    slidesToScroll: 1, // 한 번에 넘어가는 슬라이드 개수
    draggable: false, // 마우스 드래그로 슬라이드 전환 비활성화
    autoplay: true, // 자동으로 슬라이드 넘기기
    autoplaySpeed: 2000, // 자동으로 넘기는 속도
    arrows: false,
  };

  return (
    <div className={theme === "dark" ? styles.boxDark : styles.box}>
      <div className={styles.slideImageBox}>
        <span className={styles.hint}>이미지에 마우스를 올릴시 슬라이드가 멈춥니다.</span>
        <Slider {...settings} ref={slickRef}>
          {project.imgs.map((img, idx: number) => (
            <div key={idx}>
              <div className={styles.slideImage}>
                <Image key={idx} src={`/images/${img}`} sizes="(max-width: 768px) 100vw" fill alt="이미지" />
              </div>
            </div>
          ))}
        </Slider>
        <div className={styles.arrowBox}>
          <div onClick={previous}>
            <ArrowBackIosNew />
          </div>
          <div onClick={next}>
            <ArrowForwardIos />
          </div>
        </div>
      </div>
      <div className={styles.infoBox}>
        <h1 className={styles.title}>{project.title}</h1>
        <h4 className={styles.subTitle}>{project.subTitle}</h4>
        <p className={styles.content}>{project.content}</p>
        <div className={styles.skillBox}>
          <h4>사용 기술</h4>
          {project.skills.map((skill, index: number) => (
            <Tooltip key={index} title={skill.name} arrow placement="top">
              <div className={styles.skill}>{skill.icon}</div>
            </Tooltip>
          ))}
        </div>
        <div className={styles.linkBox}>
          <h4>링크</h4>
          <GithubLink url={project.links[0]} />
          {project.links[1] && <PageLink url={project.links[1]} />}
        </div>
      </div>
    </div>
  );
}
