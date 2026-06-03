// import { motion } from "framer-motion";
// import otTableGeneralSurgery from "/images/products/ot-light/TMS_4_Reflector.png";
// import otLightSingle from "/images/products/ot-light/OT_Light_Single.png";
// import otLightSingle1 from "/images/products/ot-light/O_T_Light_Single_Selling1.png";
// import otLightTwin from "/images/products/ot-light/O_T_Light_Twin_Selling.png";
// import otsingleLight from "/images/products/ot-light/O_T_Light_Single_Selling_first.png";
// import topLight from "/images/products/ot-light/topLight.png";
// import examinationLight from "/images/products/ot-light/Examination_O_T_Light.png";
// import OTLightHeroSection from "./OTLightHeroSection";

// /* ── Shared UI Components ── */
// const TitleBanner = ({ title }) => (
// 	<div className="relative flex items-center justify-center mb-8 sm:mb-12">
// 		{/* Decorative line left */}
// 		<motion.div
// 			initial={{ scaleX: 0, opacity: 0 }}
// 			whileInView={{ scaleX: 1, opacity: 1 }}
// 			viewport={{ once: true }}
// 			transition={{ duration: 0.7, ease: "easeOut" }}
// 			className="hidden sm:block flex-1 h-px bg-gradient-to-r from-transparent via-cyan-400 to-cyan-600 origin-left"
// 		/>

// 		{/* Main badge */}
// 		<motion.div
// 			initial={{ opacity: 0, y: -20, scale: 0.85 }}
// 			whileInView={{ opacity: 1, y: 0, scale: 1 }}
// 			viewport={{ once: true }}
// 			transition={{ duration: 0.55, ease: "easeOut" }}
// 			className="relative mx-0 sm:mx-6 flex-shrink-0"
// 		>
// 			{/* Glow behind */}
// 			<div className="absolute inset-0 rounded bg-cyan-400 opacity-20 blur-xl scale-110" />

// 			{/* Border gradient wrapper */}
// 			<div className="relative rounded p-[2px]"
// 				style={{ background: "linear-gradient(135deg, #06b6d4, #0e7490, #164e63)" }}>
// 				<div className="rounded px-6 sm:px-10 py-3 sm:py-4 flex items-center gap-3 sm:gap-4"
// 					style={{ background: "linear-gradient(135deg, #0e7490 0%, #155e75 50%, #164e63 100%)" }}>

// 					{/* Left icon */}
// 					<motion.span
// 						initial={{ rotate: -30, opacity: 0 }}
// 						whileInView={{ rotate: 0, opacity: 1 }}
// 						viewport={{ once: true }}
// 						transition={{ delay: 0.3, duration: 0.4 }}
// 						className="text-cyan-300 text-lg sm:text-2xl select-none"
// 					>✦</motion.span>

// 					{/* Title */}
// 					<h2
// 						className="text-white font-extrabold uppercase tracking-widest text-sm sm:text-lg md:text-xl lg:text-2xl"
// 						style={{
// 							textShadow: "0 0 18px rgba(103,232,249,0.55)", fontFamily: "'Playfair Display', serif", fontStyle: "italic"
// 						}}
// 					>
// 						{title}
// 					</h2>

// 					{/* Right icon */}
// 					<motion.span
// 						initial={{ rotate: 30, opacity: 0 }}
// 						whileInView={{ rotate: 0, opacity: 1 }}
// 						viewport={{ once: true }}
// 						transition={{ delay: 0.3, duration: 0.4 }}
// 						className="text-cyan-300 text-lg sm:text-2xl select-none"
// 					>✦</motion.span>
// 				</div>
// 			</div>

// 			{/* Small dot accents below */}
// 			<div className="flex justify-center gap-1.5 mt-2">
// 				{[0, 1, 2].map((i) => (
// 					<motion.div
// 						key={i}
// 						initial={{ scale: 0, opacity: 0 }}
// 						whileInView={{ scale: 1, opacity: 1 }}
// 						viewport={{ once: true }}
// 						transition={{ delay: 0.45 + i * 0.08, duration: 0.3 }}
// 						className={`rounded-full ${i === 1 ? "w-3 h-1.5 bg-cyan-400" : "w-1.5 h-1.5 bg-cyan-600"}`}
// 					/>
// 				))}
// 			</div>
// 		</motion.div>

