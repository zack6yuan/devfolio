import "./App.css";
import Connect from "./components/connect";
import Footer from "./components/footer";
import HeroSection from "./components/heros/hireMeHero";
import NavBar from "./components/navBar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col h-screen items-center justify-center xxs:mt-30 xs:mt-5">
        <HeroSection />
        <div className="xs:mt-10">
          <Connect />
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default App;
