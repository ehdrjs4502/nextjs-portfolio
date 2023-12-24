"use client";
import styles from "@/app/_styles/sections/IntroSection.module.css";
import InfoBox from "../_components/InfoBox";
import TitleBox from "../_components/TitleBox";
import AboutBox from "../_components/AboutBox";
import ScrollHint from "../_components/ScrollHint";

export default function IntroSection() {
  return (
    <>
      <section id="intro-section" className={styles.section}>
        <div className={styles.introBox}>
          <TitleBox />
          <InfoBox />
          <AboutBox />
          <ScrollHint />
        </div>
      </section>
    </>
  );
}
