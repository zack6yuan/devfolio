"use client";

import { useEffect, useRef } from "react";
import DecryptedText from "@/components/DecryptedText";
import BorderGlow from "@/components/BorderGlow";
import RevealHeading from "./RevealHeading";
import { tools } from "@/lib/tools";

// A single Technical Arsenal pill wrapped in the React Bits BorderGlow effect.
// Props are tuned down from the component defaults (large card) to suit a small
// marquee chip, and colored to the site's orange accent.
function ToolPill({ tool }: { tool: string }) {
  return (
    <BorderGlow
      className="shrink-0 cursor-pointer"
      borderRadius={8}
      glowRadius={12}
      glowColor="18 100 50"
      backgroundColor="#0a0a0a"
      coneSpread={25}
      colors={["#FF4D00", "#FFAA00", "#FF6A00"]}
    >
      <span className="px-4 py-2 font-sora text-sm whitespace-nowrap">{tool}</span>
    </BorderGlow>
  );
}

function MarqueeRow({
  items,
  direction = 1,
  speed = 40,
}: {
  items: string[];
  direction?: 1 | -1;
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offset = useRef(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  // Paused-on-hover lives in a ref so toggling it never tears down and rebuilds
  // the rAF loop (which a state dep would). The loop reads it live each frame.
  const isPausedRef = useRef(false);

  useEffect(() => {
    let frame: number;
    let lastTime = performance.now();

    const tick = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isDragging.current && !isPausedRef.current) {
        offset.current += (direction * speed * delta) / 1000;
      }

      const track = trackRef.current;
      if (track) {
        const halfWidth = track.scrollWidth / 2;
        if (halfWidth > 0) {
          if (offset.current <= -halfWidth) offset.current += halfWidth;
          if (offset.current > 0) offset.current -= halfWidth;
          track.style.transform = `translateX(${offset.current}px)`;
        }
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [direction, speed]);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartOffset.current = offset.current;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    offset.current = dragStartOffset.current + (e.clientX - dragStartX.current);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  // Repeat the set enough times that one half of the track always exceeds the
  // viewport (incl. ultra-wide/4K), so the seamless loop never reveals a gap.
  const loop = Array.from({ length: 6 }).flatMap(() => items);

  return (
    <div
      className="w-full overflow-hidden cursor-grab active:cursor-grabbing select-none touch-pan-y"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onMouseEnter={() => {
        isPausedRef.current = true;
      }}
      onMouseLeave={() => {
        isPausedRef.current = false;
      }}
    >
      <div ref={trackRef} className="flex gap-3 w-max will-change-transform">
        {loop.map((tool, x) => (
          <ToolPill key={`a-${x}`} tool={tool} />
        ))}
        {loop.map((tool, x) => (
          <ToolPill key={`b-${x}`} tool={tool} />
        ))}
      </div>
    </div>
  );
}

export default function Toolkit() {
  const rowOne = tools.slice(0, 7);
  const rowTwo = tools.slice(7);

  return (
    <div id="skills" className="flex flex-col items-start gap-5 pt-12 sm:pt-15 pb-10 px-5 bg-black">
      <div className="flex items-center gap-3 font-mono w-full">
        <p className="text-orange-500 text-base">03</p>
        <p className="text-gray-500 text-sm font-bold"><DecryptedText text="TOOLKIT" animateOn="inViewHover" /></p>
        <hr className="border-t border-white/20 flex-1" />
      </div>

      <h2 className="text-3xl w-full text-left sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-white font-sora font-extrabold">
        <RevealHeading text="TECHNICAL ARSENAL" />
      </h2>

      <hr className="border-t border-white/20 w-full" />
      <MarqueeRow items={rowOne} direction={-1} speed={40} />
      <hr className="border-t border-white/20 w-full" />
      <MarqueeRow items={rowTwo} direction={1} speed={40} />
      <hr className="border-t border-white/20 w-full" />
    </div>
  );
}