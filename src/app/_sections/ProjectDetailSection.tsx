import ProjectSlider from "@/components/projects/ProjectSlider";
import Title from "@/components/Title";
import styles from "@/styles/sections/ProjectDetailSection.module.css";

export default function ProjectDetailSection() {
  return (
    <section id="project-detail-section" className={styles.section}>
      <div>
        <Title title="프로젝트 소개" subTitle="진행한 프로젝트 상세 설명입니다." />
        <div className={styles.box}>
          <ProjectSlider />
        </div>
      </div>
    </section>
  );
}
