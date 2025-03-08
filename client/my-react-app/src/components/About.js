import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
        <h1>About Me</h1>
        <div className="about-content">
          <p>
              I am a computer science student at the University of Maryland, Baltimore
              County. I am interested in software engineering, full stack development,
              and machine learning. I am currently working as a software engineering
              intern at RootsID. I am also a member of the D1 UMBC Cross-Country and
              Track and Field team. In my free time, I enjoy running, hanging out with
              friends, and watching movies.
          </p>
          <img src="/assets/mediaday.jpg" className="about-image" alt="Me" />
        </div>
    </div>

  );
};

export default About;
