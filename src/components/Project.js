import React from "react";

const Project = (props) => {
  return (
    <div className="projectCard">
      <img src={props.img} alt={props.alt} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default Project;
