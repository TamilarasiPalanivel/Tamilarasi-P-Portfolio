import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        <nav className="p-4 bg-gray-800 shadow-md flex justify-center space-x-6">
          <Link to="/" className="hover:text-yellow-500">About</Link>
          <Link to="/projects" className="hover:text-yellow-500">Projects</Link>
          <Link to="/skills" className="hover:text-yellow-500">Skills</Link>
          <Link to="/achievements" className="hover:text-yellow-500">Achievements</Link>
          <Link to="/contact" className="hover:text-yellow-500">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
