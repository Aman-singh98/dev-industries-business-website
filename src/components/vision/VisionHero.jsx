

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import visionBg from "/images/about/aboutbg3.jpg"; // replace with your image path


const VisionHero = () => {
  return (
    <section
      className="
        relative
        min-h-[75vh]
        sm:min-h-[70vh]
        md:h-[50vh]
        flex items-center justify-center
        overflow-hidden
        px-4 sm:px-6 lg:px-10
      "
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${visionBg})` }}
      />

      {/* Dark overlay — deep emerald */}
   <div className="absolute inset-0 bg-gradient-to-b from-green-950/50 via-green-950/40 to-green-950/50" />

      {/* Emerald radiant burst — top center */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[480px] sm:h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(16,185,129,0.45) 0%, rgba(5,150,105,0.2) 40%, transparent 70%)",
          filter: "blur(35px)",
        }}
      />

      {/* Secondary soft green orb */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.28 }}
        transition={{ duration: 3, delay: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] sm:w-[420px] sm:h-[420px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(110,231,183,0.22) 0%, transparent 65%)",
          filter: "blur(50px)",
        }}
      />

      {/* Conic light rays — emerald toned */}
      <motion.div
        initial={{ opacity: 0, rotate: -15 }}
        animate={{ opacity: 0.07, rotate: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120vw] h-[80vh] pointer-events-none"
        style={{
          background:
            "conic-gradient(from 260deg at 50% 0%, transparent 0deg, rgba(16,185,129,0.9) 5deg, transparent 10deg, transparent 20deg, rgba(16,185,129,0.6) 24deg, transparent 28deg, transparent 40deg, rgba(16,185,129,0.4) 43deg, transparent 47deg)",
        }}
      />

      {/* Top highlight bar — emerald */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.4 }}
        className="absolute top-0 left-0 w-full h-[2px] origin-center"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(16,185,129,0.85), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">

        {/* Eyebrow tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-4 sm:mb-5"
        >
          <span className="block w-6 sm:w-8 h-px" style={{ background: "#10b981" }} />
          <span
            className="uppercase tracking-[0.2em] text-[10px] sm:text-xs font-medium font-mono"
            style={{ color: "#6ee7b7" }}
          >
            Our Purpose & Direction
          </span>
          <span className="block w-6 sm:w-8 h-px" style={{ background: "#10b981" }} />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          Building Healthcare
          <span
            className="block mt-1 text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #6ee7b7 0%, #d1fae5 50%, #10b981 100%)",
            }}
          >
            Infrastructure for India
          </span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mx-auto mt-4 mb-4 w-14 h-[2px] origin-center"
          style={{
            background: "linear-gradient(90deg, #10b981, #a7f3d0, #10b981)",
          }}
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="px-2 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto"
          style={{ color: "#a7c4b5" }}
        >
          At M/S Dev Industries, our vision, mission, and values shape every
          product we manufacture and every partnership we build since 2013.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-6 flex flex-col sm:flex-row gap-3 justify-center items-center w-full"
        >
          <Link
            to="/products"
            className="w-full sm:w-auto min-w-[180px] text-center px-6 py-2.5 text-sm font-semibold transition-all"
            style={{
              background: "linear-gradient(90deg, #059669, #047857)",
              color: "#ffffff",
              borderRadius: "2px",
              letterSpacing: "0.05em",
            }}
          >
            Explore Products
          </Link>

          <Link
            to="/contact"
            className="w-full sm:w-auto min-w-[180px] text-center px-6 py-2.5 text-sm font-semibold transition-all"
            style={{
              border: "1px solid rgba(16,185,129,0.55)",
              color: "#6ee7b7",
              borderRadius: "2px",
              letterSpacing: "0.05em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(16,185,129,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            Contact Us
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default VisionHero;