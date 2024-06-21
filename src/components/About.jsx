import React from "react";

const About = () => {
  return (
    <div className="about-section wrapper" id="about">
      <div className="content">
        <p className="text">About</p>
        <p className="title">Unveiling the Natural World</p>
        <span className="description">
          Biodetect is your all-in-one pocket naturalist, powered by
          cutting-edge technology. We leverage the Biodetect API, fueled by
          Google's Gemini Pro Vision AI, to unlock detailed descriptions of the
          living world around you. <br />
          <br />
          <strong>Biodetect empowers you to:</strong>
        </span>
        <ul className="description">
          <li>
            Identify plants, animals, and insects with remarkable accuracy.
          </li>
          <li>
            Learn fascinating details about their characteristics, habitats, and
            behaviors.
          </li>
          <li>
            Deepen your understanding and appreciation of the natural world.
          </li>
        </ul>
        <span className="description">
          Biodetect goes beyond basic identification. With the Biodetect API and
          Google's advanced vision technology, you gain access to a wealth of
          information, right at your fingertips. So, next time you encounter an
          unfamiliar creature or plant, simply use Biodetect to unveil its
          secrets!
        </span>
      </div>
    </div>
  );
};

export default About;
