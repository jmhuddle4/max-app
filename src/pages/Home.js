import React from 'react';
import '../App.css';
import HeaderLink from '../containers/HeaderLink.js';
import ProjectContainer from '../containers/ProjectContainer.js';
import max from '../resources/max.png';
import ic1 from '../resources/Lexie/1_Invisible_Cities/portfolio_site_invisible_cities_1.png';

function Home() {
    return (
        <div className="App">
            <head title="Max">
                <script type="text/javascript" src="https://addevent.com/libs/atc/1.6.1/atc.min.js" async defer></script>
            </head>
            <header className="App-header">
                <HeaderLink
                    imgLink="https://www.linkedin.com/in/maxhuddleston"
                    imgSrc="http://image.flaticon.com/icons/png/512/34/34227.png"
                />
                <HeaderLink
                    imgLink="http://jmhuddle4.github.io/max-app"
                    imgSrc="https://68.media.tumblr.com/36c4b09ac60c83879df1bc1d7640d8d7/tumblr_oc12p9k3nA1uzg32xo1_400.png"
                />
                <HeaderLink
                    imgLink="https://github.com/jmhuddle4"
                    imgSrc="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
                />
            </header>

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
                <ProjectContainer
                    link=""
                    title="School Project"
                />
                <ProjectContainer
                    link=""
                    title="Side Project"
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
                <ProjectContainer
                    link=""
                    title="House Project"
                />
                <ProjectContainer
                    link=""
                    title="Lexie Craig Design"
                />
                <img src={ic1} alt="invis"/>

            </div>
        </div>
    );
}

export default Home;
