import "./App.css";
import Footer from "./components/footer";
import HeroSection from "./components/hero";
import SocialLinks from "./components/socialLinks";
import Experience from './components/experience';
import Development from "./components/development";
import AboutAtlas from './components/aboutAtlas';
import Toolkit from './components/toolkit';
import Projects from "./components/projects";
import Connect from "./components/connect";
import NavBar from "./components/navBar";

function App() {
  return (
    <div className="">
      <NavBar />
      <div className="flex flex-col md:flex-row h-screen items-center gap-120 xxs:mt-5">
        <HeroSection /> 
        <div className="md:mr-10 md:w-1/2 lg:mt-40 md:mt-0 sm:mt-0 xs:-mt-60">
          <SocialLinks /> 
        </div>
      </div>
      <div className="h-screen xxs:-mt-90">
        <Experience />
      </div>
      <div className="-mt-150">
        <Development />
      </div>
      <div className="mt-50">
        <AboutAtlas />
      </div>
      <div className="mt-50">
        <Toolkit />
      </div>
      <div className="mt-50">
        <Projects />
      </div>
      <div className="mt-50">
        <Connect />
      </div>
      <div className="mt-100">
        <Footer />
      </div>
    </div>
  );
}

export default App;
