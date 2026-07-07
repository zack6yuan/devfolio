import { ArrowRight } from "lucide-react";

export default function Work() {
  const tags1 = ["WEBSOCKETS", "REAL-TIME", "HARDWARE", "CAPSTONE"];
  const tags2 = ["NEXTJS", "TYPESCRIPT", "TAILWINDCSS", "FORMSPREE", "VERCEL"];
  return (
    <div>
      <div className="flex flex-col items-start gap-5 pt-12 sm:pt-15 px-5 bg-black">
        <div className="flex items-center gap-3 font-mono w-full">
          <p className="text-orange-500 text-md">02</p>
          <p className="text-gray-500 text-sm font-bold">SELECTED WORK</p>
        </div>
        <hr className="border-t border-white/20 w-full my-5" />
        <div className="flex items-center gap-3 w-full justify-between pr-5">
          <div className="flex items-center gap-3">
            <p className="text-gray-500 font-mono">01</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl text-white font-sora font-extrabold text-center">
              AERODUEL
            </h1>
          </div>
          <a href="https:/www.github.com/aeroduel">
            <ArrowRight
              stroke="white"
              size={30}
              className="-rotate-45 transition-transform duration-300 ease-out hover:translate-x-2 hover:-translate-y-2 cursor-pointer hover:stroke-orange-500"
            />
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 font-sora w-full max-w-5xl text-sm sm:text-md sm:text-base text-left px-8">
          <p className="text-white/60 flex-1">
            The culmination of my 20 months at Atlas School — a real-time aerial
            combat battle simulator. 3D-printed RC planes carry H7 cameras that
            lock onto each other's lights, send hit confirmations to the server
            over WebSockets, and alert the app instantly
          </p>
          <div className="flex gap-2">
            {tags1.map((tag, x) => (
              <div
                className="rounded-full py-1 px-3 border border-gray-500/60 text-[12px] font-mono whitespace-nowrap"
                key={x}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        <hr className="border-t border-white/20 w-full my-5 mb-10" />
      </div>

      <div className="flex flex-col items-start gap-5 px-5 bg-black">
        <div className="flex items-center gap-3 w-full justify-between pr-5">
          <div className="flex items-center gap-3">
            <p className="text-gray-500 font-mono">02</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl text-white font-sora font-extrabold text-center">
              INTERPARTS
            </h1>
          </div>
          <a href="https://www.github.com/zack6yuan/interparts-of_tulsa">
            <ArrowRight
              stroke="white"
              size={30}
              className="-rotate-45 transition-transform duration-300 ease-out hover:translate-x-2 hover:-translate-y-2 cursor-pointer hover:stroke-orange-500"
            />
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 font-sora w-full max-w-5xl text-sm sm:text-md sm:text-base text-left px-8">
          <p className="text-white/60 flex-1">
            A landing page built for my family's 45+ year auto parts shop
            on Route 66. Built with Next.js, TypeScript, and Tailwind CSS v4,
            featuring a custom navy-and-gold brand, star ratings, and Google
            Maps integration.
          </p>
          <div className="flex flex-wrap gap-2">
            {tags2.map((tag, x) => (
              <div
                className="rounded-full py-1 px-3 border border-gray-500/60 text-[12px] font-mono whitespace-nowrap"
                key={x}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}