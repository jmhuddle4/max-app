// react
import React from 'react';

// components
import Nav from '../../components/Nav.js';

// assets
import lac from "../../resources/Lexie/LAC.png";
import ProjectLink from "../../components/ProjectLink";

const altText = "project-image";

const Project = (props) => {

    const renderImages = props.data.images.map((image) => {
        return (
            <img alt={altText} src={image.src} />
        )
    });

    return (
        <div className="App">
            <Nav/>

            <div className="App-body">

                <ProjectLink
                    path="/lexie"
                    imgSrc={lac}
                />

                <div className="App-title">
                    Leigh Alexandra Craig
                </div>
                <div className="App-title">
                    { props.data.title }
                </div>

                { renderImages }
            </div>

        </div>
    )
}

export default Project;
