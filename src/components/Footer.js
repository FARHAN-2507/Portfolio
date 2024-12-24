import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer-container bg-dark text-white py-4">
      <div className="container text-center">
        {/* Footer Text */}
        <p className="mb-2">&copy; 2023 My Portfolio. All rights reserved.</p>

        {/* Social Media Links */}
        <div className="footer-social-links mb-3">
          <a href="https://github.com/FARHAN-2507" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/md-farhan-505334325/" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://x.com/Farhan25072002" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        
        
      </div>
    </footer>
  );
}

export default Footer;
