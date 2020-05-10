// react
import React from 'react';
import {
    Link
} from "react-router-dom";

// css
import '../App.css';

function ProjectLink({
    alt,
    imgSrc,
    path,
    title
}) {
  return (
          <Link
              className="App-link"
              to={path}
          >
              <div
                  className="App-project"
              >
                  {title}
                  <img src={imgSrc} alt={alt} className="project-image"/>
              </div>
          </Link>
  );
}

export default ProjectLink;