// 		{/* Decorative line right */}
// 		<motion.div
// 			initial={{ scaleX: 0, opacity: 0 }}
// 			whileInView={{ scaleX: 1, opacity: 1 }}
// 			viewport={{ once: true }}
// 			transition={{ duration: 0.7, ease: "easeOut" }}
// 			className="hidden sm:block flex-1 h-px bg-gradient-to-l from-transparent via-cyan-400 to-cyan-600 origin-right"
// 		/>
// 	</div>
// );

// // Using lg:self-start so the image doesn't stretch with the specs card
// const ProductImage = ({ src, alt, animateFrom = "right" }) => (
// 	<motion.div
// 		initial={{ opacity: 0, x: animateFrom === "right" ? 40 : -40, scale: 0.93 }}
// 		whileInView={{ opacity: 1, x: 0, scale: 1 }}
// 		viewport={{ once: true }}
// 		transition={{ duration: 0.7, ease: "easeOut" }}
// 		className="flex justify-center items-start px-0 sm:px-2 lg:sticky lg:top-24 lg:self-start"
// 	>
// 		<div className="relative rounded-xl overflow-hidden shadow-xl bg-white w-full max-w-xs sm:max-w-sm md:max-w-md border-2 border-cyan-600 p-3 sm:p-4 mx-auto">
// 			<div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-cyan-400 rounded-tl-xl" />
// 			<div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-cyan-400 rounded-br-xl" />

// 			<img
// 				src={src}
// 				alt={alt}
// 				className="w-full h-auto object-contain max-h-64 sm:max-h-80 md:max-h-96"
// 			/>
// 		</div>
// 	</motion.div>
// );

// const SpecsCard = ({ heading, specs, animateFrom = "left" }) => (
// 	<motion.div
// 		initial={{ opacity: 0, x: animateFrom === "left" ? -40 : 40 }}
// 		whileInView={{ opacity: 1, x: 0 }}
// 		viewport={{ once: true }}
// 		transition={{ duration: 0.6 }}
// 		className="bg-white rounded-2xl shadow-md border-l-4 border-cyan-700 overflow-hidden"
// 	>
// 		<div className="px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 pb-2">
// 			<h3 className="text-cyan-800 font-bold text-base sm:text-lg md:text-xl">{heading}</h3>
// 		</div>
// 		<div className="overflow-x-auto">
// 			<table className="w-full text-xs sm:text-sm md:text-base">
// 				<tbody>
// 					{specs.map((spec, i) => (
// 						<motion.tr
// 							key={i}
// 							initial={{ opacity: 0, x: animateFrom === "left" ? -16 : 16 }}
// 							whileInView={{ opacity: 1, x: 0 }}
// 							viewport={{ once: true }}
// 							transition={{ duration: 0.4, delay: i * 0.07 }}
// 							className={i % 2 === 0 ? "bg-cyan-50" : "bg-white"}
// 						>
// 							<td className="px-3 sm:px-5 md:px-8 py-2 sm:py-3 font-semibold text-cyan-800 w-1/2 border-b border-cyan-100 align-top">
// 								{spec.label}
// 							</td>
// 							<td className="px-3 sm:px-5 md:px-8 py-2 sm:py-3 text-gray-700 border-b border-cyan-100 align-top">
// 								{spec.value}
// 							</td>
// 						</motion.tr>
// 					))}
// 				</tbody>
// 			</table>
// 		</div>
// 	</motion.div>
// );

// /* ── Data ── */
// const tms4Specs = [
// 	{ label: "Lux Intensity", value: "1,60,000" },
// 	{ label: "Body Material", value: "Aluminium" },
// 	{ label: "LEDs", value: "48 (32W, 16Y)" },
// 	{ label: "Control Panel", value: "Touch Panel" },
// 	{ label: "Dome Diameter", value: "450 mm" },
// 	{ label: "Remote", value: "Wireless Remote Handset" },
// 	{ label: "Spot Diameter", value: "100–150 mm" },
// 	{ label: "Illumination Depth", value: "10–15 cm" },
// 	{ label: "Colour Temperature", value: "3800–5200 K" },
// 	{ label: "Colour Rendering Index", value: "91 Ra" },
// 	{ label: "Focusing", value: "Manual" },
// 	{ label: "LED Average Life", value: ">50,000 Hrs" },
// 	{ label: "Intensity Control", value: "10–100 Digital" },
// 	{ label: "Input", value: "230V AC, 50–60 Hz" },
// 	{ label: "Wattage", value: "80W" },
// ];

