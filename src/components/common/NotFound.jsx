// NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiHome } from "react-icons/fi";
import { MdOutlineSearchOff } from "react-icons/md";

const NotFound = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">

        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mb-6 select-none"
        >
          <span className="font-serif font-black text-[10rem] md:text-[14rem] leading-none text-gray-100">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-blue-50 border border-blue-100 flex items-center justify-center">
              <MdOutlineSearchOff className="text-blue-600 text-4xl" />
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block w-8 h-px bg-blue-600" />
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-blue-600">
              Page Not Found
            </span>
            <span className="block w-8 h-px bg-blue-600" />
          </div>

          <h1 className="font-serif text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
            Oops! This page{" "}
            <span className="relative text-blue-600 inline-block">
              doesn't exist
              <span className="absolute left-0 -bottom-1 right-0 h-0.5 bg-cyan-400 rounded block" />
            </span>
          </h1>

          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md mx-auto mb-10">
            The page you're looking for may have been moved, deleted, or never
            existed. Let's get you back on track.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-colors duration-200"
            >
              <FiHome className="text-base" />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 text-sm font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors duration-200"
            >
              <FiArrowLeft className="text-base" />
              Go Back
            </button>
          </div>
        </motion.div>

        {/* Bottom links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-14 pt-8 border-t border-gray-100"
        >
          <p className="text-xs text-gray-400 mb-4 uppercase tracking-widest">
            You might be looking for
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { label: "Products", href: "/products" },
              { label: "OT Tables", href: "/products/ot-table" },
              { label: "OT Lights", href: "/products/ot-light" },
              { label: "Contact", href: "/contact" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                to={href}
                className="text-xs font-medium text-blue-600 border border-blue-100 bg-blue-50 px-4 py-1.5 hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default NotFound;