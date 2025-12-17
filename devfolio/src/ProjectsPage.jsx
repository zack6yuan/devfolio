import "./App.css";
import Footer from "./components/footer";
import HeroSection from "./components/heros/projectsHero";
import NavBar from "./components/navBar";
import Projects from "./components/projects";

function App() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col h-screen items-center justify-center 2xl:mt-40">
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
