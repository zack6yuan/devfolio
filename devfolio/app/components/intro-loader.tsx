"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);


const BEAT_TWO = "It's nice to meet you!";

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
      const tl = gsap.timeline({ onComplete: finish });
    
      if (reduced) {
        // For reduced motion, just skip the typing and fade it in
        if (textRef.current) textRef.current.textContent = BEAT_TWO;
        tl.fromTo(textRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 })
          .to(rootRef.current, { yPercent: -100, duration: 0.7, ease: "power4.inOut" }, "+=0.8");
        return;
      }
    
      tl
        // 1. Brief pause before typing starts (optional)
        .to({}, { duration: 0.2 })
        
        // 2. Type out the text letter-by-letter
        .to(textRef.current, {
          duration: 1.5,          // How long the typing takes (seconds)
          text: BEAT_TWO,         // The string it will type out
          ease: "none",           // "none" makes the typing speed consistent
        })
        
        // 3. Pause so the user can read the full sentence
        .to({}, { duration: 1.0 })
        
        // 4. Curtain up to reveal the site
        .to(rootRef.current, { yPercent: -100, duration: 0.8, ease: "power4.inOut" });
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
