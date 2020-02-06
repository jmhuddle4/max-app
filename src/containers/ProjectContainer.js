import React from 'react';
import '../App.css';

function ProjectContainer({
    link,
    title
}) {
  return (
          <a
              className="App-link"
              href={link}
          >
              <div
                  className="App-project"
              >
                  {title}
              </div>
          </a>
  );
}

export default ProjectContainer;
