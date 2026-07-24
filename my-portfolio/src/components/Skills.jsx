import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faPython,
  faHtml5,
  faCss3,
  faReact,
  faBootstrap,
  faNodeJs,
  faLinux,
  faGitAlt,
  faGithub,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import {
  faShieldHalved,
  faNetworkWired,
  faLaptopCode,
  faCode,
  faCloud,
  faServer,
  faPlug,
  faMobileScreen,
  faMagnifyingGlass,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import "./Skills.css";

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", icon: faJs },
      { name: "Python", icon: faPython },
      { name: "HTML", icon: faHtml5 },
      { name: "CSS", icon: faCss3 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: faReact },
      { name: "Bootstrap", icon: faBootstrap },
      { name: "Node.js", icon: faNodeJs },
    ],
  },
  {
    category: "Security & Networking",
    skills: [
      { name: "Cybersecurity Fundamentals", icon: faShieldHalved },
      { name: "Networking", icon: faNetworkWired },
      { name: "Linux", icon: faLinux },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: faGitAlt },
      { name: "GitHub", icon: faGithub },
      { name: "VS Code", icon: faLaptopCode },
      { name: "Figma", icon: faFigma },
      { name: "Colab", icon: faCode },
      { name: "Netlify", icon: faCloud },
      { name: "Hosting", icon: faServer },
    ],
  },
  {
    category: "Concepts & Practices",
    skills: [
      { name: "APIs", icon: faPlug },
      { name: "Responsive Design", icon: faMobileScreen },
      { name: "SEO", icon: faMagnifyingGlass },
      { name: "AI", icon: faRobot },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="title">Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((group) => (
          <div className="skill-category" key={group.category}>
            <h3 className="skill-category-title">{group.category}</h3>
            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill.name}>
                  <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
