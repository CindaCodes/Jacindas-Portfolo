import React from "react";
import "./Certifications.css";
import { Link } from "react-router-dom";

const certifications = [
  {
    title: "SheCodes Basics",
    issuer: "SheCodes",
    date: "November 2024",
    image:
      "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/226/807/original/226807.png?1743082879",
  },
  {
    title: "SheCodes Basics Add-on",
    issuer: "SheCodes",
    date: "November 2024",
    image:
      "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/226/945/original/226945.png?1743075193",
  },
  {
    title: "SheCodes Python Basics",
    issuer: "SheCodes",
    date: "December 2024",
    image:
      "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/227/343/original/227343.png?1743075321",
  },
  {
    title: "SheCodes Plus",
    issuer: "SheCodes",
    date: "January 2025",
    image:
      "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/227/290/original/227290.png?1743075308",
  },
  {
    title: "SheCodes Plus Add-on",
    issuer: "SheCodes",
    date: "January 2025",
    image:
      "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/230/602/original/230602.png?1743076257",
  },
  {
    title: "SheCodes Python Advanced",
    issuer: "SheCodes",
    date: "January 2025",
    image:
      "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/231/335/original/231335.png?1743076447",
  },
  {
    title: "SheCodes Plus AI",
    issuer: "SheCodes",
    date: "February 2025",
    image:
      "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/232/045/original/232045.png?1743076637",
  },
  {
    title: "SheCodes Python AI",
    issuer: "SheCodes",
    date: "February 2025",
    image:
      "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/232/696/original/232696.png?1743076749",
    link: "https://colab.research.google.com/drive/1a5i1TmzIHqBM4f2-kR2RiyD4cicyvgEM?usp=sharing",
  },
  {
    title: "SheCodes Responsive",
    issuer: "SheCodes",
    date: "March 2024",
    image:
      "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/232/770/original/232770.png?1743076758",
  },
  {
    title: "SheCodes Responsive Add-on",
    issuer: "SheCodes",
    date: "March 2024",
    image:
      "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/235/100/original/235100.png?1743077130",
  },
  {
    title: "SheCodes React",
    issuer: "SheCodes",
    date: "April 2025",
    image:
      "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/235/697/original/235697.png?1743806714",
  },
  {
    title: "SheCodes React",
    issuer: "SheCodes",
    date: "April 2025",
    image:
      "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/237/402/original/237402.png?1744908521",
  },
];

const Certifications = () => {
  return (
    <section id="education" className="certifications-section">
      <h2 className="title">🎓 Education</h2>
      <div className="marquee">
        <div className="marquee-content">
          {certifications.concat(certifications).map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="cert-card"
            >
              <img src={cert.image} alt={cert.title} />
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                <p>{cert.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="featured-section">
        <div className="featured-diploma">
          <h3 className="featured-title">📜 Verified Diploma</h3>
          <img
            src="https://s3.amazonaws.com/shecodesio-production/user_diplomas/verified_diplomas/000/001/086/original/f3ea6e63a6469f0ee983754d23b8f20b.png?1744908524"
            alt="SheCodes Verified Diploma"
            className="big-diploma"
          />
        </div>

        <div className="tech-stack">
          <h3 className="featured-title">🧰 Tech Stack</h3>
          <div className="tech-grid mb-4">
            <div>AI</div>
            <div>APIs</div>
            <div>Bootstrap</div>
            <div>Colab</div>
            <div>CSS</div>
            <div>Figma</div>
            <div>Git</div>
            <div>GitHub</div>
            <div>Hosting</div>
            <div>HTML</div>
            <div>JavaScript</div>
            <div>Netlify</div>
            <div>Node.js</div>
            <div>Python</div>
            <div>React</div>
            <div>Responsive</div>
            <div>SEO</div>
            <div>VS Code</div>
          </div>
        </div>
      </div>
      <div>
        <Link to="/contact" className="next-page text-muted mt-5">
          Contact Me for More Information
          <span className="arrow">→</span>
        </Link>
      </div>
    </section>
  );
};

export default Certifications;
