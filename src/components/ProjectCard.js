import React from 'react';
import SinatraTextbooks from '../assets/sinatra-college-textbooks.png';
const ProjectCard = () => {
    return <div className="card">
        <img src={ SinatraTextbooks } alt="college-textbooks-sinatra" className="img"/>
        <div className="tags">
            <p className="ruby-tag tag">Ruby</p>
        </div>
    </div>
}

export default ProjectCard;