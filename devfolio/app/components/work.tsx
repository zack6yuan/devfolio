import { ArrowRight } from "lucide-react";
import DecryptedText from "@/components/DecryptedText";
import BorderGlow from "@/components/BorderGlow";
import ScrollReveal from "@/components/ScrollReveal";
import RevealHeading from "./RevealHeading";

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

export default function Work() {
  const tags1 = ["WEBSOCKETS", "REAL-TIME", "HARDWARE", "CAPSTONE"];
  const tags2 = ["NEXTJS", "TYPESCRIPT", "TAILWINDCSS", "FORMSPREE", "VERCEL"];
  return (
    <div id="projects">
      <div className="flex flex-col items-start gap-5 pt-12 sm:pt-15 px-5 bg-black">
        <div className="flex items-center gap-3 font-mono w-full">
          <p className="text-orange-500 text-base">02</p>
          <p className="text-gray-500 text-sm font-bold"><DecryptedText text="SELECTED WORK" animateOn="inViewHover" /></p>
        </div>
        <h2 className="text-3xl w-full text-left sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-white font-sora font-extrabold">
          <RevealHeading text="PROJECTS" />
        </h2>
        <hr className="border-t border-white/20 w-full my-5" />
        <div className="flex items-center gap-3 w-full justify-between pr-5">
          <div className="flex items-center gap-3">
            <p className="text-gray-500 font-mono">01</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white font-manrope">
              Aeroduel
            </h3>
          </div>
          <a href="https://aeroduel.com">
            <ArrowRight
              stroke="white"
              size={30}
              className="-rotate-45 transition-transform duration-300 ease-out hover:translate-x-2 hover:-translate-y-2 cursor-pointer hover:stroke-orange-500"
            />
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 font-sora w-full max-w-5xl text-sm sm:text-base text-left">
          <p className="text-white/60 flex-1">
            <ScrollReveal>
              The culmination of my 20 months at Atlas School — a real-time aerial
              combat battle simulator. 3D-printed RC planes carry H7 cameras that
              lock onto each other&apos;s lights, send hit confirmations to the server
              over WebSockets, and alert the app instantly.
            </ScrollReveal>
          </p>
          <div className="flex flex-wrap items-start content-start self-start gap-2">
            {tags1.map((tag, x) => (
              <TagPill key={x} tag={tag} />
            ))}
          </div>
        </div>

        <hr className="border-t border-white/20 w-full my-5 mb-10" />
      </div>

      <div className="flex flex-col items-start gap-5 px-5 bg-black">
        <div className="flex items-center gap-3 w-full justify-between pr-5">
          <div className="flex items-center gap-3">
            <p className="text-gray-500 font-mono">02</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white font-manrope">
              Interparts of Tulsa
            </h3>
          </div>
          <a href="https://www.github.com/zack6yuan/interparts-of_tulsa">
            <ArrowRight
              stroke="white"
              size={30}
              className="-rotate-45 transition-transform duration-300 ease-out hover:translate-x-2 hover:-translate-y-2 cursor-pointer hover:stroke-orange-500"
            />
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 font-sora w-full max-w-5xl text-sm sm:text-base text-left">
          <p className="text-white/60 flex-1">
            <ScrollReveal>
              A landing page built for my family&apos;s 45+ year auto parts shop
              on Route 66. Built with Next.js, TypeScript, and Tailwind CSS v4,
              featuring a custom navy-and-gold brand, star ratings, and Google
              Maps integration.
            </ScrollReveal>
          </p>
          <div className="flex flex-wrap items-start content-start self-start gap-2">
            {tags2.map((tag, x) => (
              <TagPill key={x} tag={tag} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}