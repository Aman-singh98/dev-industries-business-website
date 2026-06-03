

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProductHeroSection from "./ProductHeroSection";

// ─── OT Table Images ──────────────────────────────────────────────────────────
import otTableGeneralSurgery from "/images/products/ot-table/OT_TABLE_GENERAL_SURGERY.jpeg";
import electricGyneOtTable from "/images/products/ot-table/electricGyneOtTable.png";
import otTableElectricTopSlide from "/images/products/ot-table/OT_TABLE_ELECTRIC_TOP_SLIDE.jpg";
import electricVeterinaryTable from "/images/products/ot-table/Electric_Veterinary_Table.jpeg";
import otTableElectricTopSlide1 from "/images/products/ot-table/OT_TABLE_ELECTRIC_TOP_SLIDE.png";
import orthoAttachmentFloorModel from "/images/products/ot-table/ORTHO_ATTACHMENT_Floor_Model.jpeg";
import otTableCarmHydraulic from "/images/products/ot-table/OT_Table_C__ARM_Hydrolic.png";
import electricOtTable from "/images/products/ot-table/otTableElectric.png";
import veterinarySmallAnimalTable from "/images/products/ot-table/veterinarySmallAnimalTable.jpg";
import veterinarySameElectric from "/images/products/ot-table/veterinarySameElectric.png";

// ─── OT Light Images ──────────────────────────────────────────────────────────
import tms4Reflector from "/images/products/ot-light/TMS_4_Reflector.png";
import otLightSingle from "/images/products/ot-light/OT_Light_Single.png";
import otLightSingle1 from "/images/products/ot-light/O_T_Light_Single_Selling1.png";
import otLightTwin from "/images/products/ot-light/O_T_Light_Twin_Selling.png";
import otSingleLight from "/images/products/ot-light/O_T_Light_Single_Selling_first.png";
import topLight from "/images/products/ot-light/topLight.png";
import examinationLight from "/images/products/ot-light/Examination_O_T_Light.png";

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

// ─── Actuator Images ──────────────────────────────────────────────────────────
import actuator1 from "/images/products/actuator/L&K2.png";
import actuator2 from "/images/products/actuator/L&K1.png";
import actuator3 from "/images/products/actuator/L&K3.png";
import controlBox from "/images/products/actuator/4functioncontrolbox.jpg";
import remote from "/images/products/actuator/remote.jpg";

// ─── Data ─────────────────────────────────────────────────────────────────────
const categories = [
  {
    title: "OT Tables",
    slug: "ot-table",
    categoryNum: "01",
    products: [
      { name: "OT Table General Surgery", image: otTableGeneralSurgery },
      { name: "Electric Gyne OT Table", image: electricGyneOtTable },
      { name: "OT Table Electric Top Slide", image: otTableElectricTopSlide },
      { name: "Electric Veterinary Table", image: electricVeterinaryTable },
      { name: "OT Table Electric Top Slide", image: otTableElectricTopSlide1 },
      { name: "Ortho Attachment Floor Model", image: orthoAttachmentFloorModel },
      { name: "OT Table C-ARM Hydraulic", image: otTableCarmHydraulic },
      { name: "Electric OT Table", image: electricOtTable },
      { name: "Veterinary Small Animal Table", image: veterinarySmallAnimalTable },
      { name: "Veterinary Same Electric", image: veterinarySameElectric },
    ],
  },
  {
    title: "OT Lights",
    slug: "ot-light",
    categoryNum: "02",
    products: [
      { name: "TMS-4 Reflector", image: tms4Reflector },
      { name: "OT Light Single Dome", image: otLightSingle },
      { name: "OT Light Single Selling", image: otLightSingle1 },
      { name: "OT Light Twin Dome", image: otLightTwin },
      { name: "OT Light Single", image: otSingleLight },
      { name: "Top OT Light", image: topLight },
      { name: "Examination OT Light", image: examinationLight },
    ],
  },
  {
    title: "Spare Parts",
    slug: "spare-parts",
    categoryNum: "03",
    products: [
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
    ],
  },
  {
    title: "Linkan Handset",
    slug: "linkan-handset",
    categoryNum: "04",
    products: [
      { name: "L&K Actuator LA32.4M-15-150+SHI", image: actuator1 },
      { name: "L&K Actuator LA32.4BM-25-150+SHI", image: actuator2 },
      { name: "L&K Actuator LA32.4BM-30-150+BHI", image: actuator3 },
      { name: "4 Function Control Box", image: controlBox },
      { name: "HB13+C00 Wireless Remote", image: remote },
    ],
  },
];

