import {
    Anchor,
    Astroid,
    Code2,
    Globe,
    Database,
    Cpu,
    Zap,
    Package,
    Layers,
    Star,
    Briefcase,
  } from "lucide-react";
  
  export default function Backpack() {
    return (
      <div className="flex flex-col items-center gap-8 pt-15 pb-10 px-2 sm:px-4 bg-[#FCF5E1] min-h-screen">
        <div className="flex flex-col items-center gap-2">
          <p className="text-5xl animate-wiggle">🍾</p>
          <h1 className="text-3xl md:text-4xl text-gray-800 font-bold text-center">
            Send a Bottle Dispatch
          </h1>
          <p className="text-gray-500 text-center">
            Drop your message in the ocean — I'll fish it out!
          </p>
        </div>
  
        <div className="flex items-center gap-5 p-2 w-full justify-center">
          <div className="w-16 md:w-20 h-1 bg-orange-400"></div>
          <Anchor width={20} height={20} className="text-gray-400 shrink-0" />
          <div className="w-16 md:w-20 h-1 bg-orange-400"></div>
        </div>
  
        {/* CARD 1: SKILLS BACKPACK */}
        <div className="relative w-full max-w-[95%] sm:max-w-md md:max-w-2xl min-h-[420px] md:min-h-[280px] h-auto flex mt-2">
          {/* Back card */}
          <div className="absolute inset-0 bg-[#C2B59B] rounded-4xl"></div>
  
          {/* Front card */}
          <div className="relative -top-3 left-0 w-full bg-[#F8F2DC] border-3 border-[#C2B59B] rounded-4xl p-4 sm:p-6 flex flex-col items-center gap-6 shadow-md">
            <div className="inline-flex justify-center gap-3 px-4 py-2 items-center bg-linear-to-r from-yellow-500 to-yellow-600 rounded-full shrink-0">
              <Astroid size={15} fill="white" className="text-white" />
              <p className="text-white uppercase font-bold text-sm tracking-wide">
                Skills Loaded
              </p>
              <Astroid size={15} fill="white" className="text-white" />
            </div>
  
            <div className="grid grid-cols-4 md:grid-cols-8 gap-x-2 gap-y-4 sm:gap-4 md:gap-3 justify-items-center w-full my-auto py-2">
              
              {/* NextJS */}
              <div className="group flex flex-col items-center gap-2 w-full cursor-pointer">
                <div className="w-13 h-13 sm:w-15 sm:h-15 flex flex-col items-center justify-center border-3 border-teal-500 bg-teal-500/20 rounded-xl shadow-sm shadow-teal-500 shrink-0 transition-all duration-200 group-hover:animate-icon-bounce">
                  <Code2 className="text-teal-500" size={22} />
                </div>
                <p className="text-gray-800 text-[10px] sm:text-xs font-bold text-center truncate w-full transition-colors duration-200 group-hover:text-teal-600">
                  NextJS
                </p>
              </div>
  
              {/* TypeScript */}
              <div className="group flex flex-col items-center gap-2 w-full cursor-pointer">
                <div className="w-13 h-13 sm:w-15 sm:h-15 flex items-center justify-center border-3 border-green-500 bg-green-500/20 rounded-xl shadow-sm shadow-green-500 shrink-0 transition-all duration-200 group-hover:animate-icon-bounce">
                  <Globe className="text-green-500" size={22} />
                </div>
                <p className="text-gray-800 text-[10px] sm:text-xs font-bold text-center truncate w-full transition-colors duration-200 group-hover:text-green-600">
                  TypeScript
                </p>
              </div>
  
              {/* TailwindCSS */}
              <div className="group flex flex-col items-center gap-2 w-full cursor-pointer">
                <div className="w-13 h-13 sm:w-15 sm:h-15 flex items-center justify-center border-3 border-[#8B5E3C] bg-[#8B5E3C]/20 rounded-xl shadow-sm shadow-[#8B5E3C] shrink-0 transition-all duration-200 group-hover:animate-icon-bounce">
                  <Database className="text-[#8B5E3C]" size={22} />
                </div>
                <p className="text-gray-800 text-[10px] sm:text-xs font-bold text-center truncate w-full transition-colors duration-200 group-hover:text-[#8B5E3C]">
                  TailwindCSS
                </p>
              </div>
  
              {/* SQL */}
              <div className="group flex flex-col items-center gap-2 w-full cursor-pointer">
                <div className="w-13 h-13 sm:w-15 sm:h-15 flex items-center justify-center border-3 border-orange-500 bg-orange-500/20 rounded-xl shadow-sm shadow-orange-500 shrink-0 transition-all duration-200 group-hover:animate-icon-bounce">
                  <Zap className="text-orange-500" size={22} />
                </div>
                <p className="text-gray-800 text-[10px] sm:text-xs font-bold text-center truncate w-full transition-colors duration-200 group-hover:text-orange-600">
                  SQL
                </p>
              </div>
  
              {/* Kinsta */}
              <div className="group flex flex-col items-center gap-2 w-full cursor-pointer">
                <div className="w-13 h-13 sm:w-15 sm:h-15 flex items-center justify-center border-3 border-teal-500 bg-teal-500/20 rounded-xl shadow-sm shadow-teal-500 shrink-0 transition-all duration-200 group-hover:animate-icon-bounce">
                  <Cpu className="text-teal-500" size={22} />
                </div>
                <p className="text-gray-800 text-[10px] sm:text-xs font-bold text-center truncate w-full transition-colors duration-200 group-hover:text-teal-600">
                  Kinsta
                </p>
              </div>
  
              {/* MCP */}
              <div className="group flex flex-col items-center gap-2 w-full cursor-pointer">
                <div className="w-13 h-13 sm:w-15 sm:h-15 flex items-center justify-center border-3 border-green-500 bg-green-500/20 rounded-xl shadow-sm shadow-green-500 shrink-0 transition-all duration-200 group-hover:animate-icon-bounce">
                  <Package className="text-green-500" size={22} />
                </div>
                <p className="text-gray-800 text-[10px] sm:text-xs font-bold text-center truncate w-full transition-colors duration-200 group-hover:text-green-600">
                  MCP
                </p>
              </div>
  
              {/* WordPress */}
              <div className="group flex flex-col items-center gap-2 w-full cursor-pointer">
                <div className="w-13 h-13 sm:w-15 sm:h-15 flex items-center justify-center border-3 border-[#8B5E3C] bg-[#8B5E3C]/20 rounded-xl shadow-sm shadow-[#8B5E3C] shrink-0 transition-all duration-200 group-hover:animate-icon-bounce">
                  <Layers className="text-[#8B5E3C]" size={22} />
                </div>
                <p className="text-gray-800 text-[10px] sm:text-xs font-bold text-center truncate w-full transition-colors duration-200 group-hover:text-[#8B5E3C]">
                  WordPress
                </p>
              </div>
  
              {/* Claude Code */}
              <div className="group flex flex-col items-center gap-2 w-full cursor-pointer">
                <div className="w-13 h-13 sm:w-15 sm:h-15 flex items-center justify-center border-3 border-orange-500 bg-orange-500/20 rounded-xl shadow-sm shadow-orange-500 shrink-0 transition-all duration-200 group-hover:animate-icon-bounce">
                  <Star className="text-orange-500" size={22} />
                </div>
                <p className="text-gray-800 text-[10px] sm:text-xs font-bold text-center truncate w-full transition-colors duration-200 group-hover:text-orange-600">
                  Claude Code
                </p>
              </div>
  
            </div>
  
            <div className="flex flex-col w-full gap-3 mt-auto">
              <div className="flex font-bold justify-between w-full text-sm">
                <p className="text-black">Overall XP</p>
                <p className="text-teal-500">9842/10000</p>
              </div>
              <div className="w-full bg-gray-300/40 h-5 rounded-2xl border-2 border-teal-400 overflow-hidden">
                <div
                  className="bg-linear-to-r from-teal-400 to-orange-500 h-full"
                  style={{ width: "98.42%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
  
        {/* CARD 2: EXPERIENCE CARD */}
        <div className="relative w-full max-w-[95%] sm:max-w-md md:max-w-2xl h-auto flex mt-4">
          <div className="absolute inset-0 bg-teal-600/20 rounded-4xl"></div>
  
          <div className="relative -top-3 left-0 w-full bg-white border-3 border-teal-500 rounded-4xl p-5 sm:p-6 flex flex-col items-center gap-4 shadow-md">
            <div className="inline-flex justify-center gap-3 px-4 py-1.5 items-center bg-linear-to-r from-teal-500 to-teal-600 rounded-full shrink-0">
              <Briefcase size={14} className="text-white" />
              <p className="text-white uppercase font-bold text-xs tracking-wide">
                Current Mission
              </p>
            </div>
  
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-between border-b-2 border-dashed border-gray-100 pb-4 mt-2">
              <div className="flex items-center gap-4">
                <span className="text-4xl bg-teal-50 p-2 rounded-2xl border-2 border-teal-100 shrink-0">
                  🏝️
                </span>
                <div className="text-center sm:text-left">
                  <h3 className="text-gray-900 font-extrabold text-xl tracking-tight">
                    Web Developer
                  </h3>
                  <p className="text-teal-600 font-semibold text-md">
                    Leadline Marketing
                  </p>
                </div>
              </div>
  
              <div className="flex gap-3">
                <div className="bg-gray-50 border border-gray-200 px-3 py-1 rounded-xl shrink-0">
                  <p className="text-gray-500 text-xs font-semibold">
                    Feb 2026 - Present
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 px-3 py-1 rounded-xl shrink-0">
                  <p className="text-gray-500 text-xs font-semibold">
                    Tulsa, Oklahoma
                  </p>
                </div>
              </div>
            </div>
  
            <div className="w-full text-left bg-gray-50/50 rounded-2xl p-3 border border-gray-100 flex items-start gap-2">
              <span className="text-teal-500 font-bold mt-0.5">✦</span>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Crafting premium user interfaces, managing digital assets, and
                architecting lightning-fast web applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }