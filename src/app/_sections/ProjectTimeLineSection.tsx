"use client";
import Title from "@/app/_components/Title";
import styles from "@/app/_styles/sections/ProjectTimeLineSection.module.css";
import { projectTimeLineData } from "../_data/projectTimeLineData";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation: any = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 10%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export default function ProjectTimeLineSection() {
  return (
    <>
      <section className={styles.section}>
        <div>
          <Title
            title="프로젝트 타임라인"
            subTitle="가치 있는 개발자로 성장하기 위해 연도별로 진행한 프로젝트 목록입니다."
          />
          <div className={styles.box}>
            <Reveal keyframes={customAnimation} cascade damping={0.5}>
              {projectTimeLineData.map((project) => (
                <div className={styles.node}>
                  <div className={styles.date}>
                    <span>{project.date}</span>
                  </div>
                  <h2>{project.name}</h2>
                  <span className={styles.type}>{project.projectType}</span>
                  <ul>
                    {project.summaryList.map((text) => (
                      <li className={styles.summary}>{text}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
