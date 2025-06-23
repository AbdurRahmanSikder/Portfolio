import React from 'react'
import codingImage from '../../assets/coding.webp';
import './Home.css'
function Home() {
  return (
    <div className='Home'>
      <div className="details">
        <div className="full-name">Abdur Rahman Sikder Nayan</div>
        <div className="my-title">Full-Stack MERN Developer</div>
        <div className="article">Hi, I’m a full-stack web developer specializing in the MERN stack (MongoDB, Express, React, Node.js) with a strong foundation in problem-solving and algorithmic thinking.</div>
      </div>
      <div className="codingimage">
        <img src={codingImage} alt="Coding" />
      </div>
    </div>
  );
}

export default Home;
