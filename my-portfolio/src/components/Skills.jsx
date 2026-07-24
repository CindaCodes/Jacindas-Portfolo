import React from "react";
import "./Skills.css";

const skillCategories = [
  {
    category: "Languages",
    skills: ["JavaScript", "Python", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Bootstrap", "Node.js"],
  },
  {
    category: "Security & Networking",
    skills: ["Cybersecurity Fundamentals", "Networking", "Linux"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Colab", "Netlify", "Hosting"],
  },
  {
    category: "Concepts & Practices",
    skills: ["APIs", "Responsive Design", "SEO", "AI"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <p className="section-kicker">// skills</p>
      <h2 className="title">Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((group) => (
          <div className="skill-category" key={group.category}>
            <h3 className="skill-category-title">{group.category}</h3>
            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
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
