
// // Testimonials.jsx
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaQuoteLeft, FaStar } from "react-icons/fa";
// import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

// const testimonials = [
//   {
//     name: "Dr. Rajesh Sharma",
//     role: "Chief Surgeon",
//     hospital: "Apollo Hospitals, Delhi",
//     initials: "RS",
//     avatarBg: "bg-blue-600",
//     rating: 5,
//     text: "Dev Industries supplied our entire OT setup — tables, lights, and accessories. The quality is exceptional and the after-sales support is prompt. Highly recommended for any hospital looking for reliable OT equipment.",
//   },
//   {
//     name: "Dr. Meena Patel",
//     role: "Head of Gynaecology",
//     hospital: "Fortis Hospital, Mumbai",
//     initials: "MP",
//     avatarBg: "bg-emerald-600",
//     rating: 5,
//     text: "The electric gynaecology table we procured has been in use for 2 years without a single issue. Excellent build quality and the installation team was professional and efficient.",
//   },
//   {
//     name: "Mr. Suresh Nair",
//     role: "Hospital Administrator",
//     hospital: "KIMS Hospital, Hyderabad",
//     initials: "SN",
//     avatarBg: "bg-amber-500",
//     rating: 5,
//     text: "We've been sourcing spare parts from Dev Industries for 3 years. Genuine parts, competitive pricing, and delivery is always on time. A trustworthy partner for hospital operations.",
//   },
//   {
//     name: "Dr. Anita Verma",
//     role: "Orthopaedic Surgeon",
//     hospital: "Medanta, Gurugram",
//     initials: "AV",
//     avatarBg: "bg-purple-600",
//     rating: 5,
//     text: "The OT lights from Dev Industries are superb — shadowless, bright, and adjustable. Our surgical team has noticed a significant improvement in visibility during procedures.",
//   },
// ];

// const Testimonials = () => {
//   const [active, setActive] = useState(0);

//   const prev = () => setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1));
//   const next = () => setActive((p) => (p === testimonials.length - 1 ? 0 : p + 1));

//   const current = testimonials[active];

//   return (
//     <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-slate-50 to-blue-50 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Header row */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
//         >
//           <div>
//             <div className="flex items-center gap-3 mb-4">
//               <span className="block w-8 h-px bg-blue-600" />
//               <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-blue-600">
//                 Testimonials
//               </span>
//             </div>
//             <h2 className="font-serif text-3xl md:text-5xl font-black text-gray-900 leading-tight">
//               What Doctors
//               <br />
//               <span className="relative text-blue-600 inline-block">
//                 Say About Us
//                 <span className="absolute left-0 -bottom-1 right-0 h-0.5 bg-cyan-400 rounded block" />
//               </span>
//             </h2>
//           </div>

//           {/* Nav arrows */}
//           <div className="flex items-center gap-3">
//             <button
//               onClick={prev}
//               className="w-11 h-11 border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-200"
//             >
//               <FiArrowLeft className="text-lg" />
//             </button>
//             <span className="text-sm text-gray-400 font-medium w-16 text-center">
//               {String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
//             </span>
//             <button
//               onClick={next}
//               className="w-11 h-11 border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-200"
//             >
//               <FiArrowRight className="text-lg" />
//             </button>
//           </div>
//         </motion.div>

//         {/* Main content */}
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">

//           {/* Left — big quote card */}
//           <div className="lg:col-span-3">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={active}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: 20 }}
//                 transition={{ duration: 0.35 }}
//                 className="bg-blue-600 p-8 md:p-12 h-full flex flex-col justify-between relative overflow-hidden"
//               >
//                 {/* Background pattern */}
//                 <div
//                   className="absolute inset-0 opacity-[0.04]"
//                   style={{
//                     backgroundImage: `repeating-linear-gradient(
//                       0deg, transparent, transparent 30px,
//                       #fff 30px, #fff 31px
//                     ), repeating-linear-gradient(
//                       90deg, transparent, transparent 30px,
//                       #fff 30px, #fff 31px
//                     )`,
//                   }}
//                 />

//                 {/* Decorative circle */}
//                 <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full border border-white opacity-10" />
//                 <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full border border-white opacity-10" />

//                 <div className="relative z-10">
//                   {/* Quote icon */}
//                   <div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-8">
//                     <FaQuoteLeft className="text-white text-xl" />
//                   </div>

