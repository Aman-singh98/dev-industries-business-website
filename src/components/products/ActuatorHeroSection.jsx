import { motion } from "framer-motion";
import actuatorBg from "/images/products/actuator/4functioncontrolbox.jpg"; // 🔁 swap path as needed

const ActuatorHeroSection = () => {
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
				style={{ backgroundImage: `url(${actuatorBg})` }}
			/>

			{/* Dark gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80" />

			{/* Glow orb — cyan tint to match actuator/tech feel */}
			<motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 0.25, scale: 1 }}
				transition={{ duration: 2.5, ease: "easeOut" }}
				className="
          absolute
          left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[300px] h-[300px]
          sm:w-[500px] sm:h-[500px]
          md:w-[700px] md:h-[700px]
          bg-cyan-400/30
          blur-[120px]
          rounded-full
          pointer-events-none
        "
			/>

			{/* Diagonal accent lines */}
			<motion.div
				initial={{ scaleX: 0, opacity: 0 }}
				animate={{ scaleX: 1, opacity: 1 }}
				transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
				className="
          absolute top-[20%] left-0
          w-full h-px
          bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent
          origin-left
        "
			/>
			<motion.div
				initial={{ scaleX: 0, opacity: 0 }}
				animate={{ scaleX: 1, opacity: 1 }}
				transition={{ duration: 1.2, delay: 0.7, ease: "easeInOut" }}
				className="
          absolute bottom-[20%] left-0
          w-full h-px
          bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent
          origin-right
        "
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
					<span className="block w-6 sm:w-8 h-px bg-cyan-400" />
					<span className="text-cyan-400 uppercase tracking-[0.2em] text-[10px] sm:text-xs font-medium font-mono">
						L&K Linear Motion
					</span>
					<span className="block w-6 sm:w-8 h-px bg-cyan-400" />
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
					Electric Linear
					<span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-400">
						Linkan Handset & Controls
					</span>
				</motion.h1>

				{/* Divider */}
				<motion.div
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 0.7, delay: 0.7 }}
					className="mx-auto mt-5 mb-5 w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-teal-300 origin-center"
				/>

				{/* Description */}
				<motion.p
					initial={{ opacity: 0, y: 15 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="
            px-2
            text-xs sm:text-sm md:text-base
            text-slate-300
            leading-relaxed
            max-w-2xl
            mx-auto
          "
				>
					Precision-engineered L&K electric linear actuators delivering reliable
					motion control for medical, industrial, and rehabilitation equipment —
					built to IP54 standards with long-life DC 24V operation.
				</motion.p>

				{/* Feature pills */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.9 }}
					className="mt-6 flex flex-wrap justify-center gap-2"
				>
					{["DC 24V Operation", "IP54 Rated", "Up to 6000N Load", "50,000+ Hr Life"].map(
						(tag, i) => (
							<span
								key={i}
								className="
                  px-3 py-1
                  text-[10px] sm:text-xs
                  text-cyan-200
                  border border-cyan-400/30
                  bg-cyan-400/10
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

export default ActuatorHeroSection;