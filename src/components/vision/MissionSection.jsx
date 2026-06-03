

import { motion } from "framer-motion";
import { FiTarget, FiCheckCircle } from "react-icons/fi";
import { FaMedal, FaRupeeSign, FaClock } from "react-icons/fa";

const pillars = [
  {
    icon: <FaMedal />,
    label: "Quality",
    desc: "Medical-grade standards on every unit",
  },
  {
    icon: <FaRupeeSign />,
    label: "Affordability",
    desc: "Competitive pricing for all institutions",
  },
  {
    icon: <FaClock />,
    label: "Longevity",
    desc: "Built to perform over decades of use",
  },
];

const highlights = [
  "Hospital-grade O.T. Tables & Surgical Lights",
  "MSME-registered, GEM-verified supplier",
  "Serving healthcare institutions across India",
];

const stats = [
  { value: "12+", label: "Years Manufacturing" },
  { value: "200+", label: "Hospitals Served" },
  { value: "3+", label: "Certifications" },
];

export function MissionSection() {
  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,700;0,800;1,700;1,900&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Lora:ital,wght@0,400;0,500;1,400&display=swap');
      `}</style>

      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #0e7490 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Top-right cyan glow */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* ── TOP GRID — Label+Heading left, Statement right ── */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Icon badge */}
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-200 shadow-sm">
                <FiTarget className="text-cyan-600 text-2xl" />
              </div>
              <p
                className="text-[18px] font-extrabold uppercase tracking-[0.2em] text-cyan-500"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Our Mission
              </p>
            </div>

            {/* Heading */}
            <h2
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black text-slate-900 leading-[1.04] tracking-tight"
              style={{ fontFamily: "'Inter', sans-serif", fontStyle: "italic" }}
            >
              Empowering Healthcare
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500">
                With Precision Equipment
              </span>
            </h2>

            {/* Animated underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 56 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="h-[3px] bg-gradient-to-r from-cyan-500 to-indigo-400 rounded"
            />

            {/* Stat row */}
            <div className="flex flex-wrap gap-6 pt-2">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  <p
                    className="text-2xl sm:text-3xl font-black text-cyan-600"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="text-[11px] text-slate-500 uppercase tracking-widest mt-0.5"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-7"
          >
            {/* Statement card */}
            <div className="relative bg-slate-50 border border-slate-100 rounded-2xl p-7 shadow-sm">
              {/* Left accent bar */}
              <div className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-cyan-500 to-indigo-400 rounded-r-full" />

              <p
                className="text-slate-700 text-[1rem] leading-[1.9]"
                style={{ fontFamily: "'Lora', serif" }}
              >
                To empower hospitals and healthcare professionals with{" "}
                <strong className="text-slate-900 font-semibold">
                  reliable, precision-engineered medical equipment
                </strong>{" "}
                that enhances patient outcomes and surgical efficiency.
              </p>
              <p
                className="text-slate-500 text-[0.92rem] leading-[1.85] mt-4"
                style={{ fontFamily: "'Lora', serif" }}
              >
                We focus on quality, affordability, and long-term performance —
                ensuring every O.T. Table, Surgical Light, and Hospital Furniture
                piece we manufacture meets the highest standards of the healthcare
                industry.
              </p>
            </div>

            {/* Highlight checklist */}
            <ul className="space-y-3">
              {highlights.map((h, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.1 }}
                  className="flex items-center gap-3 text-slate-700 text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <FiCheckCircle className="text-cyan-500 text-lg flex-shrink-0" />
                  {h}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ── BOTTOM — Pillar cards ── */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
              className="group flex items-center gap-5 bg-white border border-slate-100 px-6 py-5 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded bg-gradient-to-br from-cyan-500 to-indigo-500 text-white flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                {p.icon}
              </div>

              <div>
                <p
                  className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-cyan-600 mb-0.5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {p.label}
                </p>
                <p
                  className="text-slate-500 text-xs leading-snug"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MissionSection;