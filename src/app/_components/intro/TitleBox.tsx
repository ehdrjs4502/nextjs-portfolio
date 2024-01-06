"use client";
import { motion } from "framer-motion";
import styles from "@/styles/components/intro/TitleBox.module.css";

export default function TitleBox() {
  const animation = {
    hidden: {
      opacity: 0,
      y: "20%",
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.div
      className={styles.titleBox}
      variants={animation}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h4>안녕하세요!</h4>
      <h5>
        <strong className={styles.strongBlue}>프론트엔드 개발자</strong> 김동건입니다.
      </h5>
    </motion.div>
  );
}
