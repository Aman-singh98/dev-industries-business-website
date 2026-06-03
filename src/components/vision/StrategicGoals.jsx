import { motion } from "framer-motion";
import {
  FaRoad,
  FaFlask,
  FaGlobeAsia,
  FaCertificate,
  FaWrench,
  FaChartLine,
} from "react-icons/fa";

const goals = [
  {
    year: "2025",
    icon: <FaCertificate />,
    title: "ISO Certification",
    description:
      "Pursue ISO 13485 medical device quality management certification to strengthen global supply chain eligibility.",
    status: "In Progress",
    statusColor: "bg-amber-100 text-amber-700",
  },
  {
    year: "2025–26",
    icon: <FaFlask />,
    title: "Product Innovation Lab",
    description:
      "Establish an in-house R&D unit focused on next-generation hydraulic O.T. table mechanisms and LED surgical lighting.",
    status: "Planned",
    statusColor: "bg-cyan-100 text-cyan-700",
  },
  {
    year: "2026",
    icon: <FaGlobeAsia />,
    title: "Export Readiness",
    description:
      "Expand supply to neighbouring South Asian markets, beginning with government hospital procurement in Nepal and Bangladesh.",
    status: "Planned",
    statusColor: "bg-cyan-100 text-cyan-700",
  },
  {
    year: "2026",
    icon: <FaWrench />,
    title: "Service Network Expansion",
    description:
      "Launch a nationwide authorised service centre network to provide on-site maintenance and genuine spare part availability.",
    status: "Planned",
    statusColor: "bg-cyan-100 text-cyan-700",
  },
  {
    year: "2027",
    icon: <FaChartLine />,
    title: "Capacity Scale-Up",
    description:
      "Double manufacturing floor capacity in Bhiwani and introduce automated CNC-assisted fabrication for precision components.",
    status: "Vision",
    statusColor: "bg-gray-100 text-gray-600",
  },
  {
    year: "2028+",
    icon: <FaRoad />,
    title: "Pan-India Market Leader",
    description:
      "Achieve market leadership in MSME-segment surgical equipment supply across all government e-procurement portals.",
    status: "Vision",
    statusColor: "bg-gray-100 text-gray-600",
  },
];

const StrategicGoals = () => {
  return (
    <section className="py-16 sm:py-16 bg-gradient-to-b from-white via-[#f8faf9] to-gray-50 px-4 sm:px-6 md:px-16 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-cyan-700 uppercase font-semibold text-xs sm:text-sm tracking-widest"
          >
            Roadmap
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-gray-900"
          >
            Strategic <span className="text-cyan-600">Goals</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-gray-500 text-sm sm:text-base max-w-xl mx-auto"
          >
            Our phased growth plan — from certification milestones to becoming
            India's foremost surgical equipment manufacturer.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-300 via-cyan-500 to-cyan-300 opacity-30 -translate-x-1/2" />

          <div className="space-y-10 sm:space-y-12">
            {goals.map((g, i) => {
              const isRight = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isRight ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={`relative flex items-start gap-6 sm:gap-8 ${
                    isRight ? "sm:flex-row" : "sm:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Card */}
                  <div
                    className={`flex-1 bg-white rounded-2xl shadow-md p-5 sm:p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300 ${
                      isRight ? "sm:text-right" : "sm:text-left"
                    } ml-14 sm:ml-0`}
                  >
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        isRight ? "sm:justify-end" : "sm:justify-start"
                      }`}
                    >
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${g.statusColor}`}
                      >
                        {g.status}
                      </span>
                      <span className="text-xs text-gray-400 font-mono">
                        {g.year}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                      {g.title}
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                      {g.description}
                    </p>
                  </div>

                  {/* Centre dot — hidden on mobile, shown sm+ */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-cyan-500 text-cyan-600 items-center justify-center shadow-md text-base z-10">
                    {g.icon}
                  </div>

                  {/* Mobile dot */}
                  <div className="sm:hidden absolute left-0 top-4 w-10 h-10 rounded-full bg-white border-2 border-cyan-500 text-cyan-600 flex items-center justify-center shadow-md text-base z-10">
                    {g.icon}
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden sm:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicGoals;