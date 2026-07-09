"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

// Counts a number up when it scrolls into view. Faithful motion-based
// equivalent of ReactBits' Count Up: a motion value springs from `from` to
// `to`, and we imperatively write the rounded value to the DOM node so React
// doesn't re-render on every animation frame.
export default function CountUp({
  to,
  from = 0,
  duration = 2,
  className = "",
  once = true,
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const isInView = useInView(ref, { once });

  useEffect(() => {
    if (isInView) motionValue.set(to);
  }, [isInView, to, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = Math.round(latest).toString();
    });
  }, [springValue]);

  return (
    <span ref={ref} className={className}>
      {from}
    </span>
  );
}
