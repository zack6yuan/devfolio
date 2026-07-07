import Backpack from "./components/backpack";
import Archipelago from "./components/archipelago";
import Hero from "./components/hero";
import NavBar from "./components/navbar";
import About from "./components/about";
import Bottle from "./components/bottle";
import StackBanner from "./components/StackBanner";
import Work from "./components/work";
import Toolkit from "./components/toolkit";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-black">
      <NavBar />
      <Hero />
      <StackBanner />
      <About />
      <Work />
      <Toolkit />
      <Archipelago />
      <Backpack />
      <Bottle />
    </div>
  );
}