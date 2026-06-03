

import { motion } from "framer-motion";
import {
  FaBed,
  FaLightbulb,
  FaTools,
  FaHospital,
  FaShieldAlt,
  FaCheckCircle,
  FaCertificate,
  FaHandshake,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaBed />,
    title: "O.T. Tables (Hydraulic & Manual)",
    description:
      "Precision-engineered operation tables with smooth hydraulic movement, ideal for all types of surgical procedures.",
  },
  {
    icon: <FaLightbulb />,
    title: "O.T. Lights & Shadowless Lamps",
    description:
      "High-intensity surgical lights that eliminate shadows, ensuring maximum visibility during critical operations.",
  },
  {
    icon: <FaHospital />,
    title: "Hospital Furniture",
    description:
      "Durable and ergonomic hospital furniture designed to meet the daily demands of clinical environments.",
  },
  {
    icon: <FaTools />,
    title: "Electronic Reflectors",
    description:
      "Advanced electronic reflectors engineered for consistent and reliable performance in operating theatres.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Rubber & Plastic Components",
    description:
      "High-quality rubber and plastic parts manufactured to exact specifications for use in medical equipment assemblies.",
  },
  {
    icon: <FaCertificate />,
    title: "Genuine Spare Parts",
    description:
      "Original Dev-brand spare parts ensuring compatibility, longevity, and uninterrupted operation of all equipment.",
  },
  {
    icon: <FaShieldAlt />,
    title: "GEM & MSME Certified Supply",
    description:
      "Fully registered on the Government E-Market platform, enabling seamless procurement for government hospitals.",
  },
  {
    icon: <FaHandshake />,
    title: "After-Sales Support",
    description:
      "Dedicated support for installation, maintenance, and genuine part replacement to keep equipment running long-term.",
  },
];

const HowWeHelp = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-[#f8faf9]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight font-[Poppins] leading-tight md:leading-snug"
        >
          How <span className="text-cyan-600">Dev Industries</span> Serves Healthcare
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
        >
          Delivering precision-built O.T. equipment, surgical lighting, and
          hospital furniture that healthcare professionals can depend on — every
          procedure, every time.
        </motion.p>

        {/* Benefits Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: index * 0.08 + 0.2 }}
                className="text-cyan-600 text-5xl mb-4"
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;