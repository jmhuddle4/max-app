// react
import React from 'react';

// components
import Nav from '../components/Nav.js';
import sun from "../resources/Sunrise/sun.png";

function Lexie() {

    function renderBookmarkText() {
        if (!window.matchMedia('(display-mode: standalone)').matches) {
            return (
                <div>
                    + add this web app to your home screen
                </div>
            )
        }
    }

    return (
        <div className="App">
           <Nav />

            <div className="App-body">
                <img src={sun} height="250px" alt="sun"/>

                <div>
                    set your alarm for sunrise
                </div>

                {/*<button className="button"> set alarm </button>*/}

                <div title="Add to Calendar" className="addeventatc button">
                    Add to Calendar
                    <span className="start">05/16/2020 06:39 AM</span>
                    <span className="end">05/16/2020 7:01 AM</span>
                    <span className="timezone">America/New_York</span>
                    <span className="title">Sunrise</span>
                    <span className="description">rise & shine</span>
                </div>

                { renderBookmarkText() }
            </div>

        </div>
    );
}

export default Lexie;
