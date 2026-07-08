import Hero from "./components/hero";
import NavBar from "./components/navbar";
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
      <NavBar />
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