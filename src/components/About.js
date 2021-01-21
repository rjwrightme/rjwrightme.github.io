import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section id="aboutMe" className="container">
      <h2>Hi, I'm RJ. Nice to meet you.</h2>
      <p>
        I'm a full stack developer with broad experience in web development both
        in creative and technical capacities. I love the challenge of crafting a
        professional design and then switching hats to implement it through
        code.
      </p>
      <a className="button" href="Assets/2020-Resume.pdf" target="_blank">
        <div className="btn btn-info">View Resume</div>
      </a>

      <hr />
    </section>
  );
};

export default About;
