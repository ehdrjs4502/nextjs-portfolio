"use client";
import styles from "@/app/_styles/components/ImgBox.module.css";
import Image from "next/image";
import { useState } from "react";

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
  return (
    <div
      className={styles.imgBox}
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseOut={handleMouseOut}
      style={transStyles.transform}
    >
      <div className={styles.overlay} style={transStyles.overlay}></div>
      <Image src="/images/profile-img.jpg" alt="프로필" width={200} height={250} style={{ borderRadius: "18px" }} />
    </div>
  );
}
