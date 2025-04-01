import React, { useState } from "react";
import "./Resume.css";
import { FaFileDownload } from "react-icons/fa";
import { LuFileUser } from "react-icons/lu";

const Resume = () => {
    const [hover, setHover] = useState(false);

    return (
        <a
            href="https://drive.google.com/file/d/1xr6yBmCvI34wBtKS9ju42BlZKwT2WWbp/view?usp=sharing"
            download
            className="download-cv-button"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {hover && <span className="tooltip">View Resume</span>}
            <LuFileUser className="download-icon" />
        </a>
    );
};

export default Resume;
