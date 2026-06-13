import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage.jsx";
import SkillsPage from "./pages/SkillsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import { ToastMessageBox } from "./components/ToastMessageBox.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

function App() {
  return (
    <>
    <ToastMessageBox />
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App;
