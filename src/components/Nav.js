// react
import React from 'react';

// css
import '../App.css';

// components
import HeaderLink from "./HeaderLink";

function Nav() {
  return (
      <header className="App-header">
          <HeaderLink
              path="https://www.linkedin.com/in/maxhuddleston"
              imgSrc="http://image.flaticon.com/icons/png/512/34/34227.png"
              isExternal={true}
          />
          <HeaderLink
              path="/"
              imgSrc="https://68.media.tumblr.com/36c4b09ac60c83879df1bc1d7640d8d7/tumblr_oc12p9k3nA1uzg32xo1_400.png"
          />
          <HeaderLink
              path="https://github.com/jmhuddle4"
              imgSrc="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
              isExternal={true}
          />
      </header>
  );
}

export default Nav;
