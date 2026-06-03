// // ProcessSection.jsx
// import React from "react";
// import { motion } from "framer-motion";

// const steps = [
//   {
//     number: "01",
//     title: "Requirement Analysis",
//     desc: "We understand your hospital's specific needs — surgical specialty, space, and budget — before recommending any equipment.",
//     icon: "📋",
//   },
//   {
//     number: "02",
//     title: "Product Selection",
//     desc: "Our experts guide you through our certified catalogue to find the exact OT table, light, or accessory that fits your OT setup.",
//     icon: "🔍",
//   },
//   {
//     number: "03",
//     title: "Quality Inspection",
//     desc: "Every unit undergoes rigorous QC checks against ISO 13485 and CE standards before it leaves our facility.",
//     icon: "✅",
//   },
//   {
//     number: "04",
//     title: "Delivery & Installation",
//     desc: "We handle end-to-end logistics and on-site installation with trained technicians across India and 40+ countries.",
//     icon: "🚚",
//   },
// ];

// const ProcessSection = () => {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="mb-16"
//         >
//           <div className="flex items-center gap-3 mb-4">
//             <span className="block w-8 h-px bg-blue-600" />
//             <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-blue-600">
//               How It Works
//             </span>
//           </div>
//           <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
//             <h2 className="font-serif text-3xl md:text-4xl font-black text-gray-900 leading-tight max-w-md">
//               Our Simple{" "}
//               <span className="relative text-blue-600 inline-block">
//                 4-Step Process
//                 <span className="absolute left-0 -bottom-1 right-0 h-0.5 bg-cyan-400 rounded block" />
//               </span>
//             </h2>
//             <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
//               From consultation to installation — we make procuring medical
//               equipment seamless and reliable.
//             </p>
//           </div>
//         </motion.div>

//         {/* Steps */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
//           {steps.map((step, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//               className="relative group"
//             >
//               {/* Connector line (not on last) */}
//               {i < steps.length - 1 && (
//                 <div className="hidden lg:block absolute top-10 left-[calc(100%-0px)] w-full h-px bg-gray-200 z-0" />
//               )}

//               <div className="relative z-10 p-6 border border-gray-100 bg-white hover:border-blue-200 hover:shadow-md transition-all duration-300 h-full flex flex-col">
//                 {/* Number */}
//                 <div className="flex items-center justify-between mb-6">
//                   <span className="font-serif text-5xl font-black text-gray-100 leading-none select-none">
//                     {step.number}
//                   </span>
//                   <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-xl">
//                     {step.icon}
//                   </div>
//                 </div>

//                 {/* Top accent */}
//                 <div className="w-8 h-0.5 bg-blue-600 mb-4 group-hover:w-16 transition-all duration-300" />

//                 <h3 className="text-base font-bold text-gray-900 mb-2">
//                   {step.title}
//                 </h3>
//                 <p className="text-sm text-gray-500 leading-relaxed flex-1">
//                   {step.desc}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ProcessSection;




// ProcessSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaClipboardList, FaSearch, FaShieldAlt, FaTruckMoving } from "react-icons/fa";

const steps = [
  {
    number: "01",
    title: "Requirement Analysis",
    desc: "We understand your hospital's specific needs — surgical specialty, space, and budget — before recommending any equipment.",
    icon: <FaClipboardList />,
    color: "bg-blue-50 text-blue-600 border-blue-100",
    hoverBg: "group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600",
  },
  {
    number: "02",
    title: "Product Selection",
    desc: "Our experts guide you through our certified catalogue to find the exact OT table, light, or accessory that fits your OT setup.",
    icon: <FaSearch />,
    color: "bg-cyan-50 text-cyan-600 border-cyan-100",
    hoverBg: "group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600",
  },
  {
    number: "03",
    title: "Quality Inspection",
    desc: "Every unit undergoes rigorous QC checks against ISO 13485 and CE standards before it leaves our facility.",
    icon: <FaShieldAlt />,
    color: "bg-green-50 text-green-600 border-green-100",
    hoverBg: "group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600",
  },
  {
    number: "04",
    title: "Delivery & Installation",
    desc: "We handle end-to-end logistics and on-site installation with trained technicians across India and 40+ countries.",
    icon: <FaTruckMoving />,
    color: "bg-orange-50 text-orange-500 border-orange-100",
    hoverBg: "group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-px bg-blue-600" />
              <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-blue-600">
                How It Works
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-black text-gray-900 leading-tight">
              Our Simple{" "}
              <span className="relative text-blue-600 inline-block">
                4-Step Process
                <span className="absolute left-0 -bottom-1 right-0 h-0.5 bg-cyan-400 rounded block" />
              </span>
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-sm leading-relaxed md:text-right">
            From consultation to installation — we make procuring medical
            equipment seamless and reliable.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="group relative bg-white border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Top color bar */}
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Card body */}
              <div className="p-7 flex flex-col gap-5 flex-1">

                {/* Number + Icon row */}
                <div className="flex items-center justify-between">
                  <span className="font-serif text-6xl font-black text-gray-100 leading-none select-none group-hover:text-blue-50 transition-colors duration-300">
                    {step.number}
                  </span>
                  <div className={`w-12 h-12 rounded border flex items-center justify-center text-lg transition-all duration-300 ${step.color} ${step.hoverBg}`}>
                    {step.icon}
                  </div>
                </div>

                {/* Accent line */}
                <div className="w-8 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-500" />

                {/* Text */}
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

              </div>

              {/* Bottom step indicator */}
              <div className="px-7 py-3 border-t border-gray-100 bg-gray-50 group-hover:bg-blue-600 transition-colors duration-300">
                <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 group-hover:text-blue-100 transition-colors duration-300">
                  Step {step.number}
                </span>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom connector strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 hidden lg:flex items-center justify-between px-8"
        >
          {steps.map((_, i) => (
            <React.Fragment key={i}>
              <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
              {i < steps.length - 1 && (
                <div className="flex-1 h-px bg-blue-200 mx-2 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-400" />
                </div>
              )}
            </React.Fragment>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ProcessSection;