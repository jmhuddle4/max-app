// react
import React from 'react';

// components
import Nav from '../components/Nav.js';
import ProjectLink from '../components/ProjectLink.js';

// assets
import lac from '../resources/Lexie/LAC.png';
import max from '../resources/max.png';
import sun from "../resources/Sunrise/sun.png";

function Home() {
    return (
        <div className="App">

           <Nav />

            <div className="App-body">
                <div>
                    <img
                        alt="profile"
                        height="200px"
                        src={max}
                    />
                </div>

                <div className="App-body">
                    <div>
                        My name is Max <br/>
                        I use my gifts to work hard, solve problems, and design solutions. I love computer science and the challenges and creations that come with it.
                    </div>

                    <div className="App-title">
                        Projects
                    </div>

                    <ProjectLink
                        path="/sunrise"
                        title="sunrise"
                        imgSrc={sun}
                    />
                    <ProjectLink
                        path="/lexie"
                        title="Lexie Craig Design"
                        imgSrc={lac}
                    />

                </div>
            </div>
        </div>
    );
}

export default Home;
