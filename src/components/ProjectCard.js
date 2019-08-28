import React from 'react';
const ProjectCard = ({project}) => {
    return <div className="card">
        <img src={ project.cover_image } alt="college-textbooks-sinatra" className="img"/>
        <div className="card-text">
            <h4 className="project-description roboto">{project.title}</h4>
            <p className="thin-roboto">{project.description}</p>
        </div>
    </div>
}

export default ProjectCard;