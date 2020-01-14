import React from 'react';
import '../App.css';

function HeaderLink({
    imgLink,
    imgSrc
}) {
  return (
          <a
              className="App-link"
              href={imgLink}
          >
              <img
                  src={imgSrc}
                  className="App-logo"
                  alt="logo"
              />
          </a>
  );
}

export default HeaderLink;
