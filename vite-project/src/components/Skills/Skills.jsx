import React, { useState } from "react";
import "./Skills.css";
import { FaFlutter, FaJs } from "react-icons/fa6";
import { SiFlutter } from "react-icons/si";

const skillsData = {
  FrontEnd: [
    {
      id: 1,
      name: "Flutter",
      description: "For crafting high-performance, cross-platform mobile and web applications with a smooth user experience.",
      icon: <FaFlutter className="flutter" />,
    },
    {
      id: 2,
      name: "FlutterFlow",
      description: "For crafting high-performance, no-code cross-platform mobile and web applications with a smooth user experience.",
      icon: <SiFlutter className="flutterflow" />,
    },
    {
      id: 3,
      name: "JavaScript",
      description: "For developing fast, efficient web and mobile applications with a modern user experience.",
      icon: <FaJs className="js" />,
    },
  ],
  Backend: [],
  Others: [],
};

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("FrontEnd");

  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <p className="skills-subtitle">Tools and technologies I enjoy working with</p>

      <div className="skills-tabs">
        {Object.keys(skillsData).map((category) => (
          <button
            key={category}
            className={`tab-button ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="skills-content">
        {skillsData[selectedCategory].length > 0 ? (
          skillsData[selectedCategory].map((skill) => (
            <div key={skill.id} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-description">
                {skill.description.split(" ").map((word, index) =>
                  ["cross-platform", "no-code", "efficient"].includes(word) ? (
                    <span key={index} className="highlight">
                      {" " + word}
                    </span>
                  ) : (
                    " " + word
                  )
                )}
              </p>
            </div>
          ))
        ) : (
          <p className="no-skills">No skills available in this category.</p>
        )}
      </div>
    </div>
  );
}

export default Skills;
