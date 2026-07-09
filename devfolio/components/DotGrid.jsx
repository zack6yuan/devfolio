"use client";

import { useEffect, useRef } from "react";

// Lightweight interactive dot-grid background (ReactBits Dot Grid vibe). Dots
// rest dim; those near the cursor brighten, grow, and blend toward the accent
// glow color, giving a soft spotlight that tracks the pointer. Canvas-based and
// pointer-events-none so it never blocks the hero content on top of it.
export default function DotGrid({
  gap = 34,
  dotRadius = 1.6,
  baseColor = "255,255,255",
  baseOpacity = 0.08,
  glowColor = "255,77,0",
  proximity = 140,
  className = "",
}) {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const base = baseColor.split(",").map(Number);
    const glow = glowColor.split(",").map(Number);
    const mix = (a, b, t) => Math.round(a + (b - a) * t);

    let raf;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let dots = [];

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      const cols = Math.ceil(width / gap) + 1;
      const rows = Math.ceil(height / gap) + 1;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({ x: c * gap, y: r * gap });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const { x: mx, y: my } = mouse.current;
      for (const d of dots) {
        const dist = Math.hypot(d.x - mx, d.y - my);
        const t = dist < proximity ? 1 - dist / proximity : 0;
        const radius = dotRadius + t * 1.9;
        const opacity = baseOpacity + t * (0.95 - baseOpacity);
        const r = mix(base[0], glow[0], t);
        const g = mix(base[1], glow[1], t);
        const b = mix(base[2], glow[2], t);
        ctx.beginPath();
        ctx.fillStyle = `rgba(${r},${g},${b},${opacity})`;
        ctx.arc(d.x, d.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    build();
    draw();

    const onResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      build();
    };
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => {
      mouse.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, [gap, dotRadius, baseColor, baseOpacity, glowColor, proximity]);

  return <canvas ref={canvasRef} className={className} />;
}