//                   {/* Stars */}
//                   <div className="flex gap-1 mb-6">
//                     {Array.from({ length: current.rating }).map((_, i) => (
//                       <FaStar key={i} className="text-yellow-300 text-sm" />
//                     ))}
//                   </div>

//                   {/* Text */}
//                   <p className="text-white text-lg md:text-xl leading-relaxed font-light">
//                     "{current.text}"
//                   </p>
//                 </div>

//                 {/* Author */}
//                 <div className="relative z-10 flex items-center gap-4 mt-10 pt-8 border-t border-white/20">
//                   <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-base shrink-0 ${current.avatarBg} border-2 border-white/30`}>
//                     {current.initials}
//                   </div>
//                   <div>
//                     <p className="text-white font-bold text-sm">{current.name}</p>
//                     <p className="text-blue-200 text-xs mt-0.5">{current.role}</p>
//                     <p className="text-blue-300 text-[11px] mt-0.5">{current.hospital}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Right — stacked cards */}
//           <div className="lg:col-span-2 flex flex-col gap-3">
//             {testimonials.map((t, i) => (
//               <button
//                 key={i}
//                 onClick={() => setActive(i)}
//                 className={`w-full text-left p-5 border transition-all duration-250 flex items-center gap-4 group
//                   ${active === i
//                     ? "border-blue-500 bg-blue-50 shadow-sm"
//                     : "border-gray-200 bg-white hover:border-blue-300 hover:bg-gray-50"
//                   }`}
//               >
//                 {/* Active indicator */}
//                 <div className={`w-1 self-stretch rounded-full shrink-0 transition-colors duration-200
//                   ${active === i ? "bg-blue-600" : "bg-transparent group-hover:bg-blue-200"}`}
//                 />

//                 {/* Avatar */}
//                 <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 ${t.avatarBg}`}>
//                   {t.initials}
//                 </div>

//                 {/* Info */}
//                 <div className="min-w-0 flex-1">
//                   <p className={`text-sm font-semibold truncate transition-colors duration-200
//                     ${active === i ? "text-blue-700" : "text-gray-900"}`}>
//                     {t.name}
//                   </p>
//                   <p className="text-[11px] text-gray-500 truncate">{t.role}</p>
//                   <p className="text-[11px] text-gray-400 truncate">{t.hospital}</p>
//                 </div>

//                 {/* Stars mini */}
//                 <div className="flex gap-0.5 shrink-0">
//                   {Array.from({ length: t.rating }).map((_, j) => (
//                     <FaStar key={j} className={`text-[10px] transition-colors duration-200
//                       ${active === i ? "text-yellow-400" : "text-gray-300"}`} />
//                   ))}
//                 </div>
//               </button>
//             ))}

//             {/* Progress bar */}
//             <div className="mt-2 h-1 bg-gray-100 rounded-full overflow-hidden">
//               <motion.div
//                 className="h-full bg-blue-600 rounded-full"
//                 animate={{ width: `${((active + 1) / testimonials.length) * 100}%` }}
//                 transition={{ duration: 0.4 }}
//               />
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;






