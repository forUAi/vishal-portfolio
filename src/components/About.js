import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <div className="general">
        <h3>General</h3>
        <p><strong>Focus:</strong>Full Stack Web Development with AI and ML  </p>
        <br></br>
        <p><strong>Education:</strong> Bachelors of Technology in Computer Science. Masters in Computer Science from University of Detroit Mercy, Michigan, USA.</p>
      </div>
      <div className="details">
        <h3>Details</h3>
        <p><strong>Programming Languages:</strong> Python, Java, JavaScript</p>
        <p><strong>Frameworks:</strong> TensorFlow, PyTorch, Scikit-learn, Keras, Hugging Face Transformers, OpenAI, LangChain, Spring, Vert.x</p>      </div>
      <div className="other">
        <h3>Other</h3>
        <p><strong>Skills:</strong>Data Structures, Algorithms, System Design, Python, Machine Learning, Neural Networks, Sentiment Analysis, Report Generation, Virtual Assistants, Real-time Data Transfer, Automation, Portfolio Optimization, Risk Management, Historical Data Analysis, Trend Prediction, Cloud Platforms (Azure, AWS), Docker, Kubernetes</p>
      </div>
    </div>
  );
}

export default About;
