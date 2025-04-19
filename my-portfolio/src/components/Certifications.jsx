import React from "react";
import "./Certifications.css";

const certifications = [
  {
    title: "SheCodes Basics",
    issuer: "SheCodes",
    date: "November 2024",
    image:
      "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/226/807/original/226807.png?1743082879",
    link: "https://www.shecodes.io/cohorts/2256/projects/2475335?_gl=1*fcgub5*_gcl_au*MTI1MjQ5MTg5NS4xNzM4MDkyMzUzLjM1OTQ1ODkzNy4xNzQ0OTk2MTUyLjE3NDQ5OTYyMTA.",
  },
  {
    title: "SheCodes Basics Add-on",
    issuer: "SheCodes",
    date: "November 2024",
    image:
      "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/226/945/original/226945.png?1743075193",
    link: "https://www.shecodes.io/cohorts/2245/projects/2470800?_gl=1*1yiyk38*_gcl_au*MTI1MjQ5MTg5NS4xNzM4MDkyMzUzLjM1OTQ1ODkzNy4xNzQ0OTk2MTUyLjE3NDQ5OTYyMTA.",
  },
  {
    title: "SheCodes Python Basics",
    issuer: "SheCodes",
    date: "December 2024",
    image:
      "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/227/343/original/227343.png?1743075321",
    link: "https://www.shecodes.io/cohorts/2261/projects/2505714?_gl=1*1kbady4*_gcl_au*MTI1MjQ5MTg5NS4xNzM4MDkyMzUzLjM1OTQ1ODkzNy4xNzQ0OTk2MTUyLjE3NDQ5OTYyMTA.",
  },
  {
    title: "SheCodes Plus",
    issuer: "SheCodes",
    date: "January 2025",
    image:
      "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/227/290/original/227290.png?1743075308",
    link: "https://www.shecodes.io/cohorts/2270/projects/2515108?_gl=1*a1gvbf*_gcl_au*MTI1MjQ5MTg5NS4xNzM4MDkyMzUzLjM1OTQ1ODkzNy4xNzQ0OTk2MTUyLjE3NDQ5OTYyMTA.",
  },
  {
    title: "SheCodes Plus Add-on",
    issuer: "SheCodes",
    date: "January 2025",
    image:
      "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/230/602/original/230602.png?1743076257",
    link: "https://www.shecodes.io/cohorts/2331/projects/2525147?_gl=1*1tuiu32*_gcl_au*MTI1MjQ5MTg5NS4xNzM4MDkyMzUzLjM1OTQ1ODkzNy4xNzQ0OTk2MTUyLjE3NDQ5OTYyMTA.",
  },
  {
    title: "SheCodes Python Advanced",
    issuer: "SheCodes",
    date: "January 2025",
    image:
      "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/231/335/original/231335.png?1743076447",
    link: "https://www.shecodes.io/cohorts/2346/projects/2535521?_gl=1*udvhhc*_gcl_au*MTI1MjQ5MTg5NS4xNzM4MDkyMzUzLjM1OTQ1ODkzNy4xNzQ0OTk2MTUyLjE3NDQ5OTYyMTA.",
  },
  {
    title: "SheCodes Plus AI",
    issuer: "SheCodes",
    date: "February 2025",
    image:
      "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/232/045/original/232045.png?1743076637",
    link: "https://www.shecodes.io/cohorts/2401/projects/2544817?_gl=1*1ev9t0d*_gcl_au*MTI1MjQ5MTg5NS4xNzM4MDkyMzUzLjM1OTQ1ODkzNy4xNzQ0OTk2MTUyLjE3NDQ5OTYyMTA.",
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
    link: "https://www.shecodes.io/cohorts/2428/projects/2570517?_gl=1*4p102r*_gcl_au*MTI1MjQ5MTg5NS4xNzM4MDkyMzUzLjM1OTQ1ODkzNy4xNzQ0OTk2MTUyLjE3NDQ5OTYyMTA.",
  },
  {
    title: "SheCodes Responsive Add-on",
    issuer: "SheCodes",
    date: "March 2024",
    image:
      "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/235/100/original/235100.png?1743077130",
    link: "https://www.shecodes.io/cohorts/2453/projects/2577221?_gl=1*dv6hyl*_gcl_au*MTI1MjQ5MTg5NS4xNzM4MDkyMzUzLjM1OTQ1ODkzNy4xNzQ0OTk2MTUyLjE3NDQ5OTYyMTA.",
  },
  {
    title: "SheCodes React",
    issuer: "SheCodes",
    date: "April 2025",
    image:
      "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/235/697/original/235697.png?1743806714",
    link: "https://www.shecodes.io/cohorts/2490/projects/2597513?_gl=1*bbneyf*_gcl_au*MTI1MjQ5MTg5NS4xNzM4MDkyMzUzLjM1OTQ1ODkzNy4xNzQ0OTk2MTUyLjE3NDQ5OTYyMTA.",
  },
  {
    title: "SheCodes React",
    issuer: "SheCodes",
    date: "April 2025",
    image:
      "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/237/402/original/237402.png?1744908521",
    link: "https://www.shecodes.io/cohorts/2527/projects/2607890?_gl=1*r1srek*_gcl_au*MTI1MjQ5MTg5NS4xNzM4MDkyMzUzLjM1OTQ1ODkzNy4xNzQ0OTk2MTUyLjE3NDQ5OTYyMTA.",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <h2>🎓 Certifications</h2>
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
          <div className="tech-grid">
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
    </section>
  );
};

export default Certifications;
