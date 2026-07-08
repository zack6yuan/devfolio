import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <div className="text-left bg-black flex flex-col items-start justify-start p-6 sm:p-10 sm:pt-32 md:pt-40 gap-5 w-full">
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-start sm:items-center font-mono text-xs py-5 gap-2 sm:gap-0 w-full">
          <div className="flex flex-col gap-1 text-xs">
            <p>FULL-STACK WEB DEVELOPER</p>
            <p>& UX / UI DESIGNER</p>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="bg-orange-500 h-2 w-2 rounded-full animate-pulse"></div>
            <p>NOT CURRENTLY AVAILABLE</p>
          </div>
        </div>

        <h1 className="font-black uppercase text-8xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-[0.90] mt-5">
          <span className="block">Zack</span>
          <span className="block -mt-2 md:-mt-4">
            <span className="text-transparent [-webkit-text-stroke:3px_white]">
              Yuan
            </span>
            <span className="text-orange-500">.</span>
          </span>
        </h1>
      </div>

      <div className="w-full">
        <p className="font-sora text-base sm:text-xl md:text-2xl lg:text-3xl w-full md:max-w-xl lg:max-w-2xl text-white text-left">
          From code architecture to pixel-perfect UI — I build cohesive, high-performance web & mobile applications, engineered for impact.
        </p>
      </div>

      <div className="flex flex-col items-start gap-3 text-gray-400 font-bold">
        <p className="font-mono text-xs">SCROLL</p>
        <a href="#about">
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </div>
  );
}