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
};

const projects: Project[] = [
  {
    index: "01",
    title: "Aeroduel",
    href: "https://aeroduel.com",
    blurb:
      "The culmination of my 20 months at Atlas School — a real-time aerial combat battle simulator. 3D-printed RC planes carry H7 cameras that lock onto each other's lights, send hit confirmations to the server over WebSockets, and alert the app instantly.",
    tags: ["WEBSOCKETS", "REAL-TIME", "HARDWARE", "CAPSTONE"],
  },
  {
    index: "02",
    title: "Interparts of Tulsa",
    href: "https://www.github.com/zack6yuan/interparts-of_tulsa",
    blurb:
      "A landing page built for my family's 45+ year auto parts shop on Route 66. Built with Next.js, TypeScript, and Tailwind CSS v4, featuring a custom navy-and-gold brand, star ratings, and Google Maps integration.",
    tags: ["NEXTJS", "TYPESCRIPT", "TAILWINDCSS", "FORMSPREE", "VERCEL"],
  },
];

function ProjectPanel({ project }: { project: Project }) {
  return (
    <article className="panel w-full md:w-screen shrink-0 md:h-full flex flex-col justify-center gap-6 px-5 md:px-16 py-10 md:py-0 bg-black">
      <div className="flex items-center gap-3 md:gap-6">
        <p className="text-gray-500 font-mono">{project.index}</p>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white font-manrope">
          {project.title}
        </h3>
        <a href={project.href} aria-label={`View ${project.title}`}>
          <ArrowRight
            stroke="white"
            className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 -rotate-45 transition-transform duration-300 ease-out hover:translate-x-2 hover:-translate-y-2 cursor-pointer hover:stroke-orange-500"
          />
        </a>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 font-sora w-full max-w-5xl text-sm sm:text-base text-left">
        <p className="text-white/60 flex-1">{project.blurb}</p>
        <div className="flex flex-wrap items-start content-start self-start gap-2">
          {project.tags.map((tag, x) => (
            <TagPill key={x} tag={tag} />
          ))}
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
              className="group flex items-center gap-4 text-white font-manrope font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase hover:text-orange-500 transition-colors"
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
