"use client";
import styles from "@/app/_styles/components/TimeLine.module.css";
import { timeLineData } from "../_data/timeLineData";
import { motion } from "framer-motion";

export default function ProjectTimeLine() {
  // 나타내기 효과
  // 부모
  const list = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div>
      {timeLineData.map((project, idx) => (
        <motion.div
          key={idx}
          className={styles.node}
          variants={list}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
        >
          <div className={styles.date}>
            <span>{project.date}</span>
          </div>
          <h2>{project.title}</h2>
          {project.subTitle && <span className={styles.type}>{project.subTitle}</span>}
          <ul>
            {project.summaryList.map((text, idx) => (
              <li key={idx} className={styles.summary}>
                {text}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
