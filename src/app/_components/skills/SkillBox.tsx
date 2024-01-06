"use client";
import styles from "@/styles/components/skills/SkillBox.module.css";
import { Tooltip } from "@mui/material";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type Skill = {
  name: string;
  icon: ReactNode;
};

type Etc = {
  name: string;
  icon: ReactNode;
};

// SkillBoxProps 타입 정의
type SkillBoxProps = {
  skills: (Skill | Etc)[];
};

export default function SkillBox({ skills }: SkillBoxProps) {
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
      },
    },
  };

  // 자식
  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div className={styles.box} variants={list} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      {skills.map((data: any, index: number) => (
        <Tooltip key={index} title={data.name} arrow placement="top">
          <motion.div
            key={index}
            className={styles.icon}
            variants={item}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {data.icon}
          </motion.div>
        </Tooltip>
      ))}
    </motion.div>
  );
}
