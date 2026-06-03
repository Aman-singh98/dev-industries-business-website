


import React from "react";
import { FaClock, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaIndustry } from "react-icons/fa";
import contactImg from "/images/contact/contact_image.jpeg";
import { Link } from "react-router-dom";

const ContactSection = () => {
  const items = [
    {
      icon: <FaClock />,
      title: "Working Hours",
      desc: <>Mon – Sat, 9:00 AM – 6:00 PM</>,
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      desc: (
        <span className="flex flex-col gap-1">
          <a href="mailto:devbhiwani1@gmail.com" className="hover:text-blue-300 transition break-all">
            devbhiwani1@gmail.com
          </a>
          <a href="mailto:info@devindustriesbhiwani.com" className="hover:text-blue-300 transition break-all">
            info@devindustriesbhiwani.com
          </a>
        </span>
      ),
    },
    {
      icon: <FaPhoneAlt />,
      title: "Call Anytime",
      desc: (
        <>
          +91 93506 77449 <br />+91 94167 61597 <br /> +91 86073 04334
        </>
      ),
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Office Location",
      desc: "Plot No. 127, Sector 21, Industrial Area, Bhiwani, Haryana – 127021",
    },
  ];

  return (
    <section className="py-10  px-4  bg-gradient-to-b from-white via-slate-50 to-blue-50">
      <div className="max-w-8xl mx-auto">
        <div
          className="relative overflow-hidden rounded text-white shadow-2xl"
          style={{
            backgroundImage: `url(${contactImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f2540]/90 via-[#163554]/85 to-[#0c1e38]/90 z-0" />

          <div className="relative z-10 px-4 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-12 lg:py-14">

            {/* Header */}
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <div className="flex justify-center items-center gap-2 text-blue-300 uppercase tracking-widest text-[10px] sm:text-xs font-semibold mb-2 sm:mb-3">
                <FaIndustry /> Get In Touch
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
                Reach Dev Industries{" "}
                <br className="hidden sm:block" />
                For Medical Equipment Enquiries
              </h2>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="group flex flex-col items-center gap-3 sm:gap-4 hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-blue-400 flex items-center justify-center text-blue-300 text-lg sm:text-xl group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shrink-0">
                    {item.icon}
                  </div>
                  <h4 className="text-sm sm:text-base font-semibold">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-white/75 max-w-[200px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-10 sm:mt-12 flex justify-center">
              <Link
                to="/contact"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 sm:px-8 py-3 rounded text-sm transition-all hover:scale-105 active:scale-95 w-full sm:w-auto text-center"
              >
                Get in Touch
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;