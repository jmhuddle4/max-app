// react
import React from 'react';
import {
    Link
} from "react-router-dom";

// css
import '../App.css';

function ProjectLink({
    alt,
    href,
    imgSrc,
    path,
    title
}) {

    const projectImage = () => (
        <div
            className="App-project"
        >
            {title}
            <img
                src={imgSrc}
                alt={alt}
                className="project-image"/>
        </div>
    )

    return href ? (
        <a
            className="App-link"
            href={href}>
            { projectImage() }
        </a>
    ) : (
        <Link
            className="App-link"
            to={path}
        >
            { projectImage() }
        </Link>
    );
}

export default ProjectLink;
