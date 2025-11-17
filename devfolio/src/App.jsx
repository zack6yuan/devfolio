import "./App.css";
import Footer from "./components/footer";
import HeroSection from "./components/hero";

function App() {
  return (
    <div className="">
      <div className="flex h-screen items-center">
        <HeroSection />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default App;
