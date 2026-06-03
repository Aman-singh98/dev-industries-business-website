

import { motion } from "framer-motion";
import companyPoster    from "/images/about/aboutbg.jpg";
import img1             from "/images/about/aboutbg2.jpg";
import img2             from "/images/about/aboutbg3.jpg";
import img3             from "/images/about/aboutbg4.jpg";
import img4             from "/images/about/aboutbg5.jpg";
import servofortreadmill from "/images/about/aboutbg6.jpg";

/* ── Reusable fade-up variant ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0 },
};

const AboutContent = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white via-gray-50 to-[#f8faf9] px-4 sm:px-6 md:px-16 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[38%_62%] gap-10 lg:gap-12 items-start">

        {/* ================= LEFT : IMAGE SECTION ================= */}
        <motion.div
          className="space-y-6 lg:sticky lg:top-24"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          {/* Company Poster */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="overflow-hidden shadow-lg"
          >
            <img
              src={companyPoster}
              alt="Dev Industries"
              className="w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[360px] object-cover"
            />
          </motion.div>

          {/* Product images row 1 */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4 sm:gap-5"
          >
            <div className="overflow-hidden bg-white shadow">
              <img src={img1} alt="O.T. Table"
                className="w-full h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] object-cover" />
            </div>
            <div className="overflow-hidden bg-white shadow">
              <img src={img2} alt="O.T. Light"
                className="w-full h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] object-cover" />
            </div>
          </motion.div>

          {/* Product images row 2 */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4 sm:gap-5"
          >
            <div className="overflow-hidden bg-white shadow">
              <img src={img3} alt="Hospital Furniture"
                className="w-full h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] object-cover" />
            </div>
            <div className="overflow-hidden bg-white shadow">
              <img src={img4} alt="Electronic Reflector"
                className="w-full h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] object-cover" />
            </div>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT : CONTENT SECTION ================= */}
        <motion.div
          className="max-w-5xl mx-auto space-y-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.18 }}
        >
          {/* HEADER */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-900">
              About <span className="text-cyan-700">M/S Dev Industries</span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-cyan-600 rounded-full" />
          </motion.div>

          {/* INTRO CARD */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-md p-4 sm:p-6 md:p-8 space-y-4"
          >
            <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
              Established in{" "}
              <span className="font-semibold text-cyan-800">2013</span>,{" "}
              <span className="font-semibold text-cyan-800">M/S Dev Industries</span>{" "}
              is a Haryana-based{" "}
              <span className="bg-cyan-50 text-cyan-900 px-1 rounded">
                MSME-registered micro-manufacturing enterprise
              </span>{" "}
              located in the Industrial Area of Bhiwani. We specialize in manufacturing{" "}
              <span className="font-semibold text-cyan-800">
                O.T. Tables, O.T. Lights, Surgical Shadowless Lamps, and Hospital Furniture
              </span>
              , serving healthcare institutions across India.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
              As an{" "}
              <span className="font-semibold text-cyan-800">authorized GEM (Govt. E-Market) Supplier</span>
              , we bridge the gap between{" "}
              <span className="bg-cyan-50 px-1 rounded text-cyan-900">traditional hospital equipment</span>{" "}
              and{" "}
              <span className="bg-cyan-50 px-1 rounded text-cyan-900">modern surgical technology</span>
              , delivering complete solutions built for reliability and long-term performance.
            </p>
          </motion.div>

          {/* CORE OFFERINGS */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-cyan-900 border-l-4 border-cyan-600 pl-3 sm:pl-4">
              Our Core Offerings
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  title: "O.T. Tables",
                  text: "Hydraulic & manual operation tables engineered for surgical precision, durability, and smooth adjustability.",
                },
                {
                  title: "Surgical Lighting",
                  text: "O.T. Lights and shadowless lamps providing clear, shadow-free illumination for critical surgical procedures.",
                },
                {
                  title: "Hospital Furniture & Parts",
                  text: "Complete hospital furniture, electronic reflectors, rubber & plastic components, and genuine Dev-brand spare parts.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.10)" }}
                  className="bg-white rounded-xl shadow-sm p-4 sm:p-6 border transition-shadow"
                >
                  <h4 className="font-semibold text-cyan-800 mb-1 sm:mb-2 text-sm sm:text-base">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-justify">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* MANUFACTURING STRENGTH */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="bg-cyan-50 rounded-2xl p-4 sm:p-6 md:p-8 space-y-3"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-cyan-900">
              Manufacturing Strength & Quality
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
              Our Bhiwani facility follows strict{" "}
              <span className="font-semibold text-cyan-800">quality control protocols</span>{" "}
              under NIC Code 32503, ensuring consistency and long service life. Every product is
              tested to meet{" "}
              <span className="bg-white px-1 rounded text-cyan-900">medical-grade benchmarks</span>
              , built for reliability even in the most demanding surgical environments.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* ================= BOTTOM SECTION ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[62%_38%] gap-8 lg:gap-12 items-start mt-16">

        {/* LEFT CONTENT */}
        <motion.div
          className="space-y-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.18 }}
        >
          {/* REGISTERED & VERIFIED */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="py-4 sm:py-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-cyan-900 border-l-4 border-cyan-600 pl-3 sm:pl-4">
              Registered & Verified
            </h3>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-gray-700 mt-4">
              {[
                "MSME Registered — UDYAM-HR-02-0002341 (Micro Enterprise, OBC Category)",
                "GSTIN — 06BDYPD6152J1Z5 (Haryana)",
                "GEM Authorized — Government E-Market Verified Supplier",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl p-4 sm:p-6 shadow-sm text-xs sm:text-sm leading-relaxed hover:shadow-md transition list-none"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* MISSION / VISION / VALUES */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-md p-4 sm:p-6 md:p-8 space-y-4 border-l-4 border-cyan-700"
          >
            {[
              {
                label: "Our Mission:",
                text: "To empower hospitals and healthcare professionals with reliable, precision-engineered medical equipment that enhances patient outcomes and surgical efficiency. We focus on quality, affordability, and long-term performance.",
              },
              {
                label: "Our Vision:",
                text: "To become India's most trusted manufacturer of hospital-grade surgical equipment — recognized for our commitment to craftsmanship, compliance, and continuous innovation in medical infrastructure.",
              },
              {
                label: "Our Values:",
                text: "Precision, integrity, and patient-first thinking guide every product we manufacture. We believe in building lasting partnerships with healthcare institutions through transparency and consistent quality.",
              },
            ].map((item, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify"
              >
                <span className="font-semibold text-cyan-800">{item.label}</span>{" "}
                {item.text}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.93 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center items-start mt-8 lg:mt-16 px-4"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white w-full max-w-md border-2 border-cyan-600">
            <img
              src={servofortreadmill}
              alt="Dev Industries Product"
              className="w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[500px] object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* FOOT NOTE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-gray-700 text-xs sm:text-sm max-w-3xl mt-8 mx-auto"
      >
        At{" "}
        <span className="font-semibold text-cyan-900">M/S Dev Industries</span>
        , we believe quality healthcare begins with{" "}
        <span className="font-semibold text-cyan-800">
          precision-built, reliable surgical equipment
        </span>
        .
      </motion.div>
    </section>
  );
};

export default AboutContent;