// ─── Hero Section ─────────────────────────────────────────────────────────────

const HeroSection = () => (
	<motion.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ duration: 0.8 }}
		className="relative overflow-hidden"
		style={{ background: "#ffffff", borderBottom: "1px solid #e8edf2" }}
	>
		<div className="flex flex-col lg:flex-row min-h-[420px]">

			{/* ── Left: Text Content ── */}
			<div className="flex-1 px-6 sm:px-10 lg:px-16 pt-14 pb-12 flex flex-col justify-center relative z-10">
				{/* Ambient glow */}
				<div
					className="absolute -top-16 left-1/2 w-96 h-96 rounded-full pointer-events-none"
					style={{
						background: "radial-gradient(circle, rgba(200,155,60,0.07) 0%, transparent 70%)",
					}}
				/>

				{/* Tag */}
				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.15, duration: 0.5 }}
					className="inline-flex items-center gap-2 mb-6 self-start"
					style={{
						border: "1px solid rgba(200,155,60,0.4)",
						padding: "6px 14px",
						borderRadius: "2px",
					}}
				>
					<span className="w-1.5 h-1.5 rounded-full" style={{ background: "#c89b3c" }} />
					<span className="text-[11px] font-medium tracking-[0.2em] uppercase" style={{ color: "#c89b3c" }}>
						Medical Equipment
					</span>
				</motion.div>

				{/* Heading */}
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.25, duration: 0.6 }}
					className="font-bold leading-[1.05] mb-5"
					style={{
						fontFamily: "'Cormorant Garamond', serif",
						fontSize: "clamp(36px, 5vw, 60px)",
						color: "#1a1a1a",
					}}
				>
					Precision Built
					<br />
					for{" "}
					<em className="italic" style={{ color: "#c89b3c" }}>
						Surgical
					</em>
					<br />
					Excellence
				</motion.h1>

				{/* Subtitle */}
				<motion.p
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.35, duration: 0.5 }}
					className="text-sm max-w-sm leading-7 font-light mb-9"
					style={{ color: "#6b7280" }}
				>
					Premium OT tables, surgical lighting systems, actuators and spare parts
					engineered for modern operating theatres.
				</motion.p>

				{/* Stats */}
				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.45, duration: 0.5 }}
					className="flex gap-8"
				>
					{[
						{ num: "35+", label: "Products" },
						{ num: "4", label: "Categories" },
						{ num: "ISO", label: "Certified" },
					].map(({ num, label }) => (
						<div key={label}>
							<div
								className="font-semibold leading-none mb-1"
								style={{
									fontFamily: "'Cormorant Garamond', serif",
									fontSize: "28px",
									color: "#c89b3c",
								}}
							>
								{num}
							</div>
							<div className="text-[11px] uppercase tracking-[0.12em]" style={{ color: "#9ca3af" }}>
								{label}
							</div>
						</div>
					))}
				</motion.div>
			</div>

			{/* ── Right: Content Panels ── */}
			<motion.div
				initial={{ opacity: 0, x: 40 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
				className="hidden lg:flex flex-1 relative p-8 items-center justify-center bg-gradient-to-b from-white via-gray-50 to-[#f8fafc]"
			>
				{/* Gold vertical bar separator */}
				<div
					className="absolute left-0 top-10 bottom-10 w-px"
					style={{ background: "linear-gradient(to bottom, transparent, #c89b3c55, transparent)" }}
				/>

				{/* Content layout */}
				<div className="w-full max-w-lg flex flex-col gap-4">

					{/* Top row: four category cards */}
					<div className="grid grid-cols-2 gap-4">
						{[
							{
								icon: "🛏️",
								title: "OT Tables",
								desc: "Hydraulic, electric & manual surgical tables for general, ortho, gyne and veterinary use.",
								count: "10 Models",
							},
							{
								icon: "💡",
								title: "OT Lights",
								desc: "Single dome, twin dome & examination lights with high intensity shadow-free illumination.",
								count: "7 Models",
							},
							{
								icon: "⚡",
								title: "Actuators",
								desc: "L&K electric linear actuators with control boxes & remotes for precision motion control.",
								count: "5 Items",
							},
							{
								icon: "🔩",
								title: "Spare Parts",
								desc: "Gear boxes, IV stands, railings, over-bed tables and more OT equipment accessories.",
								count: "15 Items",
							},
						].map(({ icon, title, desc, count }) => (
							<motion.div
								key={title}
								initial={{ opacity: 0, y: 16 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.5, duration: 0.45 }}
								className="rounded p-4 flex flex-col gap-2"
								style={{
									background: "#ffffff",
									border: "1px solid #e8edf2",
								}}
							>
								<div className="text-3xl">{icon}</div>
								<div>
									<p className="font-semibold" style={{ color: "#1a1a1a", fontFamily: "'Cormorant Garamond', serif", fontSize: "20px" }}>
										{title}
									</p>
									<p className="text-[13px] leading-5 mt-1" style={{ color: "#6b7280" }}>{desc}</p>
								</div>
								<div
									className="mt-auto inline-flex items-center gap-1 text-[12px] font-semibold tracking-wide"
									style={{ color: "#c89b3c" }}
								>
									<span
										className="w-1.5 h-1.5 rounded-full"
										style={{ background: "#c89b3c", display: "inline-block" }}
									/>
									{count}
								</div>
							</motion.div>
						))}
					</div>

					{/* Feature highlights */}
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.45 }}
						className="rounded p-4"
						style={{
							background: "#ffffff",
							border: "1px solid #e8edf2",
						}}
					>
						<p
							className="text-[14px] uppercase tracking-[0.18em] mb-3"
							style={{ color: "#9ca3af" }}
						>
							Why Choose Us
						</p>
						<div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
							{[
								"ISO Certified Manufacturing",
								"Stainless Steel Build",
								"Hydraulic & Electric Options",
								"Pan-India Delivery",
								"Customisation Available",
								"After-Sales Support",
							].map((feature) => (
								<div key={feature} className="flex items-start gap-2">
									<span
										className="mt-0.5 w-3.5 h-3.5 rounded flex-shrink-0 flex items-center justify-center"
										style={{ background: "rgba(200,155,60,0.15)", border: "1px solid rgba(200,155,60,0.4)" }}
									>
										<span style={{ color: "#c89b3c", fontSize: "10px", fontWeight: 700, lineHeight: 1 }}>✓</span>
									</span>
									<span className="text-[12px] leading-snug" style={{ color: "#374151" }}>
										{feature}
									</span>
								</div>
							))}
						</div>
					</motion.div>

					{/* Trust badge strip */}
					<motion.div
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7, duration: 0.4 }}
						className="flex items-center justify-between rounded px-5 py-3"
						style={{
							background: "linear-gradient(135deg, rgba(200,155,60,0.08) 0%, rgba(200,155,60,0.03) 100%)",
							border: "1px solid rgba(200,155,60,0.2)",
						}}
					>
						{[
							{ icon: "🏭", label: "Made in India" },
							{ icon: "⚙️", label: "Heavy Duty Build" },
							{ icon: "📦", label: "Ready to Ship" },
							{ icon: "🤝", label: "Trusted Brand" },
						].map(({ icon, label }) => (
							<div key={label} className="flex flex-col items-center gap-1">
								<span style={{ fontSize: "18px" }}>{icon}</span>
								<span className="text-[14px] text-center leading-tight font-medium" style={{ color: "#8b6914" }}>
									{label}
								</span>
							</div>
						))}
					</motion.div>

				</div>
			</motion.div>

		</div>
	</motion.div>
);

