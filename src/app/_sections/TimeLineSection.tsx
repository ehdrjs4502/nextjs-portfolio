import Title from "@/app/_components/Title";
import styles from "@/app/_styles/sections/TimeLineSection.module.css";
import ProjectTimeLine from "../_components/TimeLine";

export default function TimeLineSection() {
  return (
    <section id="timeline-section" className={styles.section}>
      <div>
        <Title title="타임라인" subTitle="가치 있는 개발자로 거듭나기 위한 성장 과정입니다." />
        <div className={styles.box}>
          <ProjectTimeLine />
        </div>
      </div>
    </section>
  );
}
