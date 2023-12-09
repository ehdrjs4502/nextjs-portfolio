import styles from "@/app/_styles/components/SkillBox.module.css";
import { Tooltip } from "@mui/material";
import { ReactNode } from "react";

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
  return (
    <div className={styles.box}>
      {skills.map((data: any, index: number) => (
        <div key={index} className={styles.icon}>
          <Tooltip title={data.name} arrow placement="top">
            {data.icon}
          </Tooltip>
        </div>
      ))}
    </div>
  );
}
