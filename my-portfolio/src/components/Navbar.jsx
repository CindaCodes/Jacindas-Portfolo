import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const navLinks = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function PortfolioNavbar() {
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="shadow-sm bg-white"
      expanded={expanded}
      onToggle={() => setExpanded((prev) => !prev)}
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-dark title">
          &lt;CindaCodes&gt;
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.id}
                href={`#${link.id}`}
                className={activeSection === link.id ? "active-link" : ""}
                onClick={() => setExpanded(false)}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PortfolioNavbar;
