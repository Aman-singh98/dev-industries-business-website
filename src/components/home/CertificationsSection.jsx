// CertificationsSection.jsx
import React from "react";
import { motion } from "framer-motion";

const certs = [
  {
    code: "CE",
    title: "CE Certified",
    body: "Conformité Européenne mark confirming our products meet EU health, safety, and environmental standards.",
    color: "border-blue-200 bg-blue-50",
    textColor: "text-blue-700",
    numColor: "text-blue-100",
  },
  {
    code: "ISO",
    title: "ISO 13485:2016",
    body: "International standard for Quality Management Systems specific to medical device manufacturers.",
    color: "border-green-200 bg-green-50",
    textColor: "text-green-700",
    numColor: "text-green-100",
  },
  {
    code: "FDA",
    title: "FDA Compliant",
    body: "Products manufactured in compliance with US Food & Drug Administration regulations for medical devices.",
    color: "border-yellow-200 bg-yellow-50",
    textColor: "text-yellow-700",
    numColor: "text-yellow-100",
  },
  {
    code: "BIS",
    title: "BIS Approved",
    body: "Bureau of Indian Standards certification ensuring compliance with Indian quality and safety benchmarks.",
    color: "border-purple-200 bg-purple-50",
    textColor: "text-purple-700",
    numColor: "text-purple-100",
  },
];

const CertificationsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-px bg-blue-600" />
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-blue-600">
              Certifications
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-serif text-3xl md:text-4xl font-black text-gray-900 leading-tight max-w-md">
              Built to Global{" "}
              <span className="relative text-blue-600 inline-block">
                Standards
                <span className="absolute left-0 -bottom-1 right-0 h-0.5 bg-cyan-400 rounded block" />
              </span>
            </h2>
            <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
              Every product we manufacture is tested and certified by leading
              international and national regulatory bodies.
            </p>
          </div>
        </motion.div>

        {/* Cert cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative overflow-hidden border p-6 group hover:-translate-y-1 transition-transform duration-300 ${cert.color}`}
            >
              {/* Big background code */}
              <span className={`absolute -bottom-3 -right-2 font-serif font-black text-7xl leading-none select-none ${cert.numColor}`}>
                {cert.code}
              </span>

              {/* Badge */}
              <span className={`inline-block text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 border mb-5 ${cert.color} ${cert.textColor} border-current`}>
                {cert.code}
              </span>

              <h3 className={`font-bold text-base mb-2 ${cert.textColor}`}>
                {cert.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed relative z-10">
                {cert.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 border border-gray-100 bg-gray-50 px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-gray-600 text-center sm:text-left">
            All certifications are regularly audited and renewed. Documentation available on request.
          </p>
          <a
            href="/contact"
            className="shrink-0 text-xs font-semibold text-blue-600 border border-blue-600 px-4 py-2 hover:bg-blue-600 hover:text-white transition-colors duration-200"
          >
            Request Documents →
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default CertificationsSection;