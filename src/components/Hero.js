import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="wrapper">
      <section className="title container">
        <h1>Designer & Full-Stack Developer</h1>
        <h2>I craft engaging experiences for the modern web.</h2>
        <img
          class="profilePic"
          src="Images/rj-illustration.png"
          alt="drawing of RJ"
        />
        <img id="scrollDown" src="Images/arrow.svg" alt="scroll down" />
      </section>
      <div class="codeBG">
        <div>&#47;*</div>
        <div>;</div>
        <div>&lt; &gt;</div>
        <div>( )</div>
        <div>;</div>
        <div>&#123; &#125;</div>
        <div>&lt; &gt;</div>
        <div>*&#47;</div>
        <div>;</div>
        <div>;</div>
      </div>
    </div>
  );
};

export default Hero;
