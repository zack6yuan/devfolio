import "./App.css";
import Footer from "./components/footer";
import HeroSection from "./components/heros/homeHero";
import NavBar from "./components/navBar";

function App() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <NavBar />
<<<<<<< HEAD
      <div className="flex-1 flex items-center justify-center">
=======
      <div className="flex flex-row md:flex-row h-screen items-center justify-center xxs:-mt-50">
>>>>>>> 5290450727c50b7411dcfc2a2c86b17787ecda67
        <HeroSection />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default App;
