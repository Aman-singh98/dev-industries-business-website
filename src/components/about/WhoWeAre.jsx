import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBed, FaLightbulb, FaTools } from "react-icons/fa";

import aboutThumb from "/images/about/aboutbg1.jpg";


// Replace these imports with your actual Dev Industries product images
import img1 from "/images/about/aboutbg1.jpg";
import img2 from "/images/about/aboutbg2.jpg";
import img3 from "/images/about/aboutbg3.jpg";
import img4 from "/images/about/aboutbg4.jpg";
import img5 from "/images/about/aboutbg5.jpg";
import img6 from "/images/about/aboutbg6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const points = [
  {
    icon: <FaBed className="text-cyan-400 text-3xl" />,
    title: "O.T. Tables & Furniture",
    desc: "Hydraulic & manual operation tables built for precision surgical environments.",
  },
  {
    icon: <FaLightbulb className="text-cyan-400 text-3xl" />,
    title: "Surgical Lighting",
    desc: "O.T. Lights and shadowless lamps delivering shadow-free illumination.",
  },
  {
    icon: <FaTools className="text-cyan-400 text-3xl" />,
    title: "Spare Parts & Components",
    desc: "Genuine rubber, plastic components and spare parts under the Dev brand.",
  },
];

const WhoWeAre = () => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const i = setInterval(
      () => setActiveImage((p) => (p + 1) % images.length),
      2000
    );
    return () => clearInterval(i);
  }, []);

  return (
    <section className="sm:py-20 py-16 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* ================= LEFT ================= */}
        <motion.div
          className="flex flex-col gap-5 sm:gap-6"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-cyan-700 uppercase font-semibold text-xs sm:text-sm tracking-wider">
            About M/S Dev Industries
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-snug">
            Engineering{" "}
            <span className="text-cyan-500">Medical Excellence</span>
          </h2>

          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl">
            <span className="font-semibold text-cyan-900">
              M/S Dev Industries
            </span>{" "}
            is a MSME-registered micro-manufacturing enterprise based in
            Bhiwani, Haryana. Since 2013, we manufacture and supply
            hospital-grade O.T. Tables, Surgical Lights, and Medical Furniture
            to healthcare institutions across India — certified on the
            Government's GEM platform.
          </p>

          {/* POINT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-4 sm:mt-6">
            {points.map((point, index) => (
              <motion.div
                key={index}
                className="bg-white p-5 rounded-2xl border border-gray-200 shadow-md
                           hover:scale-105 transition-transform duration-500
                           flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {point.icon}
                <h3 className="text-gray-900 font-semibold mt-3 text-sm sm:text-base">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mt-2">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-5 sm:gap-6"
        >
          {/* IMAGE */}
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.85, rotate: 8 }}
                transition={{ duration: 0.7 }}
                className="w-full h-full overflow-hidden shadow-2xl rounded-xl"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
              >
                <img
                  src={images[activeImage]}
                  alt="Dev Industries Product"
                  className="w-full h-full object-cover scale-110"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* DOTS */}
          <div className="flex gap-3 mt-1 sm:mt-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                aria-label={`View image ${index + 1}`}
                className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full transition-all duration-300
                  ${
                    activeImage === index
                      ? "bg-cyan-500 scale-125"
                      : "bg-gray-400/50 hover:bg-cyan-400"
                  }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;