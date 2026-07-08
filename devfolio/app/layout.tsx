import type { Metadata } from "next";
import { Sora, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

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
  title: {
    default: siteConfig.title,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("dark", "h-full", "antialiased", "scroll-smooth", sora.variable, mono.variable, manrope.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
