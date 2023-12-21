"use client";
import { motion } from "framer-motion";
import styles from "@/app/_styles/components/TitleBox.module.css";

export default function TitleBox() {
  return (
    <motion.div
      className={styles.titleBox}
      initial={{ opacity: 0, y: "10%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: "100%" }}
    >
      <h4>안녕하세요!</h4>
      <h5>
        <strong className={styles.strongBlue}>프론트엔드 개발자</strong> 김동건입니다.
      </h5>
    </motion.div>
  );
}
