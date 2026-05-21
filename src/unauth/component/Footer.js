import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Brand Info */}
        <div className="footer-section footer-brand">
          <h3>#1 AI VIDEO MODEL</h3>
          <p>Bump AI will watch any video and deliver insights across all industries.</p>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/tanay-salunke-a7b11936a/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://github.com/TanaySalunke2538" className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://youtube.com/playlist?list=PLJrzt4ameiaPxcbEZ4wIcISCCU7MdvtfF&si=awJ5P63u-wZIu7s3" className="social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>

        {/* Product Section */}
        <div className="footer-section">
          <h4>Product</h4>
          <ul>
            <li><a href="#news">News</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#changelog">Product Changelog</a></li>
          </ul>
        </div>

        {/* Features Section */}
        <div className="footer-section">
          <h4>Features</h4>
          <ul>
            <li><a href="#workspaces">Workspaces</a></li>
            <li><a href="#creator">Creator Studio</a></li>
            <li><a href="#youtube">YouTube Videos</a></li>
            <li><a href="#local">Local Videos</a></li>
          </ul>
        </div>

        {/* API Section */}
        <div className="footer-section">
          <h4>API</h4>
          <ul>
            <li><a href="#startups">Startups</a></li>
            <li><a href="#zapier">Zapier</a></li>
            <li><a href="#enterprise">Enterprise</a></li>
            <li><a href="#docs">API Documentation</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy;2025 Bumpups Inc. - All rights reserved.</p>
        <div className="footer-links">
          <a href="#terms">Terms of Service</a>
          <span className="separator">•</span>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
