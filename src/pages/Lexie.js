// react
import React from 'react';
import {
    Route,
    Switch,
} from "react-router-dom";

// components
import Nav from '../components/Nav.js';
import ProjectLink from '../components/ProjectLink.js';

// pages
import Project from '../pages/Project.js';

// assets
import ic1 from "../resources/Lexie/1_Invisible_Cities/portfolio_site_invisible_cities_1.png";
import lac from "../resources/Lexie/LAC.png";

function Lexie() {
    console.log('render lexie');

    return (
        <div className="App">
           <Nav />

            <div className="App-body">

                <div>
                    <img
                        alt="profile"
                        height="200px"
                        src={lac}
                    />
                </div>

                <div className="App-title">
                    Leigh Alexandra Craig
                </div>
                <div className="App-title">
                    Portfolio
                </div>

                <ProjectLink
                    path="lexie/invisible-cities"
                    title="Invisible Cities"
                    imgSrc={ic1}
                />
                <ProjectLink
                    path="/lexie/book-covers"
                    title="Book Covers"
                    imgSrc={ic1}
                />
            </div>

            <Switch>
                <Route path={`/lexie/:topicId`}  component={Project}/>
            </Switch>

        </div>
    );
}

export default Lexie;
