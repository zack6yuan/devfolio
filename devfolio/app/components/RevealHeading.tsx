"use client";

import { useEffect, useRef, useState } from "react";
import RotatingText from "@/components/RotatingText";

// Plays the RotatingText character-stagger entrance ONCE, when the heading
// scrolls into view. RotatingText normally auto-cycles a list and animates on
// mount, so we gate the mount behind an IntersectionObserver (auto/loop off) to
// turn it into a scroll-triggered reveal.
//
// `accentClass` colors a single glyph via a Tailwind arbitrary variant applied
// to every character span, e.g. "[&:nth-child(7)]:text-orange-500" to keep the
// "+" orange in DESIGN+DEVELOPMENT.
export default function RevealHeading({
  text,
  accentClass = "",
}: {
  text: string;
  accentClass?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className="inline-block">
      {inView ? (
        <RotatingText
          texts={[text]}
          splitBy="characters"
          auto={false}
          loop={false}
          animatePresenceInitial
          staggerFrom="first"
          staggerDuration={0.03}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          splitLevelClassName="flex-wrap"
          elementLevelClassName={accentClass || undefined}
        />
      ) : (
        // Reserve layout space + keep the text in the DOM before it animates.
        <span className="invisible">{text}</span>
      )}
    </span>
  );
}