// ;

// const singleSelling1Specs = [
// 	{ label: "Intensity", value: "100-130 mm" },
// 	{ label: "Spot Diameter", value: "100–150 mm" },
// 	{ label: "Depth Illumination", value: "10–15 cm" },
// 	{ label: "Colour Rendering Index", value: "91 Ra" },
// 	{ label: "Focusing", value: "Adjustment" },
// 	{ label: "LED Average Life", value: "More Than 50,000 Hrs." },
// 	{ label: "Number of LED", value: "35" },
// 	{ label: "Diameter of Light", value: "505 mm" },
// 	{ label: "Intensity Control", value: "10–100 Digital" },
// 	{ label: "Power", value: "100 Watt" },
// 	{ label: "Special Function", value: "Memory Function" },
// ];

// const singleSellingSpecs1 = [
// 	{ label: "Intensity", value: "90,000" },
// 	{ label: "Spot Diameter", value: "100–150 mm" },
// 	{ label: "Depth Illumination", value: "10–15 cm" },
// 	{ label: "Colour Temp", value: "3800–5200 K" },
// 	{ label: "Focusing", value: "Fix" },
// 	{ label: "LED Average Life", value: "50,000 Hrs" },
// 	{ label: "Number of LEDs", value: "18" },
// 	{ label: "Diameter of Light", value: "430 mm" },
// 	{ label: "Intensity Control", value: "10–100 Digital" },
// 	{ label: "Power", value: "70 Watt" },
// 	{ label: "Remote", value: "Optional" },
// ];

// const twinSellingSpecs = [
// 	{ label: "Intensity", value: "1,60,000 + 1,60,000 Lux" },
// 	{ label: "Spot Diameter", value: "100–150 mm" },
// 	{ label: "Depth Illumination", value: "10–15 cm" },
// 	{ label: "Colour Rendering Index", value: "91 Ra" },
// 	{ label: "Focusing", value: "Adjustment" },
// 	{ label: "LED Average Life", value: "More Than 50,000 Hrs." },
// 	{ label: "Number of LEDs", value: "Minimum 36 + 36" },
// 	{ label: "Diameter of Light", value: "505 mm" },
// 	{ label: "Intensity Control", value: "10–100 Digital" },
// 	{ label: "Power", value: "100 + 100 Watt" },
// 	{ label: "Special Function", value: "Memory Function" },
// ];

// const topLightSpecs = [
// 	{ label: "Intensity", value: "1,60,000" },
// 	{ label: "Spot Diameter", value: "100–150 mm" },
// 	{ label: "Depth Illumination", value: "10–15 cm" },
// 	{ label: "Colour Rendering Index", value: "91 Ra" },
// 	{ label: "Focusing", value: "Adjustment" },
// 	{ label: "LED Average Life", value: "More Than 50,000 Hrs." },
// 	{ label: "Number of LED", value: "48" },
// 	{ label: "Diameter of Light", value: "505 mm" },
// 	{ label: "Intensity Control", value: "10–100 Digital" },
// 	{ label: "Power", value: "100 Watt" },
// 	{ label: "Special Function", value: "Memory Function" },
// ];

// const firstLightSpecs = [
// 	{ label: "Intensity", value: "1,60,000" },
// 	{ label: "Spot Diameter", value: "100–150 mm" },
// 	{ label: "Depth Illumination", value: "10–15 cm" },
// 	{ label: "Colour Temp", value: "3800–5200 K" },
// 	{ label: "Colour Rendering Index", value: "91 Ra" },
// 	{ label: "Focusing", value: "Adjustment" },
// 	{ label: "LED Average Life", value: "More Than 50,000 Hrs." },
// 	{ label: "Number of LED", value: "36" },
// 	{ label: "Diameter of Light", value: "505 mm" },
// 	{ label: "Intensity Control", value: "10–100 Digital" },
// 	{ label: "Power", value: "100 Watt" },
// 	{ label: "Special Function", value: "Memory Function" },
// ];

// const examinationLightSpecs = [
// 	{ label: "Number of LED", value: "19" },
// 	{ label: "Intensity", value: "50,000" },
// 	{ label: "Iron Base", value: "Powder Coating" },
// ];

// /* ── Section Wrapper for consistent spacing ── */
// const Section = ({ children, isLast = false }) => (
// 	<div className={`max-w-7xl mx-auto mt-10 sm:mt-16 px-4 sm:px-6 lg:px-8 ${isLast ? "pb-16 sm:pb-24" : ""}`}>
// 		{children}
// 	</div>
// );

