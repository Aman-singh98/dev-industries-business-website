

import React from "react";
import logo from "/images/logo/logo.jpeg";
import footerImg from "/images/about/aboutbg5.jpg";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full text-white bg-[#0c1e38]">
      <div className="grid grid-cols-1 lg:grid-cols-[35%_65%]">

        {/* LEFT – Background Image Panel */}
        <div
          className="relative bg-cover bg-center min-h-[360px] flex items-end justify-center"
          style={{ backgroundImage: `url(${footerImg})` }}
        >
        </div>

        {/* RIGHT – Footer Content */}
        <div className="bg-[#0f2540] px-10 py-10 flex flex-col justify-between">

          {/* TOP BAR – Logo + Name */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Dev Industries"
                className="w-20 h-20 rounded-full object-cover border-2 border-blue-400 shadow-md bg-white p-1"
              />
              <div>
                <span className="text-xl md:text-2xl font-semibold text-white block">
                  Dev Industries
                </span>
                <span className="text-xs text-blue-300 tracking-wide">
                  Medical Equipment Manufacturer · Est. 2013
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 text-white/80">
              <span className="text-sm font-medium">Follow Us:</span>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1CMUfrGZBo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition"
              >
                <FaFacebookF size={13} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/devindustriesharyana"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 transition"
              >
                <FaInstagram size={13} />
              </a>

              {/* WhatsApp – two numbers, open first by default */}
              <a
                href="https://wa.me/919350677449"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition"
              >
                <FaWhatsapp size={13} />
              </a>
            </div>
          </div>

          <hr className="border-white/15 mb-8" />

          {/* LINKS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">

            {/* CONTACT */}
            <div>
              <h3 className="text-base font-semibold mb-4 text-blue-300 uppercase tracking-widest text-xs">
                Contact Us
              </h3>
              <ul className="space-y-3 text-white/85 text-sm">
                <li className="flex gap-2 items-start">
                  <FaMapMarkerAlt className="text-blue-400 mt-1 shrink-0" />
                  <span>Plot No. 127, Sector 21, Industrial Area, Bhiwani, Haryana – 127021</span>
                </li>
                <li className="flex gap-2 items-start">
                  <FaPhoneAlt className="text-blue-400 mt-1 shrink-0" />
                  <span>
                    +91 94167 61597 <br /> +91 86073 04334
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <FaEnvelope className="text-blue-400 mt-1 shrink-0" />
                  <span className="flex flex-col gap-1">
                    <a
                      href="mailto:devbhiwani1@gmail.com"
                      className="hover:text-blue-300 transition break-all"
                    >
                      devbhiwani1@gmail.com
                    </a>
                    <a
                      href="mailto:info@devindustriesbhiwani.com"
                      className="hover:text-blue-300 transition break-all"
                    >
                      info@devindustriesbhiwani.com
                    </a>
                  </span>
                </li>

                {/* WhatsApp numbers */}
                <li className="flex gap-2 items-start">
                  <FaWhatsapp className="text-green-400 mt-1 shrink-0" />
                  <span className="flex flex-col gap-1">
                    <a
                      href="https://wa.me/919350677449"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-300 transition"
                    >
                      +91 93506 77449
                    </a>
                    <a
                      href="https://wa.me/919817067404"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-300 transition"
                    >
                      +91 98170 67404
                    </a>
                  </span>
                </li>

                {/* Instagram */}
                <li className="flex gap-2 items-start">
                  <FaInstagram className="text-pink-400 mt-1 shrink-0" />
                  <a
                    href="https://www.instagram.com/devindustriesharyana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-300 transition"
                  >
                    @devindustriesharyana
                  </a>
                </li>

                {/* Facebook */}
                <li className="flex gap-2 items-start">
                  <FaFacebookF className="text-blue-400 mt-1 shrink-0" />
                  <a
                    href="https://www.facebook.com/share/1CMUfrGZBo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-300 transition"
                  >
                    Dev Industriessectot
                  </a>
                </li>
              </ul>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="text-base font-semibold mb-4 text-blue-300 uppercase tracking-widest text-xs">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm text-white/85">
                {[
                  { name: "Home", path: "/" },
                  { name: "Company", path: "/company" },
                  { name: "Products", path: "/products" },
                  { name: "Vision", path: "/vision" },
                  { name: "Contact", path: "/contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="hover:text-blue-300 transition"
                    >
                      → {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* PRODUCTS */}
            <div>
              <h3 className="text-base font-semibold mb-4 text-blue-300 uppercase tracking-widest text-xs">
                Our Products
              </h3>
              <ul className="space-y-2 text-sm text-white/85">
                {[
                  { title: "O.T. Tables", path: "/products/ot-table" },
                  { title: "O.T. Lights", path: "/products/ot-light" },
                  { title: "Spare Parts", path: "/products/spare-parts" },
                  { title: "Linkan Handset", path: "/products/linkan-handset" },
                ].map((prod) => (
                  <li key={prod.title}>
                    <Link
                      to={prod.path}
                      className="hover:text-blue-300 transition"
                    >
                      → {prod.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="border-white/15 mt-8 mb-4" />

          {/* BOTTOM BAR */}
          <div className="flex flex-col md:flex-row justify-between text-xs text-white/60 gap-2">
            <p>
              © {new Date().getFullYear()} Dev Industries, Bhiwani. All rights reserved.
              Designed by{" "}
              <a
                href="https://noshinfotech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 transition"
              >
                Nosh Infotech
              </a>
            </p>
            <p>
              <Link to="/privacy-policy" className="hover:text-blue-300 transition">
                Privacy Policy
              </Link>
              {" "}/{" "}
              <Link to="/terms-of-service" className="hover:text-blue-300 transition">
                Terms of Service
              </Link>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;