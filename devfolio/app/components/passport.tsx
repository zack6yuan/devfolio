import { Anchor, Globe } from "lucide-react";
import Image from "next/image";

export default function Passport() {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-4xl">The Explorer&apos;s Passport</h1>
      <p>Identity verified by the Dev Islands Authority</p>

      <div className="flex items-center gap-5 p-5">
        <div className="w-20 h-1 bg-orange-400"></div>
        <Anchor width={20} height={20} className="text-gray-400" />
        <div className="w-20 h-1 bg-orange-400"></div>
      </div>

      <div className="relative w-100 h-100">
        {/* Back card */}
        <div className="absolute inset-0 bg-[#0a5661] rounded-4xl"></div>

        {/* Front card */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 h-100 w-100 bg-[#10889A] border-3 border-[#109BAC] rounded-4xl p-6">
          <div className="flex justify-between">
            <div>
              <p className="text-lg text-orange-400 font-extrabold">
                DEV ISLANDS
              </p>
              <p className="text-sm text-white">Explorer&apos;s Passport</p>
            </div>
            <div className="flex justify-center items-center bg-[#25BED2] w-12 h-12 rounded-full">
              <Globe className="text-white" />
            </div>
          </div>
          <hr className="border-white/70 mt-5 p-3" />
          <div className="flex justify-start gap-5">
            <div className="relative w-20 h-20 border-4 border-orange-400 bg-linear-to-b from-orange-800 to-orange-400 rounded-2xl overflow-hidden">
              <Image
                src="/zack-img.png"
                alt="zack-image"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-bold text-2xl">Zack Yuan</p>
              <p className="text-white/70 text-md">Full-Stack Explorer</p>
              <p className="text-orange-400 text-md">Passport #DEV-2642</p>
            </div>
          </div>
          <div className="mt-5 text-sm font-bold justify-start gap-2 grid grid-cols-2">
            <div className="">
              <p className=" text-white/70">Specialty</p>
              <p className="text-white">JS Frameworks</p>
            </div>
            <div className="">
              <p className=" text-white/70">XP Level</p>
              <p className="text-white">99/100</p>
            </div>
            <div className="">
              <p className=" text-white/70">Base Camp</p>
              <p className="text-white">Tulsa, Oklahoma</p>
            </div>
            <div className="">
              <p className=" text-white/70">Active Since</p>
              <p className="text-white">2023</p>
            </div>
            <div className="text-[#25BED2] bg-gray-800/50 rounded-2xl p-3 col-span-2">
              <p>
                PDEVYUAN&lt;&lt;ZACK&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;
              </p>
              <p>
                DEV2642&lt;&lt;2026&lt;&lt;8824&lt;99&lt;&lt;&lt;&lt;&lt;&lt;
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-white mx-15 text-center mb-10 gap-6">
        <h2 className="text-2xl font-bold">About the Explorer</h2>
        <div className="text-left flex flex-col gap-4">
          <p>
            I&apos;m a Full-Stack Web Developer navigating the wild jungles of React,
            the sunny beaches of WordPress, and the uncharted waters of
            AI-assisted development.{" "}
          </p>
          <p>
            When I&apos;m not charting new code territories, you&apos;ll find me working
            on my pickleball backhand, climbing the ranks in Rocket League, or
            staring at a terminal pretending I know what I&apos;m doing. 🦎
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold mb-10 gap-6">Certifications</h2>
        <div className="flex flex-col">
            <div className="">
                <p>Computer Science & Full-Stack Web Development</p>
                <p>Atlas School — December 2025</p>
            </div>
            <div className="">
                <p>AI Automation</p>
                <p>OSU CFW — May 2026</p>
            </div>
            <div className="">
                <p></p>
            </div>
            <div className="">
                <p></p>
            </div>
        </div>
      </div>
    </div>
  );
}
