"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const navItems = ["Home", "About", "Projects", "Skills", "Contact"];
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="w-full z-50 flex justify-between items-center pl-6 pr-10 py-10 bg-black relative">
      <h1 className="font-sora text-white font-bold lg:text-2xl md:text-xl text-2xl tracking-tight">
        {" "}
        <span className="hover:text-orange-500 transition-colors cursor-pointer">
          zack yuan
        </span>
        .
      </h1>

      <ul className="hidden lg:flex gap-6 uppercase">
        {navItems.map((item) => (
          <li key={item}>
            <Link href={`#${item.toLowerCase()}`} className="text-white">
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        className="lg:hidden z-50 cursor-pointer relative w-6 h-5 flex flex-col justify-between active:scale-90 transition-transform"
      >
        <span
          className={`block h-0.5 w-full bg-white rounded-full origin-center transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-y-[9px] rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-white rounded-full transition-all duration-200 ease-in-out ${
            menuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-white rounded-full origin-center transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-y-[-9px] -rotate-45" : ""
          }`}
        />
      </button>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-black transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 uppercase">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-white text-3xl font-bold lowercase hover:text-orange-500 transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
