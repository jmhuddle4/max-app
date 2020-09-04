// react
import React from 'react';

// components
import Nav from '../components/Nav.js';
import ProjectLink from '../components/ProjectLink.js';

// assets
import lac from "../resources/Lexie/LAC.png";
import ic1 from "../resources/Lexie/1_Invisible_Cities/portfolio_site_invisible_cities_1.png";
import bc1 from "../resources/Lexie/2_Bookcovers/1_portfolio_site_bookcovers_1.png";
import wn1 from "../resources/Lexie/3_Wald Nektar/portfolio_site_wald_nektar_1.png";
import ll1 from "../resources/Lexie/4_LA London/porftfolio_site_la_london_1.png";
import spy1 from "../resources/Lexie/7_Spyder/portfolio_site_spyder_1-01.png";
import d1 from "../resources/Lexie/8_Discovery Communications/portfolio_site_discovery_1.png";
import k1 from "../resources/Lexie/9_Kolohaus/Kolohaus_Logo-05.png";
import pv1 from "../resources/Lexie/10_Proteggere Venice/portfolio_site_proteggere_venice_1-15.png";
import sage1 from "../resources/Lexie/11_Sagely/portfolio_site_sagely_app_1_Logo.png";
import pb1 from "../resources/Lexie/14_Peace Bridge/portfolio_site_bridge_1.png";
import td1 from "../resources/Lexie/15_Tape Dispenser/portfolio_site_tape_dispenser_1.png";
import cs1 from "../resources/Lexie/16_Contact Solution/portfolio_site_optifree_1.png";
import ff1 from "../resources/Lexie/17_Fruity Feels/portfolio_site_fruity_feels_1.png";

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
                <ProjectLink
                    path="/wald-nektar"
                    title="Wald Nektar"
                    imgSrc={wn1}
                />
                <ProjectLink
                    path="/la-london"
                    title="LA London"
                    imgSrc={ll1}
                />
                <ProjectLink
                    path="/spyder"
                    title="Spyder"
                    imgSrc={spy1}
                />
                <ProjectLink
                    path="/discovery"
                    title="Discover Communications"
                    imgSrc={d1}
                />
                <ProjectLink
                    path="/kolohaus"
                    title="Kolohaus"
                    imgSrc={k1}
                />
                <ProjectLink
                    path="/venice"
                    title="Proteggere Venice"
                    imgSrc={pv1}
                />
                <ProjectLink
                    path="/sagely"
                    title="Sagely"
                    imgSrc={sage1}
                />
                <ProjectLink
                    path="/peace-bridge"
                    title="Peace Bridge"
                    imgSrc={pb1}
                />
                <ProjectLink
                    path="/tape"
                    title="Tape Dispenser"
                    imgSrc={td1}
                />
                <ProjectLink
                    path="/contact-solution"
                    title="Contact Solution"
                    imgSrc={cs1}
                />
                <ProjectLink
                    path="/fruity-feels"
                    title="Fruity Feels"
                    imgSrc={ff1}
                />
            </div>

        </div>
    );
}

export default Lexie;
