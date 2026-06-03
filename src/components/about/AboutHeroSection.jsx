

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutBg from "/images/about/aboutbg5.jpg"; // replace with your image path

const AboutHeroSection = () => {
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
        style={{ backgroundImage: `url(${aboutBg})` }}
      />

      {/* Dark overlay — deep warm dark */}
     <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/50" />

      {/* Gold radiant burst — top center */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[480px] sm:h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(200,155,60,0.4) 0%, rgba(180,120,30,0.18) 40%, transparent 70%)",
          filter: "blur(35px)",
        }}
      />

      {/* Secondary warm orb */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 3, delay: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] sm:w-[420px] sm:h-[420px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,220,120,0.25) 0%, transparent 65%)",
          filter: "blur(50px)",
        }}
      />

      {/* Conic light rays — gold toned */}
      <motion.div
        initial={{ opacity: 0, rotate: -15 }}
        animate={{ opacity: 0.07, rotate: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120vw] h-[80vh] pointer-events-none"
        style={{
          background:
            "conic-gradient(from 260deg at 50% 0%, transparent 0deg, rgba(200,155,60,0.9) 5deg, transparent 10deg, transparent 20deg, rgba(200,155,60,0.6) 24deg, transparent 28deg, transparent 40deg, rgba(200,155,60,0.4) 43deg, transparent 47deg)",
        }}
      />

      {/* Top highlight bar — gold */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.4 }}
        className="absolute top-0 left-0 w-full h-[2px] origin-center"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(200,155,60,0.8), transparent)",
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
          <span className="block w-6 sm:w-8 h-px" style={{ background: "#c89b3c" }} />
          <span
            className="uppercase tracking-[0.2em] text-[10px] sm:text-xs font-medium font-mono"
            style={{ color: "#e8c06a" }}
          >
            About M/S Dev Industries — Est. 2013
          </span>
          <span className="block w-6 sm:w-8 h-px" style={{ background: "#c89b3c" }} />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          Precision Medical Equipment
          <span
            className="block mt-1 text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(90deg, #f0c060 0%, #fffbe0 50%, #c89b3c 100%)",
            }}
          >
            Manufactured for Healthcare
          </span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mx-auto mt-4 mb-4 w-14 h-[2px] origin-center"
          style={{
            background: "linear-gradient(90deg, #c89b3c, #f5e0a0, #c89b3c)",
          }}
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="px-2 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto"
          style={{ color: "#d1c5a8" }}
        >
          Supplying hospital-grade O.T. Tables, Surgical Lights, and Medical
          Furniture to healthcare institutions across India since 2013.
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
              background: "linear-gradient(90deg, #c89b3c, #a87828)",
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
              border: "1px solid rgba(200,155,60,0.6)",
              color: "#e8c06a",
              borderRadius: "2px",
              letterSpacing: "0.05em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(200,155,60,0.12)";
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

export default AboutHeroSection;