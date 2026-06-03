import { motion } from "framer-motion";
import otTableGeneralSurgery from "/images/products/ot-table/OT_TABLE_GENERAL_SURGERY.jpeg";
import electricGyneOtTable from "/images/products/ot-table/electricGyneOtTable.png";
import otTableElectricTopSlide from "/images/products/ot-table/OT_TABLE_ELECTRIC_TOP_SLIDE.jpg";
import electricVeterinaryTable from "/images/products/ot-table/Electric_Veterinary_Table.jpeg";
import otTableElectricTopSlide1 from "/images/products/ot-table/OT_TABLE_ELECTRIC_TOP_SLIDE.png";
import orthoAttachmentFloorModel from "/images/products/ot-table/ORTHO_ATTACHMENT_Floor_Model.jpeg";
import otTableCarmHydraulic from "/images/products/ot-table/OT_Table_C__ARM_Hydrolic.png";
import otTableElectric from "/images/products/ot-table/otTableElectric.png";
import veterinarySmallAnimalTable from "/images/products/ot-table/veterinarySmallAnimalTable.jpg";
import veterinarySameElectric from "/images/products/ot-table/veterinarySameElectric.png";


import OTTableHeroSection from "./OTTableHeroSection";

/* ── Shared UI Components ── */
const TitleBanner = ({ title }) => (
	<div className="relative flex items-center justify-center mb-8 sm:mb-12">
		<motion.div
			initial={{ scaleX: 0, opacity: 0 }}
			whileInView={{ scaleX: 1, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7, ease: "easeOut" }}
			className="hidden sm:block flex-1 h-px bg-gradient-to-r from-transparent via-cyan-400 to-cyan-600 origin-left"
		/>
		<motion.div
			initial={{ opacity: 0, y: -20, scale: 0.85 }}
			whileInView={{ opacity: 1, y: 0, scale: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.55, ease: "easeOut" }}
			className="relative mx-0 sm:mx-6 flex-shrink-0"
		>
			<div className="absolute inset-0 rounded bg-cyan-400 opacity-20 blur-xl scale-110" />
			<div className="relative rounded p-[2px]"
				style={{ background: "linear-gradient(135deg, #06b6d4, #0e7490, #164e63)" }}>
				<div className="rounded px-6 sm:px-10 py-3 sm:py-4 flex items-center gap-3 sm:gap-4"
					style={{ background: "linear-gradient(135deg, #0e7490 0%, #155e75 50%, #164e63 100%)" }}>
					<motion.span
						initial={{ rotate: -30, opacity: 0 }}
						whileInView={{ rotate: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3, duration: 0.4 }}
						className="text-cyan-300 text-lg sm:text-2xl select-none"
					>✦</motion.span>
					<h2
						className="text-white font-extrabold uppercase tracking-widest text-sm sm:text-lg md:text-xl lg:text-2xl"
						style={{ textShadow: "0 0 18px rgba(103,232,249,0.55)", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
					>
						{title}
					</h2>
					<motion.span
						initial={{ rotate: 30, opacity: 0 }}
						whileInView={{ rotate: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3, duration: 0.4 }}
						className="text-cyan-300 text-lg sm:text-2xl select-none"
					>✦</motion.span>
				</div>
			</div>
			<div className="flex justify-center gap-1.5 mt-2">
				{[0, 1, 2].map((i) => (
					<motion.div
						key={i}
						initial={{ scale: 0, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.45 + i * 0.08, duration: 0.3 }}
						className={`rounded-full ${i === 1 ? "w-3 h-1.5 bg-cyan-400" : "w-1.5 h-1.5 bg-cyan-600"}`}
					/>
				))}
			</div>
		</motion.div>
		<motion.div
			initial={{ scaleX: 0, opacity: 0 }}
			whileInView={{ scaleX: 1, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7, ease: "easeOut" }}
			className="hidden sm:block flex-1 h-px bg-gradient-to-l from-transparent via-cyan-400 to-cyan-600 origin-right"
		/>
	</div>
);

const ProductImage = ({ src, alt, animateFrom = "right", className = "" }) => (
	<motion.div
		initial={{ opacity: 0, x: animateFrom === "right" ? 40 : -40, scale: 0.93 }}
		whileInView={{ opacity: 1, x: 0, scale: 1 }}
		viewport={{ once: true }}
		transition={{ duration: 0.7, ease: "easeOut" }}
		className={`flex justify-center items-start px-0 sm:px-2 lg:sticky lg:top-24 lg:self-start ${className}`}
	>
		<div className="relative rounded-xl overflow-hidden shadow-xl bg-white w-full max-w-xs sm:max-w-sm md:max-w-md border-2 border-cyan-600 p-3 sm:p-4 mx-auto">
			<div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-cyan-400 rounded-tl-xl" />
			<div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-cyan-400 rounded-br-xl" />
			<img src={src} alt={alt} className="w-full h-auto object-contain max-h-64 sm:max-h-80 md:max-h-96" />
		</div>
	</motion.div>
);

/* ── Block Renderers ── */
const Card = ({ children, animateFrom = "left" }) => (
	<motion.div
		initial={{ opacity: 0, x: animateFrom === "left" ? -40 : 40 }}
		whileInView={{ opacity: 1, x: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 0.6 }}
		className="bg-white rounded-2xl shadow-md p-4 sm:p-6 md:p-8 border-l-4 border-cyan-700"
	>
		{children}
	</motion.div>
);

const BulletList = ({ items, columns = 1 }) => (
	<ul className={`${columns === 2 ? "grid grid-cols-1 sm:grid-cols-2 gap-2" : "space-y-2"}`}>
		{items.map((item, i) => (
			<motion.li
				key={i}
				initial={{ opacity: 0, x: -16 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.45, delay: i * 0.08 }}
				className="flex items-start gap-3 text-gray-700 text-sm sm:text-base leading-relaxed"
			>
				<span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-600" />
				{item}
			</motion.li>
		))}
	</ul>
);

const SpecsTable = ({ rows, hasHeader = false }) => (
	<div className="overflow-x-auto">
		<table className="w-full text-sm sm:text-base text-left border-collapse">
			{hasHeader && (
				<thead>
					<tr className="bg-cyan-700 text-white">
						<th className="py-2 px-4 font-semibold border border-cyan-600">{rows.header[0]}</th>
						<th className="py-2 px-4 font-semibold border border-cyan-600">{rows.header[1]}</th>
					</tr>
				</thead>
			)}
			<tbody>
				{(hasHeader ? rows.body : rows).map((row, i) => (
					<motion.tr
						key={i}
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: i * 0.07 }}
						className={i % 2 === 0 ? "bg-cyan-50" : "bg-white"}
					>
						<td className="py-2 px-4 font-medium text-cyan-900 w-1/2 border border-cyan-100">
							{hasHeader ? row[0] : row.label}
						</td>
						<td className="py-2 px-4 text-gray-700 border border-cyan-100">
							{hasHeader ? row[1] : row.value}
						</td>
					</motion.tr>
				))}
			</tbody>
		</table>
	</div>
);

