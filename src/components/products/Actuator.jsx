

import { motion } from "framer-motion";
import actuator2 from "/images/products/actuator/L&K1.png";
import actuator1 from "/images/products/actuator/L&K2.png";
import actuator3 from "/images/products/actuator/L&K3.png";
import controlBox from "/images/products/actuator/4functioncontrolbox.jpg";
import remote from "/images/products/actuator/remote.jpg";
import lkLogo from "/images/logo/L&Klogo.png"; // ← update filename to match your actual logo file
import ActuatorHeroSection from "./ActuatorHeroSection";

/* ── Shared UI Components ── */
const TitleBanner = ({ title }) => (
  <div className="relative flex items-center justify-center mb-8 sm:mb-12">
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="hidden sm:block flex-1 h-px bg-gradient-to-r from-transparent via-cyan-400 to-cyan-600 origin-left"
    />
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.85 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="relative mx-0 sm:mx-6 flex-shrink-0"
    >
      <div className="absolute inset-0 rounded bg-cyan-400 opacity-20 blur-xl scale-110" />
      <div
        className="relative rounded p-[2px]"
        style={{
          background: "linear-gradient(135deg, #06b6d4, #0e7490, #164e63)",
        }}
      >
        <div
          className="rounded px-6 sm:px-10 py-3 sm:py-4 flex items-center gap-3 sm:gap-4"
          style={{
            background:
              "linear-gradient(135deg, #0e7490 0%, #155e75 50%, #164e63 100%)",
          }}
        >
          <motion.span
            initial={{ rotate: -30, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-cyan-300 text-lg sm:text-2xl select-none"
          >
            ✦
          </motion.span>
          <h2
            className="text-white font-extrabold uppercase tracking-widest text-sm sm:text-lg md:text-xl lg:text-2xl"
            style={{
              textShadow: "0 0 18px rgba(103,232,249,0.55)",
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
            }}
          >
            {title}
          </h2>
          <motion.span
            initial={{ rotate: 30, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-cyan-300 text-lg sm:text-2xl select-none"
          >
            ✦
          </motion.span>
        </div>
      </div>
      <div className="flex justify-center gap-1.5 mt-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 + i * 0.08, duration: 0.3 }}
            className={`rounded-full ${i === 1 ? "w-3 h-1.5 bg-cyan-400" : "w-1.5 h-1.5 bg-cyan-600"}`}
          />
        ))}
      </div>
    </motion.div>
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="hidden sm:block flex-1 h-px bg-gradient-to-l from-transparent via-cyan-400 to-cyan-600 origin-right"
    />
  </div>
);

const ProductImage = ({ src, alt, animateFrom = "right", className = "" }) => (
  <motion.div
    initial={{ opacity: 0, x: animateFrom === "right" ? 40 : -40, scale: 0.93 }}
    whileInView={{ opacity: 1, x: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className={`flex justify-center items-start px-0 sm:px-2 lg:sticky lg:top-24 lg:self-start ${className}`}
  >
    <div className="relative rounded-xl overflow-hidden shadow-xl bg-white w-full max-w-xs sm:max-w-sm md:max-w-md border-2 border-cyan-600 p-3 sm:p-4 mx-auto">
      <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-cyan-400 rounded-tl-xl" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-cyan-400 rounded-br-xl" />
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-contain max-h-64 sm:max-h-80 md:max-h-96"
      />
    </div>
  </motion.div>
);

const SpecsCard = ({
  heading,
  specs,
  animateFrom = "left",
  className = "",
}) => (
  <motion.div
    initial={{ opacity: 0, x: animateFrom === "left" ? -40 : 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`bg-white rounded-2xl shadow-md border-l-4 border-cyan-700 overflow-hidden ${className}`}
  >
    <div className="px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 pb-2">
      <h3 className="text-cyan-800 font-bold text-base sm:text-lg md:text-xl">
        {heading}
      </h3>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-xs sm:text-sm md:text-base">
        <tbody>
          {specs.map((spec, i) => (
            <motion.tr
              key={i}
              initial={{ opacity: 0, x: animateFrom === "left" ? -16 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={i % 2 === 0 ? "bg-cyan-50" : "bg-white"}
            >
              <td className="px-3 sm:px-5 md:px-8 py-2 sm:py-3 font-semibold text-cyan-800 w-1/2 border-b border-cyan-100 align-top">
                {spec.label}
              </td>
              <td className="px-3 sm:px-5 md:px-8 py-2 sm:py-3 text-gray-700 border-b border-cyan-100 align-top">
                {spec.value}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  </motion.div>
);

/* ── Data ── */

const actuator1Specs = [
  { label: "Type", value: "LA32.4M-15-150+SHI" },
  { label: "Prod. Date", value: "NDL231109-1" },
  { label: "Protection Rating", value: "IP54" },
  { label: "Max. Load", value: "6000N / 4000N / 6000N" },
  { label: "Duty Cycle", value: "Max. 5%, Max 1/19 min" },
  { label: "Stroke / Notes", value: "S = 150 mm / 323 mm" },
  { label: "Power Rating", value: "DC 24V, Max 4.6 Amp, 60W" },
];

const actuator2Specs = [
  { label: "Type", value: "LA32.4BM-25-150+SHI" },
  { label: "Prod. Date", value: "NDL230512-1" },
  { label: "Protection Rating", value: "IP54" },
  { label: "Max. Load", value: "6000N / 4000N / 6000N" },
  { label: "Duty Cycle", value: "Max. 5%, Max 1/19 min" },
  { label: "Stroke / Notes", value: "S = 250 mm / 423 mm" },
  { label: "Power Rating", value: "DC 24V, Max 4.6 Amp, 60W" },
];

const actuator3Specs = [
  { label: "Type", value: "LA32.4BM-30-150+BHI" },
  { label: "Prod. Date", value: "NDL231023-1" },
  { label: "Protection Rating", value: "IP54" },
  { label: "Max. Load", value: "6000N / 4000N / 6000N" },
  { label: "Duty Cycle", value: "Max. 10%, Max 2/18 min" },
  { label: "Stroke / Notes", value: "S = 300 mm / 473 mm" },
  { label: "Power Rating", value: "DC 24V, Max 3.8 Amp, 50W" },
];

const controlBoxSpecs = [
  { label: "Type", value: "CB10.4SE-3IN+AD2B" },
  { label: "Prod. Date", value: "NDL250630-2 (250630)" },
  { label: "Duty Cycle", value: "Max. 10%, Max 6 min in 1 hour" },
  { label: "AC Input", value: "AC 180–300V, 50 Hz / 60 Hz" },
  { label: "DC Output", value: "DC 24V, Max 100 VA" },
  { label: "Max Current (In)", value: "Max 5 Amp" },
  { label: "Protection Rating", value: "IP54" },
  { label: "Brand", value: "L&K, Made in China" },
];

const remoteSpecs = [
  { label: "Model", value: "HB13 + C00" },
  { label: "Type", value: "Wireless Remote Control" },
  { label: "Compatible With", value: "L&K Actuator Control Systems" },
];

/* ── Section Wrapper ── */
const Section = ({ children, isLast = false }) => (
  <div
    className={`max-w-7xl mx-auto mt-10 sm:mt-16 px-4 sm:px-6 lg:px-8 ${
      isLast ? "pb-16 sm:pb-24" : ""
    }`}
  >
    {children}
  </div>
);

const sections = [
  {
    title: "L&K Actuator LA32.4M-15-150+SHI",
    specs: actuator1Specs,
    heading: "Specifications",
    img: actuator1,
    alt: "L&K Actuator LA32.4M-15-150+SHI",
  },
  {
    title: "L&K Actuator LA32.4BM-25-150+SHI",
    specs: actuator2Specs,
    heading: "Specifications",
    img: actuator2,
    alt: "L&K Actuator LA32.4BM-25-150+SHI",
  },
  {
    title: "L&K Actuator LA32.4BM-30-150+BHI",
    specs: actuator3Specs,
    heading: "Specifications",
    img: actuator3,
    alt: "L&K Actuator LA32.4BM-30-150+BHI",
  },
  {
    title: "4 Function Control Box",
    specs: controlBoxSpecs,
    heading: "Specifications",
    img: controlBox,
    alt: "L&K 4 Function Control Box CB10.4SE",
  },
  {
    title: "HB13+C00 Remote",
    specs: remoteSpecs,
    heading: "Specifications",
    img: remote,
    alt: "HB13+C00 Wireless Remote",
  },
];

/* ── L&K Showcase Section ── */
const showcaseProducts = [
  { img: actuator1, name: "LA32.4M-15-150+SHI" },
  { img: actuator2, name: "LA32.4BM-25-150+SHI" },
  { img: actuator3, name: "LA32.4BM-30-150+BHI" },
  { img: controlBox, name: "4 Function Control Box" },
  { img: remote, name: "HB13+C00 Remote" },
];

const LKShowcaseSection = () => (
  <div className="w-full">
    <div
      className="relative rounded overflow-hidden border border-cyan-600/40 shadow-2xl"
      style={{
        background:
          "linear-gradient(135deg, #0c4a6e 0%, #0e7490 50%, #164e63 100%)",
      }}
    >
      {/* ── Top bar: Logo + Heading ── */}
      <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 px-5 sm:px-8 pt-6 pb-5 border-b border-cyan-400/20">
        {/* L&K Logo Badge — top-left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <div className="bg-white rounded-xl border-2 border-cyan-400 shadow-lg w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center p-1.5">
            <img
              src={lkLogo}
              alt="L&K Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
          className="flex flex-col"
        >
          <p className="text-cyan-300 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-1">
            Authorized Dealer
          </p>
          <h2
            className="text-white font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-wide leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              textShadow: "0 0 28px rgba(103,232,249,0.45)",
            }}
          >
            "We Are Dealing In LinKan Products"
          </h2>
        </motion.div>

        {/* Pulsing accent dot — top-right */}
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="hidden sm:block ml-auto flex-shrink-0 w-3 h-3 rounded-full bg-cyan-400"
          style={{ boxShadow: "0 0 12px 4px rgba(34,211,238,0.5)" }}
        />
      </div>

      {/* ── Product Image Grid ── */}
      <div className="relative px-5 sm:px-8 py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {showcaseProducts.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 32, scale: 0.88 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            whileHover={{ y: -7, scale: 1.05 }}
            className="group flex flex-col items-center gap-3 cursor-pointer"
          >
            {/* Image card */}
            <div className="relative w-full rounded-xl overflow-hidden bg-white border-2 border-cyan-300/40 group-hover:border-cyan-300 transition-all duration-300 shadow-lg p-3">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-cyan-400 rounded-tl-xl" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-cyan-400 rounded-br-xl" />

              <img
                src={p.img}
                alt={p.name}
                className="w-full h-28 sm:h-36 object-contain"
              />

              {/* Hover shimmer */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </div>

            {/* Product name */}
            <p
              className="text-center text-cyan-100 group-hover:text-white text-xs sm:text-sm font-semibold leading-snug px-1 transition-colors duration-200"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {p.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" />
    </div>
  </div>
);

/* ── Main Actuator Component ── */
const Actuator = () => {
  return (
    <>
      <ActuatorHeroSection />

      {/* ✅ L&K Showcase Section */}
      <LKShowcaseSection />

      {sections.map((s, i) => {
        const isEven = i % 2 === 0;
        const isLast = i === sections.length - 1;
        return (
          <Section key={i} isLast={isLast}>
            <TitleBanner title={s.title} />
            <div
              className={`grid grid-cols-1 gap-6 sm:gap-8 lg:gap-12 items-start ${
                isEven ? "lg:grid-cols-[62%_38%]" : "lg:grid-cols-[38%_62%]"
              }`}
            >
              <ProductImage
                src={s.img}
                alt={s.alt}
                animateFrom={isEven ? "right" : "left"}
                className={isEven ? "lg:order-2" : "lg:order-1"}
              />
              <SpecsCard
                heading={s.heading}
                specs={s.specs}
                animateFrom={isEven ? "left" : "right"}
                className={isEven ? "lg:order-1" : "lg:order-2"}
              />
            </div>
          </Section>
        );
      })}
    </>
  );
};

export default Actuator;
