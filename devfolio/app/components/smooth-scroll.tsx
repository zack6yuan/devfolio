"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

// Global smooth-scroll backbone. Instantiated in a post-mount effect (not via
// ReactLenis root) so it never changes the server-rendered <html> markup and
// can't trigger a hydration mismatch. Lenis is driven off GSAP's ticker so
// ScrollTrigger animations stay perfectly in sync with the inertia scroll.
export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true, anchors: true });
    // Exposed so the intro loader can lock/unlock scroll during the reveal.
    window.__lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(update);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return null;
}
