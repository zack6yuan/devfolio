"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DecryptedText from "@/components/DecryptedText";
import BorderGlow from "@/components/BorderGlow";
import RevealHeading from "./RevealHeading";

gsap.registerPlugin(ScrollTrigger);

// A project tech tag wrapped in the React Bits BorderGlow effect. Fully rounded
// (borderRadius large) to keep the original pill shape, colored to the site's
// orange accent — matching the Technical Arsenal chips.
function TagPill({ tag }: { tag: string }) {
  return (
    <BorderGlow
      className="shrink-0 cursor-pointer"
      borderRadius={999}
      glowRadius={10}
      glowColor="18 100 50"
      backgroundColor="#0a0a0a"
      coneSpread={25}
      colors={["#FF4D00", "#FFAA00", "#FF6A00"]}
    >
      <span className="px-3 py-1 text-[12px] font-mono whitespace-nowrap">{tag}</span>
    </BorderGlow>
  );
}

type Project = {
  index: string;
  title: string;
  href: string;
  blurb: string;
  tags: string[];
  // NOTE: `type` and `year` are placeholders — confirm/replace with real values.
  type: string;
  year: string;
  linkLabel: string;
};

const projects: Project[] = [
  {
    index: "01",
    title: "Aeroduel",
    href: "https://aeroduel.com",
    blurb:
      "The culmination of my 20 months at Atlas School — a real-time aerial combat battle simulator. 3D-printed RC planes carry H7 cameras that lock onto each other's lights, send hit confirmations to the server over WebSockets, and alert the app instantly.",
    tags: ["WEBSOCKETS", "REAL-TIME", "HARDWARE", "CAPSTONE"],
    type: "Atlas Capstone",
    year: "2025",
    linkLabel: "aeroduel.com",
  },
  {
    index: "02",
    title: "Interparts of Tulsa",
    href: "https://www.github.com/zack6yuan/interparts-of_tulsa",
    blurb:
      "A landing page built for my family's 45+ year auto parts shop on Route 66. Built with Next.js, TypeScript, and Tailwind CSS v4, featuring a custom navy-and-gold brand, star ratings, and Google Maps integration.",
    tags: ["NEXTJS", "TYPESCRIPT", "TAILWINDCSS", "FORMSPREE", "VERCEL"],
    type: "Landing Page",
    year: "2024",
    linkLabel: "GitHub",
  },
];

function SpecRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-6 border-t border-white/10 py-2.5">
      <dt className="text-gray-500">{label}</dt>
      <dd className="text-white text-right">{children}</dd>
    </div>
  );
}

function ProjectPanel({ project }: { project: Project }) {
  return (
    <article className="panel relative w-full md:w-screen shrink-0 md:h-full flex items-center px-5 md:px-16 py-10 md:py-0 bg-black overflow-hidden">
      {/* Oversized ghosted index number as an editorial backdrop (desktop). */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none hidden md:block absolute top-10 right-10 lg:top-14 lg:right-16 font-manrope font-extrabold leading-none text-white/6 text-[14vh] lg:text-[18vh]"
      >
        {project.index}
      </span>

      <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-16 w-full max-w-6xl mx-auto md:items-center">
        {/* Left: meta + title + spec list */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 font-manrope text-xs">
            <span className="text-orange-500">{project.type}</span>
            <span className="text-gray-600">/</span>
            <span className="text-gray-500">{project.year}</span>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-manrope">
              {project.title}
            </h3>
            <a href={project.href} aria-label={`View ${project.title}`} data-magnetic="0.5">
              <ArrowRight
                stroke="white"
                className="w-8 h-8 md:w-11 md:h-11 lg:w-14 lg:h-14 -rotate-45 transition-transform duration-300 ease-out hover:translate-x-2 hover:-translate-y-2 cursor-pointer hover:stroke-orange-500"
              />
            </a>
          </div>

          <dl className="flex flex-col font-manrope text-sm max-w-md">
            <SpecRow label="TYPE">{project.type}</SpecRow>
            <SpecRow label="YEAR">{project.year}</SpecRow>
            <SpecRow label="LINK">
              <a
                href={project.href}
                className="text-orange-500 hover:underline underline-offset-4"
              >
                {project.linkLabel}
              </a>
            </SpecRow>
          </dl>
        </div>

        {/* Right: enlarged blurb + tag pills */}
        <div className="flex flex-col gap-6 font-sora">
          <p className="text-white/70 text-lg md:text-xl lg:text-2xl leading-relaxed">
            {project.blurb}
          </p>
          <div className="flex flex-wrap items-start content-start gap-2">
            {project.tags.map((tag, x) => (
              <TagPill key={x} tag={tag} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const pin = pinRef.current;
    if (!track || !pin) return;

    // Horizontal pinned scroll on desktop only; matchMedia handles enabling,
    // disabling and cleanup across breakpoint changes. On mobile the panels
    // just stack vertically (no pin) via the responsive classes below.
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
    <div id="projects" className="bg-black">
      <div className="flex flex-col items-start gap-5 pt-12 sm:pt-15 px-5">
        <div className="flex items-center gap-3 font-mono w-full">
          <p className="text-orange-500 text-base">02</p>
          <p className="text-gray-500 text-sm font-bold">
            <DecryptedText text="SELECTED WORK" animateOn="inViewHover" />
          </p>
        </div>
        <h2 className="text-3xl w-full text-left sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-white font-sora font-extrabold">
          <RevealHeading text="PROJECTS" />
        </h2>
        <hr className="border-t border-white/20 w-full my-5" />
      </div>

      <div ref={pinRef} className="relative md:h-screen md:overflow-hidden">
        <div ref={trackRef} className="flex flex-col md:flex-row md:h-full">
          {projects.map((project) => (
            <ProjectPanel key={project.index} project={project} />
          ))}

          {/* Outro CTA panel — gives the horizontal travel a satisfying end. */}
          <article className="panel w-full md:w-screen shrink-0 md:h-full flex flex-col justify-center gap-6 px-5 md:px-16 py-16 md:py-0 bg-black">
            <p className="font-mono text-sm text-gray-500">MORE ON THE WAY</p>
            <a
              href="#contact"
              data-magnetic="0.25"
              className="group inline-flex self-start items-center gap-4 text-white font-manrope font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase hover:text-orange-500 transition-colors"
            >
              Let&apos;s build
              <ArrowRight
                size={48}
                className="transition-transform duration-300 ease-out group-hover:translate-x-3"
              />
            </a>
          </article>
        </div>
      </div>
    </div>
  );
}
