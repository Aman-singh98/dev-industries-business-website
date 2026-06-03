import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiPhone,
  FiChevronLeft,
  FiChevronRight,
  FiCheckCircle,
  FiTool,
} from "react-icons/fi";
import { BsLightbulb } from "react-icons/bs";
import { MdOutlineTableRestaurant } from "react-icons/md";

const slides = [
  {
    id: 1,
    tag: "Surgical Precision",
    tagColor: "text-cyan-600 bg-cyan-50 border-cyan-200",
    dotColor: "bg-cyan-500",
    heading: "OT Table",
    subheading: "Built for Every Surgical Need",
    description:
      "Our hydraulic operating tables deliver smooth height adjustment, precise Trendelenburg positioning, and unmatched weight capacity — engineered for the most demanding surgical environments.",
    features: [
      "360° Rotation & Tilt Control",
      "Stainless Steel Frame",
      "400 kg Load Capacity",
      "Easy-Clean Upholstery",
    ],
    accentColor: "from-cyan-700 to-sky-800",
    accentLight: "bg-cyan-500",
    accentBorder: "border-cyan-200",
    accentBg: "bg-cyan-50",
    accentText: "text-cyan-800",
    btnShadow: "shadow-cyan-200",
    imageLayout: "right",
    Icon: MdOutlineTableRestaurant,
    imagePlaceholderText: "OT Table",
    imageSrc: "/images/products/ot-table/OT_TABLE_ELECTRIC_TOP_SLIDE.png",
    stats: [
      { v: "400kg", l: "Load Cap." },
      { v: "360°", l: "Rotation" },
      { v: "CE", l: "Certified" },
    ],
  },
  {
    id: 2,
    tag: "Shadowless Illumination",
    tagColor: "text-amber-600 bg-amber-50 border-amber-200",
    dotColor: "bg-amber-500",
    heading: "LED OT Light",
    subheading: "Shadow-Free Surgical Clarity",
    description:
      "Precision-engineered LED surgical lights with 160,000 lux intensity, colour temperature control, and zero-shadow optics — ensuring crystal-clear visibility for your surgical team.",
    features: [
      "160,000 Lux Intensity",
      "Colour Temp 3,500–5,000K",
      "50,000 hr LED Lifespan",
      "Sterilisable Handle",
    ],
    accentColor: "from-amber-700 to-orange-800",
    accentLight: "bg-amber-500",
    accentBorder: "border-amber-200",
    accentBg: "bg-amber-50",
    accentText: "text-amber-800",
    btnShadow: "shadow-amber-200",
    imageLayout: "left",
    Icon: BsLightbulb,
    imagePlaceholderText: "OT Light",
    imageSrc: "/images/products/ot-light/TMS_4_Reflector.png",
    stats: [
      { v: "160K", l: "Lux" },
      { v: "50K hr", l: "Lifespan" },
      { v: "IP65", l: "Rated" },
    ],
  },
  {
    id: 3,
    tag: "Genuine Parts",
    tagColor: "text-indigo-600 bg-indigo-50 border-indigo-200",
    dotColor: "bg-indigo-500",
    heading: "OT Spare Parts",
    subheading: "Keep Every System Running",
    description:
      "Authentic OEM-grade replacement components for OT tables and surgical lights. From motor assemblies to LED modules — every part tested, certified, and ready to ship Pan-India.",
    features: [
      "OEM-Grade Components",
      "Fast Pan-India Delivery",
      "Warranty on All Parts",
      "Expert Fitting Support",
    ],
    accentColor: "from-indigo-700 to-violet-800",
    accentLight: "bg-indigo-500",
    accentBorder: "border-indigo-200",
    accentBg: "bg-indigo-50",
    accentText: "text-indigo-800",
    btnShadow: "shadow-indigo-200",
    imageLayout: "right",
    Icon: FiTool,
    imagePlaceholderText: "Spare Parts",
    imageSrc: "/images/products/spare-parts/Over_bed_table.png",
    stats: [
      { v: "100+", l: "SKUs" },
      { v: "OEM", l: "Quality" },
      { v: "24hr", l: "Dispatch" },
    ],
  },
];

