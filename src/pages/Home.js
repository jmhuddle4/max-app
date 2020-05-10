// react
import React from 'react';

// components
import Nav from '../components/Nav.js';
import ProjectLink from '../components/ProjectLink.js';

// assets
import max from '../resources/max.png';

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
                    My name is Max <br/>
                    I use my gifts to work hard, solve problems, and design solutions. I love computer science and the challenges and creations that come with it.
                </div>
                <div>
                    Projects
                </div>

                <ProjectLink
                    path="/sunrise"
                    title="sunrise"
                />
                <ProjectLink
                    path="/lexie"
                    title="Lexie Craig Design"
                />
                <ProjectLink
                    path="/house"
                    title="House Project"
                />
                <ProjectLink
                    path="/school"
                    title="School Project"
                />

                {/*<div title="Add to Calendar" className="addeventatc">
                    Add to Calendar
                    <span className="start">05/16/2020 08:00 AM</span>
                    <span className="end">05/16/2020 10:00 AM</span>
                    <span className="timezone">America/Los_Angeles</span>
                    <span className="title">Summary of the event</span>
                    <span className="description">Description of the event</span>
                    <span className="location">Location of the event</span>
                </div>*/}
            </div>
        </div>
    );
}

export default Home;
