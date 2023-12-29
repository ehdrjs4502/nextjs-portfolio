import React, { useEffect, useState } from "react";
import styles from "@/app/_styles/components/Navigation.module.css";
import { useTheme } from "next-themes";

interface NavigationProps {
  refs: {
    introRef: React.RefObject<HTMLDivElement>;
    skillsRef: React.RefObject<HTMLDivElement>;
    timelineRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
  };
}

const Navigation: React.FC<NavigationProps> = ({ refs }) => {
  const { theme, setTheme } = useTheme();
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [isClick, setIsClick] = useState<boolean>(false);

  // 해당 ref로 이동하는 함수
  const scrollToRef = (ref: React.RefObject<HTMLDivElement>, sectionName: string) => {
    ref.current?.scrollIntoView({ behavior: "smooth" }); // 해당 ref로 스무스하게 이동
    setSelectedSection(sectionName); // 선택된 섹션 저장
  };

  return (
    <div
      className={`${styles.box} ${
        isClick && theme === "light" ? styles.showBox : isClick && theme === "dark" ? styles.showBoxDark : ""
      }`}
    >
      {/* 햄버거 아이콘 */}
      <div className={styles.hamburger} onClick={() => setIsClick(!isClick)}>
        {isClick ? "✕" : "☰"}
      </div>

      {/* 네비게이션 바 */}
      <nav className={`${styles.nav} ${isClick ? styles.showNav : ""}`}>
        <button
          className={selectedSection === "intro" ? styles.selected : ""}
          onClick={() => scrollToRef(refs.introRef, "intro")}
        >
          Intro
        </button>
        <button
          className={selectedSection === "skills" ? styles.selected : ""}
          onClick={() => scrollToRef(refs.skillsRef, "skills")}
        >
          Skills
        </button>
        <button
          className={selectedSection === "timeline" ? styles.selected : ""}
          onClick={() => scrollToRef(refs.timelineRef, "timeline")}
        >
          Timeline
        </button>
        <button
          className={selectedSection === "projects" ? styles.selected : ""}
          onClick={() => scrollToRef(refs.projectsRef, "projects")}
        >
          Projects
        </button>
        <button
          onClick={
            theme === "light"
              ? () => {
                  setTheme("dark");
                }
              : () => {
                  setTheme("light");
                }
          }
        >
          {theme === "light" ? "다크" : "라이트"}
        </button>
      </nav>
    </div>
  );
};

export default Navigation;
