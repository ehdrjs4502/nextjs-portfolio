"use client";
import styles from "@/app/_styles/components/SkillBox.module.css";
import { Tooltip } from "@mui/material";
import { ReactNode } from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

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

const customAnimation: any = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 20%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export default function SkillBox({ skills }: SkillBoxProps) {
  return (
    <div className={styles.box}>
      <Reveal keyframes={customAnimation} cascade damping={0.2}>
        {skills.map((data: any, index: number) => (
          <div key={index} className={styles.icon}>
            <Tooltip title={data.name} arrow placement="top">
              {data.icon}
            </Tooltip>
          </div>
        ))}
      </Reveal>
    </div>
  );
}