/* ── ContentBlocks: renders array of block definitions ── */
const ContentBlocks = ({ blocks, animateFrom = "left", className = "" }) => (
	<div className={`space-y-6 sm:space-y-8 ${className}`}>
		{blocks.map((block, i) => {
			if (block.type === "description") return (
				<Card key={i} animateFrom={animateFrom}>
					<p className="text-gray-700 text-sm sm:text-base leading-relaxed">{block.text}</p>
				</Card>
			);
			if (block.type === "features") return (
				<Card key={i} animateFrom={animateFrom}>
					<h3 className="text-cyan-800 font-bold text-base sm:text-lg md:text-xl mb-4">{block.heading}</h3>
					<BulletList items={block.items} columns={block.columns || 1} />
				</Card>
			);
			if (block.type === "specs") return (
				<Card key={i} animateFrom={animateFrom}>
					<h3 className="text-cyan-800 font-bold text-base sm:text-lg md:text-xl mb-4">{block.heading}</h3>
					<SpecsTable rows={block.rows} hasHeader={block.hasHeader || false} />
				</Card>
			);
			if (block.type === "closing") return (
				<motion.div
					key={i}
					initial={{ opacity: 0, x: animateFrom === "left" ? -40 : 40 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="bg-cyan-50 rounded-2xl shadow-sm p-4 sm:p-6 border border-cyan-200"
				>
					<p className="text-gray-700 text-sm sm:text-base leading-relaxed">{block.text}</p>
				</motion.div>
			);
			return null;
		})}
	</div>
);

const Section = ({ children, isLast = false }) => (
	<div className={`max-w-7xl mx-auto mt-10 sm:mt-16 px-4 sm:px-6 lg:px-8 ${isLast ? "pb-16 sm:pb-24" : ""}`}>
		{children}
	</div>
);

/* ══════════════════════════════════════════════════════
	DATA
══════════════════════════════════════════════════════ */
const sections = [
	{
		title: "OT Table — General Surgery",
		img: otTableGeneralSurgery,
		alt: "OT Table General Surgery",
		blocks: [
			{
				type: "features", heading: "Salient Features",
				items: [
					"The table body is made up of 304 grade stainless steel, Antibacterial body, Easy to clean.",
					"Mattress is made up of PU material.",
					"All positions are controlled manually.",
					"Positions: Height Up/Down, Trendelenburg / Rev. Trendelenburg, Lateral Tilt, Flex / Reflex.",
					"The head, leg & pelvic sections are detachable.",
				]
			},
			{
				type: "features", heading: "Standard Accessories", columns: 2,
				items: [
					"Anesthetic screen: 1 pcs", "Lateral support with pad: 2 pcs",
					"Shoulder supports with pad: 2 pcs", "Arm boards with pad: 2 pcs",
					"Waterproof PU mattress", "Knee Crutches: 2 pcs",
				]
			},
			{
				type: "specs", heading: "Technical Specifications",
				rows: [
					{ label: "Length of Table", value: "1910 mm" },
					{ label: "Width of Table", value: "522 mm" },
					{ label: "Height (Min / Max)", value: "750 – 1000 mm" },
					{ label: "Trendelenburg / Rev. Trendelenburg", value: "+/- 25°" },
					{ label: "Lateral Tilt", value: "+/- 20°" },
					{ label: "Back Section", value: "+/- 60°" },
					{ label: "Head Section", value: "+/- 60°" },
					{ label: "Leg Section", value: "0° – 90°" },
				]
			},
		]
	},
	{
		title: "Electric Gyne OT Table",
		img: electricGyneOtTable,
		alt: "Electric Gyne OT Table",
		blocks: [
			{
				type: "specs", heading: "Technical Specifications",
				rows: [
					{ label: "Height Adjustment", value: "760 – 1020 mm" },
					{ label: "Top Size", value: "1830 × 535 mm" },
					{ label: "Trendelenburg / Rev. Trendelenburg", value: "20° / 20°" },
					{ label: "Lateral Tilt", value: "20° / 20°" },
					{ label: "Back Section", value: "65° up / 20° down" },
					{ label: "Leg Section", value: "90° down" },
				]
			},
			{
				type: "features", heading: "Standard Accessories", columns: 2,
				items: [
					"Side support: 1 pair", "Shoulder support: 1 pair",
					"Arm-rest: 1 pair", "Screen rod: 1 pc",
					"Special lithotomy crutches: 1 pair", "Waterproof rubber mattress: 1 set",
					"Gynaecology tray: 1 pc",
				]
			},
		]
	},
	{
		title: "OT Table Electric Top Slide",
		img: otTableElectricTopSlide,
		alt: "OT Table Electric Top Slide",
		blocks: [
			{
				type: "features", heading: "Salient Features",
				items: [
					"Five Function electric operation table.",
					"Mattress is made up of PU material.",
					"All positions are controlled manually.",
					"Positions: Height Up/Down, Trendelenburg / Rev. Trendelenburg, Lateral Tilt, Flex / Reflex.",
					"The head, leg & pelvic sections are detachable.",
					"Table body made of 304 grade stainless steel — antibacterial and easy to clean.",
					"250 mm Top Slide for longitudinal patient positioning.",
					"Foot Pedal Gear control.",
				]
			},
			{
				type: "specs", heading: "Technical Specifications",
				rows: [
					{ label: "Length of Table", value: "1910 mm" },
					{ label: "Width of Table", value: "522 mm" },
					{ label: "Height (Min / Max)", value: "750 – 1000 mm" },
					{ label: "Trendelenburg / Rev. Trendelenburg", value: "+/- 25°" },
					{ label: "Lateral Tilt", value: "+/- 20°" },
					{ label: "Back Section", value: "+/- 60°" },
					{ label: "Head Section", value: "+/- 60°" },
					{ label: "Leg Section", value: "0° – 90°" },
				]
			},
			{
				type: "features", heading: "Standard Accessories", columns: 2,
				items: [
					"Anesthetic screen: 1 pcs", "Lateral support with pad: 2 pcs",
					"Shoulder supports with pad: 2 pcs", "Arm boards with pad: 2 pcs",
					"Waterproof PU mattress", "Knee Crutches: 2 pcs",
				]
			},
		]
	},
	{
		title: "Electric Veterinary Table",
		img: electricVeterinaryTable,
		alt: "Electric Veterinary Table",
		blocks: [
			{
				type: "description",
				text: "The Electric Veterinary Table is specially designed for veterinary clinics, animal hospitals, and surgical procedures. It offers smooth electric positioning controls, durable stainless steel construction, and enhanced comfort for both veterinarians and animals during treatment and surgery."
			},
			{
				type: "features", heading: "Key Features",
				items: [
					"Electric Height Adjustment (Up & Down)",
					"Electric Trendelenburg Positioning",
					"Electric Side Tilt Adjustment",
					"Electric V-Shape Positioning",
					"Integrated Heating Temperature Function",
					"Smooth and stable operation",
					"Durable SS 304 Grade Stainless Steel construction",
					"Lockable wheels for easy movement and secure positioning",
				]
			},
			{
				type: "specs", heading: "Technical Specifications",
				rows: [
					{ label: "Height Adjustment", value: `30" – 40"` },
					{ label: "Table Top Size", value: `48" × 25"` },
					{ label: "Material", value: "SS 304 Grade Stainless Steel" },
					{ label: "Mobility", value: "Wheel with Lock Adjustment" },
				]
			},
			{
				type: "closing",
				text: "The Electric Veterinary Table is designed to provide maximum convenience, stability, and safety for veterinary examinations, treatments, and surgical procedures."
			},
		]
	},
	{
		title: "OT Table Electric Top Slide",
		img: otTableElectricTopSlide1,
		alt: "OT Table Electric Top Slide",
		blocks: [
			{
				type: "description",
				text: "The OT Table Electric Top Slide is a premium-quality operating table designed for advanced surgical procedures. Built with durable stainless steel construction and versatile positioning functions, it ensures maximum stability, comfort, and operational efficiency in modern operation theaters."
			},
			{
				type: "features", heading: "Salient Features",
				items: [
					"Five-function operating table",
					"Premium waterproof PU mattress for enhanced patient comfort",
					"All positions controlled manually for smooth operation",
					"Detachable head, leg, and pelvic sections",
					"250 mm top slide functionality",
					"Foot pedal gear system for easy adjustment",
					"Constructed with high-grade 304 stainless steel",
					"Antibacterial body with easy-to-clean surface",
				]
			},
			{
				type: "features", heading: "Positioning Functions", columns: 2,
				items: [
					"Height Adjustment (Up/Down)", "Trendelenburg / Reverse Trendelenburg",
					"Lateral Tilt", "Flex / Reflex Positioning",
				]
			},
			{
				type: "specs", heading: "Technical Specifications",
				rows: [
					{ label: "Table Length", value: "1910 mm" },
					{ label: "Table Width", value: "522 mm" },
					{ label: "Height Adjustment (Min./Max.)", value: "750 – 1000 mm" },
					{ label: "Trendelenburg / Reverse Trendelenburg", value: "±25°" },
					{ label: "Lateral Tilt", value: "±20°" },
					{ label: "Back Section Adjustment", value: "±60°" },
					{ label: "Head Section Adjustment", value: "±60°" },
					{ label: "Leg Section Adjustment", value: "0° to 90°" },
					{ label: "Top Slide", value: "250 mm" },
				]
			},
			{
				type: "specs", heading: "Standard Accessories Included",
				hasHeader: true,
				rows: {
					header: ["Accessories", "Quantity"],
					body: [
						["Anesthetic Screen", "1 pc"], ["Lateral Supports with Pads", "2 pcs"],
						["Shoulder Supports with Pads", "2 pcs"], ["Arm Boards with Pads", "2 pcs"],
						["Waterproof PU Mattress", "1 pc"], ["Knee Crutches", "2 pcs"],
					]
				}
			},
			{
				type: "closing",
				text: "The OT Table Electric Top Slide is specially engineered to deliver reliable performance, smooth positioning control, and enhanced surgical accessibility for a wide range of medical procedures."
			},
		]
	},

	{
		title: "Electric OT Table",
		img: otTableElectric,
		alt: "Electric OT Table",
		blocks: [
			{
				type: "description",
				text: "The Electric OT Table is a modern and versatile operating table designed to provide stability, flexibility, and comfort during surgical procedures. It is suitable for multiple surgical specialties and offers smooth positioning adjustments for enhanced surgical efficiency."
			},
			{
				type: "specs", heading: "Technical Specifications",
				hasHeader: true,
				rows: {
					header: ["Specification", "Details"],
					body: [
						["Table Length", "2000 mm"], ["Table Width", "530 mm"],
						["Height Adjustment (Min./Max.)", "750 – 1000 mm"],
						["Trendelenburg / Reverse Trendelenburg", "±25°"],
						["Lateral Tilt", "±20°"],
						["Back Section Adjustment", "Up to +80° / -20°"],
						["Head Section Adjustment", "±60°"],
						["Leg Section Adjustment", "0° to 90°"],
						["Floor Locking System", "Yes"],
					]
				}
			},
			{
				type: "features", heading: "Standard Accessories", columns: 2,
				items: [
					"Anesthetic Screen", "Shoulder Supports with Pads",
					"Arm Boards with Pads", "Lateral Supports with Pads",
					"Knee Crutches", "Waterproof Rubber Mattress",
				]
			},
			{
				type: "features", heading: "Suitable For", columns: 2,
				items: [
					"General Surgery", "Vascular Surgery", "Cardiac Surgery", "Neurology Surgery",
					"Urology Surgery", "Gynecology", "Laparoscopy", "Plastic Surgery",
				]
			},
			{
				type: "closing",
				text: "This Electric OT Table is designed for reliable performance, smooth operation, and maximum patient safety, making it an ideal choice for advanced operation theaters and hospitals."
			},
		]
	},
	{
		title: "Ortho Attachment – Floor Model",
		img: orthoAttachmentFloorModel,
		alt: "Ortho Attachment Floor Model",
		blocks: [
			{
				type: "description",
				text: "The Ortho Attachment Floor Model is specially designed for orthopedic surgical procedures, providing excellent stability, precise positioning, and enhanced support during surgeries. Its radiolucent accessories ensure clear imaging compatibility for advanced orthopedic operations."
			},
			{
				type: "specs", heading: "Standard Accessories Included",
				hasHeader: true,
				rows: {
					header: ["Accessories", "Quantity"],
					body: [
						["Orthopedic Section", "1 pc"], ["Pelvic Rest", "1 pc"],
						["Pelvic Support (Radio Translucent)", "1 pc"],
						["Inner Thigh Support (Radio Translucent)", "1 pc"],
						["Foot Plate with Ortho Shoes", "1 Pair"],
						["Tibia Attachment", "1 pc"],
						["Hand Surgery Table (Radio Translucent)", "1 pc"],
					]
				}
			},
			{
				type: "features", heading: "Key Features",
				items: [
					"Strong and stable floor-mounted design",
					"Compatible with orthopedic and trauma surgeries",
					"Radiolucent supports for clear imaging access",
					"Easy positioning and adjustment during procedures",
					"Durable construction for long-term performance",
				]
			},
			{
				type: "closing",
				text: "The Ortho Attachment Floor Model is an ideal solution for hospitals and operation theaters requiring reliable orthopedic surgical support and imaging compatibility."
			},
		]
	},
	{
		title: "OT Table C-Arm Hydraulic",
		img: otTableCarmHydraulic,
		alt: "OT Table C-Arm Hydraulic",
		blocks: [
			{
				type: "description",
				text: "The OT Table C-Arm Hydraulic is specially designed for advanced surgical procedures requiring precise positioning and easy C-Arm compatibility. Its robust construction, smooth hydraulic operation, and versatile adjustments make it suitable for a wide range of surgical applications."
			},
			{
				type: "features", heading: "Suitable For", columns: 2,
				items: [
					"General Surgery", "Vascular Surgery", "Cardiac Surgery", "Neurology Surgery",
					"Urology Surgery", "Gynecology", "Laparoscopy", "Plastic Surgery",
				]
			},
			{
				type: "specs", heading: "Technical Specifications",
				hasHeader: true,
				rows: {
					header: ["Specification", "Details"],
					body: [
						["Table Length", "1900 mm"], ["Table Width", "530 mm"],
						["Height Adjustment (Min./Max.)", "750 – 1000 mm"],
						["Trendelenburg / Reverse Trendelenburg", "±25°"],
						["Lateral Tilt", "+15° to -90°"],
						["Back Section Adjustment", "+45° to -75°"],
						["Head Section Adjustment", "+45° to -90°"],
						["Leg Section Adjustment", "0° to 90°"],
						["Floor Locking System", "Manual"],
					]
				}
			},
			{
				type: "features", heading: "Standard Accessories", columns: 2,
				items: [
					"Anesthetic Screen", "Shoulder Supports with Pads",
					"Arm Boards with Pads", "Lateral Supports with Pads",
					"Knee Crutches", "Waterproof Rubber Mattress",
				]
			},
			{
				type: "closing",
				text: "The OT Table C-Arm Hydraulic is engineered to provide excellent stability, smooth positioning control, and reliable performance for modern operation theaters and imaging-supported surgical procedures."
			},
		]
	},

	{
		title: "Veterinary Small Animal Table",
		img: veterinarySmallAnimalTable,
		alt: "Veterinary Small Animal Table",
		blocks: [
			{
				type: "description",
				text: "The Veterinary Small Animal Table (Model No. 723) is a purpose-built examination and procedure table designed for small animal veterinary care. Featuring a practical drainage facility and secure wheel locking system, it offers a hygienic, stable, and convenient workspace for veterinary professionals."
			},
			{
				type: "specs", heading: "Technical Specifications",
				rows: [
					{ label: "Model No.", value: "723" },
					{ label: "Top Size", value: "47 × 30 inches" },
					{ label: "Height (Fixed)", value: "34 inches" },
					{ label: "Wheel System", value: "Locking Adjustment Wheels" },
					{ label: "Drainage Facility", value: "Yes" },
				]
			},
			{
				type: "specs", heading: "Standard Accessories",
				hasHeader: true,
				rows: {
					header: ["Accessories", "Quantity"],
					body: [
						["I.V Rod", "1 pc"],
					]
				}
			},
			{
				type: "closing",
				text: "The Veterinary Small Animal Table is designed to provide a safe, hygienic, and efficient working surface for veterinary examinations and minor surgical procedures involving small animals."
			},
		]
	},

	{
		title: "Veterinary Same Electric",
		img: veterinarySameElectric,
		alt: "Veterinary Same Electric",
		blocks: [
			{
				type: "description",
				text: "The Veterinary Same Electric Table (Model No. 732) is an electrically operated veterinary procedure table built with high-grade SS 304 stainless steel. Featuring electric height adjustment, secure wheel locking, and an integrated drainage system, it provides a hygienic and versatile workspace for modern veterinary practices."
			},
			{
				type: "specs", heading: "Technical Specifications",
				rows: [
					{ label: "Model No.", value: "732" },
					{ label: "Top Size", value: "47 × 30 inches" },
					{ label: "Height Adjustment (Min./Max.)", value: "750 – 1000 mm" },
					{ label: "Height Operation", value: "Electric Up & Down" },
					{ label: "Wheel System", value: "Locking Adjustment Wheels" },
					{ label: "Drainage", value: "Fixed" },
					{ label: "Construction Material", value: "SS 304 Stainless Steel" },
				]
			},
			{
				type: "specs", heading: "Standard Accessories",
				hasHeader: true,
				rows: {
					header: ["Accessories", "Quantity"],
					body: [
						["I.V Rod", "1 pc"],
					]
				}
			},
			{
				type: "closing",
				text: "The Veterinary Same Electric Table is engineered for reliability and ease of use, offering smooth electric height adjustment and a durable stainless steel build to support a wide range of veterinary examination and surgical procedures."
			},
		]
	},

];

/* ══════════════════════════════════════════════════════
	COMPONENT
══════════════════════════════════════════════════════ */
const OTTable = () => {
	return (
		<>
			<OTTableHeroSection />
			{sections.map((s, i) => {
				const isEven = i % 2 === 0;
				const isLast = i === sections.length - 1;
				return (
					<Section key={i} isLast={isLast}>
						<TitleBanner title={s.title} />
						<div
							className={`grid grid-cols-1 gap-6 sm:gap-8 lg:gap-12 items-start ${isEven ? "lg:grid-cols-[62%_38%]" : "lg:grid-cols-[38%_62%]"
								}`}
						>
							{/* Image always first in DOM → mobile: Heading → Image → Content */}
							<ProductImage
								src={s.img}
								alt={s.alt}
								animateFrom={isEven ? "right" : "left"}
								className={isEven ? "lg:order-2" : "lg:order-1"}
							/>
							<ContentBlocks
								blocks={s.blocks}
								animateFrom={isEven ? "left" : "right"}
								className={isEven ? "lg:order-1" : "lg:order-2"}
							/>
						</div>
					</Section>
				);
			})}
		</>
	);
};

export default OTTable;
