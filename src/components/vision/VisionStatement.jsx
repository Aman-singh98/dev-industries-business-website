import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    label: "PILLAR",
    title: "Reach Every Hospital",
    desc: "Expanding supply to all government and private institutions across India by 2030.",
  },
  {
    number: "02",
    label: "PILLAR",
    title: "Set Quality Benchmarks",
    desc: "Medical-grade standards on every unit — O.T. tables, surgical lights, hospital furniture.",
  },
  {
    number: "03",
    label: "PILLAR",
    title: "Continuous Innovation",
    desc: "Evolving our manufacturing to meet tomorrow's healthcare demands under the Dev brand.",
  },
];

const footerStats = [
  { value: "PAN India", label: "SUPPLY TARGET" },
  { value: "2030", label: "VISION YEAR" },
  { value: "200+", label: "HOSPITALS SERVED" },
];

const badges = ["PAN India Reach", "Vision 2030", "MSME Registered", "GEM Verified"];

export function VisionStatement() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f8faf9] to-gray-50">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,700;0,800;1,700;1,900&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Lora:ital,wght@0,400;0,500;1,400&display=swap');
        .font-barlow { font-family: 'Barlow Condensed', sans-serif; }
        .font-dm { font-family: 'DM Sans', sans-serif; }
        .font-lora { font-family: 'Lora', serif; }
      `}</style>

      {/* TOP GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center gap-4 sm:gap-5 px-4 sm:px-8 lg:px-10 py-10 sm:py-12 lg:py-16 border-b lg:border-b-0 lg:border-r border-gray-200"
        >
          {/* Tag */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-0.5 bg-indigo-500" />
            <span className="font-dm text-[11px] font-bold tracking-[0.22em] text-indigo-400 uppercase">
              Our Vision
            </span>
          </div>

          {/* Heading */}
          <h2
            className="font-barlow italic font-black text-[clamp(28px,5vw,60px)] leading-[1.05] tracking-tight text-slate-900 m-0"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
          >
            India's Most Trusted
            <span className="block bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              Surgical Equipment Brand
            </span>
          </h2>

          {/* Subtext */}
          <p className="font-dm text-sm text-slate-500 leading-relaxed max-w-sm m-0">
            A bold commitment to craftsmanship, compliance, and continuous innovation —
            from Bhiwani to every hospital in India.
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col justify-center gap-5 sm:gap-7 px-4 sm:px-8 lg:px-10 py-10 sm:py-12 lg:py-16"
        >
          {/* Statement Card */}
          <div className="relative bg-white border border-gray-200 rounded-lg px-5 sm:px-7 pt-6 sm:pt-7 pb-6 sm:pb-7 pl-7 sm:pl-9 shadow-sm">
            {/* Left accent bar */}
            <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-gradient-to-b from-indigo-500 to-cyan-400 rounded-r" />

            <p className="font-lora italic text-[15px] sm:text-[17px] lg:text-[18px] text-slate-600 leading-[1.85] sm:leading-[1.9] m-0">
              To become India's most trusted manufacturer of hospital-grade surgical
              equipment — recognized for our commitment to{" "}
              <strong className="text-slate-900 not-italic font-semibold">craftsmanship</strong>,{" "}
              <strong className="text-slate-900 not-italic font-semibold">compliance</strong>, and{" "}
              <strong className="text-slate-900 not-italic font-semibold">continuous innovation</strong>{" "}
              in medical infrastructure.
            </p>
            <p className="font-lora text-[13px] sm:text-[14px] lg:text-[15px] text-slate-400 leading-[1.85] mt-3 sm:mt-4 mb-0">
              We aim to expand our reach across every government and private hospital in
              India, setting benchmarks in product quality and after-sales reliability
              under the Dev brand.
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {badges.map((b, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.07 }}
                className="inline-flex items-center gap-1.5 border border-indigo-200 px-3 sm:px-3.5 py-1 text-[12px] sm:text-[13px] font-dm text-indigo-600 bg-indigo-50 tracking-wide"
              >
                {b}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* PILLAR CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-gray-200">
        {pillars.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`bg-white px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-7 sm:pb-9 hover:shadow-[0_8px_28px_rgba(99,102,241,0.08)] transition-shadow duration-200
              ${i < pillars.length - 1 ? "border-b sm:border-b-0 sm:border-r border-gray-200" : ""}`}
          >
            <div className="font-barlow font-black text-[70px] sm:text-[80px] lg:text-[90px] leading-none text-indigo-500/10 tracking-[-2px] mb-3 sm:mb-4 select-none">
              {p.number}
            </div>
            <p className="font-dm text-[12px] sm:text-[13px] lg:text-[14px] font-bold tracking-[0.18em] text-indigo-500 uppercase mb-1 sm:mb-1.5">
              {p.label}
            </p>
            <p className="font-dm text-[16px] sm:text-[17px] lg:text-[18px] font-bold text-slate-900 leading-snug mb-2 sm:mb-2.5">
              {p.title}
            </p>
            <p className="font-dm text-[13px] sm:text-[14px] lg:text-[15px] text-slate-500 leading-relaxed">
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* FOOTER BAR */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 bg-[#f8faf9] border-t border-gray-200 px-4 sm:px-8 lg:px-10 py-4 sm:py-5">

        {/* Brand tags */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-5">
          {["DEV INDUSTRIES", "EST. 2013", "BHIWANI"].map((t, i) => (
            <span
              key={i}
              className="font-dm text-[12px] sm:text-[13px] lg:text-[15px] font-semibold tracking-[0.14em] text-gray-600 uppercase"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-8 lg:gap-10">
          {footerStats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-barlow font-black text-2xl sm:text-3xl lg:text-4xl text-indigo-500 leading-none">
                {s.value}
              </div>
              <div className="font-dm text-[10px] sm:text-[11px] lg:text-[12px] tracking-[0.14em] text-slate-600 uppercase mt-0.5">
                {s.label}
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default VisionStatement;