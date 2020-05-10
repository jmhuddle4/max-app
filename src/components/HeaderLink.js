import React from 'react';
import {
    Link
} from "react-router-dom";

import '../App.css';

function HeaderLink({
    imgSrc,
    isExternal,
    path,
}) {
  return isExternal ? (
          <a
              className="App-link"
              href={path}
              target="_blank"
          >
              <img
                  src={imgSrc}
                  className="App-logo"
                  alt="logo"
              />
          </a>
  ) : (
      <Link
          className="App-link"
          to={path}
      >
          <img
              src={imgSrc}
              className="App-logo"
              alt="logo"
          />
      </Link>
  );
}

export default HeaderLink;
