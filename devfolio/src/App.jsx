import "./App.css";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ExperiencePage from "./ExperiencePage";
import ProjectsPage from "./ProjectsPage";
import HireMePage from "./HireMePage";
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/hire-me" element={<HireMePage />} />
      </Routes>
    </div>
  );
}

export default App;
