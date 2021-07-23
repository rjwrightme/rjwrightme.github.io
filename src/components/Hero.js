import React from "react";
import ProfilePic from "../images/rj-illustration.png";
import ScrollArrow from "../images/svgs/scroll-arrow.svg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section>
      <div>
        <h1>Designer &amp; Full-Stack Developer</h1>
        <h2>I craft engaging experiences for the modern web.</h2>
        <ProfilePic />
        <ScrollArrow />
      </div>
      <div>
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
    </section>
  );
};

export default Hero;
