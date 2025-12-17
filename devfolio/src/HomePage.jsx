import "./App.css";
import Footer from "./components/footer";
import HeroSection from "./components/heros/homeHero";
import NavBar from "./components/navBar";

function App() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <NavBar />
      <div className="flex-1 flex items-center justify-center">
        <HeroSection />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default App;
