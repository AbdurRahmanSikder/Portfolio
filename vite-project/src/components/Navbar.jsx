import React from 'react'
import './Navbar.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Navbar() {
    return (
        <div className='Navbar'>
            <div className="name">a. rahman</div>
            <div className="contact">
                <FaLinkedin className='linkedin' />
                <FaGithub className='github' />
            </div>
        </div>
    )
}

export default Navbar