// const sections = [
// 	{ title: "TMS- 4 Reflector", specs: tms4Specs, heading: "Salient Features", img: otTableGeneralSurgery, alt: "TMS-4 Reflector OT Light" },
// 	{ title: "O.T. Light Single Selling", specs: singleSelling1Specs, heading: "Specifications", img: otLightSingle1, alt: "OT Light Single Selling 1" },
// 	{ title: "O.T. Light Single Selling", specs: singleSellingSpecs1, heading: "Specifications", img: otLightSingle, alt: "OT Light Single Selling" },
// 	{ title: "O.T. Light Single Selling", specs: topLightSpecs, heading: "Specifications", img: topLight, alt: "OT Light Single Selling Top" },
// 	{ title: "O.T. Light Twin Selling", specs: twinSellingSpecs, heading: "Specifications", img: otLightTwin, alt: "OT Light Twin Selling" },
// 	{ title: "O.T. Light Single Selling", specs: firstLightSpecs, heading: "Specifications", img: otsingleLight, alt: "OT Light Single Selling First" },
// 	{ title: "Examination O.T. Light", specs: examinationLightSpecs, heading: "Specifications", img: examinationLight, alt: "Examination OT Light" },
// ];

// const OTLight = () => {
// 	return (
// 		<>
// 			<OTLightHeroSection />
// 			{sections.map((s, i) => {
// 				const isEven = i % 2 === 0;
// 				const isLast = i === sections.length - 1;
// 				return (
// 					<Section key={i} isLast={isLast}>
// 						<TitleBanner title={s.title} />
// 						<div
// 							className={`grid grid-cols-1 gap-6 sm:gap-8 lg:gap-12 items-start ${isEven ? "lg:grid-cols-[62%_38%]" : "lg:grid-cols-[38%_62%]"
// 								}`}
// 						>
// 							{isEven ? (
// 								<>
// 									<SpecsCard heading={s.heading} specs={s.specs} animateFrom="left" />
// 									<ProductImage src={s.img} alt={s.alt} animateFrom="right" />
// 								</>
// 							) : (
// 								<>
// 									<ProductImage src={s.img} alt={s.alt} animateFrom="left" />
// 									<SpecsCard heading={s.heading} specs={s.specs} animateFrom="right" />
// 								</>
// 							)}
// 						</div>
// 					</Section>
// 				);
// 			})}
// 		</>
// 	);
// };

// export default OTLight;






import { motion } from "framer-motion";
import otTableGeneralSurgery from "/images/products/ot-light/TMS_4_Reflector.png";
import otLightSingle from "/images/products/ot-light/OT_Light_Single.png";
import otLightSingle1 from "/images/products/ot-light/O_T_Light_Single_Selling1.png";
import otLightTwin from "/images/products/ot-light/O_T_Light_Twin_Selling.png";
import otsingleLight from "/images/products/ot-light/O_T_Light_Single_Selling_first.png";
import topLight from "/images/products/ot-light/topLight.png";
import examinationLight from "/images/products/ot-light/Examination_O_T_Light.png";
import OTLightHeroSection from "./OTLightHeroSection";

