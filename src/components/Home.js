// src/components/Home.js
import React from 'react';
import './Home.css';
import profileImage from '../assets/image.jpg'; // Update the path if necessary

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <img src={profileImage} alt="Vishal Chandupatla" className="home-photo" />
        <h1>Vishal Chandupatla</h1>
        <p>Welcome to my portfolio website. I am a Full Stack Developer specializing in Data Engineering using Machine Learning(ML) and Artificial Intelligence(AI).</p>
      </div>
    </div>
  );
}

export default Home;
