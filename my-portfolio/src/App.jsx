import React from "react";
import CustomCursor from "./components/CustomCursor";
import PortfolioNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <CustomCursor />
      <PortfolioNavbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </>
  );
}

export default App;
