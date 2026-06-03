// PrivacyPolicy.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiShield, FiEye, FiLock, FiMail, FiDatabase, FiUserCheck } from "react-icons/fi";

const sections = [
  {
    icon: <FiDatabase />,
    title: "Information We Collect",
    content: [
      "Personal identification information (name, email address, phone number) when you contact us or request a quote.",
      "Business information such as hospital name, designation, and location for order processing.",
      "Usage data including IP address, browser type, and pages visited to improve our website experience.",
      "Communication records when you contact our support team via email, phone, or contact form.",
    ],
  },
  {
    icon: <FiEye />,
    title: "How We Use Your Information",
    content: [
      "To respond to your enquiries, process orders, and provide after-sales support.",
      "To send product catalogues, updates, and promotional material — only with your consent.",
      "To improve our website, products, and customer service based on feedback and usage patterns.",
      "To comply with legal obligations and protect our legitimate business interests.",
    ],
  },
  {
    icon: <FiLock />,
    title: "Data Security",
    content: [
      "We implement industry-standard SSL encryption to protect data transmitted through our website.",
      "Access to personal data is restricted to authorised personnel only on a need-to-know basis.",
      "We do not sell, trade, or rent your personal information to third parties under any circumstances.",
      "Our systems are regularly reviewed for vulnerabilities and updated to maintain security.",
    ],
  },
  {
    icon: <FiUserCheck />,
    title: "Your Rights",
    content: [
      "You have the right to access, correct, or delete any personal information we hold about you.",
      "You may opt out of marketing communications at any time by contacting us or using unsubscribe links.",
      "You can request a copy of your data or ask us to restrict its processing at any time.",
      "Complaints may be directed to us directly or to the relevant data protection authority.",
    ],
  },
  {
    icon: <FiMail />,
    title: "Cookies",
    content: [
      "Our website uses cookies to enhance browsing experience and analyse site traffic.",
      "Essential cookies are required for the website to function and cannot be disabled.",
      "Analytics cookies help us understand how visitors interact with our site — these are optional.",
      "You can control cookie settings through your browser preferences at any time.",
    ],
  },
  {
    icon: <FiShield />,
    title: "Third-Party Links",
    content: [
      "Our website may contain links to third-party websites for reference or convenience.",
      "We are not responsible for the privacy practices or content of external websites.",
      "We encourage you to review the privacy policy of any third-party site you visit.",
      "Embedding of Google Maps on our site is subject to Google's own privacy policy.",
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-white">

      {/* Hero */}
      <div className="bg-blue-600 py-16 md:py-24 relative overflow-hidden">
      
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-white opacity-10" />
        <div className="absolute -bottom-20 -left-10 w-80 h-80 rounded-full border border-white opacity-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-px bg-blue-300" />
              <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-blue-200">
                Legal
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-black text-white leading-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-blue-100 text-sm md:text-base leading-relaxed max-w-xl">
              Your privacy matters to us. This policy explains how Dev Industries
              collects, uses, and protects your personal information.
            </p>
            <p className="text-blue-300 text-xs mt-4">
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
          className="border-l-4 border-blue-600 bg-blue-50 px-6 py-5 mb-12"
        >
          <p className="text-sm text-gray-700 leading-relaxed">
            Dev Industries ("we", "us", or "our") is committed to protecting your personal
            information. This Privacy Policy applies to our website{" "}
            <span className="text-blue-600 font-medium">www.devindustries.in</span> and
            all services we provide. By using our website, you agree to the terms of this policy.
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
              className="group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 text-base shrink-0">
                  {section.icon}
                </div>
                <h2 className="font-serif text-xl font-black text-gray-900">
                  {section.title}
                </h2>
              </div>

              <div className="ml-12 border-l border-gray-100 pl-6 flex flex-col gap-3">
                {section.content.map((point, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
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
          className="mt-14 bg-gray-50 border border-gray-200 p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-bold text-gray-900 text-base mb-1">
              Questions about this policy?
            </h3>
            <p className="text-sm text-gray-500">
              Contact our team and we'll respond within 2 business days.
            </p>
          </div>
          <a
            href="mailto:info@devindustries.in"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-colors duration-200"
          >
            <FiMail />
            Email Us
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default PrivacyPolicy;