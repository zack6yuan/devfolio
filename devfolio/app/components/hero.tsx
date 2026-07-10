"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DotGrid from "@/components/DotGrid";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const scrub = {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      };

      // Name drifts up faster than scroll, easing back and fading as it leaves.
      gsap.to(titleRef.current, {
        yPercent: -20,
        scale: 0.94,
        opacity: 0.1,
        ease: "none",
        scrollTrigger: scrub,
      });

      // DotGrid lags behind for a sense of depth.
      gsap.to(bgRef.current, {
        yPercent: 22,
        ease: "none",
        scrollTrigger: scrub,
      });

      // Scroll cue fades out quickly once you start moving.
      gsap.to(scrollRef.current, {
        opacity: 0,
        y: 24,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "top+=220 top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      id="home"
      className="relative overflow-hidden text-left bg-black flex flex-col items-start justify-start px-6 pt-24 pb-6 sm:p-10 sm:pt-32 md:pt-40 gap-5 w-full"
    >
      <div ref={bgRef} className="pointer-events-none absolute inset-0">
        <DotGrid className="h-full w-full animate-[pulse_4s_infinite]" proximity={280} />
      </div>
      <div className="relative z-10 flex flex-col w-full">
        <div className="flex flex-row justify-between items-start sm:items-center font-mono text-xs lg:text-sm xl:text-base py-5 gap-3 sm:gap-0 w-full">
          <div className="flex flex-col gap-1">
            <p>FULL-STACK WEB DEVELOPER</p>
            <p>& UX / UI DESIGNER</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 h-2 w-2 rounded-full animate-pulse"></div>
            <p>NOT CURRENTLY AVAILABLE</p>
          </div>
        </div>

        <h1
          ref={titleRef}
          className="font-manrope font-extrabold uppercase text-8xl sm:text-9xl md:text-11xl 2xl:text-12xl text-white leading-[0.90] mt-40 sm:mt-56 md:mt-72 xl:mt-80 origin-left"
        >
          <span className="block xl:inline">Zack</span>
          <span className="block -mt-2 md:-mt-4 xl:inline xl:mt-0">
            <span
              style={{
                WebkitTextFillColor: "#000",
                WebkitTextStroke: "4px #FF4D00",
                paintOrder: "stroke",
              }}
            >
              Yuan
            </span>
            <span className="text-orange-500 text-6xl">
            ツ
            </span>
          </span>
        </h1>
      </div>

      <div
        ref={scrollRef}
        className="relative z-10 flex flex-col items-center gap-3 text-gray-400 font-bold"
      >
        <p className="font-mono text-xs">SCROLL</p>
        <a href="#about">
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </div>
  );
}
