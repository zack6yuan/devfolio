import { ArrowUp } from "lucide-react";
import { socials } from "./socials";
import DecryptedText from "@/components/DecryptedText";

export default function Footer() {
  return (
    <footer className="bg-black px-5 pt-12 pb-8 flex flex-col gap-8">
      <div className="flex flex-wrap gap-3 font-mono">
        {socials.map(({ label, href, Icon }) => {
          const external = !href.startsWith("mailto:");
          return (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 rounded-full border border-white/20 py-2 px-4 text-xs text-white hover:border-orange-500 hover:text-orange-500 transition-colors"
            >
              <Icon size={16} />
              <DecryptedText text={label} animateOn="inViewHover" />
            </a>
          );
        })}
      </div>

      <hr className="border-t border-white/20" />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-mono text-xs">
        <p className="text-gray-500">
          <DecryptedText text="© 2026 ZACK YUAN | ALL RIGHTS RESERVED | BUILT WITH 🧡 IN TULSA" animateOn="inViewHover" />
        </p>
        <a
          href="#home"
          className="flex items-center gap-1 text-white hover:text-orange-500 transition-colors"
        >
          BACK TO TOP <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}
