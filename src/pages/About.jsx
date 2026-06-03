import AboutContent from "../components/about/AboutContent"
import AboutHeroSection from "../components/about/AboutHeroSection"
import HowWeHelp from "../components/about/HowWeHelp"
import ImpactStats from "../components/about/ImpactStats"
import WhoWeAre from "../components/about/WhoWeAre"


function About() {
  return (
    <>
      <AboutHeroSection />
      <AboutContent />
      <WhoWeAre />
      <HowWeHelp />
      <ImpactStats />
    </>
  )
}

export default About