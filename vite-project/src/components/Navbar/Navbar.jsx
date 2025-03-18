import React from 'react'
import './Navbar.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Navbar() {
    return (
        <div className='Navbar'>
            <div className="name">a. rahman</div>
            <div className="contact">
               <a href='https://www.linkedin.com/in/abdurrahman040/'><FaLinkedin className='linkedin' /></a> 
               <a href='https://github.com/AbdurRahmanSikder'><FaGithub className='github' /></a>
            </div>
        </div>
    )
}

export default Navbar