import { ArrowDown } from "lucide-react";
import DotGrid from "@/components/DotGrid";

export default function Hero() {
  return (
    <div id="home" className="relative overflow-hidden text-left bg-black flex flex-col items-start justify-start px-6 pt-24 pb-6 sm:p-10 sm:pt-32 md:pt-40 gap-5 w-full">
      <DotGrid className="pointer-events-none absolute inset-0 h-full w-full animate-[pulse_4s_infinite]" proximity={280} />
      <div className="relative z-10 flex flex-col w-full">
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center font-mono text-xs lg:text-sm xl:text-base py-5 gap-3 sm:gap-0 w-full">
          <div className="flex flex-col gap-1">
            <p>FULL-STACK WEB DEVELOPER</p>
            <p>& UX / UI DESIGNER</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 h-2 w-2 rounded-full animate-pulse"></div>
            <p>NOT CURRENTLY AVAILABLE</p>
          </div>
        </div>

        <h1 className="font-manrope font-extrabold uppercase text-8xl sm:text-9xl md:text-11xl 2xl:text-12xl text-white leading-[0.90] mt-40 sm:mt-56 md:mt-72 xl:mt-80">
          <span className="block xl:inline">Zack</span>
          <span className="block -mt-2 md:-mt-4 xl:inline xl:mt-0">
            <span
              style={{
                WebkitTextFillColor: "#000",
                WebkitTextStroke: "3px #fff",
                paintOrder: "stroke",
              }}
            >
              Yuan
            </span>
            <span className="text-orange-500 text-4xl">ツ</span>
          </span>
        </h1>
      </div>

      <div className="relative z-10 flex flex-col items-start gap-3 text-gray-400 font-bold">
        <p className="font-mono text-xs">SCROLL</p>
        <a href="#about">
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </div>
  );
}