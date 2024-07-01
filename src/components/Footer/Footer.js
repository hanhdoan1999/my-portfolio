import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <p className="footer-text">2023 hanihusam. All rights reserved.</p>
        <div className="social-icons">
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faDribbble} /></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
