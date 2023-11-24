import Title from "../_components/Title";
import styles from "@/app/_styles/sections/ProjectDetailSection.module.css";

export default function ProjectDetailSection() {
  return (
    <section className={styles.section}>
      <div>
        <Title title="프로젝트 소개" subTitle="진행한 프로젝트 상세 설명입니다." />
        <div className={styles.box}>
          <div>
            <span>프로젝트 화면(슬라이더)</span>
          </div>
          <div>
            <h4>프로젝트 제목</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
