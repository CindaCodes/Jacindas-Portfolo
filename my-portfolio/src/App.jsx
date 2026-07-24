import React from "react";
import PortfolioNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <PortfolioNavbar />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Contact />
    </>
  );
}

export default App;
