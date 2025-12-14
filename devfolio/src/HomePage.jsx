import "./App.css";
import Footer from "./components/footer";
import HeroSection from "./components/heros/homeHero";
import NavBar from "./components/navBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-row md:flex-row h-screen items-center justify-center xxs:-mt-50">
        <HeroSection />
      </div>
      <div className="-mt-40">
        <Footer />
      </div>
    </div>
  );
}

export default App;
