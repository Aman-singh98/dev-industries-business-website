import React from "react";

const MapSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50 to-blue-50">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-8 h-px bg-blue-600" />
          <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-blue-600">
            Our Location
          </span>
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-black text-gray-900 leading-tight">
          Visit Our{" "}
          <span className="relative text-blue-600 inline-block">
            Factory
            <span className="absolute left-0 -bottom-1 right-0 h-0.5 bg-cyan-400 rounded block" />
          </span>
        </h2>
      </div>

      {/* Full width map */}
      <div className="w-full h-[500px] md:h-[600px]">
        <iframe
          title="Dev Industries Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109.5!2d76.1561583!3d28.7989778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391285b74dad5e47%3A0x82858e2370e0f94b!2sDev%20Industries!5e0!3m2!1sen!2sin!4v1"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

    </section>
  );
};

export default MapSection;