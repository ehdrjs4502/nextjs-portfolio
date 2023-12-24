"use client";
import IntroSection from "./_sections/IntroSection";
import ProjectDetailSection from "./_sections/ProjectDetailSection";
import TimeLineSection from "./_sections/TimeLineSection";
import SkillsSection from "./_sections/SkillsSection";
import { useRef } from "react";
import Navigation from "./_components/Navigation";

export default function Home() {
  const introRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navigation refs={{ introRef, skillsRef, timelineRef, projectsRef }} />
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
