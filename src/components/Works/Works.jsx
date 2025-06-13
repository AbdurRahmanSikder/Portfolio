import React from "react";
import "./Works.css";
// import { FaFlutter, FaJs } from "react-icons/fa";
import { FaFlutter, FaJs } from "react-icons/fa6";
import cf from '../../assets/Codeforces.png'
import chef from '../../assets/Codechef.png'
import todo from '../../assets/todo list.png'
import shop from '../../assets/shopping-cart.png'
import { SiDart } from "react-icons/si";
import { HiOutlineDocumentText } from "react-icons/hi";

const programing = [
    {
        id: 1,
        title: "Codeforces",
        description: "Pupil max rating 1320",
        url: "https://codeforces.com/profile/Abdur_Rahman040", // Add link here
        icon: (
            <img src={cf}
                alt="Codeforces Logo"
                width="30"
                height="30"
            />
        ),
        technologies: [
            { name: "C++" },
            { name: "DSA" },
        ],
    },
    {
        id: 2,
        title: "Code Chef",
        description: "3-star coder max rating 1662",
        url: "https://www.codechef.com/users/abdurrahman_40", // Add link here
        icon: (
            <img src={chef}
                alt="CodeChef Logo"
                width="30"
                height="30"
            />
        ),
        technologies: [
            { name: "C++" },
            { name: "DSA" }
        ],
    },
];

const projects = [
    {
        id: 1,
        title: "TechLand Fullstack-E-commerce",
        description: "A fast and user-friendly E-commerce platform built with the MERN stack.",
        url: "https://tech-land-frontend.vercel.app/", 
        icon: (
            <img src={shop}
                alt="Shopping Cart"
                width="30"
                height="30"
            />
        ),
        technologies: [
            { name: "MongoDB" },
            { name: "Express" },
            { name: "React" },
            { name: "NodeJs" },
            { name: "Tailwind CSS" },
        ],
    },
    {
        id: 2,
        title: "TodoList App",
        description: "A simple and efficient MERN-based To-Do List app to organize your tasks effortlessly.",
        url: "https://todo-app-frontend-5o64.onrender.com/", // Add link here
        icon: (
            <img src={todo}
                alt="Todo List"
                width="30"
                height="30"
            />
        ),
        technologies: [
            { name: "MongoDB" },
            { name: "Express" },
            { name: "React" },
            { name: "NodeJs" },
        ]
    }
];

function ProjectCard() {
    return (
        <>
            <div className="works">Works</div>
            <div className="main-container">
                <div className="cp-container">
                    <h2 className="title">Competitive Programming</h2>
                    {programing.map((project) => (
                        <a href={project.url} >
                            <div key={project.id} className="project-card">
                                <div className="icon">{project.icon}</div>
                                <div className="content">
                                    <h3 className="project-title">
                                        {project.title}
                                    </h3>
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
                        </a>
                    ))}
                </div>

                <div className="project-container">
                    <h2 className="title">Learning Projects</h2>
                    {projects.map((project) => (
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <div key={project.id} className="project-card">
                                <div className="icon">{project.icon}</div>
                                <div className="content">
                                    <h3 className="project-title">
                                        {project.title}
                                    </h3>
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
                        </a>
                    ))}
                </div>
            </div >
        </>
    );
}

export default ProjectCard;
