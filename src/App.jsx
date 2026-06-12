import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage.jsx";
import SkillsPage from "./pages/SkillsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import { ToastMessageBox } from "./components/ToastMessageBox.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";

function App() {
  return (
    <>
    <ToastMessageBox />
      <Navbar />
      <Routes>
        <Route path="/portfolio-remake" element={<AboutPage />} />
        <Route path="/portfolio-remake/skills" element={<SkillsPage />} />
        <Route path="/portfolio-remake/contact" element={<ContactPage />} />
        <Route path="/portfolio-remake/projects" element={<ProjectPage />} />
      </Routes>
    </>
  )
}

export default App;
