"use client";
import styles from "@/app/_styles/components/TimeLine.module.css";
import { timeLineData } from "../../_data/timeLineData";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ProjectTimeLine() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // ssr에서 말고 클라이언트 측에서 렌더링 되고 나서 스타일 렌더링하도록 설정
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
          <div className={theme === "dark" ? styles.dateDark : styles.date}>
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
