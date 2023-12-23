import styles from "@/app/_styles/components/ScrollHint.module.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollHint() {
  const [scrollPosition, setScrollPosition] = useState<number>(0); // 현재 스크롤 위치
  const [isScroll, setIsScroll] = useState<boolean>(false); // 스크롤 한 번이라도 내릴시

  const updateScroll = () => {
    // 현재 스크롤 위치 업데이트 함수
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    setIsScroll(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  const animate = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: isScroll ? 0 : 4,
        duration: 0.6,
      },
    },
  };

  const animate2 = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      className={styles.mouse_scroll}
      variants={scrollPosition <= 200 ? animate : animate2}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.mouse}>
        <div className={styles.wheel}></div>
      </div>
      <div>
        <span className={`${styles.m_scroll_arrows} ${styles.unu}`}></span>
        <span className={`${styles.m_scroll_arrows} ${styles.doi}`}></span>
        <span className={`${styles.m_scroll_arrows} ${styles.trei}`}></span>
      </div>
    </motion.div>
  );
}
