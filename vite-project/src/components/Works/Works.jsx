import React from "react";
import "./Works.css";
// import { FaFlutter, FaJs } from "react-icons/fa";
import { FaFlutter, FaJs } from "react-icons/fa6";
import cf from '../../assets/codeforces.png'
import chef from '../../assets/Codechef.png'
import todo from '../../assets/todo list.png'
import shop from '../../assets/shopping-cart.png'
import { SiDart } from "react-icons/si";
import { HiOutlineDocumentText } from "react-icons/hi";

console.log(cf);
const programing = [
    {
        id: 1,
        title: "Codeforces",
        description: "pupil max rating 1320",
        icon: (
            <img src={cf}
                alt="JavaScript Logo"
                width="30"
                height="30"
            />
        )
    },
    {
        id: 2,
        title: "Code Chef",
        description: "3 star coder",
        icon: (
            <img src={chef}
                alt="JavaScript Logo"
                width="30"
                height="30"
            />
        )
    },
];

const projects = [
    {
        id: 1,
        title: "Expence Tracker",
        description: "A simple Flutter app to track expenses with basic UI and functionality.",
        icon: (
            <img src={shop}
                alt="JavaScript Logo"
                width="30"
                height="30"
            />
        ),
        technologies: [
            {name: "MongoDB"},
            {name: "Express"},
            {name: "React"},
            {name: "NodeJs"},
        ],
    },
    {
        id: 2,
        title: "TodoList App - Javascript",
        description: "A JavaScript app for managing tasks with DOM updates.",
        icon: (
            <img src={todo}
                alt="JavaScript Logo"
                width="30"
                height="30"
            />
        ),
        technologies: [
            {name: "MongoDB"},
            {name: "Express"},
            {name: "React"},
            {name: "NodeJs"},
    ]
    },
];

function ProjectCard() {
    return (
        <>
            <div className="works">
                Works
            </div>
            <div className="main-container">
                <div className="cp-container">
                    <h2 className="title">Competitive Programing</h2>
                    {programing.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="icon">
                                {project.icon}
                            </div>
                            <div className="content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="description">{project.description}</p>

                            </div>
                        </div>
                    ))}
                </div>


                <div className="project-container">
                    <h2 className="title">Learning Projects</h2>
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="icon">
                                {project.icon}
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
            </div>
        </>
    );
}

export default ProjectCard;
