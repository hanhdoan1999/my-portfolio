import React from "react";
import "./IntroSection.scss";
import Profile from "../../assets/images/avatar-memoji 1.png"
import { faLinkedin, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function IntroSection() {
  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="left-section">
          <p className="greeting">Hi, I am</p>
          <h1 className="name">Han</h1>
          <div className="underline"></div>
          <div className="social-icons">
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faDribbble} /></a>
          </div>
        </div>
        <div className="middle-section">
          <img src={Profile} alt="Profile" className="profile-image" />
        </div>
        <div className="right-section">
          <h2 className="title">UI Engineer based on Yogyakarta, Indonesia</h2>
          <p className="description">
            I am a multi-disciplinary Frontend Developer and UI Designer who has experience creating projects in various industries and have worked with diverse clients from all over the world. I merge technical and design skills to create innovative products with beautiful and functional user experiences.
          </p>
          <div className="buttons">
            <a href="#" className="button reach-me">Reach Me</a>
            <a href="#" className="button download-cv">Download CV</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
