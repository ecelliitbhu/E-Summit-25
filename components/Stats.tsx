import React, { FunctionComponent, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface Stat {
  value: string;
  label: string;
}

const statsData: Stat[] = [
  { value: "250+", label: "Startups" },
  { value: "8000+", label: "Attendee" },
  { value: "20+", label: "Guest Speakers" },
  { value: "15+", label: "Investors" },
  { value: "10+", label: "Events" },
  { value: "50+", label: "Partners" },
];

const StatItem: FunctionComponent<Stat> = ({ value, label }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const controls = animate(count, numericValue, {
            duration: 2,
            ease: "easeOut",
          });
          return controls.stop;
        }
      },
      {
        root: null,
        rootMargin: "1px",
        threshold: 0.1,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="text-center mb-4 lg:mb-0 flex-col justify-center items-center"
    >
      <div className="flex justify-center items-center">
        <motion.h2 className=" text-3xl sm:text-5xl font-bold text-primary-foreground">
          {rounded}
        </motion.h2>
        <span className="text-4xl font-semibold">+</span>
      </div>
      <p className="text-primary capitalize">{label.toUpperCase()}</p>
    </div>
  );
};
const Stats: FunctionComponent = () => {
  return (
    <section className=" px-20 py-10 overflow-hidden">
      <h1 className="text-3xl md:text-4xl text-primary-foreground font-bold text-center mb-6">
        Key Event Statistics
      </h1>
      <div className="flex-col sm:flex md:flex-row flex-wrap justify-around items-center w-full">
        {statsData.map((stat, index) => (
          <StatItem key={index} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
