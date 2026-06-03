import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiClock, FiCalendar, FiSettings } from "react-icons/fi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const team = [
  {
    name: "Mr. Devdutt Arya",
    role: "CEO & Founder",
    avatar: null,
    initials: "DA",
    since: 2013,
    yearsExp: "12+",
    department: "Bhiwani",
    bio: "With over 15 years of experience in surgical equipment manufacturing, Mr. Devdutt Arya founded M/S Dev Industries in 2013 to bridge the gap between quality and affordability in Indian healthcare.",
    email: "",
  },
  {
    name: "Gagandeep",
    role: "Manager",
    avatar: null,
    initials: "GD",
    since: 2020,
    yearsExp: "5+",
    department: "Operations",
    bio: "Overseeing day-to-day manufacturing, quality control, and supply-chain logistics, Gagandeep ensures every product that leaves Bhiwani meets medical-grade benchmarks.",
    email: "",
  },
  {
    name: "Sanjay Narang",
    role: "Manager",
    avatar: null,
    initials: "SN",
    since: 2020,
    yearsExp: "5+",
    department: "Operations",
    bio: "With a background in mechanical engineering and production management, Sanjay Narang leads our assembly line teams to maintain the precision and reliability our clients expect.",
    email: "",
  },
];

const TeamSection = () => {
  return (
    <section
      className="py-16 sm:py-24 px-4 sm:px-6 md:px-16 lg:px-20"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f0f9ff 50%, #f8faf9 100%)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Google Font import — add this to your index.html <head> if not already present:
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet" />
      */}

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="uppercase font-semibold text-xs sm:text-sm tracking-widest"
            style={{ color: "#0e7490", letterSpacing: "0.16em" }}
          >
            The People Behind the Precision
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our <span style={{ color: "#0891b2" }}>Leadership</span> Team
          </motion.h2>

          <motion.div
            className="rounded-full mx-auto mt-4"
            style={{ height: 3, background: "linear-gradient(90deg, #0891b2, #06b6d4)" }}
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded overflow-hidden flex flex-col"
              style={{ border: "0.5px solid #e5e7eb" }}
            >
              {/* Card Header */}
              <div
                className="relative flex flex-col items-center gap-3 px-6 pt-8 pb-6"
                style={{
                  background: "linear-gradient(135deg, #0c4a6e 0%, #0891b2 100%)",
                }}
              >
                {/* Tenure Badge */}
                <div
                  className="absolute top-3 right-3 flex items-center gap-1 rounded-full px-3 py-1 text-white"
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    whiteSpace: "nowrap",
                  }}
                >
                  <FiCalendar size={10} />
                  <span>Since {member.since}</span>
                </div>

                {/* Avatar */}
                <div
                  className="flex items-center justify-center rounded-full text-white font-bold"
                  style={{
                    width: 72,
                    height: 72,
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.5rem",
                    background: "rgba(255,255,255,0.12)",
                    border: "2px solid rgba(255,255,255,0.25)",
                  }}
                >
                  {member.avatar ? (
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    member.initials
                  )}
                </div>

                {/* Name & Role */}
                <div className="text-center">
                  <h3
                    className="text-white font-semibold"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.05rem",
                      margin: 0,
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="mt-0.5"
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.75)",
                      fontWeight: 500,
                      letterSpacing: "0.04em",
                      margin: 0,
                    }}
                  >
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-5">
                {/* Stat Chips */}
                <div className="flex gap-2 mb-4">
                  <div
                    className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-gray-500"
                    style={{ fontSize: 12, background: "#f8fafc", border: "0.5px solid #e5e7eb" }}
                  >
                    <FiClock size={12} style={{ color: "#0891b2" }} />
                    <span>{member.yearsExp} yrs</span>
                  </div>
                  <div
                    className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-gray-500"
                    style={{ fontSize: 12, background: "#f8fafc", border: "0.5px solid #e5e7eb" }}
                  >
                    {member.since === 2013 ? (
                      <HiOutlineOfficeBuilding size={12} style={{ color: "#0891b2" }} />
                    ) : (
                      <FiSettings size={12} style={{ color: "#0891b2" }} />
                    )}
                    <span>{member.department}</span>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-500 flex-1" style={{ fontSize: 13, lineHeight: 1.65 }}>
                  {member.bio}
                </p>

                {/* Footer */}
                <div
                  className="flex items-center gap-2 mt-4 pt-4"
                  style={{ borderTop: "0.5px solid #e5e7eb" }}
                >
                 
                  <span
                    className="ml-auto uppercase tracking-widest"
                    style={{ fontSize: 10, color: "#9ca3af", fontWeight: 500 }}
                  >
                    Dev Industries
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-gray-400 text-xs sm:text-sm mt-12"
        >
          Our team of skilled technicians, welders, and assembly specialists in Bhiwani is the
          backbone of every product we ship.
        </motion.p>
      </div>
    </section>
  );
};

export default TeamSection;