import "./App.css";
import Footer from "./components/footer";
import HeroSection from "./components/heros/experienceHero";
import AboutAtlas from "./components/aboutAtlas";
import NavBar from "./components/navBar";
import { Route, Routes } from "react-router-dom";
import Experience from "./components/experience";

function App() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col h-screen items-center justify-center xxs:mt-140">
        <div className="mb-50">
          <HeroSection />
        </div>
        <div className="mt-40 sm:mt-20">
          <Experience />
        </div>
        <div className="mt-40">
          <AboutAtlas />
        </div>
      </div>
      <div className="mt-100">
        <Footer />
      </div>
    </div>
  );
}

export default App;
