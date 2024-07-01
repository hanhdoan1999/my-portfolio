import React from 'react';
import './CTASection.scss';

const CTASection = () => {
  return (
    <div className="cta-container">
      <div className="cta-content">
        <h2 className="cta-text">Interested working with me?</h2>
        <div className="cta-buttons">
          <a href="#" className="cta-button see-projects">See Projects</a>
          <a href="#" className="cta-button email-me">Email Me</a>
        </div>
      </div>
    </div>
  );
}

export default CTASection;
