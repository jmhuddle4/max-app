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

            </div>

        </div>
    );
}

export default Lexie;
