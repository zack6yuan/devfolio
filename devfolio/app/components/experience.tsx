"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DecryptedText from "@/components/DecryptedText";
import ScrollReveal from "@/components/ScrollReveal";
import RevealHeading from "./RevealHeading";

gsap.registerPlugin(ScrollTrigger);

type Entry = {
  meta: string;
  role: string;
  org: string;
  blurb: string;
  location: string;
};

const entries: Entry[] = [
  {
    meta: "PRESENT",
    role: "Web Developer",
    org: "Leadline Performance Marketing",
    blurb:
      "Building and shipping full-stack web experiences — turning marketing strategy into fast, reliable, design-minded product. If it lives on the web and drives a campaign, I'm the one building it.",
    location: "TULSA, OK",
  },
  {
    meta: "EDUCATION",
    role: "Computer Science & Full-Stack Web Development",
    org: "Atlas School",
    blurb:
      "A peer-and project based software engineering program took me from the basics of C programming to the complexities of full-stack web development covering Front-End, Back-End, and DevOps.",
    location: "TULSA, OK",
  },
];

function SpecRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-6 border-t border-white/10 py-2.5">
      <dt className="text-gray-500">{label}</dt>
      <dd className="text-white text-right">{children}</dd>
    </div>
  );
}

function EntryPanel({ entry }: { entry: Entry }) {
  return (
    <article className="w-full md:w-screen shrink-0 md:h-full flex items-center px-5 md:px-16 py-10 md:py-0 bg-black overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 w-full max-w-6xl mx-auto md:items-center">
        {/* Left: meta + title + spec list */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 font-manrope text-xs">
            <span className="text-orange-500">{entry.meta}</span>
            <span className="text-gray-600">/</span>
            <span className="text-gray-500">{entry.location}</span>
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl text-white font-manrope">
            {entry.role}
          </h3>

          <dl className="flex flex-col font-manrope text-sm max-w-md">
            <SpecRow label="ORG">{entry.org}</SpecRow>
            <SpecRow label="LOCATION">{entry.location}</SpecRow>
          </dl>
        </div>

        {/* Right: enlarged blurb */}
        <div className="flex flex-col gap-6 font-sora">
          <p className="text-white/70 text-lg md:text-xl lg:text-2xl leading-relaxed">
            <ScrollReveal>{entry.blurb}</ScrollReveal>
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Experience() {
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const pin = pinRef.current;
    if (!track || !pin) return;

    // Horizontal pinned scroll on desktop only. Starts on the first entry
    // (Web Developer) and slides left as you scroll, so later entries enter
    // from the right.
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const distance = () => track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: pin,
          start: "top top",
          end: () => "+=" + distance(),
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => tween.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <div id="experience" className="bg-black">
      <div className="flex flex-col items-start gap-5 pt-12 sm:pt-15 px-5">
        <div className="flex items-center gap-3 font-mono w-full">
          <p className="text-orange-500 text-base">04</p>
          <p className="text-gray-500 text-sm font-bold">
            <DecryptedText text="EXPERIENCE & EDUCATION" animateOn="inViewHover" />
          </p>
          <hr className="border-t border-white/20 flex-1" />
        </div>

        <h2 className="text-3xl w-full text-left sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-white font-sora font-extrabold wrap-break-word tracking-tighter sm:tracking-normal">
          <RevealHeading text="EXPERIENCE+EDUCATION" accentClass="[&:nth-child(11)]:text-orange-500" />
        </h2>
      </div>

      <div ref={pinRef} className="relative md:h-screen md:overflow-hidden mt-5">
        <div ref={trackRef} className="flex flex-col md:flex-row md:h-full">
          {entries.map((entry) => (
            <EntryPanel key={entry.role} entry={entry} />
          ))}
        </div>
      </div>
    </div>
  );
}
