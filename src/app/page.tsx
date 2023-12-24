import IntroSection from "./_sections/IntroSection";
import ProjectDetailSection from "./_sections/ProjectDetailSection";
import TimeLineSection from "./_sections/TimeLineSection";
import SkillsSection from "./_sections/SkillsSection";

export default function Home() {
  return (
    <>
      <IntroSection />
      <SkillsSection />
      <TimeLineSection />
      <ProjectDetailSection />
    </>
  );
}
