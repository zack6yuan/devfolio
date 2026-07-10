"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const NAME = "ZACK YUAN.";

export default function IntroLoader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Lock scroll for the duration of the intro.
    window.__lenis?.stop();
    window.scrollTo(0, 0);

    const finish = () => {
      window.__lenis?.start();
      setDone(true);
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const counter = { v: 0 };
      const setCounter = () => {
        if (counterRef.current)
          counterRef.current.textContent = String(
            Math.round(counter.v)
          ).padStart(3, "0");
      };
      const tl = gsap.timeline({ onComplete: finish });

      if (reduced) {
        // Gentle reveal for reduced-motion: no letter bounce, quick counter,
        // then a soft fade + curtain wipe. Still plays (doesn't skip).
        tl
          .to(counter, { v: 100, duration: 0.6, ease: "power2.out", onUpdate: setCounter }, 0)
          .to(".intro-bar", { scaleX: 1, duration: 0.6, ease: "power2.inOut" }, 0)
          .to([".intro-name", ".intro-meta"], { opacity: 0, duration: 0.3 }, ">-0.05")
          .to(rootRef.current, { yPercent: -100, duration: 0.7, ease: "power4.inOut" }, "<");
        return;
      }

      tl
        // Letters assemble into place.
        .from(".intro-char", {
          yPercent: 120,
          duration: 0.8,
          ease: "power4.out",
          stagger: 0.045,
        })
        // Loading counter + progress bar run alongside.
        .to(counter, { v: 100, duration: 1.3, ease: "power2.out", onUpdate: setCounter }, 0)
        .to(".intro-bar", { scaleX: 1, duration: 1.3, ease: "power2.inOut" }, 0)
        // Name exits upward, then the panel curtain-wipes up to reveal the site.
        .to(".intro-name", {
          yPercent: -140,
          opacity: 0,
          duration: 0.5,
          ease: "power3.in",
        }, "+=0.25")
        .to(".intro-meta", { opacity: 0, duration: 0.3 }, "<")
        .to(rootRef.current, {
          yPercent: -100,
          duration: 0.9,
          ease: "power4.inOut",
        }, "-=0.15");
    }, rootRef);

    return () => ctx.revert();
  }, []);

  if (done) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
    >
      <h1 className="intro-name flex overflow-hidden font-manrope font-extrabold uppercase text-white text-5xl sm:text-7xl md:text-8xl leading-none">
        {NAME.split("").map((ch, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <span
              className={`intro-char inline-block ${
                ch === "." ? "text-orange-500" : ""
              }`}
            >
              {ch === " " ? " " : ch}
            </span>
          </span>
        ))}
      </h1>

      <div className="intro-meta absolute bottom-10 left-0 right-0 px-6 sm:px-10 flex items-center justify-between font-mono text-xs text-gray-500">
        <span>LOADING</span>
        <span ref={counterRef}>000</span>
      </div>

      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-white/10">
        <div className="intro-bar h-full w-full origin-left scale-x-0 bg-orange-500" />
      </div>
    </div>
  );
}
