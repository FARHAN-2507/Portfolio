import React from 'react';
import '../styles/Background.css';

function Background() {
  return (
    <section id="background" className="background-container">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        {/* Education */}
        <div className="background-section">
          <h3>Education</h3>
          <ul>
            <li><strong>Master's in Computer Applications</strong> - Jims Rohini (2024-2026)</li>
            <li><strong>Bachelor's in Computer Applications</strong> - Jamia Hamdard University (2021-2024)</li>
            <li><strong>High School</strong> - Kendriya Vidyalaya (2017-2021)</li>
          </ul>
        </div>

        {/* Skills & Expertise */}
        <div className="background-section">
          <h3>Skills & Expertise</h3>
          <div className="skills-grid">
            <span className="skill">
              <i className="fab fa-js"></i> JavaScript
            </span>
            <span className="skill">
              <i className="fab fa-react"></i> React.js
            </span>
            <span className="skill">
              <i className="fab fa-node"></i> Node.js
            </span>
            <span className="skill">
              <i className="fab fa-python"></i> Python
            </span>
            <span className="skill">
              <i className="fab fa-html5"></i> HTML5 & CSS3
            </span>
            <span className="skill">
              <i className="fas fa-database"></i> MySQL
            </span>
            <span className="skill">
              <i className="fas fa-database"></i> Oracle
            </span>
            <span className="skill">
              <i className="fab fa-java"></i> Java
            </span>
          </div>
        </div>

        {/* Experience */}
        <div className="background-section">
          <h3>Experience</h3>
          <ul>
            <li>NIL</li>
          </ul>
        </div>

        {/* Achievements */}
        <div className="background-section">
          <h3>Achievements</h3>
          <ul>
            <li>Awarded <strong>Best Developer</strong> at Geek Rooms Hackathon 2024.</li>
            <li>Completed <strong>Python Certification</strong> from Reliance Foundation.</li>
            <li>Completed <strong>Full Stack Web Development Certification</strong> from Reliance Foundation.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Background;
