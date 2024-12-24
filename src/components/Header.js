import React from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.png'; // Import your logo (ensure you have it in the assets folder)

function Header() {
  const handleResumeClick = () => {
    // Open the resume PDF in a new tab
    window.open('/resume.pdf', '_blank');
  };

  return (
    <header className="header-container bg-white shadow-sm py-3">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/* Logo and Name */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={logo} alt="Logo" className="logo me-2" />
            <span className="name">MD FARHAN</span>
          </a>
          
          {/* Navbar Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button 
                  onClick={handleResumeClick} 
                  className="nav-link btn-resume"
                >
                  Resume
                </button>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#background">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
