"use client";
import styles from "@/app/_styles/sections/IntroSection.module.css";
import InfoBox from "../_components/intro/InfoBox";
import TitleBox from "../_components/intro/TitleBox";
import AboutBox from "../_components/intro/AboutBox";
import ScrollHint from "../_components/intro/ScrollHint";

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
