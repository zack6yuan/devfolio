"use client";

import { useMemo } from "react";
import { motion } from "motion/react";

// A word-by-word fade + deblur reveal that fires once when the text enters view
// (IntersectionObserver via whileInView). Unlike ScrollReveal — which scrubs on
// vertical scroll — this works inside horizontally-pinned sections, where the
// vertical position is fixed but panels still enter the viewport horizontally.
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.025 } },
};

const word = {
  hidden: { opacity: 0.12, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function RevealText({ children, className = "" }) {
  const words = useMemo(() => String(children).split(" "), [children]);

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {words.map((w, i) => (
        <span key={i}>
          <motion.span variants={word} className="inline-block">
            {w}
          </motion.span>{" "}
        </span>
      ))}
    </motion.span>
  );
}
