import { skillData } from "../_data/skillData";
import SkillBox from "@/app/_components/SkillBox";
import Title from "@/app/_components/Title";
import styles from "@/app/_styles/sections/SkillsSection.module.css";

export default function SkillsSection() {
  return (
    <>
      <section className={styles.section}>
        <div>
          <div className={styles.box}>
            <Title title="Skills" subTitle="사용 가능한 기술 목록입니다." />
            <SkillBox skills={skillData.skills} />
          </div>
          <div className={styles.box}>
            <Title title="ETC" subTitle="개발에 필요한 도구 사용 목록입니다." />
            <SkillBox skills={skillData.etcs} />
          </div>
        </div>
      </section>
    </>
  );
}
