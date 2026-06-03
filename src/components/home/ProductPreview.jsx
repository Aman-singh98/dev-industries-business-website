


import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import otTableImg from "/images/products/ot-table/Electric_gyne.png";
import otLightImg from "/images/products/ot-light/TMS_4_Reflector.png";
import sparePartImg from "/images/products/spare-parts/Over_bed_table.png";
import actuatorImg from "/images/products/actuator/L&K1.png";

import { GiScalpel } from "react-icons/gi";
import { BsLightbulb } from "react-icons/bs";
import { MdOutlineBiotech } from "react-icons/md";
import { TbActivityHeartbeat } from "react-icons/tb";

const products = [
  {
    id: 1,
    name: "OT Table",
    image: otTableImg,
    icon: <GiScalpel />,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
    tagBg: "bg-blue-50 text-blue-700 border-blue-100",
    tag: "Surgical",
    href: "/products/ot-table",
    desc: "Hydraulic and electric operation theatre tables with multi-position adjustments for all surgical specialties.",
  },
  {
    id: 2,
    name: "OT Light",
    image: otLightImg,
    icon: <BsLightbulb />,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    tagBg: "bg-yellow-50 text-yellow-700 border-yellow-100",
    tag: "Lighting",
    href: "/products/ot-light",
    desc: "High-intensity LED shadowless lights with adjustable colour temperature and focus for operation theatres.",
  },
  {
    id: 3,
    name: "Spare Parts",
    image: sparePartImg,
    icon: <MdOutlineBiotech />,
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
    tagBg: "bg-green-50 text-green-700 border-green-100",
    tag: "Maintenance",
    href: "/products/spare-parts",
    desc: "Genuine OEM-compatible spare parts for OT tables and lights to ensure uninterrupted hospital operations.",
  },
  {
    id: 4,
    name: "Linkan Handset",
    image: actuatorImg,
    icon: <TbActivityHeartbeat />,
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-700",
    tagBg: "bg-cyan-50 text-cyan-700 border-cyan-100",
    tag: "Motion Control",
    href: "/products/linkan-handset",
    desc: "L&K electric linear actuators with IP54 rating, up to 6000N load capacity and DC 24V operation for medical equipment.",
  },
];

function ProductsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-20 relative overflow-hidden pt-12 pb-10"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-60" />

      {/* Tag row */}
      <div className="flex items-center gap-3 mb-6">
        <span className="block w-8 h-px bg-blue-600" />
        <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-blue-600">
          Our Products
        </span>
        {[0, 1].map((i) => (
          <span
            key={i}
            aria-hidden="true"
            className="relative inline-flex items-center justify-center w-4 h-4 opacity-35"
          >
            <span className="absolute w-px h-full bg-blue-600" />
            <span className="absolute w-full h-px bg-blue-600" />
          </span>
        ))}
      </div>

      {/* Headline + Stats */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6">

        {/* Headline */}
        <h2 className="font-serif text-[clamp(2rem,5vw,3.6rem)] font-black leading-[1.05] text-gray-900 m-0">
          Precision
          <br />
          <span className="relative text-blue-600 inline-block">
            Medical Equipment
            <span className="absolute left-0 -bottom-1 right-0 h-0.5 bg-cyan-400 rounded block" />
          </span>
        </h2>

        {/* Stats */}
        <div className="flex items-center gap-8 shrink-0 md:pl-8 md:border-l md:border-gray-200">
          {[
            { num: "500+", label: "Instruments" },
            { num: "40+", label: "Countries" },
          ].map(({ num, label }, i) => (
            <div key={i} className="flex flex-col items-start md:items-end">
              <span className="font-serif text-3xl md:text-[2rem] font-bold text-gray-900 leading-none">
                {num}
              </span>
              <span className="text-[10px] text-gray-500 tracking-widest uppercase mt-1">
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-100 mb-5" />

      {/* Subtext */}
      <p className="text-sm md:text-[15px] leading-relaxed text-gray-500 max-w-xl m-0">
        Certified, reliable instruments trusted by healthcare professionals
        in operation theatres worldwide.
      </p>
    </motion.div>
  );
}

const ProductPreview = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <ProductsHeader />

        {/* Cards — 2 cols on sm/md, 4 cols on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white border-2 border-gray-200 hover:border-blue-500 transition-all duration-300"
            >
              {/* Top Accent Bar */}
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-cyan-400" />

              {/* Image Area */}
              <div className="h-56 md:h-64 flex items-center justify-center overflow-hidden bg-gray-50">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <span
                    className={`text-7xl transition-transform duration-500 group-hover:scale-110 ${product.iconColor}`}
                  >
                    {product.icon}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 md:p-6 bg-white">
                <span
                  className={`inline-block text-xs font-semibold px-2.5 py-1 mb-3 border rounded-sm ${product.tagBg}`}
                >
                  {product.tag}
                </span>

                <h3 className="text-base md:text-lg font-bold text-gray-900">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  {product.desc}
                </p>

                <Link
                  to={product.href}
                  className="mt-4 inline-flex items-center gap-2 px-4 md:px-5 py-2 bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition border border-blue-600"
                >
                  View All
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>

              {/* Side Accent */}
              <div className="absolute left-0 top-0 h-0 w-1 bg-blue-600 group-hover:h-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductPreview;