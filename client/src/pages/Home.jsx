import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'
import Works from '../components/Works/Works.jsx'
import Skills from '../components/Skills/Skills.jsx'
import Contact from '../components/Contact/Contact.jsx'
import Resume from '../components/resume/Resume.jsx'
import Home from '../components/Home/Home.jsx'
const LandingPage = () => {
  return (
    <>
      <div className='content'>
        <Navbar />
        <Home />
        <Works />
        <Skills />
        <Contact />
      </div>
      <Resume />
    </>
  )
}

export default LandingPage