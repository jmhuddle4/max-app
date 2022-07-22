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

                <div>
                    My name is Max <br/>
                    I use my gifts to work hard, solve problems, and design solutions. <br/> 
                    I love computer science and the challenges and creations that come with it.
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
                <ProjectLink
                    href="https://ekimbreads.com/"
                    title="Ekim Breads"
                    imgSrc="https://img1.wsimg.com/isteam/ip/9aed5fe1-f7f8-4134-86df-951c62c9a169/Color%20PNG.png/:/rs=w:1023,cg:true,m/rs=h:600px/qt=q:95"
                />

                </div>
        </div>
    );
}

export default Home;
