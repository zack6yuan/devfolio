"use client";

import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

// Scroll-linked, word-by-word reveal for body copy — a faithful motion-based
// equivalent of ReactBits' Scroll Reveal. Each word fades from faint→solid and
// deblurs as the progress sweeps across it, so the text "wipes" in as you
// scroll (matches the RevealHeading language used on headings).
//
// By default it scrubs on its own vertical scroll (Contact, About). Pass an
// external `progress` MotionValue plus a [start,end] sub-range to instead scrub
// on someone else's progress — used inside the horizontally-pinned sections,
// where vertical position is fixed but the pin still advances as you scroll.
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

/**
 * @param {object} props
 * @param {import("react").ReactNode} props.children
 * @param {string} [props.className]
 * @param {import("motion/react").MotionValue<number>} [props.progress]
 * @param {number} [props.start]
 * @param {number} [props.end]
 * @param {import("motion/react").ScrollOffset} [props.offset] scroll offset used
 *   only for the self-scroll fallback (ignored when `progress` is supplied).
 */
export default function ScrollReveal({
  children,
  className = "",
  progress: externalProgress,
  start = 0,
  end = 1,
  offset = ["start 0.85", "end 0.45"],
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });
  const progress = externalProgress ?? scrollYProgress;

  const words = useMemo(() => String(children).split(" "), [children]);

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => {
        const wStart = start + (end - start) * (i / words.length);
        const wEnd = start + (end - start) * ((i + 1) / words.length);
        return (
          <span key={i}>
            <Word progress={progress} range={[wStart, wEnd]}>
              {word}
            </Word>{" "}
          </span>
        );
      })}
    </span>
  );
}
