import styles from "@/app/_styles/components/ProjectDetail.module.css";
import { Project } from "./ProjectSlider"; // 부모에서 지정한 타입 불러오기

// props 타입 부모에 있는 Project 타입으로 설정
type ProjectProps = {
  project: Project;
};

export default function ProjectDetail({ project }: ProjectProps) {
  return (
    <div className={styles.box}>
      <div>
        <span>프로젝트 화면(슬라이더)</span>
      </div>
      <div style={{ width: "50%" }}>
        <h4>{project.title}</h4>
        <span>{project.content}</span>
        <div>
          <h5>사용 기술</h5>
        </div>
      </div>
    </div>
  );
}
