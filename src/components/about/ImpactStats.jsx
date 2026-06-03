import { motion } from "framer-motion";
import { FaHospital, FaCalendarAlt, FaCertificate, FaMapMarkedAlt } from "react-icons/fa";

const stats = [
  {
    value: "2013",
    label: "Year Established",
    icon: <FaCalendarAlt />,
  },
  {
    value: "200+",
    label: "Hospitals Served",
    icon: <FaHospital />,
  },
  {
    value: "3+",
    label: "Certifications",
    icon: <FaCertificate />,
  },
  {
    value: "PAN India",
    label: "Supply Reach",
    icon: <FaMapMarkedAlt />,
  },
];

const ImpactStats = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-[#f8faf9]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight font-[Poppins] leading-tight md:leading-snug">
            Our <span className="text-cyan-700"> Impact </span>&
            <span className="text-cyan-700"> Experience</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Over a decade of manufacturing hospital-grade equipment, serving
            healthcare institutions with precision and trust.
          </p>
        </div>

        {/* RHOMBUS GRID */}
        <div className="flex flex-wrap justify-center gap-20">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative w-56 h-56"
            >
              {/* RHOMBUS SHAPE */}
              <div
                className="absolute inset-0 bg-white border border-gray-200 shadow-xl
                           transform rotate-45 rounded-2xl"
              />

              {/* CONTENT (STRAIGHT) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <div className="text-cyan-700 text-3xl mb-3">{item.icon}</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-1">
                  {item.value}
                </h3>
                <p className="text-sm text-gray-600 tracking-wide">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;