/* ── Image Panel ── */
function ImagePanel({ slide }) {
  const { Icon, imagePlaceholderText, imageSrc, accentColor, accentText } =
    slide;
  return (
    <div className="relative w-full h-full min-h-[300px] lg:min-h-0 flex items-center justify-center">
      <div className="absolute w-72 h-72 rounded border border-slate-100" />
      <div className="absolute w-52 h-52 rounded border border-slate-100" />

      <div className="relative z-10 flex flex-col items-center gap-5">
        <img
          src={imageSrc}
          alt={imagePlaceholderText}
          className="w-72 h-72 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] object-contain "
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div
          className={`hidden w-56 h-56 rounded bg-gradient-to-br ${accentColor} opacity-10 items-center justify-center`}
        >
          <Icon className={`text-8xl ${accentText}`} />
        </div>

        <div className="flex gap-3 flex-wrap justify-center">
          {slide.stats.map((s) => (
            <div
              key={s.l}
              className="bg-white/95 border border-slate-200 rounded px-4 py-2.5  text-center"
            >
              <p
                className={`text-base font-bold ${accentText}`}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  letterSpacing: "0.03em",
                }}
              >
                {s.v}
              </p>
              <p
                className="text-[9px] text-slate-400 mt-0.5 uppercase tracking-widest font-semibold"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Content Panel ── */
function ContentPanel({ slide }) {
  const {
    tag,
    tagColor,
    dotColor,
    heading,
    subheading,
    description,
    features,
    accentColor,
    accentText,
    accentBorder,
    btnShadow,
  } = slide;

  return (
    <div className="flex flex-col justify-center gap-6 px-8 sm:px-12 lg:px-16 py-14 lg:py-0">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="inline-flex items-center gap-2 mb-4 sm:mb-5"
      >
        <span className="block w-6 sm:w-8 h-px bg-emerald-800" />
        <span className="uppercase tracking-[0.2em] text-[14px] sm:text-sm font-semibold font-mono text-emerald-900">
          {tag}
        </span>
        <span className="block w-6 sm:w-8 h-px bg-emerald-800" />
      </motion.div>

      {/* Main heading — Barlow Condensed Italic (editorial / bold) */}
      <div className="space-y-2">
        <h1
          className="text-[2.7rem] sm:text-[3.2rem] lg:text-[4.6rem] font-black text-slate-900 leading-[1.05] tracking-tight"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
          }}
        >
          {heading}
        </h1>

        {/* Subheading — DM Sans spaced caps */}
        <p
          className={`text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.18em] ${accentText}`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          — {subheading}
        </p>
      </div>

      {/* Accent rule */}
      <div className={`w-10 h-[3px] rounded bg-gradient-to-r ${accentColor}`} />

      {/* Description — Lora serif for warmth & readability */}
      <p
        className="text-slate-500 text-[0.92rem] sm:text-[0.95rem] leading-[1.85] max-w-lg"
        style={{ fontFamily: "'Lora', serif" }}
      >
        {description}
      </p>

      {/* Features — DM Sans medium */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2.5">
            <FiCheckCircle
              className={`flex-shrink-0 text-[14px] ${accentText}`}
            />
            <span
              className="text-[0.83rem] text-slate-700"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                letterSpacing: "0.01em",
              }}
            >
              {f}
            </span>
          </li>
        ))}
      </ul>

    {/* CTA Buttons */}
<div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-1 mb-8 w-full">
  <Link
    to="/products"
    className={`flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3 text-sm font-bold text-white bg-gradient-to-r ${accentColor} ${btnShadow} hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200`}
    style={{
      fontFamily: "'DM Sans', sans-serif",
      letterSpacing: "0.05em",
    }}
  >
    View Product <FiArrowRight />
  </Link>
  <Link
    to="/contact"
    className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3 text-sm font-semibold text-slate-600 border border-slate-300 hover:border-slate-500 hover:text-slate-800 bg-white transition-all duration-200"
    style={{
      fontFamily: "'DM Sans', sans-serif",
      letterSpacing: "0.04em",
    }}
  >
    <FiPhone /> Get Quote
  </Link>
