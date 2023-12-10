"use client";
import styles from "@/app/_styles/components/ProjectTimeLine.module.css";
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

export default function ProjectTimeLine() {
  return (
    <Reveal keyframes={customAnimation} cascade damping={0.5}>
      {projectTimeLineData.map((project, idx) => (
        <div key={idx} className={styles.node}>
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
  );
}
