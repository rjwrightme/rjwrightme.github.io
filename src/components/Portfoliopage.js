import React from "react";
import Project from "./Project";
import "../styles/Project.css";

const ProjectPage = () => {
  return (
    <div className="container">
      <h1>Portfolio</h1>
      <p className="portfolioDesc">
        Here's a list of some projects I've worked on recently.
      </p>
      <div className="projects">
        <Project
          img="/Images/natures-sunshine.jpg"
          alt="Nature's Sunshine bottle"
          title="Nature's Sunshine Website"
          description="I had the opportunity to redesign and code a site in Shopify to fit the new branding of Nature's Sunshine"
          href="https://www.naturessunshine.com.au/"
        ></Project>
        <Project
          img="/Images/chatterbox-image.jpg"
          alt="Chatterbox logo"
          title="Chatterbox Instant Messaging App"
          description="A fun hobby project using Socket.IO that allows users to create an account, join a chatroom and message back and forth."
          href="https://chatterbox-project-07.herokuapp.com/"
        ></Project>
        <Project
          img="/Images/weather-image.jpg"
          alt="Sydney weather"
          title="Weather App"
          description="Mobile first weather app using the Open Weather API and SVG animations."
          href="https://rjwrightme.github.io/weather-forecast/"
        ></Project>
        <Project
          img="/Images/employee-directory.jpg"
          alt="List of employees"
          title="Employee Directory"
          description="A React app with search capabilities to quickly filter through large lists of employees."
          href="https://rjwrightme.github.io/employee-directory/"
        ></Project>
        <Project
          img="/Images/calendar-image.jpg"
          alt="Day view calendar"
          title="Calendar App"
          description="A simple day view calendar that allows users to colour code their entries."
          href="https://rjwrightme.github.io/DayPlanner/"
        ></Project>
        <Project
          img="/Images/eat-da-burger.jpg"
          alt="burger site"
          title="Eat Da Burger"
          description="Node, Express, MySQL and handlebars app that allows users to place an order for a burger and then 'eat' it."
          href="https://fathomless-scrubland-94840.herokuapp.com/"
        ></Project>
      </div>
    </div>
  );
};

export default ProjectPage;