// ─── Product Card ─────────────────────────────────────────────────────────────

const ProductCard = ({ name, image, index }) => (
	<motion.div
		initial={{ opacity: 0, y: 24 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 0.45, delay: index * 0.06 }}
		whileHover={{ y: -5 }}
		className="group cursor-pointer rounded overflow-hidden"
		style={{
			background: "#ffffff",
			border: "1px solid #e8edf2",
			transition: "0.3s ease",
		}}
	>
		{/* Image */}
		<div
			className="relative overflow-hidden"
			style={{ aspectRatio: "4 / 3" }}
		>
			{/* Corner accents */}
			<div
				className="absolute top-0 left-0 w-7 h-7 z-10 pointer-events-none"
				style={{ borderTop: "2.5px solid #c89b3c", borderLeft: "2.5px solid #c89b3c" }}
			/>
			<div
				className="absolute bottom-0 right-0 w-7 h-7 z-10 pointer-events-none"
				style={{ borderBottom: "2.5px solid #c89b3c", borderRight: "2.5px solid #c89b3c" }}
			/>

			<img
				src={image}
				alt={name}
				loading="lazy"
				className="w-full h-full object-contain"
				style={{ transition: "transform 0.5s ease" }}
				onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
				onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
			/>

			{/* Index badge */}
			<div
				className="absolute top-3 right-3 z-10 text-[10px] font-semibold tracking-[0.12em]"
				style={{
					background: "rgba(200,155,60,0.15)",
					color: "#c89b3c",
					border: "1px solid rgba(200,155,60,0.4)",
					padding: "3px 9px",
					borderRadius: "2px",
					backdropFilter: "blur(4px)",
				}}
			>
				{String(index + 1).padStart(2, "0")}
			</div>
		</div>

		{/* Name */}
		<div
			className="px-4 py-4"
			style={{ borderTop: "1px solid #f0f4f8" }}
		>
			<p
				className="text-sm font-semibold text-center leading-snug"
				style={{ color: "#1a1a1a" }}
			>
				{name}
			</p>
		</div>
	</motion.div>
);

