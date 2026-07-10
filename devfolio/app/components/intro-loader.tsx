"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import RotatingText from "@/components/RotatingText";

const BEAT_TWO = "It's nice to meet you!";

export default function IntroLoader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Lock scroll for the duration of the intro.
    window.__lenis?.stop();
    window.scrollTo(0, 0);

    const finish = () => {
      window.__lenis?.start();
      setDone(true);
    };

    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduced(isReduced);
    // Mount the text one render later so the character-rise plays cleanly on the
    // client (and never mismatches the server-rendered blank overlay).
    setReady(true);

    // Time the curtain to lift after the line has risen in and been read.
    const revealTime = isReduced ? 0.25 : 1.0; // characters settle
    const hold = isReduced ? 0.8 : 1.1; // dwell so it can be read
    const liftDelay = revealTime + hold;

    const ctx = gsap.context(() => {
      gsap.to(rootRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: "power4.inOut",
        delay: liftDelay,
        onComplete: finish,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  if (done) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden bg-black [will-change:transform]"
    >
      {ready && (
        <div className="px-6 text-center font-manrope font-extrabold text-white text-4xl sm:text-6xl md:text-7xl leading-tight">
          <RotatingText
            texts={[BEAT_TWO]}
            splitBy="characters"
            auto={false}
            loop={false}
            animatePresenceInitial
            staggerFrom="first"
            staggerDuration={reduced ? 0 : 0.03}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={
              reduced
                ? { duration: 0.01 }
                : { type: "spring", damping: 30, stiffness: 400 }
            }
            mainClassName="justify-center"
          />
        </div>
      )}
    </div>
  );
}
