// react
import React from 'react';

// components
import Nav from '../components/Nav.js';
import ProjectLink from '../components/ProjectLink.js';

// assets
import ic1 from "../resources/Lexie/1_Invisible_Cities/portfolio_site_invisible_cities_1.png";
import lac from "../resources/Lexie/LAC.png";

function Lexie() {
    console.log('render project');
    return (
        <div className="App">
            <div className="App-body">

                <div className="App-title">
                    Leigh Alexandra Craig
                </div>
                <div className="App-title">
                    Invisible Cities
                </div>
            </div>

        </div>
    );
}

export default Lexie;
