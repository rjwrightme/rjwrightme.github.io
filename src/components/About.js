import React from "react";

const About = () => {
  return (
    <section id="aboutMe" class="container">
      <h2>Hi, I'm RJ. Nice to meet you.</h2>
      <div class="col-md-6">
        <p>
          I'm a full stack developer with broad experience in web development
          both in creative and technical capacities. I love the challenge of
          crafting a professional design and then switching hats to implement it
          through code.
        </p>
        <a href="Assets/2020-Resume.pdf" target="_blank">
          <div class="btn btn-info">View Resume</div>
        </a>
      </div>

      <hr />
      <h2>Experience</h2>
      <div class="row">
        <div class="col-6 col-md-2">
          <img src="Assets/Images/html.png" alt="" />
        </div>
        <div class="col-6 col-md-2">
          <img src="Assets/Images/sass.png" alt="" />
        </div>
        <div class="col-6 col-md-2">
          <img src="Assets/Images/javascript.png" alt="" />
        </div>
        <div class="col-6 col-md-2">
          <img src="Assets/Images/shopify.png" alt="" />
        </div>
        <div class="col-6 col-md-2">
          <img src="Assets/Images/wordpress.png" alt="" />
        </div>
        <div class="col-6 col-md-2">
          <img src="Assets/Images/cc.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
