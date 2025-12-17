import "./App.css";
import Footer from "./components/footer";
import HeroSection from "./components/heros/projectsHero";
import NavBar from "./components/navBar";
import Projects from "./components/projects";

function App() {
  return (
    <div>
      <NavBar />
<<<<<<< HEAD
      <div className="flex flex-col h-screen items-center justify-center 2xl:mt-40">
=======
      <div className="flex flex-col items-center justify-center xxs:mt-30 xs:mt-70">
>>>>>>> 5290450727c50b7411dcfc2a2c86b17787ecda67
        <HeroSection />
        <div className="">
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
