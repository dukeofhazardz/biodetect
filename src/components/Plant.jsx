import React from "react";
import Plant1 from '../assets/images/plant1.png';

const Plant = () => {
  return (
    <div className="first-plant">
      <img className="plant" src={Plant1} alt="A sea plant" />
      <div className="side-text">
        <h1 className="title">Let's dive into the world of AI</h1>
        <span className="description">
          What specie would you like to discover today?
        </span>
      </div>
    </div>
  );
};

export default Plant;
