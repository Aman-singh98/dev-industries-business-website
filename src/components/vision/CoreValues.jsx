import { motion } from "framer-motion";
import {
  FaMicroscope,
  FaHandshake,
  FaShieldAlt,
  FaLeaf,
  FaUsers,
  FaAward,
} from "react-icons/fa";

const values = [
  {
    icon: <FaMicroscope />,
    title: "Precision",
    color: "from-cyan-500 to-cyan-600",
    description:
      "Every component is manufactured with exact tolerances. Our medical-grade standards leave no room for error in the operating theatre.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Integrity",
    color: "from-teal-500 to-teal-600",
    description:
      "Transparency in pricing, compliance in certification, and honesty in every client relationship — that's the Dev Industries way.",
  },
  {
    icon: <FaHandshake />,
    title: "Partnership",
    color: "from-cyan-600 to-cyan-700",
    description:
      "We don't just sell equipment — we build long-term relationships with hospitals through dedicated after-sales support and genuine spare parts.",
  },
  {
    icon: <FaLeaf />,
    title: "Sustainability",
    color: "from-emerald-500 to-teal-500",
    description:
      "Durable construction that extends product lifecycles reduces waste and keeps maintenance costs low for healthcare institutions.",
  },
  {
    icon: <FaUsers />,
    title: "Community",
    color: "from-cyan-500 to-sky-500",
    description:
      "As an OBC-category MSME in Bhiwani, we proudly contribute to local employment and the growth of India's manufacturing ecosystem.",
  },
  {
    icon: <FaAward />,
    title: "Excellence",
    color: "from-cyan-700 to-cyan-800",
    description:
      "GEM-verified, MSME-registered, and GST-compliant — our credentials reflect a relentless pursuit of the highest standards.",
  },
];

const CoreValues = () => {
  return (
    <section
      id="values"
      className="py-16 sm:py-16 bg-gradient-to-b from-white via-gray-50 to-[#f8faf9] px-4 sm:px-6 md:px-16 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-cyan-700 uppercase font-semibold text-xs sm:text-sm tracking-widest"
          >
            What Drives Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-gray-900"
          >
            Our Core <span className="text-cyan-600">Values</span>
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-cyan-600 rounded-full mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              whileHover={{ y: -6, boxShadow: "0 12px 32px rgba(0,0,0,0.10)" }}
              className="bg-white rounded p-6 sm:p-8 shadow-md border border-gray-100 group transition-all duration-300"
            >
              {/* Icon pill */}
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${v.color} text-white text-2xl mb-5 shadow-md`}
              >
                {v.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-700 transition-colors">
                {v.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {v.description}
              </p>

              {/* Hover accent bar */}
              <motion.div
                className={`h-0.5 mt-5 rounded-full bg-gradient-to-r ${v.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;