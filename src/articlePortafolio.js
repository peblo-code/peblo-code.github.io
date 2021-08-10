import React from 'react';
import './articlePortafolio.css';

function ArticlePortafolio({project_title, project_name, project_date, project_url, project_description, project_image, project_image_descripion}) {
    return (
    <article className="project">
        <div className="project-details">
            <h3 className="project-title">{project_title}</h3>
            <h6 className="project-name">{project_name}</h6>
            <p className="project-date"><small><strong>Fecha:</strong> {project_date}</small></p>
            <p className="project-url"><small><strong>Puedes verlo en:</strong> <a href={project_url}>{project_url}</a></small></p>
            <p className="project-description">{project_description}</p>
        </div>
        <figure className="project-imageContainer">
            <img className="project-image" src={project_image} alt={project_image_descripion} width="500"/> 
        </figure>
    </article> 
    )
}

export default ArticlePortafolio;