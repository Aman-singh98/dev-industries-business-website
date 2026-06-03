


import { motion } from "framer-motion";
import SpareHeroSection from "./SpareHeroSection";

// ─── Spare Part Images ────────────────────────────────────────────────────────
import handleWithRoad from "/images/products/spare-parts/Handle_with_Road.jpeg";
import handleWithRoadLong from "/images/products/spare-parts/Handle_with_Road_long.jpeg";
import ivStand2Hook from "/images/products/spare-parts/IV_stand_2_huck.jpeg";
import ivStand4HookTop from "/images/products/spare-parts/IV_stand_4_huck_Top.jpeg";
import kidneyRod from "/images/products/spare-parts/KIDNEY_RODE.jpeg";
import mobileLight from "/images/products/spare-parts/Mobile_light.jpeg";
import otTableGearBox from "/images/products/spare-parts/OT_Table_Gear_Box.jpeg";
import otTableGearBoxCircular from "/images/products/spare-parts/OT_Table_Gear_Box_Circular.jpeg";
import overBedTable from "/images/products/spare-parts/Over_bed_Table.jpeg";
import overBedTableGearBox from "/images/products/spare-parts/Over_Bed_table_Gear_Box.jpeg";
import overBedTableSmall from "/images/products/spare-parts/Over_bed_Table_small.jpeg";
import rechit40mm from "/images/products/spare-parts/RECHIT_40MM.jpeg";
import rechit50mm from "/images/products/spare-parts/RECHIT_50MM.jpeg";
import sideRailing from "/images/products/spare-parts/Side_ralling.jpeg";
import sideRailingArch from "/images/products/spare-parts/Side_ralling_arch.jpeg";

// ─── Data ────────────────────────────────────────────────────────────────────

const spareParts = [
	{ name: "Handle with Rod", image: handleWithRoad },
	{ name: "Handle with Rod (Long)", image: handleWithRoadLong },
	{ name: "IV Stand 2 Hook", image: ivStand2Hook },
	{ name: "IV Stand 4 Hook Top", image: ivStand4HookTop },
	{ name: "Kidney Rod", image: kidneyRod },
	{ name: "Mobile OT Light", image: mobileLight },
	{ name: "OT Table Gear Box", image: otTableGearBox },
	{ name: "OT Table Gear Box Circular", image: otTableGearBoxCircular },
	{ name: "Over Bed Table", image: overBedTable },
	{ name: "Over Bed Table Gear Box", image: overBedTableGearBox },
	{ name: "Over Bed Table (Small)", image: overBedTableSmall },
	{ name: "Rechit 40mm", image: rechit40mm },
	{ name: "Rechit 50mm", image: rechit50mm },
	{ name: "Side Railing", image: sideRailing },
	{ name: "Side Railing Arch", image: sideRailingArch },
];

// ─── Spare Part Card ──────────────────────────────────────────────────────────

