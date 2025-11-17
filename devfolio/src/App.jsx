import "./App.css";
import Footer from "./components/footer";
import HeroSection from "./components/hero";
import SocialLinks from "./components/socialLinks";

function App() {
  return (
    <div className="">
      <div className="flex h-screen items-center">
        <HeroSection /> 
        <SocialLinks /> 
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default App;
