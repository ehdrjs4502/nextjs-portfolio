"use client";
import styles from "@/styles/sections/IntroSection.module.css";
import InfoBox from "@/components/intro/InfoBox";
import TitleBox from "@/components/intro/TitleBox";
import AboutBox from "@/components/intro/AboutBox";
import ScrollHint from "@/components/intro/ScrollHint";

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
