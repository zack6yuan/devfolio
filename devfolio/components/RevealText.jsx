"use client";

import { useMemo } from "react";
import { motion } from "motion/react";

// A word-by-word fade + deblur reveal that fires when the text enters view
// (IntersectionObserver via whileInView). ScrollReveal scrubs on vertical
// scroll, which freezes inside the horizontally-pinned sections — this reveals
// per-panel as each one slides in, and still wipes in on the mobile stack.
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const word = {
  hidden: { opacity: 0.12, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
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
      viewport={{ once: true, amount: 0.25 }}
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
