import { motion } from "framer-motion";
import visionBg from "/images/products/spare-parts/Over_bed_table.png";

const ProductHeroSection = () => {
  const features = [
    "Hospital Grade Steel",
    "Height Adjustable",
    "360° Swivel Castor",
    "Easy-Clean Surface",
  ];

  return (
   <section
			className="
        relative
        min-h-[75vh]
        sm:min-h-[70vh]
        md:h-[55vh]
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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/75 to-slate-950/92" />

      {/* Cyan radiant burst — top center */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[480px] sm:h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(34,211,238,0.35) 0%, rgba(6,182,212,0.15) 40%, transparent 70%)",
          filter: "blur(35px)",
        }}
      />

      {/* Secondary center orb */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 3, delay: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] sm:w-[420px] sm:h-[420px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(186,230,255,0.3) 0%, transparent 65%)",
          filter: "blur(50px)",
        }}
      />

      {/* Conic light rays */}
      <motion.div
        initial={{ opacity: 0, rotate: -15 }}
        animate={{ opacity: 0.06, rotate: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120vw] h-[80vh] pointer-events-none"
        style={{
          background:
            "conic-gradient(from 260deg at 50% 0%, transparent 0deg, rgba(34,211,238,0.9) 5deg, transparent 10deg, transparent 20deg, rgba(34,211,238,0.6) 24deg, transparent 28deg, transparent 40deg, rgba(34,211,238,0.4) 43deg, transparent 47deg)",
        }}
      />

      {/* Top highlight bar */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.4 }}
        className="absolute top-0 left-0 w-full h-[2px] origin-center"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.6), transparent)",
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
					<span className="block w-6 sm:w-8 h-px bg-sky-400" />
					<span className="text-sky-400 uppercase tracking-[0.2em] text-[10px] sm:text-xs font-medium font-mono">
						Patient care essentials, engineered for excellence
					</span>
					<span className="block w-6 sm:w-8 h-px bg-sky-400" />
				</motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-bold text-white leading-[1.1] tracking-tight"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          Hospital Furniture &
          <span
            className="block mt-1 text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(90deg, #67e8f9 0%, #e0f9ff 50%, #22d3ee 100%)",
            }}
          >
            Spare Parts Solutions
          </span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mx-auto mt-4 mb-4 w-14 h-[2px] origin-center"
          style={{
            background: "linear-gradient(90deg, #06b6d4, #a5f3fc, #06b6d4)",
          }}
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="px-2 text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed max-w-xl mx-auto"
        >
          Precision-manufactured beds, trolleys, OT tables, and replacement parts —
          engineered for durability, built to meet India's demanding hospital environments.
        </motion.p>

        
      </div>
    </section>
  );
};

export default ProductHeroSection;