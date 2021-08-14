import React from "react";

const About = () => {
  return (
    <section id="aboutMe" className="max-w-prose mx-auto px-6 md:px-0">
      <h2 className="text-3xl text-gray-700 text-center mt-16 mb-10">
        Hi, I'm RJ. Nice to meet you.
      </h2>
      <p className="text-lg text-gray-600 font-thin leading-loose">
        I'm a full stack developer with broad experience in web development both
        in creative and technical capacities. I love the challenge of crafting a
        professional design and then switching hats to implement it through
        code.
      </p>
      <a className="text-center" href="Assets/2020-Resume.pdf" target="_blank">
        <button className="border border-gray-800 text-gray-800 hover:text-white hover:bg-gray-800 text-xl px-6 py-3 rounded-full block mx-auto my-8">
          View Resume
        </button>
      </a>

      <hr className="border-t-2" />
    </section>
  );
};

export default About;
