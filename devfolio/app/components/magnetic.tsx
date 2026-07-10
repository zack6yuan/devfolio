"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

// Global magnetic-element controller. Any element marked with `data-magnetic`
// leans toward the cursor while hovered and springs back on leave. The
// attribute's value (optional) sets the pull strength, e.g. data-magnetic="0.4".
// Mouse-only; respects reduced-motion.
export default function MagneticElements() {
  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduced) return;

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-magnetic]")
    );
    const cleanups: Array<() => void> = [];

    els.forEach((el) => {
      const strength = parseFloat(el.dataset.magnetic || "") || 0.3;
      const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });

      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const relX = e.clientX - (r.left + r.width / 2);
        const relY = e.clientY - (r.top + r.height / 2);
        xTo(relX * strength);
        yTo(relY * strength);
      };
      const onLeave = () => {
        xTo(0);
        yTo(0);
      };

      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
        gsap.set(el, { x: 0, y: 0 });
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
