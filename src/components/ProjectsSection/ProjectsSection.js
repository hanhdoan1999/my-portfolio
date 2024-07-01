import React from 'react';
import './ProjectsSection.scss';
import projectImage1 from '../../assets/images/Rectangle 34.png'
import projectImage2 from '../../assets/images/Rectangle 35.png'

const ProjectsSection = () => {
  return (
    <div className="projects-container">
      <div className="header">
        <a href="#" className="see-more">See more projects <span className="arrow">→</span></a>
        <p className="projects-title">Projects</p>
      </div>
      <h2 className="heading">Some of my hand crafts</h2>
      <div className="projects-content">
        <div className="project-card">
          <img src={projectImage1} alt="Project 1" className="project-image" />
          <div className="project-details">
            <p className="project-category">Web Development</p>
            <h3 className="project-title">Mulazamath TV</h3>
            <p className="project-description">A company profile website for Mulazamath TV, an Islamic international organization based on Sudan, Africa.</p>
          </div>
        </div>
        <div className="project-card">
          <img src={projectImage2} alt="Project 2" className="project-image" />
          <div className="project-details">
            <p className="project-category">Mobile App</p>
            <h3 className="project-title">What are you waiting for?</h3>
            <p className="project-description">Elevate your product team. Lorem ipsum dolor amet consectetur adipiscing elit.</p>
            <div className="download-buttons">
              <a href="#" className="download-button">Google Play</a>
              <a href="#" className="download-button">App Store</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
