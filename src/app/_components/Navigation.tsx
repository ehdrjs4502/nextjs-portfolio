// Navigation.tsx

import React, { useState } from "react";
import styles from "@/app/_styles/components/Navigation.module.css";

interface NavigationProps {
  refs: {
    introRef: React.RefObject<HTMLDivElement>;
    skillsRef: React.RefObject<HTMLDivElement>;
    timelineRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
  };
}

const Navigation: React.FC<NavigationProps> = ({ refs }) => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  // 해당 ref로 이동하는 함수
  const scrollToRef = (ref: React.RefObject<HTMLDivElement>, sectionName: string) => {
    ref.current?.scrollIntoView({ behavior: "smooth" }); // 해당 ref로 스무스하게 이동
    setSelectedSection(sectionName); // 선택된 섹션 저장
  };

  return (
    <nav className={styles.nav}>
      <span
        className={selectedSection === "intro" ? styles.selected : ""}
        onClick={() => scrollToRef(refs.introRef, "intro")}
      >
        Intro
      </span>
      <span
        className={selectedSection === "skills" ? styles.selected : ""}
        onClick={() => scrollToRef(refs.skillsRef, "skills")}
      >
        Skills
      </span>
      <span
        className={selectedSection === "timeline" ? styles.selected : ""}
        onClick={() => scrollToRef(refs.timelineRef, "timeline")}
      >
        Timeline
      </span>
      <span
        className={selectedSection === "projects" ? styles.selected : ""}
        onClick={() => scrollToRef(refs.projectsRef, "projects")}
      >
        Projects
      </span>
    </nav>
  );
};

export default Navigation;
