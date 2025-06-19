import React from "react";
import "./Works.css";
// import { FaFlutter, FaJs } from "react-icons/fa";
import { FaFlutter, FaJs } from "react-icons/fa6";
import cf from '../../assets/Codeforces.png'
import chef from '../../assets/Codechef.png'
import todo from '../../assets/todo list.png'
import shop from '../../assets/shopping-cart.png'
import {useAppContext} from "../../contextApi/contextApi.jsx"
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

const ProjectCard =  () => {
    const {projects} = useAppContext();
    
    console.log(projects);
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
                                                 {tech.name}
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
                    {projects.filter((p)=>p.isComplete===true).map((project) => (
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <div key={project.id} className="project-card">
                                <div className="icon"><img className="w-[30px] h-[30px]" src={project.image} alt="" /></div>
                                <div className="content">
                                    <h3 className="project-title">
                                        {project.title}
                                    </h3>
                                    <p className="description">{project.description}</p>
                                    <div className="tags">
                                        {project.technologies.map((tech, index) => (
                                            <span key={index} className="tech-tag">
                                                {tech} 
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
