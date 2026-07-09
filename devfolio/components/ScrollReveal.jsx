"use client";

import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

// Scroll-linked, word-by-word reveal for body copy — a faithful motion-based
// equivalent of ReactBits' Scroll Reveal. Each word fades from faint→solid and
// deblurs as the paragraph's scroll progress sweeps across it, so the text
// "wipes" in as you scroll (matches the RevealHeading language used on headings).
function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const blur = useTransform(progress, range, [5, 0]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);
  return (
    <motion.span style={{ opacity, filter }} className="inline-block">
      {children}
    </motion.span>
  );
}

export default function ScrollReveal({ children, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });

  const words = useMemo(() => String(children).split(" "), [children]);

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <span key={i}>
            <Word progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>{" "}
          </span>
        );
      })}
    </span>
  );
}
