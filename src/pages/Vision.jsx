import CoreValues from "../components/vision/CoreValues";
import MissionSection from "../components/vision/MissionSection";
import StrategicGoals from "../components/vision/StrategicGoals";
import TeamSection from "../components/vision/TeamSection";
import VisionHero from "../components/vision/VisionHero";
import VisionStatement from "../components/vision/VisionStatement";


const Vision = () => {
  return (
    <main className="overflow-x-hidden">
      <VisionHero />
      <MissionSection />
      <VisionStatement />
      <CoreValues />
      <StrategicGoals />
      <TeamSection />
    </main>
  );
};

export default Vision;