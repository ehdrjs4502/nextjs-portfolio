import React, { useEffect, useState } from "react";
import styles from "@/app/_styles/components/Navigation.module.css";
import { useTheme } from "next-themes";
import { LightMode, DarkMode } from "@mui/icons-material";

interface NavigationProps {
  refs: {
    introRef: React.RefObject<HTMLDivElement>;
    skillsRef: React.RefObject<HTMLDivElement>;
    timelineRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
  };
}

const Navigation: React.FC<NavigationProps> = ({ refs }) => {
  const { theme, setTheme } = useTheme(); // 테마 설정
  const [selectedSection, setSelectedSection] = useState<string | null>(null); // nav 선택한 섹션
  const [isClick, setIsClick] = useState<boolean>(false); // 햄버거 클릭했는지
  const [mounted, setMounted] = useState(false);

  // 해당 ref로 이동하는 함수
  const scrollToRef = (ref: React.RefObject<HTMLDivElement>, sectionName: string) => {
    ref.current?.scrollIntoView({ behavior: "smooth" }); // 해당 ref로 스무스하게 이동
    setSelectedSection(sectionName); // 선택된 섹션 저장
  };

  // 모바일 환경에서 햄버거 버튼 누를 시 테마에 맞게 스타일 지정 함수
  const changeBoxStyle = () => {
    if (isClick && theme === "light") return styles.showBox;
    if (isClick && theme === "dark") return styles.showBoxDark;
    return "";
  };

  // ssr에서 말고 클라이언트 측에서 렌더링 되고 나서 아이콘을 렌더링하도록 설정
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`${styles.box} ${changeBoxStyle()}`}>
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
          {theme === "light" ? <DarkMode /> : <LightMode />}
        </button>
      </nav>
    </div>
  );
};

export default Navigation;
