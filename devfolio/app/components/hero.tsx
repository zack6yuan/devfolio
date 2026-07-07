import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <div className="text-left bg-black flex flex-col items-center justify-start p-10 pt-32 md:pt-40 gap-5">
      <div className="flex flex-col justify-start -space-y-2 md:-space-y-4">
        <div className="flex justify-between items-start font-mono text-xs py-3">
          <div className="flex flex-col gap-1">
            <p>FULL-STACK WEB DEVELOPER</p>
            <p>& UX / UI DESIGNER</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 h-2 w-2 rounded-full animate-pulse"></div>
            <p>NOT CURRENTLY AVAILABLE — 2026</p>
          </div>
        </div>
        <h1 className="font-black uppercase text-9xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.90]">
          <span className="block">Zack</span>
          <span className="block -mt-2 md:-mt-4">
            <span className="text-transparent [-webkit-text-stroke:3px_white]">
              Yuan
            </span>
            <span className="text-orange-500">.</span>
          </span>
        </h1>
      </div>
      <div className="">
        <p className="font-sora text-lg sm:text-xl md:text-2xl lg:text-3xl w-full md:max-w-xl lg:max-w-2xl mx-auto text-white">
          From code architecture to pixel-perfect UI — I build cohesive, high-performance web & mobile applications, engineered for impact. 
        </p>
      </div>
      <div className="flex flex-col w-full items-start text-gray-400 font-bold">
        <div className="flex flex-col items-center gap-5">
          <p className="font-mono text-xs">SCROLL</p>
          <ArrowDown size={20} className="animate-bounce" />
        </div>
      </div>
    </div>
  );
}
