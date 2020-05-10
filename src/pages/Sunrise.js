// react
import React from 'react';

// components
import Nav from '../components/Nav.js';
import sun from "../resources/Sunrise/sun.png";

function Lexie() {
    return (
        <div className="App">
           <Nav />

            <div className="App-body">
                <img src={sun} height="250px" alt="invis"/>

                <div className="App-body">
                    set your alarm for sunrise
                </div>

                {/*<button className="button"> set alarm </button>*/}

                <div title="Add to Calendar" className="addeventatc">
                    Add to Calendar
                    <span className="start">05/16/2020 08:00 AM</span>
                    <span className="end">05/16/2020 10:00 AM</span>
                    <span className="timezone">America/Los_Angeles</span>
                    <span className="title">Summary of the event</span>
                    <span className="description">Description of the event</span>
                    <span className="location">Location of the event</span>
                </div>

            </div>

        </div>
    );
}

export default Lexie;
