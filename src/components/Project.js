import React from "react";

const Project = (props) => {
  return (
    <div className="projectCard">
      <img src={props.img} alt={props.alt} />
      <div className="cardText">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <a
          className="button"
          href={props.href}
          target="_blank"
          rel="noreferrer"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Project;
