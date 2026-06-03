import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutImage from "/images/about/aboutbg.jpg";
import aboutThumb from "/images/about/aboutbg1.jpg";

const stats = [
  { value: "2013", label: "Year Founded" },
  { value: "200+", label: "Hospitals Served" },
  { value: "MICRO", label: "MSME Category" },
  { value: "OBC", label: "Enterprise Category" },
];

const AboutPreview = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 200;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 5;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCounter(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-blue-50 overflow-hidden">

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16">

        {/* ── Left: Image block ── */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md">

            {/* Main image */}
            <motion.img
              src={aboutImage}
              alt="Dev Industries manufacturing facility"
              className="rounded shadow-2xl object-cover w-full h-60 sm:h-80 md:h-96 lg:h-[28rem]"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />

            {/* Floating thumb */}
            <motion.img
              src={aboutThumb}
              alt="Medical equipment"
              className="absolute -top-5 -right-4 sm:-top-8 sm:-right-6 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-white shadow-xl object-cover"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />

            {/* Counter badge */}
            <motion.div
              className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-blue-700 text-white px-4 sm:px-7 py-3 sm:py-4 rounded shadow-xl text-center"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold leading-none">
                {counter}+
              </p>
              <p className="text-xs sm:text-sm mt-1 text-blue-100">Hospitals Served</p>
            </motion.div>

            {/* Established tag */}
            <motion.div
              className="absolute -bottom-4 right-2 sm:-bottom-5 sm:right-4 bg-white border border-slate-100 shadow-lg px-3 sm:px-4 py-2 sm:py-2.5 rounded flex items-center gap-1.5 sm:gap-2"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-blue-600 inline-block flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-bold text-slate-700 tracking-wide uppercase whitespace-nowrap">
                Est. 2013 · Bhiwani, Haryana
              </span>
            </motion.div>

          </div>
        </div>

        {/* ── Right: Content block ── */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-5 pt-8 sm:pt-10 lg:pt-0"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <span className="text-blue-700 font-semibold uppercase text-xs sm:text-sm tracking-widest">
            Who We Are
          </span>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Manufacturing{" "}
            <span className="text-blue-700">Excellence</span>{" "}
            Since 2013
          </h2>

          {/* Body */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            <span className="font-semibold text-slate-900">M/S Dev Industries</span> is a
            MSME-registered micro-manufacturing enterprise based in the Industrial Area of
            Bhiwani, Haryana. Since 2013, we have supplied hospital-grade medical equipment to
            healthcare institutions across India.
          </p>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We are an authorised supplier on the Government's{" "}
            <span className="font-semibold text-blue-700">GEM (Govt. E-Market)</span> platform,
            certified to manufacture O.T. Tables, O.T. Lights, Surgical Shadowless Lamps,
            Hospital Furniture, and genuine spare parts under the{" "}
            <span className="font-semibold text-slate-800 italic">Dev</span> brand.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-1 sm:mt-2">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="bg-white border border-slate-100 rounded py-3 sm:py-4 px-2 sm:px-3 text-center shadow-sm"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i, duration: 0.5 }}
              >
                <p className="text-lg sm:text-xl md:text-2xl font-extrabold text-blue-700 leading-none">
                  {s.value}
                </p>
                <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1 sm:mt-1.5">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-block mt-1 sm:mt-2"
          >
            <Link
              to="/company"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 sm:px-7 rounded shadow-lg transition-colors duration-200 text-sm w-full sm:w-auto justify-center sm:justify-start"
            >
              Learn More About Us
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutPreview;