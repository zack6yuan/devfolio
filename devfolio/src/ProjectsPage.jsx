import "./App.css";
import Footer from "./components/footer";
import HeroSection from "./components/heros/projectsHero";
import NavBar from "./components/navBar";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/projects";

function App() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center xxs:mt-30">
        <HeroSection />
        <div className="xs:mt-90">
          <Projects />
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default App;
