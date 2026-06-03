
import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import ProductPreview from "../components/home/ProductPreview";
import ContactSection from "../components/home/ContactSection";
import MapSection from "../components/home/MapSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import StatsSection from "../components/home/StatsSection";
import ProcessSection from "../components/home/ProcessSection";
import Testimonials from "../components/home/Testimonials";
import CertificationsSection from "../components/home/CertificationsSection";
import MarqueeStrip from "../components/home/MarqueeStrip";

function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <WhyChooseUs/>
      <StatsSection/>
      <CertificationsSection/>
      <ProductPreview />
      <ProcessSection/>
      <Testimonials/>
      <MarqueeStrip/>
      <ContactSection/>
      <MapSection/>
    </>
  );
}

export default Home;
