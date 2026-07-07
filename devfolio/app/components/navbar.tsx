"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function NavBar() {
  const navItems = ["Home", "About", "Projects", "Skills", "Contact"];
  const [hidden, setHidden] = useState(false);
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

  return (
    <nav className="w-full z-50 flex justify-between items-center pl-6 pr-10 py-10 bg-black">
      <h1 className="text-white font-bold lg:text-2xl md:text-xl text-2xl tracking-tight">
        {" "}
        <span className="hover:text-orange-500 transition-colors cursor-pointer">
          zack yuan
        </span>
        .
      </h1>

      <ul className="hidden lg:flex gap-6 uppercase">
        {navItems.map((item) => (
          <li key={item}>
            <Link href={`#${item}`} className="text-white">
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <Menu stroke="white" width={20} height={20} className="lg:hidden" />
    </nav>
  );
}
