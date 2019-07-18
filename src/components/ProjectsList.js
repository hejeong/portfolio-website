import React from 'react';
import SinatraTextbooks from '../assets/sinatra-college-textbooks.png';
import RunnersWeekly from '../assets/runners-weekly.png';

import ProjectCard from './ProjectCard.js';
const ProjectsList = () => {
    return <div>
       <div className="card">
        <img src={ SinatraTextbooks } alt="college-textbooks-sinatra" className="img"/>
        <div className="tags">
            <p className="ruby-tag tag">Ruby Sinatra</p>
        </div>
    </div>
    <div className="card">
        <img src={ RunnersWeekly } alt="runners-weekly" className="img"/>
        <div className="tags">
            <p className="ruby-tag tag">Ruby on Rails</p>
            <p className="javascript-tag tag">React/Redux</p>
        </div>
    </div>
    </div>
}

export default ProjectsList;