import Hero from "./components/hero";
import PillNav from "@/components/PillNav";
import NavSocials from "./components/nav-socials";
import About from "./components/about";
import StackBanner from "./components/StackBanner";
import Work from "./components/work";
import Toolkit from "./components/toolkit";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-black overflow-x-hidden">
      <PillNav
        logo="/logo.svg"
        logoAlt="Zack Yuan"
        logoHref="/"
        items={[
          { label: "About", href: "#about" },
          { label: "Projects", href: "#projects" },
          { label: "Skills", href: "#skills" },
          { label: "Experience", href: "#experience" },
          { label: "Contact", href: "#contact" },
        ]}
        baseColor="#FF4D00"
        pillColor="#000000"
        pillTextColor="#FFFFFF"
        hoveredPillTextColor="#ffffff"
      />
      <NavSocials />
      <Hero />
      <StackBanner />
      <About />
      <Work />
      <Toolkit />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}