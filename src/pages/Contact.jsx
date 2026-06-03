
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiPhone, FiMail, FiMapPin, FiClock,
  FiCheck, FiSend, FiAward,
} from "react-icons/fi";
import MapSection from "../components/home/MapSection";

/* ── VARIANTS ── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ── DATA ── */
const infoCards = [
  {
    icon: <FiPhone />,
    label: "Call us",
    value: <> +91 93506 77449 <br />+91 94167 61597 <br /> +91 86073 04334 </>,
  },
  {
    icon: <FiMail />,
    label: "Email us",
    value: (
      <span className="flex flex-col gap-1">
        <a href="mailto:devbhiwani1@gmail.com" className="hover:text-blue-600 transition break-all">
          devbhiwani1@gmail.com
        </a>
        <a href="mailto:info@devindustriesbhiwani.com" className="hover:text-blue-600 transition break-all">
          info@devindustriesbhiwani.com
        </a>
      </span>
    ),
  },
  {
    icon: <FiMapPin />,
    label: "Office",
    value: <> Plot 127, Sector 21 <br /> Bhiwani, HR – 127021 </>,
  },
  {
    icon: <FiClock />,
    label: "Working hours",
    value: <> Mon – Sat <br /> 9:00 AM – 6:00 PM </>,
  },
];

const checks = [
  { title: "Precision OT tables", desc: "Engineered for demanding surgical environments with full adjustability." },
  { title: "Surgical lighting systems", desc: "High-intensity shadowless lamps for zero-compromise visibility." },
  { title: "Hospital furniture & spare parts", desc: "Durable ward furniture and genuine Dev-brand replacement components." },
  { title: "GEM portal procurement", desc: "Government hospitals can order directly via the GEM e-marketplace." },
];

