import React from 'react';
import '../styles/About.css';
import TypingEffect from './TypingEffect'; // Custom typing effect component
import profilePic from '../assets/logo.png'; // Replace with your actual image path

function About() {
  return (
    <section id="about" className="about-container">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-6 about-details">
            <h3>Welcome to My Feed</h3>
            <h1>
              Hello, I'm a <TypingEffect words={['Programmer', 'Coder', 'Developer']} />
            </h1>
            <p>
            I'm a passionate and experienced web developer with a strong focus on creating user-centric experiences. With a keen eye for detail and a love for coding, I strive to build websites that are both visually stunning and highly functional. <br></br>



When I'm not coding, you can find me experimenting with new design tools or learning about the latest trends in web development.
            </p>
            <div className="about-icons">
              <div>
                <h4>Available on</h4>
                <div className="icons-row">
                  <a href="https://www.facebook.com/farhan.akthar.313371/" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/md-farhan-505334325/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/FARHAN-2507" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://instagram.com/farhan_250702/" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div>
                <h4>Currently working on</h4>
                <div className="icons-row">
                  <i className="fab fa-node-js"></i>
                  <i className="fab fa-react"></i>
                  <i className="fab fa-java"></i>
                  <i className="fab fa-python"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-6 text-center">
            <div className="about-image">
              <img src={profilePic} alt="Profile" className="profile-pic img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
