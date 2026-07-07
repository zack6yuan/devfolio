import Backpack from "./components/backpack";
import Archipelago from "./components/archipelago";
import Hero from "./components/hero";
import NavBar from "./components/navbar";
import Passport from "./components/passport";
import Bottle from "./components/bottle";
import StackBanner from "./components/StackBanner";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-black">
      <NavBar />
      <Hero />
      <StackBanner />
      <Passport />
      <Archipelago />
      <Backpack />
      <Bottle />
    </div>
  );
}