import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-wrapper">
        <h1>About Book Garden</h1>
        <p>
          This is a full stark React app for uploading and purchasing your
          favorite books.
        </p>
        <p className="bg-dark version">
          <strong>Version: </strong> 1.0.0
        </p>
      </div>
    </div>
  );
};

export default About;
