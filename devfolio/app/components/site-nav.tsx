"use client";

import { useEffect, useState } from "react";
import PillNav from "@/components/PillNav";

const items = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function SiteNav() {
  const [activeHref, setActiveHref] = useState<string | undefined>(undefined);

  useEffect(() => {
    const ids = items.map((item) => item.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    // A zero-height root band pinned to the viewport midline: the active
    // section is whichever one the middle of the screen is currently over.
    const intersecting = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) intersecting.add(entry.target.id);
          else intersecting.delete(entry.target.id);
        }
        const active = ids.filter((id) => intersecting.has(id));
        setActiveHref(active.length ? `#${active[active.length - 1]}` : undefined);
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <PillNav
      logo="/logo.svg"
      logoAlt="Zack Yuan"
      logoHref="/"
      items={items}
      activeHref={activeHref}
      baseColor="#FF4D00"
      pillColor="#000000"
      pillTextColor="#FFFFFF"
      hoveredPillTextColor="#ffffff"
    />
  );
}
