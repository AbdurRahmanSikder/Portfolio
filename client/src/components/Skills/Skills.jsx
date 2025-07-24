import React, { useState } from "react";
import "./Skills.css";
import { FaFlutter, FaJs } from "react-icons/fa6";
import { SiFlutter } from "react-icons/si";

const skillsData = {
  FrontEnd: [
    {
      id: 1,
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" 
        
          alt="JavaScript Logo"
          width="50"
          height="50"
        />
      ),

    },
    {
      id: 2,
      icon: (      
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
          alt="JavaScript Logo"
          width="50"
          height="50"
        />
      ),

    },
    {
      id: 3,
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          alt="JavaScript Logo"
          width="50"
          height="50"
        />
      ),

    },
    {
      id: 4,
      icon: (
        
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" 
          alt="JavaScript Logo"
          width="50"
          height="50"
        />
      ),

    },
    {
      id: 5,
      icon: (
        
        
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"  
          alt="JavaScript Logo"
          width="50"
          height="50"
        />
      ),

    },
    {
      id: 6,
      icon: (
        
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" 
          alt="JavaScript Logo"
          width="50"
          height="50"
          />
      ),

    }
  ],
  Backend: [
    {
      id: 1,
      icon: (
        
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"         
          alt="JavaScript Logo"
          width="50"
          height="50"
        />
      ),

    },
    {
      id: 2,
      icon: (      

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
        alt="JavaScript Logo"
          width="50"
          height="50"
        />
      ),

    },
    {
      id: 3,
      icon: (      

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-plain-wordmark.svg" 
        alt="JavaScript Logo"
          width="50"
          height="50"
        />
      )
    },
    {
      id: 4,
      icon: (
        
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" 
          alt="JavaScript Logo"
          width="50"
          height="50"
          />
      ),

    }
  ],
  Others: [
    {
      id: 1,
      icon: (
        
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"          
          alt="JavaScript Logo"
          width="50"
          height="50"
        />
      ),

    },
    {
      id: 2,
      icon: (      

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" 
        alt="JavaScript Logo"
          width="50"
          height="50"
        />
      )
    }
  ],
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
              {/* <div className="skill-icon">{skill.icon}</div> */}
              {skill.icon}
              {/* <h3 className="skill-name">{skill.name}</h3>
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
              </p> */}
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
