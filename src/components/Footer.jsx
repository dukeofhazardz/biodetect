import React from "react";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          BioDetect
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Share ➡️ </span>
          <span>
            <a href="https://github.com/dukeofhazardz/bio-detect">
              Star Github Repo 🌟
            </a>
          </span>
        </div>
        <div className="footer-section-columns">
          <span>
            <a href="https://www.linkedin.com/in/nnaemekaxjohn">LinkedIn</a>
          </span>
          <span>
            <a href="https://www.github.com/dukeofhazardz">GitHub</a>
          </span>
          <span>
            <a href="https://dev.to/dukeofhazardz">Dev Blog</a>
          </span>
          <span>
            <a href="https://www.twitter.com/nnaemekaxjohn">Twitter</a>
          </span>
        </div>
        <div className="footer-section-columns">
          <span>Powered by Google Gemini</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