// ─── Section Divider ─────────────────────────────────────────────────────────

const SectionDivider = () => (
	<div className="flex items-center gap-4 my-14 mx-6 sm:mx-10 lg:px-16">
		<div className="flex-1 h-px" style={{ background: "#e8edf2" }} />
		<span className="text-[11px] tracking-[0.25em]" style={{ color: "#c89b3c" }}>
			✦ ✦ ✦
		</span>
		<div className="flex-1 h-px" style={{ background: "#e8edf2" }} />
	</div>
);

// ─── Category Section ─────────────────────────────────────────────────────────

const CategorySection = ({ title, slug, categoryNum, products }) => (
	<motion.section
		initial={{ opacity: 0, y: 28 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 0.55, ease: "easeOut" }}
		className="px-6 sm:px-10 lg:px-16"
	>
		{/* Header */}
		<div
			className="flex items-end justify-between mb-8 pb-5"
			style={{ borderBottom: "1px solid #e8edf2" }}
		>
			<div>
				<p
					className="text-[11px] uppercase tracking-[0.18em] mb-2"
					style={{ color: "#9ca3af" }}
				>
					Category {categoryNum}
				</p>
				<h2
					className="font-semibold leading-tight"
					style={{
						fontFamily: "'Cormorant Garamond', serif",
						fontSize: "clamp(24px, 4vw, 40px)",
						color: "#1a1a1a",
					}}
				>
					{title}
				</h2>
			</div>

			<Link
				to={`/products/${slug}`}
				className="self-end flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.08em] whitespace-nowrap mb-1"
				style={{
					color: "#c89b3c",
					border: "1px solid rgba(200,155,60,0.5)",
					padding: "10px 22px",
					borderRadius: "2px",
					textDecoration: "none",
					transition: "background 0.2s, color 0.2s",
				}}
				onMouseEnter={(e) => {
					e.currentTarget.style.background = "#c89b3c";
					e.currentTarget.style.color = "#ffffff";
				}}
				onMouseLeave={(e) => {
					e.currentTarget.style.background = "transparent";
					e.currentTarget.style.color = "#c89b3c";
				}}
			>
				View All →
			</Link>
		</div>

		{/* Grid — 2 cols mobile → 3 cols tablet → 4 cols desktop */}
		<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
			{products.map((product, i) => (
				<ProductCard
					key={product.name + i}
					name={product.name}
					image={product.image}
					index={i}
				/>
			))}
		</div>
	</motion.section>
);

// ─── Main Component ───────────────────────────────────────────────────────────

function AllProduct() {
	return (
		<div
			className="min-h-screen"
			style={{
				background: "#f8fafc",
				color: "#1a1a1a",
				fontFamily: "'DM Sans', sans-serif",
			}}
		>
			{/* Google Fonts */}
			<style>{`
				@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');
			`}</style>

			<ProductHeroSection />
			<HeroSection />

			<div className="py-14 bg-white flex flex-col">
				{categories.map((cat, idx) => (
					<div key={cat.slug}>
						<CategorySection
							title={cat.title}
							slug={cat.slug}
							categoryNum={cat.categoryNum}
							products={cat.products}
						/>
						{idx < categories.length - 1 && <SectionDivider />}
					</div>
				))}
			</div>
		</div>
	);
}

export default AllProduct;