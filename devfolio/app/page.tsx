import Hero from "./components/hero";
import NavBar from "./components/navbar";
import Passport from "./components/passport";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-black font-sora">
      <NavBar />
      <Hero />
      <Passport />
    </div>
  );
}