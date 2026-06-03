import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { end: 10, suffix: "+", label: "Years Experience" },
  { end: 500, suffix: "+", label: "Hospitals Served" },
  { end: 30, suffix: "+", label: "Products" },
  { end: 28, suffix: "", label: "States Delivered" },
];

const useCounter = (end, duration = 1800, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
};

const StatItem = ({ end, suffix, label, index, animate }) => {
  const count = useCounter(end, 1600, animate);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center text-center px-6 py-8"
      style={{ borderRight: index < stats.length - 1 ? "1px solid #e2e8f0" : "none" }}
    >
      <span
        className="font-bold leading-none mb-2"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(40px, 5vw, 60px)",
          color: "#c89b3c",
        }}
      >
        {animate ? count : 0}{suffix}
      </span>
      <span
        className="text-xs uppercase tracking-[0.18em] font-medium"
        style={{ color: "#64748b" }}
      >
        {label}
      </span>
    </motion.div>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-0 bg-gradient-to-b from-white via-slate-50 to-blue-50"
      style={{ borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@400;500&display=swap');`}</style>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StatItem key={s.label} {...s} index={i} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;