// Testimonials.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const testimonials = [
  {
    name: "Dr. Rajesh Sharma",
    role: "Chief Surgeon",
    hospital: "Apollo Hospitals, Delhi",
    initials: "RS",
    avatarBg: "bg-blue-600",
    rating: 5,
    text: "Dev Industries supplied our entire OT setup — tables, lights, and accessories. The quality is exceptional and the after-sales support is prompt. Highly recommended for any hospital looking for reliable OT equipment.",
  },
  {
    name: "Dr. Meena Patel",
    role: "Head of Gynaecology",
    hospital: "Fortis Hospital, Mumbai",
    initials: "MP",
    avatarBg: "bg-emerald-600",
    rating: 5,
    text: "The electric gynaecology table we procured has been in use for 2 years without a single issue. Excellent build quality and the installation team was professional and efficient.",
  },
  {
    name: "Mr. Suresh Nair",
    role: "Hospital Administrator",
    hospital: "KIMS Hospital, Hyderabad",
    initials: "SN",
    avatarBg: "bg-amber-500",
    rating: 5,
    text: "We've been sourcing spare parts from Dev Industries for 3 years. Genuine parts, competitive pricing, and delivery is always on time. A trustworthy partner for hospital operations.",
  },
  {
    name: "Dr. Anita Verma",
    role: "Orthopaedic Surgeon",
    hospital: "Medanta, Gurugram",
    initials: "AV",
    avatarBg: "bg-purple-600",
    rating: 5,
    text: "The OT lights from Dev Industries are superb — shadowless, bright, and adjustable. Our surgical team has noticed a significant improvement in visibility during procedures.",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  const next = () => setActive((p) => (p === testimonials.length - 1 ? 0 : p + 1));

  const current = testimonials[active];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-slate-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="block w-8 h-px bg-blue-600" />
              <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-blue-600">
                Testimonials
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
              What Doctors
              <br />
              <span className="relative text-blue-600 inline-block">
                Say About Us
                <span className="absolute left-0 -bottom-1 right-0 h-0.5 bg-cyan-400 rounded block" />
              </span>
            </h2>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 sm:w-11 sm:h-11 border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-200"
            >
              <FiArrowLeft className="text-base sm:text-lg" />
            </button>
            <span className="text-xs sm:text-sm text-gray-400 font-medium w-14 sm:w-16 text-center">
              {String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
            <button
              onClick={next}
              className="w-10 h-10 sm:w-11 sm:h-11 border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-200"
            >
              <FiArrowRight className="text-base sm:text-lg" />
            </button>
          </div>
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 items-stretch">

          {/* Left — big quote card */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.35 }}
                className="bg-blue-600 p-6 sm:p-8 md:p-10 lg:p-12 h-full flex flex-col justify-between relative overflow-hidden"
              >
                {/* Background pattern */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      0deg, transparent, transparent 30px,
                      #fff 30px, #fff 31px
                    ), repeating-linear-gradient(
                      90deg, transparent, transparent 30px,
                      #fff 30px, #fff 31px
                    )`,
                  }}
                />

                {/* Decorative circles */}
                <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full border border-white opacity-10" />
                <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full border border-white opacity-10" />

                <div className="relative z-10">
                  {/* Quote icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 flex items-center justify-center mb-5 sm:mb-8">
                    <FaQuoteLeft className="text-white text-base sm:text-xl" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4 sm:mb-6">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <FaStar key={i} className="text-yellow-300 text-xs sm:text-sm" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed font-light">
                    "{current.text}"
                  </p>
                </div>

                {/* Author */}
                <div className="relative z-10 flex items-center gap-3 sm:gap-4 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/20">
                  <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base shrink-0 ${current.avatarBg} border-2 border-white/30`}>
                    {current.initials}
                  </div>
                  <div>
                    <p className="text-white font-bold text-xs sm:text-sm">{current.name}</p>
                    <p className="text-blue-200 text-[11px] sm:text-xs mt-0.5">{current.role}</p>
                    <p className="text-blue-300 text-[10px] sm:text-[11px] mt-0.5">{current.hospital}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — stacked cards */}
          <div className="lg:col-span-2 flex flex-col gap-2 sm:gap-3">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left p-3 sm:p-4 md:p-5 border transition-all duration-250 flex items-center gap-3 sm:gap-4 group
                  ${active === i
                    ? "border-blue-500 bg-blue-50 shadow-sm"
                    : "border-gray-200 bg-white hover:border-blue-300 hover:bg-gray-50"
                  }`}
              >
                {/* Active indicator */}
                <div className={`w-1 self-stretch rounded-full shrink-0 transition-colors duration-200
                  ${active === i ? "bg-blue-600" : "bg-transparent group-hover:bg-blue-200"}`}
                />

                {/* Avatar */}
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 ${t.avatarBg}`}>
                  {t.initials}
                </div>

                {/* Info */}
                <div className="min-w-0 flex-1">
                  <p className={`text-xs sm:text-sm font-semibold truncate transition-colors duration-200
                    ${active === i ? "text-blue-700" : "text-gray-900"}`}>
                    {t.name}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-gray-500 truncate">{t.role}</p>
                  <p className="text-[10px] sm:text-[11px] text-gray-400 truncate">{t.hospital}</p>
                </div>

                {/* Stars mini — hide on very small screens */}
                <div className="hidden xs:flex sm:flex gap-0.5 shrink-0">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <FaStar key={j} className={`text-[9px] sm:text-[10px] transition-colors duration-200
                      ${active === i ? "text-yellow-400" : "text-gray-300"}`} />
                  ))}
                </div>
              </button>
            ))}

            {/* Progress bar */}
            <div className="mt-1 sm:mt-2 h-1 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-600 rounded-full"
                animate={{ width: `${((active + 1) / testimonials.length) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;