import { Anchor } from "lucide-react";
import ProjectCard from "./ProjectCard";

export default function Archipelago() {
  return (
    <div className="flex flex-col items-center gap-5 pt-10 sm:pt-15 px-4 bg-[#FCF5E1]">
      <p className="text-4xl sm:text-5xl animate-wiggle">🏝️</p>
      <h1 className="text-3xl sm:text-4xl text-gray-800 font-bold text-center">
        The Archipelago
      </h1>
      <p className="text-gray-500 text-center">
        Every island is a shipped Project. Explore Them!
      </p>

      <div className="flex items-center gap-3 sm:gap-5 p-5 w-full max-w-xs sm:max-w-sm">
        <div className="flex-1 h-1 bg-orange-400"></div>
        <Anchor width={20} height={20} className="text-gray-400 shrink-0" />
        <div className="flex-1 h-1 bg-orange-400"></div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 w-full max-w-6xl place-items-center">
        <ProjectCard
          accent="teal"
          emoji="🏝️"
          image="/island.png"
          title="Interparts of Tulsa"
          description="A production website built for my family's 45+ year auto parts shop on Route 66. Built with Next.js, TypeScript, and Tailwind CSS v4, featuring a custom navy-and-gold brand, star ratings, and Google Maps integration."
          tags={["NextJS", "TypeScript", "Tailwind v4", "Formspree", "Vercel"]}
          href="https://your-live-url.com"
        />
        <ProjectCard
          accent="orange"
          emoji="🥭"
          image="/island.png"
          title="Aeroduel"
          description="Led UX design and mobile development for a real-time aerial combat simulator, building a WebSocket-driven dashboard that streams live computer vision data from H7 Cam Plus sensors on 3D-printed RC planes."
          tags={["React", "TypeScript", "React Native", "Firebase", "Expo", "Vercel"]}
          href="https://your-live-url.com"
        />
        <ProjectCard
          accent="green"
          emoji="🐊"
          image="/island.png"
          title="Business Management App"
          description="Built with NextJS, TypeScript, and JSPDF, a web application built to manage customers and create new invoices for a business. This is a private application, please send me a message for more details."
          tags={["NextJS", "TypeScript", "JSPDF", "Firebase", "Vercel"]}
          href="https://your-live-url.com"
        />
        <ProjectCard
          accent="brown"
          emoji="🥥"
          image="/island.png"
          title="Interparts of Tulsa"
          description="A production website built for my family's 45+ year auto parts shop on Route 66. Built with Next.js, TypeScript, and Tailwind CSS v4, featuring a custom navy-and-gold brand, star ratings, and Google Maps integration."
          tags={["NextJS", "TypeScript", "Tailwind v4", "Formspree", "Vercel"]}
          href="https://your-live-url.com"
        />
      </div>
    </div>
  );
}