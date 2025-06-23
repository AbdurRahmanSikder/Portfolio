import React from 'react'
import codingImage from '../../assets/coding.webp';
import './Home.css'
function Home() {
  return (
    <div className='Home'>
      <div className="details">
        <div className="full-name">Abdur Rahman Sikder Nayan</div>
        <div className="my-title">Web Developer</div>
        <div className="article">Hi, I’m Abdur Rahman Sikder Nayan — a MERN stack developer and competitive programmer with 1400+ problems solved. I build full-stack apps like TechLand and have solid skills in JavaScript, C++, OOP, and DSA. I’m seeking a software engineering role to grow and build impactful solutions.</div>
      </div>
      <div className="codingimage">
        <img src={codingImage} alt="Coding" />
      </div>
    </div>
  );
}

export default Home;
