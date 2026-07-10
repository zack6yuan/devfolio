"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const BEAT_ONE = "It's nice to meet you!";
const BEAT_TWO = "My name is Zack";

export default function IntroLoader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
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
      const setText = (t: string) => {
        if (textRef.current) textRef.current.textContent = t;
      };
      const tl = gsap.timeline({ onComplete: finish });

      if (reduced) {
        // Gentle reveal: land on the final line, then curtain up. No wipes.
        setText(BEAT_TWO);
        gsap.set(wipeRef.current, { xPercent: -100 });
        tl.fromTo(textRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 })
          .to(rootRef.current, { yPercent: -100, duration: 0.7, ease: "power4.inOut" }, "+=0.8");
        return;
      }

      setText(BEAT_ONE);
      gsap.set(textRef.current, { autoAlpha: 0 });
      gsap.set(wipeRef.current, { xPercent: -100 });

      tl
        // Wipe in from the left, reveal beat one as it exits to the right.
        .to(wipeRef.current, { xPercent: 0, duration: 0.5, ease: "power4.inOut" })
        .set(textRef.current, { autoAlpha: 1 })
        .to(wipeRef.current, { xPercent: 100, duration: 0.6, ease: "power4.inOut" })
        .to({}, { duration: 0.75 })
        // Wipe back in from the right, swap text, reveal beat two to the left
        // (the opposite direction).
        .to(wipeRef.current, { xPercent: 0, duration: 0.5, ease: "power4.inOut" })
        .add(() => setText(BEAT_TWO))
        .to(wipeRef.current, { xPercent: -100, duration: 0.6, ease: "power4.inOut" })
        .to({}, { duration: 0.85 })
        // Curtain up to reveal the site.
        .to(rootRef.current, { yPercent: -100, duration: 0.9, ease: "power4.inOut" });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  if (done) return null;

  return (
    <div ref={rootRef} className="fixed inset-0 z-9999 overflow-hidden bg-black">
      <h1
        ref={textRef}
        className="absolute inset-0 z-10 flex items-center justify-center text-center px-6 font-manrope font-extrabold text-white text-4xl sm:text-6xl md:text-7xl leading-tight"
      />
      <div
        ref={wipeRef}
        aria-hidden="true"
        className="absolute inset-0 z-20 bg-orange-500"
        style={{ transform: "translateX(-100%)" }}
      />
    </div>
  );
}
