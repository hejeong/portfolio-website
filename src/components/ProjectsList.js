import React from 'react';
import {Link} from 'react-router-dom';
import ProjectCard from './ProjectCard.js';
const ProjectsList = ({projects}) => {
    return projects.map(project=>{
        return <li className="project-list-item" key={project.id}>
            <Link to={'/projects/'+project.id}>
                <ProjectCard project={project} />
            </Link>
        </li>
    })
}

export default ProjectsList;