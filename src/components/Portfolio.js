import React from 'react';
import '../styles/Portfolio.css';
import fitclublogo from '../assets/fitclub.png'
import frslogo from '../assets/FRS.png'
import EduFastlogo from '../assets/edufastlogo.png'
function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section py-5">
      <div className="container text-center">
        <h2>My Projects</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card">
              <img src={fitclublogo} alt="Project 1" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">The Fit Club</h5>
                <p className="card-text">A fitness platform that helps users achieve their fitness goals.</p>
                <a href="https://github.com/FARHAN-2507/FITCLUB" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Code</a>
                <a href="https://farhan-2507.github.io/FITCLUB/" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">View Website</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={frslogo} alt="Project 2" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Face Recognition Attendence System</h5>
                <p className="card-text">Mark Attendence using face recognition.</p>
                <a href="https://github.com/FARHAN-2507/face-Attendance-System-web-app-/tree/main/my-app" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Code</a>
                <a href="https://yourusername.github.io/project2" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">View Website</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={EduFastlogo} alt="Project 3" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">EduFast</h5>
                <p className="card-text">An Online Learning Platform.</p>
                <a href="https://github.com/FARHAN-2507/EDUFAST-" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Code</a>
                <a href="https://farhan-2507.github.io/EDUFAST-/" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">View Website</a>
              </div>
            </div>
          </div>
        </div>

        {/* List of More Projects */}
        <div id="more-projects" className="mt-5">
          <h3>More Projects</h3>
          <ul>
            <li>Symptom Checker Chat-Bot</li>
            <li>Million Dollar Home Page</li>
            
          </ul>
          <p>Check out my other projects on <a href="https://github.com/FARHAN-2507" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
