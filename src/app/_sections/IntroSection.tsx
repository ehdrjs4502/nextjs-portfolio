import styles from "@/app/_styles/sections/IntroSection.module.css";

export default function IntroSection() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.introBox}>
          <div className={styles.titleBox}>
            <h4>안녕하세요!</h4>
            <h5>
              <strong className={styles.strogBlue}>프론트엔드 개발자</strong> 김동건입니다.
            </h5>
          </div>

          <div className={styles.infoBox}>
            <div className={styles.imgBox}>증명사진</div>
            <div className={styles.info}>
              <div>
                <span>Name</span>
                <strong>김동건</strong>
              </div>
              <div>
                <span>Phone</span>
                <strong>010-1234-5678</strong>
              </div>
              <div>
                <span>Mail</span>
                <strong>ehdrjs4502@gmail.com</strong>
              </div>
              <div>
                <span>Github</span>
                <strong>github.com/ehdrjs4502</strong>
              </div>
            </div>
          </div>

          <div className={styles.aboutBox}>
            <h5>About Me</h5>
            <span>
              <strong className={styles.strongBlue}>React.js</strong>,{" "}
              <strong style={{ color: "#3C3C3C" }}>Next.js</strong>를 활용하여 <strong>프론트엔드 개발</strong>을
              수행하는 개발자
            </span>
            <span>
              팀과 개인을 가리지 않고, 여러 프로젝트 경험으로 <strong style={{ color: "#5EA8FF" }}>실력</strong>과{" "}
              <strong style={{ color: "#FF4F4F" }}>실무 감각</strong>을 쌓아가는 개발자
            </span>
          </div>
        </div>
      </section>
    </>
  );
}