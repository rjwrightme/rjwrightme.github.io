import React from "react";
import Html5 from "../images/svgs/html5.svg";
import Css3 from "../images/svgs/css3.svg";
import Javascript from "../images/svgs/javascript.svg";
import Shopify from "../images/svgs/shopify.svg";
import Gatsby from "../images/svgs/gatsby.svg";
import ReactLogo from "../images/svgs/react-logo.svg";
import Node from "../images/svgs/node.svg";
import Tailwind from "../images/svgs/tailwind.svg";
import Adobe from "../images/svgs/adobe.svg";

const Experience = () => {
  return (
    <section className="max-w-screen-lg mx-auto px-6 md:px-0">
      <h2 className="text-3xl text-gray-700 text-center my-10">Experience</h2>
      <div className="flex flex-wrap items-center justify-between">
        <Html5 className="w-16 md:w-24 m-2 md:m-6" />
        <Css3 className="w-16 md:w-24 m-2 md:m-6" />
        <Javascript className="w-24 md:w-32 m-2 md:m-6" />
        <ReactLogo className="w-24 md:w-36 m-2 md:m-6" />
        <Gatsby className="w-48 md:w-72 m-2 md:m-6" />
        <Node className="w-32 md:w-44 m-2 md:m-6" />
        <Shopify className="w-36 md:w-48 m-2 md:m-6" />
        <Tailwind className="w-52 md:w-80 m-2 md:m-6" />
        <Adobe className="w-24 md:w-32 m-2 md:m-6" />
      </div>
    </section>
  );
};

export default Experience;
