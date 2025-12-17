import "./App.css";
import Footer from "./components/footer";
import HeroSection from "./components/heros/experienceHero";
import AboutAtlas from "./components/aboutAtlas";
import NavBar from "./components/navBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center xxs:mt-30">
        <div className="mb-12">
          <HeroSection />
        </div>
        <div className="xs:mb-20">
          <AboutAtlas />
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default App;
