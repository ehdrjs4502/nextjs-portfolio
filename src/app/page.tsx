"use client";
import IntroSection from "@/sections/IntroSection";
import ProjectDetailSection from "@/sections/ProjectDetailSection";
import TimeLineSection from "@/sections/TimeLineSection";
import SkillsSection from "@/sections/SkillsSection";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/sections/FooterSection";

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
      <FooterSection />
    </>
  );
}
