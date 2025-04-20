import React, { useState } from "react";
import PortfolioNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";

function App() {

  return (
    <div>
      <PortfolioNavbar />
      <Hero />
      <About />
      <Projects />
      <Certifications />
    </div>
  );
}

export default App;
