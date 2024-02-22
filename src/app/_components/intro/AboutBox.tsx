"use client";
import { motion } from "framer-motion";
import styles from "@/styles/components/intro/AboutBox.module.css";

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
        항상 <strong className={styles.strongBlue}>긍정적인 사고</strong>로 어떤 어려움도{" "}
        <strong>포기하지 않고 프로젝트를 진행</strong>하는 개발자입니다.
      </motion.span>
      <motion.span variants={item}>
        꾸준히 <strong>코딩테스트 문제</strong>를 해결하여 <strong className={styles.strongOrange}>코딩 실력</strong>과{" "}
        <strong className={styles.strongBlue}>문제 해결 능력</strong>을 기르고 있는 개발자입니다.
      </motion.span>
    </motion.div>
  );
}
