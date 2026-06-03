// MarqueeStrip.jsx
import React from "react";

const MarqueeStrip = () => {
  const items = Array(8).fill("GET IN TOUCH");

  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 20s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full bg-blue-600 py-5 overflow-hidden relative">

        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-blue-600 to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-blue-600 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max marquee-track items-center">
          {[...items, ...items].map((text, i) => (
            <div key={i} className="flex items-center gap-6 px-10 whitespace-nowrap">
              <span className="text-white font-serif font-black text-3xl md:text-4xl tracking-widest uppercase">
                {text}
              </span>
              <span className="text-blue-300 text-2xl">✦</span>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default MarqueeStrip;