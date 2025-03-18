import React from "react";
import "./Works.css";
// import { FaFlutter, FaJs } from "react-icons/fa";
import { FaFlutter, FaJs } from "react-icons/fa6";

import { SiDart } from "react-icons/si";
import { HiOutlineDocumentText } from "react-icons/hi";

const projects = [
    {
        id: 1,
        title: "Expence Tracker",
        description: "A simple Flutter app to track expenses with basic UI and functionality.",
        technologies: [
            { name: "Flutter", icon: <FaFlutter className="flutter" /> },
            { name: "Dart", icon: <SiDart className="dart" /> },
        ],
    },
    {
        id: 2,
        title: "TodoList App - Javascript",
        description: "A JavaScript app for managing tasks with DOM updates.",
        technologies: [{ name: "JavaScript", icon: <FaJs className="js" /> }],
    },
];

function ProjectCard() {
    return (
        <>
            <div className="works">
                Works
            </div>
            <div className="project-container">
                <h2 className="title">Learning Projects</h2>
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <div className="icon">
                            <HiOutlineDocumentText />
                        </div>
                        <div className="content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="description">{project.description}</p>
                            <div className="tags">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">
                                        {tech.icon} {tech.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ProjectCard;
