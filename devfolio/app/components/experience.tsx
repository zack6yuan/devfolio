"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMotionValue, type MotionValue } from "motion/react";
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

function EntryPanel({
  entry,
  progress,
  revealStart,
  revealEnd,
  revealOffset,
}: {
  entry: Entry;
  progress?: MotionValue<number>;
  revealStart: number;
  revealEnd: number;
  revealOffset?: [string, string];
}) {
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
            <ScrollReveal
              progress={progress}
              start={revealStart}
              end={revealEnd}
              offset={revealOffset}
            >
              {entry.blurb}
            </ScrollReveal>
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Experience() {
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const pinProgress = useMotionValue(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

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
          onUpdate: (self) => pinProgress.set(self.progress),
        },
      });

      return () => tween.kill();
    });

    return () => mm.revert();
  }, [pinProgress]);

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
          {entries.map((entry, i) => {
            // Entry i is centered when the track has moved i/(entries.length-1).
            const step = 1 / (entries.length - 1);
            const center = i * step;

            // Web Developer (panel 0) is centered the instant the section pins,
            // so gating its reveal on the horizontal pin means it can't begin
            // until it's already there. Drive it off its own scroll-into-view
            // instead: the full wipe plays as the section approaches and
            // finishes just before the pin locks it to center.
            if (i === 0) {
              return (
                <EntryPanel
                  key={entry.role}
                  entry={entry}
                  progress={undefined}
                  revealStart={0}
                  revealEnd={1}
                  revealOffset={["start 0.95", "end 0.7"]}
                />
              );
            }

            // Later entries slide in from the right, and the blurb sits in the
            // panel's right column — so it only enters the viewport in the last
            // stretch of the pin (~0.53→0.95 for the final panel). Play the wipe
            // across that entrance so it's actually seen, rather than completing
            // off-screen (which reads as "already there" once it slides in).
            const revealStart = center - 0.45 * step;
            const revealEnd = center - 0.15 * step;
            return (
              <EntryPanel
                key={entry.role}
                entry={entry}
                progress={isDesktop ? pinProgress : undefined}
                revealStart={revealStart}
                revealEnd={revealEnd}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
