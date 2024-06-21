import React from "react";

const Description = () => {
  const handleDetectNow = () => {
    const element = document.querySelector(".display-section");
    const yOffset = window.pageYOffset + element.getBoundingClientRect().top;
    window.scrollTo({
      top: yOffset,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="description-section wrapper" id="home">
      <div className="body">
        <div className="description-section content">
          <h2 className="text">Your Online Bio Detector . . .</h2>
          <span className="description">
            Leverage the power of AI to provide detailed descriptions of living
            organisms, including plants, animals, and insects.
          </span>
          <div className="links">
            <button className="button" onClick={handleDetectNow}>
              Detect Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
