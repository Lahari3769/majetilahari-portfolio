import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GlobalStyles.css';

import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import DevelopersGenie from './pages/case-studies/DevelopersGenie';
import McqGenerator from './pages/case-studies/McqGenerator';
import ProjectModulesBot from './pages/case-studies/ProjectModulesBot';
import SupportingGenAIProjects from './pages/case-studies/SupportingGenAIProjects';
import MyPortfolioAssistant from './pages/case-studies/MyPortfolioAssistant';


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/case-studies/developers-genie"
          element={<DevelopersGenie />}
        />

        <Route
          path="/case-studies/mcq-generator"
          element={<McqGenerator />}
        />

        <Route
          path="/case-studies/my-portfolio-assistant"
          element={<MyPortfolioAssistant />}
        />

        <Route
          path="/case-studies/project-modules-bot"
          element={<ProjectModulesBot />}
        />

        <Route
          path="/case-studies/supporting-genai-projects"
          element={<SupportingGenAIProjects />}
        />
      </Routes>

      {/* ✅ Floating AI Assistant (available on all pages) */}
      <ChatWidget />
    </Router>
  );
}

export default App;