const SparePartCard = ({ name, image, index }) => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 0.4, delay: (index % 8) * 0.055 }}
		className="group cursor-pointer rounded"
		style={{ border: "1px solid #e2e8f0", background: "#ffffff" }}
	>
		{/* Image area */}
		<div
			className="relative overflow-hidden rounded-t"
			style={{ aspectRatio: "1 / 1", background: "white" }}
		>
			{/* Index number — top left */}
			<div
				className="absolute top-2 left-2 z-10 text-[28px] font-bold tabular-nums"
				style={{
					color: "#94a3b8",
					fontFamily: "'Cormorant Garamond', serif",
					letterSpacing: "0.05em",
				}}
			>
				{String(index + 1).padStart(2, "0")}
			</div>

			{/* Top-left corner accent */}
			<div
				className="absolute top-0 left-0 w-4 h-4 z-10 pointer-events-none"
				style={{ borderTop: "2px solid #c89b3c", borderLeft: "2px solid #c89b3c" }}
			/>
			{/* Bottom-right corner accent */}
			<div
				className="absolute bottom-0 right-0 w-4 h-4 z-10 pointer-events-none"
				style={{ borderBottom: "2px solid #c89b3c", borderRight: "2px solid #c89b3c" }}
			/>

			<img
				src={image}
				alt={name}
				loading="lazy"
				className="w-full h-full object-contain p-4"
				style={{ transition: "transform 0.45s ease" }}
				onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.07)")}
				onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
			/>
		</div>

		{/* Name */}
		<div
			className="px-3 py-3 rounded-b"
			style={{ borderTop: "1px solid #f1f5f9",background:"#f8fafc", }}
		>
			<p
				className="text-xs sm:text-sm font-semibold text-center leading-snug"
				style={{
					color: "#1e293b",
					
					fontFamily: "'DM Sans', sans-serif",
				}}
			>
				{name}
			</p>
		</div>
	</motion.div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const SpareParts = () => {
	return (
		<div
			className="min-h-screen pb-16 sm:pb-24  bg-gradient-to-b from-white via-gray-50 to-[#f8fafc]"
			style={{
				
				fontFamily: "'DM Sans', sans-serif",
			}}
		>
			{/* Google Fonts */}
			<style>{`
				@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&family=Cormorant+Garamond:ital,wght@0,600;1,600&display=swap');
			`}</style>

			<SpareHeroSection />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">

				{/* ── Page Header ── */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="mb-10 sm:mb-14"
				>
					{/* Top label */}
					<div className="flex items-center gap-3 mb-4">
						<div className="h-px flex-1" style={{ background: "#e2e8f0" }} />
						<span
							className="text-[10px] uppercase tracking-[0.22em] font-medium"
							style={{ color: "#c89b3c", fontFamily: "'DM Mono', monospace" }}
						>
							Catalogue
						</span>
						<div className="h-px flex-1" style={{ background: "#e2e8f0" }} />
					</div>

					{/* Title + count row */}
					<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
						<div>
							<h1
								className="leading-tight"
								style={{
									fontFamily: "'Cormorant Garamond', serif",
									fontSize: "clamp(26px, 4vw, 44px)",
									fontStyle: "italic",
									fontWeight: 600,
									color: "#0f172a",
								}}
							>
								Spare Parts &amp; Accessories
							</h1>
							<p
								className="mt-1 text-sm font-light"
								style={{ color: "#64748b" }}
							>
								Genuine replacement components for OT tables &amp; hospital furniture
							</p>
						</div>

						{/* Stats strip */}
						<div className="flex items-center gap-6 flex-shrink-0">
							{[
								{ val: `${spareParts.length}`, label: "Items" },
								{ val: "100%", label: "Genuine" },
								{ val: "Pan India", label: "Delivery" },
							].map(({ val, label }) => (
								<div key={label} className="text-center">
									<p
										className="font-semibold leading-none"
										style={{
											fontFamily: "'Cormorant Garamond', serif",
											fontSize: "22px",
											color: "#c89b3c",
										}}
									>
										{val}
									</p>
									<p
										className="text-[10px] uppercase tracking-[0.1em] mt-0.5"
										style={{ color: "#94a3b8" }}
									>
										{label}
									</p>
								</div>
							))}
						</div>
					</div>

					{/* Bottom rule */}
					<div className="mt-6 h-px" style={{ background: "#e2e8f0" }} />
				</motion.div>

				{/* ── Grid ── */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
					{spareParts.map((part, i) => (
						<SparePartCard
							key={part.name}
							name={part.name}
							image={part.image}
							index={i}
						/>
					))}
				</div>

				{/* ── Footer note ── */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="mt-12 flex items-center justify-center gap-3"
				>
					<div className="h-px w-16" style={{ background: "#e2e8f0" }} />
					<p
						className="text-[11px] text-center"
						style={{ color: "#94a3b8", fontFamily: "'DM Mono', monospace" }}
					>
						All parts are ISO certified &amp; manufactured in India
					</p>
					<div className="h-px w-16" style={{ background: "#e2e8f0" }} />
				</motion.div>

			</div>
		</div>
	);
};

export default SpareParts;