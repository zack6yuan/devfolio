import { Anchor, Globe, Stamp, GraduationCap, Bot } from "lucide-react";
import Image from "next/image";

type StampAccent = "teal" | "green" | "orange" | "brown";

const stampStyles: Record<StampAccent, { border: string; bg: string; text: string }> = {
  teal: {
    border: "border-teal-400",
    bg: "bg-teal-50",
    text: "text-teal-700",
  },
  green: {
    border: "border-green-500",
    bg: "bg-green-50",
    text: "text-green-700",
  },
  orange: {
    border: "border-orange-400",
    bg: "bg-orange-50",
    text: "text-orange-700",
  },
  brown: {
    border: "border-[#8B5E3C]",
    bg: "bg-[#F5EBE0]",
    text: "text-[#6B4A2F]",
  },
};

type VisaStamp = {
  icon: React.ReactNode;
  label: string;
  accent: StampAccent;
};

const certifications: VisaStamp[] = [
  {
    icon: <GraduationCap className="w-4 h-4" />,
    label: "Computer Science & Full-Stack Dev — Atlas School",
    accent: "teal",
  },
  {
    icon: <Bot className="w-4 h-4" />,
    label: "AI Automation — OSU CFW",
    accent: "orange",
  },
];

export default function Passport() {
  return (
    <div className="flex flex-col items-center gap-5 pt-15 bg-[#FCF5E1]">
      <p className="text-5xl animate-wiggle">📔</p>
      <h1 className="text-4xl text-gray-800 font-bold">The Explorer&apos;s Passport</h1>
      <p className="text-gray-500">Identity verified by the Dev Islands Authority</p>

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
                className="object-cover translate-y-3 scale-130"
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
              <p className="text-white">Front-End</p>
            </div>
            <div className="">
              <p className=" text-white/70">Favorite Tools</p>
              <p className="text-white">NextJS, TailwindCSS</p>
            </div>
            <div className="">
              <p className=" text-white/70">Base Camp</p>
              <p className="text-white">Tulsa, Oklahoma</p>
            </div>
            <div className="">
              <p className=" text-white/70">Superpower</p>
              <p className="text-white">Ginger</p>
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

      <div className="text-gray-500 flex flex-col mx-15 text-center mb-10 gap-6">
        <h2 className="text-2xl font-bold text-gray-800">About the Explorer</h2>
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

      {/* Visa Stamps — Certifications */}
      <div className="flex flex-col items-center gap-6 mb-15 px-6 w-full max-w-2xl">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold text-gray-800">
            🌋 Visa Stamps — Certifications
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {certifications.map((cert) => {
            const styles = stampStyles[cert.accent];
            return (
              <div
                key={cert.label}
                className={`flex items-center gap-2 border-2 ${styles.border} ${styles.bg} rounded-full px-5 py-3`}
              >
                <span className={styles.text}>{cert.icon}</span>
                <p className={`font-bold text-sm ${styles.text}`}>{cert.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}