// TermsOfService.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiFileText, FiAlertCircle, FiTruck, FiRefreshCw, FiSlash, FiGlobe } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

const sections = [
  {
    icon: <FiFileText />,
    title: "Acceptance of Terms",
    content: [
      "By accessing or using the Dev Industries website, you agree to be bound by these Terms of Service.",
      "If you do not agree with any part of these terms, please do not use our website or services.",
      "We reserve the right to update these terms at any time. Continued use of the site implies acceptance of changes.",
      "These terms apply to all visitors, customers, and others who access or use our services.",
    ],
  },
  {
    icon: <FiTruck />,
    title: "Orders & Delivery",
    content: [
      "All orders are subject to product availability and confirmation of the order price.",
      "Delivery timelines are estimates and may vary based on location, product type, and logistics.",
      "Risk of loss and title for products pass to you upon delivery to the carrier.",
      "We are not liable for delays caused by circumstances beyond our reasonable control.",
    ],
  },
  {
    icon: <FiRefreshCw />,
    title: "Returns & Warranty",
    content: [
      "Products may be returned within 7 days of delivery if found to be defective or damaged.",
      "All our products carry a manufacturer's warranty as specified in the product documentation.",
      "Warranty does not cover damage caused by misuse, unauthorised modification, or normal wear.",
      "To initiate a return or warranty claim, contact our support team with your order details.",
    ],
  },
  {
    icon: <FiAlertCircle />,
    title: "Limitation of Liability",
    content: [
      "Dev Industries shall not be liable for any indirect, incidental, or consequential damages.",
      "Our total liability in any matter shall not exceed the amount paid for the specific product or service.",
      "We make no warranties, expressed or implied, regarding the fitness for a particular purpose.",
      "Medical equipment must be installed and operated by qualified professionals as per guidelines.",
    ],
  },
  {
    icon: <FiSlash />,
    title: "Prohibited Use",
    content: [
      "You may not use our website for any unlawful purpose or in violation of any regulations.",
      "You must not attempt to gain unauthorised access to any part of our website or systems.",
      "Reproducing, duplicating, or selling any part of our content without permission is prohibited.",
      "We reserve the right to terminate access for any user who violates these terms.",
    ],
  },
  {
    icon: <FiGlobe />,
    title: "Governing Law",
    content: [
      "These Terms of Service are governed by the laws of India, specifically the state of Haryana.",
      "Any disputes arising from these terms shall be subject to the exclusive jurisdiction of courts in Ambala, Haryana.",
      "If any provision of these terms is found to be unenforceable, the remaining provisions shall remain in full effect.",
      "These terms constitute the entire agreement between you and Dev Industries regarding use of our services.",
    ],
  },
];

const TermsOfService = () => {
  return (
    <section className="min-h-screen bg-white">

      {/* Hero */}
      <div className="bg-gray-900 py-16 md:py-24 relative overflow-hidden">
        
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-white opacity-10" />
        <div className="absolute -bottom-20 -left-10 w-80 h-80 rounded-full border border-white opacity-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-px bg-gray-500" />
              <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-gray-400">
                Legal
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-black text-white leading-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
              Please read these terms carefully before using Dev Industries'
              website or purchasing our products and services.
            </p>
            <p className="text-gray-500 text-xs mt-4">
              Last updated: May 2026
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Intro box */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-l-4 border-gray-900 bg-gray-50 px-6 py-5 mb-12"
        >
          <p className="text-sm text-gray-700 leading-relaxed">
            These Terms of Service govern your use of the Dev Industries website and
            all associated services. Dev Industries is a manufacturer and supplier of
            medical equipment headquartered in{" "}
            <span className="text-gray-900 font-medium">Ambala, Haryana, India</span>.
            These terms form a legally binding agreement between you and Dev Industries.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="flex flex-col gap-10">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 text-base shrink-0">
                  {section.icon}
                </div>
                <h2 className="font-serif text-xl font-black text-gray-900">
                  {section.title}
                </h2>
              </div>

              <div className="ml-12 border-l border-gray-100 pl-6 flex flex-col gap-3">
                {section.content.map((point, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                    <p className="text-sm text-gray-600 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact box */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 bg-gray-900 p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-bold text-white text-base mb-1">
              Questions about these terms?
            </h3>
            <p className="text-sm text-gray-400">
              Our legal team is happy to clarify anything in this document.
            </p>
          </div>
          <a
            href="mailto:info@devindustries.in"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 text-sm font-bold hover:bg-gray-100 transition-colors duration-200"
          >
            <FiMail />
            Email Us
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default TermsOfService;