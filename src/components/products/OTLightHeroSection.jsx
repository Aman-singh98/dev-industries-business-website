import { motion } from "framer-motion";
import otLightBg from "/images/products/ot-light/OT_Light_Single.png"; // 🔁 swap path as needed

const OTLightHeroSection = () => {
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
				style={{ backgroundImage: `url(${otLightBg})` }}
			/>

			{/* Deep dark overlay — warm-tinted to contrast with the "light" theme */}
			<div className="absolute inset-0 bg-gradient-to-b from-zinc-950/85 via-zinc-900/70 to-zinc-950/90" />

			{/* ── Radiant burst: the "light source" at the top-center ── */}
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 2.5, ease: "easeOut" }}
				className="
          absolute
          top-[-80px] left-1/2
          -translate-x-1/2
          w-[280px] h-[280px]
          sm:w-[420px] sm:h-[420px]
          md:w-[600px] md:h-[600px]
          rounded-full
          pointer-events-none
        "
				style={{
					background:
						"radial-gradient(ellipse at center, rgba(253,230,138,0.55) 0%, rgba(251,191,36,0.2) 40%, transparent 70%)",
					filter: "blur(40px)",
				}}
			/>

			{/* Secondary warm amber orb — offset for drama */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.35 }}
				transition={{ duration: 3, delay: 0.5 }}
				className="
          absolute
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[200px] h-[200px]
          sm:w-[350px] sm:h-[350px]
          md:w-[500px] md:h-[500px]
          rounded-full
          pointer-events-none
        "
				style={{
					background:
						"radial-gradient(circle, rgba(254,215,170,0.4) 0%, transparent 65%)",
					filter: "blur(60px)",
				}}
			/>

			{/* Radiating light rays — CSS conic gradient */}
			<motion.div
				initial={{ opacity: 0, rotate: -15 }}
				animate={{ opacity: 0.07, rotate: 0 }}
				transition={{ duration: 2, ease: "easeOut" }}
				className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120vw] h-[80vh] pointer-events-none"
				style={{
					background:
						"conic-gradient(from 260deg at 50% 0%, transparent 0deg, rgba(253,230,138,0.9) 5deg, transparent 10deg, transparent 20deg, rgba(253,230,138,0.6) 24deg, transparent 28deg, transparent 40deg, rgba(253,230,138,0.4) 43deg, transparent 47deg)",
				}}
			/>

			{/* Thin top-edge highlight bar */}
			<motion.div
				initial={{ scaleX: 0, opacity: 0 }}
				animate={{ scaleX: 1, opacity: 1 }}
				transition={{ duration: 1.4, delay: 0.4 }}
				className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-300/60 to-transparent origin-center"
			/>

			{/* Content */}
			<div className="relative z-10 text-center max-w-5xl mx-auto">
				{/* Eyebrow tag */}
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="inline-flex items-center gap-2 mb-4 sm:mb-5"
				>
					<span className="block w-6 sm:w-8 h-px bg-amber-400" />
					<span className="text-amber-300 uppercase tracking-[0.2em] text-[10px] sm:text-xs font-medium font-mono">
						Zero-Shadow Illumination
					</span>
					<span className="block w-6 sm:w-8 h-px bg-amber-400" />
				</motion.div>

				{/* Heading */}
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.3 }}
					className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-bold
            text-white
            leading-[1.1]
            tracking-tight
          "
					style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
				>
					Operation Theatre
					<span
						className="block mt-1 text-transparent bg-clip-text"
						style={{
							backgroundImage:
								"linear-gradient(90deg, #fcd34d 0%, #fef3c7 50%, #f59e0b 100%)",
						}}
					>
						Lights & Luminaires
					</span>
				</motion.h1>

				{/* Divider */}
				<motion.div
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 0.7, delay: 0.7 }}
					className="mx-auto mt-5 mb-5 w-16 h-[2px] origin-center"
					style={{
						background: "linear-gradient(90deg, #f59e0b, #fef08a, #f59e0b)",
					}}
				/>

				{/* Description */}
				<motion.p
					initial={{ opacity: 0, y: 15 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="
            px-2
            text-xs sm:text-sm md:text-base
            text-zinc-300
            leading-relaxed
            max-w-2xl
            mx-auto
          "
				>
					Delivering shadow-free, high-intensity illumination for critical
					procedures — our OT lights are built with advanced LED technology,
					precise beam control, and long-life components for uninterrupted
					surgical clarity.
				</motion.p>

				{/* Feature pills */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.9 }}
					className="mt-6 flex flex-wrap justify-center gap-2"
				>
					{["LED Technology", "Shadow-Free Beam", "Colour Rendering Ra≥95", "Cool White 4000K"].map(
						(tag, i) => (
							<span
								key={i}
								className="
                  px-3 py-1
                  text-[10px] sm:text-xs
                  text-amber-200
                  border border-amber-400/30
                  bg-amber-400/10
                  rounded-full
                  backdrop-blur-sm
                  font-mono
                  tracking-wide
                "
							>
								{tag}
							</span>
						)
					)}
				</motion.div>
			</div>
		</section>
	);
};

export default OTLightHeroSection;