import React from "react";

function ProjectCard(props) {
  return (
    <div className="card flex-item">
      <img src={props.imgUrl} alt="dog image" />
      <h3 className="card-title">{props.title}</h3>
      <p className="card-paragraph">
        {props.description}
      </p>
      <button className="card-button">
        <a href={props.url}>View Project</a>
      </button>
    </div>
  );
}

export default ProjectCard;