</div>
    </div>
  );
}

/* ── Main Hero ── */
function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const total = slides.length;

  const goTo = useCallback(
    (idx) => {
      if (animating) return;
      setAnimating(true);
      setCurrent(idx);
      setTimeout(() => setAnimating(false), 500);
    },
    [animating],
  );

  const next = useCallback(
    () => goTo((current + 1) % total),
    [current, total, goTo],
  );
  const prev = useCallback(
    () => goTo((current - 1 + total) % total),
    [current, total, goTo],
  );

  useEffect(() => {
    const t = setInterval(next, 3000);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[current];

  return (
    <section
      className="relative bg-gradient-to-b from-white via-slate-50 to-blue-50 overflow-hidden"
      style={{ minHeight: "calc(100vh - 68px)" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,700;0,800;0,900;1,700;1,800;1,900&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=Lora:ital,wght@0,400;0,500;1,400&display=swap');

        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Top accent bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${slide.accentColor} transition-all duration-700`}
      />

      {/* Watermark — Barlow Condensed bold */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-black text-slate-100 uppercase whitespace-nowrap"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(5rem, 13vw, 14rem)",
            letterSpacing: "0.08em",
            lineHeight: 1,
          }}
        >
          {slide.imagePlaceholderText}
        </span>
      </div>

      {/* Slide */}
      <div
        key={current}
        className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 items-stretch"
        style={{
          minHeight: "calc(100vh - 68px)",
          animation: "fadeSlide 0.5s ease forwards",
        }}
      >
        {slide.imageLayout === "right" ? (
          <>
            <ImagePanel slide={slide} />
            <ContentPanel slide={slide} />
          </>
        ) : (
          <>
            <ContentPanel slide={slide} />
            <ImagePanel slide={slide} />
          </>
        )}
      </div>

      {/* Bottom control bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-white/85 backdrop-blur-sm border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          {/* Slide tabs — desktop */}
          <div className="hidden sm:flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                className={`flex items-center gap-2 px-4 py-2  border transition-all duration-300 whitespace-nowrap ${
                  i === current
                    ? `${s.accentBg} ${s.accentText} ${s.accentBorder}`
                    : "text-slate-400 border-transparent hover:text-slate-600"
                }`}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                <s.Icon className="text-sm" />
                {s.heading}
              </button>
            ))}
          </div>

          {/* Dots — mobile */}
          <div className="flex sm:hidden items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded transition-all duration-300 ${
                  i === current
                    ? `w-6 h-2.5 ${slide.accentLight}`
                    : "w-2.5 h-2.5 bg-slate-300"
                }`}
              />
            ))}
          </div>

          {/* Counter + progress + arrows */}
          <div className="flex  items-center gap-3 flex-shrink-0">
            <span
              className="text-slate-400 tabular-nums"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.1em",
              }}
            >
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>

            <div className="w-20 h-1 bg-slate-200 rounded overflow-hidden">
              <div
                className={`h-full rounded bg-gradient-to-r ${slide.accentColor} transition-all duration-500`}
                style={{ width: `${((current + 1) / total) * 100}%` }}
              />
            </div>

            <button
              onClick={prev}
              className="w-9 h-9 rounded bg-white border border-slate-200 hover:border-slate-400 flex items-center justify-center text-slate-500 hover:text-slate-800  transition-all duration-200"
            >
              <FiChevronLeft className="text-base" />
            </button>
            <button
              onClick={next}
              className={`w-9 h-9 rounded text-white flex items-center justify-center  bg-gradient-to-br ${slide.accentColor} transition-all duration-200`}
            >
              <FiChevronRight className="text-base" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