/* ── TitleBanner ── */
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
        style={{ background: "linear-gradient(135deg, #06b6d4, #0e7490, #164e63)" }}
      >
        <div
          className="rounded px-6 sm:px-10 py-3 sm:py-4 flex items-center gap-3 sm:gap-4"
          style={{ background: "linear-gradient(135deg, #0e7490 0%, #155e75 50%, #164e63 100%)" }}
        >
          <motion.span
            initial={{ rotate: -30, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-cyan-300 text-lg sm:text-2xl select-none"
          >✦</motion.span>
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
          >✦</motion.span>
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

/*
  ProductImage:
  - Mobile: order-1 (shows after title, before specs)
  - LG: sticky, restores natural column order via lg:order-none
*/
const ProductImage = ({ src, alt, animateFrom = "right", mobileOrder }) => (
  <motion.div
    initial={{ opacity: 0, x: animateFrom === "right" ? 40 : -40, scale: 0.93 }}
    whileInView={{ opacity: 1, x: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className={`h-full ${mobileOrder}`}
  >
    <div className="lg:sticky lg:top-24">
      <div className="relative rounded-xl overflow-hidden shadow-xl bg-white w-full max-w-xs sm:max-w-sm md:max-w-md border-2 border-cyan-600 p-3 sm:p-4 mx-auto">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-cyan-400 rounded-tl-xl" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-cyan-400 rounded-br-xl" />
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-contain max-h-64 sm:max-h-80 md:max-h-96"
        />
      </div>
    </div>
  </motion.div>
);

/* SpecsCard — always last on mobile */
const SpecsCard = ({ heading, specs, animateFrom = "left", mobileOrder = "order-2 lg:order-none" }) => (
  <motion.div
    initial={{ opacity: 0, x: animateFrom === "left" ? -40 : 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`bg-white rounded-2xl shadow-md border-l-4 border-cyan-700 overflow-hidden ${mobileOrder}`}
  >
    <div className="px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 pb-2">
      <h3 className="text-cyan-800 font-bold text-base sm:text-lg md:text-xl">{heading}</h3>
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
const tms4Specs = [
  { label: "Lux Intensity", value: "1,60,000" },
  { label: "Body Material", value: "Aluminium" },
  { label: "LEDs", value: "48 (32W, 16Y)" },
  { label: "Control Panel", value: "Touch Panel" },
  { label: "Dome Diameter", value: "450 mm" },
  { label: "Remote", value: "Wireless Remote Handset" },
  { label: "Spot Diameter", value: "100–150 mm" },
  { label: "Illumination Depth", value: "10–15 cm" },
  { label: "Colour Temperature", value: "3800–5200 K" },
  { label: "Colour Rendering Index", value: "91 Ra" },
  { label: "Focusing", value: "Manual" },
  { label: "LED Average Life", value: ">50,000 Hrs" },
  { label: "Intensity Control", value: "10–100 Digital" },
  { label: "Input", value: "230V AC, 50–60 Hz" },
  { label: "Wattage", value: "80W" },
];

const singleSelling1Specs = [
  { label: "Intensity", value: "100-130 mm" },
  { label: "Spot Diameter", value: "100–150 mm" },
  { label: "Depth Illumination", value: "10–15 cm" },
  { label: "Colour Rendering Index", value: "91 Ra" },
  { label: "Focusing", value: "Adjustment" },
  { label: "LED Average Life", value: "More Than 50,000 Hrs." },
  { label: "Number of LED", value: "35" },
  { label: "Diameter of Light", value: "505 mm" },
  { label: "Intensity Control", value: "10–100 Digital" },
  { label: "Power", value: "100 Watt" },
  { label: "Special Function", value: "Memory Function" },
];

const singleSellingSpecs1 = [
  { label: "Intensity", value: "90,000" },
  { label: "Spot Diameter", value: "100–150 mm" },
  { label: "Depth Illumination", value: "10–15 cm" },
  { label: "Colour Temp", value: "3800–5200 K" },
  { label: "Focusing", value: "Fix" },
  { label: "LED Average Life", value: "50,000 Hrs" },
  { label: "Number of LEDs", value: "18" },
  { label: "Diameter of Light", value: "430 mm" },
  { label: "Intensity Control", value: "10–100 Digital" },
  { label: "Power", value: "70 Watt" },
  { label: "Remote", value: "Optional" },
];

const twinSellingSpecs = [
  { label: "Intensity", value: "1,60,000 + 1,60,000 Lux" },
  { label: "Spot Diameter", value: "100–150 mm" },
  { label: "Depth Illumination", value: "10–15 cm" },
  { label: "Colour Rendering Index", value: "91 Ra" },
  { label: "Focusing", value: "Adjustment" },
  { label: "LED Average Life", value: "More Than 50,000 Hrs." },
  { label: "Number of LEDs", value: "Minimum 36 + 36" },
  { label: "Diameter of Light", value: "505 mm" },
  { label: "Intensity Control", value: "10–100 Digital" },
  { label: "Power", value: "100 + 100 Watt" },
  { label: "Special Function", value: "Memory Function" },
];

const topLightSpecs = [
  { label: "Intensity", value: "1,60,000" },
  { label: "Spot Diameter", value: "100–150 mm" },
  { label: "Depth Illumination", value: "10–15 cm" },
  { label: "Colour Rendering Index", value: "91 Ra" },
  { label: "Focusing", value: "Adjustment" },
  { label: "LED Average Life", value: "More Than 50,000 Hrs." },
  { label: "Number of LED", value: "48" },
  { label: "Diameter of Light", value: "505 mm" },
  { label: "Intensity Control", value: "10–100 Digital" },
  { label: "Power", value: "100 Watt" },
  { label: "Special Function", value: "Memory Function" },
];

const firstLightSpecs = [
  { label: "Intensity", value: "1,60,000" },
  { label: "Spot Diameter", value: "100–150 mm" },
  { label: "Depth Illumination", value: "10–15 cm" },
  { label: "Colour Temp", value: "3800–5200 K" },
  { label: "Colour Rendering Index", value: "91 Ra" },
  { label: "Focusing", value: "Adjustment" },
  { label: "LED Average Life", value: "More Than 50,000 Hrs." },
  { label: "Number of LED", value: "36" },
  { label: "Diameter of Light", value: "505 mm" },
  { label: "Intensity Control", value: "10–100 Digital" },
  { label: "Power", value: "100 Watt" },
  { label: "Special Function", value: "Memory Function" },
];

const examinationLightSpecs = [
  { label: "Number of LED", value: "19" },
  { label: "Intensity", value: "50,000" },
  { label: "Iron Base", value: "Powder Coating" },
];

const sections = [
  { title: "TMS- 4 Reflector",         specs: tms4Specs,            heading: "Salient Features", img: otTableGeneralSurgery, alt: "TMS-4 Reflector OT Light" },
  { title: "O.T. Light Single Selling", specs: singleSelling1Specs,  heading: "Specifications",   img: otLightSingle1,        alt: "OT Light Single Selling 1" },
  { title: "O.T. Light Single Selling", specs: singleSellingSpecs1,  heading: "Specifications",   img: otLightSingle,         alt: "OT Light Single Selling" },
  { title: "O.T. Light Single Selling", specs: topLightSpecs,        heading: "Specifications",   img: topLight,              alt: "OT Light Single Selling Top" },
  { title: "O.T. Light Twin Selling",   specs: twinSellingSpecs,     heading: "Specifications",   img: otLightTwin,           alt: "OT Light Twin Selling" },
  { title: "O.T. Light Single Selling", specs: firstLightSpecs,      heading: "Specifications",   img: otsingleLight,         alt: "OT Light Single Selling First" },
  { title: "Examination O.T. Light",   specs: examinationLightSpecs, heading: "Specifications",   img: examinationLight,      alt: "Examination OT Light" },
];

/* ── Main ── */
const OTLight = () => (
  <>
    <OTLightHeroSection />

    {sections.map((s, i) => {
      const isEven = i % 2 === 0;
      const isLast = i === sections.length - 1;

      /*
        Mobile order (applied via CSS order):
          TitleBanner  → always first  (rendered before the grid, so naturally first)
          ProductImage → order-1       (second on mobile)
          SpecsCard    → order-2       (third on mobile)

        On lg: lg:order-none resets both back to DOM order
        (isEven: specs left, image right | isOdd: image left, specs right)
      */

      // Mobile: image always order-1, specs always order-2
      // Desktop (lg): lg:order-none resets both → grid column widths take over
      const imgCol = (
        <ProductImage
          src={s.img}
          alt={s.alt}
          animateFrom={isEven ? "right" : "left"}
          mobileOrder="order-1 lg:order-none"
        />
      );

      const specsCol = (
        <SpecsCard
          heading={s.heading}
          specs={s.specs}
          animateFrom={isEven ? "left" : "right"}
          mobileOrder="order-2 lg:order-none"
        />
      );

      return (
        <div
          key={i}
          className={`max-w-7xl mx-auto mt-10 sm:mt-16 px-4 sm:px-6 lg:px-8 ${
            isLast ? "pb-16 sm:pb-24" : ""
          }`}
        >
          <TitleBanner title={s.title} />

          <div
            className={`flex flex-col lg:grid gap-6 sm:gap-8 lg:gap-12 ${
              isEven
                ? "lg:grid-cols-[62%_38%]"
                : "lg:grid-cols-[38%_62%]"
            }`}
          >
            {/*
              Both layouts render image first in DOM on mobile
              so order-1 (image) comes before order-2 (specs).
              On lg, lg:order-none lets the grid column widths
              control left/right placement naturally.
            */}
            {isEven ? (
              <>
                {specsCol}
                {imgCol}
              </>
            ) : (
              <>
                {imgCol}
                {specsCol}
              </>
            )}
          </div>
        </div>
      );
    })}
  </>
);

export default OTLight;