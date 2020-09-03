// react
import React from 'react';

// components
import Nav from '../components/Nav.js';
import ProjectLink from '../components/ProjectLink.js';

// assets
import ic1 from "../resources/Lexie/1_Invisible_Cities/portfolio_site_invisible_cities_1.png";
import bc1 from "../resources/Lexie/2_Bookcovers/1_portfolio_site_bookcovers_1.png";
import lac from "../resources/Lexie/LAC.png";

function Lexie() {
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
                    path="/invisible-cities"
                    title="Invisible Cities"
                    imgSrc={ic1}
                />
                <ProjectLink
                    path="/book-covers"
                    title="Book Covers"
                    imgSrc={bc1}
                />
            </div>

        </div>
    );
}

export default Lexie;