/* ── COMPONENT ── */
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
    const data = await res.json();
    setResult(data.success ? "Message sent successfully ✅" : "Something went wrong ❌");
    if (data.success) e.target.reset();
  };

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative min-h-[60vh] sm:min-h-[65vh] md:min-h-[55vh] flex items-center overflow-hidden px-4 sm:px-8 md:px-16 pt-24 sm:pt-28 pb-16 sm:pb-20"
        style={{
          backgroundImage: `url(/images/contact/contact_image.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0c1e38]/80" />
        <div className="absolute w-48 sm:w-80 h-48 sm:h-80 rounded-full bg-[#185fa5] opacity-10 -top-10 sm:-top-20 -right-8 sm:-right-16 z-10" />
        <div className="absolute w-32 sm:w-48 h-32 sm:h-48 rounded-full bg-[#378add] opacity-10 bottom-6 sm:bottom-10 left-6 sm:left-10 z-10" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative z-20 max-w-2xl w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-4 sm:mb-5"
          >
            <span className="block w-6 sm:w-8 h-px bg-emerald-500" />
            <span className="uppercase tracking-[0.2em] text-[10px] sm:text-xs font-medium font-mono text-emerald-300">
              Medical equipment manufacturer
            </span>
            <span className="block w-6 sm:w-8 h-px bg-emerald-500" />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight mb-4"
          >
            Talk to
            <br />
            <span
              className="text-[#ff0000] text-5xl sm:text-7xl md:text-9xl"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Dev{" "}
            </span>
            <span
              className="text-[#d8e3ff] text-4xl sm:text-6xl md:text-8xl"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Industries
            </span>
            <br />
            <span className="text-xl sm:text-2xl md:text-4xl">— we're here to help</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-white/60 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed"
          >
            Get expert guidance on OT tables, surgical lights, and hospital furniture.
            Our team responds within 24 hours.
          </motion.p>
        </motion.div>
      </section>

      {/* ── INFO CARDS ── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-20 -mt-8 sm:-mt-10 px-4 sm:px-8 md:px-16"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {infoCards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded overflow-hidden shadow-sm"
              style={{ border: "0.5px solid #e2e8f0" }}
            >
              <div className="bg-[#0f2540] flex items-center justify-center py-3 sm:py-4">
                <span className="text-white text-2xl sm:text-4xl">{card.icon}</span>
              </div>
              <div className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                <p className="text-[11px] sm:text-[13px] lg:text-[15px] text-slate-400 font-semibold uppercase tracking-widest mb-1">
                  {card.label}
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-slate-700 leading-relaxed">
                  {card.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── MAIN: LEFT INFO + RIGHT FORM ── */}
      <section
        className="px-4 sm:px-8 md:px-16 py-12 sm:py-14 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start"
        style={{
          backgroundImage: `url(/images/contact/contact_image2.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-3 sm:mb-4">
            Why choose{" "}
            <span className="text-blue-700">Dev Industries</span>{" "}
            for your hospital?
          </h2>
          <p className="text-slate-800 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
            Since 2013, we have supplied precision-built medical equipment to 200+
            healthcare institutions across India. We are MSME-registered and an
            authorised GEM supplier.
          </p>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-l-4 border-blue-700 bg-blue-50 rounded px-4 sm:px-5 py-3 sm:py-4 mb-6 sm:mb-8"
          >
            <p className="text-blue-900 text-xs sm:text-sm leading-relaxed">
              <strong>10+ years of manufacturing trust</strong> — every product is
              built and tested at our Bhiwani facility before delivery.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4 sm:space-y-5"
          >
            {checks.map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariant}
                className="flex items-start gap-3"
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-700 flex items-center justify-center text-white flex-shrink-0 mt-0.5"
                >
                  <FiCheck size={11} />
                </motion.div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative p-5 sm:p-8 lg:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.35)] border border-white/40 bg-white/30 space-y-4 sm:space-y-6 w-full max-w-lg mx-auto lg:mx-0"
        >
          <div>
            <h3
              className="text-xl sm:text-2xl font-bold text-slate-900 mb-1"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Send an Enquiry
            </h3>
            <p className="text-slate-700 text-xs sm:text-sm">
              Fill in the details and we'll get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-3 sm:space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="text-[10px] sm:text-xs font-semibold text-slate-900 uppercase tracking-wide mb-1 block">
                  Full name *
                </label>
                <input
                  name="name" required type="text" placeholder="Your name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded border border-slate-200 bg-slate-50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-[10px] sm:text-xs font-semibold text-slate-900 uppercase tracking-wide mb-1 block">
                  Mobile number *
                </label>
                <input
                  name="phone" required type="tel" placeholder="+91 XXXXX XXXXX"
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded border border-slate-200 bg-slate-50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] sm:text-xs font-semibold text-slate-900 uppercase tracking-wide mb-1 block">
                Email address
              </label>
              <input
                name="email" type="email" placeholder="you@hospital.com"
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded border border-slate-200 bg-slate-50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-[10px] sm:text-xs font-semibold text-slate-900 uppercase tracking-wide mb-1 block">
                Hospital / organisation
              </label>
              <input
                name="organisation" type="text" placeholder="Hospital or institute name"
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded border border-slate-200 bg-slate-50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-[10px] sm:text-xs font-semibold text-slate-900 uppercase tracking-wide mb-1 block">
                Enquiry about *
              </label>
              <select
                name="inquiry" required
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded border border-slate-200 bg-slate-50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled defaultValue>Select product</option>
                <option>OT Table</option>
                <option>OT Light / Shadowless Lamp</option>
                <option>Hospital Furniture</option>
                <option>Spare Parts</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] sm:text-xs font-semibold text-slate-900 uppercase tracking-wide mb-1 block">
                Message
              </label>
              <textarea
                name="message" rows={4} placeholder="Describe your requirement..."
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded border border-slate-200 bg-slate-50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, backgroundColor: "#185fa5" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="w-full flex items-center justify-center gap-2 bg-[#0f2540] text-white font-semibold py-2.5 sm:py-3 rounded text-xs sm:text-sm"
            >
              <FiSend /> Submit enquiry
            </motion.button>

            {result && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-xs sm:text-sm text-blue-700 font-semibold"
              >
                {result}
              </motion.p>
            )}
          </form>
        </motion.div>
      </section>

      <MapSection />
    </>
  );
};

export default Contact;