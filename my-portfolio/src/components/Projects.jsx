import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "SkyGlance",
    description:
      "Real-time weather app using the OpenWeatherMap API. Built with HTML, CSS, and JavaScript.",
    repo: "https://github.com/CindaCodes/SkyGlance",
    demo: "https://skyglance.netlify.app/",
    image:
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/163/493/original/skyglance.png?1745027414",
  },
  {
    title: "Workout Generator",
    description:
      "A randomized workout app to keep your fitness fresh. Vanilla JS, clean design.",
    repo: "https://github.com/CindaCodes/Workout-Generator",
    demo: "https://ai-workout-wizard.netlify.app/",
    image:
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/163/494/original/Workout.png?1745027424",
  },
  {
    title: "World Clock",
    description:
      "Shows the current time across major cities. Built with JavaScript and Moment.js.",
    repo: "https://github.com/CindaCodes/World-Clock",
    demo: "https://jacindas-world-clock.netlify.app/",
    image:
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/163/497/original/clock.png?1745027628",
  },
  {
    title: "Sourdough Calculator",
    description:
      "Calculate perfect sourdough ratios based on hydration and flour. Great for bakers!",
    repo: "https://github.com/CindaCodes/Sourdough",
    demo: "https://sourdough-calculator.netlify.app/",
    image:
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/163/496/original/Sourdough.png?1745027438",
  },
  {
    title: "Weather Forecast App",
    description:
      "A detailed weather app with 5-day forecast and dynamic icons.",
    repo: "https://github.com/CindaCodes/weather-app",
    demo: "https://jacindas-weather-forecast.netlify.app/",
    image:
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/163/498/original/weather.png?1745027682",
  },
  {
    title: "Dictionary App – Wordly Wise",
    description:
      "Find word definitions with audio pronunciation. Built with React + Dictionary API.",
    repo: "https://github.com/CindaCodes/dictionary-project",
    demo: "https://wordly-wise.netlify.app/",
    image:
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/163/495/original/wordly.png?1745027431",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className={`project-item ${index % 2 === 1 ? "reverse" : ""}`}
            initial={{ opacity: 0, x: index % 2 === 1 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-text">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}
                <a href={project.repo} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
