"use client";
import IntroSection from "./_sections/IntroSection";
import ProjectDetailSection from "./_sections/ProjectDetailSection";
import TimeLineSection from "./_sections/TimeLineSection";
import SkillsSection from "./_sections/SkillsSection";
import { useRef } from "react";

export default function Home() {
  const introRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav>
        <button onClick={() => scrollToRef(introRef)}>Intro</button>
        <button onClick={() => scrollToRef(skillsRef)}>Skills</button>
        <button onClick={() => scrollToRef(timelineRef)}>Timeline</button>
        <button onClick={() => scrollToRef(projectsRef)}>Projects</button>
      </nav>

      <div ref={introRef}>
        <IntroSection />
      </div>
      <div ref={skillsRef}>
        <SkillsSection />
      </div>
      <div ref={timelineRef}>
        <TimeLineSection />
      </div>
      <div ref={projectsRef}>
        <ProjectDetailSection />
      </div>
    </>
  );
}
