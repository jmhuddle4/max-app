// react
import React from 'react';

// components
import Nav from '../components/Nav.js';
import ProjectLink from '../components/ProjectLink.js';

// assets
import ic1 from "../resources/Lexie/1_Invisible_Cities/portfolio_site_invisible_cities_1.png";

function Lexie() {
    return (
        <div className="App">
           <Nav />

            <div className="App-body">
                <div className="App-body">
                    lexie craig has many skills <br/> one of them is graphic design <br/> here is her portfolio <br/>
                </div>

                <ProjectLink
                    path="/lexie/invisble-cities"
                    title="Invisible Cities"
                />
                <img src={ic1} height="250px" alt="invis"/>
                <ProjectLink
                    path="/lexie/book-covers"
                    title="Book Covers"
                />
            </div>

        </div>
    );
}

export default Lexie;
