"use client";

import { useEffect, useRef, useState } from "react";

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
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let frame: number;
    let lastTime = performance.now();

    const tick = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isDragging.current && !isPaused) {
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
  }, [direction, speed, isPaused]);

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

  return (
    <div
      className="w-full overflow-hidden cursor-grab active:cursor-grabbing select-none touch-pan-y"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div ref={trackRef} className="flex gap-3 w-max will-change-transform">
        {items.map((tool, x) => (
          <div
            key={`a-${x}`}
            className="border border-white/20 py-2 px-4 rounded-sm font-sora text-sm shrink-0 whitespace-nowrap"
          >
            {tool}
          </div>
        ))}
        {items.map((tool, x) => (
          <div
            key={`b-${x}`}
            className="border border-white/20 py-2 px-4 rounded-sm font-sora text-sm shrink-0 whitespace-nowrap"
          >
            {tool}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Toolkit() {
  const tools = [
    "React",
    "React Native",
    "NextJS",
    "TypeScript",
    "TailwindCSS",
    "Vercel",
    "AI Workflows",
    "Claude Code",
    "WordPress",
    "Kinsta",
    "ACF",
    "YooTheme",
    "Gravity Forms",
  ];

  const rowOne = tools.slice(0, 7);
  const rowTwo = tools.slice(7);

  return (
    <div className="flex flex-col items-start gap-5 pt-12 sm:pt-15 pb-10 px-5 bg-black">
      <div className="flex items-center gap-3 font-mono w-full">
        <p className="text-orange-500 text-md">03</p>
        <p className="text-gray-500 text-sm font-bold">TOOLKIT</p>
        <hr className="border-t border-white/20 flex-1" />
      </div>

      <h1 className="text-4xl w-[50%] text-left sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl text-white font-sora font-extrabold">
        TECHNICAL ARSENAL
      </h1>

      <hr className="border-t border-white/20 w-full" />
      <MarqueeRow items={rowOne} direction={-1} speed={40} />
      <hr className="border-t border-white/20 w-full" />
      <MarqueeRow items={rowTwo} direction={1} speed={40} />
      <hr className="border-t border-white/20 w-full" />
    </div>
  );
}