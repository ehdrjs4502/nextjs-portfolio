"use client";
import { motion } from "framer-motion";
import styles from "@/app/_styles/components/AboutBox.module.css";

export default function AboutBox() {
  // 나타내기 효과
  // 부모
  const list = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren", // 자식들을 차례대로 나타냄
        staggerChildren: 0.4, // 나오는 속도
        delay: 2.3, // 딜레이 시간
      },
    },
  };

  // 자식
  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div className={styles.aboutBox} variants={list} initial="hidden" animate="visible">
      <h5>About Me</h5>
      <motion.span variants={item}>
        <strong className={styles.strongBlue}>React.js</strong>, <strong style={{ color: "#3C3C3C" }}>Next.js</strong>를
        활용하여 <strong>프론트엔드 개발</strong>을 수행하는 개발자
      </motion.span>
      <motion.span variants={item}>
        팀과 개인을 가리지 않고, 여러 프로젝트 경험으로 <strong style={{ color: "#5EA8FF" }}>실력</strong>과{" "}
        <strong style={{ color: "#FF4F4F" }}>실무 감각</strong>을 쌓아가는 개발자
      </motion.span>
    </motion.div>
  );
}
