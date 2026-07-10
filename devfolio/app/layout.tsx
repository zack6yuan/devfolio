import type { Metadata } from "next";
import { Sora, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import SmoothScroll from "./components/smooth-scroll";
import IntroLoader from "./components/intro-loader";
import MagneticElements from "./components/magnetic";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
})

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
})

const manrope = Manrope({
  weight: "800",
  variable: "--font-manrope",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Zack Yuan",
    "Full-Stack Web Developer",
    "UX/UI Designer",
    "React",
    "Next.js",
    "TypeScript",
    "Tulsa",
    "Portfolio",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("dark", "h-full", "antialiased", sora.variable, mono.variable, manrope.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        <IntroLoader />
        <MagneticElements />
        {children}
      </body>
    </html>
  );
}
