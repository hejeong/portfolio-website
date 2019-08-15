import React, {Component} from 'react';
import ProjectsList from '../components/ProjectsList';
class ProjectsContainer extends Component {
    
    render() {
        return(
            <div>
                <a href="/projects/new">New Project</a>
                <ProjectsList />
            </div>
        )
    }
}

export default ProjectsContainer;