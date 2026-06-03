
import { motion } from "framer-motion";
import { FaCertificate, FaFlag, FaWrench, FaTruck, FaSlidersH, FaHeadset } from "react-icons/fa";

const reasons = [
  {
    icon: <FaCertificate />,
    number: "01",
    title: "ISO Certified Manufacturing",
    desc: "Every product meets international quality standards, manufactured under strict quality control processes.",
  },
  {
    icon: <FaFlag />,
    number: "02",
    title: "Made in India",
    desc: "Proudly manufactured in India with premium-grade stainless steel and locally sourced materials.",
  },
  {
    icon: <FaWrench />,
    number: "03",
    title: "Heavy Duty Build",
    desc: "Engineered for demanding surgical environments — built to last decades with minimal maintenance.",
  },
  {
    icon: <FaTruck />,
    number: "04",
    title: "Pan India Delivery",
    desc: "Reliable shipping to all 28 states. Fast dispatch with careful packaging to prevent damage.",
  },
  {
    icon: <FaSlidersH />,
    number: "05",
    title: "Customisation Available",
    desc: "Tailored configurations for specific surgical needs — dimensions, attachments, and features on request.",
  },
  {
    icon: <FaHeadset />,
    number: "06",
    title: "After-Sales Support",
    desc: "Dedicated support team for installation guidance, spare parts, and post-purchase assistance.",
  },
];

const WhyChooseUs = () => (
  <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-blue-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      >
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-px bg-blue-600" />
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-blue-600">
              Our Advantage
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-black text-gray-900 leading-tight">
            Why Hospitals
            <br />
            <span className="relative text-blue-600 inline-block">
              Choose Us
              <span className="absolute left-0 -bottom-1 right-0 h-0.5 bg-cyan-400 rounded block" />
            </span>
          </h2>
        </div>

        <p className="text-sm text-gray-500 max-w-sm leading-relaxed md:text-right">
          Over a decade of manufacturing excellence — delivering certified,
          heavy-duty OT equipment to hospitals across India and beyond.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map(({ icon, number, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="group relative bg-white border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 p-7 flex flex-col gap-5 overflow-hidden"
          >
            {/* Big number watermark */}
            <span className="absolute -bottom-3 -right-1 font-serif font-black text-8xl text-gray-100 leading-none select-none group-hover:text-blue-50 transition-colors duration-300">
              {number}
            </span>

            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Icon */}
            <div className="w-12 h-12 rounded bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 text-xl group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
              {icon}
            </div>

            {/* Accent line */}
            <div className="w-8 h-0.5 bg-blue-600 group-hover:w-14 transition-all duration-300" />

            {/* Text */}
            <div className="relative z-10">
              <h3 className="font-bold text-gray-900 text-base mb-2">
                {title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default WhyChooseUs;