import "./App.css";
import Footer from "./components/footer";
import HeroSection from "./components/hero";
import NavBar from "./components/navBar";


function App() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-row md:flex-row h-screen items-center justify-center xxs:mt-5">
        <HeroSection />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default App;
