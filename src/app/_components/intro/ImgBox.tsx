"use client";
import styles from "@/app/_styles/components/intro/ImgBox.module.css";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ImgBox() {
  const [transStyles, setTransStyles] = useState({
    overlay: {
      backgroundPosition: "0%",
      filter: "opacity(0)",
    },
    transform: {
      transform: "perspective(350px) rotateY(0deg) rotateX(0deg)",
    },
  });

  // 마우스 움직임 이벤트
  const handleMouseMove = (e: any) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const rotateY = (-1 / 5) * x + 20;
    const rotateX = (4 / 30) * y - 20;

    setTransStyles({
      overlay: {
        backgroundPosition: `${x / 5 + y / 5}%`,
        filter: `opacity(${x / 200}) brightness(1.5)`,
      },
      transform: {
        transform: `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      },
    });
  };

  const handleMouseOut = () => {
    setTransStyles({
      overlay: {
        backgroundPosition: "0%",
        filter: "opacity(0)",
      },
      transform: {
        transform: "perspective(350px) rotateY(0deg) rotateX(0deg)",
      },
    });
  };

  // 나타내기 효과
  const animation = {
    hidden: {
      opacity: 0,
      y: 30,
    },

    visible: {
      opacity: 1,
      scale: [0, 1.2, 1.0], // 스케일 0에서 1.2로 갔다가 1로
      rotate: [270, 0], // 회전
      y: 0,
    },
  };

  return (
    <motion.div
      variants={animation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
    >
      <div
        className={styles.imgBox}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseOut={handleMouseOut}
        style={transStyles.transform}
      >
        <div className={styles.overlay} style={transStyles.overlay}></div>
        <Image src="/images/profile-img.jpg" alt="프로필" width={200} height={250} style={{ borderRadius: "18px" }} />
      </div>
    </motion.div>
  );
}
