"use client";
import Link from "next/link";
import ImgBox from "./ImgBox";
import { motion } from "framer-motion";
import styles from "@/app/_styles/components/intro/InfoBox.module.css";

export default function InfoBox() {
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
        staggerChildren: 0.2, // 나오는 속도
        delay: 1, // 딜레이 시간
      },
    },
  };

  // 자식
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={styles.infoBox}>
      <ImgBox />
      <motion.div
        className={styles.info}
        variants={list}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          variants={item}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <span>Name</span>
          <strong>김동건</strong>
        </motion.div>
        <motion.div
          variants={item}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span>Phone</span>
          <strong className={styles.hover}>
            <Link href="tel:010-9243-4502">010-9243-4502</Link>
          </strong>
        </motion.div>
        <motion.div
          variants={item}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span>Mail</span>
          <strong className={styles.hover}>
            <Link href="mailto:ehdrjs4502@gmail.com">ehdrjs4502@gmail.com</Link>
          </strong>
        </motion.div>
        <motion.div
          variants={item}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span>Github</span>
          <strong className={styles.hover}>
            <Link href="https://github.com/ehdrjs4502" target="_blank">
              github.com/ehdrjs4502
            </Link>
          </strong>
        </motion.div>
      </motion.div>
    </div>
  );
}
