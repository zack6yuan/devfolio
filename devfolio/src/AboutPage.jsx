import "./App.css";
import Footer from "./components/footer";
import HeroSection from "./components/heros/aboutHero";
import NavBar from "./components/navBar";
import ProfessionalSummary from './components/professionalSummary';
import Toolkit from "./components/toolkit";

function App() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center xxs:mt-30"> 
        <div className="mb-12">
          <HeroSection />
        </div>
        <div className="xs:mb-20">
          <ProfessionalSummary />
        </div>
        <div className="xxs:mt-50 xs:mt-80">
          <Toolkit />
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default App;
