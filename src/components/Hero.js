import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import ScrollArrow from "../images/svgs/scroll-arrow.svg";
import Curve from "../images/svgs/curve.svg";
import "../styles/hero.css";

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "rj-illustration.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  const profile = getImage(data.profile);

  return (
    <>
      <section className="hero wrapper text-white text-center">
        <div className="relative z-10 p-4 md:p-0">
          <h1 className="text-4xl md:text-4xl leading-normal md:leading-loose pt-4 md:pt-8">
            Designer &amp; Full-Stack Developer
          </h1>
          <h2 className="text-xl font-normal mt-4 opacity-70">
            I craft engaging experiences for the modern web.
          </h2>
          <GatsbyImage
            image={profile}
            alt="profile drawing of RJ"
            className="w-48 md:w-64 mt-6 md:my-20"
          />
        </div>
        <div className="codeBG">
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
        <ScrollArrow id="scrollDown" />
      </section>
      <Curve className="curve -mt-1" />
    </>
  );
};

export default Hero;
